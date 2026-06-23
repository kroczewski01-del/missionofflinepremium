import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactData = {
  parentName: string;
  phone: string;
  email: string;
  message: string;
  consent: boolean;
  website: string;
  startedAt: number;
};

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const CONTACT_TO_EMAIL = "biuro@akademiaprzygody.com";
const rateLimitStore = new Map<string, RateLimitEntry>();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneDigitsPattern = /\d/g;
const rateLimitWindowMs = 10 * 60 * 1000;
const maxRequestsPerWindow = 5;
const minimumSubmitTimeMs = 1500;
const maximumSubmitTimeMs = 2 * 60 * 60 * 1000;

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#039;",
      '"': "&quot;",
    };

    return entities[character] || character;
  });
}

function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return (
    forwarded ||
    request.headers.get("x-real-ip") ||
    request.headers.get("x-vercel-forwarded-for") ||
    "unknown"
  );
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + rateLimitWindowMs });
    return false;
  }

  if (current.count >= maxRequestsPerWindow) {
    return true;
  }

  current.count += 1;
  return false;
}

function normalize(input: Record<string, unknown>): ContactData {
  return {
    parentName: clean(input.parentName, 120),
    phone: clean(input.phone, 32),
    email: clean(input.email, 160).toLowerCase(),
    message: clean(input.message, 2000),
    consent: input.consent === "yes",
    website: clean(input.website, 160),
    startedAt: Number(input.startedAt || 0),
  };
}

function validate(data: ContactData) {
  const errors: string[] = [];
  const digitCount = data.phone.match(phoneDigitsPattern)?.length || 0;
  const elapsed = Date.now() - data.startedAt;

  if (data.parentName.length < 3) errors.push("Podaj imię i nazwisko rodzica.");
  if (digitCount < 7 || digitCount > 15) errors.push("Podaj poprawny numer telefonu.");
  if (!emailPattern.test(data.email)) errors.push("Podaj poprawny adres e-mail.");
  if (data.message.length < 10) errors.push("Wiadomość powinna mieć co najmniej 10 znaków.");
  if (!data.consent) errors.push("Zgoda na kontakt jest wymagana.");
  if (!Number.isFinite(data.startedAt) || elapsed < minimumSubmitTimeMs || elapsed > maximumSubmitTimeMs) {
    errors.push("Spróbuj wysłać formularz ponownie za chwilę.");
  }

  return errors;
}

function buildEmail(data: ContactData) {
  const rows: [string, string][] = [
    ["Rodzic", data.parentName],
    ["Telefon", data.phone],
    ["E-mail", data.email],
    ["Wiadomość", data.message],
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><th align="left" style="padding:8px 12px;border-bottom:1px solid #e6ddcf;color:#2d3136">${escapeHtml(
          label,
        )}</th><td style="padding:8px 12px;border-bottom:1px solid #e6ddcf;color:#2d3136">${escapeHtml(
          value,
        ).replace(/\n/g, "<br />")}</td></tr>`,
    )
    .join("");

  const text = [
    "Nowa wiadomość z formularza Mission Offline",
    "",
    `Rodzic: ${data.parentName}`,
    `Telefon: ${data.phone}`,
    `E-mail: ${data.email}`,
    "",
    "Wiadomość:",
    data.message,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#2d3136">
      <h1 style="margin:0 0 16px;color:#2d3136">Nowa wiadomość z formularza Mission Offline</h1>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:680px">
        ${tableRows}
      </table>
    </div>
  `;

  return { html, text };
}

export async function POST(request: Request) {
  try {
    const input = (await request.json()) as Record<string, unknown>;
    const data = normalize(input);

    if (data.website) {
      return NextResponse.json({ ok: true });
    }

    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { message: "Wysłano zbyt wiele wiadomości. Spróbuj ponownie za kilka minut." },
        { status: 429 },
      );
    }

    const errors = validate(data);
    if (errors.length > 0) {
      return NextResponse.json({ message: errors[0] }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL || CONTACT_TO_EMAIL;

    if (!apiKey || !from) {
      return NextResponse.json(
        { message: "Formularz wymaga konfiguracji wysyłki. Napisz na biuro@akademiaprzygody.com." },
        { status: 503 },
      );
    }

    const { html, text } = buildEmail(data);
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: `Nowa wiadomość Mission Offline — ${data.parentName}`,
        text,
        html,
      }),
    });

    if (!resendResponse.ok) {
      console.error("Resend email failed", await resendResponse.text());
      return NextResponse.json(
        { message: "Nie udało się wysłać wiadomości. Zadzwoń pod numer 501 568 850." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form failed", error);
    return NextResponse.json(
      { message: "Nie udało się wysłać formularza. Zadzwoń pod numer 501 568 850." },
      { status: 500 },
    );
  }
}

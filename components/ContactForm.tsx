"use client";

import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { Icon } from "@/components/Icons";

type Status = "idle" | "sending" | "success" | "error";
type Errors = Partial<Record<"parentName" | "phone" | "email" | "message" | "consent", string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneDigitsPattern = /\d/g;

function validate(data: Record<string, FormDataEntryValue>): Errors {
  const errors: Errors = {};
  const parentName = String(data.parentName || "").trim();
  const phone = String(data.phone || "").trim();
  const email = String(data.email || "").trim();
  const message = String(data.message || "").trim();
  const digitCount = phone.match(phoneDigitsPattern)?.length || 0;

  if (parentName.length < 3) {
    errors.parentName = "Podaj imię i nazwisko rodzica.";
  }

  if (digitCount < 7 || digitCount > 15) {
    errors.phone = "Podaj poprawny numer telefonu.";
  }

  if (!emailPattern.test(email)) {
    errors.email = "Podaj poprawny adres e-mail.";
  }

  if (message.length < 10) {
    errors.message = "Napisz krótką wiadomość, żebym wiedział, czego dotyczy kontakt.";
  }

  if (String(data.consent || "") !== "yes") {
    errors.consent = "Zgoda jest potrzebna, żebym mógł odpowiedzieć na zgłoszenie.";
  }

  return errors;
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const startedAtRef = useRef(0);

  function markStarted() {
    if (!startedAtRef.current) {
      startedAtRef.current = Date.now();
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    if (!startedAtRef.current) {
      startedAtRef.current = Date.now() - 3000;
    }
    data.startedAt = String(startedAtRef.current);
    const validationErrors = validate(data);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("error");
      setMessage("Sprawdź zaznaczone pola i spróbuj ponownie.");
      return;
    }

    setErrors({});
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Nie udało się wysłać wiadomości.");
      }

      setStatus("success");
      setMessage("Dziękujemy za wiadomość. Odpowiemy w ciągu 24 godzin.");
      form.reset();
      startedAtRef.current = Date.now();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Wystąpił błąd. Spróbuj ponownie lub skontaktuj się z nami telefonicznie.",
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      onFocusCapture={markStarted}
      onPointerDownCapture={markStarted}
      noValidate
      className="rounded-lg border border-line bg-white p-5 text-ink shadow-[0_20px_55px_rgba(45,49,54,.08)] md:p-8"
    >
      <div className="mb-7 border-b border-line pb-5">
        <p className="text-xl font-bold text-charcoal">Dane kontaktowe</p>
        <p className="mt-1 text-sm leading-6 text-ink/80">
          Wszystkie pola są wymagane. Wiadomość trafi na biuro@akademiaprzygody.com.
        </p>
      </div>

      <input
        className="hidden"
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <div className="grid gap-5 md:grid-cols-2">
        <label className="text-sm font-bold text-charcoal md:col-span-2">
          Imię i nazwisko rodzica
          <input
            className="field mt-2"
            name="parentName"
            autoComplete="name"
            aria-invalid={Boolean(errors.parentName)}
            aria-describedby={errors.parentName ? "parentName-error" : undefined}
            minLength={3}
            maxLength={120}
            required
          />
          {errors.parentName && (
            <span id="parentName-error" className="mt-2 block text-sm font-semibold text-red-700">
              {errors.parentName}
            </span>
          )}
        </label>

        <label className="text-sm font-bold text-charcoal">
          Numer telefonu
          <input
            className="field mt-2"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            maxLength={32}
            required
          />
          {errors.phone && (
            <span id="phone-error" className="mt-2 block text-sm font-semibold text-red-700">
              {errors.phone}
            </span>
          )}
        </label>

        <label className="text-sm font-bold text-charcoal">
          Adres e-mail
          <input
            className="field mt-2"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            maxLength={160}
            required
          />
          {errors.email && (
            <span id="email-error" className="mt-2 block text-sm font-semibold text-red-700">
              {errors.email}
            </span>
          )}
        </label>

        <label className="text-sm font-bold text-charcoal md:col-span-2">
          Wiadomość
          <textarea
            className="field mt-2 min-h-36 resize-y"
            name="message"
            placeholder="Napisz, jaki termin Cię interesuje albo o co chcesz zapytać."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            minLength={10}
            maxLength={2000}
            required
          />
          {errors.message && (
            <span id="message-error" className="mt-2 block text-sm font-semibold text-red-700">
              {errors.message}
            </span>
          )}
        </label>

        <label className="flex items-start gap-3 text-sm leading-6 text-ink md:col-span-2">
          <input className="mt-1 size-5 shrink-0 accent-orange" name="consent" type="checkbox" value="yes" required />
          <span>
            Wyrażam zgodę na kontakt w sprawie wiadomości i zapoznałem(-am) się z{" "}
            <Link
              href="/polityka-prywatnosci"
              className="font-bold text-charcoal underline decoration-orange decoration-2 underline-offset-4"
            >
              polityką prywatności
            </Link>
            .
            {errors.consent && (
              <span id="consent-error" className="mt-2 block font-semibold text-red-700">
                {errors.consent}
              </span>
            )}
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="button-primary mt-7 inline-flex w-full items-center justify-center gap-3 px-6 py-4 font-bold disabled:cursor-wait disabled:opacity-65"
      >
        {status === "sending" ? "Wysyłanie…" : "Sprawdź dostępność miejsca dla swojego dziecka"}
        {status !== "sending" && <Icon name="arrow" className="size-5" />}
      </button>

      {message && (
        <p
          role="status"
          className={`mt-5 rounded-md border px-4 py-3 text-sm leading-6 ${
            status === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-800"
              : "border-red-200 bg-red-50 text-red-800"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}

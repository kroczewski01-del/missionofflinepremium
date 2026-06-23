import Link from "next/link";

export const metadata = { title: "Polityka prywatności | Mission Offline" };

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-paper py-14 text-ink md:py-20">
      <article className="container-site max-w-3xl">
        <Link href="/" className="font-bold text-orange">
          ← Wróć na stronę
        </Link>
        <p className="mt-14 text-xs font-bold uppercase tracking-[.12em] text-brass">Mission Offline</p>
        <h1 className="display-title mt-4 text-4xl md:text-6xl">Polityka prywatności</h1>
        <div className="mt-10 space-y-9 border-t border-line pt-9 leading-7 text-ink/75">
          <section>
            <h2 className="text-xl font-bold text-charcoal">Administrator i kontakt</h2>
            <p className="mt-3">
              Administratorem danych przekazywanych przez formularz jest organizator projektu Mission
              Offline. Kontakt:{" "}
              <a
                className="font-bold text-charcoal underline decoration-orange underline-offset-4"
                href="mailto:biuro@akademiaprzygody.com"
              >
                biuro@akademiaprzygody.com
              </a>
              .
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-charcoal">Cel przetwarzania danych</h2>
            <p className="mt-3">
              Dane z formularza wykorzystujemy do obsługi zgłoszenia, kontaktu z rodzicem lub opiekunem
              oraz organizacji warsztatów. Nie sprzedajemy danych i nie wykorzystujemy ich do niezwiązanych
              celów.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-charcoal">Obsługa wiadomości</h2>
            <p className="mt-3">
              Formularz wysyła wiadomości przez usługę Resend. Dane podane w formularzu są przekazywane
              wyłącznie w celu doręczenia wiadomości na adres kontaktowy Mission Offline.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-charcoal">Twoje prawa</h2>
            <p className="mt-3">
              Podanie danych jest dobrowolne, ale niezbędne do obsługi zgłoszenia. Możesz poprosić o dostęp,
              poprawienie lub usunięcie danych, kontaktując się z nami e-mailowo.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}

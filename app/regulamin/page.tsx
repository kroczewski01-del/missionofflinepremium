import Link from "next/link";

export const metadata = { title: "Regulamin | Mission Offline" };

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-paper py-14 text-ink md:py-20">
      <article className="container-site max-w-3xl">
        <Link href="/" className="font-bold text-orange">
          ← Wróć na stronę
        </Link>
        <p className="mt-14 text-xs font-bold uppercase tracking-[.12em] text-brass">Mission Offline</p>
        <h1 className="display-title mt-4 text-4xl md:text-6xl">Regulamin</h1>
        <div className="mt-10 space-y-9 border-t border-line pt-9 leading-7 text-ink/75">
          <section>
            <h2 className="text-xl font-bold text-charcoal">Zgłoszenie udziału</h2>
            <p className="mt-3">
              Wysłanie formularza jest zgłoszeniem zainteresowania udziałem w warsztatach. Rezerwacja
              miejsca staje się skuteczna po potwierdzeniu dostępności przez organizatora.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-charcoal">Organizacja warsztatów</h2>
            <p className="mt-3">
              Program jest przeznaczony dla dzieci w wieku 6–13 lat i odbywa się w godzinach 8:00–16:00.
              Szczegóły wybranego terminu oraz informacje organizacyjne przekazujemy rodzicowi przed
              potwierdzeniem udziału.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-charcoal">Kontakt</h2>
            <p className="mt-3">
              W sprawach dotyczących zapisów i uczestnictwa skontaktuj się z nami pod numerem{" "}
              <a className="font-bold text-charcoal" href="tel:+48501568850">
                501 568 850
              </a>{" "}
              lub przez adres{" "}
              <a className="font-bold text-charcoal" href="mailto:biuro@akademiaprzygody.com">
                biuro@akademiaprzygody.com
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}

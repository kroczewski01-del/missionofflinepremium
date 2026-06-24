import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { Header } from "@/components/Header";
import { Icon, type IconName } from "@/components/Icons";

const heroImage =
  "https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg?auto=compress&cs=tinysrgb&w=2000";

const benefits: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "screen",
    title: "Dzień naprawdę offline",
    text: "Osiem godzin pełnych ruchu, rozmów i działań, które wciągają mocniej niż kolejny ekran.",
  },
  {
    icon: "motion",
    title: "Ruch z dobrym pomysłem",
    text: "Gry sportowe i zadania terenowe rozwijają sprawność bez presji wyniku i monotonnych ćwiczeń.",
  },
  {
    icon: "team",
    title: "Relacje i samodzielność",
    text: "Dzieci podejmują decyzje, dzielą się rolami i odkrywają, jak wiele potrafią zrobić razem.",
  },
  {
    icon: "language",
    title: "Angielski w działaniu",
    text: "Nowe słowa pojawiają się naturalnie w komendach, zabawach i codziennych sytuacjach.",
  },
];

const infoStrip: { icon: IconName; value: string; label: string }[] = [
  { icon: "age", value: "6-13 lat", label: "Grupy 6-9 i 10-13" },
  { icon: "clock", value: "8:00-16:00", label: "Pełny dzień" },
  { icon: "language", value: "Angielski", label: "W praktyce" },
  { icon: "pin", value: "Bemowo", label: "ul. Wrocławska 25" },
  { icon: "meal", value: "Posiłek", label: "Wliczony w cenę" },
];

const dayThemes: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "compass",
    title: "Tajemnica Zaginionej Mapy",
    text: "Dzieci zdobywają kolejne wskazówki, rozwiązują zagadki i wykonują zadania zespołowe, aby odkryć finałowe rozwiązanie misji.",
  },
  {
    icon: "survival",
    title: "Wyprawa przez Dziki Ląd",
    text: "Uczestnicy przechodzą przez serię wyzwań ruchowych, torów przeszkód i zadań wymagających sprytu, odwagi oraz dobrej współpracy w grupie.",
  },
  {
    icon: "build",
    title: "Akademia Konstruktorów",
    text: "Dzieci budują modele, makiety i konstrukcje potrzebne do wykonania misji dnia. Blok konstrukcyjny łączy się z ruchem, zadaniami logicznymi i prostym angielskim słownictwem.",
  },
  {
    icon: "agent",
    title: "Tajna Baza Agentów",
    text: "Dzieci działają jak zespół agentów: rozszyfrowują komunikaty, wykonują zadania specjalne, rozwiązują łamigłówki i wspólnie dążą do ukończenia finałowej misji.",
  },
];

const facts: { icon: IconName; label: string; value: string; note: string }[] = [
  { icon: "clock", label: "Godziny", value: "8:00-16:00", note: "Pełny dzień aktywności" },
  { icon: "price", label: "Cena", value: "199 zł za dzień", note: "Posiłek wliczony w cenę" },
  { icon: "age", label: "Wiek", value: "6-13 lat", note: "Grupy 6-9 i 10-13" },
  { icon: "calendar", label: "Zapisy", value: "1 lub więcej dni", note: "Elastyczny wybór terminów" },
];

const location = {
  district: "Bemowo",
  address: "ul. Wrocławska 25",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=ul.%20Wroc%C5%82awska%2025%2C%20Warszawa",
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <section
          id="start"
          className="relative flex min-h-[650px] items-end overflow-hidden bg-charcoal pt-20 text-white md:min-h-[620px] md:items-center"
        >
          <Image
            src={heroImage}
            alt="Dzieci wspólnie pokonujące sportowe wyzwanie na świeżym powietrzu"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[58%_center]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,28,29,.94)_0%,rgba(24,28,29,.78)_45%,rgba(24,28,29,.22)_78%),linear-gradient(0deg,rgba(24,28,29,.78)_0%,transparent_50%)]" />
          <div className="container-site relative z-10 pb-10 pt-24 md:py-20">
            <div className="max-w-[46rem]">
              <div className="mb-7 inline-flex items-center gap-3 border border-white/25 bg-black/20 px-4 py-2 text-xs font-bold uppercase tracking-[.12em] backdrop-blur-md">
                <span className="size-2 rounded-full bg-orange" />
                Zapisy na wakacje 2026
              </div>
              <p className="text-sm font-bold uppercase tracking-[.16em] text-brass-light">
                Mission Offline <span className="mx-2 text-white/50">/</span> Akademia Przygody
              </p>
              <h1 className="mt-5 font-display text-4xl font-bold leading-[1.02] text-white sm:text-5xl md:text-7xl">
                Wakacje pełne przygód. Bez ekranów.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
                Całodniowe warsztaty dla dzieci 6-13 lat: ruch, twórcze misje, współpraca i angielski używany w
                praktyce.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#zapis"
                  className="button-primary inline-flex items-center justify-center gap-3 px-6 py-4 font-bold"
                >
                  Zapisz dziecko
                  <Icon name="arrow" className="size-5" />
                </a>
                <a
                  href="#program"
                  className="inline-flex items-center justify-center border border-white/35 bg-white/10 px-6 py-4 font-bold text-white backdrop-blur-md transition hover:bg-white/15"
                >
                  Zobacz program
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-line bg-paper" aria-label="Najważniejsze informacje">
          <div className="container-site grid grid-cols-2 divide-x divide-y divide-line md:grid-cols-5 md:divide-y-0">
            {infoStrip.map((item) => (
              <div key={item.value} className="flex min-h-28 items-center gap-4 px-4 py-6 md:px-7">
                <Icon name={item.icon} className="size-6 shrink-0 text-brass" />
                <div>
                  <strong className="block text-base text-charcoal">{item.value}</strong>
                  <span className="mt-1 block text-xs text-ink/60">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="dlaczego" className="bg-forest py-20 text-white md:py-28">
          <div className="container-site">
            <div className="grid gap-7 lg:grid-cols-[1.1fr_.7fr] lg:items-end">
              <div>
                <span className="eyebrow eyebrow-light">Dlaczego Mission Offline</span>
                <h2 className="display-title display-title-light mt-5 max-w-4xl text-4xl md:text-6xl">
                  Dzieci potrzebują doświadczeń, które dzieją się naprawdę.
                </h2>
              </div>
              <p className="max-w-xl text-lg leading-8 text-white/82 lg:justify-self-end">
                Tworzymy wakacyjny dzień z wyraźnym planem, dobrą opieką i przestrzenią na dziecięcą
                inicjatywę. Każda aktywność ma sens, a przy tym po prostu daje dużo radości.
              </p>
            </div>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((item, index) => (
                <article key={item.title} className="lift rounded-lg border border-line bg-white p-7 text-charcoal">
                  <div className="flex items-center justify-between">
                    <Icon name={item.icon} className="size-9 text-forest-dark" />
                    <span className="text-xs font-bold text-charcoal/35">0{index + 1}</span>
                  </div>
                  <h3 className="mt-8 text-xl font-bold text-charcoal">{item.title}</h3>
                  <p className="mt-3 leading-7 text-ink">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="o-nas" className="bg-white py-20 md:py-28">
          <div className="container-site grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
            <div className="overflow-hidden rounded-lg border border-line bg-paper p-0 md:p-6">
              <Image
                src="/images/o-nas-kolka.png"
                alt="Andrzej Kroczewski i dzieci podczas aktywności Mission Offline"
                width={1080}
                height={608}
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="h-auto w-full object-contain"
              />
            </div>
            <div>
              <span className="eyebrow">O nas</span>
              <h2 className="display-title mt-5 text-4xl md:text-6xl">Kto stoi za Mission Offline?</h2>
              <div className="mt-8 space-y-5 text-lg leading-8 text-ink">
                <p>
                  Nazywam się Andrzej Kroczewski i jestem twórcą Mission Offline. Od ponad 5 lat pracuję z
                  dziećmi jako wychowawca, instruktor oraz korepetytor.
                </p>
                <p>
                  Przez ten czas zauważyłem, że dzieci najbardziej rozwijają się wtedy, gdy mogą działać,
                  doświadczać i przeżywać przygody razem z innymi. Właśnie dlatego stworzyłem Mission Offline -
                  wakacyjne warsztaty, które łączą ruch, współpracę, kreatywne wyzwania i naukę przez działanie.
                </p>
                <p>
                  Zależy mi na tym, żeby dzieci spędzały wakacje aktywnie, budowały relacje, rozwijały pewność
                  siebie i wracały do domu z poczuciem, że przeżyły coś prawdziwego - nie kolejny dzień przed
                  ekranem.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="program" className="bg-white py-20 md:py-28">
          <div className="container-site grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
            <div className="overflow-hidden rounded-lg border border-line bg-paper p-3 shadow-[0_20px_55px_rgba(45,49,54,.08)] md:p-5">
              <Image
                src="/images/mission-offline-poster.png"
                alt="Plakat Mission Offline: wakacyjne warsztaty dla dzieci bez ekranów"
                width={1024}
                height={1536}
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="h-auto w-full rounded-md object-contain"
              />
            </div>
            <div className="border-l-4 border-brass bg-sand p-7 md:p-10">
              <span className="eyebrow">Program zajęć</span>
              <h2 className="display-title mt-5 text-4xl md:text-6xl">
                Dobry plan dnia. Dużo swobody. Zero nudy.
              </h2>
              <div className="mt-7 space-y-5 text-lg leading-8 text-ink">
                <p>
                  Mission Offline to wakacyjne warsztaty stworzone jako wartościowa alternatywa dla czasu
                  spędzanego przed ekranem.
                </p>
                <p>
                  Łączymy gry ruchowe, wyzwania zespołowe, twórcze zadania i elementy angielskiego. Dzieci nie
                  siedzą nad teorią - próbują, pytają, budują, współpracują i wyciągają własne wnioski.
                </p>
                <p>
                  Program wspiera pewność siebie, samodzielność i kompetencje społeczne, a każda misja jest
                  prowadzona w bezpiecznej, życzliwej atmosferze.
                </p>
              </div>
              <a
                href="#motywy"
                className="mt-9 inline-flex items-center gap-3 border-b-2 border-orange pb-1 font-bold text-charcoal"
              >
                Zobacz przykładowe motywy
                <Icon name="arrow" className="size-5" />
              </a>
            </div>
          </div>
        </section>

        <section id="motywy" className="border-y border-line bg-paper py-16 text-ink md:py-24">
          <div className="container-site">
            <div className="max-w-4xl">
              <span className="eyebrow">Motywy warsztatów</span>
              <h2 className="display-title mt-5 text-4xl md:text-5xl">Przykładowe motywy dni</h2>
              <p className="mt-6 text-lg leading-8 text-ink/78">
                Każdy dzień w Mission Offline ma własny temat przewodni i osobną fabułę. Niezależnie od motywu,
                warsztaty zawsze łączą ruch, współpracę, kreatywne wyzwania, logiczne zadania i język angielski
                wykorzystywany w praktyce.
              </p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {dayThemes.map((theme) => (
                <article key={theme.title} className="lift flex min-h-[260px] flex-col rounded-lg border border-line bg-white p-6">
                  <div className="flex items-center justify-between">
                    <span className="grid size-11 place-items-center border border-forest-dark/20 bg-forest-dark text-white">
                      <Icon name={theme.icon} className="size-5" />
                    </span>
                  </div>
                  <h3 className="mt-7 text-xl font-bold text-charcoal">{theme.title}</h3>
                  <p className="mt-3 leading-7 text-ink">{theme.text}</p>
                </article>
              ))}
            </div>
            <p className="mt-8 max-w-4xl border-l-4 border-brass bg-white p-6 text-lg leading-8 text-ink">
              Każdy motyw jest jedynie punktem wyjścia do przygody - pełny dzień zawsze zawiera aktywności
              ruchowe, kreatywne, zespołowe oraz elementy języka angielskiego.
            </p>
          </div>
        </section>

        <section id="lokalizacje" className="bg-paper py-20 md:py-28">
          <div className="container-site">
            <div className="max-w-4xl">
              <span className="eyebrow">Lokalizacja</span>
              <h2 className="display-title mt-5 text-4xl md:text-6xl">Jedna sprawdzona przestrzeń na Bemowie.</h2>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-[.8fr_1.2fr]">
              <article className="lift flex min-h-[280px] flex-col rounded-lg border border-line bg-white p-7 md:p-8">
                <div className="flex items-center justify-between">
                  <Icon name="pin" className="size-9 text-forest-dark" />
                  <span className="font-display text-4xl font-bold text-charcoal/12">01</span>
                </div>
                <p className="mt-10 text-xs font-bold uppercase tracking-[.12em] text-orange">
                  Warszawa / {location.district}
                </p>
                <h3 className="mt-2 text-3xl font-bold text-charcoal">{location.address}</h3>
                <a
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex items-center gap-3 pt-8 font-bold text-charcoal underline decoration-orange decoration-2 underline-offset-4"
                >
                  Otwórz w Google Maps
                  <Icon name="arrow" className="size-5" />
                </a>
              </article>
              <div className="rounded-lg border border-line bg-white p-7 md:p-9">
                <p className="text-lg leading-8 text-ink">
                  Zajęcia odbywają się w bezpiecznej i komfortowej przestrzeni sportowej, przygotowanej
                  specjalnie z myślą o realizowanych aktywnościach. Dzięki odpowiednio dobranemu wyposażeniu
                  oraz dużej przestrzeni do ruchu dzieci mogą swobodnie uczestniczyć w grach, wyzwaniach
                  zespołowych i zadaniach rozwojowych, rozwijając sprawność fizyczną, współpracę oraz pewność
                  siebie.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-charcoal py-20 text-white md:py-24">
          <div className="container-site">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[.14em] text-brass-light">
                Informacje organizacyjne
              </span>
              <h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">
                Przejrzyste zasady od pierwszego kontaktu.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
                Wybierasz termin. My potwierdzamy dostępność oraz przekazujemy komplet informacji potrzebnych
                przed warsztatem.
              </p>
            </div>
            <div className="mt-12 grid border-y border-white/15 sm:grid-cols-2 lg:grid-cols-4">
              {facts.map((fact) => (
                <article
                  key={fact.label}
                  className="border-b border-white/15 py-7 sm:px-6 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0"
                >
                  <Icon name={fact.icon} className="size-8 text-white" />
                  <p className="mt-6 text-xs font-bold uppercase tracking-[.12em] text-white/65">{fact.label}</p>
                  <p className="mt-2 text-xl font-bold">{fact.value}</p>
                  <p className="mt-2 text-sm text-white/72">{fact.note}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-5 border-l-4 border-orange bg-white/[.06] px-6 py-6 md:flex-row md:items-center md:justify-between md:px-8">
              <div>
                <p className="text-xl font-bold">Masz już wybrany termin?</p>
                <p className="mt-1 text-white/78">Wyślij zgłoszenie. Odpowiemy w ciągu 24 godzin.</p>
              </div>
              <a href="#zapis" className="button-primary inline-flex items-center justify-center gap-2 px-5 py-3 font-bold">
                Przejdź do formularza
                <Icon name="arrow" className="size-5" />
              </a>
            </div>
          </div>
        </section>

        <FAQ />

        <section id="zapis" className="border-t border-line bg-sand py-20 md:py-28">
          <div className="container-site grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
            <div>
              <span className="eyebrow">Formularz zgłoszeniowy</span>
              <h2 className="display-title mt-5 text-4xl md:text-6xl">
                Sprawdź dostępność miejsca dla swojego dziecka
              </h2>
              <p className="mt-6 text-lg leading-8 text-ink">
                Wypełnij krótki formularz. Wiadomość trafi bezpośrednio na adres biuro@akademiaprzygody.com.
                Odpowiemy w ciągu 24 godzin.
              </p>
              <div className="mt-9 space-y-4">
                {[
                  "Odpowiedź w ciągu 24 godzin",
                  "Wysłanie formularza nie zobowiązuje do płatności",
                  "Szczegóły zapisu zostaną potwierdzone w wiadomości zwrotnej",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="grid size-8 shrink-0 place-items-center bg-brass text-white">
                      <Icon name="check" className="size-4" />
                    </span>
                    <span className="font-semibold text-charcoal">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 border-t border-charcoal/15 pt-8">
                <p className="text-sm text-ink/75">Wolisz porozmawiać?</p>
                <a href="tel:+48501568850" className="mt-2 block text-2xl font-bold text-charcoal">
                  501 568 850
                </a>
                <a
                  href="mailto:biuro@akademiaprzygody.com"
                  className="mt-2 block text-ink underline decoration-orange decoration-2 underline-offset-4"
                >
                  biuro@akademiaprzygody.com
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>

        <footer className="bg-charcoal pb-28 pt-14 text-white md:pb-14">
          <div className="container-site grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center border border-brass/45 text-brass-light">
                  <Icon name="compass" className="size-6" />
                </span>
                <div>
                  <p className="font-bold uppercase tracking-[.1em]">Mission Offline</p>
                  <p className="mt-1 text-xs uppercase tracking-[.16em] text-white/45">Akademia Przygody</p>
                </div>
              </div>
              <p className="mt-5 max-w-sm leading-7 text-white/55">
                Wakacyjne warsztaty dla dzieci pełne ruchu, relacji i wyzwań, które zostają w pamięci na
                dłużej.
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[.12em] text-white/38">Kontakt</p>
              <div className="mt-4 space-y-3">
                <a href="tel:+48501568850" className="flex items-center gap-3 text-white/72 hover:text-white">
                  <Icon name="phone" className="size-4 text-brass-light" />
                  501 568 850
                </a>
                <a
                  href="mailto:biuro@akademiaprzygody.com"
                  className="flex items-center gap-3 break-all text-white/72 hover:text-white"
                >
                  <Icon name="mail" className="size-4 shrink-0 text-brass-light" />
                  biuro@akademiaprzygody.com
                </a>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[.12em] text-white/38">Informacje</p>
              <div className="mt-4 flex flex-col gap-3">
                <Link href="/polityka-prywatnosci" className="text-white/72 hover:text-white">
                  Polityka prywatności
                </Link>
                <Link href="/regulamin" className="text-white/72 hover:text-white">
                  Regulamin
                </Link>
                <a href="#start" className="text-white/72 hover:text-white">
                  Wróć na górę ↑
                </a>
              </div>
            </div>
          </div>
          <div className="container-site mt-12 border-t border-white/10 pt-6 text-sm text-white/35">
            © {new Date().getFullYear()} Mission Offline. Wszystkie prawa zastrzeżone.
          </div>
        </footer>
      </main>
    </>
  );
}

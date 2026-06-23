const questions = [
  {
    question: "Czy mogę zapisać dziecko tylko na jeden dzień?",
    answer:
      "Tak. Można wybrać jeden dzień, kilka wybranych dni albo dłuższy cykl warsztatów – zależnie od potrzeb rodziny i dostępności miejsc.",
  },
  {
    question: "Czy dziecko musi znać język angielski?",
    answer:
      "Nie. Angielski pojawia się naturalnie w grach, komendach i codziennych sytuacjach. Aktywności są prowadzone tak, aby każde dziecko mogło swobodnie uczestniczyć niezależnie od poziomu.",
  },
  {
    question: "Jak wygląda typowy dzień?",
    answer:
      "Dzień łączy aktywność ruchową, wyzwania zespołowe, zadania kreatywne i angielski w praktyce. Misje zmieniają się, dlatego każdy dzień przynosi nowe doświadczenia.",
  },
  {
    question: "Czy zajęcia są dopasowane do wieku dzieci?",
    answer:
      "Tak. Poziom trudności zadań, tempo i sposób pracy są dostosowywane do wieku oraz możliwości uczestników, aby wyzwania były angażujące i bezpieczne.",
  },
  {
    question: "Co dziecko powinno zabrać ze sobą?",
    answer:
      "Po potwierdzeniu zapisu prześlemy krótką listę organizacyjną. Podstawą jest wygodny strój odpowiedni do aktywności i pogody.",
  },
  {
    question: "Kiedy otrzymam potwierdzenie miejsca?",
    answer:
      "Skontaktujemy się w ciągu 24 godzin od wysłania formularza, aby potwierdzić dostępność, termin i szczegóły organizacyjne.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-charcoal py-20 text-white md:py-28">
      <div className="container-site grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <div>
          <span className="eyebrow eyebrow-light">Najczęstsze pytania</span>
          <h2 className="display-title display-title-light mt-5 text-4xl md:text-5xl">Wszystko, co warto wiedzieć przed zapisem.</h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-white/80">
            Nie widzisz odpowiedzi na swoje pytanie? Zadzwoń lub napisz. Chętnie opowiemy o programie i
            organizacji dnia.
          </p>
        </div>
        <div className="bg-white px-6 text-ink md:px-8">
          {questions.map((item, index) => (
            <details key={item.question} className="group border-b border-line last:border-b-0" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left font-bold text-charcoal marker:content-none">
                {item.question}
                <span className="grid size-8 shrink-0 place-items-center border border-brass/45 text-xl font-normal text-brass transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-6 pr-12 leading-7 text-ink">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

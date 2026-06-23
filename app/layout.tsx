import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://missionoffline.pl"),
  title: "Mission Offline | Wakacyjna Akademia Przygody dla dzieci",
  description:
    "Mission Offline to całodniowe warsztaty wakacyjne dla dzieci 6–13 lat na warszawskim Bemowie. Ruch, współpraca, przygoda i angielski w praktyce.",
  keywords: [
    "warsztaty wakacyjne dla dzieci Warszawa",
    "aktywne wakacje dla dzieci Warszawa",
    "zajęcia wakacyjne Warszawa",
    "warsztaty dla dzieci Bemowo",
    "wakacje dla dzieci Bemowo",
    "angielski dla dzieci Warszawa",
  ],
  openGraph: {
    title: "Mission Offline – Wakacje pełne przygód. Bez ekranów.",
    description:
      "Całodniowe wakacyjne misje dla dzieci 6–13 lat: ruch, współpraca, twórcze wyzwania i angielski w praktyce.",
    type: "website",
    locale: "pl_PL",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}

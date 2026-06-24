"use client";

import { useState } from "react";
import { Icon } from "@/components/Icons";

const links = [
  { href: "#dlaczego", label: "Dlaczego my" },
  { href: "#program", label: "Program" },
  { href: "#lokalizacje", label: "Lokalizacja" },
  { href: "#o-nas", label: "O nas" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/80 bg-paper/95 text-charcoal shadow-sm backdrop-blur-xl">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-charcoal"
      >
        Przejdź do treści
      </a>
      <div className="container-site flex h-20 items-center justify-between">
        <a href="#start" className="flex items-center gap-3" aria-label="Mission Offline - strona główna">
          <span className="grid size-11 shrink-0 place-items-center border border-brass/45 text-brass">
            <Icon name="compass" className="size-6" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[.92rem] font-extrabold uppercase tracking-[.1em] text-charcoal">
              Mission Offline
            </span>
            <span className="mt-1.5 text-[.6rem] font-bold uppercase tracking-[.16em] text-ink/55">
              Akademia Przygody
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Główna nawigacja">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-ink/72 transition hover:text-charcoal"
            >
              {link.label}
            </a>
          ))}
          <a href="#zapis" className="button-primary px-5 py-3 text-sm font-bold">
            Zapisz dziecko
          </a>
        </nav>
        <button
          type="button"
          className="grid size-11 place-items-center border border-charcoal/20 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-charcoal transition ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-charcoal transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 bg-charcoal transition ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>
      {open && (
        <nav
          id="mobile-menu"
          className="border-t border-line bg-paper px-4 pb-5 pt-3 lg:hidden"
          aria-label="Nawigacja mobilna"
        >
          <div className="container-site flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b border-line py-4 font-semibold"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#zapis"
              className="button-primary mt-4 px-5 py-4 text-center font-bold"
              onClick={() => setOpen(false)}
            >
              Zapisz dziecko
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

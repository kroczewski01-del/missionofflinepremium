import type { SVGProps } from "react";

export type IconName = "screen" | "motion" | "team" | "language" | "compass" | "build" | "agent" | "survival" | "clock" | "price" | "age" | "calendar" | "pin" | "meal" | "arrow" | "check" | "phone" | "mail";

export function Icon({ name, ...props }: { name: IconName } & SVGProps<SVGSVGElement>) {
  const common = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2.35, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true, ...props };
  const paths: Record<IconName, React.ReactNode> = {
    screen: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="m5 20 14-18M9 20h6" /></>,
    motion: <><path d="M13 5a2 2 0 1 0-2-2 2 2 0 0 0 2 2Z" /><path d="m7 21 3-7 2 2 2 5M7 9l4-2 4 3 3-1M10 14l-3-3" /></>,
    team: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
    language: <><path d="m5 8 6 6M4 14l6-7M2 5h12M7 3v2M13 21l4-9 4 9M14.5 18h5" /></>,
    compass: <><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" /></>,
    build: <><path d="m14.7 6.3 3-3 3 3-3 3M4 21l8.5-8.5M6 6h5v5H6zM14 14h6v6h-6z" /></>,
    agent: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4M8 11h6M11 8v6" /></>,
    survival: <><path d="M12 3 3 20h18L12 3Z" /><path d="m9 20 3-6 3 6M8 10h8" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    price: <><circle cx="12" cy="12" r="9" /><path d="M16 8h-5a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4H8M12 6v2M12 16v2" /></>,
    age: <><circle cx="12" cy="8" r="4" /><path d="M5 21a7 7 0 0 1 14 0" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    meal: <><path d="M7 3v8M4.5 3v8M9.5 3v8M4.5 11h5L8 21H6l-1.5-10ZM16 3v18M16 3c2.2 1.6 3.5 4 3.5 7.2 0 2.1-1.1 3.8-3.5 4.8" /></>,
    arrow: <><path d="M5 12h14M14 7l5 5-5 5" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0 1 22 16.92Z" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  };
  return <svg {...common}>{paths[name]}</svg>;
}

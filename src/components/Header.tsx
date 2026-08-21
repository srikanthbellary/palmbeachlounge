import Link from "next/link";
import { LogoMark } from "@/components/LogoMark";
import { nav, site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-copper/25 bg-parchment/88 backdrop-blur-md">
      <div className="mx-auto flex max-w-folio flex-col items-center gap-3 px-5 py-3 sm:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-6 lg:py-3.5">
        <nav
          aria-label="Primary"
          className="order-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[0.7rem] uppercase tracking-[0.22em] text-mute lg:order-1 lg:justify-start"
        >
          {nav.slice(0, 2).map((item) => (
            <a key={item.href} href={item.href} className="hover:text-forest">
              {item.label}
            </a>
          ))}
        </nav>

        <Link
          href="/"
          aria-label={`${site.name} home`}
          className="order-1 flex items-center justify-center gap-3 lg:order-2"
        >
          <LogoMark className="h-12 w-auto sm:h-14" sizes="56px" priority />
          <span className="text-left font-display text-[0.68rem] uppercase leading-snug tracking-house text-ink sm:text-[0.75rem]">
            Palm Beach
            <br />
            Lounge
          </span>
        </Link>

        <div className="order-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:justify-end">
          <nav
            aria-label="Visit and contact"
            className="flex items-center gap-x-5 text-[0.7rem] uppercase tracking-[0.22em] text-mute"
          >
            {nav.slice(2).map((item) => (
              <a key={item.href} href={item.href} className="hover:text-forest">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="/#contact"
            className="inline-flex min-h-9 items-center border border-copper/60 px-3.5 text-[0.68rem] uppercase tracking-[0.22em] text-forest hover:border-copper hover:bg-card"
          >
            Request
          </a>
        </div>
      </div>
    </header>
  );
}

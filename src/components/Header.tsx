"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";
import { nav, site } from "@/lib/site";

const mobileLinks = [
  ...nav,
  { href: "/#contact", label: "Request" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") close();
    }

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");

    function onChange(event: MediaQueryListEvent) {
      if (event.matches) close();
    }

    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, [close]);

  return (
    <header className="sticky top-0 z-40 border-b border-copper/25 bg-parchment md:bg-parchment/88 md:backdrop-blur-md">
      <div className="mx-auto flex max-w-folio items-center justify-between gap-4 px-8 py-2.5 md:hidden">
        <Link
          href="/"
          className="whitespace-nowrap font-display text-[0.68rem] uppercase tracking-house text-ink"
          onClick={close}
        >
          {site.name}
        </Link>
        <button
          type="button"
          className="inline-flex min-h-9 shrink-0 items-center border border-copper/60 px-3.5 text-[0.68rem] uppercase tracking-[0.22em] text-forest hover:border-copper hover:bg-card"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <nav
        id={menuId}
        aria-label="Primary"
        hidden={!open}
        className="border-t border-copper/25 bg-parchment px-8 py-5 md:hidden"
      >
        <ul className="flex flex-col gap-4 text-[0.7rem] uppercase tracking-[0.22em] text-mute">
          {mobileLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="hover:text-forest" onClick={close}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto hidden max-w-folio flex-col items-center gap-3 px-5 py-3 sm:px-8 md:flex lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-6 lg:py-3.5">
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
          className="order-1 font-display text-[0.68rem] uppercase tracking-house text-ink sm:text-[0.75rem] lg:order-2"
        >
          {site.name}
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

import Link from "next/link";
import { LogoMark } from "@/components/LogoMark";
import { Rule } from "@/components/Rule";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-copper/25">
      <div className="mx-auto flex max-w-folio flex-col items-center px-5 py-16 text-center sm:px-8">
        <Link href="/" aria-label={`${site.name} home`}>
          <LogoMark src="/logo-pbl.png" className="h-28 w-auto" sizes="140px" />
        </Link>
        <Rule className="mt-8" />
        <p className="mt-8 font-display text-sm uppercase tracking-house text-ink">
          {site.name}
        </p>
        <p className="mt-3 text-xs tracking-wide text-mute">
          © 2026 {site.name}
        </p>
        <p className="mt-1 text-xs tracking-wide text-mute">{site.domain}</p>
        <nav
          aria-label="Legal"
          className="mt-8 flex gap-6 text-[0.68rem] uppercase tracking-[0.2em] text-mute"
        >
          <Link href="/privacy/" className="hover:text-forest">
            Privacy
          </Link>
          <Link href="/terms/" className="hover:text-forest">
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
}

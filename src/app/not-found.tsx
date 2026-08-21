import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";

export default function NotFound() {
  return (
    <LegalPage kicker="404" title="That page is not in the house">
      <p>The link may be old, or the page may have moved.</p>
      <p>
        <Link
          href="/"
          className="inline-flex min-h-12 items-center border border-copper px-8 text-[0.72rem] uppercase tracking-[0.22em] text-forest hover:bg-card"
        >
          Return
        </Link>
      </p>
    </LegalPage>
  );
}

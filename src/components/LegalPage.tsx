import type { ReactNode } from "react";
import { Rule } from "@/components/Rule";

type LegalPageProps = {
  kicker: string;
  title: string;
  children: ReactNode;
};

export function LegalPage({ kicker, title, children }: LegalPageProps) {
  return (
    <main id="main" className="mx-auto max-w-2xl px-5 py-20 sm:px-8 sm:py-24">
      <p className="text-[0.68rem] uppercase tracking-salon text-copper-deep">
        {kicker}
      </p>
      <h1 className="mt-5 font-display text-3xl uppercase tracking-house text-ink sm:text-4xl">
        {title}
      </h1>
      <Rule className="mx-0 mt-8 max-w-[12rem]" />
      <div className="mt-12 space-y-10 text-base leading-[1.85] text-mute">
        {children}
      </div>
    </main>
  );
}

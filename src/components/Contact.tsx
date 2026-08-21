import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { Rule } from "@/components/Rule";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-28 border-t border-copper/20 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-folio text-center">
        <p className="text-[0.68rem] uppercase tracking-salon text-copper-deep">
          Contact
        </p>
        <h2 className="mx-auto mt-5 max-w-xl font-display text-3xl uppercase tracking-house text-ink sm:text-4xl">
          Write the house
        </h2>
        <Rule className="mt-8" />
        <p className="mx-auto mt-10 max-w-xl text-base leading-[1.85] text-mute">
          A note for the lounge, a viewing, or a piece from the atelier. Tell
          us who you are and what you wish to see.
        </p>
        <Suspense
          fallback={
            <p className="mt-12 text-sm text-mute">Preparing the form…</p>
          }
        >
          <ContactForm />
        </Suspense>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: `How to use the ${site.name} site.`,
};

export default function TermsPage() {
  return (
    <LegalPage kicker="Terms" title="Plain language">
      <section>
        <h2 className="font-display text-xl uppercase tracking-house text-ink">
          What this site is
        </h2>
        <p className="mt-3">
          {site.domain} is the public page for {site.name}: a lounge and a
          private atelier. It is informational. Pieces are shown by inquiry and
          by appointment, not sold from a cart on this site.
        </p>
      </section>
      <section>
        <h2 className="font-display text-xl uppercase tracking-house text-ink">
          Inquire to buy
        </h2>
        <p className="mt-3">
          Category pages describe families of objects — parfum, bijoux, table,
          and atelier. They are not an inventory, a price list, or an offer to
          the public at large. A purchase, if any, is arranged in
          correspondence after a viewing.
        </p>
      </section>
      <section>
        <h2 className="font-display text-xl uppercase tracking-house text-ink">
          What it is not
        </h2>
        <p className="mt-3">
          This site is not medical advice and makes no health claims. It is not
          a reservation system, a map, or a shop checkout. Always use your own
          judgment, and speak with a qualified professional if you have a
          health question.
        </p>
      </section>
      <section>
        <h2 className="font-display text-xl uppercase tracking-house text-ink">
          Contact
        </h2>
        <p className="mt-3">
          {site.contactEmail ? (
            <>
              Questions about these terms:{" "}
              <a
                className="text-ink underline decoration-copper underline-offset-4"
                href={`mailto:${site.contactEmail}`}
              >
                {site.contactEmail}
              </a>
              .
            </>
          ) : (
            <>
              Questions about these terms may be sent through the contact form
              on the house page.
            </>
          )}
        </p>
      </section>
    </LegalPage>
  );
}

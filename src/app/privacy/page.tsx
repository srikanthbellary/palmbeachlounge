import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: `How ${site.name} treats the notes you send.`,
};

export default function PrivacyPage() {
  return (
    <LegalPage kicker="Privacy" title="A short notice">
      <section>
        <h2 className="font-display text-xl uppercase tracking-house text-ink">
          This site
        </h2>
        <p className="mt-3">
          {site.name} is an informational house page. It describes the lounge
          and the atelier. It does not run an account system, a cart, or a
          mailing list from this form.
        </p>
      </section>
      <section>
        <h2 className="font-display text-xl uppercase tracking-house text-ink">
          What you send
        </h2>
        <p className="mt-3">
          If you write through the contact form, your name, email, and message
          are used only to answer you. When a correspondence address is
          published, the form opens your own mail application. This page does
          not store the note on a server of its own.
        </p>
      </section>
      <section>
        <h2 className="font-display text-xl uppercase tracking-house text-ink">
          What we do not do
        </h2>
        <p className="mt-3">
          We do not sell inquiries. We do not use this site to make medical
          claims. We do not ask for more than is needed to arrange a visit or
          a viewing.
        </p>
      </section>
      <section>
        <h2 className="font-display text-xl uppercase tracking-house text-ink">
          Questions
        </h2>
        <p className="mt-3">
          {site.contactEmail ? (
            <>
              Write to{" "}
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
              Use the contact form on the house page. A correspondence address
              will appear here when one is published.
            </>
          )}
        </p>
      </section>
    </LegalPage>
  );
}

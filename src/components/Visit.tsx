import { LoggiaElevation } from "@/components/craft/LoggiaElevation";
import { Rule } from "@/components/Rule";

export function Visit() {
  return (
    <section
      id="visit"
      className="scroll-mt-28 px-5 py-24 text-center sm:px-8 sm:py-32"
    >
      <p className="text-[0.68rem] uppercase tracking-salon text-copper-deep">
        Visit
      </p>
      <h2 className="mx-auto mt-5 max-w-xl font-display text-3xl uppercase tracking-house text-ink sm:text-4xl">
        By appointment
      </h2>
      <Rule className="mt-8" />
      <div className="calling-card mx-auto mt-14 max-w-2xl">
        <div className="calling-card-inner">
          <LoggiaElevation />
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-xl space-y-6 text-base leading-[1.85] text-mute">
        <p>
          The house receives when a time has been set. Write first. We will
          answer with a day that suits the visit — whether for the lounge or
          for a private viewing.
        </p>
        <p>
          A street address and hours are not published here. They are given
          with the appointment.
        </p>
      </div>
      <a
        href="/#contact"
        className="mt-12 inline-flex min-h-12 items-center border border-copper px-8 text-[0.72rem] uppercase tracking-[0.22em] text-forest hover:bg-card"
      >
        Request a time
      </a>
    </section>
  );
}

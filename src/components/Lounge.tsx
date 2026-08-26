import { LoggiaElevation } from "@/components/craft/LoggiaElevation";
import { Rule } from "@/components/Rule";

export function Lounge() {
  return (
    <section
      id="lounge"
      className="scroll-mt-28 px-5 py-24 text-center sm:px-8 sm:py-32"
    >
      <p className="text-[0.68rem] uppercase tracking-salon text-copper-deep">
        Lounge
      </p>
      <h2 className="mx-auto mt-5 max-w-xl font-display text-3xl uppercase tracking-house text-ink sm:text-4xl">
        A house, not a scene
      </h2>
      <Rule className="mt-8" />
      <div className="mx-auto mt-14 max-w-2xl">
        <LoggiaElevation />
      </div>
      <div className="mx-auto mt-14 max-w-2xl space-y-6 text-base leading-[1.85] text-mute sm:text-[1.05rem]">
        <p>
          Palm Beach Lounge is a salon in the older sense of the word: a room
          for the afternoon, a table for conversation, and a quiet hour for
          looking at things made with care.
        </p>
        <p>
          Guests come to sip, to savor, and to socialize. They also come, by
          invitation, to see objects that are not shown in a shop window —
          scent, jewels, the table, and dress — presented without hurry.
        </p>
        <p>
          The house is kept small on purpose. Nothing here asks to be a
          nightclub, a crowd, or a catalog. It is a place to sit, to speak, and
          to look.
        </p>
      </div>
    </section>
  );
}

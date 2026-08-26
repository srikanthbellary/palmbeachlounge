import { itemsFor, categories } from "@/lib/catalog";
import { inquireHref } from "@/lib/site";
import { PlateStillLife } from "@/components/craft/PlateStillLifes";
import { Rule } from "@/components/Rule";

export function Atelier() {
  return (
    <section
      id="atelier"
      className="scroll-mt-28 border-y border-copper/20 bg-vellum/40 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-folio text-center">
        <p className="text-[0.68rem] uppercase tracking-salon text-copper-deep">
          Atelier
        </p>
        <h2 className="mx-auto mt-5 max-w-xl font-display text-3xl uppercase tracking-house text-ink sm:text-4xl">
          Shown privately
        </h2>
        <Rule className="mt-8" />
        <p className="mx-auto mt-10 max-w-xl text-base leading-[1.85] text-mute">
          The atelier is invitation-first. Pieces are presented in person.
          Nothing here is listed for a cart, and nothing is priced on this
          page.
        </p>

        <ul className="mx-auto mt-20 grid max-w-3xl gap-x-20 gap-y-24 sm:grid-cols-2">
          {categories.map((category) => {
            const pieces = itemsFor(category.id);

            return (
              <li key={category.id} className="flex flex-col items-center">
                <figure className="flex w-full max-w-[17.5rem] flex-col items-center">
                  <div className="plate-frame aspect-[4/5] w-full">
                    <div className="plate-frame-inner">
                      <PlateStillLife id={category.id} />
                    </div>
                  </div>
                  <figcaption className="mt-7">
                    <h3 className="font-display text-[1.05rem] uppercase tracking-house text-ink">
                      {category.name}
                    </h3>
                    <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-mute">
                      {category.sentence}
                    </p>
                  </figcaption>
                </figure>
                {pieces.length > 0 ? (
                  <ul className="mt-8 space-y-2 text-sm text-ink">
                    {pieces.map((item) => (
                      <li key={item.id}>{item.name}</li>
                    ))}
                  </ul>
                ) : null}
                <a
                  href={inquireHref(category.id)}
                  className="mt-8 inline-flex items-center justify-center border-b border-copper pb-1 text-[0.68rem] uppercase tracking-[0.22em] text-forest hover:border-forest"
                >
                  Inquire
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

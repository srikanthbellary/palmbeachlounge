/**
 * Invitation-first retail. v1 ships categories only.
 * Add pieces to `catalog` when the house is ready to show them.
 * Do not invent names, prices, or inventory.
 */

export const categoryIds = [
  "parfum",
  "bijoux",
  "table",
  "atelier",
] as const;

export type CategoryId = (typeof categoryIds)[number];

export type InquiryAbout = "lounge" | CategoryId;

export type Category = {
  id: CategoryId;
  name: string;
  sentence: string;
};

export type CatalogItem = {
  id: string;
  category: CategoryId;
  name: string;
  note?: string;
};

export const categories: Category[] = [
  {
    id: "parfum",
    name: "Parfum",
    sentence: "Scent, chosen slowly, and worn close.",
  },
  {
    id: "bijoux",
    name: "Bijoux",
    sentence: "Jewels for the hand, the throat, and the hour.",
  },
  {
    id: "table",
    name: "Table",
    sentence: "Linen, silver, and the things a table remembers.",
  },
  {
    id: "atelier",
    name: "Atelier",
    sentence: "Dress and cloth, cut for the body that will wear them.",
  },
];

/** Empty on purpose. Drop real pieces here later — no SKUs or prices in v1. */
export const catalog: CatalogItem[] = [];

export function itemsFor(category: CategoryId): CatalogItem[] {
  return catalog.filter((item) => item.category === category);
}

export const inquiryOptions: { id: InquiryAbout; label: string }[] = [
  { id: "lounge", label: "Lounge" },
  ...categories.map(({ id, name }) => ({ id, label: name })),
];

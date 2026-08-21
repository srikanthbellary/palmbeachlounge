export const site = {
  name: "Palm Beach Lounge",
  domain: "palmbeachlounge.com",
  url: "https://palmbeachlounge.com",
  /**
   * Correspondence address. Leave null until one is supplied.
   * The contact form uses mailto: only when this is set.
   */
  contactEmail: null as string | null,
  description:
    "A Palm Beach salon for sipping, savoring, socializing, and the private viewing of objects.",
  whisper: "Sip, savor, socialize.",
};

export const nav = [
  { href: "/#lounge", label: "Lounge" },
  { href: "/#atelier", label: "Atelier" },
  { href: "/#visit", label: "Visit" },
  { href: "/#contact", label: "Contact" },
] as const;

export function inquireHref(about?: string) {
  const params = about ? `?about=${encodeURIComponent(about)}` : "";
  return `/${params}#contact`;
}

export function mailtoInquiry(input: {
  name: string;
  from: string;
  message: string;
  about?: string;
}) {
  if (!site.contactEmail) return null;

  const subject = input.about
    ? `${site.name} — ${input.about}`
    : `${site.name} inquiry`;

  const lines = [
    input.message.trim(),
    "",
    `— ${input.name.trim()}`,
    input.from.trim(),
    input.about ? `Inquiring about: ${input.about}` : "",
  ].filter((line) => line !== "");

  return `mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}

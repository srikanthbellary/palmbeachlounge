import { LogoMark } from "@/components/LogoMark";
import { Rule } from "@/components/Rule";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-[calc(100svh-5.5rem)] flex-col items-center justify-center px-5 py-16 text-center sm:px-8"
    >
      <LogoMark
        className="h-auto w-full max-w-[22rem] sm:max-w-[26rem]"
        sizes="(max-width: 640px) 22rem, 26rem"
        priority
      />
      <Rule className="mt-10" />
      <p className="mt-8 text-[0.7rem] uppercase tracking-salon text-mute">
        {site.whisper}
      </p>
    </section>
  );
}

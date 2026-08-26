import Image from "next/image";

export function LetterheadWatermark() {
  return (
    <div
      aria-hidden
      className="letterhead-watermark pointer-events-none absolute inset-x-0 top-0 z-0 h-[160vh] overflow-hidden"
    >
      <Image
        src="/logo-pbl-hero.png"
        alt=""
        width={1024}
        height={1024}
        sizes="44rem"
        className="absolute left-1/2 top-[32rem] w-[min(94vw,46rem)] max-w-none -translate-x-1/2 select-none opacity-[0.05] sm:top-[36rem] sm:w-[min(80vw,52rem)]"
      />
    </div>
  );
}

export function LinenRepeat() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full text-copper"
    >
      <defs>
        <pattern
          id="pbl-linen-star"
          width="56"
          height="56"
          patternUnits="userSpaceOnUse"
        >
          <path
            fill="currentColor"
            opacity="0.11"
            transform="translate(24 24)"
            d="M4 -3.4 L4.42 2.35 L10 4 L4.42 5.65 L4 11.4 L3.58 5.65 L-2 4 L3.58 2.35 Z"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#pbl-linen-star)" />
    </svg>
  );
}

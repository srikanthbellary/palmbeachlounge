function Corner() {
  return (
    <svg viewBox="0 0 40 40" className="h-6 w-6 text-copper sm:h-9 sm:w-9" aria-hidden>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path strokeWidth="0.7" d="M2 32 V9 C2 3.6 6.2 2 11 2 H32" />
        <path
          strokeWidth="0.45"
          opacity="0.55"
          d="M6.2 32 V12.2 C6.2 8.4 9 6.2 12.6 6.2 H32"
        />
        <path
          strokeWidth="0.4"
          opacity="0.35"
          d="M11 2 C10.2 6.5 6.6 10 2 11"
        />
      </g>
      <path
        fill="currentColor"
        opacity="0.85"
        d="M14.2 11.1 L14.7 13.55 L17.2 14.1 L14.7 14.65 L14.2 17.1 L13.7 14.65 L11.2 14.1 L13.7 13.55 Z"
      />
      <circle cx="3.2" cy="3.2" r="0.55" fill="#c4a484" opacity="0.35" />
    </svg>
  );
}

export function CopperplateFrame() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-2 z-50 sm:inset-3.5"
    >
      <div className="absolute inset-0 border border-copper/30" />
      <div className="absolute inset-[3px] border border-copper/15" />
      <div className="absolute left-1 top-1">
        <Corner />
      </div>
      <div className="absolute right-1 top-1 rotate-90">
        <Corner />
      </div>
      <div className="absolute bottom-1 right-1 rotate-180">
        <Corner />
      </div>
      <div className="absolute bottom-1 left-1 -rotate-90">
        <Corner />
      </div>
    </div>
  );
}

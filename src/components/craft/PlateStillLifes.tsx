import type { ReactElement } from "react";
import type { CategoryId } from "@/lib/catalog";
import { FourPointStar } from "@/components/craft/FourPointStar";

const line = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function ParfumEngraving() {
  return (
    <svg viewBox="0 0 200 240" className="h-full w-full text-copper" aria-hidden>
      <g {...line}>
        <ellipse cx="100" cy="26" rx="13" ry="7" strokeWidth="0.7" />
        <path
          strokeWidth="0.7"
          d="M87 32 C87 28 91 24 100 24 C109 24 113 28 113 32 L110 50 H90 Z"
        />
        <path strokeWidth="0.45" opacity="0.55" d="M93 32 H107" />
        <path strokeWidth="0.45" opacity="0.4" d="M100 24 V50" />
        <path strokeWidth="0.7" d="M94 50 V76 H106 V50" />
        <path strokeWidth="0.7" d="M86 76 H114 V84 H86 Z" />
        <path
          strokeWidth="0.75"
          d="M86 84 C70 90 64 102 64 118 V196 C64 208 74 216 86 216 H114 C126 216 136 208 136 196 V118 C136 102 130 90 114 84"
        />
        <path
          strokeWidth="0.45"
          opacity="0.45"
          d="M74 112 V192 C74 202 80 208 88 208"
        />
        <rect
          x="84"
          y="118"
          width="32"
          height="48"
          rx="1.5"
          strokeWidth="0.55"
        />
        <rect
          x="88"
          y="122"
          width="24"
          height="40"
          rx="1"
          strokeWidth="0.4"
          opacity="0.7"
        />
        <path
          className="text-forest"
          strokeWidth="0.45"
          d="M66 176 C80 172 120 180 134 176"
          opacity="0.65"
        />
        <path strokeWidth="0.4" opacity="0.35" d="M76 216 H124" />
      </g>
      <g className="text-copper" transform="translate(95 138)">
        <FourPointStar size={10} />
      </g>
    </svg>
  );
}

function BijouxEngraving() {
  return (
    <svg viewBox="0 0 200 240" className="h-full w-full text-copper" aria-hidden>
      <g {...line}>
        <ellipse cx="100" cy="22" rx="3.2" ry="2.4" strokeWidth="0.55" />
        <ellipse cx="100" cy="34" rx="3.2" ry="2.4" strokeWidth="0.55" />
        <ellipse cx="100" cy="46" rx="3.2" ry="2.4" strokeWidth="0.55" />
        <path strokeWidth="0.5" d="M100 48 V62" />
        <path
          strokeWidth="0.7"
          d="M100 62 C92 62 88 68 88 74 C88 80 93 84 100 84 C107 84 112 80 112 74 C112 68 108 62 100 62"
        />
        <ellipse cx="100" cy="128" rx="30" ry="40" strokeWidth="0.8" />
        <ellipse
          cx="100"
          cy="128"
          rx="21"
          ry="30"
          strokeWidth="0.45"
          opacity="0.7"
        />
        <path strokeWidth="0.4" opacity="0.45" d="M100 90 V166" />
        <path strokeWidth="0.4" opacity="0.4" d="M76 114 L124 142" />
        <path strokeWidth="0.4" opacity="0.4" d="M124 114 L76 142" />
        <path strokeWidth="0.55" d="M100 86 L103 92 H97 Z" />
        <path strokeWidth="0.55" d="M100 170 L103 164 H97 Z" />
        <path strokeWidth="0.55" d="M68 128 L74 125 V131 Z" />
        <path strokeWidth="0.55" d="M132 128 L126 125 V131 Z" />
        <ellipse cx="100" cy="186" rx="5" ry="7" strokeWidth="0.6" />
        <path strokeWidth="0.45" d="M100 168 V179" />
      </g>
      <g className="text-copper" transform="translate(95 116)">
        <FourPointStar size={10} />
      </g>
    </svg>
  );
}

function TableEngraving() {
  return (
    <svg viewBox="0 0 200 240" className="h-full w-full text-copper" aria-hidden>
      <g {...line}>
        <path
          strokeWidth="0.7"
          d="M38 46 H108 L96 118 H26 Z"
        />
        <path
          strokeWidth="0.5"
          opacity="0.65"
          d="M38 46 L68 78 L56 118"
        />
        <path strokeWidth="0.4" opacity="0.4" d="M52 46 L74 70 L64 118" />
        <ellipse cx="112" cy="168" rx="62" ry="26" strokeWidth="0.75" />
        <ellipse
          cx="112"
          cy="168"
          rx="50"
          ry="18"
          strokeWidth="0.45"
          opacity="0.65"
        />
        <path
          className="text-forest"
          strokeWidth="0.7"
          d="M146 36 L92 150"
          opacity="0.85"
        />
        <path
          className="text-forest"
          strokeWidth="0.55"
          d="M146 36 L150 48 L142 46 Z"
        />
        <path
          className="text-forest"
          strokeWidth="0.55"
          d="M92 150 L86 172"
        />
        <path
          className="text-forest"
          strokeWidth="0.5"
          d="M92 150 L80 174"
        />
        <path
          className="text-forest"
          strokeWidth="0.5"
          d="M92 150 L90 176"
        />
        <path
          className="text-forest"
          strokeWidth="0.5"
          d="M92 150 L100 174"
        />
        <path
          strokeWidth="0.4"
          opacity="0.4"
          d="M70 168 H154"
        />
      </g>
    </svg>
  );
}

function DressEngraving() {
  return (
    <svg viewBox="0 0 200 240" className="h-full w-full text-copper" aria-hidden>
      <g {...line}>
        <path strokeWidth="0.7" d="M32 44 H168" />
        <circle cx="32" cy="44" r="3" strokeWidth="0.55" />
        <circle cx="168" cy="44" r="3" strokeWidth="0.55" />
        <path
          strokeWidth="0.75"
          d="M46 44 C46 52 40 60 40 78 C40 110 52 150 48 200 C70 210 90 214 100 214 C110 214 130 210 152 200 C148 150 160 110 160 78 C160 60 154 52 154 44"
        />
        <path
          strokeWidth="0.5"
          opacity="0.7"
          d="M64 44 C62 80 70 130 68 206"
        />
        <path
          strokeWidth="0.5"
          opacity="0.7"
          d="M100 44 C98 90 102 150 100 214"
        />
        <path
          strokeWidth="0.5"
          opacity="0.7"
          d="M136 44 C138 80 130 130 132 206"
        />
        <path
          strokeWidth="0.45"
          opacity="0.45"
          d="M80 44 C78 100 86 160 82 210"
        />
        <path
          strokeWidth="0.45"
          opacity="0.45"
          d="M120 44 C122 100 114 160 118 210"
        />
        <path
          className="text-forest"
          strokeWidth="0.5"
          d="M48 200 C70 208 90 212 100 212 C110 212 130 208 152 200"
          opacity="0.7"
        />
        <path strokeWidth="0.4" opacity="0.4" d="M70 44 H130" />
      </g>
    </svg>
  );
}

const plates: Record<CategoryId, () => ReactElement> = {
  parfum: ParfumEngraving,
  bijoux: BijouxEngraving,
  table: TableEngraving,
  atelier: DressEngraving,
};

export function PlateStillLife({ id }: { id: CategoryId }) {
  const Drawing = plates[id];
  return <Drawing />;
}

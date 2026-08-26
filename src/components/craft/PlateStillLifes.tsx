import type { ReactElement } from "react";
import type { CategoryId } from "@/lib/catalog";

const line = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function spark(x: number, y: number, s: number) {
  return `M${x} ${y - s} L${x + s * 0.22} ${y - s * 0.12} L${x + s} ${y} L${x + s * 0.22} ${y + s * 0.12} L${x} ${y + s} L${x - s * 0.22} ${y + s * 0.12} L${x - s} ${y} L${x - s * 0.22} ${y - s * 0.12} Z`;
}

function necklaceLinks() {
  return Array.from({ length: 17 }, (_, i) => {
    const t = i / 16;
    const a = Math.PI + t * Math.PI;
    return {
      cx: 100 + 46 * Math.cos(a),
      cy: 50 - 22 * Math.sin(a),
      key: i,
    };
  });
}

function ParfumEngraving() {
  return (
    <svg viewBox="0 0 200 240" className="h-full w-full text-copper" aria-hidden>
      <defs>
        <clipPath id="pbl-parfum-body">
          <path d="M70 112 C70 100 80 92 90 90 H110 C120 92 130 100 130 112 V198 C130 210 116 218 100 218 C84 218 70 210 70 198 Z" />
        </clipPath>
      </defs>
      <path stroke="currentColor" strokeWidth="0.4" opacity="0.22" d="M42 226 H158" />
      <g {...line}>
        <path
          strokeWidth="1"
          d="M100 12 L118 26 L112 42 L108 56 H92 L88 42 L82 26 Z"
        />
        <path strokeWidth="0.45" opacity="0.5" d="M100 12 V56" />
        <path strokeWidth="0.4" opacity="0.4" d="M88 28 H112" />
        <path strokeWidth="0.4" opacity="0.35" d="M90 40 H110" />
        <path strokeWidth="0.85" d="M93 56 V76 H107 V56" />
        <path
          strokeWidth="0.85"
          d="M78 76 H122 V88 C114 92 86 92 78 88 Z"
        />
        <path
          strokeWidth="1.05"
          d="M78 88 C68 96 70 104 70 112 V198 C70 210 84 218 100 218 C116 218 130 210 130 198 V112 C130 104 132 96 122 88"
        />
        <path
          strokeWidth="0.4"
          opacity="0.4"
          d="M78 108 C80 100 86 94 94 91"
        />
      </g>
      <g className="parfum-liquid" clipPath="url(#pbl-parfum-body)">
        <path
          fill="#0F2A1C"
          fillOpacity="0.2"
          d="M70 146 C82 134 94 158 104 148 C116 136 124 156 130 146 V222 H70 Z"
        />
        <path
          className="text-forest"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.85"
          strokeLinecap="round"
          d="M70 146 C82 134 94 158 104 148 C116 136 124 156 130 146"
        />
      </g>
    </svg>
  );
}

function BijouxEngraving() {
  const links = necklaceLinks();

  return (
    <svg viewBox="0 0 200 240" className="h-full w-full text-copper" aria-hidden>
      <path stroke="currentColor" strokeWidth="0.4" opacity="0.22" d="M36 226 H164" />
      <g {...line}>
        {links.map((link) => (
          <ellipse
            key={link.key}
            cx={link.cx}
            cy={link.cy}
            rx="3.1"
            ry="2.2"
            strokeWidth="0.7"
          />
        ))}
        <path
          strokeWidth="0.8"
          d="M100 72 C93 72 90 78 90 83 C90 88 94 92 100 92 C106 92 110 88 110 83 C110 78 107 72 100 72"
        />
        <path
          fill="#C4A484"
          fillOpacity="0.18"
          stroke="currentColor"
          strokeWidth="1"
          d="M100 92 C120 92 128 116 114 144 C108 156 100 166 100 166 C100 166 92 156 86 144 C72 116 80 92 100 92"
        />
        <path
          strokeWidth="0.5"
          opacity="0.65"
          d="M100 102 C114 102 118 120 110 140 C106 150 100 156 100 156 C100 156 94 150 90 140 C82 120 86 102 100 102"
        />
        <ellipse
          cx="64"
          cy="196"
          rx="20"
          ry="12"
          strokeWidth="1.15"
          transform="rotate(-22 64 196)"
        />
        <ellipse
          cx="64"
          cy="196"
          rx="13"
          ry="7"
          strokeWidth="0.45"
          opacity="0.5"
          transform="rotate(-22 64 196)"
        />
        <path
          fill="#C4A484"
          fillOpacity="0.22"
          stroke="currentColor"
          strokeWidth="0.8"
          d="M64 176 C70 176 74 182 70 190 C68 194 64 198 64 198 C64 198 60 194 58 190 C54 182 58 176 64 176"
        />
      </g>
      <path className="bijoux-glint" fill="#C4A484" d={spark(100, 126, 5.5)} />
      <path
        className="bijoux-glint bijoux-glint-b"
        fill="#F8F3EA"
        d={spark(120, 118, 3.2)}
      />
      <path
        className="bijoux-glint bijoux-glint-c"
        fill="#C4A484"
        d={spark(64, 186, 3.6)}
      />
    </svg>
  );
}

function TableEngraving() {
  return (
    <svg viewBox="0 0 200 240" className="h-full w-full text-copper" aria-hidden>
      <path stroke="currentColor" strokeWidth="0.4" opacity="0.22" d="M28 226 H172" />
      <g {...line}>
        <ellipse cx="122" cy="168" rx="62" ry="30" strokeWidth="1.1" />
        <ellipse
          cx="122"
          cy="168"
          rx="50"
          ry="22"
          strokeWidth="0.6"
          opacity="0.75"
        />
        <ellipse
          cx="122"
          cy="168"
          rx="16"
          ry="7"
          strokeWidth="0.35"
          opacity="0.3"
        />
      </g>
      <g className="table-fork text-forest">
        <path
          fill="#0F2A1C"
          fillOpacity="0.08"
          stroke="currentColor"
          strokeWidth="0.95"
          strokeLinejoin="round"
          strokeLinecap="round"
          d="M40 74 C40 70 44 68 47 68 C50 68 54 70 54 74 V128 H56 V136 H38 V128 H40 Z"
        />
        <path
          fill="#0F2A1C"
          fillOpacity="0.08"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
          d="M38 136 H41 V186 C41 189 39 190 38 190 C37 190 36 189 36 186 V136 H38 Z"
        />
        <path
          fill="#0F2A1C"
          fillOpacity="0.08"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
          d="M43 136 H46 V188 C46 191 44.5 192 43.5 192 C42.5 192 41 191 41 188 V136 H43 Z"
        />
        <path
          fill="#0F2A1C"
          fillOpacity="0.08"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
          d="M48 136 H51 V188 C51 191 49.5 192 48.5 192 C47.5 192 46 191 46 188 V136 H48 Z"
        />
        <path
          fill="#0F2A1C"
          fillOpacity="0.08"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
          d="M53 136 H56 V186 C56 189 54 190 53 190 C52 190 51 189 51 186 V136 H53 Z"
        />
        <path
          className="table-gleam"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.45"
          d="M47 76 V122"
        />
      </g>
      <g className="table-napkin" {...line}>
        <path
          fill="#F8F3EA"
          fillOpacity="0.4"
          stroke="currentColor"
          strokeWidth="0.85"
          d="M102 130 L146 122 L156 158 L112 166 Z"
        />
        <path
          strokeWidth="0.5"
          opacity="0.6"
          d="M102 130 L124 148 L112 166"
        />
      </g>
    </svg>
  );
}

function DressEngraving() {
  return (
    <svg viewBox="0 0 200 240" className="h-full w-full text-copper" aria-hidden>
      <path stroke="currentColor" strokeWidth="0.4" opacity="0.22" d="M36 226 H164" />
      <g {...line}>
        <path
          strokeWidth="0.9"
          d="M100 28 C100 14 118 12 122 24 C124 30 114 34 106 28"
        />
        <path strokeWidth="0.75" d="M100 28 V38" />
        <path strokeWidth="0.95" d="M52 48 L100 36 L148 48" />
        <path strokeWidth="0.7" d="M52 48 H148" />
      </g>
      <g className="atelier-dress">
        <path
          fill="#0F2A1C"
          fillOpacity="0.04"
          stroke="#B08A5B"
          strokeWidth="1"
          strokeLinejoin="round"
          strokeLinecap="round"
          d="M76 52 C84 70 116 70 124 52 L132 50 C146 58 148 72 136 80 L128 70 C126 90 122 104 116 112 H84 C78 104 74 90 72 70 L64 80 C52 72 54 58 68 50 Z"
        />
        <path
          fill="#0F2A1C"
          fillOpacity="0.05"
          stroke="#B08A5B"
          strokeWidth="1"
          strokeLinejoin="round"
          d="M84 112 C64 142 48 178 44 208 C76 220 124 220 156 208 C152 178 136 142 116 112 Z"
        />
        <path
          fill="none"
          stroke="#B08A5B"
          strokeWidth="0.55"
          d="M92 112 C86 148 74 180 66 208"
        />
        <path
          fill="none"
          stroke="#B08A5B"
          strokeWidth="0.55"
          d="M108 112 C114 148 126 180 134 208"
        />
        <path
          fill="none"
          stroke="#0F2A1C"
          strokeWidth="0.6"
          opacity="0.55"
          d="M44 208 C76 218 124 218 156 208"
        />
        <path
          fill="none"
          stroke="#B08A5B"
          strokeWidth="0.55"
          d="M90 112 C88 108 86 104 90 100 C96 106 100 108 100 112 C100 108 104 106 110 100 C114 104 112 108 110 112"
        />
      </g>
    </svg>
  );
}

const drawings: Record<CategoryId, () => ReactElement> = {
  parfum: ParfumEngraving,
  bijoux: BijouxEngraving,
  table: TableEngraving,
  atelier: DressEngraving,
};

export function PlateStillLife({ id }: { id: CategoryId }) {
  const Drawing = drawings[id];
  return <Drawing />;
}

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
  return Array.from({ length: 15 }, (_, i) => {
    const t = i / 14;
    const a = Math.PI + t * Math.PI;
    return {
      cx: 100 + 50 * Math.cos(a),
      cy: 54 - 26 * Math.sin(a),
      key: i,
    };
  });
}

function ParfumEngraving() {
  return (
    <svg viewBox="0 0 200 240" className="h-full w-full text-copper" aria-hidden>
      <defs>
        <clipPath id="pbl-parfum-body">
          <path d="M68 116 C68 104 76 94 88 90 H112 C124 94 132 104 132 116 V196 C132 210 118 218 100 218 C82 218 68 210 68 196 Z" />
        </clipPath>
      </defs>
      <g {...line}>
        <path strokeWidth="0.4" opacity="0.25" d="M40 226 H160" />
        <path
          strokeWidth="0.85"
          d="M100 14 L114 28 L109 50 H91 L86 28 Z"
        />
        <path strokeWidth="0.4" opacity="0.45" d="M100 14 V50" />
        <path strokeWidth="0.4" opacity="0.4" d="M90 30 H110" />
        <path strokeWidth="0.4" opacity="0.35" d="M88 40 H112" />
        <path strokeWidth="0.75" d="M94 50 V78 H106 V50" />
        <path
          strokeWidth="0.7"
          d="M80 78 H120 V88 C112 90 88 90 80 88 Z"
        />
        <path
          strokeWidth="0.85"
          d="M80 88 C66 98 68 108 68 116 V196 C68 210 82 218 100 218 C118 218 132 210 132 196 V116 C132 108 134 98 120 88"
        />
        <path
          strokeWidth="0.4"
          opacity="0.4"
          d="M76 120 C78 108 86 98 96 92"
        />
      </g>
      <g className="parfum-liquid" clipPath="url(#pbl-parfum-body)">
        <path
          fill="#0F2A1C"
          fillOpacity="0.16"
          d="M68 154 C84 147 116 161 132 154 V220 H68 Z"
        />
        <path
          {...line}
          className="text-forest"
          strokeWidth="0.7"
          d="M68 154 C84 147 116 161 132 154"
        />
        <path
          {...line}
          className="text-forest"
          strokeWidth="0.35"
          opacity="0.45"
          d="M72 166 C90 162 110 170 128 166"
        />
      </g>
    </svg>
  );
}

function BijouxEngraving() {
  const links = necklaceLinks();

  return (
    <svg viewBox="0 0 200 240" className="h-full w-full text-copper" aria-hidden>
      <g {...line}>
        <path strokeWidth="0.4" opacity="0.25" d="M36 226 H164" />
        {links.map((link) => (
          <ellipse
            key={link.key}
            cx={link.cx}
            cy={link.cy}
            rx="3.4"
            ry="2.5"
            strokeWidth="0.65"
          />
        ))}
        <path
          strokeWidth="0.7"
          d="M100 80 C92 80 88 86 88 92 C88 98 93 102 100 102 C107 102 112 98 112 92 C112 86 108 80 100 80"
        />
        <path
          strokeWidth="0.85"
          d="M100 102 C118 102 126 122 114 146 C108 158 100 168 100 168 C100 168 92 158 86 146 C74 122 82 102 100 102"
        />
        <path
          strokeWidth="0.45"
          opacity="0.7"
          d="M100 110 C114 110 118 126 110 144 C106 154 100 160 100 160 C100 160 94 154 90 144 C82 126 86 110 100 110"
        />
        <ellipse
          cx="70"
          cy="198"
          rx="16"
          ry="10"
          strokeWidth="0.8"
          transform="rotate(-18 70 198)"
        />
        <ellipse
          cx="70"
          cy="198"
          rx="11"
          ry="6"
          strokeWidth="0.4"
          opacity="0.55"
          transform="rotate(-18 70 198)"
        />
        <circle cx="70" cy="186" r="3.2" strokeWidth="0.65" />
      </g>
      <path
        className="bijoux-glint"
        fill="#C4A484"
        d={spark(100, 128, 5)}
      />
      <path
        className="bijoux-glint bijoux-glint-b"
        fill="#F8F3EA"
        d={spark(118, 120, 3)}
      />
      <path
        className="bijoux-glint bijoux-glint-c"
        fill="#C4A484"
        d={spark(82, 190, 3.2)}
      />
    </svg>
  );
}

function TableEngraving() {
  return (
    <svg viewBox="0 0 200 240" className="h-full w-full text-copper" aria-hidden>
      <g {...line}>
        <path strokeWidth="0.4" opacity="0.25" d="M28 226 H172" />
        <ellipse cx="118" cy="168" rx="64" ry="28" strokeWidth="0.9" />
        <ellipse
          cx="118"
          cy="168"
          rx="52"
          ry="21"
          strokeWidth="0.55"
          opacity="0.75"
        />
        <ellipse
          cx="118"
          cy="168"
          rx="18"
          ry="7"
          strokeWidth="0.35"
          opacity="0.35"
        />
        <g className="table-fork text-forest">
          <path
            strokeWidth="0.85"
            d="M40 78 C40 74 44 72 46 72 C48 72 52 74 52 78 V136"
          />
          <path strokeWidth="0.7" d="M39 136 H53 V142 H39 Z" />
          <path strokeWidth="0.7" d="M40 142 V188" />
          <path strokeWidth="0.7" d="M44 142 V190" />
          <path strokeWidth="0.7" d="M48 142 V190" />
          <path strokeWidth="0.7" d="M52 142 V188" />
          <path
            className="table-gleam"
            strokeWidth="0.45"
            opacity="0.35"
            d="M44 84 V128"
          />
        </g>
        <g className="table-napkin">
          <path
            strokeWidth="0.75"
            d="M96 128 L142 118 L154 154 L108 164 Z"
          />
          <path
            strokeWidth="0.45"
            opacity="0.6"
            d="M96 128 L118 146 L108 164"
          />
          <path
            strokeWidth="0.35"
            opacity="0.4"
            d="M110 126 L132 144"
          />
        </g>
      </g>
    </svg>
  );
}

function DressEngraving() {
  return (
    <svg viewBox="0 0 200 240" className="h-full w-full text-copper" aria-hidden>
      <g {...line}>
        <path strokeWidth="0.4" opacity="0.25" d="M36 226 H164" />
        <path
          strokeWidth="0.75"
          d="M100 30 C100 16 116 14 120 24 C122 30 114 32 108 28"
        />
        <path strokeWidth="0.7" d="M100 28 V36" />
        <path strokeWidth="0.8" d="M54 46 L100 36 L146 46 H54" />
      </g>
      <g className="atelier-dress" {...line}>
        <path
          strokeWidth="0.85"
          d="M74 50 C78 64 122 64 126 50"
        />
        <path strokeWidth="0.75" d="M68 48 L74 50 M132 48 L126 50" />
        <path
          strokeWidth="0.75"
          d="M68 48 C54 56 52 70 64 76 L74 66"
        />
        <path
          strokeWidth="0.75"
          d="M132 48 C146 56 148 70 136 76 L126 66"
        />
        <path
          strokeWidth="0.8"
          d="M74 66 C76 88 80 102 86 110 H114 C120 102 124 88 126 66"
        />
        <path strokeWidth="0.55" d="M86 110 H114" />
        <path
          strokeWidth="0.45"
          opacity="0.55"
          d="M92 110 C90 108 88 104 90 100 C94 104 98 106 100 110 C102 106 106 104 110 100 C112 104 110 108 108 110"
        />
        <path
          strokeWidth="0.85"
          d="M86 110 C68 136 50 176 46 208 C74 218 126 218 154 208 C150 176 132 136 114 110"
        />
        <path
          className="text-forest"
          strokeWidth="0.5"
          opacity="0.65"
          d="M46 208 C74 216 126 216 154 208"
        />
        <path
          strokeWidth="0.45"
          opacity="0.5"
          d="M96 112 C88 150 78 180 72 206"
        />
        <path
          strokeWidth="0.45"
          opacity="0.5"
          d="M104 112 C112 150 122 180 128 206"
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

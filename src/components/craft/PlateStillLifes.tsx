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
        <path strokeWidth="0.4" opacity="0.28" d="M36 222 H164" />
        <ellipse cx="100" cy="222" rx="38" ry="4" strokeWidth="0.35" opacity="0.22" />
        <ellipse cx="100" cy="22" rx="12" ry="6.5" strokeWidth="0.7" />
        <path
          strokeWidth="0.7"
          d="M88 28 C88 24 93 20 100 20 C107 20 112 24 112 28 L109 48 H91 Z"
        />
        <path strokeWidth="0.4" opacity="0.5" d="M94 28 H106 M100 20 V48" />
        <path strokeWidth="0.45" opacity="0.4" d="M92 36 H108" />
        <path strokeWidth="0.7" d="M94 48 V74 H106 V48" />
        <path strokeWidth="0.55" d="M97 48 V74 M103 48 V74" opacity="0.35" />
        <path strokeWidth="0.75" d="M84 74 H116 V83 H84 Z" />
        <path strokeWidth="0.4" d="M88 74 V83 M112 74 V83" opacity="0.4" />
        <path
          strokeWidth="0.8"
          d="M84 83 C66 90 60 104 60 122 V194 C60 208 72 218 86 218 H114 C128 218 140 208 140 194 V122 C140 104 134 90 116 83"
        />
        <path
          strokeWidth="0.4"
          opacity="0.4"
          d="M72 118 C74 108 80 96 92 88"
        />
        <path
          strokeWidth="0.45"
          opacity="0.5"
          d="M70 124 V190 C70 202 78 210 88 212"
        />
        <rect x="82" y="116" width="36" height="54" rx="1.5" strokeWidth="0.6" />
        <rect
          x="86"
          y="120"
          width="28"
          height="46"
          rx="1"
          strokeWidth="0.4"
          opacity="0.75"
        />
        <path
          className="text-forest"
          strokeWidth="0.5"
          d="M62 178 C78 173 122 183 138 178"
          opacity="0.7"
        />
        <path
          className="text-forest"
          strokeWidth="0.35"
          d="M64 182 C80 178 120 186 136 182"
          opacity="0.4"
        />
        <path strokeWidth="0.4" opacity="0.3" d="M80 218 H120" />
      </g>
      <g className="text-copper" transform="translate(95 136)">
        <FourPointStar size={10} />
      </g>
    </svg>
  );
}

function BijouxEngraving() {
  return (
    <svg viewBox="0 0 200 240" className="h-full w-full text-copper" aria-hidden>
      <g {...line}>
        <path strokeWidth="0.4" opacity="0.28" d="M40 226 H160" />
        <circle cx="100" cy="20" r="2.6" strokeWidth="0.55" />
        <path strokeWidth="0.45" d="M100 22.6 V28" />
        <ellipse cx="100" cy="33" rx="3.4" ry="2.6" strokeWidth="0.55" />
        <ellipse cx="100" cy="44" rx="3.4" ry="2.6" strokeWidth="0.55" />
        <ellipse cx="100" cy="55" rx="3.4" ry="2.6" strokeWidth="0.55" />
        <path strokeWidth="0.5" d="M100 57.6 V68" />
        <path
          strokeWidth="0.7"
          d="M100 68 C91 68 86 74 86 80 C86 87 92 92 100 92 C108 92 114 87 114 80 C114 74 109 68 100 68"
        />
        <path
          strokeWidth="0.8"
          d="M100 96 C82 96 70 112 70 130 C70 152 84 170 100 170 C116 170 130 152 130 130 C130 112 118 96 100 96"
        />
        <path
          strokeWidth="0.45"
          opacity="0.7"
          d="M100 104 C86 104 78 116 78 130 C78 148 88 162 100 162 C112 162 122 148 122 130 C122 116 114 104 100 104"
        />
        <path strokeWidth="0.4" opacity="0.4" d="M100 104 V162" />
        <path strokeWidth="0.4" opacity="0.38" d="M78 122 L122 138" />
        <path strokeWidth="0.4" opacity="0.38" d="M122 122 L78 138" />
        <path strokeWidth="0.55" d="M100 96 L104 104 H96 Z" />
        <path strokeWidth="0.55" d="M70 130 L78 126 V134 Z" />
        <path strokeWidth="0.55" d="M130 130 L122 126 V134 Z" />
        <path strokeWidth="0.55" d="M100 170 L104 162 H96 Z" />
        <path strokeWidth="0.5" d="M100 170 V182" />
        <ellipse cx="100" cy="192" rx="6" ry="8.5" strokeWidth="0.65" />
        <ellipse
          cx="100"
          cy="192"
          rx="3.2"
          ry="5"
          strokeWidth="0.35"
          opacity="0.5"
        />
        <path
          strokeWidth="0.35"
          opacity="0.3"
          d="M84 118 C90 112 110 112 116 118"
        />
      </g>
      <g className="text-copper" transform="translate(95 118)">
        <FourPointStar size={10} />
      </g>
    </svg>
  );
}

function TableEngraving() {
  return (
    <svg viewBox="0 0 200 240" className="h-full w-full text-copper" aria-hidden>
      <g {...line}>
        <path strokeWidth="0.4" opacity="0.28" d="M28 226 H172" />
        <path
          strokeWidth="0.75"
          d="M30 52 H108 L94 128 H18 Z"
        />
        <path
          strokeWidth="0.5"
          opacity="0.7"
          d="M30 52 L64 86 L52 128"
        />
        <path strokeWidth="0.4" opacity="0.45" d="M48 52 L72 80 L62 128" />
        <path
          strokeWidth="0.35"
          opacity="0.35"
          d="M38 64 H92 M34 78 H86 M28 104 H80"
        />
        <ellipse cx="118" cy="172" rx="64" ry="28" strokeWidth="0.8" />
        <ellipse
          cx="118"
          cy="172"
          rx="52"
          ry="20"
          strokeWidth="0.5"
          opacity="0.7"
        />
        <ellipse
          cx="118"
          cy="172"
          rx="22"
          ry="8"
          strokeWidth="0.35"
          opacity="0.35"
        />
        <g className="text-forest" opacity="0.88">
          <path strokeWidth="0.75" d="M158 34 L96 148" />
          <path strokeWidth="0.55" d="M158 34 L164 48 L154 46 Z" />
          <path strokeWidth="0.45" d="M148 56 L152 66" />
          <path strokeWidth="0.55" d="M96 148 L78 186" />
          <path strokeWidth="0.5" d="M96 148 L86 188" />
          <path strokeWidth="0.5" d="M96 148 L96 190" />
          <path strokeWidth="0.5" d="M96 148 L106 188" />
          <path strokeWidth="0.4" d="M80 184 L108 184" opacity="0.45" />
        </g>
      </g>
    </svg>
  );
}

function DressEngraving() {
  return (
    <svg viewBox="0 0 200 240" className="h-full w-full text-copper" aria-hidden>
      <g {...line}>
        <path strokeWidth="0.4" opacity="0.28" d="M36 226 H164" />
        <path strokeWidth="0.75" d="M28 40 H172" />
        <circle cx="28" cy="40" r="3.2" strokeWidth="0.55" />
        <circle cx="172" cy="40" r="3.2" strokeWidth="0.55" />
        <path
          strokeWidth="0.45"
          opacity="0.4"
          d="M28 40 C28 46 36 48 44 44"
        />
        <path
          strokeWidth="0.8"
          d="M48 40 C46 58 36 72 38 96 C40 128 54 164 46 204 C72 216 90 220 100 220 C110 220 128 216 154 204 C146 164 160 128 162 96 C164 72 154 58 152 40"
        />
        <path
          strokeWidth="0.55"
          opacity="0.75"
          d="M66 40 C62 86 74 140 64 208"
        />
        <path
          strokeWidth="0.55"
          opacity="0.75"
          d="M100 40 C96 92 104 150 100 220"
        />
        <path
          strokeWidth="0.55"
          opacity="0.75"
          d="M134 40 C138 86 126 140 136 208"
        />
        <path
          strokeWidth="0.4"
          opacity="0.4"
          d="M82 40 C78 100 90 160 80 214"
        />
        <path
          strokeWidth="0.4"
          opacity="0.4"
          d="M118 40 C122 100 110 160 120 214"
        />
        <path
          className="text-forest"
          strokeWidth="0.55"
          d="M46 204 C72 214 90 218 100 218 C110 218 128 214 154 204"
          opacity="0.7"
        />
        <path strokeWidth="0.4" opacity="0.35" d="M72 40 H128" />
        <path
          strokeWidth="0.4"
          opacity="0.3"
          d="M58 70 C80 78 120 78 142 70"
        />
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

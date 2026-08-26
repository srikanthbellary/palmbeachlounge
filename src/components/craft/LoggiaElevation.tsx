const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Column({ x }: { x: number }) {
  const half = 5;
  return (
    <g>
      <path
        {...stroke}
        strokeWidth="0.7"
        d={`M${x - half} 116 V196 H${x + half} V116`}
      />
      <path
        {...stroke}
        strokeWidth="0.55"
        d={`M${x - 8} 112 H${x + 8} V118 H${x - 8} Z`}
      />
      <path
        {...stroke}
        strokeWidth="0.55"
        d={`M${x - 7.5} 196 H${x + 7.5} V202 H${x - 7.5} Z`}
      />
      <path
        {...stroke}
        strokeWidth="0.4"
        opacity="0.45"
        d={`M${x - 2} 124 V190`}
      />
    </g>
  );
}

function Arch({ x1, x2 }: { x1: number; x2: number }) {
  const rx = (x2 - x1) / 2 - 5;
  return (
    <path
      {...stroke}
      strokeWidth="0.75"
      d={`M${x1 + 5} 116 A${rx} 30 0 0 1 ${x2 - 5} 116`}
    />
  );
}

function Balustrade({ x1, x2 }: { x1: number; x2: number }) {
  const mid = (x1 + x2) / 2;
  const xs = [x1 + 22, mid, x2 - 22];
  return (
    <g className="text-forest" opacity="0.7">
      <path {...stroke} strokeWidth="0.45" d={`M${x1 + 8} 176 H${x2 - 8}`} />
      {xs.map((x) => (
        <path
          key={x}
          {...stroke}
          strokeWidth="0.4"
          d={`M${x} 176 C${x - 3} 182 ${x - 3} 188 ${x} 196 M${x} 176 C${x + 3} 182 ${x + 3} 188 ${x} 196`}
        />
      ))}
    </g>
  );
}

export function LoggiaElevation() {
  const columns = [92, 204, 316, 428];

  return (
    <svg
      viewBox="0 0 640 248"
      className="mx-auto h-auto w-full text-copper"
      aria-hidden
    >
      <g {...stroke}>
        <path strokeWidth="0.7" d="M28 220 H612" />
        <path strokeWidth="0.5" d="M52 206 H588 V220" />
        <path strokeWidth="0.5" d="M52 206 V220" />

        <path strokeWidth="0.8" d="M64 40 H444" />
        <path strokeWidth="0.45" d="M68 46 H440" />
        <path strokeWidth="0.7" d="M64 40 V68 H444 V40" />
        <path strokeWidth="0.55" d="M64 68 H444" />

        {Array.from({ length: 19 }, (_, i) => {
          const x = 74 + i * 19;
          return (
            <path
              key={x}
              strokeWidth="0.35"
              opacity="0.55"
              d={`M${x} 41 V45.5`}
            />
          );
        })}

        <path strokeWidth="0.55" d="M72 68 H436 V86 H72 Z" />
        {Array.from({ length: 12 }, (_, i) => {
          const x = 80 + i * 30;
          return (
            <path
              key={x}
              strokeWidth="0.4"
              d={`M${x} 70 V84`}
            />
          );
        })}
        <path
          strokeWidth="0.35"
          opacity="0.5"
          d="M76 77 H432"
        />

        {columns.map((x) => (
          <Column key={x} x={x} />
        ))}

        <Arch x1={92} x2={204} />
        <Arch x1={204} x2={316} />
        <Arch x1={316} x2={428} />

        <Balustrade x1={92} x2={204} />
        <Balustrade x1={204} x2={316} />
        <Balustrade x1={316} x2={428} />

        <path strokeWidth="0.7" d="M456 40 H592 V206 H456 Z" />
        <path strokeWidth="0.45" d="M464 48 H584 V198 H464 Z" />
        {Array.from({ length: 14 }, (_, i) => {
          const y = 56 + i * 10;
          return (
            <path
              key={y}
              strokeWidth="0.4"
              opacity="0.75"
              d={`M468 ${y} H580`}
            />
          );
        })}
        <path
          className="text-forest"
          strokeWidth="0.45"
          d="M524 48 V198"
          opacity="0.55"
        />

        <path strokeWidth="0.55" d="M444 40 H456 V68 H444" />
        <path strokeWidth="0.4" d="M40 214 H600" opacity="0.35" />
      </g>
    </svg>
  );
}

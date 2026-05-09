// Decorative spatial / map-inspired composition.
// Pure SVG, themed via CSS variables. Subtle, not literal.
export function MapVisual() {
  return (
    <div className="relative aspect-square w-full max-w-[560px] mx-auto">
      {/* soft halo */}
      <div className="absolute inset-0 rounded-full bg-mesh blur-2xl opacity-80" />

      <svg
        viewBox="0 0 600 600"
        className="relative w-full h-full"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="ring" cx="50%" cy="50%" r="50%">
            <stop
              offset="60%"
              stopColor="var(--color-primary-glow)"
              stopOpacity="0"
            />
            <stop
              offset="100%"
              stopColor="var(--color-primary-glow)"
              stopOpacity="0.35"
            />
          </radialGradient>
          <linearGradient id="line" x1="0" x2="1" y1="0" y2="1">
            <stop
              offset="0%"
              stopColor="var(--color-primary-glow)"
              stopOpacity="0.7"
            />
            <stop
              offset="100%"
              stopColor="var(--color-primary-glow)"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>

        {/* topo grid */}
        <g stroke="currentColor" className="text-foreground/8" strokeWidth="1">
          {Array.from({ length: 11 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 60} x2="600" y2={i * 60} />
          ))}
          {Array.from({ length: 11 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 60} y1="0" x2={i * 60} y2="600" />
          ))}
        </g>

        {/* concentric proximity rings */}
        {[80, 140, 210, 280].map((r, i) => (
          <circle
            key={r}
            cx="300"
            cy="300"
            r={r}
            stroke="currentColor"
            className="text-primary/25"
            strokeWidth="1"
            strokeDasharray={i === 3 ? "2 6" : undefined}
          />
        ))}
        <circle cx="300" cy="300" r="280" fill="url(#ring)" />

        {/* connection lines */}
        <g stroke="url(#line)" strokeWidth="1.2">
          <path d="M300 300 L120 180" />
          <path d="M300 300 L470 150" />
          <path d="M300 300 L500 380" />
          <path d="M300 300 L380 500" />
          <path d="M300 300 L150 430" />
          <path d="M300 300 L210 250" />
          <path d="M300 300 L420 290" />
        </g>

        {/* nodes */}
        {[
          [120, 180, 8],
          [470, 150, 9],
          [500, 380, 7],
          [380, 500, 9],
          [150, 430, 8],
          [210, 250, 5],
          [420, 290, 6],
          [340, 200, 4],
          [260, 380, 4],
        ].map(([x, y, r], i) => (
          <g key={i}>
            <circle
              cx={x}
              cy={y}
              r={Number(r) + 6}
              className="fill-primary/10"
            />
            <circle cx={x} cy={y} r={r} className="fill-primary" />
          </g>
        ))}

        {/* center pin */}
        <g>
          <circle cx="300" cy="300" r="22" className="fill-primary/15" />
          <circle cx="300" cy="300" r="12" className="fill-primary" />
          <circle cx="300" cy="300" r="4" className="fill-background" />
        </g>
      </svg>

      {/* pulsing rings overlay */}
      <span className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/40 animate-pulse-ring" />
      <span className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 animate-pulse-ring [animation-delay:1.2s]" />
    </div>
  );
}

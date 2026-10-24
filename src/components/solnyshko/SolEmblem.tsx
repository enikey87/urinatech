function SolEmblem({ size = 120 }: { size?: number }) {
  const rays = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <svg
      className="sol-emblem"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label="Эмблема пансионата «Солнышко»"
    >
      <g className="sol-emblem__rays">
        {rays.map((deg) => (
          <rect
            key={deg}
            x="46.5"
            y="1"
            width="7"
            height="17"
            rx="3.5"
            transform={`rotate(${deg} 50 50)`}
          />
        ))}
      </g>
      <circle cx="50" cy="50" r="24" className="sol-emblem__disc" />
      <circle cx="50" cy="50" r="10" className="sol-emblem__core" />
    </svg>
  );
}

export default SolEmblem;

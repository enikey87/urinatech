type SolEmblemProps = {
  size?: number;
  /** Внутри кнопки эмблема — только картинка: подпись даёт сама кнопка. */
  decorative?: boolean;
};

const EMBLEM_LABEL = "Эмблема пансионата «Солнышко» — солнечное колесо";

function SolEmblem({ size = 120, decorative = false }: SolEmblemProps) {
  // Славянское солнечное колесо (коловрат): обод, восемь изогнутых
  // лучей-спиц и ступица. Лучи медленно вращаются — колесо «кружит».
  const spokes = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <svg
      className="sol-emblem"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role={decorative ? "presentation" : "img"}
      aria-label={decorative ? undefined : EMBLEM_LABEL}
      aria-hidden={decorative ? true : undefined}
      focusable={false}
    >
      <circle className="sol-emblem__rim" cx="50" cy="50" r="45" />
      <g className="sol-emblem__rays">
        {spokes.map((deg) => (
          <path
            key={deg}
            d="M 50 34 Q 58 22 50 9"
            transform={`rotate(${deg} 50 50)`}
          />
        ))}
      </g>
      <circle className="sol-emblem__disc" cx="50" cy="50" r="14" />
      <circle className="sol-emblem__core" cx="50" cy="50" r="5.5" />
    </svg>
  );
}

export default SolEmblem;

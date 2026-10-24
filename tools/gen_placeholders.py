#!/usr/bin/env python3
"""Генератор SVG-заглушек для аватаров «пациентов» УринаТех.

Использование: python3 tools/gen_placeholders.py <slug> <Инициалы> [variant 0-3] ...
Можно передать несколько троек подряд. Файлы пишутся в public/avatars/<slug>.svg.

Стиль — «Техдок ГОСТ»: бумага, штриховка, чернильный контур, инициалы.
"""
import sys
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "public" / "avatars"

PALETTES = [
    {"accent": "#b03a2e", "pattern": "#27436b"},  # красный/синий
    {"accent": "#27436b", "pattern": "#b03a2e"},  # синий/красный
    {"accent": "#a87200", "pattern": "#27436b"},  # золотой/синий
    {"accent": "#1f1a12", "pattern": "#b03a2e"},  # чернильный/красный
]

TEMPLATE = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" role="img" aria-label="Карточка пациента: {initials}">
  <defs>
    <pattern id="h-{slug}" width="18" height="18" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="18" stroke="{pattern}" stroke-width="2" opacity="0.14"/>
    </pattern>
  </defs>
  <rect width="256" height="256" fill="#faf3e0"/>
  <rect width="256" height="256" fill="url(#h-{slug})"/>
  <circle cx="128" cy="128" r="97" fill="#faf3e0" stroke="#1f1a12" stroke-width="5"/>
  <circle cx="128" cy="128" r="86" fill="none" stroke="{accent}" stroke-width="2" stroke-dasharray="6 5"/>
  <text x="128" y="152" text-anchor="middle" font-family="'PT Sans','Arial',sans-serif" font-weight="700" font-size="68" fill="#1f1a12" letter-spacing="2">{initials}</text>
  <circle cx="186" cy="70" r="7" fill="{accent}"/>
  <rect x="34" y="222" width="60" height="3" fill="{accent}"/>
</svg>
"""


def main() -> None:
    args = sys.argv[1:]
    if not args or len(args) % 3 != 0:
        print(__doc__)
        sys.exit(1)
    OUT.mkdir(parents=True, exist_ok=True)
    for i in range(0, len(args), 3):
        slug, initials, variant = args[i], args[i + 1], int(args[i + 2]) % len(PALETTES)
        svg = TEMPLATE.format(
            slug=slug.replace("-", ""),
            initials=initials.upper()[:2],
            **PALETTES[variant],
        )
        path = OUT / f"{slug}.svg"
        path.write_text(svg, encoding="utf-8")
        print(f"written {path}")


if __name__ == "__main__":
    main()

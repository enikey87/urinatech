import { FACTORS } from "../../data/solnyshko";

function SolFactors() {
  return (
    <section className="sol-section sol-section--wide">
      <div className="sol-container">
        <span className="sol-label">Природные лечебные факторы</span>
        <h2 className="sol-title">
          Чем дышит <em>здравница</em>
        </h2>
        <p className="sol-sub">
          Факторы естественного происхождения, задокументированы комиссией в
          составе: старшая сестра, Зинаида, Потапыч (подпись копытом не
          расшифровывается).
        </p>
        <div className="sol-station">
          {FACTORS.map((f) => (
            <article key={f.name} className="sol-card">
              <div className="sol-card__emoji">{f.emoji}</div>
              <h3>{f.name}</h3>
              <p>{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SolFactors;

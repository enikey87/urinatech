import { ROADMAP } from "../data/catalog";

function Roadmap() {
  return (
    <section id="roadmap">
      <div className="container">
        <span className="section-label">П.11 · Стратегия развития</span>
        <h2 className="section-title">Программа 2026–2030</h2>
        <p className="section-sub">
          Утверждена советом директоров 01.03.2026 (кворум обеспечен). Раздел
          предназначен для инвесторов и партнёров; планы в него включены по мере
          их утверждения и не подлежат изменению, кроме случаев изменения.
        </p>
        <div className="roadmap-grid">
          {ROADMAP.map((r) => (
            <div key={r.date + r.title} className="glass roadmap-card">
              <div className="roadmap-card__q">{r.date}</div>
              <div className="roadmap-card__emoji">{r.emoji}</div>
              <div className="roadmap-card__title">{r.title}</div>
              <div className="roadmap-card__text">{r.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Roadmap;

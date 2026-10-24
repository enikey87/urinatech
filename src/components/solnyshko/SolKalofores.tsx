import { KALO_MODES, KALO_SUBSTANCES, KALO_ULTIMATE } from "../../data/solnyshko";

function SolKalofores() {
  return (
    <section id="sol-kalofores" className="sol-section sol-section--wide">
      <div className="sol-container">
        <span className="sol-label">Уникальная разработка · заявка на патент №1246-К</span>
        <h2 className="sol-title">
          Калофорез<sup>®</sup> — перенятие силы <em>зверя</em>
        </h2>
        <p className="sol-sub">
          Методика родственная гальваногрязетерапии, практикуемой в Крыму
          (Саки, Евпатория). Принципиальное отличие: вместо грязи —
          биосубстанция. Слабый ток 4,2 мА пропекает силу зверя через
          поясницу по запатентованной траектории (траектория приложению не
          подлежит).
        </p>

        <div className="sol-kalo">
          {KALO_SUBSTANCES.map((s) => (
            <article key={s.name} className="sol-card sol-card--accent">
              <div className="sol-card__emoji">{s.emoji}</div>
              <h3>{s.name}</h3>
              <div className="sol-enemas__region">{s.source}</div>
              <p className="sol-enemas__substance">{s.collection}</p>
              <p className="sol-enemas__note">{s.effect}</p>
            </article>
          ))}
        </div>

        <div className="sol-device">
          <div className="sol-device__head">
            <h3>Аппарат «Калофорез-Кедр М2»</h3>
            <span className="sol-badge">М — медведь, 2 — два зверя</span>
          </div>
          <div className="sol-device__modes">
            {KALO_MODES.map((m) => (
              <div key={m.name} className="sol-device__mode">
                <div className="sol-device__mode-name">{m.name}</div>
                <div className="sol-device__mode-current">{m.current}</div>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
          <div className="sol-device__row">
            <div>
              <b>Показания:</b> упадок медвежьей силы, городская хандра, зима
              без снега, отсутствие следа на пороге.
            </div>
            <div>
              <b>Противопоказания:</b> вегетарианство; здоровый скепсис
              (временно снимается первой процедурой).
            </div>
          </div>
        </div>

        <div className="sol-ultimate">
          <div className="sol-ultimate__head">
            <h3>{KALO_ULTIMATE.name}</h3>
            <span className="sol-badge">для особых случаев · {KALO_ULTIMATE.code}</span>
          </div>
          <p className="sol-ultimate__intro">{KALO_ULTIMATE.intro}</p>
          <div className="sol-ultimate__nails">
            {KALO_ULTIMATE.nails.map((n) => (
              <div key={n.title} className="sol-ultimate__nail">
                <b>🔨 {n.title}</b>
                <p>{n.use}</p>
              </div>
            ))}
          </div>
          <p className="sol-ultimate__current">{KALO_ULTIMATE.current}</p>
          <p className="sol-ultimate__ban">⚠ {KALO_ULTIMATE.ban}</p>
          <p className="sol-ultimate__last">{KALO_ULTIMATE.ifNotHelped}</p>
        </div>
      </div>
    </section>
  );
}

export default SolKalofores;

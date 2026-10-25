import {
  LOYALTY_GIFT,
  LOYALTY_RULES,
  LOYALTY_TIERS,
  SOL_LOYALTY,
} from "../../data/solnyshko";

function SolLoyalty() {
  return (
    <section className="sol-section">
      <div className="sol-container">
        <span className="sol-label">Программа лояльности</span>
        <h2 className="sol-title">
          Постоянным <em>спящим</em>
        </h2>
        <p className="sol-sub">{SOL_LOYALTY.lead}</p>
        <div className="sol-loyalty__base">
          <div className="sol-loyalty__base-num">
            {SOL_LOYALTY.base.num}
            <span>{SOL_LOYALTY.base.scale}</span>
          </div>
          <p>{SOL_LOYALTY.base.text}</p>
        </div>
        <div className="sol-loyalty">
          {LOYALTY_TIERS.map((t) => (
            <article
              key={t.name}
              className="sol-card sol-card--sm sol-card--accent"
            >
              <div className="sol-loyalty__head">
                <span className="sol-card__emoji">{t.emoji}</span>
                <h3>{t.name}</h3>
              </div>
              <div className="sol-loyalty__threshold">{t.threshold}</div>
              <p>{t.desc}</p>
              <ul className="sol-loyalty__perks">
                {t.perks.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="sol-loyalty__gift">
          <h3 className="sol-loyalty__block-title">{SOL_LOYALTY.giftTitle}</h3>
          <ol className="sol-loyalty__gift-list">
            {LOYALTY_GIFT.map((g, i) => (
              <li key={g}>
                <b>{String(i + 1).padStart(2, "0")}</b>
                <span>{g}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="sol-loyalty__rules">
          <h3 className="sol-loyalty__block-title">{SOL_LOYALTY.rulesTitle}</h3>
          <div className="sol-loyalty__rule-list">
            {LOYALTY_RULES.map((r) => (
              <article key={r.no} className="sol-loyalty__rule">
                <div className="sol-loyalty__rule-no">{r.no}</div>
                <h4>{r.title}</h4>
                <p>{r.text}</p>
              </article>
            ))}
          </div>
        </div>
        <p className="sol-loyalty__registry">
          Опись № 1246-Л · статусов: {LOYALTY_TIERS.length} · участников:{" "}
          11 999 · журнал спячки не оцифрован · нарушений п. 1246-Г не
          зафиксировано
        </p>
      </div>
    </section>
  );
}

export default SolLoyalty;

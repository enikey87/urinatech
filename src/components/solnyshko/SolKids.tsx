import { KIDS_DAY, KIDS_GROUPS, KIDS_RULES } from "../../data/solnyshko";

function SolKids() {
  return (
    <section className="sol-section">
      <div className="sol-container">
        <span className="sol-label">Детский отдых</span>
        <h2 className="sol-title">
          Малые <em>медвежата</em>
        </h2>
        <p className="sol-sub">
          Приём медвежат ведётся с 1246 лет. Программа согласована с распорядком
          взрослых групп, столом №1246 и п. 1246-Г: гвоздевой комплект в детский
          круг не поступает — забота соблюдается заранее, до поступления запроса.
        </p>
        <div className="sol-kids">
          {KIDS_GROUPS.map((g) => (
            <article key={g.name} className="sol-card sol-card--sm">
              <div className="sol-card__emoji">{g.emoji}</div>
              <h3>{g.name}</h3>
              <div className="sol-kids__age">{g.age}</div>
              <p className="sol-enemas__note">{g.desc}</p>
              <div className="sol-kids__shift">{g.shift}</div>
            </article>
          ))}
        </div>
        <div className="sol-kids__lower">
          <div className="sol-kids__day">
            <h3 className="sol-kids__day-title">Распорядок дня медвежонка</h3>
            <ul className="sol-kids__day-list">
              {KIDS_DAY.map((d) => (
                <li key={d.time}>
                  <b>{d.time}</b>
                  <span>{d.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="sol-kids__rules">
            {KIDS_RULES.map((r) => (
              <article
                key={r.title}
                className={`sol-kids__rule sol-kids__rule--${r.kind}`}
              >
                <h4>{r.title}</h4>
                <p>{r.text}</p>
              </article>
            ))}
          </div>
        </div>
        <p className="sol-kids__registry">
          Реестр смен № 1246-Д · групп: {KIDS_GROUPS.length} · гвоздей выдано: 0 ·
          компот — по норме · нарушений п. 1246-Г не зафиксировано
        </p>
      </div>
    </section>
  );
}

export default SolKids;

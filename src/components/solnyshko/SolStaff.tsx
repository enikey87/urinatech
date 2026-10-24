import { SOL_STAFF } from "../../data/solnyshko";

function SolStaff() {
  return (
    <section className="sol-section">
      <div className="sol-container">
        <span className="sol-label">Персонал</span>
        <h2 className="sol-title">Кто вас будет лечить</h2>
        <p className="sol-sub">
          Штат укомплектован полностью. Потапыч в штат не входит, но входит
          через калитку — каждое утро, в порядке субординации.
        </p>
        <div className="sol-staff">
          {SOL_STAFF.map((s) => (
            <article key={s.name} className="sol-card sol-card--sm">
              <div className="sol-card__emoji">{s.avatar}</div>
              <h3>{s.name}</h3>
              <div className="sol-enemas__region">{s.role}</div>
              <p className="sol-enemas__note">{s.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SolStaff;

import { PROFILES } from "../../data/solnyshko";

function SolProfiles() {
  return (
    <section className="sol-section">
      <div className="sol-container">
        <span className="sol-label">Профили лечения</span>
        <h2 className="sol-title">
          Что мы лечим, и <em>чем это оправдано</em>
        </h2>
        <p className="sol-sub">
          Профили утверждены методическим советом здравницы (кворум обеспечен
          Зинаидой). Не вошедшие в перечень заболевания переносятся на следующий
          сезон — вместе с пациентом.
        </p>
        <div className="sol-station">
          {PROFILES.map((p) => (
            <article key={p.system} className="sol-card">
              <div className="sol-card__emoji">{p.emoji}</div>
              <h3>{p.system}</h3>
              <ul className="sol-profiles__list">
                {p.indications.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <p className="sol-enemas__note">Метод: {p.method}.</p>
            </article>
          ))}
        </div>
        <p className="sol-profiles__contra">
          Противопоказания (краткий перечень): здравый смысл, вегетарианство,
          одновременное пребывание в другом здравнице. Полный перечень — в
          инструкции к аппарату «Калофорез-Кедр М2».
        </p>
      </div>
    </section>
  );
}

export default SolProfiles;

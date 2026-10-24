import { ROOMS } from "../../data/solnyshko";

function SolRooms() {
  return (
    <section className="sol-section">
      <div className="sol-container">
        <span className="sol-label">Проживание</span>
        <h2 className="sol-title">Номерной фонд</h2>
        <p className="sol-sub">
          Три категории размещения. Во всех категориях стакан входит в
          стоимость; во второй и третьей — два.
        </p>
        <div className="sol-station">
          {ROOMS.map((r) => (
            <article key={r.name} className="sol-card">
              <div className="sol-card__emoji">{r.emoji}</div>
              <h3>{r.name}</h3>
              <ul className="sol-rooms__list">
                {r.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <p className="sol-enemas__note">{r.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SolRooms;

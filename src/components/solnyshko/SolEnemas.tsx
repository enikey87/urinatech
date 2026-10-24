import { ENEMAS } from "../../data/solnyshko";

function SolEnemas() {
  return (
    <section id="sol-enemas" className="sol-section">
      <div className="sol-container">
        <span className="sol-label">Клизмотроника™ · двенадцать рецептур</span>
        <h2 className="sol-title">
          Гидратация природными богатствами <em>России</em>
        </h2>
        <p className="sol-sub">
          Каждая рецептура привязана к конкретной точке карты и доставляется
          термоконтейнером с сохранением характера местности. Сырьё —
          исключительно отечественное, характер — соответствующий.
        </p>
        <div className="sol-enemas">
          {ENEMAS.map((e) => (
            <article key={e.id} className="sol-card sol-card--sm">
              <div className="sol-card__emoji">{e.emoji}</div>
              <h3>{e.name}</h3>
              <div className="sol-enemas__region">{e.region}</div>
              <p className="sol-enemas__substance">{e.substance}</p>
              <p className="sol-enemas__note">{e.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SolEnemas;

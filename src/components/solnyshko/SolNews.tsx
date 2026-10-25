import { SOL_EVENTS, SOL_NEWS } from "../../data/solnyshko";

function SolNews() {
  return (
    <section id="sol-news" className="sol-section">
      <div className="sol-container">
        <span className="sol-label">Хроника здравницы</span>
        <h2 className="sol-title">
          Новости и <em>афиша</em>
        </h2>
        <p className="sol-sub">
          События вносятся в журнал в день совершения; устные сообщения к
          сведению не принимаются. Лента ведётся непрерывно с 1246 года,
          опровержений не зафиксировано.
        </p>
        <div className="sol-news">
          {SOL_NEWS.map((n) => (
            <article className="sol-news__item" key={n.no}>
              <div className="sol-news__head">
                <span className="sol-news__date">{n.date}</span>
                <span className="sol-news__no">{n.no}</span>
              </div>
              <h3>{n.title}</h3>
              <p>{n.text}</p>
            </article>
          ))}
        </div>
        <h3 className="sol-afisha__title">Афиша досуга</h3>
        <p className="sol-afisha__lead">
          Досуг согласован с распорядком спячки и не переносится по просьбе
          отдыхающих: перенос считается побудкой.
        </p>
        <div className="sol-afisha">
          {SOL_EVENTS.map((e) => (
            <article className="sol-afisha__item" key={e.title}>
              <div className="sol-afisha__when">{e.when}</div>
              <h4>
                <span className="sol-afisha__emoji">{e.emoji}</span>
                {e.title}
              </h4>
              <div className="sol-afisha__place">{e.place}</div>
              <p>{e.note}</p>
            </article>
          ))}
        </div>
        <p className="sol-news__registry">
          Сводка № 1246-Х · записей: {SOL_NEWS.length} · мероприятий:{" "}
          {SOL_EVENTS.length} · переносов: 0 · бесед проведено: 1246 · правок
          задним числом не предусмотрено
        </p>
      </div>
    </section>
  );
}

export default SolNews;

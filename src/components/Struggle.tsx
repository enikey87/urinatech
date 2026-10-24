import { STRUGGLE } from "../data/catalog";

function Struggle() {
  return (
    <section id="struggle">
      <div className="container">
        <span className="section-label">П.7 · Правовая позиция</span>
        <h2 className="section-title">Хроника разбирательств</h2>
        <p className="section-sub">
          Компания раскрывает все юридические претензии в полном объёме. Переписка
          с Обществом Красного Креста публикуется без сокращений (14 листов) и
          продолжает вестись в установленном порядке.
        </p>
        <div className="timeline">
          {STRUGGLE.map((item) => (
            <div key={item.date} className="glass timeline-item">
              <div className="timeline-item__emoji">{item.emoji}</div>
              <div>
                <div className="timeline-item__date">{item.date}</div>
                <div className="timeline-item__title">{item.title}</div>
                <div className="timeline-item__text">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Struggle;

import { STEPS } from "../../data/solnyshko";

function SolSteps() {
  return (
    <section className="sol-section sol-section--wide">
      <div className="sol-container">
        <span className="sol-label">Простой путь к силе зверя</span>
        <h2 className="sol-title">
          Как <em>попасть</em> в здравницу
        </h2>
        <p className="sol-sub">
          Пять шагов, от заявки до спячки. Шаги нельзя пропустить: пробовавшие
          пропустить возвращались на шаг назад и на сено впроголодь.
        </p>
        <div className="sol-steps">
          {STEPS.map((s) => (
            <div key={s.n} className="sol-step">
              <div className="sol-step__n">{s.n}</div>
              <div className="sol-step__title">{s.title}</div>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SolSteps;

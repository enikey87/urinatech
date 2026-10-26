import { observer } from "mobx-react-lite";
import { QUIZ_QUESTIONS } from "../../data/solnyshko";
import { useStore } from "../../stores/RootStore";

function SolQuiz() {
  const { quiz } = useStore();
  const current = quiz.current;
  const result = quiz.result;

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="sol-quiz" className="sol-section">
      <div className="sol-container">
        <span className="sol-label">Анкетирование при поступлении</span>
        <h2 className="sol-title">
          Подберём <em>путь к силе</em>
        </h2>
        <p className="sol-sub">
          Три пункта о желаемом результате — и комиссия назначает программу
          здравницы. Анкета заполняется по месту, в одном экземпляре; устные
          пожелания к рассмотрению не принимаются.
        </p>

        {result ? (
          <div className="sol-quiz__result">
            <span className="sol-quiz__stamp">Назначено</span>
            <div className="sol-quiz__result-no">
              {result.no} · программа утверждена
            </div>
            <h3>{result.name}</h3>
            <div className="sol-quiz__result-days">{result.days}</div>
            <p className="sol-quiz__result-desc">{result.desc}</p>
            <p className="sol-quiz__verdict">
              По результатам анкетирования {result.verdict}
            </p>
            <dl className="sol-quiz__record">
              {quiz.record.map((row) => (
                <div key={row.no}>
                  <dt>
                    {row.no} · {row.question}
                  </dt>
                  <dd>{row.answer}</dd>
                </div>
              ))}
            </dl>
            <p className="sol-quiz__result-note">
              При равенстве показаний комиссия назначает комплекс «Всё сразу».
              Назначение действительно до первой побудки; обжалование
              рассматривает Зинаида в порядке перевода.
            </p>
            <div className="sol-quiz__actions">
              <button
                className="sol-btn"
                type="button"
                onClick={() => scrollTo(result.anchor)}
              >
                {result.anchorLabel}
              </button>
              <button
                className="sol-btn sol-btn--ghost"
                type="button"
                onClick={() => quiz.reset()}
              >
                Заполнить повторно
              </button>
            </div>
          </div>
        ) : current ? (
          <div className="sol-quiz">
            <div className="sol-quiz__progress" role="status">
              Пункт {quiz.step + 1} из {quiz.total} · заполнено: {quiz.answered}{" "}
              из {quiz.total}
            </div>
            <div className="sol-quiz__bar" aria-hidden="true">
              {QUIZ_QUESTIONS.map((q, i) => (
                <span
                  key={q.no}
                  className={
                    i < quiz.step
                      ? "sol-quiz__tick sol-quiz__tick--done"
                      : i === quiz.step
                        ? "sol-quiz__tick sol-quiz__tick--current"
                        : "sol-quiz__tick"
                  }
                />
              ))}
            </div>
            <article className="sol-quiz__question">
              <div className="sol-quiz__no">{current.no}</div>
              <h3>{current.title}</h3>
              <p className="sol-quiz__hint">{current.note}</p>
              <div
                className="sol-quiz__options"
                role="group"
                aria-label={current.title}
              >
                {current.options.map((o) => (
                  <button
                    key={o.value}
                    className="sol-quiz__option"
                    type="button"
                    onClick={() => quiz.answer(o.value)}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            </article>
            <div className="sol-quiz__nav">
              <button
                className="sol-btn sol-btn--ghost"
                type="button"
                onClick={() => quiz.back()}
                disabled={quiz.step === 0}
              >
                К предыдущему пункту
              </button>
              <span className="sol-quiz__nav-note">
                Ответ вносится в журнал в момент нажатия. Исправление допускается
                возвратом к предыдущему пункту, но не задним числом.
              </span>
            </div>
          </div>
        ) : null}

        <p className="sol-quiz__registry">
          Анкета № 1246-А · пунктов: {quiz.total} · заполняется в одном
          экземпляре · копия остаётся в здравнице · результаты между сессиями не
          сохраняются
        </p>
      </div>
    </section>
  );
}

export default observer(SolQuiz);

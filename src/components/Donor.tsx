import { observer } from "mobx-react-lite";
import { useStore } from "../stores/RootStore";

function Donor() {
  const { donor } = useStore();

  if (donor.status === "done" && donor.submitted) {
    const app = donor.submitted;
    return (
      <section id="donor">
        <div className="container">
          <span className="section-label">П.6 · Донорская программа УТ-Донор</span>
          <h2 className="section-title">Заявка зарегистрирована</h2>
          <div className="donor-ticket">
            <div className="donor-ticket__id">{app.id}</div>
            <p style={{ marginTop: 12, color: "var(--muted)" }}>
              Донор: <strong style={{ color: "var(--text)" }}>{app.name}</strong>,
              регион: <strong style={{ color: "var(--text)" }}>{app.city}</strong>.
              Рацион за последние 24 часа: «{app.dinner}». Рацион передан в
              аналитическую лабораторию (конюшня №4).
            </p>
            <p style={{ marginTop: 12, fontWeight: 600 }}>
              ⚠ Внимание: сбор биоматериала должен быть завершён в течение 2–3 часов
              с момента регистрации заявки. По истечении срока сырьё требованиям
              закупки не соответствует.
            </p>
            <p style={{ marginTop: 12, color: "var(--muted)", fontSize: 14 }}>
              Выплата: 30% денежными средствами, 40% натурой (сено), 30% —
              упоминанием в гостевой книге.
            </p>
            <button className="btn btn-ghost btn-sm" style={{ marginTop: 18 }} onClick={donor.reset}>
              Подать новую заявку
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="donor">
      <div className="container">
        <span className="section-label">П.6 · Донорская программа УТ-Донор</span>
        <h2 className="section-title">
          Компания <span className="grad-text">закупает сырьё</span> у физических лиц
        </h2>
        <p className="section-sub">
          Станьте участником донорской программы: фиксируйте факт поставки сырья и
          получайте выплаты с каждой реализованной партии вашего авторства.
          Возможна организация собственного дела на базе дилерской программы.
        </p>
        <div className="glass donor-wrap">
          <form
            className="donor-form"
            onSubmit={(e) => {
              e.preventDefault();
              void donor.submit();
            }}
          >
            <label>
              ФИО (как в документах или как в гаражном кооперативе)
              <input
                className="input"
                value={donor.name}
                onChange={(e) => donor.setName(e.target.value)}
                placeholder="Кузьмич"
              />
            </label>
            <label>
              Регион сбора
              <input
                className="input"
                value={donor.city}
                onChange={(e) => donor.setCity(e.target.value)}
                placeholder="Тверская область"
              />
            </label>
            <label>
              Рацион за последние 24 часа (определяет органолептический профиль)
              <input
                className="input"
                value={donor.dinner}
                onChange={(e) => donor.setDinner(e.target.value)}
                placeholder="Окрошка, сало, компот (3 порции)"
              />
            </label>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!donor.canSubmit || donor.status === "sending"}
            >
              {donor.status === "sending" ? (
                <>
                  <span className="spinner" /> Регистрация в реестре…
                </>
              ) : (
                "Подать заявку"
              )}
            </button>
          </form>
          <div className="donor-info">
            <p>
              <strong>Требования к сырью:</strong> сырьё проходит генетическую
              экспертизу. Донор обязан быть поистине русским — требование
              закупочной политики, отступлений не предусмотрено.
            </p>
            <p>
              <strong>Порядок выплат:</strong> 30% от выручки денежными средствами,
              40% натурой (сено по курсу дня) и 30% — упоминанием в гостевой книге.
            </p>
            <p>
              <strong>Логистика:</strong> сбор в течение 2–3 часов после регистрации
              заявки. Тара — собственная донора. Достоинство обеспечивается нашей
              стороной.
            </p>
            <p>
              <strong>Диетический протокол «Проросшее зерно»:</strong> донор,
              получавший проросшее зерно в течение двух-трёх дней, производит
              уникальную субстанцию, пригодную для передачи другим лицам (обычная
              субстанция пригодна только самому донору). Надбавка к выплате —
              12,46%. Постоянно переведён на зерно внешний поставщик Потапыч
              (по согласованию).
            </p>
            <p>
              <strong>Эмоциональный режим:</strong> отрицательные эмоции делают
              субстанцию ядовитой, радостные — бальзамными. Донор обязан пребывать
              в согласии с собой и конюшней; контроль осуществляет старшая сестра
              взглядом. Эталон спокойствия — внештатный консультант по обмену
              опытом (лошадь).
            </p>
            <p style={{ fontSize: 13, opacity: 0.8 }}>
              Нажимая кнопку, вы подтверждаете, что ознакомились с договором
              либо сделали вид, что ознакомились.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default observer(Donor);

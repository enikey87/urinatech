import { PLANS } from "../data/catalog";

function Pricing() {
  return (
    <section id="pricing">
      <div className="container">
        <span className="section-label">П.3 · Абонентское обслуживание «УТ+»</span>
        <h2 className="section-title">Тарифные планы</h2>
        <p className="section-sub">
          Для физических и юридических лиц. Дилерская программа, кредитование и
          рассрочка — по запросу. Приём платежей: банковская карта, безналичный
          расчёт, натура (сено, по курсу дня).
        </p>
        <div className="pricing-grid">
          {PLANS.map((plan) => (
            <div key={plan.id} className={`glass plan ${plan.accent ? "plan--accent" : ""}`}>
              {plan.accent && <div className="plan__ribbon">Популярный выбор</div>}
              <div className="plan__name">{plan.name}</div>
              <div className="plan__price">
                {plan.price} <small>/ {plan.period}</small>
              </div>
              <div className="plan__tagline">{plan.tagline}</div>
              <ul className="plan__features">
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <button className={`btn btn-sm ${plan.accent ? "btn-primary" : "btn-ghost"}`}>
                Подключить
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;

const STATS = [
  { value: "24 года", label: "непрерывного производственного цикла (или 780 — с 1246 г.)" },
  { value: "12 000+", label: "зарегистрированных пациентов, из них 11 999 — г. Кимры" },
  { value: "98%", label: "пациентов переходят на повторный курс" },
  { value: "14 листов", label: "официальной переписки с Обществом Красного Креста" },
];

function Stats() {
  return (
    <section style={{ paddingTop: 24 }}>
      <div className="container">
        <div className="stats">
          {STATS.map((s) => (
            <div key={s.label} className="glass stat">
              <div className="stat__value">{s.value}</div>
              <div className="stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;

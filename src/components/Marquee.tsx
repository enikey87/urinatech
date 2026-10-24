const ITEMS = [
  "Полный цикл производства",
  "Сертифицированная лошадь",
  "Блокчейн-реестр партий",
  "Генетическая экспертиза",
  "Опт, кредит, рассрочка",
  "Доставка за 2–3 часа",
  "ГОСТ Р 1246-2002",
  "Единственный официальный сайт",
];

function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row.map((item, i) => (
          <span key={i}>
            {item} <span style={{ opacity: 0.5 }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;

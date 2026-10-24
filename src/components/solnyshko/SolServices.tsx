function SolServices() {
  return (
    <section id="sol-services" className="sol-section">
      <div className="sol-container">
        <span className="sol-label">Флагманские направления</span>
        <h2 className="sol-title">Три кита здравницы</h2>
        <p className="sol-sub">
          Все методики применяются под круглосуточным наблюдением персонала и
          внеочередным наблюдением Общества Красного Креста, которое уже в курсе.
        </p>
        <div className="sol-services">
          <article className="sol-card sol-card--accent">
            <div className="sol-card__emoji">💧</div>
            <h3>Стационарная уринотерапия</h3>
            <p>
              Круглосуточный курс в условиях пансионата: личный стакан с
              гравировкой, мониторинг градиента цвета, диета, совместимая с
              методом. Программы — от «Утреннего круга» до «Второго пришествия
              II Сан» (1246 дней).
            </p>
            <button
              className="sol-btn sol-btn--ghost"
              onClick={() =>
                document.getElementById("sol-station")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Программы стационара
            </button>
          </article>
          <article className="sol-card">
            <div className="sol-card__emoji">🫗</div>
            <h3>Клизмотроника™</h3>
            <p>
              Направленная гидратация дистального отдела природными богатствами
              России: от Байкальской глубины до Эльтонской соли. Двенадцать
              рецептур, каждая привязана к конкретной точке карты.
            </p>
            <button
              className="sol-btn sol-btn--ghost"
              onClick={() =>
                document.getElementById("sol-enemas")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Меню по географии
            </button>
          </article>
          <article className="sol-card sol-card--accent">
            <div className="sol-card__emoji">⚡</div>
            <h3>Калофорез®</h3>
            <p>
              Родня гальваногрязетерапии Крыма, но вместо грязи — биосубстанция
              КалоМедведь® / КалоОлень®. Слабый ток пропекает силу зверя через
              поясницу. Перенятие спячки — с первого курса.
            </p>
            <button
              className="sol-btn sol-btn--ghost"
              onClick={() =>
                document.getElementById("sol-kalofores")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              О методике
            </button>
          </article>
        </div>
      </div>
    </section>
  );
}

export default SolServices;

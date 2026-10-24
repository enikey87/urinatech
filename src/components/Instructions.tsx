import { INSERT_ROWS } from "../data/company";

function Instructions() {
  return (
    <section id="instructions">
      <div className="container">
        <span className="section-label">Прил. В · Документация к продукции</span>
        <h2 className="section-title">Инструкция по применению</h2>
        <p className="section-sub">
          Полный текст вкладыша, поставляемого с каждой ёмкостью. Публикуется в
          соответствии с политикой информационной открытости.
        </p>
        <div className="insert">
          <div className="insert__grid">
            {INSERT_ROWS.map((row) => (
              <div className="insert__row" key={row.label}>
                <b>{row.label}</b>
                {row.text}
              </div>
            ))}
          </div>
          <div className="insert__foot">
            Инструкция сохранена в первоначальном виде. Первоначальный вид утерян.
            ООО «УринаТех», конюшня №4. Претензии направляйте в гостевую книгу,
            внимание — Зинаиде.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Instructions;

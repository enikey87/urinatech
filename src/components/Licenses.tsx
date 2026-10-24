import { LICENSES } from "../data/company";

function Licenses() {
  return (
    <section id="licenses">
      <div className="container">
        <span className="section-label">Разрешительные документы</span>
        <h2 className="section-title">Лицензии и сертификаты</h2>
        <p className="section-sub">
          Реестр ведётся с 2002 года. Оригиналы хранятся в конюшне №4; доступ
          предоставляется по письменному запросу и good настроению директора по
          фильтрации.
        </p>
        <div className="license-list">
          {LICENSES.map((l) => (
            <div className="license" key={l.no + l.name}>
              <div className="license__no">{l.no}</div>
              <div className="license__name">
                {l.name}
                <small>{l.note}</small>
              </div>
              <div
                className={`license__status ${
                  l.ok === true ? "license__status--ok" : l.ok === false ? "license__status--fail" : ""
                }`}
              >
                {l.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Licenses;

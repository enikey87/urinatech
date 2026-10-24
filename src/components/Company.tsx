import { JOBS, TEAM } from "../data/company";

function Company() {
  return (
    <section id="company">
      <div className="container">
        <span className="section-label">П.9 · О компании</span>
        <h2 className="section-title">Корпоративное управление</h2>
        <p className="section-sub">
          Органограмма компании: генеральный директор → лошадь → все остальные.
          Публикуется в соответствии с Кодексом корпоративного поведения (своя
          редакция, 2002 г.).
        </p>

        <h3 className="subsection-title">Руководство</h3>
        <div className="team-grid">
          {TEAM.map((m) => (
            <div key={m.name} className="glass team-card">
              <div className="team-card__ava">{m.avatar}</div>
              <div className="team-card__name">{m.name}</div>
              <div className="team-card__role">{m.role}</div>
              <div className="team-card__bio">{m.bio}</div>
            </div>
          ))}
        </div>

        <h3 className="subsection-title">Вакансии</h3>
        <p className="section-sub">
          Резюме принимаются в гостевой книге. Собеседование проводит Зинаида
          (с переводчиком).
        </p>
        <div className="jobs">
          {JOBS.map((j) => (
            <div key={j.title} className="glass job">
              <div>
                <div className="job__title">{j.title}</div>
                <div className="job__meta">{j.meta}</div>
                <p style={{ marginTop: 12, fontSize: 13.5, color: "var(--muted)" }}>
                  {j.offer}
                </p>
              </div>
              <div>
                <div className="job__title" style={{ fontSize: 13, color: "var(--amber)" }}>
                  Обязанности
                </div>
                <ul>
                  {j.duties.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <div className="job__title" style={{ fontSize: 13, color: "var(--amber)" }}>
                  Требования
                </div>
                <ul>
                  {j.reqs.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Company;

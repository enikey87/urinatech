import { TEAM } from "../data/company";

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
      </div>
    </section>
  );
}

export default Company;

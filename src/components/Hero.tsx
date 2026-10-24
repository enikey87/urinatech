function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-blob hero-blob--amber" />
      <div className="hero-blob hero-blob--lime" />
      <div className="drop drop--hero" />
      <div className="container">
        <span className="section-label">
          Производственно-исследовательская компания · с 1246 года
        </span>
        <h1 className="hero-title">
          Русская <span className="grad-text">моча</span> против скальпеля врача
        </h1>
        <p className="hero-sub">
          «УринаТех» — технологический цикл полного профиля: добыча, фильтрация,
          консервация, дистрибуция. Непрерывный производственный контроль качества
          с 1246 года. Генетическая экспертиза каждой партии.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <a className="btn btn-primary" href="#products">
            Перейти в каталог
          </a>
          <a className="btn btn-ghost" href="#donor">
            Донорская программа
          </a>
        </div>
        <div className="hero-badges">
          <span className="hero-badge">
            <strong>Series B</strong> · оценка $1,2 млрд
          </span>
          <span className="hero-badge">
            <strong>12 000+</strong> зарегистрированных пациентов
          </span>
          <span className="hero-badge">
            <strong>1</strong> · претензия Красного Креста (рассматривается с 2003 г.)
          </span>
          <span className="hero-badge">18+ · имеются противопоказания</span>
        </div>
      </div>
      <div className="stamp">Утверждено · Зинаида</div>
    </section>
  );
}

export default Hero;

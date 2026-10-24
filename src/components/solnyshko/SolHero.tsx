import SolEmblem from "./SolEmblem";

function SolHero() {
  return (
    <section className="sol-hero">
      <div className="sol-container">
        <div className="sol-hero__emblem">
          <SolEmblem size={190} />
        </div>
        <div className="sol-hero__text">
          <span className="sol-label">
            Учреждение ООО «УринаТех» · принимаем отдыхающих с 1246 года
          </span>
          <h1 className="sol-hero__title">
            Здоровье —<br />
            в стакане!
          </h1>
          <div className="sol-hero__name">
            Пансионат «Солнышко» · калофорез® · клизмотроника™
          </div>
          <p className="sol-hero__sub">
            Здравница нового типа, открытого типа и типа закрытого. Уринотерапия
            стационарно, сила зверя — народу, тишина — по тарифу. Сорок вёрст до
            асфальта: след на пороге гарантирован постановлением от 01.01.1246.
          </p>
          <div className="sol-hero__cta">
            <button
              className="sol-btn sol-btn--big"
              onClick={() =>
                document.getElementById("sol-services")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Программы здравницы
            </button>
            <button
              className="sol-btn sol-btn--ghost"
              onClick={() =>
                document.getElementById("sol-booking")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Оформить путёвку
            </button>
          </div>
          <div className="sol-hero__badges">
            <span className="sol-badge">
              Категория: три звезды <s>четвёртая</s> (на согласовании с 2003 г.)
            </span>
            <span className="sol-badge">Конная доставка от Горно-Алтайска включена</span>
            <span className="sol-badge">Потапыч — на штатной должности не состоит</span>
          </div>
        </div>
        <div className="sol-stamp">Действительно</div>
      </div>
    </section>
  );
}

export default SolHero;

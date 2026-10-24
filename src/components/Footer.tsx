function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col">
            <div className="footer__heading">ООО «УринаТех»</div>
            <p className="footer__text">
              Производственно-исследовательская компания полного цикла. Основана в
              2002 году как Московский Институт Обогащения Урины. Технологии
              документированы с 1246 года.
            </p>
          </div>
          <div className="footer__col">
            <div className="footer__heading">☀ Пансионат «Солнышко»</div>
            <p className="footer__text">
              Наша здравница закрытого типа: стационарная уринотерапия,
              клизмотроника™ по природным богатствам России и калофорез® —
              перенятие силы зверя. 40 вёрст до асфальта.
            </p>
            <a className="footer__link" href="#/solnyshko">
              Перейти на сайт пансионата →
            </a>
          </div>
          <div className="footer__col">
            <div className="footer__heading">Контакты</div>
            <p className="footer__text">
              107113, г. Москва, проходная конюшни №4 (спросить Петра).
              <br />
              Отдел донорства: голубиная почта, телеграф.
              <br />
              Гостевая книга работает круглосуточно, очередь — с 2002 года.
            </p>
          </div>
          <div className="footer__col">
            <div className="footer__heading">Правовая информация</div>
            <p className="footer__text">
              Переписка с Обществом Красного Креста ведётся с 14.05.2003. Позиция
              компании изложена в разделе «Правовая позиция». Судебное
              разбирательство не является нашим методом; нашим методом является
              продукция.
            </p>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2002–2026 ООО «УринаТех». Все партии защищены.</span>
          <span>
            Информация не является публичной офертой. Продукция не является
            лекарственным средством. Имеются противопоказания — необходима
            консультация специалиста. 18+
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import { observer } from "mobx-react-lite";
import { useStore } from "../../stores/RootStore";
import SolEmblem from "./SolEmblem";

function SolFooter() {
  const { router } = useStore();

  return (
    <footer className="sol-footer">
      <div className="sol-container">
        <div className="sol-footer__grid">
          <div className="sol-footer__col">
            <div className="sol-footer__brand">
              <SolEmblem size={54} />
              <b>Пансионат «Солнышко»</b>
            </div>
            <p>
              Дочернее здравница-учреждение ООО «УринаТех». Республика Алтай,
              40 вёрст от асфальта, далее по следу. Телефона нет — и не будет:
              тишина является частью методики.
            </p>
          </div>
          <div className="sol-footer__col">
            <b>Сезонность</b>
            <p>
              Круглый год. «Медвежий» режим калофореза рекомендуется с ноября
              по март; «Олений» — в период миграции; стационар — всегда, он
              стационар.
            </p>
          </div>
          <div className="sol-footer__col">
            <b>Документы</b>
            <p>
              Заявка на патент №1246-К (калофорез). Категория «три звезды»,
              четвёртая — на согласовании. Переписка с ОКК продолжается;
              пансионат внесён в их карту внимания.
            </p>
          </div>
        </div>
        <div className="sol-footer__bottom">
          <span>© 1246–2026 Пансионат «Солнышко». Все силы защищены.</span>
          <button className="sol-link" onClick={() => router.goMain()}>
            ← ООО «УринаТех» — основной сайт
          </button>
        </div>
      </div>
    </footer>
  );
}

export default observer(SolFooter);

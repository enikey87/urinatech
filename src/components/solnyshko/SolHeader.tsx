import { observer } from "mobx-react-lite";
import { useStore } from "../../stores/RootStore";
import SolEmblem from "./SolEmblem";

function SolHeader() {
  const { router } = useStore();

  return (
    <header className="sol-header">
      <div className="sol-header__inner">
        <a
          className="sol-header__brand"
          href="#/solnyshko"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <SolEmblem size={46} />
          <span>
            <span className="sol-header__name">Пансионат «Солнышко»</span>
            <span className="sol-header__sub">здравница закрытого типа</span>
          </span>
        </a>
        <div className="sol-header__actions">
          <button className="sol-link" onClick={() => router.goMain()}>
            ООО «УринаТех» — основной сайт
          </button>
          <button
            className="sol-btn"
            onClick={() =>
              document.getElementById("sol-booking")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Записаться на курс
          </button>
        </div>
      </div>
    </header>
  );
}

export default observer(SolHeader);

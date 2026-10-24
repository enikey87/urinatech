import { observer } from "mobx-react-lite";
import { useStore } from "../stores/RootStore";

function CookiesBanner() {
  const { cookies } = useStore();

  if (cookies.accepted) return null;

  return (
    <div className="cookie-banner">
      <strong style={{ fontSize: 14 }}>Мы используем cookies</strong>
      <p>
        А также стаканы. Продолжая пользоваться сайтом, вы соглашаетесь на
        хранение стаканов на вашем устройстве.
      </p>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <button className="btn btn-primary btn-sm" onClick={() => cookies.accept()}>
          Принять всё
        </button>
        <a className="btn btn-ghost btn-sm" href="#faq">
          Подробнее
        </a>
      </div>
    </div>
  );
}

export default observer(CookiesBanner);

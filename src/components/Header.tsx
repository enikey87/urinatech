import { observer } from "mobx-react-lite";
import { useStore } from "../stores/RootStore";

function Header() {
  const { cart } = useStore();

  return (
    <header className="header">
      <div className="header__inner">
        <a className="logo" href="#top">
          <span className="logo__drop">УТ</span>
          УринаТех
        </a>
        <nav className="nav">
          <a href="#products">Продукция</a>
          <a href="#instructions">Инструкция</a>
          <a href="#pricing">Тарифы</a>
          <a href="#reviews">Клиника</a>
          <a href="#detector">Верификация</a>
          <a href="#donor">Донорам</a>
          <a href="#struggle">Позиция</a>
          <a href="#company">Компания</a>
          <a href="#faq">FAQ</a>
        </nav>
        <button className="btn btn-primary btn-sm cart-btn" onClick={() => cart.open()}>
          Корзина
          {cart.count > 0 && <span className="cart-btn__badge">{cart.count}</span>}
        </button>
      </div>
    </header>
  );
}

export default observer(Header);

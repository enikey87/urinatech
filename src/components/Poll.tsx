import { observer } from "mobx-react-lite";
import { useStore } from "../stores/RootStore";

function Poll() {
  const { poll } = useStore();

  return (
    <div className="glass poll">
      <div className="poll__q">Социальный опрос: доверяете ли вы методу?</div>
      {poll.voted ? (
        <div className="poll__result">
          Результат: <strong>100% доверяют</strong> (погрешность методикой не
          предусмотрена, ГОСТ Р 1246-2002). Спасибо — ваш голос учтён дважды.
        </div>
      ) : (
        <div className="poll__opts">
          <button className="btn btn-primary btn-sm" onClick={() => poll.vote()}>
            Да
          </button>
          <button className="btn btn-ghost btn-sm" onClick={() => poll.vote()}>
            Да, безусловно
          </button>
        </div>
      )}
      <p style={{ fontSize: 12, color: "var(--muted)" }}>
        Опрос проводится с 2002 года. Набор вариантов отражает многообразие мнений.
      </p>
    </div>
  );
}

export default observer(Poll);

import { observer } from "mobx-react-lite";
import { POWER_OPTIONS, PROGRAM_OPTIONS } from "../../data/solnyshko";
import { useStore } from "../../stores/RootStore";

function SolBooking() {
  const { solnyshko } = useStore();

  if (solnyshko.status === "done" && solnyshko.voucher) {
    const programLabel =
      PROGRAM_OPTIONS.find((p) => p.value === solnyshko.program)?.label ?? "";
    const powerLabel = POWER_OPTIONS.find((p) => p.value === solnyshko.power)?.label ?? "";
    return (
      <section id="sol-booking" className="sol-section">
        <div className="sol-container">
          <span className="sol-label">Отделение путёвок</span>
          <h2 className="sol-title">Путёвка оформлена</h2>
          <div className="sol-voucher">
            <div className="sol-voucher__stamp">Солнышко · 1246</div>
            <div className="sol-voucher__num">{solnyshko.voucher}</div>
            <p>
              Отдыхающий: <b>{solnyshko.name.trim()}</b>
              <br />
              Программа: <b>{programLabel}</b>
              <br />
              Перенятие: <b>{powerLabel}</b>
            </p>
            <p className="sol-voucher__note">
              Конная доставка от Горно-Алтайска включена. Просим захватить
              тёплые носки и отсутствия претензий. Встреча — у последнего
              столба мобильной связи (столб последний, связь ещё раньше).
            </p>
            <button className="sol-btn sol-btn--ghost" onClick={solnyshko.reset}>
              Оформить ещё одну путёвку
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="sol-booking" className="sol-section">
      <div className="sol-container">
        <span className="sol-label">Отделение путёвок</span>
        <h2 className="sol-title">Запись на курс</h2>
        <p className="sol-sub">
          Заявка рассматривается в течение рабочих суток лошади. Подтверждение
          приходит телеграммой, голубем или следом на снегу — что раньше.
        </p>
        <form
          className="sol-form"
          onSubmit={(e) => {
            e.preventDefault();
            void solnyshko.submit();
          }}
        >
          <label>
            ФИО отдыхающего
            <input
              className="sol-input"
              value={solnyshko.name}
              onChange={(e) => solnyshko.setName(e.target.value)}
              placeholder="Иванов Потап Потапыч"
            />
          </label>
          <label>
            Программа
            <select
              className="sol-input"
              value={solnyshko.program}
              onChange={(e) => solnyshko.setProgram(e.target.value)}
            >
              {PROGRAM_OPTIONS.map((p) => (
                <option key={p.value} value={p.value}>
                  {p.label}
                </option>
              ))}
            </select>
          </label>
          <label>
            Что хотите перенять
            <select
              className="sol-input"
              value={solnyshko.power}
              onChange={(e) => solnyshko.setPower(e.target.value)}
            >
              {POWER_OPTIONS.map((p) => (
                <option key={p.value} value={p.value}>
                  {p.label}
                </option>
              ))}
            </select>
          </label>
          <button
            type="submit"
            className="sol-btn sol-btn--big"
            disabled={!solnyshko.canSubmit || solnyshko.status === "sending"}
          >
            {solnyshko.status === "sending" ? "Печать путёвки…" : "Оформить путёвку"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default observer(SolBooking);

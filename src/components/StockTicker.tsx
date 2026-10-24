import { observer } from "mobx-react-lite";
import { useStore } from "../stores/RootStore";

function fmt(n: number): string {
  return n.toLocaleString("ru-RU", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function fmtChange(c: number): string {
  const sign = c > 0 ? "+" : "";
  return `${sign}${c.toFixed(1).replace(".", ",")}%`;
}

function StockTicker() {
  const { ticker } = useStore();
  const row = [...ticker.items, ...ticker.items];

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {row.map((it, i) => (
          <span className="ticker__item" key={i}>
            <span className="ticker__sym">{it.symbol}</span>
            {it.special === "delisting" ? (
              <span className="ticker__chg--down">делистинг</span>
            ) : (
              <>
                <span className="ticker__price">
                  {fmt(it.price)} {it.unit}
                </span>
                {it.special === "stable" ? (
                  <span className="ticker__note">стабилен</span>
                ) : (
                  <span className={it.change >= 0 ? "ticker__chg--up" : "ticker__chg--down"}>
                    {fmtChange(it.change)}
                  </span>
                )}
              </>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

export default observer(StockTicker);

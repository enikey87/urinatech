import { makeAutoObservable } from "mobx";

export interface TickerItem {
  symbol: string;
  price: number;
  change: number;
  unit: string;
  special?: "delisting" | "stable";
}

export class TickerStore {
  items: TickerItem[] = [
    { symbol: "$MOCHA", price: 12.4, change: 12.4, unit: "₽" },
    { symbol: "СЕНО/РУБ", price: 89, change: -0.3, unit: "₽/кг" },
    { symbol: "КОМПОТ", price: 3, change: 0, unit: "₽/порция", special: "stable" },
    { symbol: "МОРКОВЬ", price: 12, change: 0.8, unit: "₽ (фьючерс)" },
    { symbol: "КИМР-ИНДЕКС", price: 11999, change: 0.04, unit: "пт" },
    { symbol: "УТ-01", price: 300, change: 0, unit: "₽/л", special: "stable" },
    { symbol: "СКАЛЬПЕЛЬ", price: 0, change: -100, unit: "", special: "delisting" },
  ];

  constructor() {
    makeAutoObservable(this);
    setInterval(() => this.tick(), 2500);
  }

  private tick(): void {
    for (const it of this.items) {
      if (it.special) continue;
      const drift = (Math.random() - 0.5) * 0.02;
      it.price = Math.max(0.01, it.price * (1 + drift));
      it.change = Math.max(-25, Math.min(25, it.change + (Math.random() - 0.5) * 1.4));
    }
  }
}

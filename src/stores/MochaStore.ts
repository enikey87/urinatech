import { makeAutoObservable } from "mobx";
import { MOCHA } from "../data/company";

const TICK_MS = 2500;
const HISTORY_LIMIT = 120;

export class MochaStore {
  price = MOCHA.opening;
  history: number[] = [MOCHA.opening];
  noteIndex = 0;
  private tickCount = 0;
  private timer: ReturnType<typeof setInterval> | null = null;
  private subscribers = 0;

  constructor() {
    makeAutoObservable(this);
  }

  get changePercent(): number {
    return ((this.price - MOCHA.opening) / MOCHA.opening) * 100;
  }

  get note(): string {
    return MOCHA.notes[this.noteIndex % MOCHA.notes.length];
  }

  get priceLabel(): string {
    return this.price.toLocaleString("ru-RU", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  get changeLabel(): string {
    const value = this.changePercent;
    const sign = value > 0 ? "+" : value < 0 ? "−" : "";
    return `${sign}${Math.abs(value).toFixed(2).replace(".", ",")} %`;
  }

  start(): () => void {
    this.subscribers += 1;
    if (this.timer === null) {
      this.timer = setInterval(() => this.tick(), TICK_MS);
    }
    return () => this.release();
  }

  private release(): void {
    this.subscribers = Math.max(0, this.subscribers - 1);
    if (this.subscribers === 0 && this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  private tick(): void {
    const lower = MOCHA.opening * 0.96;
    const upper = MOCHA.opening * (1 + MOCHA.maxChange / 100);
    const drift = (Math.random() - 0.42) * 0.004;
    const next = Math.min(upper, Math.max(lower, this.price * (1 + drift)));
    this.price = Math.round(next * 100) / 100;
    this.history = [...this.history, this.price].slice(-HISTORY_LIMIT);
    // Курс обновляется каждые 2,5 с, формулировка протокола — спокойнее, раз в 10 с.
    this.tickCount += 1;
    if (this.tickCount % 4 === 0) {
      this.noteIndex = (this.noteIndex + 1) % MOCHA.notes.length;
    }
  }
}

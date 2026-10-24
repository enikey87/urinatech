import { makeAutoObservable } from "mobx";

const YEAR_MS = 365.25 * 24 * 3600 * 1000;
const DAY_MS = 24 * 3600 * 1000;
const HOUR_MS = 3600 * 1000;
const MIN_MS = 60 * 1000;

export class CountdownStore {
  now = Date.now();
  private target = new Date("2374-01-01T00:00:00+03:00").getTime();

  constructor() {
    makeAutoObservable(this);
    setInterval(() => {
      this.now = Date.now();
    }, 1000);
  }

  get parts() {
    const diff = Math.max(0, this.target - this.now);
    const years = Math.floor(diff / YEAR_MS);
    let rem = diff - years * YEAR_MS;
    const days = Math.floor(rem / DAY_MS);
    rem -= days * DAY_MS;
    const hours = Math.floor(rem / HOUR_MS);
    rem -= hours * HOUR_MS;
    const minutes = Math.floor(rem / MIN_MS);
    rem -= minutes * MIN_MS;
    const seconds = Math.floor(rem / 1000);
    return { years, days, hours, minutes, seconds };
  }
}

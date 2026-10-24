import { makeAutoObservable } from "mobx";

const KEY = "ut-cookies-accepted";

export class CookiesStore {
  accepted = false;

  constructor() {
    makeAutoObservable(this);
    try {
      this.accepted = localStorage.getItem(KEY) === "1";
    } catch {
      this.accepted = false;
    }
  }

  accept(): void {
    this.accepted = true;
    try {
      localStorage.setItem(KEY, "1");
    } catch {
      //cookies всё равно используются
    }
  }
}

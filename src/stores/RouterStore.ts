import { makeAutoObservable } from "mobx";

export type Route = "main" | "solnyshko";

export class RouterStore {
  route: Route = "main";

  constructor() {
    makeAutoObservable(this);
    const sync = () => {
      this.route = window.location.hash.startsWith("#/solnyshko") ? "solnyshko" : "main";
    };
    window.addEventListener("hashchange", sync);
    sync();
  }

  goMain(): void {
    window.location.hash = "#/";
  }

  goSolnyshko(): void {
    window.location.hash = "#/solnyshko";
  }
}

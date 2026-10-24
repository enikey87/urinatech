import { makeAutoObservable } from "mobx";

export class PollStore {
  voted = false;

  constructor() {
    makeAutoObservable(this);
  }

  vote(): void {
    this.voted = true;
  }
}

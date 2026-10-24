import { makeAutoObservable, runInAction } from "mobx";

export type BookingStatus = "form" | "sending" | "done";

export class SolnyshkoStore {
  name = "";
  program = "kalofores";
  power = "bear";
  status: BookingStatus = "form";
  voucher: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setName(v: string): void {
    this.name = v;
  }

  setProgram(v: string): void {
    this.program = v;
  }

  setPower(v: string): void {
    this.power = v;
  }

  get canSubmit(): boolean {
    return this.name.trim().length >= 2;
  }

  async submit(): Promise<void> {
    if (!this.canSubmit || this.status === "sending") return;
    this.status = "sending";
    await new Promise((r) => setTimeout(r, 1400));
    runInAction(() => {
      this.status = "done";
      this.voucher = `СОЛ-1246-${Math.floor(1000 + Math.random() * 9000)}`;
    });
  }

  reset(): void {
    this.name = "";
    this.program = "kalofores";
    this.power = "bear";
    this.status = "form";
    this.voucher = null;
  }
}

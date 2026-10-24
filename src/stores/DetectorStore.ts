import { makeAutoObservable, runInAction } from "mobx";

export type Verdict =
  | { kind: "idle" }
  | { kind: "checking"; progress: number }
  | { kind: "genuine"; batch: string; purity: number; origin: string }
  | { kind: "fake"; batch: string; reason: string }
  | { kind: "error"; message: string };

const ORIGINS = [
  "донорская программа УТ-Донор, г. Кимры, партия 2002 г.",
  "фильтрационная линия №4, лошадь Зинаида (аттестат №003)",
  "лаборатория «Полная Сохранность», Институт уведомлён письмом",
  "коллекционный выпуск УТ-К «II Сан», заверено нотариально",
];

const FAKE_REASONS = [
  "партия настоена на неперетёртом сене (нарушение ГОСТ Р 1246-2002)",
  "в цепочке фильтрации отсутствует аттестованная лошадь",
  "смарт-контракт партии зарегистрирован на домене by.ru",
  "время сбора позднее восхода солнца (протокол нарушен)",
  "партия упомянута в претензии Общества Красного Креста",
];

export class DetectorStore {
  batch = "";
  verdict: Verdict = { kind: "idle" };

  constructor() {
    makeAutoObservable(this);
  }

  setBatch(value: string): void {
    this.batch = value;
    this.verdict = { kind: "idle" };
  }

  async check(): Promise<void> {
    const code = this.batch.trim();
    if (code.length < 3) {
      this.verdict = {
        kind: "error",
        message:
          "Номер партии должен содержать не менее 3 символов. Короткие номера партией не выдаются.",
      };
      return;
    }

    let hash = 0;
    for (const ch of code) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;

    for (let p = 20; p <= 100; p += 20) {
      this.verdict = { kind: "checking", progress: p };
      await new Promise((r) => setTimeout(r, 180));
    }

    runInAction(() => {
      if (hash % 3 === 0) {
        this.verdict = {
          kind: "fake",
          batch: code,
          reason: FAKE_REASONS[hash % FAKE_REASONS.length],
        };
      } else {
        this.verdict = {
          kind: "genuine",
          batch: code,
          purity: 90 + (hash % 10),
          origin: ORIGINS[hash % ORIGINS.length],
        };
      }
    });
  }
}

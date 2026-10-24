import { makeAutoObservable } from "mobx";

export interface ChatMessage {
  id: number;
  role: "user" | "zinaida";
  text: string;
  translation?: string;
  translated: boolean;
}

const REPLIES = [
  "И-го-го.",
  "И-го-го-о-о!",
  "Фррр.",
  "И-го-го! И-го-го-о!",
  "Фыр-фыр.",
  "ИИИ-ГО-ГО.",
];

const TRANSLATIONS = [
  "Заявка принята. Ожидайте.",
  "Ответ направлен в пресс-службу.",
  "Зинаида согласна.",
  "Метод одобрен. Продолжайте.",
  "Вопрос признан риторическим.",
  "Ответ заверен нотариально.",
];

export class ChatStore {
  isOpen = false;
  typing = false;
  draft = "";
  messages: ChatMessage[] = [
    {
      id: 1,
      role: "zinaida",
      text: "И-го-го.",
      translation:
        "Служба поддержки УринаТех. Задайте вопрос — Зинаида ответит в течение рабочих суток лошади.",
      translated: false,
    },
  ];
  private nextId = 2;

  constructor() {
    makeAutoObservable(this);
  }

  open(): void {
    this.isOpen = true;
  }

  close(): void {
    this.isOpen = false;
  }

  setDraft(v: string): void {
    this.draft = v;
  }

  translate(id: number): void {
    const m = this.messages.find((x) => x.id === id);
    if (m && m.translation) m.translated = true;
  }

  send(text: string): void {
    const t = text.trim();
    if (!t || this.typing) return;
    this.messages.push({ id: this.nextId++, role: "user", text: t, translated: false });
    this.typing = true;
    const i = Math.floor(Math.random() * REPLIES.length);
    setTimeout(() => {
      this.messages.push({
        id: this.nextId++,
        role: "zinaida",
        text: REPLIES[i],
        translation: TRANSLATIONS[i],
        translated: false,
      });
      this.typing = false;
    }, 900 + Math.random() * 900);
  }
}

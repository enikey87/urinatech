// Голос консультанта: «И-го-го» синтезируется на WebAudio, внешних файлов
// и ассетов нет. Контекст создаётся только из обработчика клика (жест
// пользователя), автоплея нет. Повторный вызов прерывает предыдущее
// ржание, поэтому дорожки не накладываются вразнобой.

let context: AudioContext | null = null;
let interrupt: (() => void) | null = null;

type Syllable = {
  start: number;
  duration: number;
  from: number;
  to: number;
};

// Четыре слога с падением высоты: «и-го-го-о».
const SYLLABLES: Syllable[] = [
  { start: 0, duration: 0.18, from: 1500, to: 780 },
  { start: 0.19, duration: 0.14, from: 1150, to: 640 },
  { start: 0.34, duration: 0.15, from: 900, to: 520 },
  { start: 0.5, duration: 0.26, from: 720, to: 360 },
];

const TOTAL = 0.8;

function audioContext(): AudioContext | null {
  if (context) return context;
  if (typeof AudioContext === "undefined") return null;
  context = new AudioContext();
  return context;
}

export function playNeigh(): void {
  const ctx = audioContext();
  if (!ctx) return;
  if (ctx.state === "suspended") void ctx.resume();

  interrupt?.();
  interrupt = null;

  const master = ctx.createGain();
  master.gain.setValueAtTime(0.45, ctx.currentTime);
  master.connect(ctx.destination);

  const t0 = ctx.currentTime + 0.02;
  const sources: OscillatorNode[] = [];

  for (const syllable of SYLLABLES) {
    const at = t0 + syllable.start;

    const voice = ctx.createOscillator();
    voice.type = "sawtooth";
    voice.frequency.setValueAtTime(syllable.from, at);
    voice.frequency.exponentialRampToValueAtTime(
      syllable.to,
      at + syllable.duration,
    );

    // Две несинхронные модуляции частоты дают дрожание, похожее на ржание.
    for (const [rate, depth] of [
      [23, 0.045],
      [37, 0.025],
    ] as const) {
      const tremble = ctx.createOscillator();
      tremble.type = "sine";
      tremble.frequency.setValueAtTime(rate, at);
      const depthGain = ctx.createGain();
      depthGain.gain.setValueAtTime(syllable.from * depth, t0);
      depthGain.gain.setValueAtTime(syllable.from * depth, at);
      tremble.connect(depthGain).connect(voice.frequency);
      sources.push(tremble);
    }

    const formant = ctx.createBiquadFilter();
    formant.type = "lowpass";
    formant.Q.setValueAtTime(6.5, at);
    formant.frequency.setValueAtTime(2600, at);
    formant.frequency.exponentialRampToValueAtTime(
      700,
      at + syllable.duration,
    );

    const envelope = ctx.createGain();
    // До своего слога голос молчит: узел усиления по умолчанию открыт.
    envelope.gain.setValueAtTime(0.0001, t0);
    envelope.gain.setValueAtTime(0.0001, at);
    envelope.gain.exponentialRampToValueAtTime(0.8, at + 0.025);
    envelope.gain.exponentialRampToValueAtTime(0.0001, at + syllable.duration);

    voice.connect(formant).connect(envelope).connect(master);
    sources.push(voice);
  }

  for (const node of sources) {
    node.start(t0);
    node.stop(t0 + TOTAL);
  }

  // Прерывание — гасим общую громкость; узлы всё равно останавливаются
  // по расписанию выше, поэтому повторный stop() не нужен.
  const stop = () => {
    const now = ctx.currentTime;
    master.gain.cancelScheduledValues(now);
    master.gain.setValueAtTime(Math.max(master.gain.value, 0.0001), now);
    master.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);
  };
  interrupt = stop;

  window.setTimeout(() => {
    if (interrupt === stop) interrupt = null;
  }, (TOTAL + 0.1) * 1000);
}

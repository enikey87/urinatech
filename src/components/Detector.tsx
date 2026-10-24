import { observer } from "mobx-react-lite";
import { useStore } from "../stores/RootStore";

function Detector() {
  const { detector } = useStore();
  const v = detector.verdict;

  return (
    <section id="detector">
      <div className="container">
        <span className="section-label">Верификация продукции</span>
        <h2 className="section-title">Сервис проверки подлинности</h2>
        <p className="section-sub">
          В 2004 году выявлена копия сайта на хостинге by.ru. Реализация продукции
          вне официальных каналов является фальсификацией. Введите номер партии —
          система проверит запись в блокчейн-реестре.
        </p>
        <div className="glass detector-wrap">
          <div>
            <div className="detector-form">
              <input
                className="input"
                placeholder="Номер партии, напр. УТ-2002-0417"
                value={detector.batch}
                onChange={(e) => detector.setBatch(e.target.value)}
              />
              <button
                className="btn btn-primary"
                onClick={() => void detector.check()}
                disabled={v.kind === "checking"}
              >
                {v.kind === "checking" ? <span className="spinner" /> : "Проверить"}
              </button>
            </div>
            <p className="detector-hint">
              Реестр обновляется ежесуточно. Официальная площадка — urina-ru.narod.ru,
              сверяйте адресную строку. Партии, начинающиеся с «УТ-», выданы компанией;
              партия, начинающаяся с чего-либо ещё, выдана не нами.
            </p>
          </div>

          <div aria-live="polite">
            {v.kind === "idle" && (
              <div className="verdict verdict--idle">
                Сервис готов к работе. Ожидание номера партии.
              </div>
            )}
            {v.kind === "checking" && (
              <div className="verdict verdict--checking">
                <div className="verdict__title">Опрос блокчейн-реестра…</div>
                Проверка записи, аттестата лошади и протокола сбора.
                <div className="progressbar">
                  <div className="progressbar__fill" style={{ width: `${v.progress}%` }} />
                </div>
              </div>
            )}
            {v.kind === "genuine" && (
              <div className="verdict verdict--genuine">
                <div className="verdict__title">Партия внесена в реестр: {v.batch}</div>
                Чистота {v.purity}%. Происхождение: {v.origin}. Продукция допущена
                к реализации через официальные каналы.
              </div>
            )}
            {v.kind === "fake" && (
              <div className="verdict verdict--fake">
                <div className="verdict__title">Запись в реестре отсутствует: {v.batch}</div>
                Установленный признак фальсификации: {v.reason}. Приобретение данной
                продукции не рекомендуется. О факте реализации сообщите в гостевую книгу.
              </div>
            )}
            {v.kind === "error" && (
              <div className="verdict verdict--error">
                <div className="verdict__title">Некорректный ввод</div>
                {v.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default observer(Detector);

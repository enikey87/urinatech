import { observer } from "mobx-react-lite";
import { useStore } from "../stores/RootStore";

function ZinaidaChat() {
  const { chat } = useStore();

  return (
    <>
      {chat.isOpen && (
        <div className="chat-panel">
          <div className="chat-panel__head">
            <div className="chat-panel__ava">🐎</div>
            <div>
              <div className="chat-panel__title">Поддержка: Зинаида</div>
              <div className="chat-panel__status">на линии · конюшня №4</div>
            </div>
            <button
              className="cart-close"
              style={{ marginLeft: "auto", fontSize: 20 }}
              onClick={() => chat.close()}
              aria-label="Закрыть чат"
            >
              ×
            </button>
          </div>
          <div className="chat-msgs">
            {chat.messages.map((m) => (
              <div key={m.id} className={`chat-msg chat-msg--${m.role}`}>
                <div>{m.text}</div>
                {m.role === "zinaida" && m.translation && (
                  m.translated ? (
                    <div className="chat-msg__trans">Перевод: {m.translation}</div>
                  ) : (
                    <button
                      className="chat-msg__translate"
                      onClick={() => chat.translate(m.id)}
                    >
                      перевести ответ
                    </button>
                  )
                )}
              </div>
            ))}
            {chat.typing && (
              <div className="chat-typing">Зинаида печатает копытом…</div>
            )}
          </div>
          <form
            className="chat-inputrow"
            onSubmit={(e) => {
              e.preventDefault();
              chat.send(chat.draft);
              chat.setDraft("");
            }}
          >
            <input
              className="input"
              placeholder="Ваш вопрос"
              value={chat.draft}
              onChange={(e) => chat.setDraft(e.target.value)}
            />
            <button type="submit" className="btn btn-primary btn-sm">
              Отправить
            </button>
          </form>
        </div>
      )}
      <button className="chat-fab" onClick={() => chat.open()} aria-label="Открыть чат поддержки">
        🐎
      </button>
    </>
  );
}

export default observer(ZinaidaChat);

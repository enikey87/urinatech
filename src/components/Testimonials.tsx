import { observer } from "mobx-react-lite";
import { useStore } from "../stores/RootStore";
import Poll from "./Poll";

function Stars({ n }: { n: number }) {
  return (
    <span className="review-card__stars" title={`Оценка: ${n} из 5`}>
      {"★".repeat(n)}
      <span style={{ opacity: 0.25 }}>{"★".repeat(5 - n)}</span>
    </span>
  );
}

function Testimonials() {
  const { testimonials } = useStore();

  return (
    <section id="reviews">
      <div className="container">
        <span className="section-label">П.4 · Клинические случаи и обращения</span>
        <h2 className="section-title">Результаты применения</h2>
        <p className="section-sub">
          Публикуем все отзывы, включая отрицательные и требования об удалении —
          прозрачность является принципом компании. Оригиналы обращений хранятся
          в гостевой книге, проверяйте даты.
        </p>
        <div className="reviews-grid">
          {testimonials.reviews.map((r) => (
            <article key={r.id} className="glass review-card">
              <div className="review-card__head">
                <div className="review-card__avatar">{r.avatar}</div>
                <div>
                  <div className="review-card__name">{r.name}</div>
                  <div className="review-card__city">{r.city}</div>
                </div>
                <div style={{ marginLeft: "auto" }}>
                  <Stars n={r.stars} />
                </div>
              </div>
              <p className="review-card__text">{r.text}</p>
            </article>
          ))}
        </div>
        {testimonials.hasMore && (
          <div style={{ textAlign: "center", marginTop: 28 }}>
            <button
              className="btn btn-ghost"
              onClick={() => testimonials.loadMore()}
              disabled={testimonials.loading}
            >
              {testimonials.loading ? "Загрузка архива…" : "Показать ещё"}
            </button>
          </div>
        )}
        <Poll />
      </div>
    </section>
  );
}

export default observer(Testimonials);

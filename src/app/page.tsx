import Link from "next/link";
import {
  DonutChart,
  HorizontalBars,
  LineSparkChart,
  ParticipationChart,
  VerticalBars,
} from "../components/charts";
import { IconArrow, IconMail, IconPlay } from "../components/icons";
import { PageHero, SiteFooter, SiteHeader } from "../components/site-shell";
import {
  dashboardKpis,
  documents,
  events,
  indicatorCards,
  mediaCards,
  newsCards,
} from "../lib/site-data";

function renderIndicatorChart(cardId: string) {
  const card = indicatorCards.find((item) => item.id === cardId);
  if (!card) {
    return null;
  }

  switch (card.chart) {
    case "line":
      return <LineSparkChart values={card.series.map((item) => item.value)} />;
    case "bars-horizontal":
      return <HorizontalBars data={card.series} />;
    case "bars-vertical":
      return <VerticalBars data={card.series} />;
    case "donut":
      return <DonutChart segments={card.series.map((item) => item.value)} />;
    default:
      return <ParticipationChart values={card.series.map((item) => item.value)} />;
  }
}

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="platform-shell">
        <section className="hero-section">
          <div className="hero-section__backdrop">
            <img
              src="/images/territory-network.svg"
              alt="Visual institucional del territorio y sus conexiones"
            />
          </div>
          <div className="hero-section__overlay" />
          <div className="hero-section__content">
            <div className="hero-copy">
              <h1>Pensar Jujuy desde el territorio, los datos y las personas.</h1>
              <p>
                Investigacion, analisis y participacion para comprender los
                desafios sociales, politicos y economicos de nuestra provincia.
              </p>
              <div className="hero-actions">
                <Link href="/investigaciones" className="hero-button hero-button--primary">
                  Explorar investigaciones
                </Link>
                <Link href="/actividades" className="hero-button hero-button--secondary">
                  Ver actividades
                </Link>
              </div>
            </div>

            <div className="hero-controls" aria-hidden="true">
              <div className="hero-dots">
                <span className="is-active" />
                <span />
                <span />
                <span />
              </div>
              <div className="hero-arrows">
                <button type="button">
                  <span>&lsaquo;</span>
                </button>
                <button type="button">
                  <span>&rsaquo;</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="datos" className="section-block section-block--data">
          <div className="section-block__head">
            <div>
              <h2>Encuestas y datos clave</h2>
              <p>
                Explora nuestros principales indicadores para entender como
                cambian las realidades sociales y politicas de Jujuy.
              </p>
            </div>
            <Link href="/encuestas-y-datos" className="section-link">
              Ver todos los indicadores
              <IconArrow />
            </Link>
          </div>

          <div className="indicator-card-grid">
            {indicatorCards.map((card) => (
              <article key={card.id} className="indicator-card">
                <div className="indicator-card__header">
                  <div className="indicator-icon" />
                  <div>
                    <h3>{card.title}</h3>
                    <span>{card.date}</span>
                  </div>
                </div>
                <div className="indicator-card__value">{card.value}</div>
                <p className="indicator-card__insight">{card.insight}</p>
                <div className="indicator-card__chart">{renderIndicatorChart(card.id)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="novedades" className="section-block">
          <div className="section-block__head">
            <h2>Ultimas novedades</h2>
            <div className="section-block__head-actions">
              <Link href="/investigaciones" className="section-link">
                Ver todas las noticias
              </Link>
              <div className="small-arrows" aria-hidden="true">
                <button type="button">&lsaquo;</button>
                <button type="button">&rsaquo;</button>
              </div>
            </div>
          </div>

          <div className="news-grid">
            {newsCards.map((card) => (
              <article
                key={card.id}
                className={`news-card ${card.tone === "statement" ? "news-card--statement" : ""}`}
              >
                {card.image ? (
                  <div className="news-card__image">
                    <img src={card.image} alt={card.title} />
                  </div>
                ) : null}
                <div className="news-card__body">
                  {card.tone === "statement" ? <div className="statement-cap">Comunicado institucional</div> : null}
                  <h3>{card.title}</h3>
                  <span className="news-card__date">{card.date}</span>
                  <p>{card.summary}</p>
                  <Link href={card.href} className="read-link">
                    Leer mas
                    <IconArrow />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block section-block--insight">
          <div className="section-block__head">
            <div>
              <h2>Lo que esta pasando en Jujuy</h2>
              <p>
                Una capa editorial breve para marcar cambios mensuales, alertas
                sociales y tendencias que vale la pena seguir.
              </p>
            </div>
            <Link href="/encuestas-y-datos#insights" className="section-link">
              Ver lecturas territoriales
              <IconArrow />
            </Link>
          </div>

          <div className="insight-strip">
            <article className="insight-card">
              <strong>Aumenta la preocupacion por empleo joven</strong>
              <p>El desempleo juvenil marca 24% y la informalidad se ubica en 46%.</p>
            </article>
            <article className="insight-card">
              <strong>Mejora la percepcion sobre obras publicas</strong>
              <p>58% identifica impacto positivo y la aprobacion crece en capital y valles.</p>
            </article>
            <article className="insight-card">
              <strong>Crece la participacion comunitaria en barrios</strong>
              <p>41% participo en alguna actividad comunitaria en el ultimo ano.</p>
            </article>
          </div>
        </section>

        <section id="actividades" className="section-block section-block--media">
          <div className="discover-layout">
            <div className="discover-copy">
              <h2>Conoce mas</h2>
              <p>
                Te mostramos parte de nuestro trabajo en territorio,
                investigaciones y actividades abiertas a la comunidad.
              </p>
            </div>

            <div className="media-grid">
              {mediaCards.map((card) => (
                <article key={card.id} className="media-card">
                  <Link href={card.href} className="media-card__image">
                    <img src={card.image} alt={card.title} />
                    <div className="media-card__play">
                      <IconPlay />
                    </div>
                  </Link>
                  <h3>{card.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block section-block--kpi">
          <div className="section-block__head">
            <div>
              <h2>Panorama institucional</h2>
              <p>
                Un resumen de escala operativa para dimensionar alcance
                territorial, produccion y participacion.
              </p>
            </div>
            <Link href="/encuestas-y-datos#dashboard-general" className="section-link">
              Ir al dashboard general
              <IconArrow />
            </Link>
          </div>

          <div className="kpi-grid">
            {dashboardKpis.map((kpi) => (
              <article key={kpi.label} className="kpi-card">
                <strong>{kpi.value}</strong>
                <span>{kpi.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block section-block--events-preview">
          <div className="section-block__head">
            <div>
              <h2>Proximas actividades</h2>
              <p>
                Talleres, debates y presentaciones abiertas para fortalecer
                comunidad, evidencia y participacion.
              </p>
            </div>
            <Link href="/actividades#agenda" className="section-link">
              Ver agenda completa
              <IconArrow />
            </Link>
          </div>

          <div className="event-preview-grid">
            {events.map((event) => (
              <article key={event.id} className="event-preview-card">
                <div className="event-preview-card__date">{event.date}</div>
                <div>
                  <h3>{event.title}</h3>
                  <p>{event.location}</p>
                  <span>{event.status}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="newsletter" className="newsletter-band">
          <div className="newsletter-band__icon">
            <IconMail />
          </div>
          <div className="newsletter-band__copy">
            <h2>Recibi nuestras novedades</h2>
            <p>
              Suscribite para recibir informes, analisis y actividades de CESyP
              en tu correo.
            </p>
          </div>
          <form className="newsletter-band__form">
            <input type="email" placeholder="Tu correo electronico" />
            <button type="submit">Suscribirme</button>
          </form>
        </section>

        <section className="section-block section-block--docs-preview">
          <div className="section-block__head">
            <div>
              <h2>Biblioteca destacada</h2>
              <p>
                Documentos, series y publicaciones para profundizar el trabajo
                de investigacion y observacion territorial.
              </p>
            </div>
            <Link href="/biblioteca" className="section-link">
              Ir a biblioteca
              <IconArrow />
            </Link>
          </div>
          <div className="docs-preview-grid">
            {documents.map((document) => (
              <article key={document.id} className="docs-preview-card">
                <span>{document.category}</span>
                <h3>{document.title}</h3>
                <p>{document.meta}</p>
                <Link href={document.href}>Ver ficha</Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

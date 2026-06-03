import Link from "next/link";
import { IconArrow, IconPlay } from "../../components/icons";
import { PageHero, SiteFooter, SiteHeader } from "../../components/site-shell";
import { events, mediaCards } from "../../lib/site-data";

export default function ActivitiesPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <PageHero
          eyebrow="Actividades"
          title="Encuentros, talleres y debates para sostener presencia publica."
          description="La agenda institucional articula presentaciones, trabajo de campo, actividades comunitarias y espacios de formacion con actores del territorio."
          actions={[
            { href: "#agenda", label: "Ver agenda" },
            { href: "/contacto#participa", label: "Sumarse", secondary: true },
          ]}
        />

        <section id="agenda" className="page-section">
          <div className="page-section__intro">
            <h2>Agenda de actividades</h2>
            <p>
              Cada evento presenta fecha, ubicacion, referente y estado de
              convocatoria para facilitar lectura y accion.
            </p>
          </div>
          <div className="event-preview-grid">
            {events.map((event) => (
              <article key={event.id} id={event.id} className="event-preview-card event-preview-card--full">
                <div className="event-preview-card__date">{event.date}</div>
                <div>
                  <h3>{event.title}</h3>
                  <p>{event.location}</p>
                  <span>{event.speaker}</span>
                </div>
                <div className="event-preview-card__status">{event.status}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="foros" className="page-section page-section--surface">
          <div className="page-section__intro">
            <h2>Foros y debates</h2>
            <p>
              Espacios para discutir escenarios economicos, participacion,
              conectividad, ciudadania digital y politica publica.
            </p>
          </div>
          <div className="media-grid">
            {mediaCards.map((card) => (
              <article key={card.id} id={card.id} className="media-card">
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
        </section>

        <section className="page-section">
          <div className="page-callout">
            <div>
              <h3>Continuar con la participacion</h3>
              <p>
                La agenda se complementa con canales de consulta, newsletter y
                convocatorias desde la pagina de contacto.
              </p>
            </div>
            <Link href="/contacto#consultas" className="section-link">
              Ir a contacto
              <IconArrow />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

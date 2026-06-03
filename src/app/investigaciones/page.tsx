import Link from "next/link";
import { IconArrow } from "../../components/icons";
import { PageHero, SiteFooter, SiteHeader } from "../../components/site-shell";
import { newsCards } from "../../lib/site-data";

export default function InvestigacionesPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <PageHero
          eyebrow="Investigaciones"
          title="Articulos, informes y lecturas editoriales para comprender la provincia."
          description="La seccion organiza articulos destacados, series de seguimiento y publicaciones con foco en territorio, economia, participacion y acceso a derechos."
          actions={[
            { href: "/biblioteca", label: "Ir a biblioteca" },
            { href: "/encuestas-y-datos", label: "Ver encuestas y datos", secondary: true },
          ]}
        />

        <section id="articulos" className="page-section">
          <div className="page-section__intro">
            <h2>Ultimas investigaciones</h2>
            <p>
              Una combinacion de piezas de coyuntura, informes de trabajo y
              observaciones de mediano plazo.
            </p>
          </div>
          <div className="news-grid news-grid--inner">
            {newsCards.map((card) => (
              <article
                key={card.id}
                id={card.id}
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
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="informes" className="page-section page-section--surface">
          <div className="page-section__intro">
            <h2>Series y observatorios</h2>
            <p>
              Cada publicacion se integra a una familia de trabajo para facilitar
              seguimiento, lectura comparada y continuidad institucional.
            </p>
          </div>
          <div className="content-three-column">
            <article className="content-panel">
              <h3>Observatorio sociolaboral</h3>
              <p>
                Empleo, ingresos, informalidad y juventud como ejes de lectura
                trimestral.
              </p>
            </article>
            <article className="content-panel">
              <h3>Serie territorial</h3>
              <p>
                Conectividad, servicios, participacion y articulacion comunitaria
                por region y municipio.
              </p>
            </article>
            <article className="content-panel">
              <h3>Cuadernos metodologicos</h3>
              <p>
                Herramientas para equipos tecnicos, organizaciones y actores que
                trabajan con seguimiento de iniciativas.
              </p>
            </article>
          </div>
        </section>

        <section className="page-section">
          <div className="page-callout">
            <div>
              <h3>Continuar en la biblioteca documental</h3>
              <p>
                La biblioteca reune versiones descargables, presentaciones y
                publicaciones completas para profundizar cada eje.
              </p>
            </div>
            <Link href="/biblioteca" className="section-link">
              Abrir biblioteca
              <IconArrow />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

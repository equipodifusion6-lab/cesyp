import Link from "next/link";
import { PageHero, SiteFooter, SiteHeader } from "../../components/site-shell";

export default function InvestigacionesPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <PageHero
          eyebrow="Investigaciones"
          title="Articulos, informes y lecturas editoriales para comprender la provincia."
          description="La seccion organiza investigaciones con fuentes, periodo, cobertura y limites visibles. Los resultados que requieren trabajo de campo se publican solo despues de su verificacion metodologica."
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
          <div className="research-index-grid">
            <article className="research-index-card">
              <span className="page-eyebrow">Investigación 01 · Datos verificados</span>
              <h3>Cuánto cuesta vivir: qué miden —y qué no— las canastas de Jujuy</h3>
              <p>Una guía editorial con datos publicados por DiPEC para agosto de 2026, gráficos accesibles, preguntas frecuentes y fuentes directas.</p>
              <div className="research-index-card__meta">
                <span>Serie: Monitor de costo de vida</span>
                <span>Actualización: mensual</span>
              </div>
              <Link href="/investigaciones/costo-de-vida" className="research-index-card__link">Abrir investigación →</Link>
            </article>
            <article className="research-index-card research-index-card--planned">
              <span className="page-eyebrow">Próxima investigación</span>
              <h3>Trabajo registrado y mercado laboral: dos lentes para Jujuy</h3>
              <p>En preparación. Integrará fuentes EPH y OEDE sin convertir sus universos distintos en un único indicador.</p>
              <div className="research-index-card__meta"><span>Estado: diseño de datos</span></div>
            </article>
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
              <h3>Monitor de costo de vida</h3>
              <p>Precios, canastas y sus límites de cobertura, a partir de series oficiales.</p>
            </article>
            <article className="content-panel">
              <h3>Fichas territoriales</h3>
              <p>Base de datos departamental con fecha, denominador y procedencia en cada variable.</p>
            </article>
            <article className="content-panel">
              <h3>Encuestas CESyP</h3>
              <p>Instrumentos, muestra, cuestionarios y resultados solo después de campo verificable.</p>
            </article>
          </div>
        </section>

        <section className="page-section">
          <div className="page-callout">
            <div>
              <h3>Cómo trabajamos con evidencia</h3>
              <p>
                Cada investigación publica el período, la cobertura, la metodología, las limitaciones y los enlaces a la fuente original.
              </p>
            </div>
            <Link href="/investigaciones/costo-de-vida#fuentes" className="section-link">
              Ver un ejemplo
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

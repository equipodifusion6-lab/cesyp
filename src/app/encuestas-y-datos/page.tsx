import Link from "next/link";
import {
  DonutChart,
  HorizontalBars,
  LineSparkChart,
  ParticipationChart,
  VerticalBars,
} from "../../components/charts";
import { IconArrow } from "../../components/icons";
import { PageHero, SiteFooter, SiteHeader } from "../../components/site-shell";
import {
  dashboardKpis,
  indicatorCards,
  territorialVariables,
} from "../../lib/site-data";

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

export default function DataPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <PageHero
          eyebrow="Encuestas y datos"
          title="Una capa de datos territorial, comprensible y editorial."
          description="La informacion se presenta para generar lectura, permanencia y legitimidad. No como dashboard corporativo, sino como sistema de interpretacion publica."
          actions={[
            { href: "#indicadores-principales", label: "Ver indicadores principales" },
            { href: "#dashboard-general", label: "Ir al dashboard", secondary: true },
          ]}
        />

        <section id="indicadores-principales" className="page-section">
          <div className="page-section__intro">
            <h2>Indicadores principales</h2>
            <p>
              Cinco tarjetas base para leer gestion, economia, confianza,
              participacion y preocupaciones sociales.
            </p>
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

        <section id="dashboard-general" className="page-section page-section--surface">
          <div className="page-section__intro">
            <h2>Dashboard general</h2>
            <p>
              KPIs principales de produccion institucional y alcance territorial
              construidos a partir del sistema mockeado.
            </p>
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

        <section id="observatorios" className="page-section">
          <div className="page-section__intro">
            <h2>Variables del dashboard territorial</h2>
            <p>
              Puna, Quebrada, Valles, Yungas y Ramal como marcos regionales para
              ordenar indicadores y comparaciones.
            </p>
          </div>
          <div className="tag-grid">
            {territorialVariables.map((item) => (
              <div key={item} className="tag-tile">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="insights" className="page-section page-section--surface">
          <div className="page-section__intro">
            <h2>Lo que esta pasando en Jujuy</h2>
            <p>
              Nueva seccion editorial con indicadores rapidos, cambios mensuales,
              alertas sociales y tendencias para lectura humana.
            </p>
          </div>
          <div className="insight-strip insight-strip--stack">
            <article className="insight-card">
              <strong>Aumenta la preocupacion por empleo joven</strong>
              <p>Desempleo juvenil en 24%, trabajo informal en 46% y presencia creciente de trabajo digital freelance.</p>
            </article>
            <article className="insight-card">
              <strong>Mejora la percepcion sobre obras publicas</strong>
              <p>58% identifica impacto positivo y la aprobacion crece especialmente en capital y valles.</p>
            </article>
            <article id="conectividad-rural" className="insight-card">
              <strong>La brecha digital territorial sigue abierta</strong>
              <p>Acceso estable a internet: 88% en capital, 71% en valles, 52% en quebrada y 37% en puna.</p>
            </article>
          </div>
        </section>

        <section className="page-section">
          <div className="page-callout">
            <div>
              <h3>Continuar en investigaciones y biblioteca</h3>
              <p>
                Los datos se complementan con lecturas largas, documentos y
                observatorios accesibles desde las otras areas de la plataforma.
              </p>
            </div>
            <Link href="/investigaciones" className="section-link">
              Ir a investigaciones
              <IconArrow />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

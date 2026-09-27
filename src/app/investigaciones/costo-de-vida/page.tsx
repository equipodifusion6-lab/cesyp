import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../../components/site-shell";
import {
  costOfLivingIndicators,
  costoDeVidaCorte,
  formatCurrency,
  householdCosts,
  householdDefinitions,
  officialSources,
} from "../../../lib/costo-de-vida";

function HouseholdCostChart() {
  const maxValue = Math.max(...householdCosts.map((item) => item.cbt));

  return (
    <figure className="research-chart" aria-labelledby="household-chart-title">
      <figcaption>
        <span className="page-eyebrow">Gráfico 01 · Valores mensuales</span>
        <h2 id="household-chart-title">Canastas básicas por hogar de referencia</h2>
        <p>Jujuy, agosto de 2026. Pesos corrientes.</p>
      </figcaption>
      <div className="research-chart__legend" aria-label="Referencias">
        <span><i className="research-chart__key research-chart__key--cba" /> CBA</span>
        <span><i className="research-chart__key research-chart__key--cbt" /> CBT</span>
      </div>
      <div className="household-bars" aria-hidden="true">
        {householdCosts.map((item) => (
          <div className="household-bars__group" key={item.household}>
            <div className="household-bars__plot">
              <div className="household-bars__bar household-bars__bar--cba" style={{ height: `${(item.cba / maxValue) * 100}%` }} />
              <div className="household-bars__bar household-bars__bar--cbt" style={{ height: `${(item.cbt / maxValue) * 100}%` }} />
            </div>
            <strong>{item.household}</strong>
          </div>
        ))}
      </div>
      <div className="table-scroll">
        <table className="research-table">
          <caption>Valores exactos del gráfico</caption>
          <thead>
            <tr><th>Hogar de referencia</th><th>CBA</th><th>CBT</th></tr>
          </thead>
          <tbody>
            {householdCosts.map((item) => (
              <tr key={item.household}>
                <th scope="row">{item.household}</th>
                <td>{formatCurrency(item.cba)}</td>
                <td>{formatCurrency(item.cbt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="research-chart__source">Fuente: DiPEC, comparación CBA/CBT publicada para agosto de 2026.</p>
    </figure>
  );
}

export default function CostoDeVidaPage() {
  return (
    <>
      <SiteHeader />
      <main className="research-page">
        <header className="research-hero">
          <div className="research-container">
            <span className="page-eyebrow">Investigación 01 · Vida cotidiana y cuidados</span>
            <p className="research-hero__series">Monitor CESyP · Corte: {costoDeVidaCorte}</p>
            <h1>Cuánto cuesta vivir: qué miden —y qué no— las canastas de Jujuy</h1>
            <p className="research-hero__deck">
              Una guía de fuentes públicas para leer precios, canastas y pobreza sin confundir
              cobertura geográfica, ingresos de los hogares ni resultados de una encuesta.
            </p>
            <div className="research-hero__actions">
              <a className="hero-button hero-button--primary" href="#datos">Ver datos</a>
              <a className="hero-button hero-button--secondary" href="#metodologia">Cómo leerlos</a>
            </div>
          </div>
        </header>

        <article className="research-container research-article">
          <section className="research-disclosure" aria-label="Ficha de transparencia">
            <div><span>Fuente principal</span><strong>DiPEC</strong></div>
            <div><span>Período</span><strong>{costoDeVidaCorte}</strong></div>
            <div><span>Estado</span><strong>Dato verificado</strong></div>
            <div><span>Cobertura IPC</span><strong>San Salvador–Palpalá</strong></div>
          </section>

          <section className="research-intro" id="datos">
            <p className="research-kicker">La pregunta</p>
            <h2>¿Qué información pública existe para seguir el costo de vida en Jujuy?</h2>
            <p>
              La Dirección Provincial de Estadística y Censos publica de manera mensual el
              Índice de Precios al Consumidor de San Salvador de Jujuy–Palpalá y las
              valorizaciones de la Canasta Básica Alimentaria (CBA) y la Canasta Básica Total
              (CBT). Esta investigación organiza esos datos en una pieza legible, con la fuente,
              el período y las restricciones de cada medida siempre a la vista.
            </p>
            <p>
              La CBA refiere a necesidades alimentarias de referencia. La CBT amplía esa canasta
              con bienes y servicios no alimentarios. Ninguna de las dos es el gasto observado de
              cada familia: son umbrales construidos con una metodología específica. Por eso la
              web evita decir que una canasta describe por sí misma cuánto “gasta una familia
              jujeña”.
            </p>
          </section>

          <section className="research-stat-grid" aria-label="Indicadores publicados">
            {costOfLivingIndicators.map((indicator) => (
              <article key={indicator.label} className="research-stat">
                <span>{indicator.label}</span>
                <strong>{indicator.value}</strong>
                <p>{indicator.note}</p>
              </article>
            ))}
          </section>

          <HouseholdCostChart />

          <section className="research-reading" id="metodologia">
            <div>
              <p className="research-kicker">Cómo leer el dato</p>
              <h2>Tres cuidados para no sobreinterpretar</h2>
            </div>
            <ol className="research-steps">
              <li><strong>Primero, mirar la cobertura.</strong> El IPC-JUY se releva en San Salvador de Jujuy y Palpalá. No debe presentarse como un IPC medido en todos los departamentos.</li>
              <li><strong>Después, identificar el hogar de referencia.</strong> Los valores de CBA y CBT cambian de acuerdo con la composición del hogar que define el informe técnico.</li>
              <li><strong>Por último, distinguir umbral e ingreso.</strong> La canasta es una referencia para la medición de pobreza e indigencia; no informa por sí sola el ingreso ni el consumo efectivo de cada hogar.</li>
            </ol>
          </section>

          <section className="research-panel">
            <p className="research-kicker">Preguntas frecuentes</p>
            <h2>Lo que esta investigación sí y no puede responder</h2>
            <details open>
              <summary>¿La CBA es el gasto mensual de cualquier hogar?</summary>
              <p>No. Es una valorización metodológica de una canasta alimentaria de referencia. Debe leerse junto con la composición del hogar y el informe técnico de la fuente.</p>
            </details>
            <details>
              <summary>¿El IPC-JUY representa a toda la provincia?</summary>
              <p>No de manera directa. DiPEC informa que la cobertura del IPC-JUY corresponde a San Salvador de Jujuy y Palpalá. La pieza conserva esa delimitación en sus gráficos y textos.</p>
            </details>
            <details>
              <summary>¿Este estudio mide endeudamiento, alquileres o consumo real?</summary>
              <p>No. Esos son vacíos de información. Requerirían un diseño específico de encuesta o relevamiento; CESyP no los reportará como si fueran datos existentes.</p>
            </details>
            <details>
              <summary>¿Por qué se muestra pobreza con un período distinto?</summary>
              <p>Porque la publicación más reciente disponible para ese indicador corresponde al segundo semestre de 2025. La fecha se muestra para no hacer pasar una medición histórica por situación actual.</p>
            </details>
          </section>

          <section className="research-panel">
            <p className="research-kicker">Hogares de referencia</p>
            <h2>La composición importa</h2>
            <ul className="research-definition-list">
              {householdDefinitions.map((definition) => <li key={definition}>{definition}</li>)}
            </ul>
          </section>

          <section className="research-next">
            <p className="research-kicker">Siguiente etapa</p>
            <h2>Qué dato podría producir CESyP</h2>
            <p>
              Para ampliar esta serie sin confundirla con los indicadores oficiales, CESyP podría
              diseñar un relevamiento propio de precios o un módulo de gasto y dificultades de
              pago. Antes de publicarlo deberá definir marco de comercios/hogares, muestra,
              cobertura territorial, protocolo de supervisión y método de cálculo. Hasta entonces,
              ese dato permanece como <strong>DATO A PRODUCIR POR CESyP</strong>.
            </p>
          </section>

          <section className="research-sources" id="fuentes">
            <p className="research-kicker">Trazabilidad</p>
            <h2>Fuentes y metodología</h2>
            <p>Consulta y corte editorial: 26 de septiembre de 2026. Las fuentes se enlazan de forma directa para facilitar la verificación y descarga de informes originales.</p>
            <div className="research-source-list">
              {officialSources.map((source) => (
                <a key={source.href} href={source.href} target="_blank" rel="noreferrer" className="research-source">
                  <strong>{source.title}</strong>
                  <span>{source.description}</span>
                  <em>Abrir fuente oficial ↗</em>
                </a>
              ))}
            </div>
          </section>

          <nav className="research-navigation" aria-label="Navegación de investigaciones">
            <Link href="/investigaciones">← Volver a investigaciones</Link>
            <a href="#fuentes">Ver fuentes oficiales ↓</a>
          </nav>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}

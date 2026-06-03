import Link from "next/link";
import { PageHero, SiteFooter, SiteHeader } from "../../components/site-shell";
import { newsCards, teamMembers } from "../../lib/site-data";

export default function InstitucionalPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <PageHero
          eyebrow="Institucional"
          title="Una institucion orientada a producir conocimiento publico util."
          description="CESyP trabaja en la produccion de analisis, documentacion territorial y espacios de debate vinculados a los principales desafios sociales, politicos y economicos de Jujuy."
          actions={[
            { href: "/biblioteca#institucionales", label: "Ver informes institucionales" },
            { href: "/contacto", label: "Contactar al equipo", secondary: true },
          ]}
        />

        <section id="quienes-somos" className="page-section">
          <div className="page-section__intro">
            <h2>Quienes somos</h2>
            <p>
              El Centro de Estudios Sociales y Politicos construye herramientas
              de observacion, lectura y comunicacion para acercar evidencia a
              ciudadanos, instituciones y actores sociales.
            </p>
          </div>
          <div className="content-two-column">
            <article className="content-panel">
              <h3>Mision</h3>
              <p>
                Contribuir al desarrollo de una mirada estrategica y territorial
                sobre los procesos sociales y politicos de Jujuy mediante
                investigacion, comunicacion y participacion.
              </p>
            </article>
            <article id="mision-vision" className="content-panel">
              <h3>Vision</h3>
              <p>
                Construir una institucion moderna y abierta capaz de generar
                conocimiento accesible, relevante y conectado con las
                transformaciones de la provincia.
              </p>
            </article>
          </div>
        </section>

        <section id="equipo" className="page-section page-section--surface">
          <div className="page-section__intro">
            <h2>Equipo</h2>
            <p>
              Perfiles institucionales para sostener autoria, continuidad y
              criterio profesional en cada publicacion.
            </p>
          </div>
          <div className="profile-grid">
            {teamMembers.map((member) => (
              <article key={member.name} className="content-panel">
                <h3>{member.name}</h3>
                <span className="panel-label">{member.role}</span>
                <p>{member.bio}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="transparencia" className="page-section">
          <div className="page-section__intro">
            <h2>Transparencia y posicion institucional</h2>
            <p>
              La institucion publica sus criterios de trabajo, sus lineas de
              investigacion y sus comunicados relevantes en un formato accesible.
            </p>
          </div>
          <div className="content-two-column">
            <article className="content-panel">
              <h3>Principios de trabajo</h3>
              <ul className="bullet-list">
                <li>Territorialidad y lectura situada.</li>
                <li>Participacion ciudadana y escucha comunitaria.</li>
                <li>Acceso publico a la informacion y evidencia.</li>
                <li>Lenguaje claro y jerarquia editorial consistente.</li>
              </ul>
            </article>
            <article id="comunicado-institucional" className="content-panel content-panel--accent">
              <h3>Comunicado institucional</h3>
              <p>
                Pronunciamiento sobre el acceso a la informacion publica en
                Jujuy. La transparencia y el derecho ciudadano a la informacion
                son condiciones para una esfera publica mas robusta.
              </p>
              <Link href={newsCards[3].href} className="text-link">
                Revisar comunicado
              </Link>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

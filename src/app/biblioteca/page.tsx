import Link from "next/link";
import { IconArrow } from "../../components/icons";
import { PageHero, SiteFooter, SiteHeader } from "../../components/site-shell";
import { documents } from "../../lib/site-data";

export default function LibraryPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <PageHero
          eyebrow="Biblioteca"
          title="Repositorio institucional de informes, cuadernos, boletines y presentaciones."
          description="La biblioteca organiza publicaciones por categoria para facilitar busqueda, vista previa y continuidad de lectura."
          actions={[
            { href: "#busqueda", label: "Ir a busqueda" },
            { href: "/encuestas-y-datos", label: "Volver a indicadores", secondary: true },
          ]}
        />

        <section id="busqueda" className="page-section">
          <div className="page-section__intro">
            <h2>Busqueda y categorias</h2>
            <p>
              Una capa simple para filtrar por tipo de publicacion y acceder
              rapido a los materiales centrales del archivo.
            </p>
          </div>
          <div className="tag-grid">
            <div className="tag-tile">Informes</div>
            <div className="tag-tile">Cuadernos</div>
            <div className="tag-tile">Presentaciones</div>
            <div className="tag-tile">Boletines</div>
            <div className="tag-tile">Institucionales</div>
            <div className="tag-tile">Observatorios</div>
          </div>
        </section>

        <section id="publicaciones" className="page-section page-section--surface">
          <div className="page-section__intro">
            <h2>Publicaciones destacadas</h2>
            <p>
              Cada documento presenta categoria, metadata y una accion puntual
              para seguir explorando el contenido.
            </p>
          </div>
          <div className="docs-preview-grid docs-preview-grid--inner">
            {documents.map((document) => (
              <article
                key={document.id}
                id={document.id}
                className="docs-preview-card"
              >
                <span>{document.category}</span>
                <h3>{document.title}</h3>
                <p>{document.meta}</p>
                <Link href="/contacto#consultas">Solicitar version completa</Link>
              </article>
            ))}
          </div>
        </section>

        <section id="institucionales" className="page-section">
          <div className="page-callout">
            <div>
              <h3>Documentos institucionales y archivo continuo</h3>
              <p>
                El repositorio puede ampliar fichas, preview y descargas futuras
                sin cambiar el patron visual de la plataforma.
              </p>
            </div>
            <Link href="/institucional#transparencia" className="section-link">
              Ver transparencia
              <IconArrow />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

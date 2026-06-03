import { PageHero, SiteFooter, SiteHeader } from "../../components/site-shell";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <PageHero
          eyebrow="Contacto"
          title="Canales directos para consultas, participacion y vinculacion."
          description="La pagina concentra datos de contacto, redes, suscripcion, consultas ciudadanas y opciones de participacion institucional."
          actions={[
            { href: "mailto:info@cesyp.org.ar", label: "Escribir por correo" },
            { href: "tel:+543881234567", label: "Llamar", secondary: true },
          ]}
        />

        <section id="oficina" className="page-section">
          <div className="page-section__intro">
            <h2>Oficina y canales</h2>
            <p>
              Informacion centralizada para contacto institucional, coordinacion
              de actividades y solicitudes de materiales.
            </p>
          </div>
          <div className="content-three-column">
            <article className="content-panel">
              <h3>Oficina</h3>
              <p>San Salvador de Jujuy, Argentina.</p>
            </article>
            <article className="content-panel">
              <h3>Correo</h3>
              <p>info@cesyp.org.ar</p>
            </article>
            <article className="content-panel">
              <h3>Telefono</h3>
              <p>+54 388 123 4567</p>
            </article>
          </div>
        </section>

        <section id="participa" className="page-section page-section--surface">
          <div className="page-section__intro">
            <h2>Participa</h2>
            <p>
              Canales para actividades, foros, voluntariado y acompanamiento de
              consultas publicas.
            </p>
          </div>
          <div className="content-two-column">
            <article id="consultas" className="content-panel">
              <h3>Consultas ciudadanas</h3>
              <p>
                Escribinos para compartir problematicas territoriales, pedir
                materiales o coordinar una presentacion institucional.
              </p>
            </article>
            <article id="voluntariado" className="content-panel">
              <h3>Voluntariado y colaboracion</h3>
              <p>
                Sumate a relevamientos, encuentros territoriales, apoyo en
                actividades o produccion de contenido comunitario.
              </p>
            </article>
          </div>
        </section>

        <section className="page-section">
          <div className="page-section__intro">
            <h2>Redes y presencia publica</h2>
            <p>
              Espacios de referencia para la comunicacion institucional en
              formatos sociales y audiovisuales.
            </p>
          </div>
          <div className="content-two-column">
            <article id="red-facebook" className="content-panel">
              <h3>Facebook</h3>
              <p>Canal recomendado para novedades institucionales y convocatorias abiertas.</p>
            </article>
            <article id="red-x" className="content-panel">
              <h3>X</h3>
              <p>Seguimiento de agenda publica, posicionamientos y microlecturas de coyuntura.</p>
            </article>
            <article id="red-instagram" className="content-panel">
              <h3>Instagram</h3>
              <p>Registro visual de actividades, publicaciones y trabajo en territorio.</p>
            </article>
            <article id="red-youtube" className="content-panel">
              <h3>YouTube</h3>
              <p>Presentaciones, ciclos de debate y registros audiovisuales de investigaciones.</p>
            </article>
          </div>
        </section>

        <section id="privacidad" className="page-section page-section--surface">
          <div className="content-two-column">
            <article className="content-panel">
              <h3>Politica de privacidad</h3>
              <p>
                Los datos de contacto y suscripcion se utilizan unicamente para
                comunicaciones institucionales y no se comparten con terceros.
              </p>
            </article>
            <article id="terminos" className="content-panel">
              <h3>Terminos y condiciones</h3>
              <p>
                El contenido publicado se ofrece para lectura, consulta y
                circulacion institucional con atribucion correspondiente.
              </p>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

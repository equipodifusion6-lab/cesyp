import Link from "next/link";
import {
  footerGroups,
  navigationLinks,
  socialLinks,
  type FooterGroup,
} from "../lib/site-data";
import {
  IconFacebook,
  IconInstagram,
  IconSearch,
  IconX,
  IconYoutube,
} from "./icons";

function SocialIcon({ label }: { label: string }) {
  switch (label) {
    case "Facebook":
      return <IconFacebook />;
    case "X":
      return <IconX />;
    case "Instagram":
      return <IconInstagram />;
    default:
      return <IconYoutube />;
  }
}

function FooterColumn({ group }: { group: FooterGroup }) {
  return (
    <div className="footer-column">
      <h3>{group.title}</h3>
      <ul>
        {group.items.map((item) => (
          <li key={item.label}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__top">
        <Link href="/" className="brand-lockup">
          <div className="brand-mark">CESyP</div>
          <div className="brand-copy">
            CENTRO DE ESTUDIOS
            <br />
            SOCIALES Y POLITICOS
          </div>
        </Link>

        <nav className="header-nav" aria-label="Principal">
          {navigationLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link href="/contacto#participa" className="header-cta">
            Participa
          </Link>
          <Link href="/biblioteca#busqueda" className="header-search" aria-label="Buscar">
            <IconSearch />
          </Link>
        </div>
      </div>

      <div className="site-header__social">
        {socialLinks.map((item) => (
          <Link key={item.label} href={item.href} aria-label={item.label}>
            <SocialIcon label={item.label} />
          </Link>
        ))}
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer id="contacto" className="site-footer">
      <div className="site-footer__grid">
        <div className="footer-brand">
          <Link href="/" className="brand-lockup brand-lockup--footer">
            <div className="brand-mark">CESyP</div>
            <div className="brand-copy">
              CENTRO DE ESTUDIOS
              <br />
              SOCIALES Y POLITICOS
            </div>
          </Link>
          <p>
            Aportamos conocimiento para el debate publico, impulsamos la
            participacion ciudadana y promovemos politicas publicas basadas en
            evidencia.
          </p>
          <div className="footer-socials">
            {socialLinks.map((item) => (
              <Link key={item.label} href={item.href} aria-label={item.label}>
                <SocialIcon label={item.label} />
              </Link>
            ))}
          </div>
        </div>

        {footerGroups.map((group) => (
          <FooterColumn key={group.title} group={group} />
        ))}
      </div>

      <div className="site-footer__bottom">
        <span>© 2026 CESyP - Centro de Estudios Sociales y Politicos. Todos los derechos reservados.</span>
        <div>
          <Link href="/contacto#privacidad">Politica de privacidad</Link>
          <Link href="/contacto#terminos">Terminos y condiciones</Link>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow: string;
  title: string;
  description: string;
  actions?: Array<{ href: string; label: string; secondary?: boolean }>;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero__inner">
        <span className="page-eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        {actions ? (
          <div className="page-hero__actions">
            {actions.map((action) => (
              <Link
                key={action.href + action.label}
                href={action.href}
                className={action.secondary ? "hero-button hero-button--secondary" : "hero-button hero-button--primary"}
              >
                {action.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

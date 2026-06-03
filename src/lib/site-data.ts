export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type FooterItem = {
  label: string;
  href: string;
};

export type FooterGroup = {
  title: string;
  items: FooterItem[];
};

export type IndicatorSeriesPoint = {
  label: string;
  value: number;
};

export type IndicatorCardData = {
  id: string;
  title: string;
  date: string;
  value: string;
  insight: string;
  chart: "line" | "bars-horizontal" | "bars-vertical" | "donut" | "participation";
  series: IndicatorSeriesPoint[];
};

export type NewsCard = {
  id: string;
  title: string;
  date: string;
  summary: string;
  image?: string;
  tone?: "standard" | "statement";
  href: string;
};

export type MediaCard = {
  id: string;
  title: string;
  image: string;
  href: string;
};

export type EventItem = {
  id: string;
  date: string;
  title: string;
  location: string;
  speaker: string;
  status: string;
};

export type DocumentCard = {
  id: string;
  category: string;
  title: string;
  meta: string;
  href: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export const navigationLinks: NavLink[] = [
  { label: "Institucional", href: "/institucional" },
  { label: "Investigaciones", href: "/investigaciones" },
  { label: "Encuestas y Datos", href: "/encuestas-y-datos" },
  { label: "Actividades", href: "/actividades" },
  { label: "Biblioteca", href: "/biblioteca" },
  { label: "Contacto", href: "/contacto" },
];

export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "/contacto#red-facebook" },
  { label: "X", href: "/contacto#red-x" },
  { label: "Instagram", href: "/contacto#red-instagram" },
  { label: "YouTube", href: "/contacto#red-youtube" },
];

export const indicatorCards: IndicatorCardData[] = [
  {
    id: "imagen-gestion",
    title: "Imagen de gestion provincial",
    date: "Mayo 2026",
    value: "48%",
    insight: "Evaluacion positiva",
    chart: "line",
    series: [
      { label: "Enero", value: 42 },
      { label: "Febrero", value: 44 },
      { label: "Marzo", value: 46 },
      { label: "Abril", value: 45 },
      { label: "Mayo", value: 47 },
      { label: "Junio", value: 48 },
    ],
  },
  {
    id: "preocupaciones",
    title: "Preocupaciones principales",
    date: "Mayo 2026",
    value: "42%",
    insight: "La preocupacion economica domina entre jovenes y trabajadores independientes.",
    chart: "bars-horizontal",
    series: [
      { label: "Economia", value: 42 },
      { label: "Empleo", value: 28 },
      { label: "Seguridad", value: 16 },
      { label: "Salud", value: 8 },
      { label: "Educacion", value: 6 },
    ],
  },
  {
    id: "confianza",
    title: "Confianza en instituciones",
    date: "Mayo 2026",
    value: "32%",
    insight: "Disminuye la confianza en estructuras politicas tradicionales.",
    chart: "bars-vertical",
    series: [
      { label: "Universidades", value: 61 },
      { label: "Escuelas", value: 57 },
      { label: "Hospitales", value: 49 },
      { label: "Medios", value: 38 },
      { label: "Judicial", value: 27 },
      { label: "Partidos", value: 19 },
    ],
  },
  {
    id: "situacion-hogar",
    title: "Situacion economica del hogar",
    date: "Mayo 2026",
    value: "54%",
    insight: "Afirma que empeoro",
    chart: "donut",
    series: [
      { label: "Empeoro", value: 54 },
      { label: "Igual", value: 31 },
      { label: "Mejoro", value: 15 },
    ],
  },
  {
    id: "participacion",
    title: "Participacion ciudadana",
    date: "Mayo 2026",
    value: "41%",
    insight: "Participo en alguna actividad comunitaria en el ultimo ano",
    chart: "participation",
    series: [
      { label: "Enero", value: 34 },
      { label: "Febrero", value: 37 },
      { label: "Marzo", value: 35 },
      { label: "Abril", value: 36 },
      { label: "Mayo", value: 35 },
      { label: "Junio", value: 41 },
    ],
  },
];

export const dashboardKpis = [
  { label: "Informes publicados", value: "86" },
  { label: "Actividades", value: "142" },
  { label: "Municipios relevados", value: "38" },
  { label: "Participantes", value: "12.400" },
  { label: "Encuestas", value: "67" },
  { label: "Cobertura territorial", value: "82%" },
];

export const territorialVariables = [
  "Conectividad",
  "Empleo",
  "Participacion",
  "Acceso a salud",
  "Educacion",
  "Obras publicas",
];

export const newsCards: NewsCard[] = [
  {
    id: "informe-sociopolitico",
    title: "Presentamos el Informe Sociopolitico Provincial Mayo 2026",
    date: "16 de mayo, 2026",
    summary: "Un analisis integral sobre la situacion social, politica y economica de Jujuy.",
    image: "/images/editorial-cover.svg",
    href: "/investigaciones#informe-sociopolitico",
  },
  {
    id: "juventud-participacion",
    title: "Jovenes y participacion: claves para una democracia mas fuerte",
    date: "15 de mayo, 2026",
    summary: "Resultados de nuestra investigacion sobre participacion juvenil en la provincia.",
    image: "/images/civic-forum.svg",
    href: "/investigaciones#juventud-participacion",
  },
  {
    id: "radiografia-empleo",
    title: "Radiografia del empleo en Jujuy: tendencias y desafios",
    date: "14 de mayo, 2026",
    summary: "Datos actualizados sobre empleo, informalidad y salarios en el primer trimestre del ano.",
    image: "/images/data-grid.svg",
    href: "/investigaciones#radiografia-empleo",
  },
  {
    id: "comunicado-institucional",
    title: "Pronunciamiento sobre el acceso a la informacion publica en Jujuy",
    date: "13 de mayo, 2026",
    summary: "La importancia de fortalecer la transparencia y el derecho ciudadano a la informacion.",
    tone: "statement",
    href: "/institucional#comunicado-institucional",
  },
];

export const mediaCards: MediaCard[] = [
  {
    id: "encuentros-territoriales",
    title: "Encuentros territoriales en el interior de la provincia",
    image: "/images/territory-network.svg",
    href: "/actividades#encuentros-territoriales",
  },
  {
    id: "debates-economicos",
    title: "Ciclo de debates sobre desarrollo economico regional",
    image: "/images/civic-forum.svg",
    href: "/actividades#debates-economicos",
  },
  {
    id: "conectividad-rural",
    title: "Investigacion sobre conectividad digital en zonas rurales",
    image: "/images/hero-assembly.svg",
    href: "/encuestas-y-datos#conectividad-rural",
  },
];

export const events: EventItem[] = [
  {
    id: "desarrollo-regional",
    date: "12 Jun",
    title: "Ciclo de debates sobre desarrollo economico regional",
    location: "San Salvador de Jujuy - 18:30",
    speaker: "Ana Salcedo y Juan Pablo Lamas",
    status: "Inscripcion abierta",
  },
  {
    id: "informe-sociolaboral",
    date: "20 Jun",
    title: "Presentacion del informe sociolaboral provincial",
    location: "Modalidad hibrida - 19:00",
    speaker: "Maria Eugenia Rivas",
    status: "Confirmado",
  },
  {
    id: "lectura-de-datos",
    date: "27 Jun",
    title: "Laboratorio de lectura de datos para medios locales",
    location: "San Salvador de Jujuy - 15:00",
    speaker: "Tomas Herrera",
    status: "Convocatoria activa",
  },
  {
    id: "clinica-proyectos",
    date: "05 Jul",
    title: "Clinica de proyectos para organizaciones sociales",
    location: "Libertador - 09:30",
    speaker: "Equipo CESyP",
    status: "Cupos limitados",
  },
];

export const documents: DocumentCard[] = [
  {
    id: "serie-sociolaboral",
    category: "Informe",
    title: "Serie sociolaboral del Gran Jujuy - trimestre 1",
    meta: "PDF - 64 paginas - Junio 2026",
    href: "/biblioteca#serie-sociolaboral",
  },
  {
    id: "seguimiento-comunitario",
    category: "Cuaderno",
    title: "Herramientas para seguimiento de iniciativas comunitarias",
    meta: "PDF - 32 paginas - Abril 2026",
    href: "/biblioteca#seguimiento-comunitario",
  },
  {
    id: "conectividad-escuela",
    category: "Presentacion",
    title: "Conectividad, escuela y desigualdad territorial",
    meta: "Presentacion + resumen descargable - Mayo 2026",
    href: "/biblioteca#conectividad-escuela",
  },
  {
    id: "panorama-cesyp",
    category: "Boletin",
    title: "Panorama CESyP - edicion mensual",
    meta: "HTML + archivo PDF - Actualizacion continua",
    href: "/biblioteca#panorama-cesyp",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Maria Eugenia Rivas",
    role: "Coordinadora de Analisis Territorial",
    bio: "Especialista en politicas publicas y desarrollo territorial con experiencia en investigacion social y coordinacion comunitaria.",
  },
  {
    name: "Tomas Herrera",
    role: "Comunicacion Institucional",
    bio: "Trabaja en la traduccion editorial de informes, evidencia publica y seguimiento de agenda institucional.",
  },
  {
    name: "Lucia Fernandez",
    role: "Investigacion Sociopolitica",
    bio: "Integra estudios sobre ciudadania digital, juventudes, empleo y participacion en escala provincial.",
  },
];

export const footerGroups: FooterGroup[] = [
  {
    title: "Institucional",
    items: [
      { label: "Quienes somos", href: "/institucional#quienes-somos" },
      { label: "Mision y vision", href: "/institucional#mision-vision" },
      { label: "Equipo", href: "/institucional#equipo" },
      { label: "Transparencia", href: "/institucional#transparencia" },
      { label: "Informes institucionales", href: "/biblioteca#institucionales" },
    ],
  },
  {
    title: "Investigaciones",
    items: [
      { label: "Informes", href: "/investigaciones#informes" },
      { label: "Articulos", href: "/investigaciones#articulos" },
      { label: "Observatorios", href: "/encuestas-y-datos#observatorios" },
      { label: "Publicaciones", href: "/biblioteca#publicaciones" },
    ],
  },
  {
    title: "Participa",
    items: [
      { label: "Actividades", href: "/actividades#agenda" },
      { label: "Foros y debates", href: "/actividades#foros" },
      { label: "Voluntariado", href: "/contacto#voluntariado" },
      { label: "Consultas ciudadanas", href: "/contacto#consultas" },
    ],
  },
  {
    title: "Contacto",
    items: [
      { label: "San Salvador de Jujuy, Argentina", href: "/contacto#oficina" },
      { label: "info@cesyp.org.ar", href: "mailto:info@cesyp.org.ar" },
      { label: "+54 388 123 4567", href: "tel:+543881234567" },
    ],
  },
];

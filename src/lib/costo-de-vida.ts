export const costoDeVidaCorte = "Agosto de 2026";

export const householdCosts = [
  { household: "Hogar tipo 1", cba: 543496, cbt: 1199699 },
  { household: "Hogar tipo 2", cba: 688279, cbt: 1519291 },
  { household: "Hogar tipo 3", cba: 748420, cbt: 1652045 },
] as const;

export const householdDefinitions = [
  "Hogar tipo 1: jefa de 35 años, hijo de 18 años y madre de 61 años.",
  "Hogar tipo 2: jefe de 35 años, esposa de 31 años, hijo de 5 años e hija de 8 años.",
  "Hogar tipo 3: matrimonio de 30 años y tres hijos de 5, 3 y 1 año.",
] as const;

export const costOfLivingIndicators = [
  {
    label: "IPC-JUY",
    value: "1,7 %",
    note: "Índice de Precios al Consumidor publicado para agosto de 2026.",
  },
  {
    label: "Canasta Básica Alimentaria",
    value: "2,3 %",
    note: "Indicador publicado por DiPEC para agosto de 2026.",
  },
  {
    label: "Pobreza",
    value: "26,6 %",
    note: "Personas bajo la línea de pobreza; segundo semestre de 2025.",
  },
] as const;

export const officialSources = [
  {
    title: "DiPEC — indicadores principales",
    href: "https://dipec.jujuy.gob.ar/",
    description: "Corte de indicadores y comparación CBA/CBT de agosto de 2026.",
  },
  {
    title: "DiPEC — Canasta básica y canasta de crianza",
    href: "https://dipec.jujuy.gob.ar/indicadores-sociales/condiciones-de-vida/canasta-basica/",
    description: "Informes técnicos mensuales y definiciones de CBA y CBT.",
  },
  {
    title: "DiPEC — IPC Jujuy",
    href: "https://dipec.jujuy.gob.ar/indicadores-economicos/indice-de-precios-al-consumidor/",
    description: "Metodología, cobertura San Salvador de Jujuy–Palpalá y serie del IPC-JUY.",
  },
  {
    title: "INDEC — Canasta básica",
    href: "https://www.indec.gob.ar/indec/web/Nivel4-Tema-4-43-149",
    description: "Fuente nacional de referencia para la comparación publicada por DiPEC.",
  },
] as const;

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(value);
}

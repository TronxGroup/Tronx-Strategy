"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  BarChart3,
  Server,
  Workflow,
  Headphones,
  FileText,
  Cloud,
  Zap,
  Search,
  Mail,
  Lock,
  Layers,
  LayoutTemplate,
  Sparkles,
  Wrench,
  BadgeCheck,
  Building2,
  Newspaper,
  Users,
  PhoneCall,
} from "lucide-react";

type Plan = {
  name: string;
  price: string;
  badge?: string;
  description: string;
  features: string[];
  idealFor?: string;
  popular?: boolean;
  note?: string;
  delivery?: string;
  ctaLabel?: string;
  anchorId?: string;
  portfolioFocus?: "basico" | "medio" | "premium";
};

type Card = {
  title: string;
  description: string;
  price: string;
  icon?: React.ElementType;
  cta?: { label: string; href: string };
  anchorId?: string;
};

type Recurrent = {
  title: string;
  details: string;
  price: string;
  icon?: React.ElementType;
};

type Pillar = {
  title: string;
  description: string;
  icon: React.ElementType;
  bullets: string[];
};

type Proof = {
  title: string;
  description: string;
  icon: React.ElementType;
};

type MiniCTA = {
  title: string;
  description: string;
  bullets: string[];
  price?: string;
  icon: React.ElementType;
  hrefPrimary: string;
  hrefSecondary?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
};

const PRIMARY_PLAN_ANCHOR_ID = "plan-medio";

const ANCHORS = {
  planes: "planes",
  basico: "basico",
  medio: "medio",
  premium: "premium",
  planMedioCard: PRIMARY_PLAN_ANCHOR_ID,
  ejemploEstructura: "ejemplo-estructura",
  extras: "extras",
  landing48h: "landing-48h",
  faq: "faq",
  proceso: "proceso",
  recurrente: "recurrente",
} as const;

const planos: Plan[] = [
  {
    anchorId: ANCHORS.basico,
    portfolioFocus: "basico",
    name: "Plan Básico — Presencia profesional",
    price: "$290.000",
    badge: "Ideal para empezar",
    description:
      "Para profesionales y negocios que necesitan una web clara, rápida y confiable, con lo técnico resuelto y lista para recibir contactos.",
    features: [
      "Sitio 1–3 secciones (Inicio, Servicios, Contacto)",
      "Diseño responsive (móvil, tablet, desktop) + performance base",
      "Formulario de contacto + botón directo a WhatsApp",
      "SEO base (metadatos, headings, indexación) + optimización de carga",
      "Configuración dominio/DNS + SSL (candado)",
      "Conexión GA4 (medición básica)",
      "Entrega documentada (accesos + guía breve)",
    ],
    delivery: "Entrega en 7 días hábiles desde aprobación de contenido",
    idealFor: "Consultores, profesionales independientes, negocios locales y servicios.",
    note: "No incluye blog/noticias administrables ni panel de contenidos. CRM opcional como extra.",
    ctaLabel: "Cotizar Plan Básico",
  },
  {
    anchorId: ANCHORS.medio,
    portfolioFocus: "medio",
    name: "Plan Medio — Sitio corporativo (recomendado)",
    price: "$590.000 – $690.000",
    badge: "Más elegido",
    popular: true,
    description:
      "Para empresas e instituciones que necesitan un sitio completo, medible y listo para campañas, con alcance definido por escrito.",
    features: [
      "5–7 páginas completas (Inicio, Empresa, Servicios, Equipo, Noticias/Blog, Contacto, etc.)",
      "Sección noticias administrable (comunicados / institucionalidad)",
      "GA4 + Tag Manager + eventos base (WhatsApp, formulario, botones clave)",
      "SEO On-Page: títulos, descripciones, headings, canonical, indexación",
      "Formularios listos para campañas (captura limpia + trazable)",
      "Integración base de formularios a correo/CRM (Zoho / HubSpot) según operación",
      "Capacitación de administración (1 hora) + checklist de publicación",
      "Entrega documentada (propiedad, accesos, guía de operación)",
    ],
    delivery: "Entrega en 2–3 semanas según complejidad de contenido",
    idealFor:
      "Empresas de servicios, clínicas, colegios, estudios, cámaras, equipos comerciales.",
    note: "Automatizaciones avanzadas, segmentación y flujos se cotizan aparte (Etapa 2).",
    ctaLabel: "Cotizar Plan Medio",
  },
  {
    anchorId: ANCHORS.premium,
    portfolioFocus: "premium",
    name: "Plan Premium — Plataforma institucional",
    price: "$990.000 – $1.500.000",
    badge: "Solución integral",
    description:
      "Para organizaciones con múltiples áreas, stakeholders y continuidad: gobierno digital, secciones especiales y operación medible, con alcance definido por escrito.",
    features: [
      "8–12 páginas + blog avanzado + secciones especiales (documentos, proyectos, directorio, áreas, etc.)",
      "UX mejorada con micro-interacciones orientadas a claridad y confianza",
      "Producción básica de contenido (ajuste de textos + imágenes stock profesional)",
      "Formularios por área + tracking consistente (GA4/GTM) + conversiones base",
      "Integraciones avanzadas (CRM + formularios + flujos por campañas según necesidad)",
      "Estructura de gobierno digital (propiedad, accesos, roles y continuidad)",
      "Manual Web Corporativo (PDF) + capacitación",
      "1 mes de soporte incluido (ajustes menores + acompañamiento)",
    ],
    delivery: "Entrega en 3–4 semanas con hitos definidos",
    idealFor:
      "Instituciones, cámaras, gremios y organizaciones con comunicación interna/externa.",
    note: "Ideal cuando hay múltiples responsables y se necesita control, continuidad y medición.",
    ctaLabel: "Cotizar Plan Premium",
  },
];

const pilares: Pillar[] = [
  {
    title: "Estructura clara",
    description: "Arquitectura de contenidos para que el usuario entienda y avance.",
    icon: LayoutTemplate,
    bullets: [
      "Mensaje por intención (qué haces / por qué tú / cómo contactarte)",
      "Secciones orientadas a conversión",
      "Lectura rápida y jerarquía visual",
    ],
  },
  {
    title: "Performance + seguridad",
    description: "Base moderna para velocidad, estabilidad y continuidad.",
    icon: Lock,
    bullets: ["SSL + CDN + DNS", "Buenas prácticas de despliegue", "Checklist técnico"],
  },
  {
    title: "Medición real",
    description: "Eventos y conversiones para campañas y mejora continua.",
    icon: BarChart3,
    bullets: ["GA4 + GTM", "Eventos base", "Trazabilidad para anuncios"],
  },
  {
    title: "Escalable por etapas",
    description: "Crecimiento ordenado sin rehacer el sitio al avanzar.",
    icon: Layers,
    bullets: ["Módulos por etapa", "Documentación", "Operación simple"],
  },
];

const pruebas: Proof[] = [
  {
    title: "Entrega documentada",
    description: "Accesos, llaves y guía breve para continuidad operativa.",
    icon: FileText,
  },
  {
    title: "Propiedad y accesos claros",
    description: "Dominio, DNS, analítica y despliegue con administración definida.",
    icon: BadgeCheck,
  },
  {
    title: "Checklist técnico",
    description: "DNS/SSL/performance/medición revisados antes de publicar.",
    icon: ShieldCheck,
  },
];

const extras: Card[] = [
  {
    anchorId: ANCHORS.landing48h,
    title: "Landing page (48–72 hrs)",
    description:
      "Página de alta conversión para campañas, lanzamientos o eventos. Con tracking y CTAs claros.",
    price: "$120.000 – $180.000",
    icon: Zap,
    cta: { label: "Cotizar landing", href: "/contacto#form" },
  },
  {
    title: "Kit SEO On-Page (auditoría + mejoras)",
    description:
      "Metadatos, headings, canonical, indexación y mejoras directas por página.",
    price: "$120.000 – $260.000",
    icon: Search,
    cta: { label: "Pedir auditoría", href: "/contacto#form" },
  },
  {
    title: "Optimización performance (Core Web Vitals)",
    description: "Mejoras de velocidad, peso y carga para elevar experiencia y resultados.",
    price: "$100.000 – $280.000",
    icon: Clock,
    cta: { label: "Optimizar mi sitio", href: "/contacto#form" },
  },
  {
    title: "Migración a Vercel + Cloudflare",
    description:
      "Salida ordenada desde hosting tradicional/WordPress a infraestructura moderna con checklist técnico.",
    price: "$150.000 – $350.000",
    icon: Cloud,
    cta: { label: "Ver factibilidad", href: "/contacto#form" },
  },
  {
    title: "Formularios → correo/CRM",
    description:
      "Conectamos formularios a un flujo real de recepción y seguimiento (con eventos medibles).",
    price: "$60.000 – $180.000",
    icon: Mail,
    cta: { label: "Conectar formularios", href: "/contacto#form" },
  },
  {
    title: "Rediseño express (sin rehacer todo)",
    description:
      "Renovamos visual y claridad sin reescribir tu contenido: mejor UX, misma información.",
    price: "$250.000 – $450.000",
    icon: LayoutTemplate,
    cta: { label: "Evaluar rediseño", href: "/contacto#form" },
  },
];

const recurrentes: Recurrent[] = [
  {
    title: "Hosting administrado (Vercel + Cloudflare)",
    details:
      "Infraestructura, SSL, CDN, DNS y continuidad del despliegue. Ideal para operar sin fricción.",
    price: "Desde $10.000 / mes",
    icon: Cloud,
  },
  {
    title: "Soporte y mantención",
    details:
      "Ajustes menores, correcciones, soporte técnico y acompañamiento. (No incluye carga recurrente de contenidos).",
    price: "Desde $29.990 / mes",
    icon: Headphones,
  },
  {
    title: "Gestión de contenidos",
    details:
      "Publicación mensual de noticias, comunicados, beneficios, actividades, fotos, documentos y enlaces.",
    price: "Desde $80.000 / mes",
    icon: FileText,
  },
];

const steps = [
  {
    title: "1) Brief (20 min)",
    description:
      "Objetivo, público, secciones y plazos. Definimos alcance y entregables por escrito antes de construir.",
    icon: Workflow,
  },
  {
    title: "2) Estructura + diseño base",
    description:
      "Mapa del sitio + wire simple y diseño de referencia. Aprobación temprana.",
    icon: LayoutTemplate,
  },
  {
    title: "3) Construcción + medición",
    description:
      "Desarrollo, performance, seguridad y configuración (GA4/GTM y formularios).",
    icon: Server,
  },
  {
    title: "4) Publicación + entrega",
    description:
      "Checklist técnico, ajustes menores, publicación, documentación y capacitación breve.",
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: "¿El precio incluye dominio y hosting?",
    answer:
      "Incluye configuración (DNS, SSL y puesta en producción). El dominio y la infraestructura pueden contratarlos ustedes o con nosotros como “hosting administrado”.",
  },
  {
    question: "¿Tengo que entregar textos e imágenes?",
    answer:
      "Idealmente sí para acelerar. Si tienes borradores, los ordenamos y mejoramos. En Premium incluimos ajuste de textos + selección de imágenes de stock.",
  },
  {
    question: "¿Qué diferencia hay entre soporte y gestión de contenidos?",
    answer:
      "Soporte mantiene el sitio estable (ayuda técnica, correcciones, ajustes menores). Gestión de contenidos publica y actualiza información (noticias, comunicados, beneficios, documentos).",
  },
  {
    question: "¿Qué pasa si necesito cambios después?",
    answer:
      "Puedes contratar servicios recurrentes o cotizar mejoras puntuales. Cambios estructurales, nuevas secciones o integraciones extra se evalúan y se cotizan aparte.",
  },
  {
    question: "¿Pueden facturar a empresa o institución?",
    answer:
      "Sí. Emitimos factura electrónica. Valores netos; se suma IVA según corresponda.",
  },
];

const miniCTAs: MiniCTA[] = [
  {
    title: "Landing lista para campañas",
    description: "Alta conversión con tracking y CTAs claros.",
    bullets: ["Tracking (GA4/GTM)", "CTA y formularios", "Entrega 48–72 hrs"],
    price: "Desde $120.000",
    icon: Zap,
    hrefPrimary: "/contacto#form",
    hrefSecondary: `#${ANCHORS.landing48h}`,
    primaryLabel: "Cotizar",
    secondaryLabel: "Ver detalle",
  },
  {
    title: "Optimización de sitio existente",
    description: "Mejoras de claridad, velocidad y medición sin rehacer todo.",
    bullets: ["Core Web Vitals", "SEO On-Page", "Eventos base"],
    price: "Desde $100.000",
    icon: Wrench,
    hrefPrimary: "/contacto#form",
    hrefSecondary: `#${ANCHORS.extras}`,
    primaryLabel: "Cotizar",
    secondaryLabel: "Ver extras",
  },
];

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

function portfolioLink(focus?: "basico" | "medio" | "premium") {
  if (!focus) return "/portafolio";
  return `/portafolio?focus=${encodeURIComponent(focus)}`;
}

export default function ServiciosPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: "url('/BG_servicios_strategy.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-label="Servicios Tronx Strategy"
      >
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-28 md:py-32">
          <p className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-slate-900/60 px-4 py-1 text-xs font-medium text-sky-200 mb-4">
            Next.js · Vercel · Cloudflare · GA4/GTM · Formularios · CRM
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Sitios web con{" "}
            <span className="text-sky-300">alcance definido por escrito</span> y entrega clara.
          </h1>

          <p className="mt-4 text-slate-200 text-base md:text-lg max-w-3xl mx-auto">
            Base moderna para rendimiento, seguridad y medición. Entrega documentada para operar con continuidad.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contacto#form"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm md:text-base"
              data-cta="hero_form"
            >
              Cotizar mi sitio (sin llamada)
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href={`#${PRIMARY_PLAN_ANCHOR_ID}`}
              className="btn-ghost bg-white/10 backdrop-blur hover:bg-white/20 inline-flex items-center gap-2 px-6 py-3 text-sm md:text-base"
              data-cta="hero_to_plan_medio"
            >
              Ver plan recomendado
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href={`#${ANCHORS.ejemploEstructura}`}
              className="btn-ghost bg-white/10 backdrop-blur hover:bg-white/20 inline-flex items-center gap-2 px-6 py-3 text-sm md:text-base"
              data-cta="hero_structure"
            >
              Ver ejemplo de estructura
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="mt-4 text-xs md:text-sm text-slate-300 max-w-xl mx-auto">
            Respuesta típica: <span className="text-white font-medium">menos de 24h hábiles</span>.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-[11px] text-slate-300">
            <span className="px-3 py-1 rounded-full bg-black/40 border border-slate-700/80">Entrega documentada</span>
            <span className="px-3 py-1 rounded-full bg-black/40 border border-slate-700/80">Accesos claros</span>
            <span className="px-3 py-1 rounded-full bg-black/40 border border-slate-700/80">Medición (GA4/GTM)</span>
            <span className="px-3 py-1 rounded-full bg-black/40 border border-slate-700/80">Escalable por etapas</span>
          </div>
        </div>
      </section>

      {/* QUICK BENEFITS STRIP */}
      <section className="bg-slate-950/80 border-b border-slate-800" aria-label="Beneficios rápidos">
        <div className="section flex flex-col md:flex-row items-center justify-between gap-4 py-6 text-xs md:text-sm text-slate-200">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-sky-400" />
            <span>Plazos claros: desde 7 días hábiles según plan.</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Checklist técnico + entrega documentada.</span>
          </div>
          <div className="flex items-center gap-2">
            <Cloud className="w-4 h-4 text-indigo-400" />
            <span>Infraestructura moderna (Vercel + Cloudflare).</span>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <div className="section mt-16 space-y-20">
        {/* PRUEBAS */}
        <section aria-label="Confianza y continuidad">
          <div className="grid gap-4 md:grid-cols-3">
            {pruebas.map((p) => {
              const Icon = p.icon;
              return (
                <article key={p.title} className="card-surface p-5 border border-slate-700/70">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 border border-slate-700">
                      <Icon className="w-4 h-4 text-sky-400" />
                    </div>
                    <h3 className="text-sm font-semibold text-slate-50">{p.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-slate-300">{p.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* PILARES */}
        <section aria-label="Qué incluye trabajar con Tronx Strategy">
          <header className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">Lo que incluye el servicio</h2>
            <p className="mt-3 text-sm md:text-base text-slate-300">
              Sitios que se entienden, cargan rápido y se pueden medir. Con entrega clara para operar.
            </p>
          </header>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {pilares.map((p) => {
              const Icon = p.icon;
              return (
                <article key={p.title} className="card-surface p-5 border border-slate-700/70">
                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 border border-slate-700">
                      <Icon className="w-4 h-4 text-sky-400" />
                    </div>
                    <h3 className="text-sm font-semibold text-slate-50">{p.title}</h3>
                  </div>

                  <p className="mt-3 text-sm text-slate-300">{p.description}</p>

                  <ul className="mt-4 space-y-2 text-xs text-slate-200">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 mt-[2px] text-sky-400" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        {/* EJEMPLO DE ESTRUCTURA */}
        <section id={ANCHORS.ejemploEstructura} aria-label="Ejemplo de estructura" className="scroll-mt-24">
          <header className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">Ejemplo de estructura (sitio corporativo)</h2>
            <p className="mt-3 text-sm md:text-base text-slate-300">
              Una estructura típica para explicar rápido, generar confianza y facilitar contacto.
            </p>
          </header>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <article className="card-surface p-6 border border-slate-700/70">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-sky-400" />
                <h3 className="text-sm font-semibold text-slate-50">Inicio</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                {[
                  "Propuesta de valor (1 frase) + subtexto",
                  "Servicios principales (3–6) con CTA",
                  "Bloques de confianza (clientes/experiencia)",
                  "Casos o proyectos destacados",
                  "CTA final (formulario / WhatsApp)",
                ].map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-[2px] text-sky-400" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="card-surface p-6 border border-slate-700/70">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-sky-400" />
                <h3 className="text-sm font-semibold text-slate-50">Empresa / Nosotros</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                {[
                  "Historia breve + enfoque",
                  "Equipo / roles clave (si aplica)",
                  "Metodología o forma de trabajo",
                  "Cobertura y operación (remoto/presencial)",
                  "Sellos: seguridad/medición/entrega",
                ].map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-[2px] text-sky-400" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="card-surface p-6 border border-slate-700/70">
              <div className="flex items-center gap-2">
                <Newspaper className="w-4 h-4 text-sky-400" />
                <h3 className="text-sm font-semibold text-slate-50">Servicios / Noticias / Contacto</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                {[
                  "Servicios con estructura repetible (beneficio → proceso → CTA)",
                  "Noticias/Blog (si aplica) con administración",
                  "Contacto con formulario + WhatsApp + correo",
                  "Eventos medibles (clicks, envío form, etc.)",
                  "Preguntas frecuentes (opcional)",
                ].map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-[2px] text-sky-400" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/portafolio" className="btn-ghost bg-white/10 hover:bg-white/20 px-5 py-2 text-sm inline-flex items-center gap-2">
              Ver portafolio
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contacto#form" className="btn-primary px-5 py-2 text-sm inline-flex items-center gap-2">
              Pedir propuesta
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* PLANES */}
        <section id={ANCHORS.planes} aria-label="Planes">
          <header className="max-w-3xl mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">Planes de desarrollo web</h2>
            <p className="mt-3 text-sm md:text-base text-slate-300">
              Elige el plan según tu etapa. Todos incluyen base moderna, medición y entrega documentada.
            </p>
          </header>

          <div className="grid gap-6 lg:grid-cols-3">
            {planos.map((plan) => {
              const planKey = plan.name.toLowerCase().replace(/[^\w]+/g, "_");
              const portfolioHref = portfolioLink(plan.portfolioFocus);

              return (
                <article
                  key={plan.name}
                  id={plan.popular ? ANCHORS.planMedioCard : plan.anchorId}
                  className={cx(
                    "card-surface p-6 flex flex-col h-full border scroll-mt-24",
                    plan.popular ? "border-sky-400/70 shadow-soft-glow shadow-sky-500/20" : "border-slate-700/70"
                  )}
                >
                  {/* Head */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between gap-2">
                      {plan.badge && (
                        <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold bg-slate-900/80 border border-sky-500/40 text-sky-200">
                          {plan.badge}
                        </span>
                      )}
                      {plan.popular && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-sky-300">
                          <Sparkles className="w-3.5 h-3.5" />
                          Recomendado
                        </span>
                      )}
                    </div>

                    <h3 className="mt-3 text-lg font-semibold text-slate-50">{plan.name}</h3>
                    <p className="mt-1 text-sky-400 text-base font-semibold">{plan.price}</p>
                    <p className="mt-3 text-sm text-slate-300">{plan.description}</p>

                    {plan.idealFor && (
                      <p className="mt-2 text-xs text-slate-400">
                        <span className="font-semibold text-slate-200">Ideal para:</span> {plan.idealFor}
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="mt-3 space-y-2 text-sm text-slate-200 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 mt-[2px] text-sky-400 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Delivery + notes */}
                  {plan.delivery && (
                    <p className="mt-4 text-xs text-slate-300 border-t border-slate-800 pt-3">
                      <span className="font-semibold text-slate-100">Plazo:</span> {plan.delivery}
                    </p>
                  )}

                  {plan.note && <p className="mt-2 text-xs text-slate-400">{plan.note}</p>}

                  {/* Primary CTA */}
                  <Link
                    href="/contacto#form"
                    className="btn-primary w-full text-center mt-6 inline-flex items-center justify-center gap-2"
                    data-cta={`plan_${planKey}`}
                  >
                    {plan.ctaLabel ?? "Cotizar este plan"}
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  {/* Internal CTAs */}
                  <div className="mt-3 grid gap-2">
                    <Link
                      href={`#${ANCHORS.ejemploEstructura}`}
                      className="btn-ghost bg-white/10 hover:bg-white/20 w-full text-center inline-flex items-center justify-center gap-2 px-4 py-2 text-sm"
                      data-cta={`plan_${planKey}_estructura`}
                    >
                      Ver ejemplo de estructura
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                      href={portfolioHref}
                      className="btn-ghost bg-white/5 hover:bg-white/15 w-full text-center inline-flex items-center justify-center gap-2 px-4 py-2 text-sm"
                      data-cta={`plan_${planKey}_portafolio`}
                    >
                      Ver portafolio relacionado
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <p className="mt-2 text-[11px] text-slate-400">
                    Valores referenciales. Monto final por escrito según alcance y tiempos.
                  </p>
                </article>
              );
            })}
          </div>

          {/* FUERA DE ALCANCE */}
          <div className="mt-8 card-surface p-6 border border-slate-700/70">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-sky-400" />
              <h3 className="text-sm font-semibold text-slate-50">Fuera de alcance</h3>
            </div>
            <p className="mt-2 text-sm text-slate-300">
              Nuevas secciones no consideradas, integraciones extra, rediseños completos o funcionalidades tipo “app”
              se evalúan y se cotizan aparte.
            </p>

            <div className="mt-4 grid gap-2 md:grid-cols-2 text-sm text-slate-200">
              {[
                "Cambios estructurales posteriores al cierre de alcance",
                "Integraciones avanzadas (ERP, pagos, sistemas internos)",
                "Funcionalidades tipo plataforma/app",
                "Carga recurrente de contenidos (plan mensual aparte)",
              ].map((x) => (
                <div key={x} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-[2px] text-slate-500" />
                  <span className="text-slate-300">{x}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESO + TECH */}
        <section
          id={ANCHORS.proceso}
          className="grid gap-10 lg:grid-cols-[1.1fr_minmax(0,1fr)] items-start scroll-mt-24"
          aria-label="Proceso"
        >
          <div>
            <h2 className="text-2xl font-semibold text-slate-50">Proceso de trabajo</h2>
            <p className="mt-3 text-sm md:text-base text-slate-300 max-w-xl">
              Definimos alcance y entregables por escrito desde el inicio para avanzar con control.
            </p>

            <div className="mt-6 space-y-4">
              {steps.map(({ title, description, icon: Icon }) => (
                <div key={title} className="flex gap-3">
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 border border-slate-700">
                    <Icon className="w-4 h-4 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-50">{title}</h3>
                    <p className="text-xs md:text-sm text-slate-300">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 rounded-xl border border-slate-700/70 bg-black/30">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 border border-slate-700">
                  <PhoneCall className="w-4 h-4 text-sky-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-50">Siguiente paso</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Envíanos objetivo + secciones + fecha ideal. Respondemos con propuesta y plan de trabajo.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <Link href="/contacto#form" className="btn-primary inline-flex items-center gap-2 px-5 py-2 text-sm">
                      Pedir propuesta
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <p className="text-xs text-slate-400 self-center">(sin llamada si no quieres)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-surface p-6 border border-slate-700/70">
            <h3 className="text-lg font-semibold text-slate-50">Tecnología</h3>
            <p className="mt-2 text-sm text-slate-300">
              Base moderna para rendimiento, seguridad y operación medible.
            </p>

            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              {[
                { strong: "Next.js", text: "Sitios rápidos, seguros y escalables." },
                { strong: "Vercel", text: "Deploy automático y performance global." },
                { strong: "Cloudflare", text: "DNS, CDN, seguridad y SSL." },
                { strong: "GA4 + GTM", text: "Eventos/conversiones base para campañas." },
                { strong: "Zoho / HubSpot", text: "Captura y gestión de leads (según plan)." },
              ].map((it) => (
                <li key={it.strong} className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-[2px] text-sky-400" />
                  <span>
                    <strong>{it.strong}</strong> — {it.text}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-4 text-xs text-slate-400">Toda la configuración técnica queda documentada.</p>
          </div>
        </section>

        {/* MINI CTA GRID */}
        <section aria-label="Atajos">
          <div className="grid gap-4 md:grid-cols-2">
            {miniCTAs.map((m) => {
              const Icon = m.icon;
              return (
                <article key={m.title} className="card-surface p-6 border border-slate-700/70">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 border border-slate-700">
                      <Icon className="w-4 h-4 text-sky-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-slate-50">{m.title}</h3>
                      <p className="mt-1 text-sm text-slate-300">{m.description}</p>

                      <ul className="mt-3 space-y-2 text-sm text-slate-200">
                        {m.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 mt-[2px] text-sky-400" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      {m.price && <p className="mt-3 text-sm font-semibold text-sky-300">{m.price}</p>}

                      <div className="mt-4 flex flex-wrap gap-2">
                        <Link
                          href={m.hrefPrimary}
                          className="btn-ghost bg-white/10 hover:bg-white/20 px-4 py-2 text-sm inline-flex items-center gap-2"
                        >
                          {m.primaryLabel ?? "Cotizar"} <ArrowRight className="w-4 h-4" />
                        </Link>

                        {m.hrefSecondary && (
                          <Link
                            href={m.hrefSecondary}
                            className="btn-ghost bg-white/5 hover:bg-white/15 px-4 py-2 text-sm inline-flex items-center gap-2"
                          >
                            {m.secondaryLabel ?? "Ver detalle"} <ArrowRight className="w-4 h-4" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* EXTRAS + RECURRENT */}
        <section
          id={ANCHORS.extras}
          className="grid gap-10 lg:grid-cols-[1.4fr_minmax(0,1fr)] items-start scroll-mt-24"
          aria-label="Extras"
        >
          <div>
            <h2 className="text-2xl font-semibold text-slate-50">Servicios adicionales</h2>
            <p className="mt-2 text-sm text-slate-300 max-w-2xl">
              Servicios modulares para campañas o mejoras puntuales.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {extras.map((extra) => {
                const Icon = extra.icon ?? CheckCircle2;
                return (
                  <article
                    key={extra.title}
                    id={extra.anchorId}
                    className="card-surface p-4 text-sm border border-slate-700/70 scroll-mt-24"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 border border-slate-700">
                        <Icon className="w-4 h-4 text-sky-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-50">{extra.title}</h3>
                        <p className="mt-1 text-slate-300">{extra.description}</p>
                        <p className="mt-2 text-sky-400 font-medium">{extra.price}</p>

                        {extra.cta && (
                          <div className="mt-3">
                            <Link
                              href={extra.cta.href}
                              className="btn-ghost bg-white/10 hover:bg-white/20 px-4 py-2 text-sm inline-flex items-center gap-2"
                            >
                              {extra.cta.label} <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="card-surface p-5 border border-slate-700/70 scroll-mt-24" id={ANCHORS.recurrente}>
            <h2 className="text-lg font-semibold text-slate-50">Servicios recurrentes</h2>
            <p className="mt-2 text-sm text-slate-300">
              Mantén tu sitio estable, vigente y con respuesta rápida cuando algo se necesite.
            </p>

            <ul className="mt-4 space-y-4 text-sm text-slate-200">
              {recurrentes.map((srv) => {
                const Icon = srv.icon ?? CheckCircle2;
                return (
                  <li key={srv.title} className="flex gap-3">
                    <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 border border-slate-700">
                      <Icon className="w-4 h-4 text-sky-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-50">{srv.title}</p>
                      <p className="text-slate-300">{srv.details}</p>
                      <p className="text-sky-400 text-xs mt-1">{srv.price}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <p className="mt-4 text-[11px] text-slate-400">
              Podemos armar un plan mensual a medida según frecuencia de contenidos y necesidades del equipo.
            </p>

            <div className="mt-5">
              <Link
                href="/contacto#form"
                className="btn-primary w-full text-center inline-flex items-center justify-center gap-2"
              >
                Solicitar plan mensual
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id={ANCHORS.faq} aria-label="FAQ" className="scroll-mt-24">
          <h2 className="text-2xl font-semibold text-slate-50">Preguntas frecuentes</h2>
          <p className="mt-2 text-sm text-slate-300 max-w-2xl">
            Respuestas directas para definir plan y alcance.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <article key={faq.question} className="card-surface p-4 border border-slate-700/70 text-sm">
                <h3 className="font-semibold text-slate-50">{faq.question}</h3>
                <p className="mt-2 text-slate-300">{faq.answer}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/contacto#form"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm md:text-base"
            >
              Pedir propuesta
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-xs md:text-sm text-slate-400">
              Cuéntanos objetivo, público y tipo de sitio. Respondemos con propuesta y siguiente paso.
            </p>
          </div>

          <p className="mt-4 text-[11px] text-slate-500">
            Nota: requerimientos fuera del alcance acordado (nuevas secciones, integraciones, rediseños o cambios
            estructurales) se evalúan y se cotizan por separado.
          </p>
        </section>
      </div>
    </>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  BarChart3,
  Workflow,
  Sparkles,
  Layers3,
  CheckCircle2,
  Globe2,
  Building2,
  Lock,
  Wrench,
  Cloud,
  Headphones,
  FileText,
  Zap,
} from "lucide-react";

type Item = {
  title: string;
  body: string;
  icon: React.ElementType;
};

type PlanCard = {
  name: string;
  price: string;
  badge?: string;
  description: string;
  bullets: string[];
  href: string;
  highlight?: boolean;
};

type RecurrentCard = {
  title: string;
  price: string;
  body: string;
  icon: React.ElementType;
};

const highlights: Item[] = [
  {
    title: "Gobierno digital",
    body: "Roles, accesos, propiedad y continuidad. Evitamos que el sitio quede “en tierra de nadie”.",
    icon: ShieldCheck,
  },
  {
    title: "Medición real",
    body: "GA4 + Tag Manager + eventos clave. Datos para decidir, no supuestos.",
    icon: BarChart3,
  },
  {
    title: "Operación simple",
    body: "Estructura clara, documentación y flujo para publicar sin depender del desarrollador.",
    icon: Workflow,
  },
];

const principles: Item[] = [
  {
    title: "Simple primero",
    body: "Menos fricción, más claridad. Diseñamos para equipos reales y tiempos reales.",
    icon: Sparkles,
  },
  {
    title: "Arquitectura definida",
    body: "Stack moderno (Next.js + Vercel + Cloudflare) con decisiones y accesos claros.",
    icon: Layers3,
  },
  {
    title: "Diseño con propósito",
    body: "Cada sección responde a una necesidad: informar, convertir, aclarar o guiar.",
    icon: Workflow,
  },
];

const whatWeDo = [
  "Estructura + copy alineado a objetivo (ventas, reputación, institucionalidad, RR.HH.).",
  "Implementación moderna (Next.js + Vercel + Cloudflare) con performance real.",
  "Gobierno técnico: dominio/DNS, SSL, seguridad base, ownership y accesos documentados.",
  "Medición: GA4 + GTM (según plan) + eventos base (WhatsApp, formularios, CTAs).",
  "Escalamiento por etapas: noticias administrables, CRM (Zoho/HubSpot) y flujos (opcional).",
  "Entrega documentada + checklist + capacitación breve para operación.",
];

const whoItsFor: Item[] = [
  {
    title: "Empresas B2B y servicios",
    body: "Necesitan claridad comercial, confianza y captación de leads operable.",
    icon: Building2,
  },
  {
    title: "Instituciones y asociaciones",
    body: "Requieren estructura robusta, noticias/beneficios, continuidad y accesos claros.",
    icon: Globe2,
  },
  {
    title: "Equipos de marketing/comunicaciones",
    body: "Quieren ejecución rápida, medición y soporte sin fricción técnica.",
    icon: Workflow,
  },
];

const deliverables: Item[] = [
  { title: "Alcance y hitos", body: "Qué entra / qué no entra, plazos y responsables.", icon: CheckCircle2 },
  { title: "Gobierno y accesos", body: "Propiedad, usuarios, roles y llaves documentadas.", icon: Lock },
  { title: "Checklist de publicación", body: "DNS/SSL/performance/indexación/eventos.", icon: Wrench },
];

const plans: PlanCard[] = [
  {
    name: "Plan Básico — Presencia profesional",
    price: "$290.000",
    badge: "Ideal para empezar",
    description: "Web clara, rápida y confiable (1–3 secciones) lista para recibir contactos.",
    bullets: [
      "1–3 secciones (Inicio, Servicios, Contacto)",
      "Formulario + botón WhatsApp",
      "SEO base + optimización de carga",
      "DNS/SSL + GA4 (medición básica)",
      "Entrega documentada",
      "Plazo: 7 días hábiles",
    ],
    href: "/servicios#basico",
  },
  {
    name: "Plan Medio — Sitio corporativo (recomendado)",
    price: "$590.000 – $690.000",
    badge: "Más elegido",
    description: "Sitio completo, medible y listo para campañas. Alcance definido por escrito.",
    bullets: [
      "5–7 páginas + noticias administrable",
      "GA4 + GTM + eventos base",
      "SEO On-Page (títulos, canonical, indexación)",
      "Formularios trazables + conexión base a correo/CRM",
      "Capacitación + checklist + entrega documentada",
      "Plazo: 2–3 semanas",
    ],
    href: "/servicios#medio",
    highlight: true,
  },
  {
    name: "Plan Premium — Plataforma institucional",
    price: "$990.000 – $1.500.000",
    badge: "Solución integral",
    description: "Gobierno digital + secciones especiales + continuidad. Operación medible.",
    bullets: [
      "8–12 páginas + blog avanzado + secciones especiales",
      "Tracking consistente + formularios por área",
      "Integraciones avanzadas (según operación)",
      "Manual Web Corporativo + capacitación",
      "1 mes de soporte incluido",
      "Plazo: 3–4 semanas",
    ],
    href: "/servicios#premium",
  },
];

const recurrent: RecurrentCard[] = [
  {
    title: "Hosting administrado (Vercel + Cloudflare)",
    price: "$10.000 / mes",
    body: "Infraestructura, SSL, CDN, DNS y continuidad del despliegue. Operar sin fricción.",
    icon: Cloud,
  },
  {
    title: "Soporte y mantención",
    price: "$29.990 / mes",
    body: "Ajustes menores, correcciones y soporte técnico. (No incluye carga recurrente de contenidos).",
    icon: Headphones,
  },
  {
    title: "Gestión de contenidos",
    price: "$80.000 / mes",
    body: "Publicación mensual de noticias, comunicados, beneficios, actividades, fotos y documentos.",
    icon: FileText,
  },
];

const MONTHLY_FULL = "$119.990 / mes";
const MONTHLY_MIN = "$39.990 / mes";

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export default function NosotrosPage() {
  return (
    <section
      className="relative min-h-screen w-full"
      style={{
        backgroundImage: "url('/BG_nosotros_strategy.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      aria-label="Nosotros Tronx Strategy"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-[1px]" />

      <div className="relative section py-20 lg:py-24">
        {/* HEADER */}
        <header className="max-w-5xl">
          <p className="text-xs font-semibold tracking-[0.26em] uppercase text-sky-300/90">Nosotros</p>

          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Tronx Strategy es <span className="text-sky-300">WebOps</span>: sitios modernos que se pueden operar.
          </h1>

          <p className="mt-4 text-base md:text-lg text-slate-200 max-w-4xl">
            Diseñamos y construimos sitios corporativos e institucionales con{" "}
            <span className="text-white font-medium">alcance definido por escrito</span>.
            La diferencia no es “hacer una web”: es dejarla{" "}
            <span className="text-white font-medium">gobernada</span>,{" "}
            <span className="text-white font-medium">medible</span> y{" "}
            <span className="text-white font-medium">sostenible</span> para equipos reales.
          </p>

          {/* CTA row */}
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <Link
              href="/contacto#form"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm md:text-base"
              data-cta="about_primary"
            >
              Cotizar (sin llamada)
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/servicios#planes"
              className="btn-ghost bg-white/10 hover:bg-white/20 inline-flex items-center gap-2 px-6 py-3 text-sm md:text-base"
              data-cta="about_to_plans"
            >
              Ver planes y alcance
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/portafolio"
              className="btn-ghost bg-white/5 hover:bg-white/15 inline-flex items-center gap-2 px-6 py-3 text-sm md:text-base"
              data-cta="about_to_portfolio"
            >
              Ver casos reales
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Quick highlights */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {highlights.map(({ title, body, icon: Icon }) => (
              <div key={title} className="card-surface p-5 bg-black/55 backdrop-blur border border-white/10">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 border border-slate-700/70">
                    <Icon className="w-4 h-4 text-sky-300" />
                  </span>
                  <h3 className="text-sm font-semibold text-white">{title}</h3>
                </div>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </header>

        {/* MAIN */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.35fr_minmax(0,1fr)] items-start">
          {/* Left */}
          <div className="space-y-6 text-sm md:text-base text-slate-300 leading-relaxed">
            <p>
              Tronx Strategy es la unidad de operación web dentro de{" "}
              <strong className="text-white">Tronx Group SpA</strong>. Trabajamos con empresas, cámaras e instituciones
              que necesitan un sitio que funcione en la realidad:{" "}
              <strong className="text-white">explicar con claridad</strong>,{" "}
              <strong className="text-white">captar oportunidades</strong> y{" "}
              <strong className="text-white">mantener continuidad</strong>.
            </p>

            <div className="rounded-xl border border-white/10 bg-black/40 p-5">
              <p className="text-sm font-semibold text-white">Qué hacemos (lo concreto)</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                {whatWeDo.map((it) => (
                  <li key={it} className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-[2px] text-sky-300 flex-shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-slate-400">
                Trabajamos con alcance definido. Requerimientos fuera de alcance se cotizan por separado.
              </p>
            </div>

            <p>
              Operamos con arquitectura definida:{" "}
              <strong className="text-white">GitHub</strong> (control de versiones),{" "}
              <strong className="text-white">Vercel</strong> (deploy y performance) y{" "}
              <strong className="text-white">Cloudflare</strong> (DNS, CDN y seguridad). Esto reduce fricción, acelera
              cambios y evita depender de “hosting lento + paneles frágiles”.
            </p>

            <div className="rounded-xl border border-white/10 bg-black/40 p-5">
              <p className="text-sm font-semibold text-white">La diferencia Tronx</p>
              <p className="mt-2 text-sm text-slate-200">
                La IA puede generar páginas. Nosotros diseñamos{" "}
                <strong className="text-white">gobierno y continuidad</strong>: propiedad, accesos, seguridad, medición y
                operación para que el sitio sea un activo del negocio.
              </p>
            </div>

            <p>
              Trabajamos por <strong className="text-white">etapas</strong>: partimos con una base sólida y escalamos sin
              rehacer todo (noticias, CRM, directorios, portales, automatizaciones y reporting).
            </p>

            {/* Continuidad (mensualidad) */}
            <div className="rounded-2xl border border-sky-400/25 bg-black/40 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-white">Continuidad operativa (recomendado)</p>
                  <p className="mt-1 text-sm text-slate-200">
                    El sitio se mantiene sano cuando hay infraestructura + soporte + contenidos. Por eso empujamos un
                    plan mensual claro.
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-200">
                  <Zap className="w-3.5 h-3.5 text-sky-300" />
                  Cierre con mensualidad
                </span>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {recurrent.map(({ title, price, body, icon: Icon }) => (
                  <div key={title} className="rounded-xl border border-white/10 bg-black/30 p-4">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 border border-slate-700/70">
                        <Icon className="w-4 h-4 text-sky-300" />
                      </span>
                      <p className="text-sm font-semibold text-white">{title}</p>
                    </div>
                    <p className="mt-2 text-xs text-slate-300">{body}</p>
                    <p className="mt-2 text-sm font-semibold text-sky-300">{price}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                  <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-300">Plan recomendado</p>
                  <p className="mt-2 text-lg font-semibold text-white">{MONTHLY_FULL}</p>
                  <p className="mt-1 text-xs text-slate-300">
                    Hosting administrado + Soporte + Gestión de contenidos.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                  <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-300">Mínimo sano</p>
                  <p className="mt-2 text-lg font-semibold text-white">{MONTHLY_MIN}</p>
                  <p className="mt-1 text-xs text-slate-300">Hosting administrado + Soporte (sin contenidos).</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/contacto#form"
                  className="btn-primary inline-flex items-center gap-2 px-5 py-2 text-sm"
                  data-cta="about_monthly_request"
                >
                  Pedir plan mensual
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/servicios#recurrente"
                  className="btn-ghost bg-white/10 hover:bg-white/20 inline-flex items-center gap-2 px-5 py-2 text-sm"
                  data-cta="about_monthly_detail"
                >
                  Ver detalle recurrente
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <p className="mt-3 text-[11px] text-slate-400">
                Nota: la gestión de contenidos requiere que el sitio tenga sección administrable (Plan Medio o superior /
                o Etapa 2).
              </p>
            </div>
          </div>

          {/* Right */}
          <aside className="space-y-6">
            <div className="card-surface p-6 bg-black/60 backdrop-blur border border-white/10">
              <h2 className="text-lg font-semibold text-white">Principios de trabajo</h2>

              <div className="mt-4 space-y-4">
                {principles.map(({ title, body, icon: Icon }) => (
                  <div key={title} className="flex gap-3">
                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 border border-slate-700/70">
                      <Icon className="w-4 h-4 text-sky-300" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{title}</p>
                      <p className="text-sm text-slate-300">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-surface p-6 bg-black/60 backdrop-blur border border-white/10">
              <h2 className="text-lg font-semibold text-white">Para quién es</h2>
              <div className="mt-4 space-y-4">
                {whoItsFor.map(({ title, body, icon: Icon }) => (
                  <div key={title} className="flex gap-3">
                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 border border-slate-700/70">
                      <Icon className="w-4 h-4 text-sky-300" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{title}</p>
                      <p className="text-sm text-slate-300">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Plan summary card */}
            <div className="card-surface p-6 bg-black/60 backdrop-blur border border-white/10">
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-sky-300/90">Planes</p>
              <h2 className="mt-2 text-lg font-semibold text-white">Alcance cerrado. Entrega clara.</h2>
              <p className="mt-2 text-sm text-slate-300">
                Publica rápido con un plan y escala por etapas (sin rehacer todo).
              </p>

              <div className="mt-4 space-y-3">
                {plans.map((p) => (
                  <div
                    key={p.name}
                    className={cx(
                      "rounded-xl border bg-black/30 p-4",
                      p.highlight ? "border-sky-400/40" : "border-white/10"
                    )}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        {p.badge && (
                          <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold bg-slate-900/80 border border-sky-500/30 text-sky-200">
                            {p.badge}
                          </span>
                        )}
                        <p className="mt-2 text-sm font-semibold text-white">{p.name}</p>
                        <p className="mt-1 text-sm font-semibold text-sky-300">{p.price}</p>
                      </div>
                      <Link
                        href={p.href}
                        className="btn-ghost bg-white/10 hover:bg-white/20 px-3 py-2 text-xs inline-flex items-center gap-2"
                        data-cta={`about_plan_${p.name}`}
                      >
                        Ver detalle <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <p className="mt-2 text-xs text-slate-300">{p.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <Link
                  href="/servicios#planes"
                  className="btn-primary w-full text-center inline-flex items-center justify-center gap-2"
                  data-cta="about_plans_primary"
                >
                  Ver planes completos
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <p className="mt-3 text-[11px] text-slate-400">
                Valores referenciales. Monto final por escrito según alcance y tiempos.
              </p>
            </div>
          </aside>
        </div>

        {/* DELIVERABLES */}
        <section className="mt-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.26em] uppercase text-sky-300/90">Estándar de entrega</p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-white">
              Menos promesas, más entregables verificables.
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-300">
              Para que el proyecto no dependa de una persona, dejamos todo documentado y operable.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {deliverables.map(({ title, body, icon: Icon }) => (
              <div key={title} className="card-surface p-5 bg-black/45 backdrop-blur border border-white/10 h-full">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 border border-slate-700/70">
                    <Icon className="w-4 h-4 text-sky-300" />
                  </span>
                  <p className="text-sm font-semibold text-white">{title}</p>
                </div>
                <p className="mt-2 text-sm text-slate-300">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM BLOCKS */}
        <section className="mt-12 grid gap-6 md:grid-cols-3 text-xs md:text-sm text-slate-300">
          <div className="card-surface p-5 bg-black/45 backdrop-blur border border-white/10">
            <p className="font-semibold text-slate-100">Operación cloud-first</p>
            <p className="mt-2">
              Proyectos en todo Chile. Flujo remoto, hitos claros y continuidad técnica sin depender de un “hosting”.
            </p>
          </div>

          <div className="card-surface p-5 bg-black/45 backdrop-blur border border-white/10">
            <p className="font-semibold text-slate-100">Estándar corporativo</p>
            <p className="mt-2">
              Alcance cerrado, control de cambios, documentación y comunicación ejecutiva. Menos vueltas, más avance.
            </p>
          </div>

          <div className="card-surface p-5 bg-black/45 backdrop-blur border border-white/10">
            <p className="font-semibold text-slate-100">Preparado para crecer</p>
            <p className="mt-2">
              Base lista para campañas, contenidos, CRM y escalamiento por etapas sin rehacer todo.
            </p>
          </div>
        </section>

        {/* FINAL CTA */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-black/45 backdrop-blur p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-semibold text-white">
            Si necesitas un equipo que hable negocio y tecnología, conversemos.
          </h3>
          <p className="mt-2 text-sm md:text-base text-slate-300 max-w-3xl">
            Envíanos objetivo + secciones + fecha ideal. Te respondemos con propuesta clara: alcance, plazo, valor y
            recomendación de continuidad mensual.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contacto#form"
              className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 text-sm md:text-base"
              data-cta="about_final_primary"
            >
              Cotizar (sin llamada)
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/servicios#planes"
              className="btn-ghost bg-white/10 hover:bg-white/20 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm md:text-base"
              data-cta="about_final_plans"
            >
              Ver planes
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="mailto:info@tronxstrategy.com"
              className="btn-ghost bg-white/5 hover:bg-white/15 inline-flex items-center justify-center px-6 py-3 text-sm md:text-base"
              data-cta="about_email"
            >
              info@tronxstrategy.com
            </a>
          </div>

          <p className="mt-3 text-[11px] text-slate-400">
            Trabajamos con alcance definido. Cambios estructurales, nuevas secciones o integraciones extra se evalúan y
            cotizan por separado.
          </p>
        </div>
      </div>
    </section>
  );
}

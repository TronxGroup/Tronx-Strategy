"use client";

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
} from "lucide-react";

type Item = {
  title: string;
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
    body: "Stack moderno y estable (Next.js, Vercel, Cloudflare) con decisiones explicadas.",
    icon: Layers3,
  },
  {
    title: "Diseño con propósito",
    body: "Cada sección responde a una necesidad: informar, convertir, aclarar o guiar.",
    icon: Workflow,
  },
];

const whatWeDo = [
  "Estructura y copy alineado a objetivo (ventas, reputación, institucionalidad, RRHH).",
  "Implementación web moderna (Next.js + Vercel + Cloudflare) con performance real.",
  "SEO base y gobierno técnico (DNS/SSL/WAF, ownership, llaves y accesos).",
  "Medición: GA4 + GTM + eventos y conversiones base (WhatsApp, formularios, CTAs).",
  "Integraciones opcionales: CRM (Zoho/HubSpot), automatizaciones y flujos.",
  "Entrega documentada + checklist + capacitación breve para operación.",
];

const whoItsFor = [
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

const deliverables = [
  { title: "Alcance y hitos", body: "Qué entra / qué no entra, plazos y responsables.", icon: CheckCircle2 },
  { title: "Gobierno y accesos", body: "Propiedad, usuarios, roles y llaves documentadas.", icon: Lock },
  { title: "Checklist de publicación", body: "DNS/SSL/performance/indexación/eventos.", icon: Wrench },
];

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
        <header className="max-w-4xl">
          <p className="text-xs font-semibold tracking-[0.26em] uppercase text-sky-300/90">Nosotros</p>

          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Tronx Strategy es{" "}
            <span className="text-sky-300">WebOps</span>: sitios modernos que se pueden operar.
          </h1>

          <p className="mt-4 text-base md:text-lg text-slate-200">
            Diseñamos y construimos sitios web corporativos e institucionales bajo un modelo 100% cloud.
            La diferencia no es “hacer una web”: es dejarla <span className="text-white font-medium">gobernada</span>,{" "}
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
              Agenda una llamada sin costo
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/servicios#planes"
              className="btn-ghost bg-white/10 hover:bg-white/20 inline-flex items-center gap-2 px-6 py-3 text-sm md:text-base"
              data-cta="about_to_plans"
            >
              Ver planes y servicios →
            </Link>
          </div>

          {/* Quick highlights */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {highlights.map(({ title, body, icon: Icon }) => (
              <div
                key={title}
                className="card-surface p-5 bg-black/55 backdrop-blur border border-white/10"
              >
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
              Tronx Strategy es la unidad de crecimiento y operación web dentro de{" "}
              <strong className="text-white">Tronx Group SpA</strong>. Trabajamos con empresas, cámaras e instituciones
              que necesitan un sitio que funcione en la realidad:{" "}
              <strong className="text-white">informar con claridad</strong>,{" "}
              <strong className="text-white">captar oportunidades</strong> y{" "}
              <strong className="text-white">sostenerse en el tiempo</strong>.
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
              Operamos con una{" "}
              <strong className="text-white">arquitectura definida</strong>: GitHub para control de versiones,
              Vercel para despliegue y Cloudflare para performance y seguridad. Esto reduce fricción, acelera cambios y
              evita depender de “hosting lento + paneles frágiles”.
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
              Nuestro enfoque es por <strong className="text-white">capas</strong>: partimos con una base sólida y
              escalamos sin rehacer todo desde cero (noticias, CRM, directorios, portales, automatizaciones y reporting).
            </p>
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
              <div
                key={title}
                className={cx(
                  "card-surface p-5 bg-black/45 backdrop-blur border border-white/10",
                  "h-full"
                )}
              >
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
            <p className="font-semibold text-slate-100">Cobertura nacional</p>
            <p className="mt-2">
              Proyectos en todo Chile. Operación remota, reuniones online y procesos formales por etapas.
            </p>
          </div>

          <div className="card-surface p-5 bg-black/45 backdrop-blur border border-white/10">
            <p className="font-semibold text-slate-100">Estándar corporativo</p>
            <p className="mt-2">
              Entregables claros, control de cambios, documentación y comunicación ejecutiva. Menos vueltas, más avance.
            </p>
          </div>

          <div className="card-surface p-5 bg-black/45 backdrop-blur border border-white/10">
            <p className="font-semibold text-slate-100">Preparado para crecer</p>
            <p className="mt-2">
              Base lista para campañas, contenidos, CRM y escalamiento a portales o directorios sin rehacer todo.
            </p>
          </div>
        </section>

        {/* FINAL CTA */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-black/45 backdrop-blur p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-semibold text-white">
            Si necesitas un equipo que hable negocio y tecnología, conversemos.
          </h3>
          <p className="mt-2 text-sm md:text-base text-slate-300 max-w-3xl">
            Revisamos tu situación y te proponemos un plan eficiente: estructura, contenido, medición, captación y soporte.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contacto#form"
              className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 text-sm md:text-base"
              data-cta="about_final_primary"
            >
              Contacto / agendar llamada
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="mailto:info@tronxstrategy.com"
              className="btn-ghost bg-white/10 hover:bg-white/20 inline-flex items-center justify-center px-6 py-3 text-sm md:text-base"
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

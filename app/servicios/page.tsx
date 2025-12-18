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
};

type Card = {
  title: string;
  description: string;
  price: string;
  icon?: React.ElementType;
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

const planos: Plan[] = [
  {
    name: "Plan Básico — Presencia profesional",
    price: "$290.000",
    badge: "Ideal para empezar",
    description:
      "Para profesionales y negocios que necesitan una web clara, rápida y confiable, con lo técnico resuelto y lista para recibir contactos.",
    features: [
      "Sitio de 1 a 3 secciones (Inicio, Servicios, Contacto)",
      "Diseño responsive (móvil, tablet, desktop) + performance base",
      "Formulario de contacto + botón directo a WhatsApp",
      "SEO básico (metadatos, headings, indexación) + tiempos de carga optimizados",
      "Configuración de dominio, DNS y SSL (candado de seguridad)",
      "Conexión a Google Analytics 4 (medición básica)",
      "Entrega documentada (accesos + guía breve de uso)",
    ],
    delivery: "Entrega en 7 días hábiles desde aprobación del contenido",
    idealFor: "Consultores, profesionales independientes, negocios locales y servicios.",
    note:
      "No incluye blog/noticias administrables ni panel de contenidos. No incluye integración con CRM (se agrega como extra).",
  },
  {
    name: "Plan Medio — Sitio corporativo",
    price: "$590.000 – $690.000",
    badge: "Más elegido",
    popular: true,
    description:
      "Para empresas e instituciones que requieren un sitio completo con páginas, medición real y una base lista para campañas y crecimiento por etapas.",
    features: [
      "5 a 7 páginas completas (Inicio, Empresa, Servicios, Equipo, Noticias/Blog, Contacto, etc.)",
      "Sección de noticias administrable (ideal para comunicados e institucionalidad)",
      "GA4 + Tag Manager con eventos base (click WhatsApp, envío formulario, botones clave)",
      "Optimización SEO On-Page (títulos, descripciones, estructura, headings + canonical)",
      "Formularios listos para campañas (captura limpia y trazable)",
      "Integración base con CRM (Zoho / HubSpot) para captura de leads desde formularios web",
      "Capacitación de administración (1 hora) + checklist de publicación",
      "Entrega documentada (propiedad, accesos, guía de operación)",
    ],
    delivery: "Entrega en 2 a 3 semanas según complejidad del contenido",
    idealFor: "Empresas de servicios, clínicas, colegios, estudios, cámaras, equipos comerciales.",
    note:
      "Incluye estructura robusta para operar. Automatizaciones avanzadas, segmentación, flujos y campañas se cotizan aparte.",
  },
  {
    name: "Plan Premium — Plataforma institucional",
    price: "$990.000 – $1.500.000",
    badge: "Solución integral",
    description:
      "Para organizaciones con múltiples áreas y continuidad: gobierno digital, secciones especiales, formularios por unidad y operación medible.",
    features: [
      "8 a 12 páginas + blog avanzado + secciones especiales (documentos, proyectos, directorio, áreas, etc.)",
      "UX mejorada con micro-interacciones orientadas a claridad y confianza (sin “humo”)",
      "Producción básica de contenido (ajuste de textos + selección de imágenes de stock profesional)",
      "Formularios por área + tracking consistente (GA4/GTM) y eventos/conversiones base",
      "Integraciones avanzadas (CRM + formularios + flujos por campañas según necesidad)",
      "Estructura de gobierno digital (propiedad, accesos, roles y continuidad)",
      "Manual Web Corporativo (PDF) + capacitación",
      "1 mes de soporte incluido (ajustes menores y acompañamiento técnico)",
    ],
    delivery: "Entrega en 3 a 4 semanas con calendario e hitos definidos",
    idealFor: "Instituciones, cámaras, gremios y organizaciones con comunicación interna/externa.",
    note:
      "Ideal cuando hay múltiples stakeholders y necesidad de continuidad, control y medición.",
  },
];

const pilares: Pillar[] = [
  {
    title: "Diseño + estructura que vende",
    description:
      "No es “una web bonita”: es una estructura clara para que el usuario entienda rápido y avance.",
    icon: LayoutTemplate,
    bullets: [
      "Jerarquía y mensajes por intención",
      "Secciones orientadas a conversión",
      "UI coherente + lectura rápida",
    ],
  },
  {
    title: "Performance y seguridad",
    description:
      "Base moderna para que cargue rápido, se mantenga estable y no dependa de un hosting frágil.",
    icon: Lock,
    bullets: ["SSL + CDN + DNS", "Buenas prácticas de despliegue", "Checklist técnico y continuidad"],
  },
  {
    title: "Medición real (sin suposiciones)",
    description:
      "Medimos lo que importa: contacto, interés, clicks y conversiones base. Lo demás es ruido.",
    icon: BarChart3,
    bullets: ["GA4 + GTM", "Eventos base", "Trazabilidad para campañas"],
  },
  {
    title: "Operación por etapas",
    description:
      "Partimos por lo esencial y escalamos. Así evitas rehacer todo cuando tu organización crece.",
    icon: Layers,
    bullets: ["Escalable por módulos", "Documentado", "Fácil de mantener"],
  },
];

const extras: Card[] = [
  {
    title: "Landing page (48–72 hrs)",
    description:
      "Página de alta conversión para campañas, lanzamientos o eventos. Con tracking y CTA claros.",
    price: "$120.000 – $180.000",
    icon: Zap,
  },
  {
    title: "Kit SEO On-Page (auditoría + mejoras)",
    description:
      "Estructura, metadatos, headings, canonical, indexación y mejoras directas por página.",
    price: "$120.000 – $260.000",
    icon: Search,
  },
  {
    title: "Optimización performance (Core Web Vitals)",
    description:
      "Mejoras de velocidad, peso, carga e interacción para elevar experiencia y resultados.",
    price: "$100.000 – $280.000",
    icon: Clock,
  },
  {
    title: "Migración a Vercel + Cloudflare",
    description:
      "Salida ordenada desde hosting tradicional/WordPress a infraestructura moderna con checklist técnico.",
    price: "$150.000 – $350.000",
    icon: Cloud,
  },
  {
    title: "Formularios + entrega a correo/CRM (Formspree/Zoho)",
    description:
      "Conectamos formularios a un flujo real de recepción y seguimiento (con eventos medibles).",
    price: "$60.000 – $180.000",
    icon: Mail,
  },
  {
    title: "Rediseño express (sin rehacer todo)",
    description:
      "Renovamos visual y claridad sin reescribir tu contenido: mejor UX, misma información.",
    price: "$250.000 – $450.000",
    icon: LayoutTemplate,
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
    title: "1. Llamada de alineación",
    description:
      "Objetivos, público, alcance y plazos. Definimos plan recomendado y valor referencial sin costo.",
    icon: Workflow,
  },
  {
    title: "2. Arquitectura y diseño",
    description:
      "Estructura del sitio + wireframe y diseño base para aprobar antes de construir.",
    icon: Server,
  },
  {
    title: "3. Desarrollo e integraciones",
    description:
      "Construcción, despliegue y configuración (Cloudflare, GA4/GTM y CRM según plan).",
    icon: BarChart3,
  },
  {
    title: "4. Revisión, capacitación y publicación",
    description:
      "Ajustes finales, checklist técnico, capacitación breve y entrega documentada con accesos.",
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: "¿El precio incluye dominio y hosting?",
    answer:
      "Incluye configuración (DNS, SSL y puesta en producción). El dominio y el hosting/infraestructura pueden contratarlos ustedes o con nosotros como “hosting administrado”.",
  },
  {
    question: "¿Tengo que entregar textos e imágenes?",
    answer:
      "Idealmente sí para acelerar. Si tienes borradores, los mejoramos. En Premium incluimos ajuste de textos + selección de imágenes de stock.",
  },
  {
    question: "¿Qué diferencia hay entre soporte y gestión de contenidos?",
    answer:
      "Soporte mantiene el sitio estable (ajustes menores, correcciones, ayuda técnica). Gestión de contenidos publica y actualiza información (noticias, comunicados, beneficios, actividades, fotos, documentos).",
  },
  {
    question: "¿Qué pasa si necesito cambios después?",
    answer:
      "Puedes contratar servicios recurrentes o cotizar mejoras puntuales. Cambios estructurales, nuevas secciones o integraciones extra se evalúan y cotizan aparte.",
  },
  {
    question: "¿Pueden facturar a empresa o institución?",
    answer:
      "Sí. Emitimos factura electrónica. Los valores son netos y se suma IVA según corresponda.",
  },
];

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
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

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-32">
          <p className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-slate-900/60 px-4 py-1 text-xs font-medium text-sky-200 mb-4">
            Next.js · Vercel · Cloudflare · GA4/GTM · Formularios · CRM
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Sitios web listos para operar, convertir y medir desde el día uno.
          </h1>

          <p className="mt-4 text-slate-200 text-base md:text-lg max-w-3xl mx-auto">
            Planes claros, servicios modulares y continuidad operativa. Construimos tu web con performance real y
            medición accionable (eventos y conversiones base), para que tu equipo decida con datos y no con suposiciones.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contacto#form"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm md:text-base"
            >
              Agendar una llamada sin costo
              <ArrowRight className="w-4 h-4" />
            </Link>

            <p className="text-xs md:text-sm text-slate-300 max-w-sm">
              En 20 minutos definimos el plan ideal, plazos y el monto final por escrito.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-[11px] text-slate-300">
            <span className="px-3 py-1 rounded-full bg-black/40 border border-slate-700/80">Entrega documentada</span>
            <span className="px-3 py-1 rounded-full bg-black/40 border border-slate-700/80">Propiedad y accesos claros</span>
            <span className="px-3 py-1 rounded-full bg-black/40 border border-slate-700/80">Escalable por etapas</span>
            <span className="px-3 py-1 rounded-full bg-black/40 border border-slate-700/80">Sin dependencia técnica</span>
          </div>
        </div>
      </section>

      {/* QUICK BENEFITS STRIP */}
      <section className="bg-slate-950/80 border-b border-slate-800" aria-label="Beneficios rápidos">
        <div className="section flex flex-col md:flex-row items-center justify-between gap-4 py-6 text-xs md:text-sm text-slate-200">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-sky-400" />
            <span>Plazos claros: desde 7 días hábiles según el plan.</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Checklist técnico + entrega documentada.</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-indigo-400" />
            <span>Infraestructura moderna y segura (Vercel + Cloudflare).</span>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <div className="section mt-16 space-y-20">
        {/* PILARES / SERVICIOS (mejora de “servicios”) */}
        <section aria-label="Qué incluye trabajar con Tronx Strategy">
          <header className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">Servicios (lo que realmente entregamos)</h2>
            <p className="mt-3 text-sm md:text-base text-slate-300">
              Diseñamos y construimos sitios que se mantienen, escalan y se miden. La clave es que tu web sea un activo
              operativo, no un “proyecto” que queda botado.
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

        {/* PLANES */}
        <section id="planes">
          <header className="max-w-3xl mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">Planes de desarrollo web</h2>
            <p className="mt-3 text-sm md:text-base text-slate-300">
              Elige el plan que mejor calce con tu etapa. Todos incluyen base moderna y entrega clara para operar sin
              dolores de cabeza.
            </p>
          </header>

          <div className="grid gap-6 lg:grid-cols-3">
            {planos.map((plan) => (
              <article
                key={plan.name}
                className={cx(
                  "card-surface p-6 flex flex-col h-full border",
                  plan.popular ? "border-sky-400/70 shadow-soft-glow shadow-sky-500/20" : "border-slate-700/70"
                )}
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between gap-2">
                    {plan.badge && (
                      <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold bg-slate-900/80 border border-sky-500/40 text-sky-200">
                        {plan.badge}
                      </span>
                    )}
                    {plan.popular && <span className="text-[11px] font-semibold text-sky-300">Más elegido</span>}
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

                <ul className="mt-3 space-y-2 text-sm text-slate-200 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 mt-[2px] text-sky-400 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {plan.delivery && (
                  <p className="mt-4 text-xs text-slate-300 border-t border-slate-800 pt-3">
                    <span className="font-semibold text-slate-100">Plazo:</span> {plan.delivery}
                  </p>
                )}

                {plan.note && <p className="mt-2 text-xs text-slate-400">{plan.note}</p>}

                <Link
                  href="/contacto#form"
                  className="btn-primary w-full text-center mt-6 inline-flex items-center justify-center gap-2"
                >
                  Quiero este plan
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <p className="mt-2 text-[11px] text-slate-400">
                  Valores referenciales. Definimos el monto final por escrito según alcance y tiempos.
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* PROCESS + TECH */}
        <section className="grid gap-10 lg:grid-cols-[1.1fr_minmax(0,1fr)] items-start" id="proceso">
          <div>
            <h2 className="text-2xl font-semibold text-slate-50">Cómo trabajamos</h2>
            <p className="mt-3 text-sm md:text-base text-slate-300 max-w-xl">
              Claridad desde el inicio: alcance, plazos, responsables y entregables. Esto evita retrabajos y mantiene el
              proyecto bajo control.
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
          </div>

          <div className="card-surface p-6 border border-slate-700/70">
            <h3 className="text-lg font-semibold text-slate-50">Tecnología (sin humo)</h3>
            <p className="mt-2 text-sm text-slate-300">
              Usamos arquitectura moderna por performance, seguridad y continuidad. Lo importante no es “la lista de
              herramientas”, sino que sea operable y sostenible.
            </p>

            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              {[
                { strong: "Next.js", text: "Sitios rápidos, seguros y escalables." },
                { strong: "Vercel", text: "Deploy automático, disponibilidad y performance global." },
                { strong: "Cloudflare", text: "DNS, CDN, seguridad y certificados SSL." },
                { strong: "GA4 + GTM", text: "Medición y eventos para saber qué funciona (y qué no)." },
                { strong: "Zoho / HubSpot", text: "Captura y gestión de leads cuando el proyecto lo requiere." },
              ].map((it) => (
                <li key={it.strong} className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-[2px] text-sky-400" />
                  <span>
                    <strong>{it.strong}</strong> — {it.text}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-4 text-xs text-slate-400">
              Toda la configuración técnica queda documentada. Así el proyecto no depende de una persona.
            </p>
          </div>
        </section>

        {/* EXTRAS + RECURRENT */}
        <section className="grid gap-10 lg:grid-cols-[1.4fr_minmax(0,1fr)] items-start" id="extras">
          {/* EXTRAS */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-50">Servicios adicionales</h2>
            <p className="mt-2 text-sm text-slate-300 max-w-2xl">
              Productos rápidos para campañas o mejoras puntuales sobre tu sitio actual (sea nuestro o de terceros).
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {extras.map((extra) => {
                const Icon = extra.icon ?? CheckCircle2;
                return (
                  <article key={extra.title} className="card-surface p-4 text-sm border border-slate-700/70">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 border border-slate-700">
                        <Icon className="w-4 h-4 text-sky-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-50">{extra.title}</h3>
                        <p className="mt-1 text-slate-300">{extra.description}</p>
                        <p className="mt-2 text-sky-400 font-medium">{extra.price}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* RECURRENTES */}
          <div className="card-surface p-5 border border-slate-700/70" id="recurrente">
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
              Podemos armar un plan mensual a medida según frecuencia de contenidos, campañas y necesidades del equipo.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-semibold text-slate-50">Preguntas frecuentes</h2>
          <p className="mt-2 text-sm text-slate-300 max-w-2xl">
            Respuestas directas para definir plan y alcance sin vueltas.
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
              Quiero una propuesta para mi organización
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-xs md:text-sm text-slate-400">
              Cuéntanos objetivo, público y tipo de sitio. Respondemos con siguiente paso y propuesta.
            </p>
          </div>

          <p className="mt-4 text-[11px] text-slate-500">
            Nota: cualquier requerimiento fuera del alcance acordado (nuevas secciones, integraciones extra, rediseños o
            cambios estructurales) se evalúa y se cotiza por separado.
          </p>
        </section>
      </div>
    </>
  );
}

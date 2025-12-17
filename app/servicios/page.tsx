"use client";

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
};

type Card = {
  title: string;
  description: string;
  price: string;
};

type Recurrent = {
  title: string;
  details: string;
  price: string;
  icon?: React.ElementType;
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
      "Entrega documentada (accesos y guía breve de uso)",
      "Entrega en 7 días hábiles desde aprobación del contenido",
    ],
    idealFor:
      "Consultores, profesionales independientes, negocios locales y servicios.",
    note:
      "No incluye blog/noticias administrables ni integración con CRM. Se puede agregar como extra.",
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
      "Integración GA4 + Google Tag Manager (eventos y conversiones base)",
      "Optimización SEO On-Page (títulos, descripciones, estructura, headings)",
      "Configuración de correos corporativos (ej: contacto@tudominio.cl)",
      "Integración con CRM (Zoho / HubSpot) para capturar leads desde la web",
      "Capacitación de administración (1 hora) + checklist de publicación",
      "Entrega documentada (propiedad, accesos, guía de operación)",
      "Entrega en 2 a 3 semanas según complejidad del contenido",
    ],
    idealFor:
      "Empresas de servicios, clínicas, colegios, estudios, cámaras, equipos comerciales.",
    note:
      "Incluye una estructura robusta para operar; nuevas secciones o integraciones avanzadas se cotizan aparte.",
  },
  {
    name: "Plan Premium — Todo incluido",
    price: "$990.000 – $1.500.000",
    badge: "Solución integral",
    description:
      "Para instituciones, cámaras, asociaciones y empresas con varias áreas. Una plataforma de comunicación y operación: secciones especiales, formularios por unidad y gobierno digital claro.",
    features: [
      "8 a 12 páginas + blog avanzado + secciones especiales (documentos, proyectos, directorio, áreas, etc.)",
      "Animaciones y micro-interacciones (UX) orientadas a claridad y confianza",
      "Producción básica de contenido (ajuste de textos + selección de imágenes de stock profesional)",
      "Integraciones avanzadas (CRM + formularios por área + flujos de campañas)",
      "Estructura de gobierno digital (propiedad, accesos, roles y continuidad)",
      "Manual Web Corporativo (PDF) + capacitación",
      "1 mes de soporte incluido (ajustes menores y acompañamiento técnico)",
      "Entrega en 3 a 4 semanas con calendario e hitos definidos",
    ],
    idealFor:
      "Instituciones públicas, cámaras, gremios y organizaciones con comunicación interna/externa.",
    note:
      "Ideal cuando hay múltiples stakeholders y necesidad de continuidad, medición y control.",
  },
];

const extras: Card[] = [
  {
    title: "Landing page 48 horas",
    description:
      "Página de alta conversión para campañas, lanzamientos o eventos, conectada a tu CRM o formulario.",
    price: "$120.000 – $180.000",
  },
  {
    title: "Optimización web (velocidad + SEO + UX)",
    description:
      "Mejoramos rendimiento, estructura y claridad del contenido para aumentar conversiones y comprensión.",
    price: "$80.000 – $200.000",
  },
  {
    title: "Rediseño express",
    description:
      "Renovamos el diseño sin cambiar la base de contenido: mejor experiencia, misma información.",
    price: "$250.000 – $400.000",
  },
  {
    title: "Migración a Vercel + Cloudflare",
    description:
      "Salida ordenada desde hosting tradicional o WordPress a infraestructura moderna con checklist técnico.",
    price: "$150.000 – $300.000",
  },
];

const recurrentes: Recurrent[] = [
  {
    title: "Hosting administrado (Vercel + Cloudflare)",
    details:
      "Infraestructura, SSL, CDN y configuración técnica. Incluye monitoreo y continuidad del despliegue.",
    price: "Desde $10.000 / mes",
    icon: Cloud,
  },
  {
    title: "Soporte y mantención",
    details:
      "Ajustes menores, correcciones, soporte técnico y acompañamiento. No incluye carga recurrente de contenidos.",
    price: "Desde $29.990 / mes",
    icon: Headphones,
  },
  {
    title: "Gestión de contenidos",
    details:
      "Publicación de noticias, comunicados o actualizaciones mensuales. Ideal para mantener el sitio vivo y vigente.",
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
      "Estructura del sitio, wireframe y diseño visual base para aprobar antes de construir.",
    icon: Server,
  },
  {
    title: "3. Desarrollo e integraciones",
    description:
      "Construcción en Next.js, despliegue en Vercel, configuración Cloudflare, GA4/GTM y CRM según plan.",
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
      "Incluimos la configuración (DNS, SSL y puesta en producción). El dominio y el servicio de hosting/infraestructura pueden contratarse con ustedes o con nosotros como “hosting administrado”.",
  },
  {
    question: "¿Tengo que entregar textos e imágenes?",
    answer:
      "Idealmente sí (para acelerar). Si tienes borradores, los mejoramos. En el Plan Premium incluimos producción básica de contenido (ajuste de textos + selección de imágenes de stock).",
  },
  {
    question: "¿Qué diferencia hay entre soporte y gestión de contenidos?",
    answer:
      "Soporte y mantención es para mantener el sitio estable (ajustes menores, correcciones, soporte técnico). Gestión de contenidos es para publicar y actualizar información (noticias, comunicados, cambios de contenido) de forma recurrente.",
  },
  {
    question: "¿Qué pasa si necesito cambios después?",
    answer:
      "Puedes contratar servicios recurrentes (hosting/soporte/contenidos) o cotizar mejoras puntuales. Cambios estructurales, nuevas secciones o integraciones adicionales se evalúan y cotizan aparte.",
  },
  {
    question: "¿Pueden facturar a empresa o institución?",
    answer:
      "Sí. Emitimos factura electrónica. Los valores son netos y se suma IVA según corresponda.",
  },
];

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

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-32">
          <p className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-slate-900/60 px-4 py-1 text-xs font-medium text-sky-200 mb-4">
            Infraestructura moderna · Next.js · Vercel · Cloudflare · Analítica · CRM
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Sitios web listos para operar, vender y medir desde el día uno.
          </h1>

          <p className="mt-4 text-slate-200 text-base md:text-lg">
            Planes claros, servicios modulares y continuidad operativa. Diseñamos y desarrollamos tu sitio con
            medición real (GA4/GTM) y opción de integración a CRM, para que tu equipo no dependa de “suposiciones”.
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
              En 20 minutos definimos el plan ideal, el plazo estimado y el valor final del proyecto.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-[11px] text-slate-300">
            <span className="px-3 py-1 rounded-full bg-black/40 border border-slate-700/80">Entrega documentada</span>
            <span className="px-3 py-1 rounded-full bg-black/40 border border-slate-700/80">Propiedad y accesos claros</span>
            <span className="px-3 py-1 rounded-full bg-black/40 border border-slate-700/80">Escalable por etapas</span>
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
            <span>SSL + analítica base incluidos en el proceso.</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span>Infraestructura moderna: Next.js · Vercel · Cloudflare.</span>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <div className="section mt-16 space-y-20">
        {/* PLANES */}
        <section id="planes">
          <header className="max-w-3xl mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">Planes de desarrollo web</h2>
            <p className="mt-3 text-sm md:text-base text-slate-300">
              Elige el plan que mejor calce con tu etapa. Todos incluyen una base moderna y una entrega clara, para que
              el sitio pueda mantenerse y crecer sin dolores de cabeza.
            </p>
          </header>

          <div className="grid gap-6 lg:grid-cols-3">
            {planos.map((plan) => (
              <article
                key={plan.name}
                className={`card-surface p-6 flex flex-col h-full border ${
                  plan.popular ? "border-sky-400/70 shadow-soft-glow shadow-sky-500/20" : "border-slate-700/70"
                }`}
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

                {plan.note && (
                  <p className="mt-4 text-xs text-slate-400 border-t border-slate-800 pt-3">{plan.note}</p>
                )}

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
              Usamos una arquitectura moderna por performance, seguridad y continuidad. Lo importante no es “la lista de
              herramientas”, sino que sea operable y sostenible.
            </p>

            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              {[
                {
                  strong: "Next.js",
                  text: "Framework principal para sitios rápidos, seguros y escalables.",
                },
                {
                  strong: "Vercel",
                  text: "Deploy automático, alta disponibilidad y performance global.",
                },
                {
                  strong: "Cloudflare",
                  text: "DNS, CDN, seguridad y certificados SSL.",
                },
                {
                  strong: "GA4 + GTM",
                  text: "Medición y eventos para saber qué funciona (y qué no).",
                },
                {
                  strong: "Zoho / HubSpot",
                  text: "Captura y gestión de leads cuando el proyecto lo requiere.",
                },
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
              {extras.map((extra) => (
                <article key={extra.title} className="card-surface p-4 text-sm border border-slate-700/70">
                  <h3 className="font-semibold text-slate-50">{extra.title}</h3>
                  <p className="mt-1 text-slate-300">{extra.description}</p>
                  <p className="mt-2 text-sky-400 font-medium">{extra.price}</p>
                </article>
              ))}
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
              Podemos armar un plan mensual “a medida” según frecuencia de noticias, campañas y necesidades del equipo.
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
              Cuéntanos tu objetivo y el tipo de sitio. Respondemos con siguiente paso y propuesta.
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

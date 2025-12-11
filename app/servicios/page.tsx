"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  BarChart3,
  Server,
  Workflow,
} from "lucide-react";

const planos = [
  {
    name: "Plan Básico — Presencia profesional",
    price: "$290.000",
    badge: "Ideal para empezar",
    description:
      "Para profesionales, emprendedores y negocios locales que necesitan una presencia clara, moderna y funcional sin enredarse con lo técnico.",
    features: [
      "Sitio de 1 a 3 secciones (Inicio, Servicios, Contacto)",
      "Diseño responsive moderno, adaptable a móvil, tablet y desktop",
      "Formulario de contacto + botón directo a WhatsApp",
      "SEO básico y tiempos de carga optimizados",
      "Configuración de dominio, DNS y SSL (candado de seguridad)",
      "Conexión básica a Google Analytics",
      "Entrega en 7 días hábiles desde aprobación del contenido",
    ],
    idealFor: "Consultores, profesionales independientes, pequeños negocios, servicios locales.",
  },
  {
    name: "Plan Medio — Sitio corporativo",
    price: "$590.000 – $690.000",
    badge: "Más elegido",
    description:
      "Para empresas y organizaciones que requieren un sitio completo, con páginas, contenidos, blog, medición y base lista para campañas digitales.",
    popular: true,
    features: [
      "5 a 7 páginas completas (Inicio, Empresa, Servicios, Equipo, Blog/Noticias, Contacto, etc.)",
      "Blog o sección de noticias administrable",
      "Integración con Google Analytics 4 + Google Tag Manager",
      "Optimización SEO On-Page (títulos, descripciones, headings, estructura)",
      "Configuración de correos corporativos (ej: contacto@tudominio.cl)",
      "Integración con CRM (Zoho / HubSpot) para capturar leads desde la web",
      "Capacitación de uso y administración del sitio (sesión online de 1 hora)",
      "Entrega en 2 a 3 semanas según complejidad del contenido",
    ],
    idealFor: "Empresas de servicios, clínicas, colegios, estudios, equipos comerciales que necesitan generar y medir contactos.",
  },
  {
    name: "Plan Premium — Todo incluido",
    price: "$990.000 – $1.500.000",
    badge: "Solución integral",
    description:
      "Para instituciones, cámaras, asociaciones y empresas grandes que necesitan una solución integrada, escalable y de alto estándar para comunicación y marketing.",
    features: [
      "8 a 12 páginas + blog avanzado y secciones especiales (documentos, proyectos, equipo ampliado, etc.)",
      "Animaciones, micro-interacciones y secciones interactivas orientadas a experiencia de usuario",
      "Producción básica de contenido (ajuste de textos + selección de imágenes de stock profesional)",
      "Integraciones avanzadas con CRM, flujos de campañas y formularios específicos por área",
      "Manual Web Corporativo en PDF (estructura, uso, lineamientos básicos)",
      "1 mes de soporte incluido (ajustes menores, dudas, acompañamiento técnico)",
      "Entrega en 3 a 4 semanas, con calendario y hitos definidos",
    ],
    idealFor: "Instituciones públicas, cámaras, gremios, empresas con varias áreas y necesidades de comunicación interna y externa.",
  },
];

const extras = [
  {
    title: "Landing page 48 horas",
    description:
      "Página de alta conversión para campañas, lanzamientos o eventos, lista en 2 días hábiles, conectada a tu CRM o formulario de contacto.",
    price: "$120.000 – $180.000",
  },
  {
    title: "Optimización web (velocidad + SEO + UX)",
    description:
      "Mejoramos rendimiento, estructura, tiempos de carga y contenido de tu sitio actual para que cargue rápido y se entienda mejor.",
    price: "$80.000 – $200.000",
  },
  {
    title: "Rediseño express",
    description:
      "Renovamos el diseño sin cambiar la base de contenido, manteniendo tu información pero con una experiencia moderna, en solo 1 semana.",
    price: "$250.000 – $400.000",
  },
  {
    title: "Migración a Vercel + Cloudflare",
    description:
      "Movemos tu sitio desde hosting tradicional o WordPress a infraestructura moderna (Next.js, Vercel y Cloudflare) con mejores tiempos de carga y seguridad.",
    price: "$150.000 – $300.000",
  },
];

const recurrentes = [
  {
    title: "Mantención web",
    details: "Actualizaciones de contenido, respaldos periódicos y pequeños cambios de texto o imágenes.",
    price: "Desde $29.990 mensual",
  },
  {
    title: "Hosting administrado",
    details: "Infraestructura Vercel + Cloudflare con monitoreo, SSL y configuración técnica incluida.",
    price: "Desde $10.000 mensual",
  },
  {
    title: "Soporte prioritario",
    details: "Atención con tiempos de respuesta definidos y canal directo para solicitudes.",
    price: "Desde $19.990 mensual",
  },
  {
    title: "Gestión de contenidos",
    details: "Publicación mensual de noticias, artículos de blog o actualizaciones relevantes para tu audiencia.",
    price: "Desde $80.000 mensual",
  },
];

const steps = [
  {
    title: "1. Llamada de alineación",
    description:
      "Entendemos tu negocio, objetivos y referentes. Definimos alcance, plazos y plan recomendado sin costo.",
    icon: Workflow,
  },
  {
    title: "2. Arquitectura y diseño",
    description:
      "Creamos la estructura del sitio, el wireframe y el diseño visual inicial para que apruebes antes de construir.",
    icon: Server,
  },
  {
    title: "3. Desarrollo e integraciones",
    description:
      "Programamos el sitio en Next.js, lo desplegamos en Vercel, configuramos Cloudflare, Analytics, Tag Manager y CRM.",
    icon: BarChart3,
  },
  {
    title: "4. Revisión, capacitación y publicación",
    description:
      "Revisamos contigo, ajustamos detalles, te capacitamos para administrar el contenido y publicamos tu sitio.",
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: "¿El precio incluye dominio y hosting?",
    answer:
      "La configuración de dominio y SSL está incluida en todos los planes. El dominio y el costo de hosting como servicio (Vercel/Cloudflare administrado) se pueden contratar con nosotros o directamente por tu cuenta; te ayudamos en ambos casos.",
  },
  {
    question: "¿Tengo que entregar todos los textos e imágenes?",
    answer:
      "Si ya tienes textos, los usamos y los mejoramos. En el Plan Premium incluimos producción básica de contenido (ajuste de textos y selección de imágenes de stock profesional), para que no partas desde cero.",
  },
  {
    question: "¿Pueden facturar a empresa?",
    answer:
      "Sí, trabajamos con factura electrónica para empresas, instituciones y personas naturales con giro. Los valores indicados son netos, y se suma IVA según corresponda.",
  },
  {
    question: "¿Qué necesito para comenzar?",
    answer:
      "Solo necesitamos una breve reunión, tu logo, información de tu negocio y, si existe, tu material actual (sitio anterior, brochure, presentaciones). El resto lo guiamos nosotros paso a paso.",
  },
  {
    question: "¿Qué pasa después de publicar el sitio?",
    answer:
      "Puedes contratar nuestros planes de mantención, hosting administrado y soporte prioritario. También podemos acompañarte en campañas puntuales con landings rápidas y mejoras continuas.",
  },
];

export default function ServiciosPage() {
  return (
    <>
      {/* 🔹 HERO FULL SCREEN */}
      <section
        className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: "url('/BG_servicios_strategy.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-32">
          <p className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-slate-900/60 px-4 py-1 text-xs font-medium text-sky-200 mb-4">
            Infraestructura moderna · Next.js · Vercel · Cloudflare · CRM
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Sitios web modernos, listos para vender y medir desde el día uno.
          </h1>
          <p className="mt-4 text-slate-200 text-base md:text-lg">
            Planes claros, servicios modulares y operación continua. Diseñamos, desarrollamos e integramos tu sitio con
            Analytics, CRM y correo corporativo para que no tengas que preocuparte de lo técnico.
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
              En 20 minutos definimos el plan ideal para tu empresa, el plazo estimado y el valor cerrado del proyecto.
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 BARRA DE BENEFICIOS RÁPIDOS */}
      <section className="bg-slate-950/80 border-b border-slate-800">
        <div className="section flex flex-col md:flex-row items-center justify-between gap-4 py-6 text-xs md:text-sm text-slate-200">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-sky-400" />
            <span>Plazos claros: desde 7 días hábiles según el plan.</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Dominio, SSL, Analytics y CRM integrados por nosotros.</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span>Infraestructura moderna: Next.js, Vercel y Cloudflare.</span>
          </div>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <div className="section mt-16 space-y-20">
        {/* 🔹 PLANES */}
        <section>
          <header className="max-w-3xl mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">Planes de desarrollo web</h2>
            <p className="mt-3 text-sm md:text-base text-slate-300">
              Elige el plan que mejor se ajuste a tu contexto actual. Todos incluyen tecnología moderna, configuración
              técnica completa y acompañamiento para publicar sin dolores de cabeza.
            </p>
          </header>

          <div className="grid gap-6 lg:grid-cols-3">
            {planos.map((plan) => (
              <article
                key={plan.name}
                className={`card-surface p-6 flex flex-col h-full border ${
                  plan.popular
                    ? "border-sky-400/70 shadow-soft-glow shadow-sky-500/20"
                    : "border-slate-700/70"
                }`}
              >
                <div className="mb-4">
                  <div className="flex items-center justify-between gap-2">
                    {plan.badge && (
                      <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold bg-slate-900/80 border border-sky-500/40 text-sky-200">
                        {plan.badge}
                      </span>
                    )}
                    {plan.popular && (
                      <span className="text-[11px] font-semibold text-sky-300">
                        Más elegido
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

                <ul className="mt-3 space-y-2 text-sm text-slate-200 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 mt-[2px] text-sky-400 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contacto#form"
                  className="btn-primary w-full text-center mt-6 inline-flex items-center justify-center gap-2"
                >
                  Quiero este plan
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="mt-2 text-[11px] text-slate-400">
                  Valores referenciales. Definimos el monto final en una llamada breve según tu caso.
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* 🔹 CÓMO TRABAJAMOS */}
        <section className="grid gap-10 lg:grid-cols-[1.1fr_minmax(0,1fr)] items-start">
          <div>
            <h2 className="text-2xl font-semibold text-slate-50">Cómo trabajamos</h2>
            <p className="mt-3 text-sm md:text-base text-slate-300 max-w-xl">
              Nuestro proceso está diseñado para que tengas claridad desde el inicio: qué haremos, qué necesitas
              preparar y en qué fecha tendrás tu sitio publicado y funcionando.
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
            <h3 className="text-lg font-semibold text-slate-50">Tecnología que usamos</h3>
            <p className="mt-2 text-sm text-slate-300">
              Trabajamos con una arquitectura moderna, similar a la que usan startups y empresas tecnológicas globales.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 mt-[2px] text-sky-400" />
                <span>
                  <strong>Next.js</strong> como framework principal para sitios rápidos, seguros y fáciles de escalar.
                </span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 mt-[2px] text-sky-400" />
                <span>
                  <strong>Vercel</strong> para deploy automático, alta disponibilidad y performance global.
                </span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 mt-[2px] text-sky-400" />
                <span>
                  <strong>Cloudflare</strong> para DNS, CDN, seguridad y certificados SSL.
                </span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 mt-[2px] text-sky-400" />
                <span>
                  <strong>Zoho / HubSpot + Google Analytics 4</strong> para medición de tráfico y seguimiento de leads
                  en un solo lugar.
                </span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-slate-400">
              Toda la configuración técnica está incluida en los planes, para que no tengas que hablar con tu hosting ni
              “tocar DNS” por tu cuenta.
            </p>
          </div>
        </section>

        {/* 🔹 SERVICIOS ADICIONALES + RECURRENTES */}
        <section className="grid gap-10 lg:grid-cols-[1.4fr_minmax(0,1fr)] items-start">
          {/* EXTRAS */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-50">Servicios adicionales</h2>
            <p className="mt-2 text-sm text-slate-300 max-w-2xl">
              Productos rápidos y de alto impacto para campañas, lanzamientos o mejoras puntuales sobre tu sitio actual
              o uno desarrollado por nosotros.
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
          <div className="card-surface p-5 border border-slate-700/70">
            <h2 className="text-lg font-semibold text-slate-50">Servicios recurrentes</h2>
            <p className="mt-2 text-sm text-slate-300">
              Mantén tu sitio seguro, actualizado y alineado a tus campañas sin tener que preocuparte por la parte
              técnica.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              {recurrentes.map((srv) => (
                <li key={srv.title}>
                  <p className="font-semibold text-slate-50">{srv.title}</p>
                  <p className="text-slate-300">{srv.details}</p>
                  <p className="text-sky-400 text-xs mt-1">{srv.price}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[11px] text-slate-400">
              Podemos diseñar un plan mensual a la medida según la frecuencia de tus campañas, noticias o actualizaciones.
            </p>
          </div>
        </section>

        {/* 🔹 PREGUNTAS FRECUENTES */}
        <section>
          <h2 className="text-2xl font-semibold text-slate-50">Preguntas frecuentes</h2>
          <p className="mt-2 text-sm text-slate-300 max-w-2xl">
            Respondemos lo que normalmente nos preguntan antes de contratar. Si ya tienes claro tu plan, puedes saltar
            directo al formulario.
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
              Quiero una propuesta para mi empresa
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-xs md:text-sm text-slate-400">
              Cuéntanos brevemente de tu proyecto y en menos de 24 horas hábiles te respondemos con el siguiente paso.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

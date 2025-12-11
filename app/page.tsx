// app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

// ------------------------------
//        METADATA SEO
// ------------------------------
export const metadata: Metadata = {
  title: "Tronx Strategy — Sitios web corporativos modernos en Next.js",
  description:
    "Desarrollamos sitios web de nivel empresarial: rápidos, seguros y preparados para captar más leads. Infraestructura GitHub + Vercel + Cloudflare integrada con CRM y analítica.",
  alternates: {
    canonical: "https://www.tronxstrategy.com/",
  },
  openGraph: {
    title:
      "Tronx Strategy — Sitios web modernos, rápidos y orientados a resultados",
    description:
      "Sitios web corporativos en Next.js para empresas, cámaras e instituciones. Infraestructura GitHub + Vercel + Cloudflare conectada a CRM.",
    url: "https://www.tronxstrategy.com/",
    type: "website",
    siteName: "Tronx Strategy",
    locale: "es_CL",
    images: [
      {
        url: "/og_tronxstrategy.jpg",
        width: 1200,
        height: 630,
        alt: "Tronx Strategy — Estudio web de Tronx Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tronx Strategy — Sitios web corporativos modernos",
    description:
      "Desarrollo web en Next.js con infraestructura cloud, SEO base y conexión a CRM para empresas, instituciones y cámaras.",
    images: ["/og_tronxstrategy.jpg"],
  },
};

// ------------------------------
//          PAGE COMPONENT
// ------------------------------
export default function HomePage() {
  return (
    <>
      {/* HERO FULL SCREEN */}
      <section
        className="relative overflow-hidden min-h-screen flex items-center w-full"
        style={{
          backgroundImage: "url('/BG_hero_strategy.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]" />

        <div className="relative w-full max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] gap-10 items-center px-4 lg:px-8 py-24">
          {/* Columna izquierda */}
          <div>
            <p className="text-xs font-semibold tracking-[0.26em] uppercase text-sky-300/90">
              WebOps · Sitios Web · Infraestructura Cloud
            </p>

            <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Sitios web modernos, rápidos y listos para vender.
            </h1>

            <p className="mt-4 text-base md:text-lg text-slate-200 max-w-xl">
              Desarrollamos sitios de nivel empresarial con Next.js, Vercel y
              Cloudflare, conectados a tu CRM y analítica. Menos problemas
              técnicos, más leads y mejor información para decidir.
            </p>

            <div className="mt-6 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-xs md:text-sm text-slate-200 max-w-xl">
              <p className="font-medium text-slate-100">
                ¿Qué resuelve Tronx Strategy?
              </p>
              <p className="mt-1">
                Un sitio lento, difícil de actualizar o sin medición real de
                resultados. Te entregamos una web moderna, clara y con todo lo
                técnico resuelto desde el día uno.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contacto#form"
                className="btn-primary px-6 py-3 text-sm md:text-base"
              >
                Agenda una llamada sin costo
              </Link>
              <Link
                href="/servicios"
                className="btn-ghost bg-white/10 backdrop-blur hover:bg-white/20 px-6 py-3 text-sm md:text-base"
              >
                Ver planes y precios
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs md:text-sm text-slate-300">
              <div>
                <p className="text-white text-base md:text-lg font-semibold">
                  2–4 semanas
                </p>
                <p>Tiempo típico de entrega por sitio.</p>
              </div>
              <div>
                <p className="text-white text-base md:text-lg font-semibold">
                  Infraestructura
                </p>
                <p>Next.js · Vercel · Cloudflare.</p>
              </div>
              <div>
                <p className="text-white text-base md:text-lg font-semibold">
                  + Leads
                </p>
                <p>Formularios conectados a CRM.</p>
              </div>
              <div>
                <p className="text-white text-base md:text-lg font-semibold">
                  100% cloud
                </p>
                <p>Operación remota, liviana y escalable.</p>
              </div>
            </div>

            {/* Barra tecnológica */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-[11px] text-slate-300">
              <span className="px-3 py-1 rounded-full bg-black/40 border border-slate-700/80">
                Next.js · React
              </span>
              <span className="px-3 py-1 rounded-full bg-black/40 border border-slate-700/80">
                GitHub · Vercel · Cloudflare
              </span>
              <span className="px-3 py-1 rounded-full bg-black/40 border border-slate-700/80">
                Zoho · HubSpot · GA4
              </span>
            </div>
          </div>

          {/* Tarjeta derecha */}
          <div className="relative">
            <div className="card-surface p-6 md:p-8 shadow-2xl bg-black/60 backdrop-blur rounded-xl border border-white/10">
              <p className="text-sm font-semibold tracking-[0.22em] text-sky-300 uppercase">
                Planes Tronx Strategy
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                Sitios web con precios claros. Sin sorpresas.
              </h2>
              <p className="mt-3 text-sm text-slate-200">
                Tres niveles para adaptarse a tu contexto actual: presencia
                profesional, sitio corporativo completo o solución premium con
                CRM y WebOps.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-100">
                <li>• Plan Básico — Presencia profesional.</li>
                <li>• Plan Medio — Sitio corporativo completo.</li>
                <li>• Plan Premium — Sitio + CRM + WebOps.</li>
              </ul>
              <p className="mt-4 text-xs text-slate-400">
                Todos los planes incluyen diseño, desarrollo, SEO base,
                configuración de dominio y SSL. Entrega documentada y lista para
                seguir creciendo por etapas.
              </p>
              <div className="mt-5">
                <Link
                  href="/servicios#planes"
                  className="btn-primary w-full text-center"
                >
                  Ver lista de precios →
                </Link>
              </div>
              <p className="mt-3 text-[11px] text-slate-400">
                Facturamos a empresas, instituciones y personas con giro. Valores
                netos + IVA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BARRA DIFERENCIADORES */}
      <section className="bg-slate-950 border-y border-slate-800">
        <div className="section py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-slate-200">
          <div className="flex-1">
            <p className="font-semibold text-slate-50">
              No solo diseñamos sitios, diseñamos operación digital.
            </p>
            <p className="text-slate-300">
              Web + CRM + analítica, todo conectado para que tu equipo comercial
              reciba leads listos para gestionar.
            </p>
          </div>
          <div className="flex-1 grid md:grid-cols-2 gap-2 text-slate-300">
            <p>✔ Formularios conectados a Zoho / HubSpot.</p>
            <p>✔ Medición con GA4 + Google Tag Manager.</p>
            <p>✔ Sitios listos para campañas en Google Ads.</p>
            <p>✔ Infraestructura moderna sin servidores que administrar.</p>
          </div>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <div className="section">
        {/* QUÉ PODEMOS CONSTRUIR */}
        <section className="mt-16">
          <p className="section-title">Qué podemos construir</p>
          <h2 className="section-heading">
            Desde una landing en 48 horas hasta un portal institucional completo.
          </h2>
          <p className="section-subtitle">
            Tronx Strategy integra diseño, contenido y tecnología para entregar
            sitios modernos, medibles y preparados para crecer por capas, no por
            peso. Empezamos simple, pero con una base sólida.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              {
                title: "Sitios corporativos",
                body: "Páginas completas para empresas, gremios, estudios y organizaciones que necesitan presencia sólida y confiable.",
              },
              {
                title: "Landing pages y campañas",
                body: "Páginas de alta conversión para lanzamientos, cursos, eventos o productos específicos, listas para medir resultados.",
              },
              {
                title: "Portales y directorios",
                body: "Arquitecturas escalables para cámaras, instituciones y proyectos territoriales con múltiples secciones y actores.",
              },
              {
                title: "Sitios con CRM integrado",
                body: "Formularios conectados a Zoho, HubSpot u otros CRM, con flujos internos, segmentación y reporting ejecutivo.",
              },
            ].map((card) => (
              <div key={card.title} className="card-surface p-6">
                <h3 className="text-lg font-semibold text-slate-50">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300">{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* POR QUÉ TRONX STRATEGY */}
        <section className="mt-24 grid gap-10 lg:grid-cols-[1.1fr_minmax(0,1fr)] items-start">
          <div>
            <p className="section-title">Por qué Tronx Strategy</p>
            <h2 className="section-heading">
              Web moderna, pero aterrizada a tu realidad comercial.
            </h2>
            <p className="section-subtitle">
              No vendemos “páginas bonitas” desconectadas del negocio. Diseñamos
              sitios que tu equipo puede usar para vender, informar y tomar
              decisiones con datos.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 text-sm text-slate-200">
              <div className="card-surface p-4">
                <h3 className="font-semibold text-slate-50">
                  Web lista para campañas
                </h3>
                <p className="mt-2 text-slate-300">
                  Sitios estructurados para funcionar con Google Ads, redes
                  sociales y newsletters sin rehacer todo cada vez que lances una
                  campaña.
                </p>
              </div>
              <div className="card-surface p-4">
                <h3 className="font-semibold text-slate-50">
                  Menos soporte, más claridad
                </h3>
                <p className="mt-2 text-slate-300">
                  Manual básico de uso, capacitación y estructura clara para que
                  no dependas de soporte para cambios simples.
                </p>
              </div>
              <div className="card-surface p-4">
                <h3 className="font-semibold text-slate-50">
                  Infraestructura de largo plazo
                </h3>
                <p className="mt-2 text-slate-300">
                  Nada de hosting lento o paneles llenos de cosas que no usas.
                  Next.js, Vercel y Cloudflare son estándar moderno de la
                  industria.
                </p>
              </div>
              <div className="card-surface p-4">
                <h3 className="font-semibold text-slate-50">
                  Acompañamiento real
                </h3>
                <p className="mt-2 text-slate-300">
                  Desde la definición del alcance hasta la publicación. Y si
                  quieres, seguimos con mantención, soporte y mejoras continuas.
                </p>
              </div>
            </div>
          </div>

          {/* Bloque resumen simple */}
          <div className="card-surface p-6 border border-slate-800 text-sm text-slate-200">
            <h3 className="text-lg font-semibold text-slate-50">
              ¿Qué incluye un proyecto típico?
            </h3>
            <ul className="mt-3 space-y-2">
              <li>• Llamada inicial de alineación (20–30 minutos).</li>
              <li>• Propuesta de estructura y diseño base.</li>
              <li>• Desarrollo en Next.js y configuración técnica completa.</li>
              <li>• Integración con Analytics, Tag Manager y CRM.</li>
              <li>• Revisión conjunta, ajustes y publicación.</li>
              <li>• Capacitación breve para tu equipo antes de entregar.</li>
            </ul>
            <p className="mt-4 text-xs text-slate-400">
              Definimos plazos y monto final por escrito antes de comenzar, para
              evitar sorpresas en el camino.
            </p>
          </div>
        </section>

        {/* LOGOS CLIENTES */}
        <section className="mt-24">
          <p className="section-title">Clientes y proyectos</p>
          <h2 className="section-heading">
            Confían en el ecosistema Tronx Group.
          </h2>
          <p className="section-subtitle">
            Experiencia con bancos, cámaras, asociaciones, colegios y marcas
            personales ejecutivas. Proyectos que combinan desarrollo web moderno,
            infraestructura cloud y contenido claro.
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center opacity-80">
            <Image
              src="/logos/bice.png"
              alt="Banco BICE"
              width={120}
              height={50}
              className="object-contain opacity-90"
            />
            <Image
              src="/logos/apcc.png"
              alt="Cámara de Comercio Asia Pacífico"
              width={120}
              height={50}
              className="object-contain opacity-90"
            />
            <Image
              src="/logos/exploflex.png"
              alt="Exhibidores Exploflex"
              width={120}
              height={50}
              className="object-contain opacity-90"
            />
            <Image
              src="/logos/citylube.png"
              alt="CityLube"
              width={120}
              height={50}
              className="object-contain opacity-90"
            />
          </div>

          <p className="mt-6 text-center text-xs text-slate-400 max-w-2xl mx-auto">
            Cada proyecto ajusta tono, estructura y nivel de detalle a su público
            específico: directorios, clientes, proveedores o comunidad interna.
          </p>
        </section>
      </div>

      {/* CTA FINAL */}
      <section
        className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center text-center mt-24"
        style={{
          backgroundImage: "url('/BG_CTA_strategy.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 md:bg-black/45 backdrop-blur-[1px]" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
            ¿Listo para modernizar tu sitio web?
          </h2>

          <p className="mt-4 text-slate-200 text-base md:text-lg">
            En una primera llamada revisamos tu situación actual, vemos si
            calzamos con lo que necesitas y te proponemos el plan más eficiente.
            Sin compromiso y con plazos claros desde el inicio.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contacto#form"
              className="btn-primary text-base px-6 py-3"
            >
              Agenda una llamada
            </Link>

            <Link
              href="/servicios"
              className="btn-ghost bg-white/10 backdrop-blur hover:bg-white/20 text-base px-6 py-3"
            >
              Ver planes y servicios
            </Link>
          </div>

          <p className="mt-6 text-xs text-slate-300">
            También puedes escribir a{" "}
            <a
              href="mailto:info@tronxstrategy.com"
              className="text-sky-300 hover:text-sky-200"
            >
              info@tronxstrategy.com
            </a>{" "}
            o enviar un WhatsApp al{" "}
            <span className="text-sky-200 font-medium">+56 9 2008 0031</span>.
          </p>
        </div>
      </section>
    </>
  );
}

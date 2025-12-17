// app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tronxstrategy.com"),
  title: "Tronx Strategy — WebOps y sitios modernos en Next.js",
  description:
    "Construimos sitios web corporativos e institucionales con infraestructura moderna (Next.js + Vercel + Cloudflare), analítica y CRM. Menos fricción técnica, más claridad y continuidad.",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  keywords: [
    "desarrollo web",
    "sitios web institucionales",
    "sitios corporativos",
    "Next.js",
    "Vercel",
    "Cloudflare",
    "WebOps",
    "GA4",
    "Zoho CRM",
    "HubSpot",
    "Chile",
  ],
  authors: [{ name: "Tronx Strategy" }],
  openGraph: {
    title: "Tronx Strategy — Web moderna, medible y gobernada",
    description:
      "Sitios web rápidos y seguros en Next.js para empresas, cámaras e instituciones. Infraestructura cloud, analítica y CRM conectados con continuidad operativa.",
    url: "/",
    type: "website",
    siteName: "Tronx Strategy",
    locale: "es_CL",
    images: [
      {
        url: "/og_tronxstrategy.jpg",
        width: 1200,
        height: 630,
        alt: "Tronx Strategy — WebOps y desarrollo web moderno",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tronx Strategy — WebOps y sitios modernos",
    description: "Next.js + Vercel + Cloudflare + GA4 + CRM. Sitios listos para operar, medir y crecer.",
    images: ["/og_tronxstrategy.jpg"],
  },
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden min-h-screen flex items-center w-full"
        style={{
          backgroundImage: "url('/BG_hero_strategy.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-label="Hero Tronx Strategy"
      >
        <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]" />

        <div className="relative w-full max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] gap-10 items-center px-4 lg:px-8 py-24">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold tracking-[0.26em] uppercase text-sky-300/90">
              WebOps · Sitios Web · Infraestructura Cloud
            </p>

            <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Web moderna, medible y <span className="text-sky-300">lista para operar</span>.
            </h1>

            <p className="mt-4 text-base md:text-lg text-slate-200 max-w-xl">
              Construimos sitios de estándar empresarial con{" "}
              <span className="text-white font-medium">Next.js</span>,{" "}
              <span className="text-white font-medium">Vercel</span> y{" "}
              <span className="text-white font-medium">Cloudflare</span>, conectados
              a analítica y CRM cuando el proyecto lo requiere. Menos fricción técnica,
              más claridad para vender, informar y decidir con datos.
            </p>

            {/* Value box */}
            <div className="mt-6 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-xs md:text-sm text-slate-200 max-w-xl">
              <p className="font-medium text-slate-100">Lo que realmente entregamos</p>
              <p className="mt-1">
                No es “una página”. Es una <span className="text-white">plataforma gobernada</span>: estructura,
                propiedad y accesos claros, continuidad operativa, medición consistente y soporte opcional para
                que el sitio funcione en el mundo real.
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contacto#form" className="btn-primary px-6 py-3 text-sm md:text-base">
                Agenda una llamada sin costo
              </Link>
              <Link
                href="/servicios#planes"
                className="btn-ghost bg-white/10 backdrop-blur hover:bg-white/20 px-6 py-3 text-sm md:text-base"
              >
                Ver planes y precios
              </Link>
              {/* Si tienes página de casos, deja esto. Si no, bórralo. */}
              <Link
                href="/proyectos"
                className="btn-ghost bg-white/5 backdrop-blur hover:bg-white/15 px-6 py-3 text-sm md:text-base"
              >
                Ver proyectos
              </Link>
            </div>

            {/* Trust notes */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-[11px] text-slate-300">
              <span className="px-3 py-1 rounded-full bg-black/40 border border-slate-700/80">
                Entrega documentada
              </span>
              <span className="px-3 py-1 rounded-full bg-black/40 border border-slate-700/80">
                Propiedad y accesos claros
              </span>
              <span className="px-3 py-1 rounded-full bg-black/40 border border-slate-700/80">
                Escalable por etapas
              </span>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs md:text-sm text-slate-300">
              <div>
                <p className="text-white text-base md:text-lg font-semibold">2–4 semanas</p>
                <p>Tiempo típico de entrega.</p>
              </div>
              <div>
                <p className="text-white text-base md:text-lg font-semibold">Infraestructura</p>
                <p>Next.js · Vercel · Cloudflare.</p>
              </div>
              <div>
                <p className="text-white text-base md:text-lg font-semibold">CRM opcional</p>
                <p>Zoho / HubSpot según operación.</p>
              </div>
              <div>
                <p className="text-white text-base md:text-lg font-semibold">Medición real</p>
                <p>GA4 + Tag Manager configurados.</p>
              </div>
            </div>

            {/* Tech pills */}
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

          {/* Right card */}
          <div className="relative">
            <div className="card-surface p-6 md:p-8 shadow-2xl bg-black/60 backdrop-blur rounded-xl border border-white/10">
              <p className="text-sm font-semibold tracking-[0.22em] text-sky-300 uppercase">
                Planes Tronx Strategy
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-white">
                Precios claros. Alcance definido. Sin sorpresas.
              </h2>

              <p className="mt-3 text-sm text-slate-200">
                Tres niveles para adaptarse a tu contexto: presencia profesional, sitio corporativo completo
                o solución premium con WebOps e integraciones avanzadas.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-slate-100">
                <li>• Plan Básico — Presencia profesional.</li>
                <li>• Plan Medio — Sitio corporativo + noticias administrables.</li>
                <li>• Plan Premium — Sitio + CRM + flujos y automatización.</li>
              </ul>

              <p className="mt-4 text-xs text-slate-400">
                Incluye diseño, desarrollo, SEO base, SSL y medición. Requerimientos fuera de alcance
                (nuevas secciones, integraciones extra, cambios estructurales) se cotizan por separado.
              </p>

              <div className="mt-5">
                <Link href="/servicios#planes" className="btn-primary w-full text-center">
                  Ver lista de precios →
                </Link>
              </div>

              <p className="mt-3 text-[11px] text-slate-400">
                Facturamos a empresas, instituciones y personas con giro. Valores netos + IVA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS STRIP */}
      <section className="bg-slate-950 border-y border-slate-800" id="diferenciadores">
        <div className="section py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-slate-200">
          <div className="flex-1">
            <p className="font-semibold text-slate-50">No vendemos “páginas bonitas”. Diseñamos operación digital.</p>
            <p className="text-slate-300">
              Web + CRM + analítica conectados para que el equipo reciba leads, gestione y mida resultados con continuidad.
            </p>
          </div>
          <div className="flex-1 grid md:grid-cols-2 gap-2 text-slate-300">
            <p>✔ Formularios conectados a Zoho / HubSpot.</p>
            <p>✔ Medición con GA4 + Google Tag Manager.</p>
            <p>✔ Sitios listos para campañas y SEO base.</p>
            <p>✔ Infraestructura moderna sin servidores que administrar.</p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="section">
        {/* WHAT WE BUILD */}
        <section className="mt-16" id="que-construimos">
          <p className="section-title">Qué podemos construir</p>
          <h2 className="section-heading">Desde una landing rápida hasta un portal institucional completo.</h2>
          <p className="section-subtitle">
            Trabajamos por capas: partimos con una base sólida (infraestructura + medición) y escalamos con secciones,
            contenidos, automatizaciones y reporting.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { title: "Sitios corporativos", body: "Páginas claras y confiables para empresas, estudios, gremios y organizaciones." },
              { title: "Landing pages y campañas", body: "Páginas de alta conversión para lanzamientos, eventos o productos, listas para medir." },
              { title: "Portales y directorios", body: "Arquitecturas escalables para cámaras, instituciones y proyectos con múltiples actores." },
              { title: "Web + CRM", body: "Captura de leads con flujos, segmentación y reportes para el equipo comercial." },
            ].map((card) => (
              <div key={card.title} className="card-surface p-6">
                <h3 className="text-lg font-semibold text-slate-50">{card.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GOVERNANCE */}
        <section className="mt-24 grid gap-10 lg:grid-cols-[1.05fr_minmax(0,1fr)] items-start" id="gobierno-digital">
          <div>
            <p className="section-title">Gobierno digital</p>
            <h2 className="section-heading">La IA acelera. Tronx asegura continuidad.</h2>
            <p className="section-subtitle">
              Generar código es fácil. Lo difícil es operar con propiedad, accesos correctos, medición consistente y mantenimiento sostenible.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 text-sm text-slate-200">
              {[
                { title: "Propiedad y accesos", body: "Roles, usuarios y llaves claros. Sin dependencia de una persona." },
                { title: "Operación y continuidad", body: "Documentación, checklist y soporte opcional para sostener el sitio." },
                { title: "Infraestructura moderna", body: "Performance y seguridad con Vercel + Cloudflare, sin hosting lento." },
                { title: "Medición y decisiones", body: "GA4 + GTM + conversiones. Menos opiniones, más datos para mejorar." },
              ].map((item) => (
                <div key={item.title} className="card-surface p-4">
                  <h3 className="font-semibold text-slate-50">{item.title}</h3>
                  <p className="mt-2 text-slate-300">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="card-surface p-6 border border-slate-800 text-sm text-slate-200">
            <h3 className="text-lg font-semibold text-slate-50">Entregables típicos</h3>
            <ul className="mt-3 space-y-2">
              <li>• Alcance por escrito + calendario de hitos.</li>
              <li>• Arquitectura y estructura aprobadas antes de construir.</li>
              <li>• Integración de formularios, analítica y eventos clave.</li>
              <li>• Publicación + checklist técnico (DNS/SSL/performance).</li>
              <li>• Entrega documentada + capacitación breve.</li>
            </ul>
            <p className="mt-4 text-xs text-slate-400">
              Fuera de alcance: nuevas secciones, integraciones extra, rediseños o cambios estructurales → cotización aparte.
            </p>
          </aside>
        </section>

        {/* PROCESS */}
        <section className="mt-24" id="proceso">
          <p className="section-title">Cómo trabajamos</p>
          <h2 className="section-heading">Proceso simple, con control y claridad.</h2>
          <p className="section-subtitle">
            Diseñado para que dirección, comunicaciones y TI puedan participar sin fricción.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { step: "01", title: "Alineación", body: "Objetivos, público, alcance y plazo. Cerramos plan y monto antes de construir." },
              { step: "02", title: "Arquitectura", body: "Mapa del sitio, estructura y diseño base. Aprobación temprana." },
              { step: "03", title: "Construcción", body: "Desarrollo + integraciones (GA4/GTM/CRM) + performance + seguridad." },
              { step: "04", title: "Entrega", body: "Revisión, ajustes menores, publicación, documentación y capacitación." },
            ].map((p) => (
              <div key={p.step} className="card-surface p-6">
                <p className="text-xs tracking-[0.25em] text-sky-300 font-semibold">{p.step}</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-50">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* QUICK PRODUCTS */}
        <section className="mt-24" id="productos-rapidos">
          <p className="section-title">Productos rápidos</p>
          <h2 className="section-heading">Impacto alto, sin proyecto eterno.</h2>
          <p className="section-subtitle">
            Ideal para campañas, lanzamientos o mejoras puntuales sobre tu sitio actual.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Landing 48 horas",
                body: "Página de alta conversión para campañas, eventos o lanzamientos, conectada a tu CRM.",
                cta: { label: "Cotizar landing", href: "/contacto#form" },
              },
              {
                title: "Optimización (velocidad + SEO + UX)",
                body: "Mejoramos estructura, tiempos de carga y claridad del contenido para aumentar conversiones.",
                cta: { label: "Evaluar mi sitio", href: "/contacto#form" },
              },
              {
                title: "Migración a Vercel + Cloudflare",
                body: "Salida ordenada desde hosting tradicional a infraestructura moderna, con checklist técnico.",
                cta: { label: "Verificar factibilidad", href: "/contacto#form" },
              },
            ].map((s) => (
              <div key={s.title} className="card-surface p-6">
                <h3 className="text-lg font-semibold text-slate-50">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{s.body}</p>
                <div className="mt-4">
                  <Link href={s.cta.href} className="btn-ghost bg-white/10 hover:bg-white/20 px-4 py-2 text-sm">
                    {s.cta.label} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CLIENT LOGOS */}
        <section className="mt-24" id="clientes">
          <p className="section-title">Clientes y proyectos</p>
          <h2 className="section-heading">Confían en el ecosistema Tronx Group.</h2>
          <p className="section-subtitle">
            Experiencia con bancos, cámaras, asociaciones y marcas. Proyectos que combinan desarrollo web moderno,
            infraestructura cloud y contenido claro.
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center opacity-80">
            <Image src="/logos/bice.png" alt="Banco BICE" width={120} height={50} className="object-contain opacity-90" />
            <Image src="/logos/apcc.png" alt="Cámara de Comercio Asia Pacífico" width={120} height={50} className="object-contain opacity-90" />
            <Image src="/logos/exploflex.png" alt="Exhibidores Exploflex" width={120} height={50} className="object-contain opacity-90" />
            <Image src="/logos/citylube.png" alt="CityLube" width={120} height={50} className="object-contain opacity-90" />
          </div>

          <p className="mt-6 text-center text-xs text-slate-400 max-w-2xl mx-auto">
            Ajustamos tono, estructura y nivel de detalle según el público: directorio, clientes, proveedores o comunidad interna.
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-24" id="faq">
          <p className="section-title">Preguntas frecuentes</p>
          <h2 className="section-heading">Lo que normalmente preguntan antes de contratar.</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                q: "¿La IA no hace esto más barato?",
                a: "La IA puede acelerar tareas, pero no reemplaza el gobierno digital: propiedad, accesos, continuidad, medición y responsabilidad. Tronx usa IA donde aporta valor, con criterio y control.",
              },
              {
                q: "¿Incluye dominio y hosting?",
                a: "Incluimos configuración (DNS, SSL, analítica). Dominio y servicios (Vercel/Cloudflare) pueden contratarse con ustedes o con nosotros como servicio administrado.",
              },
              {
                q: "¿Qué pasa si necesito cambios después?",
                a: "Podemos operar con planes mensuales (soporte / contenidos) o cotizar requerimientos puntuales. Cambios estructurales o nuevas funcionalidades se cotizan aparte.",
              },
              {
                q: "¿Mi equipo puede actualizar contenido?",
                a: "Sí. Dejamos estructura clara, documentación y capacitación breve para que no dependan de soporte en cambios simples.",
              },
            ].map((item) => (
              <div key={item.q} className="card-surface p-6">
                <h3 className="text-base font-semibold text-slate-50">{item.q}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* FINAL CTA */}
      <section
        className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center text-center mt-24"
        style={{
          backgroundImage: "url('/BG_CTA_strategy.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-label="CTA Tronx Strategy"
      >
        <div className="absolute inset-0 bg-black/50 md:bg-black/45 backdrop-blur-[1px]" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
            ¿Listo para modernizar tu sitio web?
          </h2>

          <p className="mt-4 text-slate-200 text-base md:text-lg">
            En una primera llamada revisamos tu situación, confirmamos alcance y te proponemos el plan más eficiente.
            Sin compromiso y con plazos claros desde el inicio.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contacto#form" className="btn-primary text-base px-6 py-3">
              Agenda una llamada
            </Link>

            <Link
              href="/servicios#planes"
              className="btn-ghost bg-white/10 backdrop-blur hover:bg-white/20 text-base px-6 py-3"
            >
              Ver planes y servicios
            </Link>
          </div>

          <p className="mt-6 text-xs text-slate-300">
            También puedes escribir a{" "}
            <a href="mailto:info@tronxstrategy.com" className="text-sky-300 hover:text-sky-200">
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

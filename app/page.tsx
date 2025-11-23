"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

// ------------------------------
//        METADATA SEO
// ------------------------------
export const metadata: Metadata = {
  title: "Sitios web corporativos modernos en Next.js",
  description:
    "Desarrollamos sitios web de nivel empresarial: rápidos, seguros y preparados para captar más leads. Infraestructura GitHub + Vercel + Cloudflare más integración con CRM y analítica.",
  alternates: {
    canonical: "https://www.tronxstrategy.com/",
  },
  openGraph: {
    title: "Tronx Strategy — Sitios web modernos, rápidos y orientados a resultados",
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
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

        <div className="relative w-full max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] gap-10 items-center px-4 lg:px-8 py-24">
          <div>
            <p className="text-xs font-semibold tracking-[0.26em] uppercase text-sky-300/90">
              WebOps · Sitios Web · Infraestructura Cloud
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Sitios web modernos, rápidos y orientados a resultados.
            </h1>
            <p className="mt-4 text-base md:text-lg text-slate-200 max-w-xl">
              Desarrollamos sitios web de nivel empresarial: rápidos, seguros y
              preparados para captar más leads. Operamos con GitHub, Vercel y
              Cloudflare, conectando tu web a CRM y analítica para tomar mejores
              decisiones comerciales.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contacto#form" className="btn-primary">
                Agenda una llamada
              </Link>
              <Link
                href="/servicios"
                className="btn-ghost bg-white/10 backdrop-blur hover:bg-white/20"
              >
                Ver planes y servicios
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
                <p>GitHub · Vercel · Cloudflare.</p>
              </div>
              <div>
                <p className="text-white text-base md:text-lg font-semibold">
                  + Seguridad
                </p>
                <p>SSL, backups y monitoreo.</p>
              </div>
              <div>
                <p className="text-white text-base md:text-lg font-semibold">
                  100% cloud
                </p>
                <p>Operación remota, liviana y escalable.</p>
              </div>
            </div>
          </div>

          {/* Tarjeta derecha */}
          <div className="relative">
            <div className="card-surface p-6 md:p-8 shadow-2xl bg-black/55 backdrop-blur rounded-xl border border-white/10">
              <p className="text-sm font-semibold tracking-[0.22em] text-sky-300 uppercase">
                Planes Tronx Strategy
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                Sitios web con precios claros. Sin sorpresas.
              </h2>
              <p className="mt-3 text-sm text-slate-200">
                Tres niveles pensados para empresas, instituciones y cámaras:
                presencia profesional, sitio corporativo completo o solución premium.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-100">
                <li>• Plan Básico — Presencia profesional.</li>
                <li>• Plan Medio — Sitio corporativo completo.</li>
                <li>• Plan Premium — Sitio + CRM + WebOps.</li>
              </ul>
              <p className="mt-4 text-xs text-slate-400">
                Incluyen diseño, desarrollo, SEO base, dominio y SSL.
              </p>
              <div className="mt-5">
                <Link href="/servicios#planes" className="btn-primary w-full text-center">
                  Ver lista de precios →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <div className="section">
        {/* Qué podemos construir */}
        <section className="mt-16">
          <p className="section-title">Qué podemos construir</p>
          <h2 className="section-heading">
            Desde una landing en 48 horas hasta un portal institucional completo.
          </h2>
          <p className="section-subtitle">
            Tronx Strategy integra diseño, contenido y tecnología para entregar
            sitios modernos, medibles y preparados para crecer por capas.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              {
                title: "Sitios corporativos",
                body: "Para empresas, gremios, estudios y organizaciones que necesitan presencia sólida y confiable.",
              },
              {
                title: "Landing pages",
                body: "Páginas de alta conversión para campañas, cursos, eventos o lanzamientos.",
              },
              {
                title: "Portales y directorios",
                body: "Arquitecturas escalables para instituciones, cámaras y proyectos territoriales.",
              },
              {
                title: "Sitios con CRM",
                body: "Formularios conectados a Zoho, HubSpot y reporting ejecutivo.",
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

        {/* Logos clientes */}
        <section className="mt-24">
          <p className="section-title">Clientes y proyectos</p>
          <h2 className="section-heading">Confían en el ecosistema Tronx Group.</h2>
          <p className="section-subtitle">
            Experiencia con bancos, cámaras, colegios, instituciones y pymes.
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center opacity-80">
            <Image src="/logos/bice.png" alt="Banco BICE" width={120} height={50} />
            <Image src="/logos/apcc.png" alt="APCC" width={120} height={50} />
            <Image src="/logos/exploflex.png" alt="Exploflex" width={120} height={50} />
            <Image src="/logos/citylube.png" alt="CityLube" width={120} height={50} />
          </div>

          <p className="mt-6 text-center text-xs text-slate-400 max-w-2xl mx-auto">
            Proyectos que combinan desarrollo web moderno, infraestructura cloud y
            contenido claro, alineado con estándares corporativos.
          </p>
        </section>
      </div>

      {/* CTA FINAL */}
      <section
        className="relative w-full min-h-screen flex items-center justify-center text-center mt-24"
        style={{
          backgroundImage: "url('/BG_CTA_strategy.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/45 md:bg-black/40 backdrop-blur-[1px]" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
            ¿Listo para modernizar tu sitio web?
          </h2>

          <p className="mt-4 text-slate-200 text-base md:text-lg">
            Revisemos juntos tu sitio actual, definamos objetivos claros y armemos un
            plan acorde a tu empresa o institución.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contacto#form" className="btn-primary text-base px-6 py-3">
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

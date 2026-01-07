// app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const SITE_URL = "https://www.tronxstrategy.com";
const CANONICAL = `${SITE_URL}/`;
const WHATSAPP_NUMBER = "56920080031";

const PRICING = {
  starter: "$290.000",
  business: "$590.000 – $690.000",
  premium: "$990.000 – $1.500.000",
} as const;

const MONTHLY = {
  hosting: "$10.000",
  support: "$29.990",
  content: "$80.000",
  total: "$119.990",
} as const;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tronx Strategy — Sitios web corporativos modernos (Next.js) | Chile",
  description:
    "Sitios web corporativos e institucionales rápidos y seguros (Next.js + Vercel + Cloudflare), con medición (GA4/GTM) y formularios conectados. Implementación por plan + operación mensual (hosting, soporte, contenidos).",
  alternates: { canonical: CANONICAL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  keywords: [
    "desarrollo web",
    "sitios web corporativos",
    "sitios web institucionales",
    "Next.js",
    "Vercel",
    "Cloudflare",
    "GA4",
    "Google Tag Manager",
    "Zoho CRM",
    "HubSpot",
    "Chile",
    "mantención sitio web",
    "hosting administrado",
    "gestión de contenidos web",
  ],
  authors: [{ name: "Tronx Strategy" }],
  openGraph: {
    title: "Tronx Strategy — Sitios web listos para operar y mantener",
    description:
      "Implementación clara + continuidad mensual: infraestructura cloud, analítica y formularios conectados para operar y medir desde el día 1.",
    url: CANONICAL,
    type: "website",
    siteName: "Tronx Strategy",
    locale: "es_CL",
    images: [
      {
        url: "/og_tronxstrategy.jpg",
        width: 1200,
        height: 630,
        alt: "Tronx Strategy — Sitios web modernos en Next.js",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tronx Strategy — Sitios web modernos (Next.js)",
    description:
      "Next.js + Vercel + Cloudflare + GA4/GTM + Formularios/CRM. Implementación + operación mensual.",
    images: ["/og_tronxstrategy.jpg"],
  },
};

function buildWhatsAppLink() {
  const text =
    "Hola Tronx Strategy 👋 Quiero cotizar un sitio web.\n\n" +
    "1) Empresa / institución:\n" +
    "2) Objetivo del sitio (ventas / info / RRHH / comunidad):\n" +
    "3) Tipo (corporativo / institucional / landing / portal):\n" +
    "4) Fecha ideal de publicación:\n" +
    "5) Secciones estimadas (Inicio, Nosotros, Servicios, Noticias, Contacto, etc.):\n" +
    "6) Referencias (links):\n\n" +
    "¿Les interesa operación mensual (hosting/soporte/contenidos)?\n" +
    "Sí / No / Evaluar\n\n" +
    "Gracias 🙌";

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

const featuredPortfolio = [
  {
    name: "APCC — Cámara Asia Pacífico",
    img: "/portafolio/apcc.jpg",
    type: "Portal gremial · CRM · Eventos",
    desc: "Sitio institucional + captación conectada a CRM para apoyar membresías, cursos y eventos.",
    href: "/portafolio",
    external: "https://www.asiapacific-chamber.com",
    pill: "Plan Premium",
  },
  {
    name: "MagiaImaginacion.cl — Echevensko",
    img: "/portafolio/magia.jpg",
    type: "Landing · Charlas corporativas",
    desc: "Página lista para campañas con estructura clara, contacto directo y crecimiento por etapas.",
    href: "/portafolio",
    external: "https://www.magiaimaginacion.cl",
    pill: "Plan Básico",
  },
  {
    name: "CityLube — Peñaflor",
    img: "/portafolio/citylube.jpg",
    type: "Landing · SEO local",
    desc: "Sitio enfocado en conversión y WhatsApp, optimizado para búsquedas locales.",
    href: "/portafolio",
    external: "https://www.citylube.cl",
    pill: "Landing 48 horas",
  },
] as const;

const anchors = {
  plans: "planes",
  ops: "operacion-mensual",
  portfolio: "portafolio-destacado",
  included: "incluye",
  process: "proceso",
  faq: "faq",
} as const;

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Pill({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "sky" | "emerald";
}) {
  const base = "px-3 py-1 rounded-full border text-[11px] bg-black/45";
  const tones: Record<typeof tone, string> = {
    neutral: "border-slate-700/80 text-slate-200",
    sky: "border-sky-500/40 text-sky-200 bg-slate-900/60",
    emerald: "border-emerald-500/30 text-emerald-200 bg-slate-900/60",
  };
  return <span className={cx(base, tones[tone])}>{children}</span>;
}

function MoneyRow({
  label,
  value,
  strong,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3 text-sm">
      <span className={cx("text-slate-300", strong && "text-slate-100 font-semibold")}>
        {label}
      </span>
      <span className={cx("text-slate-200", strong && "text-sky-300 font-semibold")}>{value}</span>
    </div>
  );
}

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function HomePage() {
  const waLink = buildWhatsAppLink();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tronx Strategy",
    url: CANONICAL,
    logo: `${SITE_URL}/logo_text_white.png`,
    sameAs: [],
    description:
      "Sitios web corporativos e institucionales en Next.js + Vercel + Cloudflare, con medición (GA4/GTM) y formularios conectados. Implementación por plan + operación mensual.",
  };

  return (
    <>
      <JsonLd data={jsonLd} />

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
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />

        <div className="relative w-full max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-10 items-center px-4 lg:px-8 py-24">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold tracking-[0.26em] uppercase text-sky-300/90">
              Sitios Web · Next.js · Infraestructura Cloud · Operación mensual
            </p>

            <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Tu sitio web <span className="text-sky-300">listo para operar</span> y{" "}
              <span className="text-sky-300">mantener</span>.
            </h1>

            <p className="mt-4 text-base md:text-lg text-slate-200 max-w-xl">
              Construimos <span className="text-white font-medium">sitios corporativos e institucionales</span> rápidos,
              seguros y medibles con <span className="text-white font-medium">Next.js + Vercel + Cloudflare</span>.
              Configuramos <span className="text-white font-medium">GA4 + Tag Manager</span> y formularios conectados
              para que el sitio <span className="text-white font-medium">genere contactos</span>. Y si quieres continuidad,
              operamos mensualmente (hosting/soporte/contenidos).
            </p>

            {/* Offer strip */}
            <div className="mt-6 rounded-xl border border-white/10 bg-black/45 px-4 py-3 text-xs md:text-sm text-slate-200 max-w-xl">
              <p className="font-semibold text-slate-100">Cómo vendemos (simple)</p>
              <p className="mt-1">
                <span className="text-white font-medium">1) Implementación</span> (plan con alcance cerrado) →{" "}
                <span className="text-white font-medium">2) Operación mensual</span> (para continuidad real).
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Link
                  href={`/servicios#${anchors.plans}`}
                  className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-200 hover:bg-white/10"
                >
                  Ver planes →
                </Link>
                <Link
                  href={`#${anchors.ops}`}
                  className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-200 hover:bg-white/10"
                >
                  Ver operación mensual →
                </Link>
                <Link
                  href="/portafolio"
                  className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-200 hover:bg-white/10"
                >
                  Ver portafolio →
                </Link>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contacto#form" className="btn-primary px-6 py-3 text-sm md:text-base" data-cta="hero_form">
                Cotizar (sin llamada)
              </Link>

              <a
                href={waLink}
                className="btn-ghost bg-white/10 backdrop-blur hover:bg-white/20 px-6 py-3 text-sm md:text-base"
                data-cta="hero_whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>

              <Link
                href={`/servicios#${anchors.plans}`}
                className="btn-ghost bg-white/5 backdrop-blur hover:bg-white/15 px-6 py-3 text-sm md:text-base"
                data-cta="hero_plans"
              >
                Ver planes y precios
              </Link>

              <Link
                href={`#${anchors.ops}`}
                className="btn-ghost bg-white/5 backdrop-blur hover:bg-white/15 px-6 py-3 text-sm md:text-base"
                data-cta="hero_ops"
              >
                Operación mensual
              </Link>
            </div>

            {/* Trust notes */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Pill>Alcance definido por escrito</Pill>
              <Pill>Entrega documentada</Pill>
              <Pill>Medición desde el día 1</Pill>
              <Pill tone="emerald">Operación mensual opcional</Pill>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs md:text-sm text-slate-300">
              <div>
                <p className="text-white text-base md:text-lg font-semibold">2–4 semanas</p>
                <p>Entrega típica por plan.</p>
              </div>
              <div>
                <p className="text-white text-base md:text-lg font-semibold">Rápido y seguro</p>
                <p>Vercel + Cloudflare + SSL.</p>
              </div>
              <div>
                <p className="text-white text-base md:text-lg font-semibold">Medible</p>
                <p>GA4 + GTM + eventos.</p>
              </div>
              <div>
                <p className="text-white text-base md:text-lg font-semibold">Continuidad</p>
                <p>Hosting / soporte / contenido.</p>
              </div>
            </div>

            {/* Tech pills */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-[11px] text-slate-300">
              <span className="px-3 py-1 rounded-full bg-black/45 border border-slate-700/80">Next.js · React</span>
              <span className="px-3 py-1 rounded-full bg-black/45 border border-slate-700/80">
                GitHub · Vercel · Cloudflare
              </span>
              <span className="px-3 py-1 rounded-full bg-black/45 border border-slate-700/80">
                GA4 · GTM · Search Console
              </span>
            </div>
          </div>

          {/* Right card */}
          <div className="relative">
            <div className="card-surface p-6 md:p-8 shadow-2xl bg-black/65 backdrop-blur rounded-xl border border-white/10">
              <p className="text-sm font-semibold tracking-[0.22em] text-sky-300 uppercase">
                Implementación + Operación
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-white">
                Precios claros. Alcance definido. Continuidad mensual.
              </h2>

              <p className="mt-3 text-sm text-slate-200">
                Si tu meta es publicar un sitio sólido (no solo “bonito”), parte con un plan. Luego, si quieres continuidad real,
                operamos por mes.
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-100">
                <div className="rounded-lg border border-white/10 bg-black/40 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-white">Plan Básico</p>
                    <p className="text-slate-200">{PRICING.starter}</p>
                  </div>
                  <p className="mt-1 text-xs text-slate-300">1–3 secciones + medición base. Entrega rápida.</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Link
                      href="/servicios#basico"
                      className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-200 hover:bg-white/10"
                    >
                      Ver detalle →
                    </Link>
                  </div>
                </div>

                <div className="rounded-lg border border-sky-400/30 bg-black/40 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-white">Plan Medio</p>
                    <p className="text-slate-200">{PRICING.business}</p>
                  </div>
                  <p className="mt-1 text-xs text-slate-300">
                    Sitio corporativo completo + noticias administrable + eventos/medición.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Link
                      href="/servicios#medio"
                      className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-200 hover:bg-white/10"
                    >
                      Ver detalle →
                    </Link>
                    <Link
                      href="/portafolio"
                      className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-200 hover:bg-white/10"
                    >
                      Ver casos →
                    </Link>
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-black/40 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-white">Plan Premium</p>
                    <p className="text-slate-200">{PRICING.premium}</p>
                  </div>
                  <p className="mt-1 text-xs text-slate-300">
                    Plataforma institucional + gobierno digital + integraciones por etapa.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Link
                      href="/servicios#premium"
                      className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-200 hover:bg-white/10"
                    >
                      Ver detalle →
                    </Link>
                    <Link
                      href="/servicios#extras"
                      className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-200 hover:bg-white/10"
                    >
                      Ver extras →
                    </Link>
                  </div>
                </div>

                {/* Monthly bundle teaser */}
                <div className="rounded-lg border border-emerald-400/25 bg-black/40 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-white">Operación mensual completa</p>
                    <p className="text-emerald-200 font-semibold">{MONTHLY.total} / mes</p>
                  </div>
                  <p className="mt-1 text-xs text-slate-300">
                    Hosting + soporte + contenidos para continuidad real (evita “sitio abandonado”).
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Link
                      href={`#${anchors.ops}`}
                      className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-200 hover:bg-white/10"
                    >
                      Ver detalle mensual →
                    </Link>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-xs text-slate-400">
                Incluye diseño, desarrollo, SEO base, SSL y medición. Requerimientos fuera de alcance (nuevas secciones,
                integraciones, cambios estructurales) se cotizan por separado.
              </p>

              <div className="mt-5 space-y-3">
                <Link href="/contacto#form" className="btn-primary w-full text-center" data-cta="card_form">
                  Cotizar mi sitio →
                </Link>

                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="/servicios"
                    className="btn-ghost w-full text-center bg-white/10 hover:bg-white/20"
                    data-cta="card_services"
                  >
                    Servicios →
                  </Link>
                  <Link
                    href="/portafolio"
                    className="btn-ghost w-full text-center bg-white/10 hover:bg-white/20"
                    data-cta="card_portfolio"
                  >
                    Portafolio →
                  </Link>
                </div>
              </div>

              <p className="mt-3 text-[11px] text-slate-400">Facturamos a empresas e instituciones. Valores netos + IVA.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS STRIP */}
      <section className="bg-slate-950 border-y border-slate-800" id="diferenciadores">
        <div className="section py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-slate-200">
          <div className="flex-1">
            <p className="font-semibold text-slate-50">Lo que evita dolores después</p>
            <p className="text-slate-300">
              Alcance cerrado + checklist técnico + entrega documentada + (opcional) operación mensual. Menos dependencia, más
              continuidad.
            </p>
          </div>
          <div className="flex-1 grid md:grid-cols-2 gap-2 text-slate-300">
            <p>✔ Formularios conectados (Zoho / HubSpot opcional).</p>
            <p>✔ Medición con GA4 + Google Tag Manager.</p>
            <p>✔ Sitio listo para campañas (eventos / conversiones).</p>
            <p>✔ Infraestructura moderna (sin hosting lento).</p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="section">
        {/* QUICK LINKS BAR */}
        <section className="mt-10">
          <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-white">Accesos rápidos</p>
                <p className="text-xs text-slate-300 mt-1">Si vienes desde Ads: estos 3 destinos son los que más cierran.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Link href="/servicios#planes" className="btn-ghost bg-white/10 hover:bg-white/20 px-4 py-2 text-sm">
                  Planes y precios →
                </Link>
                <Link href={`#${anchors.ops}`} className="btn-ghost bg-white/10 hover:bg-white/20 px-4 py-2 text-sm">
                  Operación mensual →
                </Link>
                <Link href="/portafolio" className="btn-ghost bg-white/10 hover:bg-white/20 px-4 py-2 text-sm">
                  Casos reales →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ✅ OPERACIÓN MENSUAL (RECALCADO PARA TU MODELO DE NEGOCIO) */}
        <section className="mt-16 scroll-mt-24" id={anchors.ops}>
          <p className="section-title">Operación mensual</p>
          <h2 className="section-heading">Lo que mantiene el sitio funcionando (y vigente).</h2>
          <p className="section-subtitle">
            La implementación deja el sitio listo. La operación mensual asegura continuidad: infraestructura, soporte y contenido.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Hosting administrado",
                price: `${MONTHLY.hosting} / mes`,
                desc: "Publicación, DNS, SSL y continuidad. Ideal para operar sin fricción.",
                bullets: ["DNS + SSL + CDN", "Continuidad de despliegue", "Base cloud (Vercel + Cloudflare)"],
              },
              {
                title: "Soporte y mantención",
                price: `${MONTHLY.support} / mes`,
                desc: "Ajustes menores, correcciones y soporte técnico mensual.",
                bullets: ["Ajustes menores", "Correcciones y acompañamiento", "Respuesta rápida"],
              },
              {
                title: "Gestión de contenidos",
                price: `${MONTHLY.content} / mes`,
                desc: "Publicación mensual para mantener el sitio vivo (comunicados, noticias, documentos).",
                bullets: ["Publicación mensual", "Actualizaciones institucionales", "Orden editorial"],
              },
            ].map((x) => (
              <div key={x.title} className="card-surface p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-slate-50">{x.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{x.desc}</p>
                <p className="mt-3 text-sky-300 font-semibold">{x.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                  {x.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-[3px] h-2 w-2 rounded-full bg-sky-400/80" />
                      <span className="text-slate-300">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-black/30 p-6">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex-1">
                <p className="text-xs font-semibold tracking-[0.22em] uppercase text-emerald-300">Bundle recomendado</p>
                <h3 className="mt-2 text-xl font-semibold text-white">Operación mensual completa</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Para clientes que quieren continuidad sin depender de urgencias ni “sitios abandonados”.
                </p>
                <div className="mt-4 max-w-md space-y-2">
                  <MoneyRow label="Hosting administrado" value={`${MONTHLY.hosting} / mes`} />
                  <MoneyRow label="Soporte y mantención" value={`${MONTHLY.support} / mes`} />
                  <MoneyRow label="Gestión de contenidos" value={`${MONTHLY.content} / mes`} />
                  <div className="border-t border-slate-800 pt-3 mt-2">
                    <MoneyRow label="Total mensual (referencial)" value={`${MONTHLY.total} / mes`} strong />
                    <p className="mt-2 text-[11px] text-slate-400">Valores netos. Se suma IVA según corresponda.</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link href="/contacto#form" className="btn-primary px-6 py-3 text-sm" data-cta="ops_form">
                    Solicitar plan mensual →
                  </Link>
                  <a
                    href={waLink}
                    className="btn-ghost bg-white/10 hover:bg-white/20 px-6 py-3 text-sm"
                    data-cta="ops_whatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp →
                  </a>
                  <Link
                    href="/servicios#planes"
                    className="btn-ghost bg-white/10 hover:bg-white/20 px-6 py-3 text-sm"
                    data-cta="ops_plans"
                  >
                    Ver planes de implementación →
                  </Link>
                </div>
              </div>

              <div className="flex-1 rounded-xl border border-white/10 bg-black/35 p-5">
                <p className="text-sm font-semibold text-white">Qué NO es la operación mensual</p>
                <p className="mt-2 text-sm text-slate-300">
                  No es “desarrollo infinito”. Nuevas secciones, integraciones avanzadas, rediseños o funcionalidades tipo app se
                  cotizan como proyecto aparte.
                </p>
                <div className="mt-4 grid gap-2 text-sm text-slate-300">
                  <p>• Cambios estructurales</p>
                  <p>• Integraciones (ERP/pagos/sistemas internos)</p>
                  <p>• Funcionalidades tipo plataforma</p>
                  <p>• Producción audiovisual / campañas (se cotiza aparte)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE BUILD */}
        <section className="mt-24" id="que-construimos">
          <p className="section-title">Qué construimos</p>
          <h2 className="section-heading">Sitios corporativos que se entienden y convierten.</h2>
          <p className="section-subtitle">
            El sitio debe explicar rápido qué haces, generar confianza y guiar al contacto. Si después quieres portal, noticias o
            CRM, lo escalamos por etapas sin botar lo ya construido.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              {
                title: "Sitio corporativo",
                body: "Inicio + Nosotros + Servicios + Contacto. Enfocado en claridad y confianza.",
                link: { href: "/servicios#planes", label: "Ver planes →" },
              },
              {
                title: "Institucional / gremial",
                body: "Estructura para organizaciones, cámaras y asociaciones, con navegación limpia.",
                link: { href: "/portafolio", label: "Ver casos →" },
              },
              {
                title: "Landing de campaña",
                body: "Página de alta conversión lista para Ads con eventos/medición.",
                link: { href: "/servicios#landing-48h", label: "Ver landing 48h →" },
              },
              {
                title: "Etapa 2: Web + CRM",
                body: "Captura + pipeline + automatizaciones (Zoho/HubSpot) si la operación lo requiere.",
                link: { href: "/servicios#extras", label: "Ver integraciones →" },
              },
            ].map((card) => (
              <div key={card.title} className="card-surface p-6">
                <h3 className="text-lg font-semibold text-slate-50">{card.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{card.body}</p>
                <div className="mt-4">
                  <Link href={card.link.href} className="btn-ghost bg-white/10 hover:bg-white/20 px-4 py-2 text-sm inline-flex">
                    {card.link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURED PORTFOLIO */}
        <section className="mt-24 scroll-mt-24" id={anchors.portfolio}>
          <p className="section-title">Portafolio</p>
          <h2 className="section-heading">Casos reales (estructura + operación).</h2>
          <p className="section-subtitle">
            Esto es lo que vendes: sitios publicados, con propósito, y listos para operar.{" "}
            <Link href="/portafolio" className="text-sky-300 hover:text-sky-200">
              Ver portafolio completo →
            </Link>
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredPortfolio.map((p) => (
              <article key={p.name} className="card-surface overflow-hidden p-0 border border-white/10 rounded-2xl">
                <div className="relative h-44 w-full bg-slate-950/50">
                  <Image src={p.img} alt={p.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold tracking-[0.22em] text-slate-400 uppercase">{p.type}</p>

                  <div className="mt-2 flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                    <span className="rounded-full px-2 py-1 border border-white/10 bg-white/5 text-[11px] text-slate-200">
                      {p.pill}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-slate-300">{p.desc}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <Link href={p.href} className="btn-ghost bg-white/10 hover:bg-white/20 px-4 py-2 text-sm">
                      Ver más casos →
                    </Link>
                    <a
                      href={p.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost bg-white/5 hover:bg-white/15 px-4 py-2 text-sm"
                    >
                      Abrir sitio
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/portafolio" className="btn-primary px-6 py-3 text-sm" data-cta="portfolio_primary">
              Ver portafolio completo →
            </Link>
            <Link href="/contacto#form" className="btn-ghost bg-white/10 hover:bg-white/20 px-6 py-3 text-sm">
              Quiero un sitio así →
            </Link>
          </div>
        </section>

        {/* WHAT'S INCLUDED */}
        <section className="mt-24 grid gap-10 lg:grid-cols-[1.05fr_minmax(0,1fr)] items-start scroll-mt-24" id={anchors.included}>
          <div>
            <p className="section-title">Para evitar malentendidos</p>
            <h2 className="section-heading">Qué incluye (y qué no) la implementación.</h2>
            <p className="section-subtitle">Esto filtra perfecto: menos desgaste, más cierres claros y más continuidad mensual.</p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 text-sm text-slate-200">
              {[
                { title: "Incluye", body: "Diseño + desarrollo + publicación + SSL + medición base." },
                { title: "Incluye", body: "Estructura clara y navegación simple (UX)." },
                { title: "Incluye", body: "GA4 + GTM + eventos básicos (contacto/clicks)." },
                { title: "Incluye", body: "Entrega documentada + capacitación breve." },
              ].map((item, idx) => (
                <div key={idx} className="card-surface p-4">
                  <h3 className="font-semibold text-slate-50">{item.title}</h3>
                  <p className="mt-2 text-slate-300">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-5 text-sm text-slate-200">
              <p className="font-semibold text-white">No incluye (se cotiza aparte)</p>
              <div className="mt-2 grid md:grid-cols-2 gap-2 text-slate-300">
                <p>• Rediseños completos posteriores</p>
                <p>• Nuevas secciones no consideradas</p>
                <p>• Integraciones avanzadas (CRM/ERP)</p>
                <p>• Funcionalidades tipo “app”</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  href="/servicios#extras"
                  className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-200 hover:bg-white/10"
                >
                  Ver extras frecuentes →
                </Link>
                <Link
                  href="/servicios#faq"
                  className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-200 hover:bg-white/10"
                >
                  Ver FAQ de servicios →
                </Link>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contacto#form" className="btn-primary px-6 py-3 text-sm" data-cta="incluye_form">
                Cotizar con alcance claro →
              </Link>
              <a
                href={waLink}
                className="btn-ghost bg-white/10 hover:bg-white/20 px-6 py-3 text-sm"
                data-cta="incluye_whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp →
              </a>
              <Link href={`#${anchors.ops}`} className="btn-ghost bg-white/10 hover:bg-white/20 px-6 py-3 text-sm">
                Ver operación mensual →
              </Link>
            </div>
          </div>

          <aside className="card-surface p-6 border border-slate-800 text-sm text-slate-200">
            <h3 className="text-lg font-semibold text-slate-50">Entregables típicos</h3>
            <ul className="mt-3 space-y-2">
              <li>• Alcance por escrito + calendario de hitos.</li>
              <li>• Arquitectura y estructura aprobadas antes de construir.</li>
              <li>• Formularios + tracking + eventos clave.</li>
              <li>• Publicación + checklist técnico (DNS/SSL/performance).</li>
              <li>• Entrega documentada + capacitación breve.</li>
            </ul>

            <div className="mt-5 rounded-xl border border-white/10 bg-black/30 p-4">
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-sky-300">Atajos</p>
              <div className="mt-3 grid gap-2">
                <Link
                  href="/servicios#planes"
                  className="btn-ghost bg-white/10 hover:bg-white/20 px-4 py-2 text-sm text-center"
                >
                  Ver planes →
                </Link>
                <Link
                  href={`#${anchors.ops}`}
                  className="btn-ghost bg-white/10 hover:bg-white/20 px-4 py-2 text-sm text-center"
                >
                  Operación mensual →
                </Link>
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-400">
              Si el proyecto requiere CMS/noticias/roles, lo dejamos como Etapa 2 (para no alargar la entrega).
            </p>
          </aside>
        </section>

        {/* PROCESS */}
        <section className="mt-24 scroll-mt-24" id={anchors.process}>
          <p className="section-title">Cómo trabajamos</p>
          <h2 className="section-heading">Proceso corto, sin reuniones eternas.</h2>
          <p className="section-subtitle">
            Ideal para gerencias, marketing y equipos pequeños. Si quieres ver el “antes/después”, revisa{" "}
            <Link href="/portafolio" className="text-sky-300 hover:text-sky-200">
              el portafolio →
            </Link>
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { step: "01", title: "Brief", body: "Objetivo + secciones + referentes. Definimos alcance y valor." },
              { step: "02", title: "Estructura", body: "Mapa del sitio + wire simple. Aprobación rápida." },
              { step: "03", title: "Construcción", body: "Desarrollo + performance + seguridad + medición." },
              { step: "04", title: "Publicación", body: "Deploy + documentación + capacitación breve." },
            ].map((p) => (
              <div key={p.step} className="card-surface p-6">
                <p className="text-xs tracking-[0.25em] text-sky-300 font-semibold">{p.step}</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-50">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{p.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/servicios#planes" className="btn-ghost bg-white/10 hover:bg-white/20 px-6 py-3 text-sm">
              Ver planes y alcance →
            </Link>
            <Link href="/contacto#form" className="btn-primary px-6 py-3 text-sm">
              Cotizar (sin llamada) →
            </Link>
            <Link href={`#${anchors.ops}`} className="btn-ghost bg-white/10 hover:bg-white/20 px-6 py-3 text-sm">
              Operación mensual →
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-24 scroll-mt-24" id={anchors.faq}>
          <p className="section-title">Preguntas frecuentes</p>
          <h2 className="section-heading">Lo que preguntan antes de contratar.</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                q: "¿La IA no hace esto más barato?",
                a: "La IA acelera partes. Pero el valor real es gobierno digital: alcance, continuidad, accesos, despliegue, medición y responsabilidad. Usamos IA con criterio y control.",
              },
              {
                q: "¿Incluye dominio y hosting?",
                a: "Incluimos configuración (DNS, SSL, analítica). Dominio y servicios (Vercel/Cloudflare) pueden contratarse con ustedes o con nosotros como hosting administrado mensual.",
              },
              {
                q: "¿Qué pasa si necesito cambios después?",
                a: "Puedes operar con plan mensual (soporte / contenidos) o cotizar requerimientos puntuales. Cambios estructurales e integraciones avanzadas se cotizan aparte.",
              },
              {
                q: "¿Mi equipo puede actualizar contenido?",
                a: "Sí. Dejamos documentación y capacitación breve para cambios simples. Si quieren delegarlo, ofrecemos gestión mensual de contenidos.",
              },
            ].map((item) => (
              <div key={item.q} className="card-surface p-6">
                <h3 className="text-base font-semibold text-slate-50">{item.q}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.a}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link href="/servicios#faq" className="btn-ghost bg-white/10 hover:bg-white/20 px-4 py-2 text-sm inline-flex">
                    Ver FAQ de servicios →
                  </Link>
                  <Link href={`#${anchors.ops}`} className="btn-ghost bg-white/10 hover:bg-white/20 px-4 py-2 text-sm inline-flex">
                    Ver mensual →
                  </Link>
                </div>
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
        <div className="absolute inset-0 bg-black/55 md:bg-black/50 backdrop-blur-[1px]" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Cotiza tu sitio web (sin llamada)</h2>

          <p className="mt-4 text-slate-200 text-base md:text-lg">
            Envíanos secciones + objetivo + fecha ideal. Respondemos con propuesta clara (alcance, valor y plazo). Si quieres,
            sumamos operación mensual para continuidad.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contacto#form" className="btn-primary text-base px-6 py-3" data-cta="final_form">
              Cotizar ahora
            </Link>

            <a
              href={waLink}
              className="btn-ghost bg-white/10 backdrop-blur hover:bg-white/20 text-base px-6 py-3"
              data-cta="final_whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>

            <Link
              href={`#${anchors.ops}`}
              className="btn-ghost bg-white/5 backdrop-blur hover:bg-white/15 text-base px-6 py-3"
              data-cta="final_ops"
            >
              Operación mensual
            </Link>

            <Link
              href="/portafolio"
              className="btn-ghost bg-white/5 backdrop-blur hover:bg-white/15 text-base px-6 py-3"
              data-cta="final_portfolio"
            >
              Ver portafolio
            </Link>
          </div>

          <p className="mt-6 text-xs text-slate-300">
            También puedes escribir a{" "}
            <a href="mailto:info@tronxstrategy.com" className="text-sky-300 hover:text-sky-200">
              info@tronxstrategy.com
            </a>{" "}
            o enviar WhatsApp al <span className="text-sky-200 font-medium">+56 9 2008 0031</span>.
          </p>
        </div>
      </section>
    </>
  );
}

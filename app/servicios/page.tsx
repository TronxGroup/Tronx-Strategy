// app/servicios/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  LayoutTemplate,
  Search,
  BarChart3,
  Headphones,
  Wrench,
  BadgeCheck,
  Ban,
  Coins,
  Timer,
  MessageSquareMore,
  ShieldCheck,
  FileText,
} from "lucide-react";

const SITE_URL = "https://www.tronxstrategy.com";
const WHATSAPP_NUMBER = "56920080031";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Servicios — Tronx Strategy | Captación digital para empresas de servicios",
  description:
    "Servicios de Tronx Strategy: landing y sitio web para servicios, medición, Google Ads opcional y operación mensual.",
  alternates: {
    canonical: "/servicios",
  },
  openGraph: {
    title: "Servicios — Tronx Strategy",
    description:
      "Landing, sitio web, medición, Google Ads y continuidad mensual para empresas de servicios.",
    url: "/servicios",
    type: "website",
    locale: "es_CL",
    siteName: "Tronx Strategy",
  },
};

function buildWhatsAppLink() {
  const text =
    "Hola 👋 Quiero cotizar un servicio de Tronx Strategy.\n\n" +
    "Empresa / Proyecto:\n" +
    "Servicio principal:\n" +
    "Ciudad:\n" +
    "Objetivo (cotizaciones / consultas / agenda):\n" +
    "Servicio de interés:\n\n" +
    "Gracias 🙌";

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm text-slate-200">
      <CheckCircle2 className="mt-[2px] h-4 w-4 shrink-0 text-sky-400" />
      <span>{children}</span>
    </li>
  );
}

function SectionTitle({
  eyebrow,
  title,
  desc,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
          {eyebrow}
        </p>
      )}
      <h1 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
        {title}
      </h1>
      {desc && <p className="mt-4 text-slate-300">{desc}</p>}
    </div>
  );
}

export default function ServiciosPage() {
  const waLink = buildWhatsAppLink();

  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="border-b border-white/10 bg-slate-950 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionTitle
            eyebrow="Servicios"
            title="Servicios simples para captar más consultas"
            desc="Tronx Strategy trabaja con empresas de servicios que necesitan una base digital clara, medición real y continuidad. No hacemos de todo: hacemos lo que ayuda a captar clientes."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <LayoutTemplate className="mb-3 h-5 w-5 text-sky-400" />
              <h2 className="text-lg font-semibold text-white">
                Implementación
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Landing o sitio web claro para presentar servicios y facilitar
                el contacto.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <BarChart3 className="mb-3 h-5 w-5 text-sky-400" />
              <h2 className="text-lg font-semibold text-white">
                Medición y Ads
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Formularios, WhatsApp y Google Ads opcional para generar y medir
                consultas reales.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <Headphones className="mb-3 h-5 w-5 text-sky-400" />
              <h2 className="text-lg font-semibold text-white">
                Continuidad mensual
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Soporte, ajustes y actualizaciones para que el sistema siga
                activo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIO 1 */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <div className="flex items-center gap-2">
                <LayoutTemplate className="h-5 w-5 text-sky-400" />
                <p className="text-sm font-medium text-sky-300">
                  Servicio 1
                </p>
              </div>

              <h2 className="mt-4 text-3xl font-semibold text-white">
                Landing o sitio web para servicios
              </h2>

              <p className="mt-4 max-w-2xl text-slate-300">
                Creamos una estructura simple y clara para que tu empresa muestre
                mejor su oferta, genere confianza y facilite el contacto. Este
                servicio es la base de todo lo demás.
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-base font-semibold text-white">
                    Qué incluye
                  </h3>
                  <ul className="mt-4 space-y-2">
                    <CheckItem>Landing de captación o sitio institucional</CheckItem>
                    <CheckItem>Páginas de servicios y contacto</CheckItem>
                    <CheckItem>Formulario + botón de WhatsApp</CheckItem>
                    <CheckItem>SEO base e indexación</CheckItem>
                    <CheckItem>Configuración técnica esencial</CheckItem>
                    <CheckItem>Entrega documentada</CheckItem>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    Cuándo conviene
                  </h3>
                  <ul className="mt-4 space-y-2">
                    <CheckItem>No tienes sitio web</CheckItem>
                    <CheckItem>Tu sitio actual es confuso o antiguo</CheckItem>
                    <CheckItem>Quieres más consultas o cotizaciones</CheckItem>
                    <CheckItem>Necesitas una base lista para campañas</CheckItem>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
              <p className="text-sm text-slate-300">Implementación</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                Desde $290.000
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                El valor depende del alcance: una landing simple cuesta menos
                que un sitio institucional con varias páginas.
              </p>

              <div className="mt-6 rounded-xl border border-white/10 bg-black/40 p-4">
                <div className="flex items-center gap-2">
                  <Timer className="h-4 w-4 text-sky-400" />
                  <p className="text-sm font-medium text-white">
                    Tiempos típicos
                  </p>
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  Landing simple: 7–10 días hábiles
                  <br />
                  Sitio institucional: 2–4 semanas
                </p>
              </div>

              <Link
                href="/contacto#form"
                className="btn-primary mt-6 inline-flex w-full items-center justify-center gap-2"
              >
                Solicitar propuesta
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIO 2 */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <div className="flex items-center gap-2">
                <Search className="h-5 w-5 text-sky-400" />
                <p className="text-sm font-medium text-sky-300">
                  Servicio 2
                </p>
              </div>

              <h2 className="mt-4 text-3xl font-semibold text-white">
                Medición y Google Ads
              </h2>

              <p className="mt-4 max-w-2xl text-slate-300">
                Si tu servicio ya tiene demanda, configuramos lo necesario para
                medir consultas y, si conviene, activamos campañas de búsqueda
                para acelerar captación.
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-base font-semibold text-white">
                    Qué incluye
                  </h3>
                  <ul className="mt-4 space-y-2">
                    <CheckItem>Eventos medibles</CheckItem>
                    <CheckItem>Formulario y WhatsApp trazables</CheckItem>
                    <CheckItem>GA4 / tags si aplica</CheckItem>
                    <CheckItem>Campañas Google Ads Search</CheckItem>
                    <CheckItem>Negativas base</CheckItem>
                    <CheckItem>Optimización periódica</CheckItem>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    Cuándo conviene
                  </h3>
                  <ul className="mt-4 space-y-2">
                    <CheckItem>Tu servicio ya tiene búsqueda activa</CheckItem>
                    <CheckItem>Quieres más velocidad en captación</CheckItem>
                    <CheckItem>Necesitas saber qué canal trae leads</CheckItem>
                    <CheckItem>Tienes capacidad de responder consultas</CheckItem>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                <p className="text-sm text-slate-300">Setup Ads</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  $600.000 + IVA
                </h3>
                <p className="mt-3 text-sm text-slate-300">
                  Estructura inicial, conversiones y checklist de lanzamiento.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                <p className="text-sm text-slate-300">Gestión mensual</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  $350.000 + IVA / mes
                </h3>
                <p className="mt-3 text-sm text-slate-300">
                  Revisión, optimización y mejoras periódicas sobre campañas y
                  captación.
                </p>
              </div>

              <div className="rounded-2xl border border-sky-400/20 bg-sky-500/10 p-6">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-sky-300" />
                  <h3 className="font-semibold text-white">
                    Importante
                  </h3>
                </div>
                <p className="mt-3 text-sm text-slate-300">
                  No prometemos resultados mágicos. Diseñamos un sistema claro,
                  medible y optimizable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIO 3 */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <div className="flex items-center gap-2">
                <Headphones className="h-5 w-5 text-sky-400" />
                <p className="text-sm font-medium text-sky-300">
                  Servicio 3
                </p>
              </div>

              <h2 className="mt-4 text-3xl font-semibold text-white">
                Operación mensual
              </h2>

              <p className="mt-4 max-w-2xl text-slate-300">
                Después de publicar, muchas empresas dejan el sitio botado.
                Este servicio existe para evitar eso: mantener el sistema
                activo, actualizado y funcionando.
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-base font-semibold text-white">
                    Qué incluye
                  </h3>
                  <ul className="mt-4 space-y-2">
                    <CheckItem>Hosting administrado</CheckItem>
                    <CheckItem>Soporte mensual</CheckItem>
                    <CheckItem>Ajustes menores</CheckItem>
                    <CheckItem>Actualizaciones básicas</CheckItem>
                    <CheckItem>Publicación de contenidos simples</CheckItem>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    Cuándo conviene
                  </h3>
                  <ul className="mt-4 space-y-2">
                    <CheckItem>No quieres depender de terceros para cada cambio</CheckItem>
                    <CheckItem>Quieres mantener el sitio vigente</CheckItem>
                    <CheckItem>Necesitas soporte continuo</CheckItem>
                    <CheckItem>Quieres una base lista para campañas futuras</CheckItem>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
                <p className="text-sm text-slate-300">Hosting administrado</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  Desde $10.000 / mes
                </h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
                <p className="text-sm text-slate-300">Soporte mensual</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  Desde $29.990 / mes
                </h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
                <p className="text-sm text-slate-300">Gestión de contenidos</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  Desde $80.000 / mes
                </h3>
              </div>

              <div className="rounded-2xl border border-sky-400/20 bg-sky-500/10 p-6">
                <p className="text-sm text-slate-200">Plan recomendado</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  Desde $119.990 / mes
                </h3>
                <p className="mt-3 text-sm text-slate-300">
                  Hosting + soporte + continuidad básica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUIEN ES / NO ES */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionTitle
            center
            eyebrow="Enfoque"
            title="Trabajamos con proyectos claros"
            desc="No hacemos de todo. Preferimos foco, velocidad y lógica comercial."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 text-sky-400" />
                <h3 className="font-semibold text-white">Sí hacemos</h3>
              </div>
              <ul className="mt-4 space-y-2">
                <CheckItem>Empresas que venden servicios</CheckItem>
                <CheckItem>Cotizaciones, consultas o agenda</CheckItem>
                <CheckItem>Servicios B2B o B2C claros</CheckItem>
                <CheckItem>Proyectos con foco comercial</CheckItem>
                <CheckItem>Continuidad mensual cuando tiene sentido</CheckItem>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <div className="flex items-center gap-2">
                <Ban className="h-5 w-5 text-sky-400" />
                <h3 className="font-semibold text-white">No hacemos</h3>
              </div>
              <ul className="mt-4 space-y-2">
                <CheckItem>E-commerce</CheckItem>
                <CheckItem>Apps o plataformas complejas</CheckItem>
                <CheckItem>Portales o dashboards a medida</CheckItem>
                <CheckItem>Marketing sin medición</CheckItem>
                <CheckItem>Proyectos sin responsable comercial</CheckItem>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 text-center">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            ¿Qué servicio necesitas hoy?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Cuéntanos si necesitas una base nueva, campañas o continuidad
            mensual. Te respondemos con una propuesta simple y clara.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contacto#form"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3"
            >
              Solicitar propuesta
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center gap-2 bg-white/10 px-6 py-3 hover:bg-white/20"
            >
              WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <p className="mt-6 text-xs text-slate-400">
            Tronx Strategy trabaja con empresas de servicios. No e-commerce. No
            sistemas complejos.
          </p>
        </div>
      </section>
    </main>
  );
}

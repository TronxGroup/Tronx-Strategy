import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Search,
  LayoutTemplate,
  BarChart3,
  Headphones,
  Wrench,
  BadgeCheck,
  Ban,
  Coins,
  Timer,
  MessageSquareMore,
} from "lucide-react";

const SITE_URL = "https://www.tronxstrategy.com";
const WHATSAPP_NUMBER = "56920080031";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tronx Strategy — Captación digital para empresas de servicios | Chile",
  description:
    "Tronx Strategy diseña sistemas simples de captación para empresas de servicios: landing, sitio web, medición, Google Ads y operación mensual.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Tronx Strategy — Captación digital para empresas de servicios",
    description:
      "Landing, sitio, medición y Google Ads opcional para generar consultas reales en empresas de servicios.",
    url: "/",
    type: "website",
    locale: "es_CL",
    siteName: "Tronx Strategy",
  },
};

function buildWhatsAppLink() {
  const text =
    "Hola 👋 Quiero cotizar un sistema de captación digital para mi empresa.\n\n" +
    "Empresa / Proyecto:\n" +
    "Servicio principal:\n" +
    "Ciudad:\n" +
    "Objetivo (cotizaciones / consultas / agenda):\n" +
    "¿Ya tienen sitio web?:\n\n" +
    "Gracias 🙌";

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-200">
      {children}
    </span>
  );
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
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
        {title}
      </h2>
      {desc && <p className="mt-4 text-slate-300">{desc}</p>}
    </div>
  );
}

export default function HomePage() {
  const waLink = buildWhatsAppLink();

  return (
    <>
      {/* HERO */}
      <section
        className="relative flex min-h-screen items-center"
        style={{
          backgroundImage: "url('/BG_hero_strategy.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-24 lg:grid-cols-2 lg:px-8">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
              Captación digital para empresas de servicios
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-6xl">
              Menos dependencia de referidos.
              <br />
              Más <span className="text-sky-300">consultas reales</span>.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
              Diseñamos sistemas simples para captar clientes: landing o sitio
              web claro, formularios y WhatsApp, medición real y Google Ads
              opcional. Todo enfocado en empresas que venden servicios.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>Abogados</Pill>
              <Pill>Consultoría</Pill>
              <Pill>Salud</Pill>
              <Pill>Educación</Pill>
              <Pill>Servicios técnicos</Pill>
              <Pill>B2B local</Pill>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contacto#form"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-base"
              >
                Solicitar propuesta
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost inline-flex items-center gap-2 bg-white/10 px-6 py-3 text-base hover:bg-white/20"
              >
                WhatsApp directo
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <p className="mt-6 text-xs text-slate-400">
              Enfoque: servicios. No e-commerce. No sistemas complejos.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/60 p-8 shadow-xl backdrop-blur">
            <p className="text-sm font-medium text-sky-300">
              Qué hacemos exactamente
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                <div className="flex items-center gap-2">
                  <LayoutTemplate className="h-4 w-4 text-sky-300" />
                  <p className="font-semibold text-white">
                    1. Implementamos tu base digital
                  </p>
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  Creamos una landing o sitio claro para que el cliente entienda
                  rápido qué haces y cómo contactarte.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                <div className="flex items-center gap-2">
                  <MessageSquareMore className="h-4 w-4 text-sky-300" />
                  <p className="font-semibold text-white">
                    2. Medimos formularios y WhatsApp
                  </p>
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  Dejamos configurado lo necesario para registrar consultas y
                  entender qué canal trae contactos.
                </p>
              </div>

              <div className="rounded-xl border border-sky-400/30 bg-sky-500/10 p-4">
                <div className="flex items-center gap-2">
                  <Search className="h-4 w-4 text-sky-300" />
                  <p className="font-semibold text-white">
                    3. Activamos Google Ads si conviene
                  </p>
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  Si tu servicio ya tiene demanda, sumamos campañas de búsqueda
                  para acelerar captación.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                <div className="flex items-center gap-2">
                  <Headphones className="h-4 w-4 text-sky-300" />
                  <p className="font-semibold text-white">
                    4. Damos continuidad mensual
                  </p>
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  Soporte, ajustes y actualizaciones para que el sistema no
                  quede abandonado.
                </p>
              </div>
            </div>

            <Link
              href="/servicios"
              className="btn-primary mt-6 inline-flex w-full items-center justify-center gap-2 text-center"
            >
              Ver servicios
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionTitle
            center
            eyebrow="Problema que resolvemos"
            title="Muchas empresas de servicios tienen sitio, pero no tienen sistema"
            desc="Un sitio por sí solo no basta. Lo importante es tener una estructura clara para generar consultas y medir qué está funcionando."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <h3 className="font-semibold text-white">Oferta confusa</h3>
              <p className="mt-2 text-sm text-slate-300">
                El cliente entra, no entiende rápido el servicio y no contacta.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <h3 className="font-semibold text-white">Sin medición</h3>
              <p className="mt-2 text-sm text-slate-300">
                Llegan consultas, pero nadie sabe desde dónde ni qué página
                funciona mejor.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <h3 className="font-semibold text-white">Sin continuidad</h3>
              <p className="mt-2 text-sm text-slate-300">
                El sitio se publica una vez y luego queda desactualizado o
                abandonado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="bg-black py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionTitle
            center
            eyebrow="Servicios"
            title="Servicios simples, claros y fáciles de entender"
            desc="Trabajamos con una lógica modular: implementación, campañas y continuidad."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <LayoutTemplate className="mb-3 h-5 w-5 text-sky-400" />
              <h3 className="text-lg font-semibold text-white">
                Landing o sitio web para servicios
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Creamos una base digital clara para mostrar tu oferta, generar
                confianza y facilitar el contacto.
              </p>

              <ul className="mt-4 space-y-2">
                <CheckItem>Landing de captación</CheckItem>
                <CheckItem>Sitio institucional</CheckItem>
                <CheckItem>Formulario + WhatsApp</CheckItem>
                <CheckItem>SEO base e indexación</CheckItem>
                <CheckItem>Entrega documentada</CheckItem>
              </ul>
            </article>

            <article className="rounded-2xl border border-sky-400/30 bg-sky-500/10 p-6">
              <BarChart3 className="mb-3 h-5 w-5 text-sky-400" />
              <h3 className="text-lg font-semibold text-white">
                Medición y Google Ads
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Configuramos eventos y campañas para que puedas captar y medir
                consultas reales.
              </p>

              <ul className="mt-4 space-y-2">
                <CheckItem>Eventos medibles</CheckItem>
                <CheckItem>GA4 / Tag si aplica</CheckItem>
                <CheckItem>Google Ads Search</CheckItem>
                <CheckItem>Negativas base</CheckItem>
                <CheckItem>Optimización periódica</CheckItem>
              </ul>
            </article>

            <article className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <Wrench className="mb-3 h-5 w-5 text-sky-400" />
              <h3 className="text-lg font-semibold text-white">
                Operación mensual
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Mantenemos el sistema activo con soporte, ajustes y contenido
                básico.
              </p>

              <ul className="mt-4 space-y-2">
                <CheckItem>Hosting administrado</CheckItem>
                <CheckItem>Soporte mensual</CheckItem>
                <CheckItem>Ajustes menores</CheckItem>
                <CheckItem>Actualizaciones</CheckItem>
                <CheckItem>Continuidad comercial básica</CheckItem>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* PARA QUIÉN ES */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionTitle
            center
            eyebrow="Enfoque"
            title="Esto es para empresas de servicios. No para cualquier proyecto."
            desc="Buscamos trabajar donde sí tiene sentido construir un sistema simple de captación."
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
                <CheckItem>Negocios con capacidad de responder leads</CheckItem>
                <CheckItem>Proyectos con foco y objetivo definido</CheckItem>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <div className="flex items-center gap-2">
                <Ban className="h-5 w-5 text-sky-400" />
                <h3 className="font-semibold text-white">No hacemos</h3>
              </div>
              <ul className="mt-4 space-y-2">
                <CheckItem>E-commerce</CheckItem>
                <CheckItem>Apps o sistemas complejos</CheckItem>
                <CheckItem>Dashboards o portales a medida</CheckItem>
                <CheckItem>Marketing sin medición</CheckItem>
                <CheckItem>Proyectos sin responsable comercial</CheckItem>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MODELO */}
      <section className="bg-black py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionTitle
            center
            eyebrow="Modelo de trabajo"
            title="Tres capas simples"
            desc="Primero implementamos. Luego medimos. Después sostenemos."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <Coins className="mb-3 h-5 w-5 text-sky-400" />
              <h3 className="font-semibold text-white">1. Implementación</h3>
              <p className="mt-2 text-sm text-slate-300">
                Pago único por landing o sitio web.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <Search className="mb-3 h-5 w-5 text-sky-400" />
              <h3 className="font-semibold text-white">2. Performance</h3>
              <p className="mt-2 text-sm text-slate-300">
                Google Ads opcional si hay demanda y medición clara.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <Headphones className="mb-3 h-5 w-5 text-sky-400" />
              <h3 className="font-semibold text-white">3. Continuidad</h3>
              <p className="mt-2 text-sm text-slate-300">
                Soporte y ajustes mensuales para mantener el sistema activo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionTitle
            center
            eyebrow="Proceso"
            title="Proceso claro y rápido"
            desc="Sin complejidad innecesaria. Lo importante es publicar bien y medir desde el inicio."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <p className="font-semibold text-sky-300">01</p>
              <p className="mt-2 text-sm text-slate-300">
                Brief: servicio, ciudad y objetivo.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <p className="font-semibold text-sky-300">02</p>
              <p className="mt-2 text-sm text-slate-300">
                Estructura y copy con foco comercial.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <p className="font-semibold text-sky-300">03</p>
              <p className="mt-2 text-sm text-slate-300">
                Desarrollo, formularios y medición.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <p className="font-semibold text-sky-300">04</p>
              <p className="mt-2 text-sm text-slate-300">
                Publicación y continuidad mensual opcional.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-6">
            <div className="flex items-center gap-2">
              <Timer className="h-5 w-5 text-sky-400" />
              <h3 className="font-semibold text-white">Tiempos típicos</h3>
            </div>
            <p className="mt-2 text-sm text-slate-300">
              Landing simple: 7–10 días hábiles. Sitio institucional: 2–4
              semanas.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-black py-24 text-center">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            ¿Necesitas más consultas para tu servicio?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Cuéntanos qué vendes, en qué ciudad trabajas y qué objetivo tienes.
            Te proponemos una estructura simple y clara.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contacto#form"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3"
            >
              Pedir propuesta
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
            Tronx Strategy trabaja con servicios. No e-commerce. No sistemas
            complejos.
          </p>
        </div>
      </section>
    </>
  );
}

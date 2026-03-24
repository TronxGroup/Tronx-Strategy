// app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  LayoutTemplate,
  Zap,
  ShieldCheck,
  BarChart3,
  Headphones,
  Search,
  BadgeCheck,
  Ban,
  Timer,
  Coins,
  MessageSquareMore,
  FileText,
  Wrench,
} from "lucide-react";

const SITE_URL = "https://www.tronxstrategy.com";
const WHATSAPP_NUMBER = "56920080031";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tronx Strategy — Sistema de captación digital para empresas de servicios | Chile",
  description:
    "Diseñamos sistemas de captación digital para empresas de servicios: sitio web, estructura comercial, medición y Google Ads opcional para generar contactos reales.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Tronx Strategy — Sistema de captación digital para empresas de servicios",
    description:
      "Sitio, propuesta clara, medición y Google Ads opcional. Enfocado en empresas de servicios que necesitan leads, cotizaciones o agenda.",
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
    "Objetivo (leads / agenda / cotización):\n" +
    "Fecha ideal de publicación:\n\nGracias 🙌";

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
              Más que un sitio:
              <br />
              un <span className="text-sky-300">sistema real de captación</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
              Diseñamos una base comercial clara para empresas de servicios:
              propuesta de valor, páginas estratégicas, formularios o WhatsApp,
              medición real y Google Ads opcional para generar contactos
              medibles.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>Abogados</Pill>
              <Pill>Consultoría</Pill>
              <Pill>Salud</Pill>
              <Pill>Educación</Pill>
              <Pill>Servicios técnicos</Pill>
              <Pill>Instituciones</Pill>
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

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="font-semibold text-sky-300">Implementación</p>
                <p className="mt-1 text-sm text-slate-300">desde $290.000</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="font-semibold text-sky-300">Continuidad mensual</p>
                <p className="mt-1 text-sm text-slate-300">
                  soporte + contenidos
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="font-semibold text-sky-300">Performance opcional</p>
                <p className="mt-1 text-sm text-slate-300">
                  Google Ads Search
                </p>
              </div>
            </div>

            <p className="mt-5 text-xs text-slate-400">
              Valores netos + IVA. Alcance definido por escrito. Entrega
              documentada.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/60 p-8 shadow-xl backdrop-blur">
            <p className="text-sm font-medium text-sky-300">
              Qué resuelve este sistema
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                <div className="flex items-center gap-2">
                  <LayoutTemplate className="h-4 w-4 text-sky-300" />
                  <p className="font-semibold text-white">
                    Oferta más clara
                  </p>
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  Organizamos tus servicios, mensajes y llamados a la acción para
                  que el cliente entienda rápido qué haces y cómo contactarte.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                <div className="flex items-center gap-2">
                  <MessageSquareMore className="h-4 w-4 text-sky-300" />
                  <p className="font-semibold text-white">
                    Más consultas medibles
                  </p>
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  Formularios, WhatsApp y eventos configurados para saber qué
                  acciones generan contactos reales.
                </p>
              </div>

              <div className="rounded-xl border border-sky-400/30 bg-sky-500/10 p-4">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-sky-300" />
                  <p className="font-semibold text-white">
                    Base lista para crecer
                  </p>
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  Si tu servicio ya tiene demanda, agregamos Google Ads Search
                  para acelerar captación con una estructura que sí se puede
                  optimizar.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                <div className="flex items-center gap-2">
                  <Headphones className="h-4 w-4 text-sky-300" />
                  <p className="font-semibold text-white">
                    Continuidad mensual
                  </p>
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  Hosting, soporte y contenidos para que el sitio no quede
                  abandonado después de publicar.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              <Link
                href="/servicios"
                className="btn-ghost bg-white/10 px-6 py-3 text-center hover:bg-white/20"
              >
                Ver planes de implementación
              </Link>
              <Link
                href="/contacto#form"
                className="btn-primary inline-flex w-full items-center justify-center gap-2 text-center"
              >
                Solicitar propuesta
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <p className="mt-4 text-xs text-slate-400">
              Enfoque: empresas de servicios. No e-commerce. No sistemas
              complejos.
            </p>
          </div>
        </div>
      </section>

      {/* RESULTADOS / PROBLEMA */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionTitle
            center
            eyebrow="Qué hacemos"
            title="Tronx Strategy no parte desde una web; parte desde un problema comercial"
            desc="Cuando una empresa de servicios depende solo de referidos, tiene una oferta confusa o no sabe qué canal trae consultas, necesita una base comercial clara y medible."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <h3 className="font-semibold text-white">
                Ordenar la propuesta
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Definimos qué servicio mostrar, cómo presentarlo y qué llamada a
                la acción debe tener prioridad.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <h3 className="font-semibold text-white">
                Generar contactos medibles
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Formularios, WhatsApp y eventos configurados para registrar
                leads y entender qué sí funciona.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <h3 className="font-semibold text-white">
                Dejar una base lista para crecer
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Una estructura sólida para sumar campañas, contenidos y
                optimización sin partir de cero cada vez.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUIÉN ES / NO ES */}
      <section className="bg-black py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionTitle
            center
            eyebrow="Enfoque"
            title="Pensado para empresas de servicios, no para todo tipo de proyecto"
            desc="Trabajamos donde tiene sentido construir un sistema de captación: cotizaciones, agenda, consultas o contacto comercial."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 text-sky-400" />
                <h3 className="font-semibold text-white">Sí es para ti si...</h3>
              </div>

              <ul className="mt-4 space-y-2">
                <CheckItem>
                  Vendes un servicio y necesitas más cotizaciones, consultas o
                  reuniones
                </CheckItem>
                <CheckItem>
                  Tu empresa necesita una presencia más clara y profesional
                </CheckItem>
                <CheckItem>
                  Quieres medir formularios, WhatsApp o conversiones reales
                </CheckItem>
                <CheckItem>
                  Tienes capacidad comercial para responder leads
                </CheckItem>
                <CheckItem>
                  Quieres una base lista para crecer con Ads o contenidos
                </CheckItem>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <div className="flex items-center gap-2">
                <Ban className="h-5 w-5 text-sky-400" />
                <h3 className="font-semibold text-white">
                  No es para ti si...
                </h3>
              </div>

              <ul className="mt-4 space-y-2">
                <CheckItem>
                  Buscas e-commerce, pagos online o despacho
                </CheckItem>
                <CheckItem>
                  Necesitas un sistema complejo a medida, portal o app
                </CheckItem>
                <CheckItem>
                  No hay una oferta comercial definida ni responsable de
                  respuesta
                </CheckItem>
                <CheckItem>
                  Quieres “marketing” sin medición ni criterio de negocio
                </CheckItem>
                <CheckItem>
                  Estás cotizando solo por el precio más bajo
                </CheckItem>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionTitle
            center
            eyebrow="Planes de implementación"
            title="Tres niveles claros para salir a vender con una base real"
            desc="Pago único por implementación. Luego, continuidad mensual opcional. Google Ads se activa solo cuando tiene sentido."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-white">
                  Pack Start
                </h3>
                <LayoutTemplate className="h-5 w-5 text-sky-400" />
              </div>
              <p className="mt-1 font-semibold text-sky-300">Desde $290.000</p>
              <p className="mt-2 text-sm text-slate-300">
                Para salir rápido con una landing clara y lista para recibir
                consultas.
              </p>

              <ul className="mt-4 space-y-2">
                <CheckItem>
                  1–3 secciones enfocadas en una oferta principal
                </CheckItem>
                <CheckItem>Formulario + WhatsApp</CheckItem>
                <CheckItem>SEO base + indexación</CheckItem>
                <CheckItem>Configuración técnica esencial</CheckItem>
                <CheckItem>Entrega documentada</CheckItem>
              </ul>

              <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                Ideal para: 1 servicio, 1 ciudad, 1 objetivo.
              </div>

              <Link
                href="/contacto#form"
                className="btn-primary mt-6 inline-flex w-full items-center justify-center gap-2 text-center"
              >
                Cotizar
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>

            <article className="rounded-2xl border border-sky-400/40 bg-sky-500/10 p-6 shadow-xl shadow-sky-500/10">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-white">
                  Pack Pro (recomendado)
                </h3>
                <Zap className="h-5 w-5 text-sky-400" />
              </div>
              <p className="mt-1 font-semibold text-sky-300">
                $590.000 – $690.000
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Sitio completo para servicios con estructura profesional,
                medición y base lista para performance.
              </p>

              <ul className="mt-4 space-y-2">
                <CheckItem>
                  5–7 páginas: servicios, sobre, casos, FAQ, contacto
                </CheckItem>
                <CheckItem>
                  Estructura comercial más clara y más sólida
                </CheckItem>
                <CheckItem>
                  Eventos medibles: formulario, WhatsApp, contacto
                </CheckItem>
                <CheckItem>GA4 + GTM / Tag de Ads si aplica</CheckItem>
                <CheckItem>
                  Integración básica con correo, planilla o CRM simple
                </CheckItem>
              </ul>

              <div className="mt-5 rounded-xl border border-sky-400/20 bg-black/20 p-4 text-sm text-slate-200">
                Ideal para abogados, consultorías, clínicas, instituciones y
                equipos comerciales.
              </div>

              <Link
                href="/contacto#form"
                className="btn-primary mt-6 inline-flex w-full items-center justify-center gap-2 text-center"
              >
                Cotizar este plan
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>

            <article className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-white">
                  Pack Premium
                </h3>
                <ShieldCheck className="h-5 w-5 text-sky-400" />
              </div>
              <p className="mt-1 font-semibold text-sky-300">
                $990.000 – $1.500.000
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Para organizaciones con varios servicios, más prueba social y
                una estructura más trabajada.
              </p>

              <ul className="mt-4 space-y-2">
                <CheckItem>
                  8–12 páginas con servicios y sub-servicios
                </CheckItem>
                <CheckItem>Blog o recursos administrables</CheckItem>
                <CheckItem>
                  UX más cuidada: jerarquía, microcopy y estructura
                </CheckItem>
                <CheckItem>
                  Integraciones avanzadas: CRM, calendarios, formularios
                </CheckItem>
                <CheckItem>1 mes de soporte incluido</CheckItem>
              </ul>

              <Link
                href="/contacto#form"
                className="btn-primary mt-6 inline-flex w-full items-center justify-center gap-2 text-center"
              >
                Cotizar
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/servicios"
              className="btn-ghost inline-flex items-center gap-2 bg-white/10 px-6 py-3 hover:bg-white/20"
            >
              Ver detalle de planes
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ADS */}
      <section className="bg-black py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionTitle
            center
            eyebrow="Google Ads opcional"
            title="Performance cuando ya existe intención de búsqueda"
            desc="Search no reemplaza una mala oferta, pero acelera una buena. Lo activamos cuando tu servicio ya tiene demanda y existe una base clara para medir leads."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <Search className="mb-3 h-5 w-5 text-sky-400" />
              <h3 className="text-sm font-semibold text-white">
                Setup Ads
              </h3>
              <p className="mt-2 text-sky-300">$600.000 + IVA</p>
              <ul className="mt-4 space-y-2">
                <CheckItem>Estructura Search por intención</CheckItem>
                <CheckItem>Anuncios + extensiones</CheckItem>
                <CheckItem>Negativas base</CheckItem>
                <CheckItem>Conversión lead medible</CheckItem>
                <CheckItem>QA y checklist de lanzamiento</CheckItem>
              </ul>
            </article>

            <article className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <Wrench className="mb-3 h-5 w-5 text-sky-400" />
              <h3 className="text-sm font-semibold text-white">
                Gestión mensual
              </h3>
              <p className="mt-2 text-sky-300">$350.000 + IVA / mes</p>
              <ul className="mt-4 space-y-2">
                <CheckItem>Optimización cada 7 días</CheckItem>
                <CheckItem>Negativas + términos de búsqueda</CheckItem>
                <CheckItem>Iteración de anuncios</CheckItem>
                <CheckItem>Reporte cada 14 días</CheckItem>
                <CheckItem>Mejoras básicas de landing</CheckItem>
              </ul>
            </article>

            <article className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <Coins className="mb-3 h-5 w-5 text-sky-400" />
              <h3 className="text-sm font-semibold text-white">
                Presupuesto sugerido
              </h3>
              <p className="mt-2 text-sky-300">Desde $150.000 / mes</p>
              <p className="mt-2 text-sm text-slate-300">
                El presupuesto de Ads lo define el cliente y se paga
                directamente a Google o se reembolsa contra comprobante.
              </p>

              <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                Recomendado para servicios con decisión relativamente rápida,
                búsqueda activa y foco comercial claro.
              </div>
            </article>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950 p-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-sky-400" />
              <h3 className="text-base font-semibold text-white">
                Qué sí garantiza el sistema
              </h3>
            </div>

            <p className="mt-2 text-sm text-slate-300">
              No prometemos resultados mágicos. Diseñamos una estructura clara,
              medible y optimizable para que el canal tenga sentido de negocio.
            </p>

            <ul className="mt-4 grid gap-2 md:grid-cols-2">
              <CheckItem>Conversión registrada como lead</CheckItem>
              <CheckItem>Atribución más clara</CheckItem>
              <CheckItem>Protección básica de presupuesto</CheckItem>
              <CheckItem>Iteración sobre datos reales</CheckItem>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTINUIDAD */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionTitle
            center
            eyebrow="Continuidad mensual"
            title="La diferencia entre publicar un sitio y mantener una herramienta comercial activa"
            desc="Después de implementar, la mayoría de los sitios se abandona. Por eso ofrecemos continuidad técnica, soporte y actualización básica para sostener el sistema en el tiempo."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <Headphones className="mb-3 h-5 w-5 text-sky-400" />
              <h3 className="text-sm font-semibold text-white">
                Soporte mensual
              </h3>
              <p className="mt-2 text-sky-300">Desde $29.990 / mes</p>
              <p className="mt-2 text-sm text-slate-300">
                Ajustes menores, acompañamiento y estabilidad operativa.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <FileText className="mb-3 h-5 w-5 text-sky-400" />
              <h3 className="text-sm font-semibold text-white">
                Gestión de contenidos
              </h3>
              <p className="mt-2 text-sky-300">Desde $80.000 / mes</p>
              <p className="mt-2 text-sm text-slate-300">
                Publicación y actualización institucional para que el sitio siga
                vivo y vigente.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <BarChart3 className="mb-3 h-5 w-5 text-sky-400" />
              <h3 className="text-sm font-semibold text-white">
                Continuidad comercial
              </h3>
              <p className="mt-2 text-sky-300">Según alcance</p>
              <p className="mt-2 text-sm text-slate-300">
                Ajustes sobre landings, mensajes, CTA y apoyo a campañas cuando
                el sistema ya está en operación.
              </p>
            </article>
          </div>

          <div className="mt-8 rounded-2xl border border-sky-400/20 bg-sky-500/10 p-6">
            <p className="text-sm text-slate-200">Plan mensual recomendado</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">
              Hosting + soporte + contenidos
            </h3>
            <p className="mt-3 font-semibold text-sky-300">
              Desde $119.990 / mes
            </p>

            <Link
              href="/contacto#form"
              className="btn-primary mt-5 inline-flex items-center gap-2 px-6 py-3"
            >
              Solicitar plan mensual
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="bg-black py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionTitle
            center
            eyebrow="Proceso"
            title="Un proceso claro, sin humo ni complejidad innecesaria"
            desc="Buscamos velocidad, foco y una implementación que sí tenga lógica comercial."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6 text-sm text-slate-200">
              <p className="font-semibold text-sky-300">01</p>
              <p className="mt-2">
                Brief, servicio principal, ciudad y objetivo comercial.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6 text-sm text-slate-200">
              <p className="font-semibold text-sky-300">02</p>
              <p className="mt-2">
                Estructura, copy y jerarquía con foco en claridad y conversión.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6 text-sm text-slate-200">
              <p className="font-semibold text-sky-300">03</p>
              <p className="mt-2">
                Desarrollo, tracking, pruebas y validación técnica.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6 text-sm text-slate-200">
              <p className="font-semibold text-sky-300">04</p>
              <p className="mt-2">
                Publicación, checklist final y entrega documentada.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-950 p-6 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <Timer className="h-5 w-5 text-sky-400" />
                <p className="font-semibold text-white">Tiempos típicos</p>
              </div>
              <p className="mt-2 text-slate-300">
                Start: 7–10 días hábiles · Pro: 2–4 semanas · Premium: 3–6
                semanas.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950 p-6 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <Coins className="h-5 w-5 text-sky-400" />
                <p className="font-semibold text-white">Precios claros</p>
              </div>
              <p className="mt-2 text-slate-300">
                El alcance se define antes de empezar. Sin ambigüedades ni
                promesas vagas.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950 p-6 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <Search className="h-5 w-5 text-sky-400" />
                <p className="font-semibold text-white">Ads si conviene</p>
              </div>
              <p className="mt-2 text-slate-300">
                Activamos performance cuando la oferta, la estructura y la
                medición ya están bien resueltas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-slate-950 py-24 text-center">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            ¿Listo para convertir tu presencia digital en una base comercial real?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Cuéntanos tu servicio, ciudad y objetivo. Te respondemos con una
            propuesta clara: alcance, tiempos y recomendación según tu etapa.
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

            <Link
              href="/servicios#ads"
              className="btn-ghost inline-flex items-center gap-2 bg-white/10 px-6 py-3 hover:bg-white/20"
            >
              Ver Google Ads
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-6 text-xs text-slate-400">
            Trabajamos con empresas de servicios. No e-commerce. No sistemas
            complejos.
          </p>
        </div>
      </section>
    </>
  );
}

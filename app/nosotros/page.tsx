// app/nosotros/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  LayoutTemplate,
  BarChart3,
  Headphones,
  Ban,
  BadgeCheck,
  FileText,
  Search,
  MessageSquareMore,
} from "lucide-react";

const SITE_URL = "https://www.tronxstrategy.com";
const WHATSAPP_NUMBER = "56920080031";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Nosotros — Tronx Strategy | Base comercial digital para empresas de servicios",
  description:
    "Conoce el enfoque de Tronx Strategy: estructura clara, textos base, medición, activación de captación y continuidad mensual para empresas de servicios.",
  alternates: {
    canonical: "/nosotros",
  },
  openGraph: {
    title: "Nosotros — Tronx Strategy",
    description:
      "Tronx Strategy diseña bases comerciales digitales para empresas de servicios.",
    url: "/nosotros",
    type: "website",
    locale: "es_CL",
    siteName: "Tronx Strategy",
  },
};

function buildWhatsAppLink() {
  const text =
    "Hola 👋 Quiero conversar con Tronx Strategy.\n\n" +
    "Empresa / Proyecto:\n" +
    "Servicio principal:\n" +
    "Ciudad:\n" +
    "Objetivo (cotizaciones / consultas / agenda):\n\n" +
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

export default function NosotrosPage() {
  const waLink = buildWhatsAppLink();

  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="border-b border-white/10 bg-slate-950 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionTitle
            eyebrow="Nosotros"
            title="Tronx Strategy existe para ayudar a empresas de servicios a captar mejor"
            desc="Diseñamos bases comerciales digitales para empresas de servicios: estructura clara, textos base, medición, activación de captación y continuidad mensual. No buscamos hacer de todo; buscamos resolver bien un problema concreto."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <LayoutTemplate className="mb-3 h-5 w-5 text-sky-400" />
              <h2 className="font-semibold text-white">Claridad comercial</h2>
              <p className="mt-2 text-sm text-slate-300">
                Ordenamos la oferta para que el cliente entienda rápido qué
                servicio ofreces y cómo contactarte.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <BarChart3 className="mb-3 h-5 w-5 text-sky-400" />
              <h2 className="font-semibold text-white">Medición real</h2>
              <p className="mt-2 text-sm text-slate-300">
                Formularios, WhatsApp y campañas con trazabilidad para saber qué
                sí funciona.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <Headphones className="mb-3 h-5 w-5 text-sky-400" />
              <h2 className="font-semibold text-white">Continuidad</h2>
              <p className="mt-2 text-sm text-slate-300">
                Sitios activos, mantenidos y listos para seguir operando en el
                tiempo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ENFOQUE */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionTitle
            eyebrow="Nuestro enfoque"
            title="Menos humo. Más estructura útil."
            desc="Creemos que muchas empresas de servicios no necesitan un proyecto digital complejo. Necesitan una base clara, bien ejecutada y fácil de operar."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
              <h2 className="text-xl font-semibold text-white">
                Qué buscamos hacer
              </h2>
              <ul className="mt-6 space-y-2">
                <CheckItem>Mostrar mejor la oferta de una empresa</CheckItem>
                <CheckItem>Ayudar a explicar mejor el servicio</CheckItem>
                <CheckItem>Ordenar textos y llamados a la acción</CheckItem>
                <CheckItem>Facilitar el contacto y la conversión</CheckItem>
                <CheckItem>Dejar medición básica bien implementada</CheckItem>
                <CheckItem>Preparar una base lista para campañas</CheckItem>
                <CheckItem>Evitar sitios abandonados o confusos</CheckItem>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
              <h2 className="text-xl font-semibold text-white">
                Qué evitamos
              </h2>
              <ul className="mt-6 space-y-2">
                <CheckItem>Promesas exageradas</CheckItem>
                <CheckItem>Proyectos sobredimensionados</CheckItem>
                <CheckItem>Marketing sin medición</CheckItem>
                <CheckItem>Complejidad innecesaria</CheckItem>
                <CheckItem>Vender servicios que no operamos bien</CheckItem>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUIÉN */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionTitle
            center
            eyebrow="Para quién es Tronx Strategy"
            title="Trabajamos mejor con empresas de servicios e instituciones"
            desc="Especialmente cuando el objetivo es claro: generar consultas, cotizaciones o agenda."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 text-sky-400" />
                <h3 className="font-semibold text-white">Sí es para ti si...</h3>
              </div>

              <ul className="mt-4 space-y-2">
                <CheckItem>Vendes un servicio claro</CheckItem>
                <CheckItem>Necesitas más consultas o cotizaciones</CheckItem>
                <CheckItem>Quieres una estructura profesional</CheckItem>
                <CheckItem>Te interesa medir contactos reales</CheckItem>
                <CheckItem>Tienes capacidad de responder leads</CheckItem>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <div className="flex items-center gap-2">
                <Ban className="h-5 w-5 text-sky-400" />
                <h3 className="font-semibold text-white">No es para ti si...</h3>
              </div>

              <ul className="mt-4 space-y-2">
                <CheckItem>Buscas e-commerce o tienda online</CheckItem>
                <CheckItem>Necesitas una app o sistema complejo</CheckItem>
                <CheckItem>No hay responsable comercial</CheckItem>
                <CheckItem>Solo estás comparando por precio</CheckItem>
                <CheckItem>Buscas “marketing” sin foco ni medición</CheckItem>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COMO TRABAJAMOS */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionTitle
            eyebrow="Cómo trabajamos"
            title="Tres capas simples"
            desc="Nuestro trabajo se organiza en una lógica fácil de entender y fácil de sostener."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <LayoutTemplate className="mb-3 h-5 w-5 text-sky-400" />
              <h3 className="font-semibold text-white">
                1. Base comercial digital
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Landing o sitio web con estructura clara, textos base y foco en
                contacto.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <Search className="mb-3 h-5 w-5 text-sky-400" />
              <h3 className="font-semibold text-white">
                2. Activación de captación
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Tracking y Google Ads opcional para acelerar consultas cuando
                conviene.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <Headphones className="mb-3 h-5 w-5 text-sky-400" />
              <h3 className="font-semibold text-white">
                3. Continuidad mensual
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Soporte, ajustes y actualizaciones para que el sistema siga
                funcionando.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPIOS */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionTitle
            eyebrow="Principios"
            title="Qué valoramos al construir un proyecto"
            desc="Más que estética o volumen de funciones, nos importa que la estructura tenga sentido."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <ShieldCheck className="mb-3 h-5 w-5 text-sky-400" />
              <h3 className="font-semibold text-white">Claridad</h3>
              <p className="mt-2 text-sm text-slate-300">
                Que el servicio se entienda rápido.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <FileText className="mb-3 h-5 w-5 text-sky-400" />
              <h3 className="font-semibold text-white">Mensajes útiles</h3>
              <p className="mt-2 text-sm text-slate-300">
                Que los textos y llamados a la acción tengan lógica comercial.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <BarChart3 className="mb-3 h-5 w-5 text-sky-400" />
              <h3 className="font-semibold text-white">Medición</h3>
              <p className="mt-2 text-sm text-slate-300">
                Que exista trazabilidad mínima real.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <Headphones className="mb-3 h-5 w-5 text-sky-400" />
              <h3 className="font-semibold text-white">Continuidad</h3>
              <p className="mt-2 text-sm text-slate-300">
                Que el sitio pueda seguir vivo después de publicar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAL */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionTitle
            eyebrow="Nuestro diferencial"
            title="No solo armamos páginas: ayudamos a ordenar la oferta"
            desc="El valor de Tronx Strategy no está solo en publicar un sitio, sino en dejar una base más clara, mejor explicada y más lista para captar."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
              <LayoutTemplate className="mb-3 h-5 w-5 text-sky-400" />
              <h3 className="font-semibold text-white">Base clara</h3>
              <p className="mt-2 text-sm text-slate-300">
                Estructuramos el sitio para que el servicio se entienda y el
                contacto sea simple.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
              <MessageSquareMore className="mb-3 h-5 w-5 text-sky-400" />
              <h3 className="font-semibold text-white">Mejor mensaje</h3>
              <p className="mt-2 text-sm text-slate-300">
                Ayudamos con textos base, títulos y llamados a la acción para
                mejorar claridad comercial.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
              <Search className="mb-3 h-5 w-5 text-sky-400" />
              <h3 className="font-semibold text-white">Más preparación</h3>
              <p className="mt-2 text-sm text-slate-300">
                Dejamos una estructura lista para medir, activar campañas y
                seguir creciendo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section className="bg-slate-950 py-24 text-center">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            ¿Conversamos tu proyecto?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Si tu empresa necesita una base digital más clara para captar mejor,
            podemos diseñar una estructura simple, medible y fácil de sostener.
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
            Tronx Strategy trabaja con empresas de servicios e instituciones. No
            e-commerce. No sistemas complejos.
          </p>
        </div>
      </section>
    </main>
  );
}

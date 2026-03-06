// app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Headphones,
  FileText,
  ShieldCheck,
  BarChart3,
  LayoutTemplate,
  Zap,
  Coins,
  Search,
  Ban,
  Timer,
  BadgeCheck,
} from "lucide-react";

const SITE_URL = "https://www.tronxstrategy.com";
const WHATSAPP_NUMBER = "56920080031";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tronx Strategy — Sitios para servicios + Google Ads | Chile",
  description:
    "Sitios web profesionales para servicios (no e-commerce). Landing/sitio institucional + medición + Google Ads opcional para generar leads.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Tronx Strategy — Sitios para servicios + Google Ads",
    description:
      "Implementación web + operación mensual + performance opcional. Enfocado en servicios: abogados, consultoría, salud, educación, instituciones.",
    url: "/",
    type: "website",
  },
};

function buildWhatsAppLink() {
  const text =
    "Hola 👋 Quiero cotizar un sitio web para servicios + (opcional) Google Ads.\n\n" +
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
      <CheckCircle2 className="w-4 h-4 mt-[2px] text-sky-400" />
      <span>{children}</span>
    </li>
  );
}

export default function HomePage() {
  const waLink = buildWhatsAppLink();

  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: "url('/BG_hero_strategy.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative max-w-6xl mx-auto px-4 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-sky-300 font-semibold">
              Sitios para servicios · No e-commerce
            </p>

            <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-white leading-tight">
              Un sitio profesional que{" "}
              <span className="text-sky-300">genera contactos</span>
              <br />
              (y Google Ads opcional)
            </h1>

            <p className="mt-5 text-lg text-slate-200 max-w-xl">
              Construimos landing o sitio institucional para servicios con estructura clara, formularios/WhatsApp y
              medición real. Si tu servicio ya tiene demanda, activamos Google Ads Search para captar leads de intención
              alta.
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
              <Link href="/contacto#form" className="btn-primary px-6 py-3 text-base inline-flex items-center gap-2">
                Solicitar propuesta
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost bg-white/10 hover:bg-white/20 px-6 py-3 text-base inline-flex items-center gap-2"
              >
                WhatsApp directo
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-6 grid sm:grid-cols-3 gap-3 text-sm text-slate-200">
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="text-sky-300 font-semibold">Implementación</p>
                <p className="mt-1 text-slate-300">desde $290.000</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="text-sky-300 font-semibold">Operación mensual</p>
                <p className="mt-1 text-slate-300">hosting + soporte</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="text-sky-300 font-semibold">Performance (opcional)</p>
                <p className="mt-1 text-slate-300">Google Ads Search</p>
              </div>
            </div>

            <p className="mt-5 text-xs text-slate-400">
              Valores netos + IVA. Alcance definido por escrito. Entrega documentada.
            </p>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-black/60 backdrop-blur rounded-2xl border border-white/10 p-8 shadow-xl">
            <h2 className="text-2xl font-semibold text-white">Packs para servicios</h2>
            <p className="mt-2 text-sm text-slate-300">
              Tres niveles claros. Luego, operación mensual opcional.
            </p>

            <div className="mt-6 space-y-4 text-sm">
              <div className="p-4 border border-white/10 rounded-xl bg-black/40">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-white">Pack Start</p>
                  <LayoutTemplate className="w-4 h-4 text-sky-300" />
                </div>
                <p className="text-sky-300 font-semibold">Desde $290.000</p>
                <p className="text-slate-300 mt-1">1–3 secciones + formulario + WhatsApp.</p>
              </div>

              <div className="p-4 border border-sky-400/40 rounded-xl bg-sky-500/10">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-white">Pack Pro (recomendado)</p>
                  <Zap className="w-4 h-4 text-sky-300" />
                </div>
                <p className="text-sky-300 font-semibold">$590.000 – $690.000</p>
                <p className="text-slate-300 mt-1">
                  5–7 páginas + medición de eventos + sección administrable.
                </p>
              </div>

              <div className="p-4 border border-white/10 rounded-xl bg-black/40">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-white">Pack Premium</p>
                  <ShieldCheck className="w-4 h-4 text-sky-300" />
                </div>
                <p className="text-sky-300 font-semibold">$990.000 – $1.500.000</p>
                <p className="text-slate-300 mt-1">8–12 páginas + UX optimizada + integraciones.</p>
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              <Link href="/servicios" className="btn-ghost bg-white/10 hover:bg-white/20 px-6 py-3 text-center">
                Ver detalle de packs
              </Link>
              <Link href="/contacto#form" className="btn-primary w-full text-center inline-flex justify-center items-center gap-2">
                Solicitar propuesta
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="mt-4 text-xs text-slate-400">
              Enfoque: sitios de servicios. No e-commerce. No sistemas complejos.
            </p>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATOR */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-semibold text-white text-center">
            No es “un sitio bonito”: es un sistema para vender servicios
          </h2>

          <p className="text-slate-300 text-center mt-4 max-w-3xl mx-auto">
            Estructura clara + medición + operación mensual opcional. Si agregas performance, captas demanda existente con
            Google Search.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-sm text-slate-200">
            <div className="p-6 border border-white/10 rounded-2xl bg-black/40">
              <div className="flex items-center gap-2">
                <Cloud className="w-5 h-5 text-sky-400" />
                <h3 className="font-semibold text-white">Infraestructura moderna</h3>
              </div>
              <p className="mt-2 text-slate-300">
                Next.js + Vercel + Cloudflare para rendimiento, seguridad y estabilidad.
              </p>
            </div>

            <div className="p-6 border border-white/10 rounded-2xl bg-black/40">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-sky-400" />
                <h3 className="font-semibold text-white">Medición real</h3>
              </div>
              <p className="mt-2 text-slate-300">
                Formulario/WhatsApp medibles. Atribución para entender qué trae leads.
              </p>
            </div>

            <div className="p-6 border border-white/10 rounded-2xl bg-black/40">
              <div className="flex items-center gap-2">
                <Headphones className="w-5 h-5 text-sky-400" />
                <h3 className="font-semibold text-white">Continuidad mensual</h3>
              </div>
              <p className="mt-2 text-slate-300">
                Hosting administrado, soporte y contenidos para que no quede “abandonado”.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO / DON'T */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-semibold text-white text-center">Enfoque claro: servicios</h2>
          <p className="text-slate-300 text-center mt-4 max-w-3xl mx-auto">
            Trabajamos con ofertas de servicios que necesitan leads: cotizaciones, agenda, consultas.
          </p>

          <div className="mt-12 grid lg:grid-cols-2 gap-6 text-sm text-slate-200">
            <div className="p-6 border border-white/10 rounded-2xl bg-black/40">
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-5 h-5 text-sky-400" />
                <h3 className="font-semibold text-white">Sí hacemos</h3>
              </div>
              <ul className="mt-4 space-y-2">
                <CheckItem>Landings de captación (1 servicio / 1 oferta)</CheckItem>
                <CheckItem>Sitios institucionales (5–12 páginas)</CheckItem>
                <CheckItem>Casos, testimonios, FAQ y páginas de servicio</CheckItem>
                <CheckItem>Formularios, WhatsApp y tracking de conversiones</CheckItem>
                <CheckItem>Google Ads Search opcional (alta intención)</CheckItem>
              </ul>
            </div>

            <div className="p-6 border border-white/10 rounded-2xl bg-black/40">
              <div className="flex items-center gap-2">
                <Ban className="w-5 h-5 text-sky-400" />
                <h3 className="font-semibold text-white">No hacemos</h3>
              </div>
              <ul className="mt-4 space-y-2">
                <CheckItem>E-commerce / pagos / despacho</CheckItem>
                <CheckItem>Sistemas complejos a medida (apps, portales, dashboards)</CheckItem>
                <CheckItem>Proyectos sin dueño comercial (sin respuesta a leads)</CheckItem>
                <CheckItem>“Marketing sin medición”</CheckItem>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-semibold text-white text-center">Proceso claro (sin humo)</h2>

          <div className="mt-12 grid md:grid-cols-4 gap-6 text-sm text-slate-200">
            <div className="p-6 border border-white/10 rounded-2xl bg-black/40">
              <p className="text-sky-300 font-semibold">01</p>
              <p className="mt-2">Brief y propuesta de valor (servicio, ciudad, objetivo).</p>
            </div>
            <div className="p-6 border border-white/10 rounded-2xl bg-black/40">
              <p className="text-sky-300 font-semibold">02</p>
              <p className="mt-2">Estructura + copy + diseño (decisión rápida).</p>
            </div>
            <div className="p-6 border border-white/10 rounded-2xl bg-black/40">
              <p className="text-sky-300 font-semibold">03</p>
              <p className="mt-2">Desarrollo + tracking + pruebas.</p>
            </div>
            <div className="p-6 border border-white/10 rounded-2xl bg-black/40">
              <p className="text-sky-300 font-semibold">04</p>
              <p className="mt-2">Publicación + checklist + entrega documentada.</p>
            </div>
          </div>

          <div className="mt-10 grid lg:grid-cols-3 gap-6 text-sm">
            <div className="p-6 border border-white/10 rounded-2xl bg-black/40 text-slate-200">
              <div className="flex items-center gap-2">
                <Timer className="w-5 h-5 text-sky-400" />
                <p className="font-semibold text-white">Tiempos típicos</p>
              </div>
              <p className="mt-2 text-slate-300">
                Start: 7–10 días hábiles · Pro: 2–4 semanas · Premium: 3–6 semanas (según contenido).
              </p>
            </div>

            <div className="p-6 border border-white/10 rounded-2xl bg-black/40 text-slate-200">
              <div className="flex items-center gap-2">
                <Coins className="w-5 h-5 text-sky-400" />
                <p className="font-semibold text-white">Precios claros</p>
              </div>
              <p className="mt-2 text-slate-300">
                Rango según alcance. Todo queda definido por escrito antes de empezar.
              </p>
            </div>

            <div className="p-6 border border-white/10 rounded-2xl bg-black/40 text-slate-200">
              <div className="flex items-center gap-2">
                <Search className="w-5 h-5 text-sky-400" />
                <p className="font-semibold text-white">Si activas Ads</p>
              </div>
              <p className="mt-2 text-slate-300">
                Setup + optimización semanal + reporte quincenal. Captamos demanda existente (Search).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-black text-center">
        <h2 className="text-3xl font-semibold text-white">¿Listo para vender servicios con un sistema real?</h2>

        <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
          Cuéntanos tu servicio, ciudad y objetivo. Te respondemos con una propuesta clara (alcance + tiempos + valor).
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/contacto#form" className="btn-primary px-6 py-3 inline-flex items-center gap-2">
            Pedir propuesta
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost bg-white/10 hover:bg-white/20 px-6 py-3 inline-flex items-center gap-2"
          >
            WhatsApp
            <ArrowRight className="w-4 h-4" />
          </a>

          <Link
            href="/servicios#ads"
            className="btn-ghost bg-white/10 hover:bg-white/20 px-6 py-3 inline-flex items-center gap-2"
          >
            Ver Google Ads (opcional)
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

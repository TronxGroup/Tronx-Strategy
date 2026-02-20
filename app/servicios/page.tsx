"use client";

import Link from "next/link";
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
} from "lucide-react";

function SectionHeader({
  title,
  desc,
}: {
  title: string;
  desc?: string;
}) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">
        {title}
      </h2>
      {desc && (
        <p className="mt-3 text-sm md:text-base text-slate-300">{desc}</p>
      )}
    </div>
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

export default function ServiciosPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/BG_servicios_strategy.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 max-w-4xl px-6 py-28">
          <p className="text-xs uppercase tracking-[0.25em] text-sky-300 font-semibold">
            Implementación + Operación mensual
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-white leading-tight">
            Sitios web profesionales
            <span className="text-sky-300"> con continuidad real</span>
          </h1>

          <p className="mt-5 text-slate-200 max-w-2xl mx-auto">
            No solo construimos tu sitio.
            Lo dejamos funcionando, medible y con operación mensual clara
            para que no quede abandonado.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contacto#form"
              className="btn-primary px-6 py-3 inline-flex items-center gap-2"
            >
              Solicitar propuesta
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="#mensual"
              className="btn-ghost bg-white/10 hover:bg-white/20 px-6 py-3 inline-flex items-center gap-2"
            >
              Ver operación mensual
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section className="section mt-20 space-y-12">
        <SectionHeader
          title="Planes de implementación"
          desc="Pago único por construcción. Luego, operación mensual opcional."
        />

        <div className="grid gap-6 lg:grid-cols-3">

          {/* BASICO */}
          <article className="card-surface p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-slate-50">
              Plan Básico
            </h3>
            <p className="text-sky-400 font-semibold mt-1">$290.000</p>

            <ul className="mt-4 space-y-2">
              <CheckItem>1–3 secciones</CheckItem>
              <CheckItem>Formulario + WhatsApp</CheckItem>
              <CheckItem>SEO base</CheckItem>
              <CheckItem>SSL + configuración técnica</CheckItem>
              <CheckItem>Entrega documentada</CheckItem>
            </ul>

            <Link
              href="/contacto#form"
              className="btn-primary w-full mt-6 text-center inline-flex justify-center items-center gap-2"
            >
              Cotizar
              <ArrowRight className="w-4 h-4" />
            </Link>
          </article>

          {/* MEDIO */}
          <article className="card-surface p-6 border border-sky-400/70 shadow-soft-glow shadow-sky-500/20">
            <h3 className="text-lg font-semibold text-slate-50">
              Plan Medio (recomendado)
            </h3>
            <p className="text-sky-400 font-semibold mt-1">
              $590.000 – $690.000
            </p>

            <ul className="mt-4 space-y-2">
              <CheckItem>5–7 páginas</CheckItem>
              <CheckItem>Noticias administrable</CheckItem>
              <CheckItem>GA4 + GTM</CheckItem>
              <CheckItem>Eventos medibles</CheckItem>
              <CheckItem>Integración básica CRM</CheckItem>
            </ul>

            <Link
              href="/contacto#form"
              className="btn-primary w-full mt-6 text-center inline-flex justify-center items-center gap-2"
            >
              Cotizar este plan
              <ArrowRight className="w-4 h-4" />
            </Link>
          </article>

          {/* PREMIUM */}
          <article className="card-surface p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-slate-50">
              Plan Premium
            </h3>
            <p className="text-sky-400 font-semibold mt-1">
              $990.000 – $1.500.000
            </p>

            <ul className="mt-4 space-y-2">
              <CheckItem>8–12 páginas</CheckItem>
              <CheckItem>Blog avanzado</CheckItem>
              <CheckItem>UX optimizada</CheckItem>
              <CheckItem>Integraciones avanzadas</CheckItem>
              <CheckItem>1 mes soporte incluido</CheckItem>
            </ul>

            <Link
              href="/contacto#form"
              className="btn-primary w-full mt-6 text-center inline-flex justify-center items-center gap-2"
            >
              Cotizar
              <ArrowRight className="w-4 h-4" />
            </Link>
          </article>
        </div>
      </section>

      {/* OPERACION MENSUAL */}
      <section id="mensual" className="section mt-24 space-y-12">
        <SectionHeader
          title="Operación mensual"
          desc="La diferencia entre un sitio publicado y un sitio realmente activo."
        />

        <div className="grid gap-6 lg:grid-cols-3">

          <article className="card-surface p-6 border border-slate-700">
            <Cloud className="w-5 h-5 text-sky-400 mb-3" />
            <h3 className="text-sm font-semibold text-slate-50">
              Hosting administrado
            </h3>
            <p className="text-sky-300 mt-2">Desde $10.000 / mes</p>
            <p className="text-sm text-slate-300 mt-2">
              Infraestructura cloud, DNS, SSL y continuidad técnica.
            </p>
          </article>

          <article className="card-surface p-6 border border-slate-700">
            <Headphones className="w-5 h-5 text-sky-400 mb-3" />
            <h3 className="text-sm font-semibold text-slate-50">
              Soporte mensual
            </h3>
            <p className="text-sky-300 mt-2">Desde $29.990 / mes</p>
            <p className="text-sm text-slate-300 mt-2">
              Ajustes menores, acompañamiento y estabilidad.
            </p>
          </article>

          <article className="card-surface p-6 border border-slate-700">
            <FileText className="w-5 h-5 text-sky-400 mb-3" />
            <h3 className="text-sm font-semibold text-slate-50">
              Gestión de contenidos
            </h3>
            <p className="text-sky-300 mt-2">Desde $80.000 / mes</p>
            <p className="text-sm text-slate-300 mt-2">
              Publicación mensual y actualización institucional.
            </p>
          </article>
        </div>

        <div className="card-surface p-6 border border-slate-700">
          <Coins className="w-5 h-5 text-sky-400 mb-3" />
          <h3 className="text-base font-semibold text-slate-50">
            Plan mensual recomendado
          </h3>
          <p className="mt-2 text-sm text-slate-300">
            Hosting + Soporte + Contenidos
          </p>
          <p className="mt-3 text-sky-300 font-semibold">
            Desde $119.990 / mes
          </p>

          <Link
            href="/contacto#form"
            className="btn-primary mt-5 inline-flex items-center gap-2 px-6 py-3"
          >
            Solicitar plan mensual
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* TECNOLOGIA */}
      <section className="section mt-24 space-y-12">
        <SectionHeader
          title="Base tecnológica"
          desc="Infraestructura moderna para rendimiento y continuidad."
        />

        <ul className="grid md:grid-cols-2 gap-4 text-sm text-slate-200">
          <CheckItem>Next.js</CheckItem>
          <CheckItem>Vercel</CheckItem>
          <CheckItem>Cloudflare</CheckItem>
          <CheckItem>GA4 + GTM</CheckItem>
          <CheckItem>Integración CRM</CheckItem>
          <CheckItem>Checklist técnico antes de publicar</CheckItem>
        </ul>
      </section>

      {/* FINAL CTA */}
      <section className="section mt-24 text-center">
        <h2 className="text-2xl font-semibold text-slate-50">
          ¿Listo para avanzar?
        </h2>
        <p className="mt-3 text-slate-300">
          Cuéntanos objetivo y tipo de sitio. Respondemos con propuesta clara.
        </p>

        <Link
          href="/contacto#form"
          className="btn-primary mt-6 inline-flex items-center gap-2 px-8 py-3"
        >
          Pedir propuesta
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}

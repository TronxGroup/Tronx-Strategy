"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  BarChart3,
  Workflow,
  CheckCircle2,
  Lock,
  Wrench,
  Cloud,
  Headphones,
  FileText,
  Zap,
  Ban,
  Layers3,
  Sparkles,
  Timer,
} from "lucide-react";

/* =======================================================
   UTIL
======================================================= */

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
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
    <li className="flex items-start gap-3 text-sm md:text-base text-slate-300">
      <CheckCircle2 className="w-4 h-4 mt-[3px] text-sky-300" />
      <span>{children}</span>
    </li>
  );
}

function Card({
  icon: Icon,
  title,
  text,
  tone = "default",
}: {
  icon: any;
  title: string;
  text: string;
  tone?: "default" | "highlight";
}) {
  return (
    <div
      className={cx(
        "card-surface p-6 border bg-black/55",
        tone === "highlight"
          ? "border-sky-400/30 shadow-soft-glow shadow-sky-500/10"
          : "border-white/10"
      )}
    >
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5 text-sky-300" />
        <h3 className="text-white font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-slate-300">{text}</p>
    </div>
  );
}

/* =======================================================
   COMPONENT
======================================================= */

export default function NosotrosPage() {
  return (
    <section
      className="relative min-h-screen w-full"
      style={{
        backgroundImage: "url('/BG_nosotros_strategy.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-[1px]" />

      <div className="relative section py-20 lg:py-24 space-y-20">
        {/* =======================================================
           HERO
        ======================================================= */}
        <header className="max-w-5xl space-y-6">
          <p className="text-xs font-semibold tracking-[0.28em] uppercase text-sky-300/90">
            Nosotros
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Tronx Strategy es{" "}
            <span className="text-sky-300">WebOps</span>: sitios que no solo se
            publican,
            <br className="hidden md:block" />{" "}
            <span className="text-sky-300">
              se operan y se mantienen activos
            </span>
            .
          </h1>

          <p className="text-base md:text-lg text-slate-200 max-w-4xl">
            No vendemos “una web”. Construimos un activo digital para servicios:
            propuesta clara, medición real y continuidad mensual para que el
            sitio sea parte del negocio, no un proyecto olvidado.
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            <Pill>Servicios (B2B/B2C)</Pill>
            <Pill>Arquitectura moderna</Pill>
            <Pill>Medición + conversión</Pill>
            <Pill>Operación mensual</Pill>
          </div>

          <div className="flex flex-wrap gap-3 pt-3">
            <Link
              href="/contacto#form"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3"
            >
              Cotizar proyecto
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/servicios#packs"
              className="btn-ghost bg-white/10 hover:bg-white/20 inline-flex items-center gap-2 px-6 py-3"
            >
              Ver packs
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/portafolio"
              className="btn-ghost bg-white/5 hover:bg-white/15 inline-flex items-center gap-2 px-6 py-3"
            >
              Ver casos reales
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-xs text-slate-400">
            Enfoque: sitios de servicios. No e-commerce. No sistemas complejos.
          </p>
        </header>

        {/* =======================================================
           PROPUESTA DE VALOR
        ======================================================= */}
        <section className="grid gap-6 md:grid-cols-3">
          <Card
            icon={ShieldCheck}
            title="Operación y propiedad"
            text="Accesos, roles y continuidad. El sitio no queda en tierra de nadie."
            tone="highlight"
          />
          <Card
            icon={BarChart3}
            title="Medición real"
            text="Eventos clave (lead/WhatsApp) y data para tomar decisiones, no intuición."
          />
          <Card
            icon={Workflow}
            title="Estructura operable"
            text="Arquitectura clara + documentación para publicar sin fricción."
          />
        </section>

        {/* =======================================================
           LO QUE HACEMOS / LO QUE NO
        ======================================================= */}
        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/55 p-8 space-y-5">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-sky-300" />
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                Qué hacemos (en concreto)
              </h2>
            </div>

            <ul className="space-y-3">
              <CheckItem>
                Estructura + copy alineado a objetivo real (leads, reputación,
                institucionalidad).
              </CheckItem>
              <CheckItem>
                Implementación moderna: Next.js + Vercel + Cloudflare.
              </CheckItem>
              <CheckItem>
                Dominio, DNS, SSL y accesos documentados (propiedad clara).
              </CheckItem>
              <CheckItem>
                Medición: Ads Tag / GA4 + eventos base (según pack).
              </CheckItem>
              <CheckItem>
                Escalamiento por etapas: noticias, CRM básico, automatizaciones
                simples.
              </CheckItem>
              <CheckItem>
                Entrega documentada + checklist + capacitación breve.
              </CheckItem>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/55 p-8 space-y-5">
            <div className="flex items-center gap-3">
              <Ban className="w-5 h-5 text-sky-300" />
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                Qué NO hacemos
              </h2>
            </div>

            <p className="text-slate-300">
              Para mantener foco y tiempos razonables, evitamos proyectos que
              requieren desarrollo tipo software.
            </p>

            <ul className="space-y-3">
              <CheckItem>E-commerce (pagos, despacho, catálogo complejo)</CheckItem>
              <CheckItem>Apps, portales, dashboards o sistemas a medida</CheckItem>
              <CheckItem>Integraciones “enterprise” sin etapa previa</CheckItem>
              <CheckItem>
                Proyectos sin responsable comercial (sin respuesta a leads)
              </CheckItem>
            </ul>
          </div>
        </section>

        {/* =======================================================
           CÓMO TRABAJAMOS (3 pasos)
        ======================================================= */}
        <section className="rounded-2xl border border-white/10 bg-black/50 p-10 space-y-8">
          <div className="flex items-center gap-3">
            <Layers3 className="w-5 h-5 text-sky-300" />
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Cómo trabajamos
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                icon: Timer,
                title: "1) Definimos el objetivo",
                text: "Lead, agenda, cotización o institucional. Alcance por escrito.",
              },
              {
                icon: Wrench,
                title: "2) Construimos y medimos",
                text: "Sitio + tracking. Checklist técnico antes de publicar.",
              },
              {
                icon: Zap,
                title: "3) Operamos y optimizamos",
                text: "Continuidad mensual (recomendado) para mantener el activo vivo.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-xl border border-white/10 bg-black/40 p-6"
              >
                <Icon className="w-5 h-5 text-sky-300 mb-3" />
                <p className="text-white font-semibold">{title}</p>
                <p className="text-sm text-slate-300 mt-2">{text}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/servicios#packs"
              className="btn-ghost bg-white/10 hover:bg-white/20 inline-flex items-center gap-2 px-6 py-3"
            >
              Ver packs y alcance
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contacto#form"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3"
            >
              Pedir propuesta
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* =======================================================
           CONTINUIDAD (MENSAJE CLAVE)
        ======================================================= */}
        <section className="rounded-2xl border border-sky-400/25 bg-black/50 p-8 space-y-6">
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-sky-300" />
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              Continuidad mensual (recomendado)
            </h2>
          </div>

          <p className="text-sm md:text-base text-slate-300 max-w-3xl">
            El valor real aparece cuando el sitio se mantiene activo. Infra +
            soporte + contenidos = un activo digital sostenible.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                icon: Cloud,
                title: "Hosting administrado",
                price: "Desde $10.000 / mes",
                text: "Cloud, DNS, SSL y continuidad técnica.",
              },
              {
                icon: Headphones,
                title: "Soporte técnico",
                price: "Desde $29.990 / mes",
                text: "Ajustes menores y acompañamiento.",
              },
              {
                icon: FileText,
                title: "Gestión de contenidos",
                price: "Desde $80.000 / mes",
                text: "Publicación y actualización mensual.",
              },
            ].map(({ icon: Icon, title, price, text }) => (
              <div
                key={title}
                className="rounded-xl border border-white/10 bg-black/40 p-5"
              >
                <Icon className="w-5 h-5 text-sky-300 mb-3" />
                <p className="text-white font-semibold">{title}</p>
                <p className="text-sky-300 mt-1 text-sm">{price}</p>
                <p className="text-sm text-slate-300 mt-2">{text}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-300">
              Plan recomendado
            </p>
            <p className="text-2xl font-semibold text-white mt-2">$119.990 / mes</p>
            <p className="text-xs text-slate-400 mt-1">Hosting + Soporte + Contenidos</p>
          </div>

          <Link
            href="/contacto#form"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3"
          >
            Solicitar continuidad mensual
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* =======================================================
           ESTÁNDAR DE ENTREGA
        ======================================================= */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Estándar de entrega
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                icon: CheckCircle2,
                title: "Alcance por escrito",
                text: "Qué entra, qué no entra, hitos y responsables.",
              },
              {
                icon: Lock,
                title: "Propiedad y accesos",
                text: "Dominio, DNS y usuarios documentados.",
              },
              {
                icon: Wrench,
                title: "Checklist técnico",
                text: "Performance, indexación, eventos y publicación.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="card-surface p-6 bg-black/45 border border-white/10"
              >
                <Icon className="w-5 h-5 text-sky-300 mb-3" />
                <p className="text-white font-semibold">{title}</p>
                <p className="text-sm text-slate-300 mt-2">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =======================================================
           CTA FINAL
        ======================================================= */}
        <section className="rounded-2xl border border-white/10 bg-black/50 p-10 text-center space-y-6">
          <h3 className="text-2xl font-semibold text-white">
            Si necesitas claridad comercial + estructura técnica, conversemos.
          </h3>

          <p className="text-slate-300 max-w-2xl mx-auto">
            Envíanos objetivo, secciones y fecha ideal. Te respondemos con
            alcance definido, valor claro y recomendación de continuidad.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contacto#form"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3"
            >
              Cotizar proyecto
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/servicios#packs"
              className="btn-ghost bg-white/10 hover:bg-white/20 inline-flex items-center gap-2 px-6 py-3"
            >
              Ver packs
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/portafolio"
              className="btn-ghost bg-white/5 hover:bg-white/15 inline-flex items-center gap-2 px-6 py-3"
            >
              Ver portafolio
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-xs text-slate-400">
            Trabajamos con alcance definido. Cambios estructurales o nuevas
            integraciones se evalúan aparte.
          </p>
        </section>
      </div>
    </section>
  );
}

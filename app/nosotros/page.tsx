"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  BarChart3,
  Workflow,
  Sparkles,
  Layers3,
  CheckCircle2,
  Globe2,
  Building2,
  Lock,
  Wrench,
  Cloud,
  Headphones,
  FileText,
  Zap,
} from "lucide-react";

/* =======================================================
   UTIL
======================================================= */

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
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
            Tronx Strategy es <span className="text-sky-300">WebOps</span>:
            sitios que no solo se publican, <br className="hidden md:block"/>
            <span className="text-sky-300">se gobiernan y se operan</span>.
          </h1>

          <p className="text-base md:text-lg text-slate-200 max-w-4xl">
            No vendemos “una web”. Diseñamos activos digitales con
            alcance definido por escrito, propiedad clara, medición real
            y continuidad mensual para que el sitio sea parte del negocio,
            no un proyecto olvidado.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/contacto#form"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3"
            >
              Cotizar proyecto
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/servicios#planes"
              className="btn-ghost bg-white/10 hover:bg-white/20 inline-flex items-center gap-2 px-6 py-3"
            >
              Ver planes
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
        </header>

        {/* =======================================================
           PROPUESTA DE VALOR
        ======================================================= */}
        <section className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Gobierno digital",
              text: "Roles, propiedad, accesos y continuidad. El sitio no queda en tierra de nadie.",
            },
            {
              icon: BarChart3,
              title: "Medición real",
              text: "GA4 + eventos clave. Decisiones basadas en datos, no intuición.",
            },
            {
              icon: Workflow,
              title: "Operación clara",
              text: "Estructura simple y documentación para que tu equipo publique sin fricción.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="card-surface p-6 bg-black/55 border border-white/10"
            >
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-sky-300" />
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-300">{text}</p>
            </div>
          ))}
        </section>

        {/* =======================================================
           QUÉ HACEMOS
        ======================================================= */}
        <section className="max-w-4xl space-y-6 text-slate-300">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Qué hacemos (en concreto)
          </h2>

          <ul className="space-y-3 text-sm md:text-base">
            {[
              "Estructura + copy alineado a objetivo real (ventas, reputación, institucionalidad).",
              "Implementación moderna (Next.js + Vercel + Cloudflare).",
              "Dominio, DNS, SSL y accesos documentados.",
              "GA4 + GTM (según plan) + eventos base.",
              "Escalamiento por etapas: noticias, CRM, automatizaciones.",
              "Entrega documentada + checklist + capacitación.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 className="w-4 h-4 mt-[3px] text-sky-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* =======================================================
           CONTINUIDAD (MENSAJE CLAVE DE NEGOCIO)
        ======================================================= */}
        <section className="rounded-2xl border border-sky-400/25 bg-black/50 p-8 space-y-6">
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-sky-300" />
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              Continuidad mensual (recomendado)
            </h2>
          </div>

          <p className="text-sm md:text-base text-slate-300 max-w-3xl">
            El valor real aparece cuando el sitio se mantiene activo.
            Infraestructura + soporte + contenidos = activo digital sostenible.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                icon: Cloud,
                title: "Hosting administrado",
                price: "$10.000 / mes",
              },
              {
                icon: Headphones,
                title: "Soporte técnico",
                price: "$29.990 / mes",
              },
              {
                icon: FileText,
                title: "Gestión de contenidos",
                price: "$80.000 / mes",
              },
            ].map(({ icon: Icon, title, price }) => (
              <div
                key={title}
                className="rounded-xl border border-white/10 bg-black/40 p-5"
              >
                <Icon className="w-5 h-5 text-sky-300 mb-3" />
                <p className="text-white font-semibold">{title}</p>
                <p className="text-sky-300 mt-1 text-sm">{price}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-white/10 bg-black/40 p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-300">
              Plan recomendado
            </p>
            <p className="text-2xl font-semibold text-white mt-2">
              $119.990 / mes
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Hosting + Soporte + Contenidos
            </p>
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
            Envíanos objetivo, secciones y fecha ideal.
            Te respondemos con alcance definido, valor claro y recomendación de continuidad.
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
              href="/servicios#planes"
              className="btn-ghost bg-white/10 hover:bg-white/20 inline-flex items-center gap-2 px-6 py-3"
            >
              Ver planes
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-xs text-slate-400">
            Trabajamos con alcance definido. Cambios estructurales o nuevas integraciones se evalúan aparte.
          </p>
        </section>
      </div>
    </section>
  );
}

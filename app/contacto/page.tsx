// app/contacto/page.tsx
"use client";

import Link from "next/link";
import {
  Mail,
  MessageCircle,
  ArrowRight,
  MapPin,
  Clock,
  ShieldCheck,
  Workflow,
  BarChart3,
} from "lucide-react";

export default function ContactoPage() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden flex items-stretch"
      style={{
        backgroundImage: "url('/BG_contacto_strategy.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />

      <div className="relative section py-20 lg:py-28 flex-1 space-y-20">

        {/* =======================================================
           HERO
        ======================================================= */}
        <header className="max-w-4xl">
          <p className="section-title text-sky-300/90">Contacto</p>

          <h1 className="section-heading text-white">
            Si tu proyecto requiere estructura y continuidad,
            <br className="hidden md:block" />
            conversemos directamente.
          </h1>

          <p className="section-subtitle text-slate-300 max-w-2xl">
            No trabajamos con formularios automáticos.
            Escríbenos con contexto real y te respondemos con alcance claro,
            tiempos y recomendación estratégica.
          </p>
        </header>

        {/* =======================================================
           CTA PRINCIPALES
        ======================================================= */}
        <section className="grid gap-6 md:grid-cols-2 max-w-4xl">

          {/* Email */}
          <a
            href="mailto:info@tronxstrategy.com"
            className="card-surface p-8 bg-black/70 border border-slate-700/70 backdrop-blur-sm rounded-2xl hover:border-sky-400/40 transition"
          >
            <Mail className="w-6 h-6 text-sky-400 mb-4" />
            <h2 className="text-lg font-semibold text-white">
              Escribir por correo
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              info@tronxstrategy.com
            </p>
            <p className="mt-4 text-xs text-slate-400">
              Ideal si necesitas enviar contexto detallado,
              enlaces, documentos o requerimientos técnicos.
            </p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/56920080031"
            target="_blank"
            rel="noopener noreferrer"
            className="card-surface p-8 bg-black/70 border border-slate-700/70 backdrop-blur-sm rounded-2xl hover:border-green-400/40 transition"
          >
            <MessageCircle className="w-6 h-6 text-green-400 mb-4" />
            <h2 className="text-lg font-semibold text-white">
              Conversar por WhatsApp
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              +56 9 2008 0031
            </p>
            <p className="mt-4 text-xs text-slate-400">
              Ideal para coordinación rápida o primera validación de idea.
            </p>
          </a>
        </section>

        {/* =======================================================
           CÓMO TRABAJAMOS
        ======================================================= */}
        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] max-w-5xl">

          {/* Proceso */}
          <div className="card-surface p-8 bg-black/70 border border-slate-700/70 backdrop-blur-sm rounded-2xl">
            <h2 className="text-lg font-semibold text-white">
              Cómo trabajamos
            </h2>

            <ol className="mt-6 space-y-4 text-sm text-slate-300">
              <li>
                <strong className="text-white">1.</strong> Definimos objetivo,
                alcance y restricciones reales.
              </li>
              <li>
                <strong className="text-white">2.</strong> Entregamos propuesta
                clara con valor cerrado.
              </li>
              <li>
                <strong className="text-white">3.</strong> Ejecutamos bajo
                arquitectura moderna (Next.js + Vercel + Cloudflare).
              </li>
              <li>
                <strong className="text-white">4.</strong> Dejamos el activo
                documentado y listo para continuidad mensual.
              </li>
            </ol>
          </div>

          {/* Información institucional */}
          <aside className="space-y-5 text-sm text-slate-300">

            <div className="card-surface p-6 bg-black/70 border border-slate-700/70 backdrop-blur-sm rounded-2xl">
              <h2 className="text-base font-semibold text-white">
                Información institucional
              </h2>

              <ul className="mt-4 space-y-3">
                <li className="flex gap-3">
                  <MapPin className="w-4 h-4 text-sky-400 mt-1" />
                  Providencia, Santiago · Operación 100% remota.
                </li>
                <li className="flex gap-3">
                  <Clock className="w-4 h-4 text-sky-400 mt-1" />
                  Lunes a viernes: 9:00–18:00 (GMT-3)
                </li>
                <li className="flex gap-3">
                  <ShieldCheck className="w-4 h-4 text-sky-400 mt-1" />
                  Alcance definido por escrito.
                </li>
              </ul>
            </div>

            <div className="card-surface p-6 bg-black/70 border border-slate-700/70 backdrop-blur-sm rounded-2xl">
              <h2 className="text-base font-semibold text-white">
                Enfoque Tronx
              </h2>

              <div className="mt-4 space-y-3">
                <div className="flex gap-3">
                  <Workflow className="w-4 h-4 text-sky-400 mt-1" />
                  Estructura operable.
                </div>
                <div className="flex gap-3">
                  <BarChart3 className="w-4 h-4 text-sky-400 mt-1" />
                  Medición real.
                </div>
                <div className="flex gap-3">
                  <ShieldCheck className="w-4 h-4 text-sky-400 mt-1" />
                  Continuidad mensual recomendada.
                </div>
              </div>
            </div>
          </aside>
        </section>

        {/* =======================================================
           CTA FINAL
        ======================================================= */}
        <section className="text-center pt-6">
          <p className="text-sm text-slate-400">
            Envíanos objetivo + secciones + fecha ideal.
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Link
              href="mailto:info@tronxstrategy.com"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3"
            >
              Escribir ahora
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/56920080031"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost bg-white/10 hover:bg-white/20 inline-flex items-center gap-2 px-6 py-3"
            >
              WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Trabajamos con alcance definido. No realizamos desarrollos
            fuera de especificación sin evaluación formal.
          </p>
        </section>

      </div>
    </section>
  );
}

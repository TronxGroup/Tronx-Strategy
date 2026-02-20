// app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const SITE_URL = "https://www.tronxstrategy.com";
const WHATSAPP_NUMBER = "56920080031";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tronx Strategy — Sitios Web Profesionales desde $290.000 | Chile",
  description:
    "Creamos sitios web profesionales para emprendedores y empresas. Tecnología moderna (Next.js + infraestructura cloud), publicación rápida y opción de mantención mensual.",
};

function buildWhatsAppLink() {
  const text =
    "Hola 👋 Quiero cotizar un sitio web.\n\n" +
    "Empresa / Proyecto:\n" +
    "Objetivo del sitio:\n" +
    "Fecha ideal de publicación:\n\nGracias 🙌";

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
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
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative max-w-6xl mx-auto px-4 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-sky-300 font-semibold">
              Sitios Web Profesionales en Chile
            </p>

            <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-white leading-tight">
              Creamos tu sitio web profesional
              <span className="text-sky-300"> desde $290.000</span>
            </h1>

            <p className="mt-5 text-lg text-slate-200 max-w-xl">
              Publicamos tu sitio en 2–4 semanas. 
              Diseño claro, tecnología moderna y listo para generar contactos.
              Ideal para emprendedores y empresas que necesitan presencia digital real.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contacto#form" className="btn-primary px-6 py-3 text-base">
                Cotizar ahora
              </Link>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost bg-white/10 hover:bg-white/20 px-6 py-3 text-base"
              >
                WhatsApp directo
              </a>
            </div>

            <div className="mt-6 text-sm text-slate-300 space-y-1">
              <p>✔ Precios claros</p>
              <p>✔ Entrega documentada</p>
              <p>✔ Opción de mantención mensual</p>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-black/60 backdrop-blur rounded-xl border border-white/10 p-8 shadow-xl">

            <h2 className="text-2xl font-semibold text-white">
              Planes simples y claros
            </h2>

            <div className="mt-6 space-y-4 text-sm">

              <div className="p-4 border border-white/10 rounded-lg">
                <p className="font-semibold text-white">Plan Emprendedor</p>
                <p className="text-sky-300 font-semibold">Desde $290.000</p>
                <p className="text-slate-300 mt-1">
                  1–3 secciones + formulario de contacto.
                </p>
              </div>

              <div className="p-4 border border-white/10 rounded-lg">
                <p className="font-semibold text-white">Plan Empresa</p>
                <p className="text-sky-300 font-semibold">Desde $590.000</p>
                <p className="text-slate-300 mt-1">
                  Sitio corporativo completo + noticias.
                </p>
              </div>

              <div className="p-4 border border-white/10 rounded-lg">
                <p className="font-semibold text-white">Plan Institucional</p>
                <p className="text-sky-300 font-semibold">Desde $990.000</p>
                <p className="text-slate-300 mt-1">
                  Plataforma más avanzada e integraciones.
                </p>
              </div>

            </div>

            <div className="mt-6">
              <Link href="/contacto#form" className="btn-primary w-full text-center">
                Solicitar propuesta →
              </Link>
            </div>

            <p className="mt-4 text-xs text-slate-400">
              Valores netos + IVA. Facturación formal.
            </p>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">

          <h2 className="text-3xl font-semibold text-white text-center">
            Tecnología moderna, estructura profesional.
          </h2>

          <p className="text-slate-300 text-center mt-4 max-w-3xl mx-auto">
            No trabajamos con plantillas antiguas ni hosting lento.
            Utilizamos infraestructura cloud moderna para asegurar velocidad,
            seguridad y estabilidad.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-sm text-slate-200">

            <div className="p-6 border border-white/10 rounded-xl bg-black/40">
              <h3 className="font-semibold text-white">Infraestructura Cloud</h3>
              <p className="mt-2 text-slate-300">
                Publicación rápida y segura con tecnología de punta.
              </p>
            </div>

            <div className="p-6 border border-white/10 rounded-xl bg-black/40">
              <h3 className="font-semibold text-white">Medición integrada</h3>
              <p className="mt-2 text-slate-300">
                Sitio listo para campañas y generación de contactos.
              </p>
            </div>

            <div className="p-6 border border-white/10 rounded-xl bg-black/40">
              <h3 className="font-semibold text-white">Operación mensual opcional</h3>
              <p className="mt-2 text-slate-300">
                Hosting, soporte y actualización para que tu sitio no quede abandonado.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">

          <h2 className="text-3xl font-semibold text-white text-center">
            Proceso claro y rápido
          </h2>

          <div className="mt-12 grid md:grid-cols-4 gap-6 text-sm text-slate-200">

            <div className="p-6 border border-white/10 rounded-xl bg-black/40">
              <p className="text-sky-300 font-semibold">01</p>
              <p className="mt-2">Brief y definición de alcance.</p>
            </div>

            <div className="p-6 border border-white/10 rounded-xl bg-black/40">
              <p className="text-sky-300 font-semibold">02</p>
              <p className="mt-2">Diseño y estructura.</p>
            </div>

            <div className="p-6 border border-white/10 rounded-xl bg-black/40">
              <p className="text-sky-300 font-semibold">03</p>
              <p className="mt-2">Desarrollo y pruebas.</p>
            </div>

            <div className="p-6 border border-white/10 rounded-xl bg-black/40">
              <p className="text-sky-300 font-semibold">04</p>
              <p className="mt-2">Publicación y entrega documentada.</p>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-slate-950 text-center">
        <h2 className="text-3xl font-semibold text-white">
          ¿Listo para publicar tu sitio web?
        </h2>

        <p className="mt-4 text-slate-300">
          Escríbenos y recibe una propuesta clara con alcance y valor.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/contacto#form" className="btn-primary px-6 py-3">
            Cotizar ahora
          </Link>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost bg-white/10 hover:bg-white/20 px-6 py-3"
          >
            WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}

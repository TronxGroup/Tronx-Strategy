"use client";

import React from "react";
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
  Search,
  BadgeCheck,
  Ban,
  Clock,
  Wrench,
} from "lucide-react";

function SectionHeader({ title, desc }: { title: string; desc?: string }) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">{title}</h2>
      {desc && <p className="mt-3 text-sm md:text-base text-slate-300">{desc}</p>}
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

function MiniTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-200">
      {children}
    </span>
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
            Implementación + Operación + Performance (opcional)
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-white leading-tight">
            Sitios web profesionales para{" "}
            <span className="text-sky-300">servicios</span> que convierten
          </h1>

          <p className="mt-5 text-slate-200 max-w-2xl mx-auto">
            Creamos tu sitio con foco en conversión: propuesta clara, prueba social, formulario/WhatsApp y medición real.
            Si quieres, además activamos Google Ads profesional para generar leads medibles.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-2">
            <MiniTag>Abogados</MiniTag>
            <MiniTag>Consultoría</MiniTag>
            <MiniTag>Salud</MiniTag>
            <MiniTag>Educación</MiniTag>
            <MiniTag>Servicios técnicos</MiniTag>
            <MiniTag>Instituciones</MiniTag>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contacto#form" className="btn-primary px-6 py-3 inline-flex items-center gap-2">
              Solicitar propuesta
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="#packs"
              className="btn-ghost bg-white/10 hover:bg-white/20 px-6 py-3 inline-flex items-center gap-2"
            >
              Ver packs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="mt-6 text-xs text-slate-400">
            Enfoque: sitios de servicios. No hacemos e-commerce ni sistemas complejos.
          </p>
        </div>
      </section>

      {/* PARA QUIÉN + QUÉ NO HACEMOS */}
      <section className="section mt-20 space-y-10">
        <SectionHeader
          title="Enfocado en servicios (B2B y B2C)"
          desc="Diseñado para captar solicitudes: formulario, WhatsApp y llamadas. Ideal para ciclos de decisión rápidos."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="card-surface p-6 border border-slate-700">
            <div className="flex items-start gap-3">
              <BadgeCheck className="w-5 h-5 text-sky-400 mt-1" />
              <div>
                <h3 className="text-base font-semibold text-slate-50">Sí hacemos</h3>
                <ul className="mt-4 space-y-2">
                  <CheckItem>Landing para captación de leads (1 servicio o 1 oferta)</CheckItem>
                  <CheckItem>Sitio institucional (5–12 páginas)</CheckItem>
                  <CheckItem>Servicios + casos + testimonios + FAQ</CheckItem>
                  <CheckItem>Formulario/WhatsApp + tracking de conversiones</CheckItem>
                  <CheckItem>Google Ads Search (opcional) para demanda existente</CheckItem>
                </ul>
              </div>
            </div>
          </article>

          <article className="card-surface p-6 border border-slate-700">
            <div className="flex items-start gap-3">
              <Ban className="w-5 h-5 text-sky-400 mt-1" />
              <div>
                <h3 className="text-base font-semibold text-slate-50">No hacemos</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Para mantener velocidad, foco y resultados medibles:
                </p>
                <ul className="mt-4 space-y-2">
                  <CheckItem>E-commerce / catálogos con pagos y despacho</CheckItem>
                  <CheckItem>Sistemas a medida (portales, dashboards, apps complejas)</CheckItem>
                  <CheckItem>Marketplaces, intranets, integraciones “enterprise”</CheckItem>
                  <CheckItem>Proyectos sin responsable de respuesta a leads</CheckItem>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* PACKS */}
      <section id="packs" className="section mt-20 space-y-12">
        <SectionHeader
          title="Packs para vender servicios"
          desc="Pago único por implementación. Luego, operación mensual opcional. Performance Ads opcional."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {/* PACK START */}
          <article className="card-surface p-6 border border-slate-700">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-slate-50">Pack Start</h3>
              <LayoutTemplate className="w-5 h-5 text-sky-400" />
            </div>
            <p className="text-sky-400 font-semibold mt-1">$290.000</p>
            <p className="text-sm text-slate-300 mt-2">
              Para salir rápido con una landing sólida y lista para recibir consultas.
            </p>

            <ul className="mt-4 space-y-2">
              <CheckItem>1–3 secciones (oferta, beneficios, prueba social)</CheckItem>
              <CheckItem>Formulario + WhatsApp</CheckItem>
              <CheckItem>SEO base + indexación</CheckItem>
              <CheckItem>SSL + configuración técnica</CheckItem>
              <CheckItem>Entrega documentada</CheckItem>
            </ul>

            <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-sky-400" />
                <span>Ideal: 1 servicio, 1 objetivo</span>
              </div>
            </div>

            <Link
              href="/contacto#form"
              className="btn-primary w-full mt-6 text-center inline-flex justify-center items-center gap-2"
            >
              Cotizar
              <ArrowRight className="w-4 h-4" />
            </Link>
          </article>

          {/* PACK PRO */}
          <article className="card-surface p-6 border border-sky-400/70 shadow-soft-glow shadow-sky-500/20">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-slate-50">Pack Pro (recomendado)</h3>
              <Zap className="w-5 h-5 text-sky-400" />
            </div>
            <p className="text-sky-400 font-semibold mt-1">$590.000 – $690.000</p>
            <p className="text-sm text-slate-300 mt-2">
              Sitio completo para servicios con medición y estructura profesional.
            </p>

            <ul className="mt-4 space-y-2">
              <CheckItem>5–7 páginas (servicios, casos, sobre, contacto, FAQ)</CheckItem>
              <CheckItem>Sección administrable (noticias/actualizaciones)</CheckItem>
              <CheckItem>Eventos medibles (enviar formulario / WhatsApp)</CheckItem>
              <CheckItem>GA4 + GTM (si aplica) / Tag de Ads</CheckItem>
              <CheckItem>Integración básica CRM (correo, planilla o Zoho/Hubspot simple)</CheckItem>
            </ul>

            <div className="mt-5 rounded-xl border border-sky-400/20 bg-sky-500/10 p-4 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-sky-300" />
                <span>Listo para performance</span>
              </div>
              <p className="mt-2 text-xs text-slate-300">
                Ideal para abogados, consultorías, clínicas, instituciones y equipos comerciales.
              </p>
            </div>

            <Link
              href="/contacto#form"
              className="btn-primary w-full mt-6 text-center inline-flex justify-center items-center gap-2"
            >
              Cotizar este pack
              <ArrowRight className="w-4 h-4" />
            </Link>
          </article>

          {/* PACK PREMIUM */}
          <article className="card-surface p-6 border border-slate-700">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-slate-50">Pack Premium</h3>
              <ShieldCheck className="w-5 h-5 text-sky-400" />
            </div>
            <p className="text-sky-400 font-semibold mt-1">$990.000 – $1.500.000</p>
            <p className="text-sm text-slate-300 mt-2">
              Para organizaciones con varios servicios, más prueba social y UX más trabajada.
            </p>

            <ul className="mt-4 space-y-2">
              <CheckItem>8–12 páginas (servicios + sub-servicios + casos)</CheckItem>
              <CheckItem>Blog/recursos avanzado</CheckItem>
              <CheckItem>UX optimizada (estructura + microcopy + jerarquía)</CheckItem>
              <CheckItem>Integraciones avanzadas (CRM, calendly, formularios)</CheckItem>
              <CheckItem>1 mes de soporte incluido</CheckItem>
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

      {/* PERFORMANCE ADS */}
      <section id="ads" className="section mt-24 space-y-12">
        <SectionHeader
          title="Google Ads profesional (opcional)"
          desc="Si tu servicio ya tiene demanda, Search es la vía más directa para generar leads medibles."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <article className="card-surface p-6 border border-slate-700">
            <Search className="w-5 h-5 text-sky-400 mb-3" />
            <h3 className="text-sm font-semibold text-slate-50">Setup Ads (pago único)</h3>
            <p className="text-sky-300 mt-2">$600.000 + IVA</p>
            <ul className="mt-4 space-y-2">
              <CheckItem>Estructura Search por intención</CheckItem>
              <CheckItem>Anuncios RSA + extensiones</CheckItem>
              <CheckItem>Negativas base (anti tráfico basura)</CheckItem>
              <CheckItem>Conversión “lead” medible</CheckItem>
              <CheckItem>QA y checklist de lanzamiento</CheckItem>
            </ul>
          </article>

          <article className="card-surface p-6 border border-slate-700">
            <Wrench className="w-5 h-5 text-sky-400 mb-3" />
            <h3 className="text-sm font-semibold text-slate-50">Gestión mensual</h3>
            <p className="text-sky-300 mt-2">$350.000 + IVA / mes</p>
            <ul className="mt-4 space-y-2">
              <CheckItem>Optimización cada 7 días</CheckItem>
              <CheckItem>Negativas + términos de búsqueda</CheckItem>
              <CheckItem>Iteración de anuncios (CTR/CVR)</CheckItem>
              <CheckItem>Reporte cada 14 días</CheckItem>
              <CheckItem>Mejoras básicas de landing</CheckItem>
            </ul>
          </article>

          <article className="card-surface p-6 border border-slate-700">
            <Coins className="w-5 h-5 text-sky-400 mb-3" />
            <h3 className="text-sm font-semibold text-slate-50">Presupuesto sugerido</h3>
            <p className="text-sky-300 mt-2">Desde $150.000 / mes</p>
            <p className="text-sm text-slate-300 mt-2">
              El presupuesto Ads lo define el cliente y se paga directamente a Google (o se reembolsa contra comprobante).
            </p>
            <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-sky-400" />
                <span>Recomendado para servicios con decisión rápida</span>
              </div>
              <p className="mt-2 text-xs text-slate-300">
                Ej: abogados, clínicas, consultoría, educación, servicios técnicos, B2B local.
              </p>
            </div>
          </article>
        </div>

        <div className="card-surface p-6 border border-slate-700">
          <ShieldCheck className="w-5 h-5 text-sky-400 mb-3" />
          <h3 className="text-base font-semibold text-slate-50">Qué garantiza el sistema</h3>
          <p className="mt-2 text-sm text-slate-300">
            Sitio + campañas con medición clara. No prometemos resultados “mágicos”; construimos un sistema optimizable.
          </p>
          <ul className="mt-4 grid md:grid-cols-2 gap-2">
            <CheckItem>Conversión registrada (lead)</CheckItem>
            <CheckItem>UTM/GCLID para atribución</CheckItem>
            <CheckItem>Negativas para proteger presupuesto</CheckItem>
            <CheckItem>Iteración semanal</CheckItem>
          </ul>

          <Link href="/contacto#form" className="btn-primary mt-6 inline-flex items-center gap-2 px-6 py-3">
            Solicitar propuesta
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* OPERACIÓN MENSUAL */}
      <section id="mensual" className="section mt-24 space-y-12">
        <SectionHeader title="Operación mensual" desc="La diferencia entre un sitio publicado y un sitio realmente activo." />

        <div className="grid gap-6 lg:grid-cols-3">
          <article className="card-surface p-6 border border-slate-700">
            <Cloud className="w-5 h-5 text-sky-400 mb-3" />
            <h3 className="text-sm font-semibold text-slate-50">Hosting administrado</h3>
            <p className="text-sky-300 mt-2">Desde $10.000 / mes</p>
            <p className="text-sm text-slate-300 mt-2">Infraestructura cloud, DNS, SSL y continuidad técnica.</p>
          </article>

          <article className="card-surface p-6 border border-slate-700">
            <Headphones className="w-5 h-5 text-sky-400 mb-3" />
            <h3 className="text-sm font-semibold text-slate-50">Soporte mensual</h3>
            <p className="text-sky-300 mt-2">Desde $29.990 / mes</p>
            <p className="text-sm text-slate-300 mt-2">Ajustes menores, acompañamiento y estabilidad.</p>
          </article>

          <article className="card-surface p-6 border border-slate-700">
            <FileText className="w-5 h-5 text-sky-400 mb-3" />
            <h3 className="text-sm font-semibold text-slate-50">Gestión de contenidos</h3>
            <p className="text-sky-300 mt-2">Desde $80.000 / mes</p>
            <p className="text-sm text-slate-300 mt-2">Publicación mensual y actualización institucional.</p>
          </article>
        </div>

        <div className="card-surface p-6 border border-slate-700">
          <Coins className="w-5 h-5 text-sky-400 mb-3" />
          <h3 className="text-base font-semibold text-slate-50">Plan mensual recomendado</h3>
          <p className="mt-2 text-sm text-slate-300">Hosting + Soporte + Contenidos</p>
          <p className="mt-3 text-sky-300 font-semibold">Desde $119.990 / mes</p>

          <Link href="/contacto#form" className="btn-primary mt-5 inline-flex items-center gap-2 px-6 py-3">
            Solicitar plan mensual
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* BASE TECNOLÓGICA */}
      <section className="section mt-24 space-y-12">
        <SectionHeader title="Base tecnológica" desc="Infraestructura moderna para rendimiento y continuidad." />

        <ul className="grid md:grid-cols-2 gap-4 text-sm text-slate-200">
          <CheckItem>Next.js</CheckItem>
          <CheckItem>Vercel</CheckItem>
          <CheckItem>Cloudflare</CheckItem>
          <CheckItem>Google Ads Tag + conversión lead</CheckItem>
          <CheckItem>GA4 + GTM (si aplica)</CheckItem>
          <CheckItem>Checklist técnico antes de publicar</CheckItem>
        </ul>
      </section>

      {/* FINAL CTA */}
      <section className="section mt-24 text-center">
        <h2 className="text-2xl font-semibold text-slate-50">¿Listo para vender servicios con un sistema real?</h2>
        <p className="mt-3 text-slate-300">
          Cuéntanos tu servicio, ciudad y objetivo. Te respondemos con propuesta clara y alcance definido.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/contacto#form" className="btn-primary inline-flex items-center gap-2 px-8 py-3">
            Pedir propuesta
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="#ads" className="btn-ghost bg-white/10 hover:bg-white/20 inline-flex items-center gap-2 px-8 py-3">
            Ver Google Ads
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <p className="mt-6 text-xs text-slate-400">
          Nota: trabajamos con servicios. No e-commerce. No sistemas complejos.
        </p>
      </section>
    </>
  );
}

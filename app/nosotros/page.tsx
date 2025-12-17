"use client";

import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  BarChart3,
  Workflow,
  Sparkles,
  Layers3,
} from "lucide-react";

const highlights = [
  {
    title: "Gobierno digital",
    body: "Roles, accesos, propiedad y continuidad. Evitamos que el sitio quede “en tierra de nadie”.",
    icon: ShieldCheck,
  },
  {
    title: "Medición real",
    body: "GA4 + Tag Manager + eventos clave. Datos para decidir, no supuestos.",
    icon: BarChart3,
  },
  {
    title: "Operación simple",
    body: "Estructura clara, documentación y flujo para publicar sin depender del desarrollador.",
    icon: Workflow,
  },
];

const principles = [
  {
    title: "Simple primero",
    body: "Menos fricción, más claridad. Diseñamos para equipos reales y tiempos reales.",
    icon: Sparkles,
  },
  {
    title: "Arquitectura definida",
    body: "Stack moderno y estable (Next.js, Vercel, Cloudflare) con decisiones explicadas.",
    icon: Layers3,
  },
  {
    title: "Diseño con propósito",
    body: "Cada sección responde a una necesidad: informar, convertir, aclarar o guiar.",
    icon: Workflow,
  },
];

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
      aria-label="Nosotros Tronx Strategy"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative section py-20 lg:py-24">
        {/* Header */}
        <header className="max-w-4xl">
          <p className="text-xs font-semibold tracking-[0.26em] uppercase text-sky-300/90">
            Nosotros
          </p>

          <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Tronx Strategy es el estudio web de Tronx Group.
          </h1>

          <p className="mt-4 text-base md:text-lg text-slate-200">
            Unimos diseño, desarrollo y operación digital bajo un modelo 100% cloud.
            Creamos sitios que cargan rápido, se entienden, se miden y se pueden operar
            con continuidad: ventas, reputación, captación de leads y comunicación clara
            para empresas e instituciones.
          </p>

          {/* CTA row */}
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <Link
              href="/contacto#form"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm md:text-base"
            >
              Agenda una llamada sin costo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/servicios#planes"
              className="btn-ghost bg-white/10 hover:bg-white/20 inline-flex items-center gap-2 px-6 py-3 text-sm md:text-base"
            >
              Ver planes y servicios →
            </Link>
          </div>

          {/* Quick highlights */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {highlights.map(({ title, body, icon: Icon }) => (
              <div
                key={title}
                className="card-surface p-5 bg-black/55 backdrop-blur border border-white/10"
              >
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 border border-slate-700/70">
                    <Icon className="w-4 h-4 text-sky-300" />
                  </span>
                  <h3 className="text-sm font-semibold text-white">{title}</h3>
                </div>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </header>

        {/* Main layout */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.35fr_minmax(0,1fr)] items-start">
          {/* Main copy */}
          <div className="space-y-6 text-sm md:text-base text-slate-300 leading-relaxed">
            <p>
              Tronx Strategy nace como la unidad digital de <strong className="text-white">Tronx Group SpA</strong>,
              holding creativo–tecnológico con base en Santiago de Chile. Operamos dentro de un ecosistema que integra
              producción audiovisual (<strong className="text-white">Dekaelo Media</strong>), medios y contenido original
              (<strong className="text-white">Tronx TV</strong>) y plataformas territoriales
              (<strong className="text-white">SANRAVAL</strong>).
            </p>

            <p>
              Nuestra especialidad es el <strong className="text-white">desarrollo web moderno</strong> para empresas,
              cámaras, asociaciones, instituciones y negocios de servicios. Combinamos{" "}
              <strong className="text-white">infraestructura</strong>,{" "}
              <strong className="text-white">diseño</strong> y{" "}
              <strong className="text-white">operación</strong> para que el sitio deje de ser una vitrina y pase a ser un
              activo real del negocio.
            </p>

            <div className="rounded-xl border border-white/10 bg-black/40 p-5">
              <p className="text-sm font-semibold text-white">Qué hacemos diferente (en simple)</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                <li>• Definimos <strong className="text-white">estructura</strong> y mensajes según objetivo y público.</li>
                <li>• Dejamos <strong className="text-white">medición</strong> lista (GA4/GTM/eventos).</li>
                <li>• Conectamos <strong className="text-white">captación</strong> a CRM cuando corresponde.</li>
                <li>• Entregamos <strong className="text-white">documentación</strong> + acceso claro + continuidad.</li>
              </ul>
            </div>

            <p>
              Trabajamos sobre una <strong className="text-white">arquitectura tecnológica definida</strong>: GitHub para
              el código, Vercel para despliegue y Cloudflare para rendimiento y seguridad. Esto entrega performance,
              estabilidad y escalabilidad sin paneles innecesarios ni hosting lento.
            </p>

            <p>
              Nuestra metodología es por <strong className="text-white">capas</strong>: partimos con una base sólida
              (estructura, contenido esencial, SEO y medición), y luego sumamos noticias, CRM, portales, directorios o
              integraciones específicas según la necesidad real.
            </p>
          </div>

          {/* Side card */}
          <aside className="card-surface p-6 bg-black/60 backdrop-blur border border-white/10">
            <h2 className="text-lg font-semibold text-white">Principios de trabajo</h2>

            <div className="mt-4 space-y-4">
              {principles.map(({ title, body, icon: Icon }) => (
                <div key={title} className="flex gap-3">
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 border border-slate-700/70">
                    <Icon className="w-4 h-4 text-sky-300" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="text-sm text-slate-300">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-black/40 p-4">
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-sky-300">
                Nota importante
              </p>
              <p className="mt-2 text-sm text-slate-300">
                La IA acelera creación de páginas. Nosotros diseñamos{" "}
                <strong className="text-white">gobierno y continuidad</strong>: propiedad,
                accesos, seguridad, medición y operación para que el sitio funcione en el mundo real.
              </p>
            </div>
          </aside>
        </div>

        {/* Bottom blocks */}
        <section className="mt-12 grid gap-6 md:grid-cols-3 text-xs md:text-sm text-slate-300">
          <div className="card-surface p-5 bg-black/45 backdrop-blur border border-white/10">
            <p className="font-semibold text-slate-100">Cobertura nacional</p>
            <p className="mt-2">
              Proyectos para empresas e instituciones en todo Chile. Operación remota, reuniones online y procesos formales
              por etapa.
            </p>
          </div>

          <div className="card-surface p-5 bg-black/45 backdrop-blur border border-white/10">
            <p className="font-semibold text-slate-100">Estándar corporativo</p>
            <p className="mt-2">
              Entregables claros, control de cambios, documentación y comunicación ejecutiva. Menos vueltas, más avance.
            </p>
          </div>

          <div className="card-surface p-5 bg-black/45 backdrop-blur border border-white/10">
            <p className="font-semibold text-slate-100">Preparado para crecer</p>
            <p className="mt-2">
              Base lista para campañas, contenidos, CRM y escalamiento a portales o directorios sin rehacer todo desde cero.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-black/45 backdrop-blur p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-semibold text-white">
            Si necesitas un equipo que hable negocio y tecnología, conversemos.
          </h3>
          <p className="mt-2 text-sm md:text-base text-slate-300 max-w-3xl">
            Podemos acompañarte desde la definición del sitio hasta su operación continua: estructura, contenido,
            medición, captación y soporte.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contacto#form"
              className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 text-sm md:text-base"
            >
              Contacto / agendar llamada
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="mailto:info@tronxstrategy.com"
              className="btn-ghost bg-white/10 hover:bg-white/20 inline-flex items-center justify-center px-6 py-3 text-sm md:text-base"
            >
              info@tronxstrategy.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

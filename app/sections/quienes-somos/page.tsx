// app/sections/quienes-somos/page.tsx
import Link from 'next/link'
import { Check } from 'lucide-react'

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Quiénes Somos</h1>
      <p className="mt-3 text-neutral-300 max-w-3xl">
        Tronx Strategy es la unidad de consultoría de <b>Tronx Group</b>. Conectamos <b>estrategia</b>, <b>tecnología</b> y <b>comunicación</b> para que marcas y equipos crezcan con <b>orden, visibilidad y resultados</b>. Trabajamos con emprendedores, profesionales, PyMEs e instituciones, adaptando la metodología a cada contexto.
      </p>

      {/* Pilares */}
      <section className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 mt-8">
        <h2 className="text-xl font-semibold">Nuestros pilares</h2>
        <ul className="mt-4 grid md:grid-cols-2 gap-3 text-sm text-neutral-300">
          {[
            'Estrategia con foco en negocio (objetivos, priorización, roadmap)',
            'Digitalización orientada a resultados (web/landings, campañas, CRM y pagos)',
            'Creatividad que conecta (contenidos, video y marca al servicio del funnel)',
            'Medición & mejora continua (GA4+GTM, dashboards, optimización)',
          ].map((it, i) => (
            <li key={i} className="flex gap-2">
              <Check size={16} className="mt-0.5" /> {it}
            </li>
          ))}
        </ul>
      </section>

      {/* Cómo trabajamos */}
      <section className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 mt-8">
        <h2 className="text-xl font-semibold">Cómo trabajamos</h2>
        <ul className="mt-4 space-y-2 text-sm text-neutral-300">
          <li className="flex gap-2"><Check size={16} className="mt-0.5" /> <b>Alineación:</b> diagnóstico, propuesta de valor y métricas.</li>
          <li className="flex gap-2"><Check size={16} className="mt-0.5" /> <b>Activación:</b> activos (web/landing), campañas, CRM y automatizaciones.</li>
          <li className="flex gap-2"><Check size={16} className="mt-0.5" /> <b>Crecimiento:</b> reporting, insights y optimización continua.</li>
        </ul>
      </section>

      {/* Por qué Tronx */}
      <section className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 mt-8">
        <h2 className="text-xl font-semibold">Por qué Tronx Strategy</h2>
        <ul className="mt-4 grid md:grid-cols-2 gap-3 text-sm text-neutral-300">
          {[
            'Entregables claros en semanas, no meses',
            'KPI y reporting con una única fuente de verdad',
            'Integración con CRM y pagos online',
            'Trabajo con datos B2B cumpliendo privacidad y opt-out',
          ].map((it, i) => (
            <li key={i} className="flex gap-2">
              <Check size={16} className="mt-0.5" /> {it}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/sections/servicios"
          className="inline-flex items-center gap-2 rounded-2xl border border-[var(--border)] px-5 py-3 font-semibold hover:bg-neutral-900"
        >
          Ver Servicios
        </Link>
        <Link
          href="/sections/casos"
          className="inline-flex items-center gap-2 rounded-2xl border border-[var(--border)] px-5 py-3 font-semibold hover:bg-neutral-900"
        >
          Casos de Éxito
        </Link>
        <Link
          href="/sections/contacto"
          className="inline-flex items-center gap-2 rounded-2xl bg-white text-neutral-900 px-5 py-3 font-semibold"
        >
          Hablemos
        </Link>
      </div>

      <p className="mt-4 text-sm text-neutral-400">Parte del ecosistema <b>Tronx Group</b>.</p>
    </div>
  )
}

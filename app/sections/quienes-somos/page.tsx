import Link from 'next/link';
import { Check } from 'lucide-react';

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Quiénes somos</h1>

      <p className="mt-3 text-white/70 max-w-3xl">
        <b>Tronx Strategy</b> es la unidad de consultoría de <b>Tronx Group</b>. Conectamos
        <b> estrategia</b>, <b>tecnología</b> y <b>comunicación</b> para que marcas y equipos crezcan con
        <b> orden, visibilidad y resultados</b>. Trabajamos con emprendedores, profesionales, PyMEs e
        instituciones, adaptando la metodología a cada contexto.
      </p>

      {/* Pilares */}
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 mt-8">
        <h2 className="text-xl font-semibold">Nuestros pilares</h2>
        <ul className="mt-4 grid md:grid-cols-2 gap-3 text-sm text-white/80">
          {[
            'Estrategia con foco en negocio (objetivos, priorización y roadmap)',
            'Digitalización orientada a resultados (web/landings, campañas, CRM y pagos)',
            'Creatividad que conecta (contenidos, video y marca al servicio del funnel)',
            'Medición continua (GA4, GTM, dashboards) y optimización con aprendizaje',
          ].map((it, i) => (
            <Li key={i}>{it}</Li>
          ))}
        </ul>
      </section>

      {/* Cómo trabajamos */}
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 mt-8">
        <h2 className="text-xl font-semibold">Cómo trabajamos</h2>
        <ul className="mt-4 space-y-2 text-sm text-white/80">
          <Li><b>Alineación:</b> diagnóstico, propuesta de valor, definición de métricas y backlog.</Li>
          <Li><b>Activación:</b> activos (web/landing), campañas, CRM y automatizaciones.</Li>
          <Li><b>Crecimiento:</b> reporting, insights y sprints de mejora quincenales.</Li>
        </ul>
      </section>

      {/* Por qué Tronx */}
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 mt-8">
        <h2 className="text-xl font-semibold">Por qué Tronx Strategy</h2>
        <ul className="mt-4 grid md:grid-cols-2 gap-3 text-sm text-white/80">
          {[
            'Entregables claros en semanas, no meses',
            'KPIs y reporting con una única fuente de verdad',
            'Integración con CRM y pagos online',
            'Datos B2B con privacidad y opt-out garantizados',
          ].map((it, i) => (
            <Li key={i}>{it}</Li>
          ))}
        </ul>
      </section>

      {/* Contexto de grupo */}
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 mt-8">
        <h2 className="text-xl font-semibold">Parte de Tronx Group</h2>
        <p className="mt-2 text-sm text-white/80">
          Tronx Group reúne <b>Tronx Strategy</b> (estrategia y performance), <b>Dekaelo Media</b> (audiovisual) y
          <b> Tronx TV</b> (contenido y distribución). Los clientes se presentan en{' '}
          <Link href="/casos" className="underline underline-offset-4 hover:text-white">Casos de Éxito</Link>.
        </p>
      </section>

      {/* CTA */}
      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/servicios"
          className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-5 py-3 font-semibold hover:bg-white/10"
          aria-label="Ver Servicios"
        >
          Ver Servicios
        </Link>
        <Link
          href="/casos"
          className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-5 py-3 font-semibold hover:bg-white/10"
          aria-label="Ver Casos de Éxito"
        >
          Casos de Éxito
        </Link>
        <Link
          href="/contacto"
          className="inline-flex items-center gap-2 rounded-2xl bg-white text-neutral-900 px-5 py-3 font-semibold"
          aria-label="Ir a Contacto"
        >
          Hablemos
        </Link>
      </div>

      <p className="mt-4 text-sm text-white/60">
        Parte del ecosistema <b>Tronx Group</b>.
      </p>
    </div>
  );
}

/* ---------- Subcomponentes ---------- */

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2">
      <Check size={16} className="mt-0.5" /> {children}
    </li>
  );
}

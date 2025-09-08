import { Check } from 'lucide-react'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Servicios</h1>
      <p className="mt-3 text-neutral-300 max-w-3xl">
        Cubrimos desde la base empresarial hasta la transformación digital y la estrategia de largo plazo. Entregables claros, métricas y crecimiento real.
      </p>

      <div className="mt-10 grid gap-6">
        <Card
          title="Fundamentos Empresariales"
          items={[
            'Constitución de sociedad e inicio de actividades',
            'Apertura de cuenta corriente empresarial',
            'Registro de dominios y marcas',
            'Formalización básica para operar y facturar',
            'Políticas de privacidad & cookies en sitio',
            'Correo corporativo + SPF/DKIM/DMARC (mejor entregabilidad)',
          ]}
        />

        <Card
          title="Transformación Digital & Comunicación"
          items={[
            'Sitios web (Next.js + Tailwind) y landing pages',
            'Campañas digitales (Google, Meta, LinkedIn)',
            'Email marketing y automatizaciones (Zoho / Make / Zapier)',
            'Integración CRM y pagos online',
            'Contenidos: redes, video y diseño gráfico',
            'Medición & optimización: GA4 + GTM, SEO técnico y CRO (tests A/B)',
          ]}
        />

        <Card
          title="Estrategia & Capacitaciones a Medida"
          items={[
            'Planes estratégicos (ej. 2026–2030)',
            'Go-to-market B2B y playbooks comerciales (CRM, secuencias)',
            'Embudos de venta (atracción → conversión → fidelización)',
            'Capacitaciones a pedido (ej. “Importa desde China con Éxito”)',
            'IA aplicada al negocio (diagnóstico y casos de uso)',
          ]}
        />
      </div>

      {/* CTA inferior */}
      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/sections/contacto"
          className="inline-flex items-center gap-2 rounded-2xl bg-white text-neutral-900 px-5 py-3 font-semibold"
        >
          Solicitar propuesta
        </Link>
        <Link
          href="/sections/socios"
          className="inline-flex items-center gap-2 rounded-2xl border border-[var(--border)] px-5 py-3 font-semibold hover:bg-neutral-900"
        >
          Programa Socios (revenue share)
        </Link>
      </div>
    </div>
  )
}

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
      <h2 className="text-xl font-semibold">{title}</h2>
      <ul className="mt-4 space-y-2 text-sm text-neutral-300">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2">
            <Check size={16} className="mt-0.5" /> {it}
          </li>
        ))}
      </ul>
    </div>
  )
}

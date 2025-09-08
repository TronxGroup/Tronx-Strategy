// app/sections/socios/page.tsx
import Link from 'next/link'
import { Check } from 'lucide-react'

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Socios (Revenue Share)</h1>
      <p className="mt-3 text-neutral-300 max-w-3xl">
        Vendemos tus servicios con nuestro embudo, CRM y contenidos. Tú te enfocas en entregar;
        nosotros en captar, convertir y cerrar. Cobramos un porcentaje por cada venta realizada.
      </p>

      <Section
        title="Qué hacemos (ejemplo: Echevensko B2B)"
        items={[
          'Activos de conversión: video comercial, landing y copy web',
          'Email marketing: diseño, copy y envíos personalizados vía Zoho',
          'Base B2B segmentada (compliance) y campañas cuando aplica',
          'Automatización & CRM: Zoho CRM/Campaigns, scoring y pipelines',
          'Cierre & reporting: seguimiento, coordinación y liquidación por venta',
        ]}
      />

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <Card
          title="Qué incluye Tronx"
          items={[
            'Landing optimizada + video/reel comercial',
            'Copy para web/email + secuencias de outreach',
            'Setup Zoho (o tu CRM) + automatizaciones',
            'Base B2B segmentada y compliance (opt-out, políticas)',
            'Panel de métricas y reporte mensual',
          ]}
        />
        <Card
          title="Qué aporta el Socio"
          items={[
            'Propuesta de valor, precios mínimos y materiales base',
            'Disponibilidad para demos/reuniones y entrega del servicio',
            'SLA de respuesta y política de devoluciones',
          ]}
        />
      </div>

      <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 mt-8">
        <h2 className="text-xl font-semibold">Modelo económico</h2>
        <ul className="mt-4 space-y-2 text-sm text-neutral-300">
          <li>• Servicios: <b>15–25%</b> sobre importe neto (sin impuestos/fees)</li>
          <li>• Productos digitales/licencias: <b>20–35%</b></li>
          <li>• Suscripciones: <b>10–20%</b> (primeros 3–6 meses)</li>
          <li>• Venta válida: pago acreditado (sin chargeback a 14 días)</li>
          <li>• Liquidación: mensual, con reporte de ventas y devoluciones</li>
          <li>• <b>Atribución</b>: ventana estándar <b>30 días</b> (cookie/UTM/CRM)</li>
        </ul>
      </div>

      <Section
        title="Proceso"
        items={[
          'Alineación & oferta: catálogo, precios y metas',
          'Embudo & datos: video + landing + lista B2B + CRM',
          'Activación: email/ads, nurturing y calificación',
          'Cierre & cobro: registro en CRM y liquidación del %',
          'Optimización: métricas y mejoras continuas',
        ]}
      />

      <Section
        title="Métricas que seguimos"
        items={[
          'CAC por canal y payback',
          'Apertura, clic y reply en email',
          'MQL → SQL y tasa de cierre',
          'Ticket promedio y LTV',
        ]}
      />

      {/* POSTULACIÓN (FORMSPREE) */}
      <section className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 mt-10">
        <h2 className="text-xl font-semibold">Postula como Socio</h2>
        <p className="mt-2 text-neutral-300 text-sm">
          Completa el formulario y te contactaremos para evaluar encaje y plan de activación.
        </p>

        {/* Reemplaza YOUR_FORM_ID por el ID real de tu formulario en Formspree */}
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Honeypot anti-bots */}
          <input type="text" name="_gotcha" className="hidden" aria-hidden="true" />

          <div>
            <label className="block text-sm text-neutral-400">Empresa*</label>
            <input
              type="text"
              name="company"
              required
              className="mt-1 w-full rounded-xl border border-[var(--border)] bg-neutral-900 px-3 py-2 text-sm text-white"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-400">Nombre y apellido*</label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 w-full rounded-xl border border-[var(--border)] bg-neutral-900 px-3 py-2 text-sm text-white"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-400">Email*</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full rounded-xl border border-[var(--border)] bg-neutral-900 px-3 py-2 text-sm text-white"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-400">Teléfono / WhatsApp</label>
            <input
              type="tel"
              name="phone"
              className="mt-1 w-full rounded-xl border border-[var(--border)] bg-neutral-900 px-3 py-2 text-sm text-white"
              placeholder="+56 9 1234 5678"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-400">Región / Ciudad</label>
            <input
              type="text"
              name="region"
              className="mt-1 w-full rounded-xl border border-[var(--border)] bg-neutral-900 px-3 py-2 text-sm text-white"
              placeholder="Región Metropolitana, Chile"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-400">Web / LinkedIn</label>
            <input
              type="url"
              name="website"
              className="mt-1 w-full rounded-xl border border-[var(--border)] bg-neutral-900 px-3 py-2 text-sm text-white"
              placeholder="https://tusitio.com"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-400">Ticket promedio (USD/CLP)</label>
            <input
              type="text"
              name="avg_ticket"
              className="mt-1 w-full rounded-xl border border-[var(--border)] bg-neutral-900 px-3 py-2 text-sm text-white"
              placeholder="Ej: CLP 450.000"
            />
          </div>

          <div>
            <label className="block text-sm text-neutral-400">Tipo de servicio</label>
            <select
              name="service_type"
              className="mt-1 w-full rounded-xl border border-[var(--border)] bg-neutral-900 px-3 py-2 text-sm text-white"
              defaultValue=""
            >
              <option value="" disabled>Selecciona…</option>
              <option value="charlas_b2b">Charlas B2B</option>
              <option value="servicios_profesionales">Servicios profesionales</option>
              <option value="cursos_digitales">Cursos / productos digitales</option>
              <option value="pyme_local">PyME Local</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm text-neutral-400">Mensaje</label>
            <textarea
              name="message"
              rows={4}
              className="mt-1 w-full rounded-xl border border-[var(--border)] bg-neutral-900 px-3 py-2 text-sm text-white"
              placeholder="Cuéntanos tu propuesta de valor, metas y plazos."
            />
          </div>

          {/* Config extra */}
          <input type="hidden" name="_subject" value="Nueva postulación — Programa Socios (Tronx Strategy)" />
          {/* Si quieres redirigir a una página de gracias:
          <input type="hidden" name="_redirect" value="https://tudominio.com/gracias" />
          */}

          <div className="md:col-span-2 flex items-start gap-2">
            <input type="checkbox" name="consent" required className="mt-1" />
            <span className="text-xs text-neutral-400">
              Acepto el tratamiento de datos B2B, la política de privacidad y el envío de comunicaciones relacionadas.
              Puedo desuscribirme en cualquier momento.
            </span>
          </div>

          <div className="md:col-span-2 flex gap-3 mt-2">
            <button
              type="submit"
              className="inline-flex items-center rounded-2xl bg-white text-neutral-900 px-5 py-3 text-sm font-semibold"
            >
              Enviar postulación
            </button>
            <Link
              href="/sections/contacto"
              className="inline-flex items-center rounded-2xl border border-[var(--border)] px-5 py-3 text-sm font-semibold hover:bg-neutral-900"
            >
              O contáctanos
            </Link>
          </div>

          <p className="md:col-span-2 text-xs text-neutral-500 mt-2">
            *Trabajamos con datos B2B y respetamos opt-out, privacidad y normativa local.
          </p>
        </form>
      </section>
    </div>
  )
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 mt-8">
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

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
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

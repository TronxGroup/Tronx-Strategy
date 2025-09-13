import Link from 'next/link';
import { Check } from 'lucide-react';

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Programa Socios (Revenue Share)</h1>
      <p className="mt-3 text-white/70 max-w-3xl">
        Vendemos tus servicios con nuestro embudo, CRM y contenidos. Tú te enfocas en entregar;
        nosotros en captar, nutrir y cerrar. El pago es por performance: porcentaje de cada venta acreditada.
      </p>

      <Section
        title="Qué hacemos (ejemplo: Echevensko B2B)"
        items={[
          'Activos de conversión: video comercial, landing y copy',
          'Email marketing: diseño, copy y envíos personalizados (Zoho)',
          'Base B2B segmentada (opt-out y compliance) + campañas cuando aplica',
          'Automatización & CRM: Zoho CRM/Campaigns, scoring y pipelines',
          'Cierre & reporting: seguimiento, coordinación y liquidación por venta',
        ]}
      />

      {/* Pares: qué ponemos nosotros vs. qué trae el socio */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <Card
          title="Qué incluye Tronx"
          items={[
            'Landing optimizada + video/reel comercial',
            'Copy para web/email + secuencias de outreach',
            'Setup de CRM (Zoho u otro) + automatizaciones',
            'Base B2B segmentada y cumplimiento (opt-out, privacidad)',
            'Panel de métricas y reporte mensual',
          ]}
        />
        <Card
          title="Qué aporta el Socio"
          items={[
            'Propuesta de valor, precios mínimos y materiales base',
            'Disponibilidad para demos/reuniones y entrega del servicio',
            'SLA de respuesta y política de devoluciones definidas',
          ]}
        />
      </div>

      {/* Elegibilidad rápida */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 mt-8">
        <h2 className="text-xl font-semibold">Elegibilidad (fit rápido)</h2>
        <ul className="mt-3 grid md:grid-cols-3 gap-2 text-sm text-white/80">
          <Li>Oferta clara y repetible (no “one-off” a medida en cada venta)</Li>
          <Li>Capacidad de entrega (cupos/agenda y equipo disponibles)</Li>
          <Li>Ticket y márgenes acordes a revenue share</Li>
        </ul>
      </div>

      {/* Modelo económico */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 mt-8">
        <h2 className="text-xl font-semibold">Modelo económico</h2>
        <ul className="mt-4 space-y-2 text-sm text-white/80">
          <li>• Servicios: <b>15–25%</b> sobre importe neto (sin impuestos/fees)</li>
          <li>• Productos digitales/licencias: <b>20–35%</b></li>
          <li>• Suscripciones: <b>10–20%</b> (primeros 3–6 meses)</li>
          <li>• Venta válida: pago acreditado y sin chargeback (a 14 días)</li>
          <li>• Liquidación: mensual, con reporte de ventas y devoluciones</li>
          <li>• <b>Atribución</b>: ventana estándar <b>30 días</b> (UTM/CRM)</li>
        </ul>
      </div>

      {/* Proceso */}
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

      {/* Métricas */}
      <Section
        title="Métricas que seguimos"
        items={[
          'CAC por canal y payback',
          'Apertura, clic y reply en email',
          'MQL → SQL y tasa de cierre',
          'Ticket promedio y LTV',
        ]}
      />

      {/* Cláusulas clave */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 mt-8">
        <h2 className="text-xl font-semibold">Cláusulas clave</h2>
        <ul className="mt-3 grid md:grid-cols-2 gap-2 text-sm text-white/80">
          <Li>No exclusividad salvo acuerdo expreso por vertical o territorio</Li>
          <Li>Uso de marca: lineamientos y aprobaciones previas</Li>
          <Li>Prioridad de soporte: canales definidos y tiempos de respuesta</Li>
          <Li>Datos B2B: privacidad, opt-out y cumplimiento normativo</Li>
        </ul>
      </div>

      {/* POSTULACIÓN */}
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 mt-10">
        <h2 className="text-xl font-semibold">Postula como Socio</h2>
        <p className="mt-2 text-white/70 text-sm">
          Completa el formulario y te contactaremos para evaluar encaje y plan de activación.
        </p>

        <form
          action="https://formspree.io/f/YOUR_FORM_ID" // ← reemplaza con tu ID real
          method="POST"
          className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Honeypot anti-bots */}
          <input type="text" name="_gotcha" className="hidden" aria-hidden="true" />

          <Input label="Empresa*" name="company" required />
          <Input label="Nombre y apellido*" name="name" required />
          <Input type="email" label="Email*" name="email" required />
          <Input label="Teléfono / WhatsApp" name="phone" placeholder="+56 9 1234 5678" />
          <Input label="Región / Ciudad" name="region" placeholder="Región Metropolitana, Chile" />
          <Input type="url" label="Web / LinkedIn" name="website" placeholder="https://tusitio.com" />
          <Input label="Ticket promedio (USD/CLP)" name="avg_ticket" placeholder="Ej: CLP 450.000" />

          <div>
            <label className="block text-sm text-white/70">Tipo de servicio</label>
            <select
              name="service_type"
              className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-white"
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
            <label className="block text-sm text-white/70">Mensaje</label>
            <textarea
              name="message"
              rows={4}
              className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-white"
              placeholder="Cuéntanos tu propuesta de valor, metas y plazos."
            />
          </div>

          {/* Config extra */}
          <input type="hidden" name="_subject" value="Nueva postulación — Programa Socios (Tronx Strategy)" />
          {/* <input type="hidden" name="_redirect" value="https://tudominio.com/gracias" /> */}

          <div className="md:col-span-2 flex items-start gap-2">
            <input type="checkbox" name="consent" required className="mt-1" />
            <span className="text-xs text-white/60">
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
              href="/contacto"
              className="inline-flex items-center rounded-2xl border border-white/10 px-5 py-3 text-sm font-semibold hover:bg-white/10"
            >
              O contáctanos
            </Link>
          </div>

          <p className="md:col-span-2 text-xs text-white/50 mt-2">
            *Trabajamos con datos B2B y respetamos opt-out, privacidad y normativa local.
          </p>
        </form>
      </section>
    </div>
  );
}

/* ============== Subcomponentes ============== */

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 mt-8">
      <h2 className="text-xl font-semibold">{title}</h2>
      <ul className="mt-4 space-y-2 text-sm text-white/80">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2">
            <Check size={16} className="mt-0.5" /> {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-white/80">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2">
            <Check size={16} className="mt-0.5" /> {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2">
      <Check size={16} className="mt-0.5" /> {children}
    </li>
  );
}

function Input({
  label,
  name,
  type = 'text',
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm text-white/70" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-white"
      />
    </div>
  );
}

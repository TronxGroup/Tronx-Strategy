import Section from "@/components/Section";

export const metadata = {
  title: "Programa Socios (Revenue Share) – Tronx Strategy",
  description:
    "Vendemos tus servicios con nuestro embudo, CRM y contenidos. Tú te enfocas en entregar; nosotros en captar, nutrir y cerrar.",
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 text-xs font-medium">
      {children}
    </span>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card p-6 border border-slate-200 shadow-sm hover:shadow-md transition rounded-2xl bg-white">
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <div className="mt-3 text-sm text-slate-700">{children}</div>
    </div>
  );
}

export default function Page() {
  return (
    <Section className="py-16">
      {/* HERO */}
      <div className="max-w-3xl">
        <Pill>Servicios · Growth con reparto de ingresos</Pill>
        <h1 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
          Programa Socios <span className="text-emerald-600">(Revenue Share)</span>
        </h1>
        <p className="p-muted mt-4">
          Vendemos tus servicios con nuestro embudo, CRM y contenidos. Tú te enfocas en entregar; nosotros en captar,
          nutrir y cerrar. El pago es por performance: porcentaje de cada venta acreditada.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Pill>Embudo + CRM + Contenido</Pill>
          <Pill>Liquidación mensual</Pill>
          <Pill>Atribución 30 días</Pill>
          <Pill>Compliance & Opt-out</Pill>
        </div>
        <div className="mt-8 flex gap-3">
          <a href="/contacto" className="btn btn-primary">Quiero evaluar mi fit</a>
          <a href="/servicios" className="btn btn-secondary">Ver todos los servicios</a>
        </div>
      </div>

      {/* QUÉ HACEMOS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <Card title="Activos de conversión">
          <ul className="list-disc pl-5 space-y-1">
            <li>Video/reel comercial y landing con copy orientado a conversión</li>
            <li>Formularios con etiquetado de origen y doble validación</li>
            <li>Pixel/UTM + medición GA4/GTM</li>
          </ul>
        </Card>
        <Card title="Operación de demanda">
          <ul className="list-disc pl-5 space-y-1">
            <li>Email marketing (Zoho/HubSpot): diseño, copy y envíos personalizados</li>
            <li>Base B2B segmentada con opt-out y cumplimiento</li>
            <li>Campañas (Google · Meta · LinkedIn) cuando aplica</li>
          </ul>
        </Card>
        <Card title="Cierre & reporting">
          <ul className="list-disc pl-5 space-y-1">
            <li>CRM y automatizaciones: scoring, pipelines y SLAs</li>
            <li>Seguimiento, coordinación y liquidación por venta válida</li>
            <li>Reporte mensual consolidado (ventas, devoluciones, ROAS/CAC)</li>
          </ul>
        </Card>
      </div>

      {/* MODELO ECONÓMICO */}
      <div className="mt-12 card p-6 border border-slate-200 rounded-2xl bg-white">
        <h2 className="text-xl font-bold text-slate-900">Modelo económico</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
            <thead className="bg-slate-50 text-slate-700">
              <tr>
                <th className="px-4 py-2 text-left">Tipo de oferta</th>
                <th className="px-4 py-2 text-left">Porcentaje</th>
                <th className="px-4 py-2 text-left">Notas</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="px-4 py-2">Servicios</td>
                <td className="px-4 py-2 font-medium">15–25% sobre neto</td>
                <td className="px-4 py-2">Sin impuestos/fees</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Productos digitales / licencias</td>
                <td className="px-4 py-2 font-medium">20–35%</td>
                <td className="px-4 py-2">Según ticket y margen</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Suscripciones</td>
                <td className="px-4 py-2 font-medium">10–20%</td>
                <td className="px-4 py-2">Primeros 3–6 meses</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className="mt-4 text-sm text-slate-700 list-disc pl-5 space-y-1">
          <li><strong>Venta válida:</strong> pago acreditado y sin chargeback (a 14 días)</li>
          <li><strong>Liquidación:</strong> mensual, con reporte de ventas y devoluciones</li>
          <li><strong>Atribución:</strong> ventana estándar 30 días (UTM/CRM)</li>
        </ul>
      </div>

      {/* QUÉ INCLUYE / QUÉ APORTA EL SOCIO */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <Card title="Qué incluye Tronx">
          <ul className="list-disc pl-5 space-y-1">
            <li>Landing optimizada + video/reel comercial</li>
            <li>Copy para web/email + secuencias de outreach</li>
            <li>Setup de CRM (Zoho u otro) + automatizaciones</li>
            <li>Base B2B segmentada y cumplimiento (opt-out, privacidad)</li>
            <li>Panel de métricas y reporte mensual</li>
          </ul>
        </Card>
        <Card title="Qué aporta el Socio">
          <ul className="list-disc pl-5 space-y-1">
            <li>Propuesta de valor, precios mínimos y materiales base</li>
            <li>Disponibilidad para demos/reuniones y entrega del servicio</li>
            <li>SLA de respuesta y política de devoluciones definidas</li>
          </ul>
        </Card>
      </div>

      {/* ELEGIBILIDAD Y PROCESO */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
        <Card title="Elegibilidad (fit rápido)">
          <ul className="list-disc pl-5 space-y-1">
            <li>Oferta clara y repetible (no “one-off” 100% a medida)</li>
            <li>Capacidad de entrega (cupos/agenda y equipo disponibles)</li>
            <li>Ticket y márgenes acordes a Revenue Share</li>
          </ul>
        </Card>
        <Card title="Proceso">
          <ol className="list-decimal pl-5 space-y-1">
            <li>Alineación & oferta: catálogo, precios y metas</li>
            <li>Embudo & datos: video + landing + lista B2B + CRM</li>
            <li>Activación: email/ads, nurturing y calificación</li>
            <li>Cierre & cobro: registro en CRM y liquidación del %</li>
            <li>Optimización: métricas y mejoras continuas</li>
          </ol>
        </Card>
        <Card title="Métricas que seguimos">
          <ul className="list-disc pl-5 space-y-1">
            <li>CAC por canal y payback</li>
            <li>Apertura, clic y reply en email</li>
            <li>MQL → SQL y tasa de cierre</li>
            <li>Ticket promedio y LTV</li>
          </ul>
        </Card>
      </div>

      {/* CTA FINAL */}
      <div className="mt-12 card p-6 border border-slate-200 rounded-2xl bg-gradient-to-br from-emerald-50 to-white">
        <h2 className="text-xl font-bold text-slate-900">¿Crees que tu oferta calza con el programa?</h2>
        <p className="mt-2 text-sm text-slate-700">
          Agenda una evaluación de fit. Si avanzamos, salimos a vender en semanas, no meses.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="/contacto" className="btn btn-primary">Evaluar mi fit</a>
          <a href="/casos" className="btn btn-secondary">Ver casos de éxito</a>
        </div>
      </div>
    </Section>
  );
}

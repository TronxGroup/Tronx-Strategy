import Section from "@/components/Section";
import { CheckCircle2, TrendingUp, Users, Workflow, BarChart3 } from "lucide-react";

export const metadata = {
  title: "Programa Socios (Revenue Share) – Tronx Strategy",
  description:
    "Nos convertimos en tu partner comercial: operamos embudos, CRM y contenidos para que vendas más. Tú entregas, nosotros captamos, nutrimos y cerramos.",
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
        <Pill>Revenue Share · Socios Estratégicos</Pill>
        <h1 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
          Programa Socios <span className="text-emerald-600">(Revenue Share)</span>
        </h1>
        <p className="p-muted mt-4">
          Nos convertimos en tu partner comercial: diseñamos y operamos el embudo completo (landing, contenidos, CRM, 
          campañas) para que vendas más. Tú entregas el servicio; nosotros captamos, nutrimos y cerramos. 
          El pago es solo por ventas válidas, con reparto de ingresos.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Pill>Embudo + CRM</Pill>
          <Pill>Ventas validadas</Pill>
          <Pill>Liquidación mensual</Pill>
          <Pill>Métricas claras</Pill>
        </div>
        <div className="mt-8 flex gap-3">
          <a href="/contacto" className="btn btn-primary">Evaluar mi fit</a>
          <a href="/servicios" className="btn btn-secondary">Otros servicios</a>
        </div>
      </div>

      {/* QUÉ INCLUYE */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Activos de conversión">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-emerald-600 mt-0.5" />
              Video/reel comercial y landing optimizada
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-emerald-600 mt-0.5" />
              Formularios con tracking y validación
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-emerald-600 mt-0.5" />
              GA4/GTM para medición de conversiones
            </li>
          </ul>
        </Card>
        <Card title="Operación de demanda">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <Users size={16} className="text-emerald-600 mt-0.5" />
              Email marketing segmentado (Zoho/HubSpot)
            </li>
            <li className="flex items-start gap-2">
              <Workflow size={16} className="text-emerald-600 mt-0.5" />
              Base B2B con opt-out y cumplimiento
            </li>
            <li className="flex items-start gap-2">
              <TrendingUp size={16} className="text-emerald-600 mt-0.5" />
              Ads en Google · Meta · LinkedIn
            </li>
          </ul>
        </Card>
        <Card title="Cierre & reporting">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <Workflow size={16} className="text-emerald-600 mt-0.5" />
              CRM: scoring, pipelines y SLAs
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-emerald-600 mt-0.5" />
              Liquidación mensual por venta válida
            </li>
            <li className="flex items-start gap-2">
              <BarChart3 size={16} className="text-emerald-600 mt-0.5" />
              Reporte de ventas, CAC y ROAS
            </li>
          </ul>
        </Card>
      </div>

      {/* MODELO ECONÓMICO */}
      <div className="mt-12 card p-6 border border-slate-200 bg-white">
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
        <p className="mt-4 text-sm text-slate-600">
          <strong>Liquidación:</strong> mensual, con reporte consolidado · 
          <strong> Atribución:</strong> estándar 30 días · 
          <strong> Venta válida:</strong> pago acreditado sin devoluciones.
        </p>
      </div>

      {/* PROCESO */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card title="Elegibilidad (fit rápido)">
          <ul className="list-disc pl-5 space-y-1">
            <li>Oferta clara y repetible</li>
            <li>Capacidad de entrega real</li>
            <li>Ticket y márgenes acordes</li>
          </ul>
        </Card>
        <Card title="Proceso">
          <ol className="list-decimal pl-5 space-y-1">
            <li>Definimos oferta y metas</li>
            <li>Embudo + CRM + contenidos</li>
            <li>Activación con email/ads</li>
            <li>Cierre en CRM + cobro</li>
            <li>Optimización continua</li>
          </ol>
        </Card>
        <Card title="Métricas que seguimos">
          <ul className="list-disc pl-5 space-y-1">
            <li>CAC y payback</li>
            <li>Apertura/clic en email</li>
            <li>MQL → SQL → Venta</li>
            <li>Ticket promedio y LTV</li>
          </ul>
        </Card>
      </div>

      {/* CTA FINAL */}
      <div className="mt-12 card p-6 border border-slate-200 bg-gradient-to-br from-emerald-50 to-white">
        <h2 className="text-xl font-bold text-slate-900">¿Crees que tu oferta calza con el programa?</h2>
        <p className="mt-2 text-sm text-slate-700">
          Agenda una evaluación gratuita. Si avanzamos, en pocas semanas tendremos tu embudo listo y saldremos a vender.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="/contacto" className="btn btn-primary">Evaluar mi fit</a>
          <a href="/casos" className="btn btn-secondary">Ver casos de éxito</a>
        </div>
      </div>
    </Section>
  );
}

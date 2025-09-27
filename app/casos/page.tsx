import Section from "@/components/Section";
import { CheckCircle2, LineChart, Star, Quote } from "lucide-react";

export const metadata = { title: "Casos de éxito – Tronx Strategy" };

type CaseProps = {
  title: string;
  context?: string;
  bullets: string[];
  results?: string[];
  kpis?: { label: string; value: string }[];
};

function KPI({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-emerald-100 bg-emerald-50 px-3 py-2 text-center">
      <p className="text-xs text-emerald-700">{label}</p>
      <p className="text-sm font-semibold text-emerald-800">{value}</p>
    </div>
  );
}

function Case({ title, context, bullets, results, kpis }: CaseProps) {
  return (
    <div className="card p-6 border border-slate-200 shadow-sm hover:shadow-md transition rounded-2xl bg-white">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-semibold text-lg text-slate-900">{title}</h3>
        {kpis && kpis.length > 0 && (
          <div className="grid grid-cols-2 gap-2 min-w-[180px]">
            {kpis.map((k, i) => (
              <KPI key={i} label={k.label} value={k.value} />
            ))}
          </div>
        )}
      </div>

      {context && <p className="text-sm text-slate-600 mt-2">{context}</p>}

      <ul className="mt-3 text-sm text-slate-700 space-y-2">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-emerald-600 mt-0.5" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {results && (
        <div className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50 p-4">
          <p className="font-medium text-emerald-800 flex items-center gap-2">
            <LineChart size={16} /> Resultados destacados
          </p>
          <ul className="mt-2 list-disc pl-5 text-sm text-emerald-900 space-y-1">
            {results.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function TestimonialCard() {
  return (
    <div className="card p-6 border border-slate-200 bg-white">
      <div className="flex items-center gap-2 text-emerald-700">
        <Quote size={18} />
        <p className="font-semibold">Testimonio</p>
      </div>
      <p className="mt-2 text-sm text-slate-700">
        “Placeholder de cita del cliente/socio sobre el impacto en captación y cierre con Tronx Strategy.”
      </p>
      <div className="mt-3 flex items-center gap-2 text-amber-500">
        <Star size={16} /><Star size={16} /><Star size={16} /><Star size={16} /><Star size={16} />
      </div>
      <p className="mt-1 text-xs text-slate-500">Nombre · Cargo · Empresa</p>
    </div>
  );
}

export default function Page() {
  return (
    <Section className="py-16">
      {/* HERO */}
      <div className="max-w-3xl">
        <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 text-xs font-medium">
          Implementación · Operación · Métricas
        </span>
        <h1 className="h2 mt-3">Casos de éxito</h1>
        <p className="p-muted mt-3">
          Selección representativa de embudos, CRM y growth operativo. Iremos sumando métricas y testimonios aprobados
          por clientes y socios. Si quieres que evaluemos tu caso, conversemos.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/contacto" className="btn btn-primary">Quiero mi caso</a>
          <a href="/servicios" className="btn btn-secondary">Ver servicios</a>
        </div>
      </div>

      {/* CASES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <Case
          title="APCC – Cámara de Comercio Asia Pacífico"
          context="Membresías B2B (empresas y profesionales). Embudo + CRM + nurtures + reporting."
          bullets={[
            "Embudo de membresías con Zoho CRM y sincronización a HubSpot",
            "Landing pages, medición GA4/GTM y campañas de captación",
            "Secuencias de nurturing y reportería mensual automatizada",
          ]}
          results={[
            "+150 leads calificados en 60 días",
            "Embudo escalable y trazable (MQL → SQL → Alta)",
          ]}
          kpis={[
            { label: "MQL 60d", value: "150+" },
            { label: "Time-to-live", value: "2–3 sem" },
          ]}
        />

        <Case
          title="Echevensko – Charlas corporativas B2B"
          context="Capacitación creativa para empresas y universidades. Revenue Share + operación de demanda."
          bullets={[
            "Landing de captación + secuencias de outreach",
            "CRM con scoring, pipelines y SLAs comerciales",
            "Liquidación por Revenue Share con reportería de ventas",
          ]}
          results={[
            "4 contratos corporativos en el primer trimestre",
            "Pipeline recurrente de charlas en expansión",
          ]}
          kpis={[
            { label: "Contratos Q1", value: "4" },
            { label: "Atribución", value: "30 días" },
          ]}
        />
      </div>

      {/* SOCIAL PROOF / TESTIMONIOS (placeholder) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>

      {/* CTA FINAL */}
      <div className="card p-6 mt-12 border border-slate-200 rounded-2xl bg-gradient-to-br from-emerald-50 to-white text-center">
        <h2 className="text-xl font-bold text-slate-900">¿Quieres ser nuestro próximo caso?</h2>
        <p className="text-sm text-slate-700 mt-2">
          Diseñamos el embudo, activamos campañas, operamos CRM y reportamos KPIs de negocio. Empieza con una evaluación sin costo.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 justify-center">
          <a href="/contacto" className="btn btn-primary">Conversemos</a>
          <a href="/servicios/programa-socios" className="btn btn-secondary">Programa Socios</a>
          <a href="/servicios/tronx-cloud" className="btn btn-ghost">Tronx Cloud Suite</a>
        </div>
      </div>
    </Section>
  );
}

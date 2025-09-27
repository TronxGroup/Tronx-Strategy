
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";

export const metadata = { title: "Servicios – Tronx Strategy" };

export default function Page() {
  return (
    <Section className="py-16">
      <h1 className="h2">Servicios</h1>
      <p className="p-muted mt-4 max-w-3xl">
        Entregables claros en semanas: implementamos y operamos tu embudo con sitios/landings, performance marketing,
        CRM y automatizaciones. Además, Programa Socios (Revenue Share).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <FeatureCard title="Onboarding (2–4 semanas)">Setup de dominios, correo corporativo, CRM, landings y medición con GA4/GTM.</FeatureCard>
        <FeatureCard title="Growth Retainers">Sprints quincenales: Ads (Google/Meta/LinkedIn), SEO/CRO, contenidos y reporting.</FeatureCard>
        <FeatureCard title="Estrategia & Capacitaciones">Planes estratégicos, playbooks comerciales y workshops para tu equipo.</FeatureCard>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="card p-6">
          <h4 className="font-semibold">Programa Socios (Revenue Share)</h4>
          <ul className="mt-2 text-sm text-slate-600 list-disc pl-5 space-y-1">
            <li>Servicios: 15–25% neto</li>
            <li>Productos/licencias: 20–35%</li>
            <li>Suscripciones: 10–20% (primeros 3–6 meses)</li>
            <li>Liquidación mensual con reporte validado</li>
          </ul>
        </div>
        <div className="card p-6">
          <h4 className="font-semibold">Stack Tecnológico</h4>
          <p className="text-sm text-slate-600 mt-2">
            Zoho CRM, Google Workspace, GA4, GTM, Search Console, Vercel, Cloudflare, Make/Zapier.
          </p>
        </div>
      </div>
    </Section>
  );
}

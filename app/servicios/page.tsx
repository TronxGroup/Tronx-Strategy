import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";

export const metadata = { title: "Servicios – Tronx Strategy" };

export default function Page() {
  return (
    <Section className="py-16">
      <h1 className="h2">Servicios</h1>
      <p className="p-muted mt-4 max-w-3xl">
        Entregables claros en semanas: implementamos y operamos tu embudo con sitios/landings, performance marketing,
        CRM y automatizaciones. Además, Programa Socios (Revenue Share) y nuestra plataforma unificada Tronx Cloud Suite.
      </p>

      {/* Tronx Cloud Suite */}
      <div className="mt-10">
        <h2 className="h3">Tronx Cloud Suite</h2>
        <p className="p-muted mt-3 max-w-3xl">
          Tu operación digital unificada: infraestructura web, datos y analítica, CRM & automatizaciones, ads y
          seguridad — todo integrado y administrado por Tronx Strategy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <FeatureCard title="WebOps">
            Dominios, DNS, SSL, hosting serverless (Vercel), CDN y seguridad (Cloudflare). Despliegues continuos desde GitHub.
          </FeatureCard>
          <FeatureCard title="Data & Analytics">
            GA4, Tag Manager y Search Console centralizados. Eventos, conversiones y dashboards de negocio.
          </FeatureCard>
          <FeatureCard title="CRM & Automation">
            Zoho CRM (o HubSpot si aplica), scoring, pipelines, nurturing, formularios y respuestas automáticas.
          </FeatureCard>
          <FeatureCard title="Ads Ops">
            Google / Meta / LinkedIn Ads conectados al CRM. UTM, lead gen y reporting de CAC/ROAS.
          </FeatureCard>
          <FeatureCard title="Security & Compliance">
            Políticas de privacidad, cookies, SPF/DKIM/DMARC, backups y control de accesos.
          </FeatureCard>
          <FeatureCard title="SLA & Soporte">
            Sprints quincenales, tickets y soporte operativo con KPIs y roadmap de mejora continua.
          </FeatureCard>
        </div>

        <div className="card p-6 mt-6">
          <h4 className="font-semibold">Qué incluye</h4>
          <ul className="mt-2 text-sm text-slate-600 list-disc pl-5 space-y-1">
            <li>Setup inicial guiado (2–4 semanas) con handoff documentado.</li>
            <li>Run operativo mensual: campañas, contenidos, medición y optimización.</li>
            <li>Panel de métricas por marca/unidad y reportes ejecutivos.</li>
            <li>Integración con herramientas existentes (Zoho, HubSpot, Make/Zapier, pasarelas de pago).</li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a href="/contacto" className="btn btn-primary">Solicitar demo</a>
            <a href="/quienes-somos" className="btn btn-secondary">Conocer el equipo</a>
          </div>
        </div>
      </div>

      {/* Servicios core */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <FeatureCard title="Onboarding (2–4 semanas)">
          Setup de dominios, correo corporativo, CRM, landings y medición con GA4/GTM.
        </FeatureCard>
        <FeatureCard title="Growth Retainers">
          Sprints quincenales: Ads (Google/Meta/LinkedIn), SEO/CRO, contenidos y reporting.
        </FeatureCard>
        <FeatureCard title="Estrategia & Capacitaciones">
          Planes estratégicos, playbooks comerciales y workshops para tu equipo.
        </FeatureCard>
      </div>

      {/* Revenue Share + Stack */}
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
            Zoho CRM, HubSpot (si aplica APCC), Google Workspace, GA4, GTM, Search Console, Vercel, Cloudflare, Make/Zapier.
          </p>
        </div>
      </div>

      {/* CTA final */}
      <div className="card p-6 mt-8">
        <h4 className="font-semibold">¿Listo para operar en la nube con claridad y métricas?</h4>
        <p className="text-sm text-slate-600 mt-2">
          Te mostramos cómo Tronx Cloud Suite integra tus activos digitales para acelerar resultados.
        </p>
        <a href="/contacto" className="btn btn-primary mt-4">Hablar con un especialista</a>
      </div>
    </Section>
  );
}

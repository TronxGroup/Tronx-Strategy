import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";

export const metadata = { title: "Servicios – Tronx Strategy" };

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 text-xs font-medium">
      {children}
    </span>
  );
}

export default function Page() {
  return (
    <Section className="py-16">
      {/* HERO */}
      <div className="max-w-3xl">
        <Pill>Growth · Operación · Métricas</Pill>
        <h1 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
          Servicios
        </h1>
        <p className="p-muted mt-4">
          Entregables claros en semanas: implementamos y operamos tu embudo con
          sitios/landings, performance marketing, CRM y automatizaciones. Además,
          el Programa Socios (Revenue Share) y nuestra plataforma unificada{" "}
          <a href="/tronx-cloud" className="underline decoration-emerald-500 underline-offset-2">
            Tronx Cloud Suite
          </a>.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Pill>Onboarding 2–4 semanas</Pill>
          <Pill>Retainers de Growth</Pill>
          <Pill>Revenue Share</Pill>
          <Pill>Dashboards & KPIs</Pill>
        </div>
        <div className="mt-8 flex gap-3">
          <a href="/tronx-cloud" className="btn btn-primary">Conocer Tronx Cloud Suite</a>
          <a href="/servicios/programa-socios" className="btn btn-secondary">Programa Socios</a>
        </div>
      </div>

      {/* TRONX CLOUD SUITE (destacado) */}
      <div className="mt-12 card p-6 border border-slate-200 rounded-2xl bg-gradient-to-br from-emerald-50 to-white">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-slate-900">Tronx Cloud Suite</h2>
            <p className="text-sm text-slate-700 mt-2 max-w-3xl">
              Tu operación digital unificada: infraestructura web, datos y analítica, CRM & automatizaciones,
              ads y seguridad — todo integrado y administrado por Tronx Strategy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <FeatureCard title="WebOps">
                Dominios, DNS, SSL, hosting serverless (Vercel) y protección CDN/WAF (Cloudflare). CI/CD desde GitHub.
              </FeatureCard>
              <FeatureCard title="Data & Analytics">
                GA4, Tag Manager y Search Console centralizados. Eventos, conversiones y dashboards ejecutivos (CAC, CVR, LTV).
              </FeatureCard>
              <FeatureCard title="CRM & Automation">
                Zoho CRM (o HubSpot si aplica), scoring, pipelines, nurturing, formularios con etiquetado y respuestas automáticas.
              </FeatureCard>
              <FeatureCard title="Ads Ops">
                Google / Meta / LinkedIn Ads conectados al CRM. UTM, lead gen, atribución 30 días y reporting de CAC/ROAS.
              </FeatureCard>
              <FeatureCard title="Security & Compliance">
                Privacidad & cookies, SPF/DKIM/DMARC, backups, control de accesos y 2FA.
              </FeatureCard>
              <FeatureCard title="SLA & Soporte">
                Sprints quincenales, tickets priorizados, QBR y roadmap de mejora continua.
              </FeatureCard>
            </div>
            <div className="mt-6 flex gap-3">
              <a href="/tronx-cloud" className="btn btn-primary">Ver detalle de Tronx Cloud Suite</a>
              <a href="/contacto" className="btn btn-ghost">Solicitar demo</a>
            </div>
          </div>
        </div>
      </div>

      {/* CORE SERVICES */}
      <div className="mt-12">
        <h2 className="h3">Servicios core</h2>
        <p className="p-muted mt-2 max-w-3xl">
          Implementamos la base, operamos el crecimiento y te acompañamos con estrategia aplicable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <FeatureCard title="Onboarding (2–4 semanas)">
            Setup de dominios, correo corporativo, CRM, landings y medición con GA4/GTM. Handoff documentado.
          </FeatureCard>
          <FeatureCard title="Growth Retainers">
            Sprints quincenales: Ads (Google/Meta/LinkedIn), SEO/CRO, contenidos, dashboards y reporting.
          </FeatureCard>
          <FeatureCard title="Estrategia & Capacitaciones">
            Planes estratégicos 6–18 meses, playbooks comerciales y workshops para tu equipo.
          </FeatureCard>
        </div>
      </div>

      {/* REVENUE SHARE + STACK */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <div className="card p-6 border border-slate-200 rounded-2xl bg-white">
          <h3 className="text-base font-semibold text-slate-900">Programa Socios (Revenue Share)</h3>
          <p className="text-sm text-slate-700 mt-2">
            Vendemos tus servicios con nuestro embudo, CRM y contenidos. Tú entregas; nosotros captamos, nutrimos y cerramos.
          </p>
          <ul className="mt-3 text-sm text-slate-700 list-disc pl-5 space-y-1">
            <li>Servicios: 15–25% neto</li>
            <li>Productos/licencias: 20–35%</li>
            <li>Suscripciones: 10–20% (primeros 3–6 meses)</li>
            <li>Liquidación mensual con reporte validado</li>
          </ul>
          <a href="/servicios/programa-socios" className="btn btn-secondary mt-4">Conocer el programa</a>
        </div>

        <div className="card p-6 border border-slate-200 rounded-2xl bg-white">
          <h3 className="text-base font-semibold text-slate-900">Stack Tecnológico</h3>
          <p className="text-sm text-slate-700 mt-2">
            Zoho CRM, HubSpot (si aplica APCC), Google Workspace, GA4, GTM, Search Console, Vercel, Cloudflare, Make/Zapier.
          </p>
          <div className="mt-3">
            <a href="/tronx-cloud" className="btn btn-ghost">Cómo opera Tronx Cloud Suite</a>
          </div>
        </div>
      </div>

      {/* CTA FINAL */}
      <div className="card p-6 mt-12 border border-slate-200 rounded-2xl bg-white">
        <h4 className="font-semibold text-slate-900">¿Listo para operar en la nube con claridad y métricas?</h4>
        <p className="text-sm text-slate-700 mt-2">
          Te mostramos cómo Tronx Cloud Suite integra tus activos digitales para acelerar resultados — y si calzas, sumamos Revenue Share.
        </p>
        <div className="mt-4 flex gap-3">
          <a href="/contacto" className="btn btn-primary">Hablar con un especialista</a>
          <a href="/casos" className="btn btn-secondary">Ver casos de éxito</a>
        </div>
      </div>
    </Section>
  );
}

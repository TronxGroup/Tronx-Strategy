import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import { ArrowRight, CheckCircle2, Handshake, Rocket, Gauge, Shield, Settings2 } from "lucide-react";

export const metadata = { title: "Servicios – Tronx Strategy" };

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-brand-50 text-brand-700 border border-brand-200 px-3 py-1 text-xs font-medium">
      {children}
    </span>
  );
}

export default function Page() {
  return (
    <Section className="py-16">
      {/* HERO */}
      <div className="max-w-3xl">
        <div className="flex flex-wrap gap-2">
          <Pill>Growth B2B</Pill>
          <Pill>Operación en la nube</Pill>
          <Pill>Métricas & Embudos</Pill>
        </div>
        <h1 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
          Servicios
        </h1>
        <p className="p-muted mt-4">
          Entregables en semanas: diseñamos y operamos tu embudo con sitios/landings, performance marketing,
          CRM y automatizaciones. Destacamos nuestro{" "}
          <a href="/servicios/programa-socios" className="font-semibold underline decoration-brand-500 underline-offset-2">
            Programa Socios (Revenue Share)
          </a>{" "}
          y la plataforma unificada{" "}
          <a href="/servicios/tronx-cloud" className="font-semibold underline decoration-brand-500 underline-offset-2">
            Tronx Cloud Suite
          </a>.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <Pill>Onboarding 2–4 semanas</Pill>
          <Pill>Retainers de Growth</Pill>
          <Pill>Revenue Share</Pill>
          <Pill>Dashboards & KPIs</Pill>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/servicios/programa-socios" className="btn btn-primary">
            Conocer Programa Socios <ArrowRight size={18} />
          </a>
          <a href="/servicios/tronx-cloud" className="btn btn-secondary">
            Ver Tronx Cloud Suite
          </a>
        </div>
      </div>

      {/* BLOQUE DESTACADO: PROGRAMA SOCIOS */}
      <div className="mt-12 card p-6 border border-slate-200 rounded-2xl bg-gradient-to-br from-white to-brand-50">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 text-brand-700 text-sm font-semibold">
              <Handshake size={18} /> Programa Socios (Revenue Share)
            </div>
            <h2 className="text-xl font-bold text-slate-900 mt-1">
              Vendemos tus servicios. Tú entregas. Nosotros captamos, nutrimos y cerramos.
            </h2>
            <p className="text-sm text-slate-700 mt-2 max-w-3xl">
              Pagas sólo por performance (porcentaje sobre venta válida). Operamos con activos de conversión, CRM y contenidos.
            </p>

            <ul className="mt-4 text-sm text-slate-700 space-y-2">
              <li className="inline-flex items-start gap-2">
                <CheckCircle2 size={18} className="text-brand-600 mt-0.5" />
                <span><strong>Activos de conversión</strong>: video comercial, landing y copy de oferta.</span>
              </li>
              <li className="inline-flex items-start gap-2">
                <CheckCircle2 size={18} className="text-brand-600 mt-0.5" />
                <span><strong>CRM & automatización</strong>: Zoho (o HubSpot), scoring, pipelines, secuencias y nurturing.</span>
              </li>
              <li className="inline-flex items-start gap-2">
                <CheckCircle2 size={18} className="text-brand-600 mt-0.5" />
                <span><strong>Base B2B segmentada</strong> (opt-out y compliance) + campañas cuando aplica.</span>
              </li>
              <li className="inline-flex items-start gap-2">
                <CheckCircle2 size={18} className="text-brand-600 mt-0.5" />
                <span><strong>Cierre & reporting</strong>: registro en CRM y liquidación mensual con reporte validado.</span>
              </li>
            </ul>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="card p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">Servicios</p>
                <p className="text-sm font-medium">15–25% neto</p>
              </div>
              <div className="card p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">Productos/licencias</p>
                <p className="text-sm font-medium">20–35%</p>
              </div>
              <div className="card p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">Suscripciones</p>
                <p className="text-sm font-medium">10–20% (3–6 meses)</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/servicios/programa-socios" className="btn btn-primary">
                Cómo funciona
              </a>
              <a href="/contacto" className="btn btn-ghost">
                Postular como Socio
              </a>
            </div>
          </div>

          {/* Caja de elegibilidad */}
          <div className="card p-5 bg-white border border-brand-200 rounded-2xl">
            <h3 className="text-base font-semibold text-slate-900">Fit rápido (elegibilidad)</h3>
            <ul className="mt-2 text-sm text-slate-700 list-disc pl-5 space-y-1">
              <li>Oferta clara y repetible (no 100% a medida cada vez).</li>
              <li>Capacidad de entrega disponible (agenda/equipo).</li>
              <li>Ticket y márgenes acordes a revenue share.</li>
              <li>SLA de respuesta y devoluciones definidos.</li>
            </ul>
            <a href="/servicios/programa-socios#requisitos" className="btn btn-secondary mt-4 w-full">
              Ver requisitos
            </a>
          </div>
        </div>
      </div>

      {/* TRONX CLOUD SUITE */}
      <div className="mt-12 card p-6 border border-slate-200 rounded-2xl bg-gradient-to-br from-brand-50 to-white">
        <div className="inline-flex items-center gap-2 text-brand-700 text-sm font-semibold">
          <Settings2 size={18} /> Tronx Cloud Suite
        </div>
        <h2 className="text-xl font-bold text-slate-900 mt-1">
          Tu operación digital unificada (WebOps, Data, CRM, Ads, Security) administrada por Tronx Strategy.
        </h2>
        <p className="text-sm text-slate-700 mt-2 max-w-3xl">
          Infraestructura web, datos & analítica, CRM & automatizaciones, Ads y seguridad — integrado, medible y escalable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <FeatureCard title="WebOps">
            Dominios, DNS, SSL (Cloudflare), hosting serverless (Vercel) y CI/CD desde GitHub.
          </FeatureCard>
          <FeatureCard title="Data & Analytics">
            GA4, Tag Manager y Search Console. Eventos, conversiones y dashboards CAC/CVR/LTV.
          </FeatureCard>
          <FeatureCard title="CRM & Automation">
            Zoho CRM (o HubSpot), scoring, pipelines, nurturing, formularios etiquetados y auto-respuestas.
          </FeatureCard>
          <FeatureCard title="Ads Ops">
            Google / Meta / LinkedIn Ads conectados a CRM. UTM, atribución 30 días y ROAS.
          </FeatureCard>
          <FeatureCard title="Security & Compliance">
            Privacidad & cookies, SPF/DKIM/DMARC, backups y control de accesos.
          </FeatureCard>
          <FeatureCard title="SLA & Soporte">
            Sprints quincenales, tickets priorizados, QBR y roadmap continuo.
          </FeatureCard>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/servicios/tronx-cloud" className="btn btn-secondary">Ver detalle de Tronx Cloud Suite</a>
          <a href="/contacto" className="btn btn-ghost">Solicitar demo</a>
        </div>
      </div>

      {/* CORE SERVICES */}
      <div className="mt-12">
        <div className="flex items-center gap-2 text-slate-700">
          <Gauge size={18} className="text-brand-600" />
          <h2 className="h3">Servicios core</h2>
        </div>
        <p className="p-muted mt-2 max-w-3xl">
          Implementamos la base, operamos el crecimiento y acompañamos con estrategia aplicable.
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

      {/* CTA FINAL */}
      <div className="card p-6 mt-12 border border-slate-200 rounded-2xl bg-white">
        <h4 className="font-semibold text-slate-900">¿Listo para acelerar captación y cerrar con métricas claras?</h4>
        <p className="text-sm text-slate-700 mt-2">
          Si tu oferta calza, partimos con <strong>Programa Socios</strong>. Si necesitas base tecnológica sólida,
          activamos <strong>Tronx Cloud Suite</strong> y tus <strong>Servicios Core</strong>.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="/servicios/programa-socios" className="btn btn-primary">Programa Socios</a>
          <a href="/servicios/tronx-cloud" className="btn btn-secondary">Tronx Cloud Suite</a>
          <a href="/casos" className="btn btn-ghost">Ver casos de éxito</a>
        </div>
      </div>
    </Section>
  );
}

import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import Link from "next/link";
import {
  ArrowRight,
  LineChart,
  Settings,
  Zap,
  Rocket,
  Shield,
  Users,
  Building2,
  CheckCircle2,
  Play,
} from "lucide-react";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-brand-50 text-brand-700 border border-brand-200 px-3 py-1 text-xs font-medium">
      {children}
    </span>
  );
}

function Stat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div className="card p-5 text-center">
      <p className="text-2xl font-extrabold text-slate-900">{kpi}</p>
      <p className="text-xs text-slate-600 mt-1">{label}</p>
    </div>
  );
}

function Step({
  num,
  title,
  children,
}: {
  num: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card p-5">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-sm font-bold">
          {num}
        </div>
        <h4 className="font-semibold text-slate-900">{title}</h4>
      </div>
      <p className="text-sm text-slate-700 mt-2">{children}</p>
    </div>
  );
}

export default function Page() {
  return (
    <>
      {/* HERO */}
      <div className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-50">
        <Section className="py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2">
              <Pill>Growth B2B</Pill>
              <Pill>Operación en la nube</Pill>
              <Pill>Métricas & Embudos</Pill>
            </div>
            <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Crece en semanas, no meses: estrategia, tecnología y contenido que convierten.
            </h1>
            <p className="p-muted mt-6">
              Diseñamos y operamos embudos completos: sitios y landings optimizadas, performance marketing,
              CRM y automatizaciones — con reporting claro de CAC, conversión y LTV.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/servicios/programa-socios" className="btn btn-primary">
                Programa Socios <ArrowRight size={18} />
              </Link>
              <Link href="/servicios/tronx-cloud" className="btn btn-secondary">
                Ver Tronx Cloud Suite
              </Link>
              <Link href="/contacto" className="btn btn-ghost">
                Conversemos
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <Shield size={14} /> Operación SaaS: Zoho CRM · GA4 · GTM · Vercel · Cloudflare
            </div>
          </div>
        </Section>
      </div>

      {/* Value props rápidas */}
      <Section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard title="Onboarding 2–4 semanas">
            Setup de dominios, correo corporativo, CRM, landings y medición (GA4/GTM). Handoff documentado.
          </FeatureCard>
          <FeatureCard title="Growth operativo">
            Sprints quincenales: Ads (Google/Meta/LinkedIn), SEO/CRO, automatizaciones y contenidos.
          </FeatureCard>
          <FeatureCard title="Revenue Share">
            Nosotros captamos, nutrimos y cerramos; tú entregas. Comisión sobre ventas efectivas.
          </FeatureCard>
        </div>
      </Section>

      {/* Banda de confianza */}
      <Section className="py-6">
        <div className="card p-4 flex flex-wrap items-center justify-center gap-6 text-slate-500 text-xs">
          <span className="inline-flex items-center gap-2">
            <Building2 size={16} /> Ecosistema B2B y organizaciones
          </span>
          <span className="inline-flex items-center gap-2">
            <Users size={16} /> Programa Socios activo
          </span>
          <span className="inline-flex items-center gap-2">
            <Play size={16} /> Contenido editorial y vodcasts
          </span>
        </div>
      </Section>

      {/* Programa Socios */}
      <Section className="py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 card p-6 bg-white border border-slate-200 rounded-2xl">
            <h2 className="text-xl font-bold text-slate-900">Programa Socios (Revenue Share)</h2>
            <p className="text-sm text-slate-700 mt-2">
              Vendemos tus servicios con nuestro embudo, CRM y contenidos. Tú entregas; nosotros captamos, nutrimos y
              cerramos. Pagas sólo por ventas válidas.
            </p>
            <ul className="mt-4 text-sm text-slate-700 space-y-2">
              <li className="inline-flex items-start gap-2">
                <CheckCircle2 size={16} className="text-brand-600 mt-0.5" />
                <span><strong>Activos de conversión</strong>: video, landing y copy.</span>
              </li>
              <li className="inline-flex items-start gap-2">
                <CheckCircle2 size={16} className="text-brand-600 mt-0.5" />
                <span><strong>CRM & automatización</strong>: Zoho/HubSpot, pipelines, nurturing.</span>
              </li>
              <li className="inline-flex items-start gap-2">
                <CheckCircle2 size={16} className="text-brand-600 mt-0.5" />
                <span><strong>Base B2B segmentada</strong> + campañas opt-in.</span>
              </li>
              <li className="inline-flex items-start gap-2">
                <CheckCircle2 size={16} className="text-brand-600 mt-0.5" />
                <span><strong>Cierre & reporting</strong>: CRM + liquidación mensual.</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/servicios/programa-socios" className="btn btn-primary">
                Cómo funciona
              </Link>
              <Link href="/contacto" className="btn btn-ghost">
                Postular como Socio
              </Link>
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-2 gap-4">
            <Stat kpi="2–4 sem" label="Time-to-value" />
            <Stat kpi="Sprints 15d" label="Operación continua" />
            <Stat kpi="30 días" label="Atribución" />
            <Stat kpi="KPIs" label="CAC · CVR · LTV" />
          </div>
        </div>
      </Section>

      {/* Tronx Cloud Suite */}
      <Section className="py-14">
        <div className="card p-6 border border-slate-200 rounded-2xl bg-gradient-to-br from-brand-50 to-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-1">
              <h2 className="text-xl font-bold text-slate-900">Tronx Cloud Suite</h2>
              <p className="text-sm text-slate-700 mt-2">
                Tu operación digital unificada: web, datos, CRM, Ads y seguridad — administrado por Tronx Strategy.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/servicios/tronx-cloud" className="btn btn-secondary">
                  Ver detalles
                </Link>
                <Link href="/contacto" className="btn btn-ghost">
                  Solicitar demo
                </Link>
              </div>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <FeatureCard title="WebOps">Dominios, DNS, SSL, Vercel, CI/CD.</FeatureCard>
              <FeatureCard title="Data & Analytics">GA4, GTM, eventos y dashboards.</FeatureCard>
              <FeatureCard title="CRM & Automation">Zoho/HubSpot, nurturing y auto-respuestas.</FeatureCard>
              <FeatureCard title="Ads Ops">Google/Meta/LinkedIn + reporting CAC/ROAS.</FeatureCard>
              <FeatureCard title="Security">Privacidad, backups y accesos seguros.</FeatureCard>
              <FeatureCard title="SLA & Soporte">Sprints, tickets y roadmap.</FeatureCard>
            </div>
          </div>
        </div>
      </Section>

      {/* Cómo trabajamos */}
      <Section className="py-14">
        <h2 className="h3">Cómo trabajamos</h2>
        <p className="p-muted mt-2 max-w-3xl">
          Implementamos la base, operamos el crecimiento y escalamos con datos.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <Step num={1} title="Onboarding & Setup">
            Dominio, correo, CRM, landings y medición. Playbooks y capacitación breve.
          </Step>
          <Step num={2} title="Sprints de Growth">
            Ads, SEO/CRO, contenidos y automatizaciones. Revisión quincenal.
          </Step>
          <Step num={3} title="Métricas & Escala">
            CAC/CVR/LTV, testing continuo y roadmap trimestral.
          </Step>
        </div>
      </Section>

      {/* CTA final */}
      <Section className="py-14">
        <div className="card p-6 border border-slate-200 rounded-2xl bg-white">
          <h3 className="text-xl font-bold text-slate-900">¿Listo para acelerar captación con métricas claras?</h3>
          <p className="text-sm text-slate-700 mt-2">
            Si tu oferta calza, partimos con <strong>Programa Socios</strong>. ¿Necesitas base tecnológica? Activamos{" "}
            <strong>Tronx Cloud Suite</strong>.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <Link href="/servicios/programa-socios" className="btn btn-primary">
              Conocer Programa Socios
            </Link>
            <Link href="/servicios/tronx-cloud" className="btn btn-secondary">
              Ver Tronx Cloud Suite
            </Link>
            <Link href="/casos" className="btn btn-ghost">
              Ver casos de éxito
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

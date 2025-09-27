// app/servicios/tronx-cloud/page.tsx
import Section from "@/components/Section";
import Link from "next/link";
import {
  Server,
  BarChart3,
  Bot,
  Megaphone,
  ShieldCheck,
  LifeBuoy,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Tronx Cloud Suite – Tronx Strategy",
  description:
    "Plataforma unificada para operar tu embudo digital: WebOps, Data & Analytics, CRM & Automation, Ads Ops y Security/Compliance.",
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-brand-50 text-brand-700 border border-brand-200 px-3 py-1 text-xs font-medium">
      {children}
    </span>
  );
}

function Card({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="card p-6 border border-slate-200 shadow-soft rounded-2xl bg-white">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
          {icon}
        </span>
        <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      </div>
      <div className="mt-3 text-sm text-slate-700">{children}</div>
    </div>
  );
}

export default function Page() {
  return (
    <Section className="py-16">
      {/* HERO */}
      <div className="max-w-3xl">
        <Pill>Plataforma Operativa · SaaS</Pill>
        <h1 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
          Tronx <span className="px-1 rounded-md bg-[rgba(27,197,214,0.08)]">Cloud Suite</span>
        </h1>
        <p className="p-muted mt-4">
          Tu operación digital, en un solo lugar: infraestructura web, datos y analítica,
          CRM & automatizaciones, Ads, seguridad y cumplimiento. Integrado, medible y
          administrado por Tronx Strategy.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <Pill>WebOps</Pill>
          <Pill>Data & Analytics</Pill>
          <Pill>CRM & Automation</Pill>
          <Pill>Ads Ops</Pill>
          <Pill>Security & Compliance</Pill>
          <Pill>SLA & Soporte</Pill>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contacto" className="btn btn-primary">
            Solicitar demo <ArrowRight size={18} />
          </Link>
          <Link href="/servicios" className="btn btn-ghost">
            Ver servicios
          </Link>
          <Link href="/servicios/programa-socios" className="btn btn-secondary">
            Conocer Programa Socios
          </Link>
        </div>
      </div>

      {/* MÓDULOS */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="WebOps" icon={<Server size={18} />}>
          <ul className="list-disc pl-5 space-y-1">
            <li>Dominios, DNS, SSL (Cloudflare)</li>
            <li>Hosting serverless (Vercel) + CI/CD desde GitHub</li>
            <li>Hardening básico y WAF/CDN</li>
          </ul>
        </Card>

        <Card title="Data & Analytics" icon={<BarChart3 size={18} />}>
          <ul className="list-disc pl-5 space-y-1">
            <li>GA4, Tag Manager, Search Console</li>
            <li>Eventos y conversiones unificadas</li>
            <li>Dashboards ejecutivos (CAC, CVR, LTV)</li>
          </ul>
        </Card>

        <Card title="CRM & Automation" icon={<Bot size={18} />}>
          <ul className="list-disc pl-5 space-y-1">
            <li>Zoho CRM (o HubSpot si aplica)</li>
            <li>Scoring, pipelines y nurturing</li>
            <li>Formularios con etiquetado de origen + respuestas</li>
          </ul>
        </Card>

        <Card title="Ads Ops" icon={<Megaphone size={18} />}>
          <ul className="list-disc pl-5 space-y-1">
            <li>Google / Meta / LinkedIn Ads conectados al CRM</li>
            <li>UTM y lead gen con atribución 30 días</li>
            <li>Reporting de CAC/ROAS y payback</li>
          </ul>
        </Card>

        <Card title="Security & Compliance" icon={<ShieldCheck size={18} />}>
          <ul className="list-disc pl-5 space-y-1">
            <li>Privacidad & cookies, opt-out</li>
            <li>SPF/DKIM/DMARC en correo corporativo</li>
            <li>Backups, control de accesos y 2FA</li>
          </ul>
        </Card>

        <Card title="SLA & Soporte" icon={<LifeBuoy size={18} />}>
          <ul className="list-disc pl-5 space-y-1">
            <li>Sprints quincenales y tickets priorizados</li>
            <li>Roadmap de mejora continua</li>
            <li>Revisión trimestral (QBR) con KPIs</li>
          </ul>
        </Card>
      </div>

      {/* IMPLEMENTACIÓN */}
      <div className="mt-12 card p-6 border border-slate-200 rounded-2xl bg-white">
        <h2 className="text-xl font-bold text-slate-900">Implementación en 2–4 semanas</h2>
        <ol className="mt-3 list-decimal pl-5 space-y-1 text-sm text-slate-700">
          <li>Kickoff & arquitectura: dominios, correo, accesos, objetivos.</li>
          <li>Setup técnico: WebOps + GA4/GTM + CRM + formularios.</li>
          <li>Activación: campañas iniciales, secuencias y dashboards.</li>
          <li>Handover documentado + plan de sprints y KPIs.</li>
        </ol>
        <div className="mt-4 text-xs text-slate-500">
          * Para APCC, los leads entran a Zoho y se sincronizan automáticamente con HubSpot del equipo APCC.
        </div>
      </div>

      {/* INTEGRACIONES */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Integraciones nativas" icon={<Bot size={18} />}>
          <p>
            Zoho CRM, HubSpot (si aplica), Google Workspace, GA4, GTM, Search Console,
            Vercel, Cloudflare, Make/Zapier.
          </p>
        </Card>
        <Card title="Operación centralizada" icon={<ShieldCheck size={18} />}>
          <p>
            Administración con cuenta maestra (tronxgroupspa@gmail.com): Ads, analítica, Search Console y Drive oficial.
            Accesos segregados por marca y mínimo privilegio.
          </p>
        </Card>
      </div>

      {/* FAQ */}
      <div className="mt-12 card p-6 border border-slate-200 rounded-2xl bg-white">
        <h2 className="text-xl font-bold text-slate-900">Preguntas frecuentes</h2>
        <div className="mt-4 space-y-3">
          <details className="group rounded-lg border p-4">
            <summary className="cursor-pointer font-medium text-slate-900">
              ¿Puedo usar mi CRM actual?
            </summary>
            <p className="mt-2 text-sm text-slate-700">
              Sí. Soportamos Zoho CRM por defecto y HubSpot cuando aplica. También integramos vía Make/Zapier.
            </p>
          </details>
          <details className="group rounded-lg border p-4">
            <summary className="cursor-pointer font-medium text-slate-900">
              ¿Qué necesito para partir?
            </summary>
            <p className="mt-2 text-sm text-slate-700">
              Accesos a dominios/hosting/ads, correo corporativo y un responsable interno para aprobaciones.
            </p>
          </details>
          <details className="group rounded-lg border p-4">
            <summary className="cursor-pointer font-medium text-slate-900">
              ¿Cómo se miden resultados?
            </summary>
            <p className="mt-2 text-sm text-slate-700">
              Configuramos eventos/conversiones en GA4 y conectamos campañas al CRM para calcular CAC, ROAS y tasa de
              cierre (MQL→SQL→Venta).
            </p>
          </details>
          <details className="group rounded-lg border p-4">
            <summary className="cursor-pointer font-medium text-slate-900">
              ¿Incluye creación de contenido?
            </summary>
            <p className="mt-2 text-sm text-slate-700">
              Sí, cuando el plan lo contempla, y podemos sumar producción audiovisual con Dekaelo Media.
            </p>
          </details>
        </div>
      </div>

      {/* CTA FINAL */}
      <div className="mt-12 card p-6 border border-slate-200 rounded-2xl bg-gradient-to-br from-brand-50 to-white">
        <h2 className="text-xl font-bold text-slate-900">¿Listo para operar en la nube con métricas claras?</h2>
        <p className="mt-2 text-sm text-slate-700">
          Te mostramos cómo Tronx Cloud Suite integra tus activos para acelerar resultados.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/contacto" className="btn btn-primary">
            Hablar con un especialista
          </Link>
          <Link href="/casos" className="btn btn-secondary">
            Ver casos de éxito
          </Link>
          <Link href="/servicios/programa-socios" className="btn btn-ghost">
            Explorar Programa Socios
          </Link>
        </div>
      </div>
    </Section>
  );
}

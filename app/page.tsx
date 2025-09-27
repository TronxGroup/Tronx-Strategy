
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import { ArrowRight, LineChart, Settings, Zap, Rocket, Shield } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="gradient-hero">
        <Section className="py-20 sm:py-28">
          <div className="max-w-3xl">
            <span className="badge">Crecimiento B2B</span>
            <h1 className="h1 mt-6">Estrategia, tecnología y contenido para escalar en semanas — no meses.</h1>
            <p className="p-muted mt-6">
              Diseñamos y operamos embudos completos: sitios y landings optimizadas, performance marketing, CRM y
              automatizaciones. Retainers y Programa Socios (Revenue Share).
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/servicios" className="btn btn-primary">Ver servicios <ArrowRight size={18} /></Link>
              <Link href="/contacto" className="btn btn-ghost">Conversemos</Link>
            </div>
          </div>
        </Section>
      </div>

      <Section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard title="Onboarding 2–4 semanas">Setup de dominios, correo corporativo, CRM, landings y medición.</FeatureCard>
          <FeatureCard title="Growth operativo">Sprints quincenales: performance ads, SEO/CRO, automatizaciones y contenidos.</FeatureCard>
          <FeatureCard title="Revenue Share">Nosotros captamos, nutrimos y cerramos; tú entregas. Comisión sobre ventas efectivas.</FeatureCard>
        </div>
      </Section>

      <Section className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <FeatureCard title="Impacto medible"><span className="inline-flex items-center gap-2"><LineChart size={16}/> KPIs: CAC, conversión, LTV.</span></FeatureCard>
          <FeatureCard title="Automatizaciones"><span className="inline-flex items-center gap-2"><Settings size={16}/> CRM + flujos + reporting.</span></FeatureCard>
          <FeatureCard title="Time-to-value"><span className="inline-flex items-center gap-2"><Zap size={16}/> Entregables en semanas.</span></FeatureCard>
          <FeatureCard title="Escalabilidad"><span className="inline-flex items-center gap-2"><Rocket size={16}/> Playbooks y plantillas.</span></FeatureCard>
        </div>
        <div className="mt-6 text-xs text-slate-500 flex items-center gap-2"><Shield size={14}/> Operación SaaS: Zoho, GA4, GTM, Vercel y Cloudflare.</div>
      </Section>
    </>
  );
}

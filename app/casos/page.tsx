// app/casos/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import { ArrowRight, CheckCircle2, ExternalLink, Shield, Gauge, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Casos de éxito | Tronx Strategy",
  description:
    "Resultados aplicados de Tronx Strategy: APCC con Tronx Cloud Suite y Echevensko con Programa Socios (Revenue Share).",
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-brand-50 text-brand-700 border border-brand-200 px-3 py-1 text-xs font-medium">
      {children}
    </span>
  );
}

function KPI({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 p-4 bg-white text-center">
      <p className="text-sm text-slate-600">{label}</p>
      <p className="text-lg font-bold text-slate-900 mt-1">{value}</p>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="inline-flex items-start gap-2 text-sm text-slate-700">
      <CheckCircle2 size={18} className="text-brand-600 mt-0.5" />
      <span>{children}</span>
    </li>
  );
}

export default function CasosPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-50">
        <Section className="py-16 sm:py-20">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2">
              <Pill>Casos de éxito</Pill>
              <Pill>Growth B2B</Pill>
              <Pill>Métricas & Embudos</Pill>
            </div>
            <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Resultados aplicados: operación y crecimiento con datos.
            </h1>
            <p className="p-muted mt-6">
              Ejemplos concretos de cómo integramos estrategia, tecnología y contenido para acelerar la
              captación con trazabilidad completa.
            </p>
          </div>
        </Section>
      </div>

      {/* Caso 1: APCC */}
      <Section className="py-14">
        <div className="card p-6 border border-slate-200 rounded-2xl bg-white">
          <div className="flex items-start justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 rounded-md overflow-hidden ring-1 ring-slate-200 bg-white">
                <Image src="/logos/apcc.svg" alt="APCC" fill className="object-contain p-1.5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  APCC — Cámara de Comercio Asia Pacífico
                </h2>
                <p className="text-sm text-slate-600">Operación unificada con Tronx Cloud Suite</p>
              </div>
            </div>
            <Pill>Tronx Cloud Suite</Pill>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-2">
              <p className="text-sm text-slate-700">
                Estandarizamos la operación digital de APCC para habilitar crecimiento medible: WebOps, CRM,
                automatizaciones y analítica unificadas. El foco: membresías y eventos con trazabilidad de punta a punta.
              </p>

              <ul className="mt-4 space-y-2">
                <Bullet>Web institucional con **CRM integrado** (Zoho ↔ HubSpot selectivo).</Bullet>
                <Bullet>Formularios maestros y **automatizaciones por evento** con slug único.</Bullet>
                <Bullet>Embudo de membresías con **nurturing** y reporting de conversión.</Bullet>
                <Bullet>Infraestructura cloud y medición: **Vercel, Cloudflare, GA4 y GTM**.</Bullet>
              </ul>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="https://www.asiapacific-chamber.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary inline-flex items-center"
                >
                  Ver sitio APCC <ExternalLink size={16} className="ml-1" />
                </Link>
                <Link href="/contacto" className="btn btn-ghost">
                  Conversemos
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <KPI label="Time-to-value" value="2–4 semanas" />
              <KPI label="Operación" value="Sprints quincenales" />
              <KPI label="Trazabilidad" value="100% leads trackeados" />
              <KPI label="KPIs" value="CAC · CVR · LTV" />
            </div>
          </div>
        </div>
      </Section>

      {/* Caso 2: Echevensko */}
      <Section className="py-4">
        <div className="card p-6 border border-slate-200 rounded-2xl bg-white">
          <div className="flex items-start justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 rounded-md overflow-hidden ring-1 ring-slate-200 bg-white">
                <Image src="/logos/echevensko.svg" alt="Echevensko" fill className="object-contain p-1.5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">Echevensko — “La Magia de la Imaginación”</h2>
                <p className="text-sm text-slate-600">Programa Socios (Revenue Share) · Charlas corporativas</p>
              </div>
            </div>
            <Pill>Programa Socios</Pill>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-2">
              <p className="text-sm text-slate-700">
                Tronx Strategy opera el embudo completo: captación, nurturing y cierre comercial de la charla
                “La Magia de la Imaginación”. El cliente se enfoca en la entrega; nosotros en el pipeline y los
                resultados con liquidación transparente.
              </p>

              <ul className="mt-4 space-y-2">
                <Bullet>Landing de conversión + **video/trailer** y prueba social.</Bullet>
                <Bullet>Segmentación y campañas **Meta / Google Ads** orientadas a RR.HH. & Cultura.</Bullet>
                <Bullet>**CRM y automatizaciones**: scoring, secuencias, agendamiento y pipeline.</Bullet>
                <Bullet>Modelo **Revenue Share** con reporting y liquidación mensual.</Bullet>
              </ul>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="https://empresas.echevensko.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary inline-flex items-center"
                >
                  Ver sitio Empresas <ExternalLink size={16} className="ml-1" />
                </Link>
                <Link href="/servicios/programa-socios" className="btn btn-ghost inline-flex items-center">
                  Cómo funciona <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <KPI label="Embudo" value="Ads → Landing → CRM" />
              <KPI label="Operación" value="Sprints 15 días" />
              <KPI label="Acuerdos" value="Comisión sobre ventas válidas" />
              <KPI label="Soporte" value="SLA de rodaje y post" />
            </div>
          </div>
        </div>
      </Section>

      {/* Banda de confianza */}
      <Section className="py-10">
        <div className="card p-4 flex flex-wrap items-center justify-center gap-6 text-slate-500 text-xs">
          <span className="inline-flex items-center gap-2">
            <Shield size={16} /> Operación SaaS trazable
          </span>
          <span className="inline-flex items-center gap-2">
            <Gauge size={16} /> KPIs claros: CAC · CVR · LTV
          </span>
          <span className="inline-flex items-center gap-2">
            <Users size={16} /> Enfoque B2B e institucional
          </span>
        </div>
      </Section>

      {/* CTA final */}
      <Section className="py-12">
        <div className="card p-6 border border-slate-200 rounded-2xl bg-white">
          <h3 className="text-xl font-bold text-slate-900">¿Quieres un caso así en tu organización?</h3>
          <p className="text-sm text-slate-700 mt-2">
            Si tu oferta calza, partimos con <strong>Programa Socios</strong>. ¿Necesitas base tecnológica? Activamos{" "}
            <strong>Tronx Cloud Suite</strong>.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <Link href="/contacto" className="btn btn-primary">
              Conversemos
            </Link>
            <Link href="/servicios/programa-socios" className="btn btn-secondary">
              Programa Socios
            </Link>
            <Link href="/servicios/tronx-cloud" className="btn btn-ghost">
              Tronx Cloud Suite
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

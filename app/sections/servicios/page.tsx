import Link from 'next/link';
import { Check, Film, Users } from 'lucide-react';

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Servicios</h1>
      <p className="mt-3 text-white/70 max-w-3xl">
        Operamos desde la habilitación empresarial hasta la transformación digital y la estrategia de largo plazo.
        Entregables claros, métricas y crecimiento real.
      </p>

      <div className="mt-10 grid gap-6">
        {/* Onboarding one-off */}
        <Card
          title="Fundamentos Empresariales"
          badge="Onboarding"
          summary="Habilitamos tu operación y marca para vender formalmente en 2–4 semanas."
          kpis={['Tiempo de habilitación', 'Entregabilidad >95%', 'Sitio operativo']}
          items={[
            'Constitución de sociedad e inicio de actividades',
            'Apertura de cuenta corriente empresarial',
            'Registro de dominios y marcas',
            'Formalización básica para operar y facturar',
            'Políticas de privacidad & cookies en sitio',
            'Correo corporativo + SPF/DKIM/DMARC',
          ]}
        />

        {/* Retainer 1 */}
        <Card
          title="Transformación Digital & Comunicación"
          badge="Retainer"
          summary="Ejecutamos growth con sprints quincenales: performance, contenidos y mejora continua."
          kpis={['CPL/CAC', 'Tasa de conversión', 'SEO: clics/impresiones/posición']}
          items={[
            'Sitios web (Next.js + Tailwind) y landing pages',
            'Campañas digitales (Google, Meta, LinkedIn)',
            'Email marketing y automatizaciones (Zoho / Make / Zapier)',
            'Integración CRM y pagos online',
            'Contenidos para RRSS y performance creativo',
            'Medición & optimización: GA4 + GTM, SEO técnico y CRO (tests A/B)',
          ]}
        />

        {/* Retainer 2 */}
        <Card
          title="Estrategia & Capacitaciones a Medida"
          badge="Retainer"
          summary="Definimos foco, procesos comerciales y skills del equipo para escalar con eficiencia."
          kpis={['Win-rate', 'Sales cycle time', 'MRR/ARR', 'NPS']}
          items={[
            'Planes estratégicos (ej. 2026–2030)',
            'Go-to-market B2B y playbooks comerciales (CRM, secuencias)',
            'Embudos de venta (atracción → conversión → fidelización)',
            'Capacitaciones a pedido (ej. “Importa desde China con Éxito”)',
            'IA aplicada al negocio (diagnóstico y casos de uso)',
          ]}
        />
      </div>

      {/* Add-on interno (marca del grupo) */}
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <Addon
          icon={<Film size={18} />}
          title="Audiovisual Estratégico (Add-on)"
          desc="Producción por Dekaelo Media (marca de Tronx Group): video institucional/YouTube y piezas para performance."
          cta={{ href: 'https://www.dekaelomedia.com', label: 'Dekaelo Media →' }}
        />
      </div>

      {/* Casos (clientes) */}
      <section className="mt-12">
        <h2 className="text-xl md:text-2xl font-semibold">Casos (clientes)</h2>
        <p className="mt-2 text-white/70 max-w-3xl">
          Algunos ejemplos representativos donde aplicamos estos servicios de punta a punta.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <ClientCase
            title="APCC"
            subtitle="Plan institucional + digitalización"
            bullets={[
              'Sitio institucional y landings de conversión',
              'Embudo de membresías con CRM y automatizaciones',
              'Curso con checkout y flujos de email',
            ]}
          />
          <ClientCase
            title="HKLABA"
            subtitle="Soporte de captación y contenidos"
            bullets={[
              'Piezas editoriales y convocatorias',
              'Optimización de páginas/landings',
              'Medición y CRM para seguimiento',
            ]}
          />
          <ClientCase
            title="Echevensko"
            subtitle="Charlas corporativas B2B"
            bullets={[
              'Landing de captación + video',
              'Email a base segmentada y campañas de intención',
              'Cierre mediante programa de revenue share',
            ]}
          />
        </div>

        <div className="mt-6">
          <Link
            href="/casos"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-5 py-3 font-semibold hover:bg-white/10"
          >
            Ver más casos
          </Link>
        </div>
      </section>

      {/* Notas operativas */}
      <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-lg font-semibold">Notas operativas</h3>
        <ul className="mt-3 grid md:grid-cols-3 gap-2 text-sm text-white/80">
          <Li>Requisitos del cliente: responsable interno, accesos y aprobaciones.</Li>
          <Li>Exclusiones: contabilidad/tributaria; trabajamos con partners cuando aplica.</Li>
          <Li>Reportes mensuales y revisión trimestral de estrategia.</Li>
        </ul>
      </div>

      {/* CTA inferior */}
      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/contacto"
          className="inline-flex items-center gap-2 rounded-2xl bg-white text-neutral-900 px-5 py-3 font-semibold"
        >
          Solicitar propuesta
        </Link>
        <Link
          href="/socios"
          className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-5 py-3 font-semibold hover:bg-white/10"
        >
          Programa Socios (revenue share)
        </Link>
      </div>
    </div>
  );
}

/* ========== Subcomponentes ========== */

function Card({
  title,
  items,
  kpis = [],
  badge,
  summary,
}: {
  title: string;
  items: string[];
  kpis?: string[];
  badge?: string;
  summary?: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-xl font-semibold">{title}</h2>
        {badge && (
          <span className="text-[11px] rounded-full border border-white/10 bg-neutral-900 px-2.5 py-1 text-white/70">
            {badge}
          </span>
        )}
      </div>

      {summary && <p className="mt-2 text-sm text-white/70">{summary}</p>}
      {kpis.length > 0 && <p className="mt-2 text-xs text-white/60">KPIs: {kpis.join(' • ')}</p>}

      <ul className="mt-4 space-y-2 text-sm text-white/70">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2">
            <Check size={16} className="mt-0.5" /> {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Addon({
  icon,
  title,
  desc,
  cta,
}: {
  icon: JSX.Element;
  title: string;
  desc: string;
  cta?: { href: string; label: string };
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-lg font-semibold flex items-center gap-2">
        {icon} {title}
      </h3>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
      {cta && (
        <div className="mt-3">
          <Link className="link" href={cta.href}>
            {cta.label}
          </Link>
        </div>
      )}
    </div>
  );
}

function ClientCase({
  title,
  subtitle,
  bullets,
}: {
  title: string;
  subtitle: string;
  bullets: string[];
}) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <header className="flex items-start justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-white/60 text-sm">{subtitle}</p>
        </div>
        <span className="text-[11px] rounded-full border border-white/10 bg-neutral-900 px-2.5 py-1 text-white/70">
          Cliente
        </span>
      </header>
      <ul className="mt-4 space-y-2 text-sm text-white/80">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2">
            <Users size={14} className="mt-0.5" /> {b}
          </li>
        ))}
      </ul>
    </article>
  );
}

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2">
      <Check size={16} className="mt-0.5" /> {children}
    </li>
  );
}

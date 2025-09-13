import { Check, Film, Landmark, Users } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Servicios</h1>
      <p className="mt-3 text-white/70 max-w-3xl">
        Operamos desde la base empresarial hasta la transformación digital y la estrategia de largo plazo.
        Entregables claros, métricas y crecimiento real.
      </p>

      <div className="mt-10 grid gap-6">
        {/* Onboarding one-off */}
        <Card
          title="Fundamentos Empresariales (Onboarding)"
          kpis={['Tiempo de habilitación', 'Entregabilidad > 95%', 'Sitio operativo']}
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
          title="Transformación Digital & Comunicación (Retainer)"
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
          title="Estrategia & Capacitaciones a Medida (Retainer)"
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

      {/* Add-ons / Alianzas */}
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <Addon
          icon={<Film size={18} />}
          title="Audiovisual Estratégico (Add-on)"
          desc="Producción por Dekaelo Media: video institucional/YouTube y piezas para performance."
          cta={{ href: 'https://www.dekaelomedia.com', label: 'Dekaelo Media →' }}
        />
        <Addon
          icon={<Landmark size={18} />}
          title="Membresías & Misiones (Alianzas)"
          desc="APCC ↔ HKLABA: networking, foros y delegaciones para expansión en Asia."
          ctaGroup={[
            { href: 'https://apcc-chamber.vercel.app', label: 'APCC →' },
            { href: 'https://hklaba.vercel.app', label: 'HKLABA →' },
          ]}
        />
        <Addon
          icon={<Users size={18} />}
          title="Charlas & Formación (Alianza)"
          desc="Echevensko: cultura de innovación, creatividad aplicada y liderazgo con propósito."
          cta={{ href: 'https://empresas.echevensko.com', label: 'Echevensko →' }}
        />
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
          href="/contacto#socios"
          className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-5 py-3 font-semibold hover:bg-white/10"
        >
          Programa Socios (revenue share)
        </Link>
      </div>
    </div>
  );
}

function Card({
  title,
  items,
  kpis = [],
}: {
  title: string;
  items: string[];
  kpis?: string[];
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-xl font-semibold">{title}</h2>
      {kpis.length > 0 && (
        <p className="mt-2 text-xs text-white/60">
          KPIs: {kpis.join(' • ')}
        </p>
      )}
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
  ctaGroup,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  cta?: { href: string; label: string };
  ctaGroup?: { href: string; label: string }[];
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-lg font-semibold flex items-center gap-2">
        {icon} {title}
      </h3>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
      <div className="mt-3 flex flex-wrap gap-3 text-sm">
        {cta && (
          <Link className="link" href={cta.href}>
            {cta.label}
          </Link>
        )}
        {ctaGroup?.map((c) => (
          <Link key={c.href} className="link" href={c.href}>
            {c.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

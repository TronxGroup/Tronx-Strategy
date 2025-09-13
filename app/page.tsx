import Link from 'next/link';
import {
  ArrowRight,
  Check,
  Shield,
  Zap,
  Users,
  BarChart3,
  Activity,
  Target,
  TrendingUp,
  Star,
} from 'lucide-react';

export default function Page() {
  // 👉 Reemplaza estos KPI cuando tengas datos reales
  const kpis = [
    { icon: <Activity size={18} />, label: 'Leads (30 días)', value: '—' },
    { icon: <Target size={18} />, label: 'CPL promedio', value: '—' },
    { icon: <TrendingUp size={18} />, label: 'Tasa de cierre', value: '—' },
    { icon: <Star size={18} />, label: 'Satisfacción', value: '—' },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 10%, #22d3ee 0, transparent 35%), radial-gradient(circle at 80% 20%, #34d399 0, transparent 35%)',
          }}
        />
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Parte de <span className="font-semibold text-white">Tronx Group</span>
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
              Crecimiento B2B con estrategia, tecnología y contenido.
            </h1>
            <p className="mt-3 text-sm text-white/60">Entregables claros en semanas, no meses.</p>
            <p className="mt-3 text-white/80 text-lg">
              Implementamos y operamos tu embudo de ventas: web y landings, campañas de performance,
              CRM y automatizaciones, con soporte creativo y audiovisual cuando se requiere.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 rounded-2xl bg-white text-neutral-900 px-5 py-3 font-semibold"
                aria-label="Ver Servicios"
              >
                Ver Servicios <ArrowRight size={18} />
              </Link>
              <Link
                href="/casos"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-5 py-3 font-semibold hover:bg-white/10"
                aria-label="Ver Casos de Éxito"
              >
                Casos de Éxito
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Shield size={16} /> Onboarding formal y operativo
              </div>
              <div className="flex items-center gap-2">
                <Zap size={16} /> Implementación ágil
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 size={16} /> Medición y CRM
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} /> B2B · Pymes · Instituciones
              </div>
            </div>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-white/80">
              <li className="flex gap-2">
                <Check size={16} className="mt-0.5" /> Formalización y habilitación para operar
              </li>
              <li className="flex gap-2">
                <Check size={16} className="mt-0.5" /> Sitios web y landings (Next.js + Tailwind)
              </li>
              <li className="flex gap-2">
                <Check size={16} className="mt-0.5" /> Campañas de performance (Google · Meta · LinkedIn)
              </li>
              <li className="flex gap-2">
                <Check size={16} className="mt-0.5" /> Medición (GA4, GTM) y CRM con automatizaciones
              </li>
            </ul>

            <div className="mt-6 text-sm">
              <Link href="/socios" className="text-white/80 underline underline-offset-4 hover:text-white">
                ¿Eres empresa? Conoce nuestro programa <b>Socios (revenue share)</b>
              </Link>
            </div>
          </div>

          {/* Grid visual derecha */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="grid grid-cols-3 gap-3">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-2xl bg-neutral-900/60 border border-white/10"
                />
              ))}
            </div>
            <p className="mt-4 text-sm text-white/60">
              Operado por <span className="text-white font-medium">Tronx Strategy</span> — parte del ecosistema Tronx Group.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICIOS CLAVE (3 bloques) */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold">Servicios clave</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <Card
            title="Fundamentos Empresariales"
            items={[
              'Constitución e inicio de actividades',
              'Cuenta corriente empresarial',
              'Registro de dominios y marcas',
              'Formalización para operar y facturar',
            ]}
            cta={{ href: '/servicios', label: 'Conocer servicios' }}
          />
          <Card
            title="Transformación Digital & Comunicación"
            items={[
              'Sitios web y landing pages',
              'Campañas (Google · Meta · LinkedIn)',
              'Email marketing y automatizaciones (Zoho/Make/Zapier)',
              'Pagos online + integración CRM',
              'Producción audiovisual y contenidos',
            ]}
            cta={{ href: '/servicios', label: 'Conocer servicios' }}
          />
          <Card
            title="Estrategia & Capacitaciones"
            items={[
              'Planes 2026–2030',
              'Embudos (atracción → conversión → fidelización)',
              'Cursos a medida (ej. “Importa desde China con Éxito”)',
              'IA aplicada (diagnóstico y casos de uso)',
            ]}
            cta={{ href: '/servicios', label: 'Conocer servicios' }}
          />
        </div>
      </section>

      {/* KPIs */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-2 text-xs text-white/60">
            <BarChart3 size={14} /> Indicadores (últimos 30 días)
          </div>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {kpis.map((k, i) => (
              <KpiCard key={i} icon={k.icon} label={k.label} value={k.value} />
            ))}
          </div>
          <p className="mt-2 text-[11px] text-white/40">
            *Sugerencia: usa GA4/GTM + CRM para registrar Leads, CPL y Cierre.
          </p>
        </div>
      </section>

      {/* CASOS DESTACADOS (clientes/partners) */}
      <section className="border-t border-white/10 bg-black/40">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Casos destacados</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <CaseCard
              title="APCC / HKLABA"
              subtitle="Plan institucional + digitalización"
              tags={['Institucional', 'B2B', 'Alianza']}
              bullets={[
                'Sitio institucional + 3 landings',
                'Plan estratégico 2026–2030',
                'Membresías + CRM + curso (Hotmart)',
              ]}
            />
            <CaseCard
              title="Echevensko B2B"
              subtitle="Canal de charlas corporativas"
              tags={['B2B', 'Partner']}
              bullets={['Landing + video', 'Email a +4.000 contactos', 'Google Ads de intención']}
            />
            <CaseCard
              title="Citylube Peñaflor"
              subtitle="Serviteca multimarca — Bilbao 75"
              tags={['Pyme', 'Local', 'Automotriz']}
              bullets={['Landing de reserva', 'Google/Maps + Ads Local', 'CRM + cupón de revisión']}
            />
          </div>
          <div className="mt-8">
            <Link
              href="/casos"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-5 py-3 font-semibold hover:bg-white/10"
            >
              Ver todos los casos <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CONTEXTO DE GRUPO (sin mezclar clientes) */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">Tronx Strategy dentro de Tronx Group</h3>
          <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-sm text-white/80">
            <li>
              Tronx Group reúne <b>Tronx Strategy</b> (estrategia y performance), <b>Dekaelo Media</b> (audiovisual) y{' '}
              <b>Tronx TV</b> (contenido y distribución).
            </li>
            <li>
              Los clientes y aliados se muestran en <b>Casos destacados</b>. Las marcas del grupo son solo esas tres.
            </li>
          </ul>
        </div>
      </section>

      {/* PROGRAMA SOCIOS */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">Programa Socios (revenue share)</h3>
            <p className="text-white/80 mt-2">
              Vendemos tus servicios con nuestro embudo, CRM y contenidos. Tú entregas; nosotros
              captamos y cerramos. Compensación con porcentaje por venta.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li className="flex gap-2">
                <Check size={16} className="mt-0.5" /> Activos de conversión: video, landing y copy
              </li>
              <li className="flex gap-2">
                <Check size={16} className="mt-0.5" /> Email/ads + base segmentada B2B (cuando aplica)
              </li>
              <li className="flex gap-2">
                <Check size={16} className="mt-0.5" /> CRM y automatizaciones (Zoho) con seguimiento
              </li>
            </ul>
          </div>
          <div className="flex items-center md:justify-end">
            <div className="flex flex-wrap gap-3">
              <Link
                href="/socios"
                className="inline-flex items-center gap-2 rounded-2xl bg-white text-neutral-900 px-5 py-3 font-semibold"
              >
                Quiero ser socio <ArrowRight size={18} />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-5 py-3 font-semibold hover:bg-white/10"
              >
                Hablar con nosotros
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="max-w-6xl mx-auto px-4 pb-14">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">¿Listo para dar el siguiente paso?</h3>
            <p className="text-white/80 mt-2">
              Cuéntanos tu objetivo y activamos un plan con entregables claros y medibles.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-2xl bg-white text-neutral-900 px-5 py-3 font-semibold"
            >
              Contacto <ArrowRight size={18} />
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-5 py-3 font-semibold hover:bg-white/10"
            >
              Ver Servicios
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ============ Subcomponentes ============ */

function KpiCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-4">
      <div className="flex items-center gap-2 text-white/60 text-xs">
        {icon} <span className="uppercase tracking-wide">{label}</span>
      </div>
      <div className="mt-1 text-lg font-semibold text-white">{value}</div>
    </div>
  );
}

function Card({
  title,
  items,
  cta,
}: {
  title: string;
  items: string[];
  cta?: { href: string; label: string };
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-white/80">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2">
            <Check size={16} className="mt-0.5" /> {it}
          </li>
        ))}
      </ul>
      {cta && (
        <div className="mt-5">
          <Link
            href={cta.href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 underline underline-offset-4 hover:text-white"
          >
            {cta.label} <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </div>
  );
}

function CaseCard({
  title,
  subtitle,
  bullets,
  tags,
}: {
  title: string;
  subtitle: string;
  bullets: string[];
  tags?: string[];
}) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 p-6 flex flex-col">
      <header>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-white/60 text-sm">{subtitle}</p>
        {!!tags?.length && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags!.map((t, i) => (
              <span
                key={i}
                className="text-xs rounded-full border border-white/10 bg-neutral-900 px-2.5 py-1 text-white/80"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </header>
      <ul className="mt-4 space-y-2 text-sm text-white/80">
        {bullets.map((b, j) => (
          <li key={j}>• {b}</li>
        ))}
      </ul>
    </article>
  );
}

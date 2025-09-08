import Link from 'next/link'
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
} from 'lucide-react'

export default function Page() {
  // 👉 Edita estos valores cuando tengas números reales
  const kpis = [
    { icon: <Activity size={18} />, label: 'Leads (30 días)', value: '—' },
    { icon: <Target size={18} />, label: 'CPL promedio', value: '—' },
    { icon: <TrendingUp size={18} />, label: 'Tasa de cierre', value: '—' },
    { icon: <Star size={18} />, label: 'Satisfacción', value: '—' },
  ]

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
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-xs text-neutral-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Parte de <span className="font-semibold text-white">Tronx Group</span>
            </div>

            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
              Estrategia, tecnología y comunicación para crecer en serio.
            </h1>
            <p className="mt-3 text-sm text-neutral-400">Entregables claros en semanas, no meses.</p>
            <p className="mt-3 text-neutral-300 text-lg">
              Tronx Strategy conecta consultoría, tecnología y creatividad para impulsar tu negocio:
              desde la base legal y operativa hasta campañas, web y audiovisual.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/sections/servicios"
                className="inline-flex items-center gap-2 rounded-2xl bg-white text-neutral-900 px-5 py-3 font-semibold"
                aria-label="Ver Servicios"
              >
                Ver Servicios <ArrowRight size={18} />
              </Link>
              <Link
                href="/sections/casos"
                className="inline-flex items-center gap-2 rounded-2xl border border-[var(--border)] px-5 py-3 font-semibold hover:bg-neutral-900"
                aria-label="Ver Casos de Éxito"
              >
                Casos de Éxito
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-neutral-400">
              <div className="flex items-center gap-2">
                <Shield size={16} /> Base formal y operativa
              </div>
              <div className="flex items-center gap-2">
                <Zap size={16} /> Entregables claros
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 size={16} /> Medición & CRM
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} /> B2B / Pymes / Instituciones
              </div>
            </div>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-neutral-300">
              <li className="flex gap-2">
                <Check size={16} className="mt-0.5" /> Base empresarial y formalización
              </li>
              <li className="flex gap-2">
                <Check size={16} className="mt-0.5" /> Sitios web (Next.js + Tailwind)
              </li>
              <li className="flex gap-2">
                <Check size={16} className="mt-0.5" /> Campañas (Google / Meta / LinkedIn)
              </li>
              <li className="flex gap-2">
                <Check size={16} className="mt-0.5" /> Medición (GA4 + GTM) & CRM
              </li>
            </ul>

            <div className="mt-6 text-sm">
              <Link
                href="/sections/socios"
                className="text-neutral-300 underline underline-offset-4 hover:text-white"
              >
                ¿Eres empresa? Conoce nuestro programa <b>Socios (revenue share)</b>
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
            <div className="grid grid-cols-3 gap-3">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-2xl bg-neutral-800/60 border border-neutral-700"
                />
              ))}
            </div>
            <p className="mt-4 text-sm text-neutral-400">
              Parte del ecosistema <span className="text-white font-medium">Tronx Group</span>.
            </p>
          </div>
        </div>
      </section>

      {/* LO QUE HACEMOS (3 bloques) */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold">Lo que hacemos</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <Card
            title="Fundamentos Empresariales"
            items={[
              'Constitución e inicio de actividades',
              'Cuenta corriente empresarial',
              'Registro de dominios y marcas',
              'Formalización para operar y facturar',
            ]}
            cta={{ href: '/sections/servicios', label: 'Conocer servicios' }}
          />
          <Card
            title="Transformación Digital & Comunicación"
            items={[
              'Sitios web y landing pages',
              'Campañas (Google / Meta / LinkedIn)',
              'Email marketing & automatizaciones',
              'Pagos online + integración CRM',
              'Producción audiovisual y contenidos',
            ]}
            cta={{ href: '/sections/servicios', label: 'Conocer servicios' }}
          />
          <Card
            title="Estrategia & Capacitaciones"
            items={[
              'Planes 2026–2030',
              'Embudos (atracción → conversión → fidelización)',
              'Cursos a medida (ej. “Importa desde China con Éxito”)',
            ]}
            cta={{ href: '/sections/servicios', label: 'Conocer servicios' }}
          />
        </div>
      </section>

      {/* KPI (mini bloque) */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <BarChart3 size={14} /> Indicadores (últimos 30 días)
          </div>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {kpis.map((k, i) => (
              <KpiCard key={i} icon={k.icon} label={k.label} value={k.value} />
            ))}
          </div>
          <p className="mt-2 text-[11px] text-neutral-500">
            *Reemplaza “—” por valores reales. Sugerencia: usa GA4/GTM + CRM para registrar Leads,
            CPL y Cierre.
          </p>
        </div>
      </section>

      {/* CASOS DESTACADOS */}
      <section className="border-t border-[var(--border)] bg-neutral-950/40">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Casos destacados</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <CaseCard
              title="APCC / HKLABA"
              subtitle="Plan institucional + digitalización"
              tags={['Institucional', 'B2B', 'Socio']}
              bullets={[
                'Sitio institucional + 3 landings',
                'Plan estratégico 2026–2030',
                'Membresías + CRM + curso (Hotmart)',
              ]}
            />
            <CaseCard
              title="Echevensko B2B"
              subtitle="Canal de charlas corporativas"
              tags={['B2B', 'Socio']}
              bullets={['Landing + video', 'Email a +4.000 contactos', 'Google Ads de intención']}
            />
            <CaseCard
              title="Citylube Peñaflor"
              subtitle="Serviteca multimarca — Bilbao 75"
              tags={['Pymes', 'Local', 'Automotriz']}
              bullets={['Landing de reserva', 'Google/Maps + Ads Local', 'CRM + cupón de revisión']}
            />
          </div>
          <div className="mt-8">
            <Link
              href="/sections/casos"
              className="inline-flex items-center gap-2 rounded-2xl border border-[var(--border)] px-5 py-3 font-semibold hover:bg-neutral-900"
            >
              Ver todos los casos <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* LOGOS (3) */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
          <p className="text-xs uppercase tracking-wider text-neutral-400">Confían en nosotros</p>
          <div className="mt-4 grid grid-cols-3 gap-4">
            <ClientLogo label="APCC / HKLABA" />
            <ClientLogo label="Echevensko" />
            <ClientLogo label="Citylube" />
          </div>
        </div>
      </section>

      {/* PROGRAMA SOCIOS */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 md:p-10 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">Programa Socios (revenue share)</h3>
            <p className="text-neutral-300 mt-2">
              Vendemos tus servicios con nuestro embudo, CRM y contenidos. Tú entregas; nosotros
              captamos y cerramos. Compensación por porcentaje de cada venta.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-300">
              <li className="flex gap-2">
                <Check size={16} className="mt-0.5" /> Activos de conversión: video, landing y copy
              </li>
              <li className="flex gap-2">
                <Check size={16} className="mt-0.5" /> Email/ads + base segmentada B2B cuando
                aplica
              </li>
              <li className="flex gap-2">
                <Check size={16} className="mt-0.5" /> CRM y automatizaciones (Zoho) con seguimiento
              </li>
            </ul>
          </div>
          <div className="flex items-center md:justify-end">
            <div className="flex flex-wrap gap-3">
              <Link
                href="/sections/socios"
                className="inline-flex items-center gap-2 rounded-2xl bg-white text-neutral-900 px-5 py-3 font-semibold"
              >
                Quiero ser socio <ArrowRight size={18} />
              </Link>
              <Link
                href="/sections/contacto"
                className="inline-flex items-center gap-2 rounded-2xl border border-[var(--border)] px-5 py-3 font-semibold hover:bg-neutral-900"
              >
                Hablar con nosotros
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="max-w-6xl mx-auto px-4 pb-14">
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">¿Listo para dar el siguiente paso?</h3>
            <p className="text-neutral-300 mt-2">
              Cuéntanos tu objetivo y activamos un plan con entregables claros y medibles.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/sections/contacto"
              className="inline-flex items-center gap-2 rounded-2xl bg-white text-neutral-900 px-5 py-3 font-semibold"
            >
              Contacto <ArrowRight size={18} />
            </Link>
            <Link
              href="/sections/servicios"
              className="inline-flex items-center gap-2 rounded-2xl border border-[var(--border)] px-5 py-3 font-semibold hover:bg-neutral-900"
            >
              Ver Servicios
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function KpiCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-neutral-900/60 p-4">
      <div className="flex items-center gap-2 text-neutral-400 text-xs">
        {icon} <span className="uppercase tracking-wide">{label}</span>
      </div>
      <div className="mt-1 text-lg font-semibold text-white">{value}</div>
    </div>
  )
}

function Card({
  title,
  items,
  cta,
}: {
  title: string
  items: string[]
  cta?: { href: string; label: string }
}) {
  return (
    <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-neutral-300">
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
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-200 underline underline-offset-4 hover:text-white"
          >
            {cta.label} <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </div>
  )
}

function CaseCard({
  title,
  subtitle,
  bullets,
  tags,
}: {
  title: string
  subtitle: string
  bullets: string[]
  tags?: string[]
}) {
  return (
    <article className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 flex flex-col">
      <header>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-neutral-400 text-sm">{subtitle}</p>
        {tags && tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t, i) => (
              <span
                key={i}
                className="text-xs rounded-full border border-[var(--border)] bg-neutral-900 px-2.5 py-1 text-neutral-300"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </header>
      <ul className="mt-4 space-y-2 text-sm text-neutral-300">
        {bullets.map((b, j) => (
          <li key={j}>• {b}</li>
        ))}
      </ul>
    </article>
  )
}

/** Logo placeholder estilizado (reemplázalo por <Image> cuando tengas logos en /public) */
function ClientLogo({ label }: { label: string }) {
  return (
    <div
      aria-label={label}
      className="relative h-14 rounded-2xl border border-[var(--border)] bg-neutral-900/60 flex items-center justify-center px-4"
    >
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[var(--brand1)] to-[var(--brand2)] rounded-t-2xl" />
      <span className="text-neutral-300 font-semibold tracking-wide">{label}</span>
    </div>
  )
}

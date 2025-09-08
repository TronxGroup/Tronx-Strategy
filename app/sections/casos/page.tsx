import Link from 'next/link'
import { Activity, Target, TrendingUp, Star } from 'lucide-react'

type Metric = { label: string; value: string }
type CaseItem = {
  title: string
  subtitle: string
  bullets: string[]
  tags?: string[]
  metrics?: Metric[] // 👈 Métricas clave por caso
}

const cases: CaseItem[] = [
  {
    title: 'APCC / HKLABA',
    subtitle: 'Plan institucional + digitalización',
    tags: ['Institucional', 'B2B', 'Socio (revenue share)'],
    bullets: [
      'Sitio web institucional',
      '3 landings: membresías, eventos y misiones comerciales',
      'Plan estratégico 2026–2030',
      'Embudo de ventas y captación de membresías',
      'Implementación de CRM y automatizaciones',
      'Curso a medida (producción y venta)',
      'Landing del curso + Hotmart (checkout y automatizaciones)',
      'Revenue share por cada venta del curso',
    ],
    metrics: [
      { label: 'Leads (últimos 30 días)', value: '—' },
      { label: 'CPL', value: '—' },
      { label: 'Tasa de cierre', value: '—' },
    ],
  }, // 👈 ESTA COMA FALTABA
  {
    title: 'Echevensko B2B',
    subtitle: 'Canal de charlas corporativas',
    tags: ['Socio (revenue share)', 'B2B'],
    bullets: [
      'Landing de captación + video institucional',
      'Email marketing a +4.000 contactos segmentados',
      'Google Ads para demanda intencional',
      'Programa Socios (Tronx cierra y participa vía % por venta)',
    ],
    metrics: [
      { label: 'Leads (últimos 30 días)', value: '—' },
      { label: 'CPL', value: '—' },
      { label: 'Tasa de cierre', value: '—' },
    ],
  },
  {
    title: 'Citylube Peñaflor',
    subtitle: 'Serviteca multimarca — Bilbao 75, Peñaflor',
    tags: ['Pymes', 'Local', 'Automotriz'],
    bullets: [
      'Landing orientada a conversión (selector, reserva, WhatsApp/llamar)',
      'Estrategia de 6 meses (campañas + contenido)',
      'Video comercial y piezas para redes',
      'Google Business Profile (Maps) optimizado + reseñas con QR',
      'Google Ads: Search + PMax Local (2–8 km) con extensiones',
      'Meta Ads (IG/FB) de apoyo geolocalizado',
      'CRM (Zoho): pipeline y automatizaciones por WhatsApp',
      'GA4 + GTM: tracking de Llamar / WhatsApp / Reservar',
      'Cupón de descuento por revisión + recordatorios de mantención',
    ],
    metrics: [
      { label: 'Leads (últimos 30 días)', value: '—' },
      { label: 'CPL', value: '—' },
      { label: 'Tasa de cierre', value: '—' },
    ],
  },
]

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Casos de Éxito</h1>
      <p className="mt-3 text-neutral-300 max-w-3xl">
        Algunos proyectos representativos del enfoque 360° de Tronx Strategy.
      </p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {cases.map((c, i) => (
          <article
            key={i}
            className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 flex flex-col"
          >
            <header>
              <h2 className="text-xl font-semibold">{c.title}</h2>
              <p className="text-neutral-400 text-sm">{c.subtitle}</p>
              {c.tags && c.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {c.tags.map((t, j) => (
                    <span
                      key={j}
                      className="text-xs rounded-full border border-[var(--border)] bg-neutral-900 px-2.5 py-1 text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </header>

            <ul className="mt-4 space-y-2 text-sm text-neutral-300">
              {c.bullets.map((b, j) => (
                <li key={j}>• {b}</li>
              ))}
            </ul>

            {/* Métricas por caso */}
            {c.metrics && c.metrics.length > 0 && (
              <div className="mt-5 grid grid-cols-3 gap-3">
                {c.metrics.map((m, k) => (
                  <div
                    key={k}
                    className="rounded-2xl border border-[var(--border)] bg-neutral-900/60 p-3"
                  >
                    <div className="text-[11px] uppercase tracking-wide text-neutral-400">
                      {m.label}
                    </div>
                    <div className="mt-1 text-base font-semibold text-white">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>

      {/* Datos de operación (global) */}
      <div className="mt-12 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
        <div className="flex items-center gap-2 text-xs text-neutral-400">
          <Activity size={14} /> Datos de operación (se actualiza mensualmente)
        </div>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Kpi icon={<Activity size={18} />} label="Leads totales (30 días)" value="—" />
          <Kpi icon={<Target size={18} />} label="CPL promedio" value="—" />
          <Kpi icon={<TrendingUp size={18} />} label="Tasa de cierre" value="—" />
          <Kpi icon={<Star size={18} />} label="Rating Google" value="—" />
        </div>
        <p className="mt-3 text-xs text-neutral-500">
          *Reemplaza “—” por valores reales. Sugerencia: conecta GA4/GTM + CRM para volcar números automáticamente.
        </p>
      </div>

      {/* CTA inferior */}
      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/sections/contacto"
          className="inline-flex items-center gap-2 rounded-2xl bg-white text-neutral-900 px-5 py-3 font-semibold"
        >
          Iniciar proyecto
        </Link>
        <Link
          href="/sections/socios"
          className="inline-flex items-center gap-2 rounded-2xl border border-[var(--border)] px-5 py-3 font-semibold hover:bg-neutral-900"
        >
          Programa Socios
        </Link>
      </div>
    </div>
  )
}

function Kpi({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-neutral-900/60 p-4">
      <div className="flex items-center gap-2 text-neutral-400 text-xs">
        {icon} <span className="uppercase tracking-wide">{label}</span>
      </div>
      <div className="mt-1 text-lg font-semibold text-white">{value}</div>
    </div>
  )
}

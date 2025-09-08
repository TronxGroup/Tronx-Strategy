// app/sections/citylube/page.tsx
import Link from 'next/link'
import { Check, Clock, MapPin, Phone, Wrench, Car, Droplets, AlignLeft } from 'lucide-react'

export const metadata = {
  title: 'CityLube Peñaflor — Packs y Reserva rápida',
  description:
    'Deja tu auto al día en 60–90 min. Packs con precio claro, alineación láser, frenos, afinamiento y más. Reserva por WhatsApp.',
}

const PHONE_E164 = '56912345678' // 👈 REEMPLAZA por el WhatsApp real sin signos (+569...)
const ADDRESS = 'Bilbao 75, Peñaflor, Región Metropolitana, Chile'

const packs = [
  {
    name: 'Pack Express Aceite',
    price: '$30.000',
    time: '25–35 min',
    features: ['Aceite 10W-40 (hasta 4L)', 'Mano de obra', 'Chequeo rápido 10 puntos'],
    badge: 'Básico',
  },
  {
    name: 'Pack Mantención Ahorro',
    price: '$49.900',
    time: '40–60 min',
    features: ['Aceite 10W-40 (hasta 4L)', 'Filtro de aceite', 'Revisión 15 puntos', 'Escaneo ligero'],
    badge: 'Ahorro',
  },
  {
    name: 'Pack Tripleta',
    price: '$69.900',
    time: '60–80 min',
    features: ['Aceite + filtro aceite', 'Alineación láser', 'Revisión 15 puntos'],
    badge: 'Lo más pedido',
  },
  {
    name: 'Pack Ruta Segura',
    price: '$89.900',
    time: '80–100 min',
    features: ['Tripleta', 'Balanceo 2 ruedas', 'Calibración', 'Chequeo de frenos'],
    badge: 'Viajes',
  },
  {
    name: 'Pack Frenos Seguro',
    price: 'desde $69.900',
    time: '60–90 min',
    features: ['Pastillas delanteras (mano de obra)', 'Limpieza/ajuste', 'Revisión de discos'],
    badge: 'Seguridad',
  },
  {
    name: 'Pack Afinamiento Básico',
    price: 'desde $89.900',
    time: '90–120 min',
    features: ['Aceite + filtro aceite', 'Filtro aire', 'Revisión bujías', 'Escaneo básico'],
    badge: 'Mantención',
  },
]

const addons = [
  'Filtro de aceite desde $12.900',
  'Filtro de aire desde $14.900',
  'Balanceo 2 ruedas $14.900 / 4 ruedas $24.900',
  'Limpieza de frenos $9.900',
  'Limpia inyectores $14.900',
  'Líquido de frenos (flush) desde $19.900',
]

export default function Page() {
  const wa = (pack?: string) =>
    `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(
      `Hola CityLube, quiero reservar${pack ? ` el *${pack}*` : ''}. Mi nombre es ______ y prefiero el día ______ a las ______.`
    )}`

  return (
    <div
      className="max-w-6xl mx-auto px-4 py-12"
      style={
        {
          // override de marca solo para esta página
          ['--brand1' as any]: '#E84B55',
          ['--brand2' as any]: '#4A3FA5',
        } as any
      }
    >
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)]">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-25"
          style={{
            backgroundImage:
              'radial-gradient(circle at 15% 15%, #E84B55 0, transparent 35%), radial-gradient(circle at 85% 20%, #4A3FA5 0, transparent 35%)',
          }}
        />
        <div className="px-6 py-10 md:px-10 md:py-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-neutral-900/70 px-3 py-1 text-xs text-neutral-300">
              <Car size={14} /> Serviteca multimarca
            </div>
            <h1 className="mt-3 text-3xl md:text-4xl font-extrabold leading-tight">
              Deja tu auto al día en <span className="text-white">60–90 min</span>
            </h1>
            <p className="mt-3 text-neutral-300">
              Packs con precio claro. Reserva por WhatsApp o teléfono. Alineación láser, frenos, aceite,
              afinamiento, tren delantero y mantención por kilometraje.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={wa()}
                className="inline-flex items-center gap-2 rounded-2xl bg-white text-neutral-900 px-5 py-3 font-semibold"
              >
                Reservar por WhatsApp
              </a>
              <a
                href={`tel:+${PHONE_E164}`}
                className="inline-flex items-center gap-2 rounded-2xl border border-[var(--border)] px-5 py-3 font-semibold hover:bg-neutral-900"
              >
                Llamar
              </a>
            </div>

            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-neutral-300">
              <li className="flex gap-2"><Check size={16} className="mt-0.5" /> Bilbao 75, Peñaflor</li>
              <li className="flex gap-2"><Check size={16} className="mt-0.5" /> Horario Lun–Sáb</li>
              <li className="flex gap-2"><Check size={16} className="mt-0.5" /> Packs con precio claro</li>
              <li className="flex gap-2"><Check size={16} className="mt-0.5" /> Cupón primera visita -10% mano de obra</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-neutral-900/60 p-5">
            <div className="grid grid-cols-2 gap-3 text-sm text-neutral-300">
              <Info icon={<MapPin size={16} />} title="Dirección" value={ADDRESS} />
              <Info icon={<Clock size={16} />} title="Horario" value="Lun–Vie 10:00–19:00 · Sáb 10:00–14:00" />
              <Info icon={<Phone size={16} />} title="Contacto" value="+56 9 _________" />
              <Info icon={<Wrench size={16} />} title="Servicios" value="Aceite, Alineación, Frenos, Afinamiento" />
            </div>
            <div className="mt-4 aspect-video rounded-xl overflow-hidden border border-[var(--border)]">
              <iframe
                title="Mapa CityLube Peñaflor"
                width="100%"
                height="100%"
                loading="lazy"
                src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PACKS */}
      <section className="mt-10">
        <div className="flex items-center gap-2 text-sm text-neutral-400">
          <Droplets size={16} /> Packs recomendados
        </div>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          {packs.map((p) => (
            <article
              key={p.name}
              className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 flex flex-col"
            >
              <header className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="text-neutral-400 text-sm">{p.time}</p>
                </div>
                {p.badge && (
                  <span className="text-[11px] rounded-full border border-[var(--border)] bg-neutral-900 px-2.5 py-1 text-neutral-300">
                    {p.badge}
                  </span>
                )}
              </header>

              <div className="mt-3 text-2xl font-bold">{p.price}</div>
              <ul className="mt-3 space-y-2 text-sm text-neutral-300">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check size={16} className="mt-0.5" /> {f}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex gap-3">
                <a
                  href={wa(p.name)}
                  className="inline-flex items-center rounded-2xl bg-white text-neutral-900 px-4 py-2 text-sm font-semibold"
                >
                  Reservar este pack
                </a>
                <a
                  href={wa()}
                  className="inline-flex items-center rounded-2xl border border-[var(--border)] px-4 py-2 text-sm font-semibold hover:bg-neutral-900"
                >
                  Consultar
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="mt-10 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
        <div className="flex items-center gap-2">
          <AlignLeft size={16} /> <h2 className="text-lg font-semibold">Add-ons rápidos</h2>
        </div>
        <ul className="mt-3 grid md:grid-cols-2 gap-2 text-sm text-neutral-300">
          {addons.map((a) => (
            <li key={a} className="flex gap-2">
              <Check size={16} className="mt-0.5" /> {a}
            </li>
          ))}
        </ul>
      </section>

      {/* COMPARATIVA */}
      <section className="mt-10 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
        <h2 className="text-lg font-semibold">¿Cuál me conviene?</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-sm text-neutral-300">
            <thead className="text-neutral-400">
              <tr>
                <th className="text-left py-2 pr-4">Pack</th>
                <th className="text-left py-2 pr-4">Aceite</th>
                <th className="text-left py-2 pr-4">Filtro</th>
                <th className="text-left py-2 pr-4">Alineación</th>
                <th className="text-left py-2 pr-4">Balanceo</th>
                <th className="text-left py-2 pr-4">Chequeo</th>
                <th className="text-left py-2 pr-4">Desde</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Express', '✔', '—', '—', '—', '10 pts', '$30.000'],
                ['Ahorro', '✔', '✔', '—', '—', '15 pts', '$49.900'],
                ['Tripleta', '✔', '✔', '✔', '—', '15 pts', '$69.900'],
                ['Ruta Segura', '✔', '✔', '✔', '2 ruedas', '15 pts + frenos', '$89.900'],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-[var(--border)]">
                  {row.map((cell, i) => (
                    <td key={i} className="py-2 pr-4">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4">
          <a
            href={wa()}
            className="inline-flex items-center rounded-2xl bg-white text-neutral-900 px-5 py-3 text-sm font-semibold"
          >
            No sé cuál elegir — Escríbenos
          </a>
        </div>
      </section>

      {/* FAQ + CTA FINAL */}
      <section className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
          <h2 className="text-lg font-semibold">Preguntas frecuentes</h2>
          <ul className="mt-3 space-y-2 text-sm text-neutral-300">
            <li><b>¿Los precios son finales?</b> Son “desde”, pueden variar por modelo/litros. Confirmamos antes de agendar.</li>
            <li><b>¿Cuánto demora?</b> Entre 25 y 100 min según pack y estado del vehículo.</li>
            <li><b>¿Garantía?</b> 90 días mano de obra; piezas según fabricante.</li>
            <li><b>¿Formas de pago?</b> Débito y crédito.</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
          <h2 className="text-lg font-semibold">Reserva ahora</h2>
          <p className="text-neutral-300 text-sm mt-1">Atención rápida y cercana en Peñaflor.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={wa()} className="inline-flex items-center rounded-2xl bg-white text-neutral-900 px-5 py-3 text-sm font-semibold">
              Reservar por WhatsApp
            </a>
            <a href={`tel:+${PHONE_E164}`} className="inline-flex items-center rounded-2xl border border-[var(--border)] px-5 py-3 text-sm font-semibold hover:bg-neutral-900">
              Llamar
            </a>
            <Link href="/" className="inline-flex items-center rounded-2xl border border-[var(--border)] px-5 py-3 text-sm font-semibold hover:bg-neutral-900">
              Volver a Tronx Strategy
            </Link>
          </div>
        </div>
      </section>

      <p className="mt-6 text-xs text-neutral-500">
        *Precios “desde” según modelo y litros. Confirmación por WhatsApp previa a la visita.
      </p>
    </div>
  )
}

function Info({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-neutral-950/60 p-3">
      <div className="text-[11px] uppercase tracking-wide text-neutral-400 flex items-center gap-2">
        {icon} {title}
      </div>
      <div className="mt-1 text-sm text-white">{value}</div>
    </div>
  )
}

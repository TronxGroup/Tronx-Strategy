import Link from "next/link";

export default function HomePage() {
  return (
    <div className="section">
      {/* HERO con fondo full screen */}
<section
  className="relative overflow-hidden rounded-xl min-h-screen flex items-center"
  style={{
    backgroundImage: "url('/BG_hero_strategy.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

  <div className="relative w-full grid lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] gap-10 items-center px-4 lg:px-8 py-24">
    <div>
      <p className="section-title text-sky-300/90">
        Estudio digital Tronx Group
      </p>

      <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
        Sitios web modernos para empresas que quieren crecer.
      </h1>

      <p className="mt-4 text-base md:text-lg text-slate-200 max-w-xl">
        Diseñamos y desarrollamos sitios web rápidos, seguros y listos para
        vender: desde emprendedores hasta instituciones y gremios.
        Infraestructura GitHub + Vercel + Cloudflare, contenido claro y
        tiempos de entrega ágiles.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/contacto" className="btn-primary">
          Agenda una llamada
        </Link>
        <Link
          href="/servicios"
          className="btn-ghost bg-white/10 backdrop-blur hover:bg-white/20"
        >
          Ver planes y servicios
        </Link>
      </div>

      {/* mini KPIs */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs md:text-sm text-slate-300">
        <div>
          <p className="text-white text-base md:text-lg font-semibold">2–4 semanas</p>
          <p>Tiempo típico de entrega por sitio.</p>
        </div>
        <div>
          <p className="text-white text-base md:text-lg font-semibold">Infraestructura</p>
          <p>GitHub · Vercel · Cloudflare.</p>
        </div>
        <div>
          <p className="text-white text-base md:text-lg font-semibold">+ Seguridad</p>
          <p>SSL, backups y monitoreo.</p>
        </div>
        <div>
          <p className="text-white text-base md:text-lg font-semibold">100% cloud</p>
          <p>Operación remota y escalable.</p>
        </div>
      </div>
    </div>

    {/* Tarjeta derecha */}
    <div className="relative">
      <div className="card-surface p-6 md:p-8 shadow-2xl bg-black/55 backdrop-blur rounded-xl border border-white/10">
        <p className="text-sm font-semibold tracking-[0.22em] text-sky-300 uppercase">
          Planes Tronx Strategy
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-white">
          Paquetes claros, lista de precios simple.
        </h2>
        <p className="mt-3 text-sm text-slate-200">
          Tres niveles de servicio según tu etapa digital o corporativa.
        </p>
        <ul className="mt-4 space-y-2 text-sm text-slate-100">
          <li>• Plan Básico — Presencia profesional.</li>
          <li>• Plan Medio — Sitio corporativo completo.</li>
          <li>• Plan Premium — Sitio + CRM + WebOps.</li>
        </ul>
        <p className="mt-4 text-xs text-slate-400">
          Incluyen diseño, desarrollo, SEO base, dominio y SSL. Opcional:
          mantención y hosting administrado.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* BLOQUE: QUÉ PODEMOS CONSTRUIR */}
      <section className="mt-16">
        <p className="section-title">Qué podemos construir</p>
        <h2 className="section-heading">
          Desde una landing en 48 horas hasta un portal institucional completo.
        </h2>
        <p className="section-subtitle">
          Tronx Strategy se integra con Tronx Group y Dekaelo Media para
          entregar una solución coherente: web, contenido, campañas y
          reporting.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Sitios corporativos",
              body: "Páginas completas para empresas, gremios, estudios y proyectos con necesidades de comunicación claras y reporting.",
            },
            {
              title: "Landing pages y campañas",
              body: "Páginas de alta conversión para lanzamientos, eventos, cursos y campañas con medición real.",
            },
            {
              title: "Portales y directorios",
              body: "Arquitecturas escalables para cámaras, asociaciones y proyectos territoriales.",
            },
          ].map((card) => (
            <div key={card.title} className="card-surface p-6">
              <h3 className="text-lg font-semibold text-slate-50">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300">{card.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

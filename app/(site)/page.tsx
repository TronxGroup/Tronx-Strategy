import Link from "next/link";

export default function HomePage() {
  return (
    <div className="section">
      <section className="grid lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] gap-10 items-center pt-8 lg:pt-16">
        <div>
          <p className="section-title">Estudio digital Tronx Group</p>
          <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-50">
            Sitios web modernos para empresas que quieren crecer.
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-300 max-w-xl">
            Diseñamos y desarrollamos sitios web rápidos, seguros y listos para
            vender: desde emprendedores hasta grandes instituciones. Infraestructura
            GitHub + Vercel + Cloudflare, contenido claro y tiempos de entrega
            ágiles.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contacto" className="btn-primary">
              Agenda una llamada
            </Link>
            <Link href="/servicios" className="btn-ghost">
              Ver planes y servicios
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs md:text-sm text-slate-400">
            <div>
              <p className="text-slate-200 text-base md:text-lg font-semibold">
                2–4 semanas
              </p>
              <p>Tiempo típico de entrega por sitio.</p>
            </div>
            <div>
              <p className="text-slate-200 text-base md:text-lg font-semibold">
                Infraestructura
              </p>
              <p>GitHub · Vercel · Cloudflare.</p>
            </div>
            <div>
              <p className="text-slate-200 text-base md:text-lg font-semibold">
                + Seguridad
              </p>
              <p>SSL, backups y monitoreo.</p>
            </div>
            <div>
              <p className="text-slate-200 text-base md:text-lg font-semibold">
                100% cloud
              </p>
              <p>Operación remota y escalable.</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="card-surface p-6 md:p-8 shadow-soft-glow">
            <p className="text-sm font-semibold tracking-[0.22em] text-tronx-accent uppercase">
              Planes Tronx Strategy
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-50">
              Paquetes claros, lista de precios simple.
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Tres niveles de servicio para adaptarnos a tu etapa: presencia
              profesional, sitio corporativo completo o solución premium
              integrada con CRM y campañas.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>• Plan Básico — Presencia profesional.</li>
              <li>• Plan Medio — Sitio corporativo completo.</li>
              <li>• Plan Premium — Todo incluido.</li>
            </ul>
            <p className="mt-4 text-xs text-slate-400">
              Incluyen diseño, desarrollo, SEO base, configuración de dominio y
              SSL. Opcional: mantención y hosting administrado.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <p className="section-title">Qué podemos construir</p>
        <h2 className="section-heading">
          Desde una landing en 48 horas hasta un portal institucional completo.
        </h2>
        <p className="section-subtitle">
          Tronx Strategy se integra con Dekaelo Media y Tronx Group para entregar
          una solución digital coherente: web, contenido, campañas y reporting.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Sitios corporativos",
              body: "Páginas completas para empresas, gremios, estudios y proyectos con necesidades de comunicación claras y reporting."
            },
            {
              title: "Landing pages y campañas",
              body: "Páginas de alta conversión para lanzamientos, eventos, cursos y campañas con medición real."
            },
            {
              title: "Portales y directorios",
              body: "Arquitecturas escalables para cámaras, asociaciones y proyectos territoriales."
            }
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

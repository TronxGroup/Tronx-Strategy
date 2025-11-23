"use client";

export default function NosotrosPage() {
  return (
    <section
      className="relative min-h-screen w-full flex items-center"
      style={{
        backgroundImage: "url('/BG_nosotros_strategy.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay para legibilidad */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />

      {/* Contenido */}
      <div className="relative section py-20 lg:py-24">
        {/* Intro */}
        <header className="max-w-4xl">
          <p className="section-title text-sky-300/90">Nosotros</p>

          <h1 className="section-heading text-white">
            Tronx Strategy es el estudio web de Tronx Group.
          </h1>

          <p className="section-subtitle text-slate-200">
            Unimos diseño, desarrollo y operación digital bajo un modelo 100% cloud.
            Creamos sitios web que se ven bien, cargan rápido y funcionan como un
            activo real del negocio: ventas, reputación, leads y comunicación.
          </p>
        </header>

        {/* Contenido principal */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_minmax(0,1fr)] items-start">
          {/* Texto */}
          <div className="space-y-6 text-sm md:text-base text-slate-300 leading-relaxed">
            <p>
              Tronx Strategy nace como la unidad digital de{" "}
              <strong>Tronx Group SpA</strong>, holding creativo–tecnológico con base
              en Providencia, Santiago de Chile. Formamos parte de un ecosistema que
              integra producción audiovisual (<strong>Dekaelo Media</strong>), medios
              editoriales (<strong>Tronx TV</strong>) y plataformas territoriales
              (<strong>SANRAVAL</strong>).
            </p>

            <p>
              Nuestra especialidad es el <strong>desarrollo web moderno</strong> para
              empresas, cámaras, asociaciones, colegios y negocios de servicios.
              Combinamos <em>Next.js</em>, <em>Vercel</em>, <em>Cloudflare</em>,
              analítica y CRM para transformar tu sitio en una pieza clave de tu
              operación digital.
            </p>

            <p>
              Trabajamos sobre una <strong>arquitectura tecnológica definida</strong>:
              GitHub para el código, Vercel para despliegue y Cloudflare para
              rendimiento y seguridad. Esto asegura velocidad, estabilidad y
              escalabilidad sin complejidad innecesaria.
            </p>

            <p>
              Diseñamos considerando experiencia de usuario, flujos de negocio y
              facilidad de actualización. Un sitio debe sostener campañas,
              posicionamiento, contenido y relación con clientes.
            </p>

            <p>
              Nuestra metodología se basa en <strong>capas</strong>: partimos con una
              base rápida y clara, sumando blog, CRM, directorios, portales o
              integraciones a medida que tu organización crece.
            </p>
          </div>

          {/* Tarjeta lateral */}
          <aside className="card-surface p-6 bg-black/55 backdrop-blur border border-white/10">
            <h2 className="text-lg font-semibold text-white">
              Principios de trabajo
            </h2>

            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <strong className="text-white">Simple primero.</strong>{" "}
                Menos capas, menos fricción, más claridad.
              </li>

              <li>
                <strong className="text-white">Tecnología comprensible.</strong>{" "}
                Infraestructura moderna explicada en lenguaje claro.
              </li>

              <li>
                <strong className="text-white">Diseño con propósito.</strong>{" "}
                Cada sección resuelve una necesidad real del negocio.
              </li>

              <li>
                <strong className="text-white">Operación continua.</strong>{" "}
                No entregamos un archivo: entregamos un sistema vivo.
              </li>

              <li>
                <strong className="text-white">Visión de holding.</strong>{" "}
                Web + contenido + medios cuando el proyecto lo requiere.
              </li>
            </ul>
          </aside>
        </div>

        {/* Bloque extra inferior */}
        <section className="mt-12 grid gap-6 md:grid-cols-3 text-xs md:text-sm text-slate-300">
          <div>
            <p className="font-semibold text-slate-100">Cobertura nacional</p>
            <p className="mt-1">
              Proyectos para empresas, cámaras e instituciones de todo Chile.
              Operación 100% remota y procesos formales.
            </p>
          </div>

          <div>
            <p className="font-semibold text-slate-100">Estándar corporativo</p>
            <p className="mt-1">
              Experiencia con bancos, gremios, colegios, empresas industriales y
              servicios profesionales.
            </p>
          </div>

          <div>
            <p className="font-semibold text-slate-100">Preparado para crecer</p>
            <p className="mt-1">
              Listos para escalar a portales, directorios, CRM e infraestructura
              avanzada.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}

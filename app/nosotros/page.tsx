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
            verdadero activo de negocio: apoyan ventas, reputación, captación de leads
            y comunicación con clientes.
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
              analítica y CRM para que tu sitio no sea solo una vitrina, sino una
              pieza clave de tu operación digital.
            </p>

            <p>
              A diferencia de una agencia tradicional, trabajamos sobre una{" "}
              <strong>arquitectura tecnológica definida</strong>:{" "}
              <strong>GitHub</strong> para el código, <strong>Vercel</strong> para
              despliegue continuo y <strong>Cloudflare</strong> para rendimiento y
              seguridad. Esto nos permite operar con eficiencia, reducir tiempos y
              entregar resultados medibles desde el primer día.
            </p>

            <p>
              Para nosotros, un sitio web es una plataforma que debe sostener
              campañas, contenido, posicionamiento y relación con clientes. Diseñamos
              pensando en la experiencia del usuario, en los flujos de negocio y en
              la facilidad de actualización para equipos internos de marketing y
              comunicaciones.
            </p>

            <p>
              Trabajamos con una lógica de <strong>capas</strong>: partimos por una
              base sólida (sitio rápido y claro) y vamos sumando funcionalidades —
              blog, CRM, directorios, portales, integraciones— a medida que tu
              organización lo necesita, sin sobrecargar el proyecto desde el inicio.
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
                Menos capas, menos fricción, más claridad para el usuario.
              </li>

              <li>
                <strong className="text-white">Tecnología comprensible.</strong>{" "}
                Infraestructura moderna explicada en lenguaje claro para equipos
                que no viven en el código, pero toman decisiones.
              </li>

              <li>
                <strong className="text-white">Diseño con propósito.</strong>{" "}
                Cada sección responde a una necesidad real del negocio: informar,
                captar, explicar o derivar.
              </li>

              <li>
                <strong className="text-white">Operación continua.</strong>{" "}
                No entregamos un archivo: dejamos funcionando un sistema vivo, con
                documentación y opciones de mantención.
              </li>

              <li>
                <strong className="text-white">Visión de holding.</strong>{" "}
                Podemos coordinar web, contenido y medios con las demás unidades de
                Tronx Group cuando el proyecto lo requiere.
              </li>
            </ul>
          </aside>
        </div>

        {/* Bloque extra inferior */}
        <section className="mt-12 grid gap-6 md:grid-cols-3 text-xs md:text-sm text-slate-300">
          <div>
            <p className="font-semibold text-slate-100">Base en Chile Central</p>
            <p className="mt-1">
              Proyectos con foco en empresas y organizaciones del eje
              Santiago–Rancagua–Valparaíso, con capacidad remota para otros
              territorios.
            </p>
          </div>
          <div>
            <p className="font-semibold text-slate-100">Estándar corporativo</p>
            <p className="mt-1">
              Experiencia con bancos, cámaras, colegios, empresas industriales y
              pymes de servicios que requieren procesos formales.
            </p>
          </div>
          <div>
            <p className="font-semibold text-slate-100">Preparado para crecer</p>
            <p className="mt-1">
              Sitios listos para escalar a portales, directorios, integración con
              CRM y proyectos territoriales junto a otras unidades del holding.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}

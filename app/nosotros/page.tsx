// app/nosotros/page.tsx
"use client";

import Image from "next/image";

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
      <div className="relative section py-24">
        <section className="max-w-4xl">
          <p className="section-title text-sky-300/90">Nosotros</p>

          <h1 className="section-heading text-white">
            Tronx Strategy es el estudio web de Tronx Group.
          </h1>

          <p className="section-subtitle text-slate-200">
            Unimos diseño, desarrollo y operación digital bajo un modelo 100% cloud.
            Creamos sitios web que se ven bien, cargan rápido y funcionan como un
            verdadero activo de negocio: apoyan ventas, reputación y expansión.
          </p>
        </section>

        {/* Contenido principal */}
        <section className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_minmax(0,1fr)] items-start">
          <div className="space-y-6 text-sm md:text-base text-slate-300">
            <p>
              Tronx Strategy nace como la unidad digital de Tronx Group SpA,
              holding creativo–tecnológico con base en Providencia, Santiago de Chile.
              Nuestra experiencia combina desarrollo web moderno, producción
              audiovisual y operación para marcas B2B, pymes e instituciones.
            </p>

            <p>
              A diferencia de una agencia tradicional, trabajamos sobre una
              arquitectura tecnológica definida: GitHub para el código, Vercel para
              el despliegue y Cloudflare para el rendimiento y la seguridad. Esto
              nos permite operar con eficiencia, reducir tiempos y entregar
              resultados medibles desde el primer día.
            </p>

            <p>
              Para nosotros, un sitio web no es solo una vitrina. Es una plataforma
              que debe sostener campañas, contenido, posicionamiento y relación con
              clientes. Diseñamos pensando en la experiencia, en los flujos de
              negocio y en la facilidad de actualización para equipos internos.
            </p>
          </div>

          {/* Tarjeta lateral */}
          <div className="card-surface p-6 bg-black/50 backdrop-blur border border-white/10">
            <h2 className="text-lg font-semibold text-white">Principios de trabajo</h2>

            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <strong className="text-white">Simple primero.</strong>  
                Menos capas, menos fricción, más claridad para el usuario.
              </li>

              <li>
                <strong className="text-white">Tecnología comprensible.</strong>  
                Infraestructura moderna, explicada en un lenguaje claro.
              </li>

              <li>
                <strong className="text-white">Diseño con propósito.</strong>  
                Cada sección responde a una necesidad real del negocio.
              </li>

              <li>
                <strong className="text-white">Operación continua.</strong>  
                No entregamos un archivo: dejamos funcionando un sistema vivo.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
}

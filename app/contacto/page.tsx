// app/contacto/page.tsx
"use client";

export default function ContactoPage() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden flex items-stretch"
      style={{
        backgroundImage: "url('/BG_contacto_strategy.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

      {/* Contenido */}
      <div className="relative section py-16 lg:py-24 flex-1">
        {/* Encabezado */}
        <section className="max-w-4xl">
          <p className="section-title text-sky-300/90">Contacto</p>
          <h1 className="section-heading text-white">
            Cuéntanos qué necesitas y diseñamos el plan adecuado.
          </h1>
          <p className="section-subtitle text-slate-300 max-w-2xl">
            Completa el formulario o escríbenos directamente. Respondemos dentro
            de 24 horas hábiles.
          </p>
        </section>

        {/* Formulario + Aside */}
        <section className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">

          {/* FORMULARIO */}
          <form
            className="card-surface p-6 space-y-5 bg-black/70 border border-slate-700/70 backdrop-blur-sm rounded-2xl"
            action="mailto:contacto@tronxstrategy.com"
            method="post"
            encType="text/plain"
          >
            {/* Nombre + Empresa */}
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Nombre" name="nombre" required />
              <Field label="Empresa / institución" name="empresa" />
            </div>

            {/* Correo + Teléfono */}
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Correo electrónico" type="email" name="correo" required />
              <Field label="Teléfono / WhatsApp" name="telefono" />
            </div>

            {/* Tipo de proyecto */}
            <div>
              <Label>Tipo de proyecto</Label>
              <select
                name="tipo_proyecto"
                className="input-select"
              >
                <option>Sitio web corporativo</option>
                <option>Landing page</option>
                <option>Portal o directorio</option>
                <option>Rediseño de sitio actual</option>
                <option>Otro</option>
              </select>
            </div>

            {/* Mensaje */}
            <div>
              <Label>Mensaje</Label>
              <textarea
                name="mensaje"
                rows={5}
                className="input-area"
                placeholder="Cuéntanos brevemente qué necesitas, plazos y si tienes un sitio actual."
              />
            </div>

            <button type="submit" className="btn-primary w-full md:w-auto">
              Enviar mensaje
            </button>

            <p className="text-xs text-slate-500">
              También puedes escribir directamente a{" "}
              <span className="text-slate-200 font-medium">
                info@tronxstrategy.com
              </span>.
            </p>
          </form>

          {/* ASIDE DERECHO */}
          <aside className="space-y-5 text-sm text-slate-300">

            {/* Datos de contacto */}
            <div className="card-surface p-5 bg-black/70 border border-slate-700/70 backdrop-blur-sm rounded-2xl">
              <h2 className="text-base font-semibold text-white">
                Datos de contacto
              </h2>
              <ul className="mt-3 space-y-2">
                <li>
                  <span className="text-slate-400">Correo: </span>
                  info@tronxstrategy.com
                </li>
                <li>
                  <span className="text-slate-400">Ubicación: </span>
                  Providencia, Santiago · Operación 100% remota.
                </li>
                <li>
                  <span className="text-slate-400">Horario: </span>
                  Lunes a viernes: 9:00–18:00 (GMT-3)
                </li>
              </ul>
            </div>

            {/* Cómo trabajamos */}
            <div className="card-surface p-5 bg-black/70 border border-slate-700/70 backdrop-blur-sm rounded-2xl">
              <h2 className="text-base font-semibold text-white">
                Cómo trabajamos
              </h2>
              <ol className="mt-3 list-decimal list-inside space-y-2">
                <li>Reunión inicial para objetivos y alcance.</li>
                <li>Propuesta clara con presupuesto cerrado.</li>
                <li>Diseño, desarrollo y revisión con tu equipo.</li>
                <li>Salida a producción + soporte inicial.</li>
              </ol>
            </div>
          </aside>
        </section>
      </div>
    </section>
  );
}

/* ---------- SUBCOMPONENTES ---------- */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-[0.16em]">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        required={required}
        className="input-base"
      />
    </div>
  );
}

/* ---------- CLASES GLOBALES SUGERIDAS (agregar a globals.css) ---------- */

/*
.input-base {
  @apply mt-1 w-full rounded-xl border border-slate-700/70 bg-black/60
         px-3 py-2 text-sm text-slate-50 outline-none
         focus:border-tronx-accent/70;
}

.input-select {
  @apply mt-1 w-full rounded-xl border border-slate-700/70 bg-black/60
         px-3 py-2 text-sm text-slate-50 outline-none
         focus:border-tronx-accent/70;
}

.input-area {
  @apply mt-1 w-full rounded-xl border border-slate-700/70 bg-black/60
         px-3 py-2 text-sm text-slate-50 outline-none
         focus:border-tronx-accent/70;
}
*/

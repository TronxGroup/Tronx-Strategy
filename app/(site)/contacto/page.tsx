export default function ContactoPage() {
  return (
    <div className="section">
      <section className="max-w-4xl">
        <p className="section-title">Contacto</p>
        <h1 className="section-heading">
          Cuéntanos qué necesitas y diseñamos el plan adecuado.
        </h1>
        <p className="section-subtitle">
          Puedes escribirnos directamente o completar el formulario. Respondemos
          normalmente dentro de 24 horas hábiles.
        </p>
      </section>

      <section className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
        <form
          className="card-surface p-6 space-y-4"
          action="mailto:contacto@tronxstrategy.com"
          method="post"
          encType="text/plain"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-[0.16em]">
                Nombre
              </label>
              <input
                name="nombre"
                required
                className="mt-1 w-full rounded-xl border border-slate-700/70 bg-black/60 px-3 py-2 text-sm text-slate-50 outline-none focus:border-tronx-accent/70"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-[0.16em]">
                Empresa
              </label>
              <input
                name="empresa"
                className="mt-1 w-full rounded-xl border border-slate-700/70 bg-black/60 px-3 py-2 text-sm text-slate-50 outline-none focus:border-tronx-accent/70"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-[0.16em]">
                Correo electrónico
              </label>
              <input
                name="correo"
                type="email"
                required
                className="mt-1 w-full rounded-xl border border-slate-700/70 bg-black/60 px-3 py-2 text-sm text-slate-50 outline-none focus:border-tronx-accent/70"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-[0.16em]">
                Teléfono / WhatsApp
              </label>
              <input
                name="telefono"
                className="mt-1 w-full rounded-xl border border-slate-700/70 bg-black/60 px-3 py-2 text-sm text-slate-50 outline-none focus:border-tronx-accent/70"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-[0.16em]">
              Tipo de proyecto
            </label>
            <select
              name="tipo_proyecto"
              className="mt-1 w-full rounded-xl border border-slate-700/70 bg-black/60 px-3 py-2 text-sm text-slate-50 outline-none focus:border-tronx-accent/70"
            >
              <option>Sitio web corporativo</option>
              <option>Landing page</option>
              <option>Portal o directorio</option>
              <option>Rediseño de sitio existente</option>
              <option>Otro</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-[0.16em]">
              Mensaje
            </label>
            <textarea
              name="mensaje"
              rows={5}
              className="mt-1 w-full rounded-xl border border-slate-700/70 bg-black/60 px-3 py-2 text-sm text-slate-50 outline-none focus:border-tronx-accent/70"
              placeholder="Cuéntanos brevemente qué necesitas, plazos y si tienes un sitio actual."
            />
          </div>

          <button type="submit" className="btn-primary">
            Enviar mensaje
          </button>
          <p className="text-xs text-slate-500">
            También puedes escribir directamente a{" "}
            <span className="text-slate-200">
              contacto@tronxstrategy.com
            </span>{" "}
            o coordinar por WhatsApp.
          </p>
        </form>

        <aside className="space-y-5 text-sm text-slate-300">
          <div className="card-surface p-5">
            <h2 className="text-base font-semibold text-slate-50">
              Datos de contacto
            </h2>
            <ul className="mt-3 space-y-2">
              <li>
                <span className="text-slate-400">Correo: </span>
                contacto@tronxstrategy.com
              </li>
              <li>
                <span className="text-slate-400">Ubicación: </span>
                Providencia, Santiago de Chile · Operación 100% remota.
              </li>
              <li>
                <span className="text-slate-400">Horario: </span>
                Lunes a viernes, 9:00 a 18:00 (GMT-3).
              </li>
            </ul>
          </div>

          <div className="card-surface p-5">
            <h2 className="text-base font-semibold text-slate-50">
              Cómo trabajamos
            </h2>
            <ol className="mt-3 list-decimal list-inside space-y-2">
              <li>Reunión breve para entender alcance y plazos.</li>
              <li>Propuesta y presupuesto cerrado.</li>
              <li>Diseño, desarrollo y ajustes.</li>
              <li>Salida a producción + soporte inicial.</li>
            </ol>
          </div>
        </aside>
      </section>
    </div>
  );
}

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-start">
      {/* Columna izquierda: info */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold">Contacto</h1>
        <p className="mt-3 text-white/70">
          ¿Listo para conversar tu estrategia o cotizar un pack? Cuéntanos brevemente tu objetivo,
          plazo y presupuesto estimado.
        </p>

        <div className="mt-6 space-y-2 text-white/80">
          <p>
            📧{' '}
            <a
              className="underline underline-offset-4 decoration-white/30 hover:text-white"
              href="mailto:info@tronxstrategy.com"
            >
              info@tronxstrategy.com
            </a>
          </p>
          <p>
            📱{' '}
            <a className="hover:text-white" href="tel:+56920080031">
              +56 9 2008 0031
            </a>
          </p>
          <p className="text-xs text-white/50">
            Respondemos dentro de <b>24–48 h hábiles</b>.
          </p>
        </div>
      </div>

      {/* Columna derecha: formulario */}
      <form
        className="rounded-3xl border border-white/10 bg-white/5 p-6 grid gap-4"
        action="https://formspree.io/f/your-id" // ← reemplaza con tu endpoint real
        method="POST"
      >
        {/* Anti-spam (honeypot) */}
        <input type="text" name="_gotcha" className="hidden" aria-hidden="true" tabIndex={-1} />
        {/* Subject útil para tu inbox */}
        <input type="hidden" name="_subject" value="Nuevo contacto — Tronx Strategy" />

        <LabelInput label="Nombre" name="nombre" placeholder="Tu nombre" autoComplete="name" required />
        <LabelInput
          label="Email"
          type="email"
          name="email"
          placeholder="tu@empresa.com"
          autoComplete="email"
          required
        />

        {/* Tipo de solicitud y presupuesto ayudan a calificar rápido */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="grid gap-2 text-sm">
            <label className="text-white/70" htmlFor="tipo">Tipo de solicitud</label>
            <select
              id="tipo"
              name="tipo"
              className="bg-neutral-900 border border-white/10 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
              defaultValue=""
              required
            >
              <option value="" disabled>Selecciona…</option>
              <option value="diagnostico">Diagnóstico / asesoría</option>
              <option value="onboarding">Onboarding (Fundamentos)</option>
              <option value="transformacion">Transformación digital</option>
              <option value="estrategia">Estrategia / capacitación</option>
              <option value="cotizacion_pack">Cotización pack</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <LabelInput
            label="Presupuesto estimado"
            name="presupuesto"
            placeholder="Ej: CLP 800.000 / USD 900"
          />
        </div>

        <div className="grid gap-2 text-sm">
          <label className="text-white/70" htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            className="bg-neutral-900 border border-white/10 rounded-xl px-3 py-2 h-28 outline-none focus:ring-2 focus:ring-white/20"
            placeholder="Contexto, objetivos, plazo y enlaces (sitio, RRSS)."
            required
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-2xl bg-white text-neutral-900 px-5 py-3 font-semibold"
        >
          Enviar
        </button>

        <p className="text-xs text-white/50">
          Al enviar, aceptas ser contactado por correo. No compartimos tus datos con terceros.
        </p>
        {/* Para redirigir a una página de gracias, revisa la opción correspondiente de tu proveedor de formularios */}
        {/* <input type="hidden" name="_redirect" value="https://tudominio.com/contacto/gracias" /> */}
      </form>
    </div>
  );
}

/* ---------- Subcomponente ---------- */

function LabelInput({
  label,
  name,
  type = 'text',
  placeholder,
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm" htmlFor={name}>
      <span className="text-white/70">{label}</span>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="bg-neutral-900 border border-white/10 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
      />
    </label>
  );
}

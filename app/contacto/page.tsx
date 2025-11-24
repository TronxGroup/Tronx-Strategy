// app/contacto/page.tsx
"use client";

import Script from "next/script";

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

      {/* Script reCAPTCHA */}
      <Script
        src="https://www.google.com/recaptcha/api.js"
        async
        defer
        strategy="lazyOnload"
      />

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
          {/* FORMULARIO (Zoho WebToLead, mismo diseño Tronx) */}
          <form
            id="webform6988454000001329111"
            name="WebToLeads6988454000001329111"
            method="POST"
            action="https://crm.zoho.com/crm/WebToLeadForm"
            acceptCharset="UTF-8"
            className="card-surface p-6 space-y-5 bg-black/70 border border-slate-700/70 backdrop-blur-sm rounded-2xl"
            onSubmit={() => {
              // Requerido por Zoho
              document.charset = "UTF-8";
            }}
          >
            {/* --- HIDDEN ZOHO (NO TOCAR) --- */}
            <input
              type="hidden"
              name="xnQsjsdp"
              value="c0dc3ffa504f6e87c28e87d1f635554b975ade794041575b3f5b48f48329d5dd"
            />
            <input type="hidden" name="zc_gad" id="zc_gad" value="" />
            <input
              type="hidden"
              name="xmIwtLD"
              value="413078008e8a3bcce6d97d6302b548f90a53ed4e7ce073494598ea7007edd4d3fee6a18c3f509e526a14298bd390f08e"
            />
            <input
              type="hidden"
              name="actionType"
              value="TGVhZHM="
            />
            <input
              type="hidden"
              name="returnURL"
              value="https://www.tronxstrategy.com/confirm"
            />
            {/* Marca (LEADCF5) */}
            <input
              type="hidden"
              name="LEADCF5"
              value="Tronx-Strategy"
            />
            {/* Lead_Origen (LEADCF9) */}
            <input
              type="hidden"
              name="LEADCF9"
              value="tronxstrategy.com/contacto"
            />
            {/* aG9uZXlwb3Q (honeypot) */}
            <input
              type="hidden"
              name="aG9uZXlwb3Q"
              style={{ display: "none" }}
              value=""
            />

            {/* Nombre + Empresa (Zoho: Last Name, Company) */}
            <div className="grid gap-5 md:grid-cols-2">
              <Field
                label="Nombre y Apellido"
                name="Last Name"
                required
              />
              <Field
                label="Empresa / institución"
                name="Company"
                required
              />
            </div>

            {/* Correo + Teléfono (Zoho: Email, Mobile) */}
            <div className="grid gap-5 md:grid-cols-2">
              <Field
                label="Correo electrónico"
                type="email"
                name="Email"
                required
              />
              <Field
                label="Teléfono / WhatsApp"
                name="Mobile"
              />
            </div>

            {/* Tipo de proyecto (Zoho: LEADCF32) */}
            <div>
              <Label>Tipo de proyecto</Label>
              <select
                name="LEADCF32"
                required
                className="input-select"
                defaultValue="Sitio web corporativo"
              >
                <option value="-None-">Selecciona una opción</option>
                <option value="Sitio web corporativo">
                  Sitio web corporativo
                </option>
                <option value="Landing page">Landing page</option>
                <option value="Portal o directorio">Portal o directorio</option>
                <option value="Rediseño de sitio actual">
                  Rediseño de sitio actual
                </option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            {/* Mensaje (Zoho: LEADCF3) */}
            <div>
              <Label>Mensaje</Label>
              <textarea
                name="LEADCF3"
                rows={5}
                className="input-area"
                placeholder="Cuéntanos brevemente qué necesitas, plazos y si tienes un sitio actual."
              />
            </div>

            {/* reCAPTCHA */}
            <div className="mt-4">
              <div
                className="g-recaptcha"
                data-sitekey="6LfP4RYsAAAAAHgL1XFwZogFNns_cLHZwKhEmcB6"
                data-theme="light"
              />
            </div>

            {/* Botones */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                id="formsubmit"
                className="btn-primary w-full md:w-auto formsubmit"
              >
                Enviar mensaje
              </button>
              <button
                type="reset"
                className="btn-secondary w-full md:w-auto"
              >
                Restablecer
              </button>
            </div>

            <p className="text-xs text-slate-500 mt-3">
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

/* ---------- CLASES GLOBALES SUGERIDAS (globals.css) ----------
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
----------------------------------------------------------------*/

export default function NosotrosPage() {
  return (
    <div className="section">
      <section className="max-w-4xl">
        <p className="section-title">Nosotros</p>
        <h1 className="section-heading">
          Tronx Strategy es el estudio web de Tronx Group.
        </h1>
        <p className="section-subtitle">
          Unimos diseño, desarrollo y operación digital bajo un modelo 100% cloud.
          Creamos sitios web que se ven bien, cargan rápido y tienen una lógica
          clara detrás: apoyar ventas, reputación y expansión.
        </p>
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_minmax(0,1fr)] items-start">
        <div className="space-y-6 text-sm md:text-base text-slate-300">
          <p>
            Tronx Strategy nace como la unidad digital de Tronx Group SpA, holding
            creativo-tecnológico con base en Providencia, Santiago de Chile.
            Nuestra experiencia combina años de desarrollo web, producción
            audiovisual y operación para marcas B2B e instituciones.
          </p>
          <p>
            A diferencia de una agencia tradicional, trabajamos con una
            arquitectura tecnológica clara: GitHub para el código, Vercel para
            el despliegue y Cloudflare para la seguridad. Esto nos permite
            mantener una operación ligera y escalable, con costos eficientes y
            resultados medibles.
          </p>
          <p>
            Entendemos que cada sitio web es más que una vitrina. Es un activo
            digital que debe sostener campañas, contenidos y relaciones en el
            tiempo. Por eso diseñamos pensando en la experiencia de las personas,
            en los flujos de negocio y en la facilidad de administración.
          </p>
        </div>

        <div className="card-surface p-6">
          <h2 className="text-lg font-semibold text-slate-50">
            Principios de trabajo
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>
              <strong className="text-slate-100">Simple primero.</strong> Menos
              capas, menos fricción, más claridad.
            </li>
            <li>
              <strong className="text-slate-100">Tecnológico pero humano.</strong>{" "}
              Infraestructura moderna, lenguaje comprensible.
            </li>
            <li>
              <strong className="text-slate-100">Diseño con propósito.</strong>{" "}
              Cada sección responde a una pregunta del usuario.
            </li>
            <li>
              <strong className="text-slate-100">Operación continua.</strong> El
              sitio se concibe como sistema, no como pieza estática.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

const planos = [
  {
    name: "Plan Básico — Presencia profesional",
    price: "$290.000",
    description:
      "Para profesionales, emprendedores y negocios locales que necesitan una presencia clara y moderna.",
    features: [
      "Sitio de 1 a 3 secciones",
      "Diseño responsive moderno",
      "Formulario de contacto + WhatsApp",
      "SEO básico y carga rápida",
      "Configuración de dominio y SSL",
      "Entrega en 7 días hábiles"
    ]
  },
  {
    name: "Plan Medio — Sitio corporativo",
    price: "$590.000 – $690.000",
    description:
      "Para empresas y organizaciones que requieren un sitio completo, con contenidos, blog y medición.",
    popular: true,
    features: [
      "5 a 7 páginas completas",
      "Blog o sección de noticias",
      "Integración con Google Analytics + Tag Manager",
      "Optimización SEO On-Page",
      "Configuración de correo corporativo",
      "Integración con CRM (Zoho / HubSpot)",
      "Capacitación de uso (1 hora)",
      "Entrega en 2 a 3 semanas"
    ]
  },
  {
    name: "Plan Premium — Todo incluido",
    price: "$990.000 – $1.500.000",
    description:
      "Para instituciones, cámaras y empresas grandes que necesitan una solución integrada.",
    features: [
      "8 a 12 páginas + blog avanzado",
      "Animaciones, secciones interactivas y componentes personalizados",
      "Producción básica de contenido (textos + ajuste de imágenes)",
      "Integraciones avanzadas con CRM y campañas digitales",
      "Manual Web Corporativo en PDF",
      "1 mes de soporte y ajustes incluidos",
      "Entrega en 3 a 4 semanas"
    ]
  }
];

const extras = [
  {
    title: "Landing page 48 horas",
    description:
      "Página de alta conversión para campañas, lanzamientos o eventos, lista en 2 días hábiles.",
    price: "$120.000 – $180.000"
  },
  {
    title: "Optimización web (velocidad + SEO + UX)",
    description:
      "Mejoramos rendimiento, estructura y contenido de tu sitio actual para que funcione mejor.",
    price: "$80.000 – $200.000"
  },
  {
    title: "Rediseño express",
    description:
      "Actualizamos el diseño de tu sitio sin cambiar la base de contenido, en una semana.",
    price: "$250.000 – $400.000"
  },
  {
    title: "Migración a Vercel + Cloudflare",
    description:
      "Movemos tu sitio desde hosting tradicional o WordPress a una infraestructura moderna.",
    price: "$150.000 – $300.000"
  }
];

const recurrentes = [
  {
    title: "Mantención web",
    details: "Actualizaciones de contenido, respaldos y pequeños cambios.",
    price: "Desde $29.990 mensual"
  },
  {
    title: "Hosting administrado",
    details:
      "Infraestructura Vercel + Cloudflare con monitoreo, SSL y respaldos.",
    price: "Desde $10.000 mensual"
  },
  {
    title: "Soporte prioritario",
    details: "Atención vía correo/WhatsApp con tiempos de respuesta definidos.",
    price: "Desde $19.990 mensual"
  },
  {
    title: "Gestión de contenidos",
    details: "Publicación mensual de noticias, blog o actualizaciones.",
    price: "Desde $80.000 mensual"
  }
];

export default function ServiciosPage() {
  return (
    <div className="section">
      <section>
        <p className="section-title">Servicios y planes</p>
        <h1 className="section-heading">
          Planes claros, servicios modulares y operación continua.
        </h1>
        <p className="section-subtitle">
          Puedes partir con una landing en 48 horas, un sitio corporativo o una
          solución premium. Todos los proyectos comparten el mismo estándar
          tecnológico y de diseño.
        </p>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-3">
        {planos.map((plan) => (
          <article
            key={plan.name}
            className={`card-surface p-6 flex flex-col h-full border ${
              plan.popular
                ? "border-tronx-accent/60 shadow-soft-glow"
                : "border-slate-700/70"
            }`}
          >
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-slate-50">
                {plan.name}
              </h2>
              <p className="mt-1 text-tronx-accent text-base font-semibold">
                {plan.price}
              </p>
              <p className="mt-3 text-sm text-slate-300">{plan.description}</p>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-slate-200 flex-1">
              {plan.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_minmax(0,1fr)] items-start">
        <div>
          <h2 className="text-xl font-semibold text-slate-50">
            Servicios adicionales
          </h2>
          <p className="mt-2 text-sm text-slate-300 max-w-2xl">
            Productos rápidos y de alto impacto que puedes combinar con cualquier
            plan: perfectos para campañas, lanzamientos o mejoras puntuales.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {extras.map((extra) => (
              <article key={extra.title} className="card-surface p-4 text-sm">
                <h3 className="font-semibold text-slate-50">{extra.title}</h3>
                <p className="mt-1 text-slate-300">{extra.description}</p>
                <p className="mt-2 text-tronx-accent font-medium">
                  {extra.price}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="card-surface p-5">
          <h2 className="text-lg font-semibold text-slate-50">
            Servicios recurrentes
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Para que tu sitio se mantenga vivo, seguro y alineado a tus
            campañas, ofrecemos servicios que se renuevan mes a mes.
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-200">
            {recurrentes.map((srv) => (
              <li key={srv.title}>
                <p className="font-semibold text-slate-50">{srv.title}</p>
                <p className="text-slate-300">{srv.details}</p>
                <p className="text-tronx-accent text-xs mt-1">{srv.price}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

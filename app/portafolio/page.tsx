"use client";

import Image from "next/image";

const projects = [
  {
    name: "APCC — Cámara Asia Pacífico",
    img: "/portafolio/apcc.jpg",
    type: "Portal gremial · CRM · Eventos",
    description:
      "Sitio institucional, motor de contenidos y formularios conectados a Zoho CRM y HubSpot para membresías, cursos y misiones comerciales.",
    status: "En operación",
    tags: ["Gremios", "CRM", "Eventos"],
    url: "https://www.asiapacific-chamber.com",
  },
  {
    name: "MagiaImaginacion.cl — Echevensko",
    img: "/portafolio/magia.jpg",
    type: "Landing de charlas y formación",
    description:
      "Sitio de posicionamiento para charlas corporativas, con landings para programas y embudo de leads preparado para campañas pagadas.",
    status: "En operación",
    tags: ["Branding", "Charlas", "Landing"],
    url: "https://www.magiaimaginacion.cl",
  },
  {
    name: "Dekaelo Media",
    img: "/portafolio/dekaelo.jpg",
    type: "Estudio audiovisual",
    description:
      "Sitio para estudio audiovisual con foco en vodcasts, contenido corporativo y proyectos cinematográficos.",
    status: "En desarrollo",
    tags: ["Audiovisual", "Portafolio"],
    url: "https://www.dekaelomedia.com",
  },
  {
    name: "SANRAVAL",
    img: "/portafolio/sanraval.jpg",
    type: "Directorio territorial",
    description:
      "Guía digital del eje Santiago–Rancagua–Valparaíso, con directorio de empresas, noticias y enfoque territorial.",
    status: "Beta",
    tags: ["Directorio", "Territorio"],
    url: "https://www.sanraval.cl",
  },
  {
    name: "CityLube — Serviteca en Peñaflor",
    img: "/portafolio/citylube.jpg",
    type: "Sitio corporativo · SEO local · Servicios automotrices",
    description:
      "Sitio web optimizado para servicios automotrices locales, incluyendo posicionamiento SEO, servicios, precios estratégicos y contacto directo.",
    status: "En operación",
    tags: ["SEO Local", "Servicios", "Comercio"],
    url: "https://www.citylube.cl",
  },
  {
  name: "Exploflex Ltda.",
  img: "/portafolio/minvu.jpg",
  type: "Sitio corporativo · Industria · Catálogo de productos",
  description:
    "Sitio web informativo y corporativo para Exploflex Ltda., con presentación de la empresa, líneas de productos, servicios, contacto y contenidos actualizados.",
  status: "En desarrollo",
  tags: ["Industria", "Corporativo"],
  url: "https://exploflex.cl/",
},
];

export default function PortafolioPage() {
  return (
    <div className="section">
      <section>
        <p className="section-title">Portafolio</p>
        <h1 className="section-heading">
          Proyectos que combinan diseño, contenido y operación.
        </h1>
        <p className="section-subtitle">
          Sitios diseñados e implementados desde Tronx Group para cámaras,
          estudios, instituciones, pymes y marcas personales ejecutivas.
        </p>
      </section>

      <section className="mt-12 grid gap-10 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="card-surface overflow-hidden p-0 border border-slate-700/60 rounded-2xl"
          >
            {/* Imagen */}
            <div className="relative w-full h-48 md:h-56 bg-slate-950/50">
              <Image
                src={project.img}
                alt={project.name}
                fill
                priority={false}
                className="object-cover opacity-90"
              />
            </div>

            {/* Contenido */}
            <div className="p-6">
              <p className="text-xs font-semibold tracking-[0.22em] text-slate-400 uppercase">
                {project.type}
              </p>

              <a
                href={project.url}
                target="_blank"
                className="mt-2 text-lg font-semibold text-tronx-accent hover:underline inline-block"
              >
                {project.name}
              </a>

              <p className="mt-3 text-sm text-slate-300">{project.description}</p>

              {/* Tags + estado */}
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-300">
                <span
                  className={`rounded-full px-2 py-1 border ${
                    project.status === "En operación"
                      ? "border-green-400/70 text-green-300"
                      : project.status === "Beta"
                      ? "border-yellow-400/70 text-yellow-300"
                      : "border-sky-400/70 text-sky-300"
                  }`}
                >
                  {project.status}
                </span>

                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-800/80 border border-slate-700 px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

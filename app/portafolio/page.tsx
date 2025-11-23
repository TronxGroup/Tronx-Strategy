"use client";

import Image from "next/image";

const projects = [
  {
    name: "APCC — Cámara Asia Pacífico",
    img: "/portafolio/apcc.jpg",
    type: "Portal gremial · CRM · Eventos",
    description:
      "Sitio institucional moderno, motor de contenidos y formularios conectados a Zoho CRM y HubSpot para membresías, cursos y misiones comerciales.",
    status: "En operación",
    tags: ["Gremios", "CRM", "Eventos"],
    url: "https://www.asiapacific-chamber.com",
  },
  {
    name: "MagiaImaginacion.cl — Echevensko",
    img: "/portafolio/magia.jpg",
    type: "Landing de charlas y formación",
    description:
      "Sitio de posicionamiento para charlas corporativas, con landings para programas, embudo de leads y estructura lista para campañas pagadas.",
    status: "En operación",
    tags: ["Branding", "Charlas", "Landing"],
    url: "https://www.magiaimaginacion.cl",
  },
  {
    name: "Dekaelo Media",
    img: "/portafolio/dekaelo.jpg",
    type: "Estudio audiovisual · Portafolio",
    description:
      "Sitio para estudio audiovisual con foco en vodcasts, contenido corporativo y proyectos cinematográficos propios del holding Tronx Group.",
    status: "En desarrollo",
    tags: ["Audiovisual", "Portafolio"],
    url: "https://www.dekaelomedia.com",
  },
  {
    name: "SANRAVAL",
    img: "/portafolio/sanraval.jpg",
    type: "Directorio territorial · Medios",
    description:
      "Guía digital del eje Santiago–Rancagua–Valparaíso, con directorio de empresas, noticias y enfoque territorial como plataforma propia del holding.",
    status: "Beta",
    tags: ["Directorio", "Territorio"],
    url: "https://www.sanraval.cl",
  },
  {
    name: "CityLube — Serviteca en Peñaflor",
    img: "/portafolio/citylube.jpg",
    type: "Sitio corporativo · SEO local · Servicios",
    description:
      "Sitio optimizado para servicios automotrices locales, con enfoque en SEO local, servicios claros, precios estratégicos y contacto directo por WhatsApp.",
    status: "En operación",
    tags: ["SEO Local", "Servicios", "Comercio"],
    url: "https://www.citylube.cl",
  },
  {
    name: "Exploflex Ltda.",
    img: "/portafolio/minvu.jpg", // puedes cambiar a /portafolio/exploflex.jpg cuando la tengas
    type: "Sitio corporativo · Industria · Catálogo de productos",
    description:
      "Sitio informativo y corporativo para Exhibidores Exploflex Ltda., con presentación de la empresa, líneas de productos, servicios y contacto.",
    status: "En desarrollo",
    tags: ["Industria", "Corporativo"],
    url: "https://exploflex.cl/",
  },
];

export default function PortafolioPage() {
  return (
    <div className="section">
      {/* HEADER */}
      <section>
        <p className="section-title">Portafolio</p>
        <h1 className="section-heading">
          Proyectos que combinan diseño, contenido y operación digital.
        </h1>
        <p className="section-subtitle max-w-3xl">
          Sitios diseñados e implementados desde Tronx Group para cámaras, estudios,
          instituciones, pymes y marcas personales ejecutivas. Cada proyecto parte
          desde una base tecnológica común (Next.js, Vercel, Cloudflare) y se adapta
          a las necesidades del cliente.
        </p>
      </section>

      {/* GRID PROYECTOS */}
      <section className="mt-12 grid gap-10 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="card-surface overflow-hidden p-0 border border-white/10 rounded-2xl hover:border-tronx-accent/50 transition"
          >
            {/* Imagen */}
            <div className="relative w-full h-48 md:h-56 bg-slate-950/50">
              <Image
                src={project.img}
                alt={project.name}
                fill
                priority={false}
                className="object-cover opacity-95 hover:opacity-100 transition"
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
                rel="noopener noreferrer"
                className="mt-2 text-lg font-semibold text-tronx-accent hover:underline inline-block"
              >
                {project.name}
              </a>

              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                {project.description}
              </p>

              {/* Tags + estado */}
              <div className="mt-5 flex flex-wrap gap-2 text-[11px]">
                {/* Estado */}
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

                {/* Tags */}
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-800/80 border border-slate-700/70 px-2 py-1 text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* CTA FINAL */}
      <section className="mt-16 text-center">
        <p className="text-sm text-slate-400">
          ¿Te imaginas un proyecto similar para tu empresa, institución o cámara?
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <a href="/contacto#form" className="btn-primary">
            Conversar un proyecto web →
          </a>
          <a href="/servicios" className="btn-ghost">
            Ver planes y servicios →
          </a>
        </div>
      </section>
    </div>
  );
}

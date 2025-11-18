const projects = [
  {
    name: "APCC — Cámara Asia Pacífico",
    type: "Portal gremial · CRM · Eventos",
    description:
      "Sitio institucional, motor de contenidos y formularios conectados a Zoho CRM y HubSpot para membresías, cursos y misiones comerciales.",
    status: "En operación",
    tags: ["Gremios", "CRM", "Eventos"]
  },
  {
    name: "MagiaImaginacion.cl — Echevensko",
    type: "Landing de charlas y formación",
    description:
      "Sitio de posicionamiento para charlas corporativas, con landings para programas y embudo de leads preparado para campañas pagadas.",
    status: "En operación",
    tags: ["Branding", "Charlas", "Landing"]
  },
  {
    name: "Dekaelo Media",
    type: "Estudio audiovisual",
    description:
      "Sitio para estudio audiovisual con foco en vodcasts, contenido corporativo y proyectos cinematográficos.",
    status: "En desarrollo",
    tags: ["Audiovisual", "Portafolio"]
  },
  {
    name: "SANRAVAL",
    type: "Directorio territorial",
    description:
      "Guía digital del eje Santiago–Rancagua–Valparaíso, con directorio de empresas, noticias y enfoque territorial.",
    status: "Beta",
    tags: ["Directorio", "Territorio"]
  }
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
          Algunos de los sistemas y sitios que hemos diseñado e implementado
          desde Tronx Group para cámaras, marcas personales, estudios y proyectos
          territoriales.
        </p>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.name} className="card-surface p-6">
            <p className="text-xs font-semibold tracking-[0.22em] text-slate-400 uppercase">
              {project.type}
            </p>
            <h2 className="mt-2 text-lg font-semibold text-slate-50">
              {project.name}
            </h2>
            <p className="mt-3 text-sm text-slate-300">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-300">
              <span className="rounded-full border border-slate-600/70 px-2 py-1">
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
          </article>
        ))}
      </section>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Project = {
  name: string;
  img: string;
  type: string;
  description: string;
  status: "En operación" | "En desarrollo" | "Beta";
  tags: string[];
  url: string;
  service: "Plan Premium" | "Plan Medio" | "Plan Básico" | "Landing page 48 horas";
};

const projects: Project[] = [
  {
    name: "APCC — Cámara Asia Pacífico",
    img: "/portafolio/apcc.jpg",
    type: "Portal gremial · CRM · Eventos",
    description:
      "Sitio institucional moderno con motor de contenidos y formularios conectados a CRM para apoyar membresías, cursos, eventos y misiones comerciales.",
    status: "En operación",
    tags: ["Gremios", "CRM", "Eventos"],
    url: "https://www.asiapacific-chamber.com",
    service: "Plan Premium",
  },
  {
    name: "MagiaImaginacion.cl — Echevensko",
    img: "/portafolio/magia.jpg",
    type: "Landing de charlas y formación",
    description:
      "Plataforma de posicionamiento para charlas corporativas, con estructura lista para campañas, captación de leads y crecimiento por etapas.",
    status: "En operación",
    tags: ["Branding", "Charlas", "Landing"],
    url: "https://www.magiaimaginacion.cl",
    service: "Plan Básico",
  },
  {
    name: "Dekaelo Media",
    img: "/portafolio/dekaelo.jpg",
    type: "Estudio audiovisual · Portafolio",
    description:
      "Sitio para estudio audiovisual con foco en videos corporativos, vodcasts y proyectos del holding Tronx Group, con estructura clara para crecer en contenido.",
    status: "En desarrollo",
    tags: ["Audiovisual", "Portafolio"],
    url: "https://www.dekaelomedia.com",
    service: "Plan Medio",
  },
  {
    name: "SANRAVAL",
    img: "/portafolio/sanraval.jpg",
    type: "Directorio territorial · Medios",
    description:
      "Guía digital del eje Santiago–Rancagua–Valparaíso, con directorio, noticias y enfoque territorial como plataforma propia del holding.",
    status: "Beta",
    tags: ["Directorio", "Territorio"],
    url: "https://www.sanraval.cl",
    service: "Plan Premium",
  },
  {
    name: "CityLube — Serviteca en Peñaflor",
    img: "/portafolio/citylube.jpg",
    type: "Landing · SEO local · Contacto directo",
    description:
      "Página enfocada en conversión para servicios automotrices locales, con propuesta clara, foco en SEO local y contacto directo por WhatsApp.",
    status: "En operación",
    tags: ["SEO Local", "Servicios", "Comercio"],
    url: "https://www.citylube.cl",
    service: "Landing page 48 horas",
  },
  {
    name: "AF MINVU–SERVIU Tarapacá",
    img: "/portafolio/minvu.jpg", // usa una imagen real cuando la tengas (ej: /portafolio/serviu-tarapaca.jpg)
    type: "Portal institucional · Noticias · Contenidos",
    description:
      "Sitio institucional para asociación de funcionarios, con secciones informativas, noticias/beneficios y módulos administrables para mantener el contenido actualizado.",
    status: "En operación",
    tags: ["Institucional", "Noticias", "Comunidad"],
    url: "https://www.afminvuserviutarapaca.cl",
    service: "Plan Medio",
  },
];

function pillService(service: Project["service"]) {
  const base =
    "rounded-full px-2 py-1 border text-[11px] font-semibold inline-flex items-center";
  if (service === "Plan Premium") return `${base} border-sky-400/70 text-sky-300`;
  if (service === "Plan Medio") return `${base} border-indigo-400/70 text-indigo-300`;
  if (service === "Plan Básico") return `${base} border-slate-500/70 text-slate-200`;
  return `${base} border-emerald-400/70 text-emerald-300`; // Landing 48h
}

function pillStatus(status: Project["status"]) {
  const base = "rounded-full px-2 py-1 border text-[11px] inline-flex items-center";
  if (status === "En operación") return `${base} border-green-400/70 text-green-300`;
  if (status === "Beta") return `${base} border-yellow-400/70 text-yellow-300`;
  return `${base} border-sky-400/70 text-sky-300`;
}

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
          Sitios construidos para empresas e instituciones, con una base moderna (Next.js, Vercel, Cloudflare)
          y foco en continuidad: medición, administración clara y escalabilidad por etapas.
        </p>
      </section>

      {/* GRID */}
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
                className="object-cover opacity-95 hover:opacity-100 transition"
              />
            </div>

            {/* Contenido */}
            <div className="p-6">
              <p className="text-xs font-semibold tracking-[0.22em] text-slate-400 uppercase">
                {project.type}
              </p>

              <div className="mt-2 flex items-start justify-between gap-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-tronx-accent hover:underline inline-block"
                >
                  {project.name}
                </a>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-slate-300 hover:text-slate-100"
                  aria-label={`Abrir ${project.name}`}
                >
                  Ver sitio <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                {project.description}
              </p>

              {/* Pills */}
              <div className="mt-5 flex flex-wrap gap-2">
                <span className={pillService(project.service)}>{project.service}</span>
                <span className={pillStatus(project.status)}>{project.status}</span>

                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-800/80 border border-slate-700/70 px-2 py-1 text-[11px] text-slate-300"
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
          ¿Te imaginas un proyecto similar para tu empresa o institución?
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Link href="/contacto#form" className="btn-primary">
            Conversar un proyecto web →
          </Link>
          <Link href="/servicios#planes" className="btn-ghost">
            Ver planes y servicios →
          </Link>
        </div>

        <p className="mt-3 text-[11px] text-slate-500">
          Nota: el plan indicado en cada proyecto refiere al tipo de servicio base; alcances adicionales se cotizan según necesidades.
        </p>
      </section>
    </div>
  );
}

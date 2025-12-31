"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Filter, Search, X } from "lucide-react";

type Status = "En operación" | "En desarrollo" | "Beta";
type Service = "Plan Premium" | "Plan Medio" | "Plan Básico" | "Landing page 48 horas";

type Project = {
  name: string;
  img: string;
  type: string;
  description: string;
  status: Status;
  tags: string[];
  url: string;
  service: Service;

  // extras opcionales para “vender mejor” (sin inventar números)
  highlights?: string[]; // 2–3 bullets cortos: CRM, noticias, SEO local, etc.
  outcome?: string; // “resultado”/beneficio en 1 línea
  year?: string; // opcional
  priority?: number; // orden comercial (mayor = más arriba)
};

const projects: Project[] = [
  {
    name: "APCC — Cámara Asia Pacífico",
    img: "/portafolio/apcc.jpg",
    type: "Portal gremial · CRM · Eventos",
    description:
      "Sitio institucional moderno con motor de contenidos y formularios conectados a CRM para apoyar membresías, cursos, eventos y misiones comerciales.",
    outcome: "Base institucional + captación trazable para operación gremial.",
    highlights: ["Contenidos administrables", "Formularios a CRM", "Estructura para membresías/eventos"],
    status: "En operación",
    tags: ["Gremios", "CRM", "Eventos"],
    url: "https://www.asiapacific-chamber.com",
    service: "Plan Premium",
    year: "2025",
    priority: 100,
  },
  {
    name: "AF MINVU–SERVIU Tarapacá",
    img: "/portafolio/minvu.jpg",
    type: "Portal institucional · Noticias · Contenidos",
    description:
      "Sitio institucional para asociación de funcionarios, con secciones informativas, noticias/beneficios y módulos administrables para mantener el contenido actualizado.",
    outcome: "Portal institucional operable por equipos internos.",
    highlights: ["Noticias/beneficios", "Estructura institucional", "Operación y continuidad"],
    status: "En desarrollo",
    tags: ["Institucional", "Noticias", "Comunidad"],
    url: "https://www.afminvuserviutarapaca.cl",
    service: "Plan Medio",
    year: "2025",
    priority: 90,
  },
  {
    name: "Dekaelo Media",
    img: "/portafolio/dekaelo.jpg",
    type: "Estudio audiovisual · Portafolio",
    description:
      "Sitio para estudio audiovisual con foco en videos corporativos, vodcasts y proyectos del holding Tronx Group, con estructura clara para crecer en contenido.",
    outcome: "Portafolio orientado a conversión y escalamiento por contenido.",
    highlights: ["Arquitectura por servicios", "CTAs claros", "Base para campañas"],
    status: "En operación",
    tags: ["Audiovisual", "Portafolio"],
    url: "https://www.dekaelomedia.com",
    service: "Plan Medio",
    year: "2025",
    priority: 80,
  },
  {
    name: "SANRAVAL",
    img: "/portafolio/sanraval.jpg",
    type: "Directorio territorial · Medios",
    description:
      "Guía digital del eje Santiago–Rancagua–Valparaíso, con directorio, noticias y enfoque territorial como plataforma propia del holding.",
    outcome: "Activo propio con base SEO + estructura para escalar fichas y contenidos.",
    highlights: ["Directorio", "Contenido", "Plataforma propia"],
    status: "Beta",
    tags: ["Directorio", "Territorio"],
    url: "https://www.sanraval.cl",
    service: "Plan Premium",
    year: "2025",
    priority: 70,
  },
  {
    name: "CityLube — Serviteca en Peñaflor",
    img: "/portafolio/citylube.jpg",
    type: "Landing · SEO local · Contacto directo",
    description:
      "Página enfocada en conversión para servicios automotrices locales, con propuesta clara, foco en SEO local y contacto directo por WhatsApp.",
    outcome: "Landing rápida para captar llamadas/WhatsApp con SEO local.",
    highlights: ["CTA WhatsApp", "SEO local", "Copy directo a conversión"],
    status: "En operación",
    tags: ["SEO Local", "Servicios", "Comercio"],
    url: "https://www.citylube.cl",
    service: "Landing page 48 horas",
    year: "2025",
    priority: 60,
  },
  {
    name: "MagiaImaginacion.cl — Echevensko",
    img: "/portafolio/magia.jpg",
    type: "Landing de charlas y formación",
    description:
      "Plataforma de posicionamiento para charlas corporativas, con estructura lista para campañas, captación de leads y crecimiento por etapas.",
    outcome: "Base de posicionamiento lista para campañas y captación.",
    highlights: ["Estructura de oferta", "CTAs por objetivo", "Escalable por etapas"],
    status: "En operación",
    tags: ["Branding", "Charlas", "Landing"],
    url: "https://www.magiaimaginacion.cl",
    service: "Plan Básico",
    year: "2025",
    priority: 50,
  },
];

function pillService(service: Service) {
  const base =
    "rounded-full px-2 py-1 border text-[11px] font-semibold inline-flex items-center whitespace-nowrap";
  if (service === "Plan Premium") return `${base} border-sky-400/70 text-sky-300 bg-sky-500/10`;
  if (service === "Plan Medio") return `${base} border-indigo-400/70 text-indigo-300 bg-indigo-500/10`;
  if (service === "Plan Básico") return `${base} border-slate-500/70 text-slate-200 bg-white/5`;
  return `${base} border-emerald-400/70 text-emerald-300 bg-emerald-500/10`; // Landing 48h
}

function pillStatus(status: Status) {
  const base = "rounded-full px-2 py-1 border text-[11px] inline-flex items-center whitespace-nowrap";
  if (status === "En operación") return `${base} border-green-400/70 text-green-300 bg-green-500/10`;
  if (status === "Beta") return `${base} border-yellow-400/70 text-yellow-300 bg-yellow-500/10`;
  return `${base} border-sky-400/70 text-sky-300 bg-sky-500/10`; // En desarrollo
}

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

const ALL = "Todos";

export default function PortafolioPage() {
  const [q, setQ] = useState("");
  const [serviceFilter, setServiceFilter] = useState<string>(ALL);
  const [statusFilter, setStatusFilter] = useState<string>(ALL);

  const services = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => set.add(p.service));
    return [ALL, ...Array.from(set)];
  }, []);

  const statuses = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => set.add(p.status));
    return [ALL, ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();

    return [...projects]
      .sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0))
      .filter((p) => {
        if (serviceFilter !== ALL && p.service !== serviceFilter) return false;
        if (statusFilter !== ALL && p.status !== statusFilter) return false;

        if (!query) return true;
        const haystack = [
          p.name,
          p.type,
          p.description,
          p.outcome ?? "",
          ...(p.tags ?? []),
          ...(p.highlights ?? []),
          p.service,
          p.status,
        ]
          .join(" ")
          .toLowerCase();

        return haystack.includes(query);
      });
  }, [q, serviceFilter, statusFilter]);

  const hasFilters = serviceFilter !== ALL || statusFilter !== ALL || q.trim().length > 0;

  return (
    <div className="section">
      {/* HEADER */}
      <section className="max-w-4xl">
        <p className="section-title">Portafolio</p>
        <h1 className="section-heading">Proyectos web que quedan listos para operar.</h1>
        <p className="section-subtitle max-w-3xl">
          Sitios construidos para empresas e instituciones con base moderna (Next.js, Vercel, Cloudflare) y foco en
          continuidad: medición, administración clara y escalabilidad por etapas.
        </p>

        {/* TOOLBAR */}
        <div className="mt-8 grid gap-3 lg:grid-cols-[1.4fr_0.8fr_0.8fr_auto] items-stretch">
          {/* search */}
          <div className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 flex items-center gap-3">
            <Search className="w-4 h-4 text-slate-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar: institucional, CRM, landing, SEO local..."
              className="w-full bg-transparent outline-none text-sm text-slate-200 placeholder:text-slate-500"
              aria-label="Buscar proyectos"
            />
            {q.trim() && (
              <button
                onClick={() => setQ("")}
                className="text-slate-400 hover:text-slate-200 transition"
                aria-label="Limpiar búsqueda"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* service filter */}
          <div className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
              <Filter className="w-3.5 h-3.5" />
              Servicio
            </div>
            <select
              value={serviceFilter}
              onChange={(e) => setServiceFilter(e.target.value)}
              className="w-full bg-transparent outline-none text-sm text-slate-200"
              aria-label="Filtrar por servicio"
            >
              {services.map((s) => (
                <option key={s} value={s} className="bg-slate-950">
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* status filter */}
          <div className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
              <Filter className="w-3.5 h-3.5" />
              Estado
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full bg-transparent outline-none text-sm text-slate-200"
              aria-label="Filtrar por estado"
            >
              {statuses.map((s) => (
                <option key={s} value={s} className="bg-slate-950">
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* reset */}
          <button
            onClick={() => {
              setQ("");
              setServiceFilter(ALL);
              setStatusFilter(ALL);
            }}
            className={cx(
              "rounded-2xl border px-4 py-3 text-sm transition",
              hasFilters
                ? "border-white/15 bg-white/5 text-slate-200 hover:bg-white/10"
                : "border-white/10 bg-black/30 text-slate-500 cursor-default"
            )}
            disabled={!hasFilters}
            aria-label="Limpiar filtros"
          >
            Limpiar
          </button>
        </div>

        <p className="mt-3 text-xs text-slate-500">
          Mostrando <span className="text-slate-200 font-semibold">{filtered.length}</span> de{" "}
          <span className="text-slate-200 font-semibold">{projects.length}</span> proyectos.
        </p>
      </section>

      {/* GRID */}
      <section className="mt-10 grid gap-10 md:grid-cols-2">
        {filtered.map((project) => (
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
                priority={project.priority !== undefined && project.priority >= 90}
              />
            </div>

            {/* Contenido */}
            <div className="p-6">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold tracking-[0.22em] text-slate-400 uppercase">{project.type}</p>
                {project.year ? (
                  <span className="text-[11px] text-slate-500 border border-white/10 rounded-full px-2 py-1 bg-black/30">
                    {project.year}
                  </span>
                ) : null}
              </div>

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

              <p className="mt-3 text-sm text-slate-300 leading-relaxed">{project.description}</p>

              {project.outcome ? (
                <div className="mt-4 rounded-xl border border-white/10 bg-black/30 p-3">
                  <p className="text-xs text-slate-300">
                    <span className="text-slate-100 font-semibold">Enfoque:</span> {project.outcome}
                  </p>
                </div>
              ) : null}

              {project.highlights?.length ? (
                <ul className="mt-4 grid gap-2 md:grid-cols-2 text-xs text-slate-300">
                  {project.highlights.slice(0, 4).map((h) => (
                    <li key={h} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                      {h}
                    </li>
                  ))}
                </ul>
              ) : null}

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

              {/* CTA row */}
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contacto#form" className="btn-primary" data-cta={`portfolio_contact_${project.service}`}>
                  Quiero algo similar →
                </Link>
                <Link href="/servicios#planes" className="btn-ghost" data-cta="portfolio_to_plans">
                  Ver planes →
                </Link>
              </div>

              <p className="mt-3 text-[11px] text-slate-500">
                Nota: el plan indicado refiere al servicio base; alcances adicionales se cotizan según necesidad.
              </p>
            </div>
          </article>
        ))}
      </section>

      {/* CTA FINAL */}
      <section className="mt-16 text-center">
        <p className="text-sm text-slate-400">¿Te imaginas un proyecto similar para tu empresa o institución?</p>

        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Link href="/contacto#form" className="btn-primary" data-cta="portfolio_final_contact">
            Conversar un proyecto web →
          </Link>
          <Link href="/servicios#planes" className="btn-ghost" data-cta="portfolio_final_plans">
            Ver planes y servicios →
          </Link>
        </div>

        <p className="mt-3 text-[11px] text-slate-500">
          Si tu caso es institucional (roles, continuidad, contenidos), te recomendamos partir por Plan Medio o Premium.
        </p>
      </section>
    </div>
  );
}

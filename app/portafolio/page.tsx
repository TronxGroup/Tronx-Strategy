"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronDown,
  Layers,
  ShieldCheck,
  BarChart3,
  Search,
  X,
  Filter,
  Check,
} from "lucide-react";

/* ============================= */
/* Types */
/* ============================= */

type Status = "En operación" | "En desarrollo" | "Beta";
type Service = "Pack Premium" | "Pack Pro" | "Pack Start" | "Landing 48h";

type Project = {
  name: string;
  img: string;
  type: string;
  description: string;
  status: Status;
  tags: string[];
  url: string;
  service: Service;
  outcome?: string;
  year?: string;
  priority?: number;
};

/* ============================= */
/* Data */
/* ============================= */

const projects: Project[] = [
  {
    name: "APCC — Cámara Asia Pacífico",
    img: "/portafolio/apcc.jpg",
    type: "Portal gremial · CRM · Eventos",
    description:
      "Sitio institucional con motor de contenidos y formularios conectados a CRM para membresías y misiones comerciales.",
    outcome: "Base institucional + captación trazable.",
    status: "En operación",
    tags: ["Gremios", "CRM", "Eventos"],
    url: "https://www.asiapacific-chamber.com",
    service: "Pack Premium",
    year: "2025",
    priority: 100,
  },
  {
    name: "AF MINVU–SERVIU Tarapacá",
    img: "/portafolio/minvu.jpg",
    type: "Portal institucional · Noticias",
    description:
      "Portal para asociación de funcionarios con noticias, beneficios y estructura operable por equipos internos.",
    outcome: "Sitio institucional con continuidad.",
    status: "En desarrollo",
    tags: ["Institucional", "Noticias"],
    url: "https://www.afminvuserviutarapaca.cl",
    service: "Pack Pro",
    year: "2025",
    priority: 95,
  },
  {
    name: "Dekaelo Media",
    img: "/portafolio/dekaelo.jpg",
    type: "Portafolio de servicios",
    description:
      "Sitio para estudio audiovisual con arquitectura preparada para campañas y crecimiento por servicios.",
    outcome: "Portafolio orientado a conversión.",
    status: "En operación",
    tags: ["Audiovisual", "Servicios"],
    url: "https://www.dekaelomedia.com",
    service: "Pack Pro",
    year: "2025",
    priority: 80,
  },
  {
    name: "SANRAVAL",
    img: "/portafolio/sanraval.jpg",
    type: "Directorio territorial · Plataforma propia",
    description:
      "Plataforma con estructura SEO y base escalable para crecer por contenidos y fichas.",
    outcome: "Activo propio con crecimiento por contenidos.",
    status: "Beta",
    tags: ["Directorio", "SEO"],
    url: "https://www.sanraval.cl",
    service: "Pack Premium",
    year: "2025",
    priority: 75,
  },
  {
    name: "CityLube — Serviteca",
    img: "/portafolio/citylube.jpg",
    type: "Landing · SEO Local",
    description:
      "Landing enfocada en conversión directa vía WhatsApp y posicionamiento local.",
    outcome: "Captación rápida + SEO local.",
    status: "En operación",
    tags: ["SEO Local", "WhatsApp", "Servicios"],
    url: "https://www.citylube.cl",
    service: "Landing 48h",
    year: "2025",
    priority: 60,
  },
  {
    name: "MagiaImaginacion.cl — Echevensko",
    img: "/portafolio/magia.jpg",
    type: "Landing de posicionamiento",
    description:
      "Plataforma para charlas con estructura preparada para campañas y captación de leads.",
    outcome: "Base lista para escalar por Ads.",
    status: "En operación",
    tags: ["Charlas", "Leads", "Branding"],
    url: "https://www.magiaimaginacion.cl",
    service: "Pack Start",
    year: "2025",
    priority: 50,
  },
];

/* ============================= */
/* Helpers */
/* ============================= */

const ALL = "Todos";

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

function pillService(service: Service) {
  const base =
    "rounded-full px-2 py-1 border text-[11px] font-semibold inline-flex items-center whitespace-nowrap";

  if (service === "Pack Premium")
    return `${base} border-sky-400/70 text-sky-300 bg-sky-500/10`;
  if (service === "Pack Pro")
    return `${base} border-indigo-400/70 text-indigo-300 bg-indigo-500/10`;
  if (service === "Pack Start")
    return `${base} border-slate-500/70 text-slate-200 bg-white/5`;

  return `${base} border-emerald-400/70 text-emerald-300 bg-emerald-500/10`;
}

function pillStatus(status: Status) {
  const base =
    "rounded-full px-2 py-1 border text-[11px] inline-flex items-center whitespace-nowrap";

  if (status === "En operación")
    return `${base} border-green-400/70 text-green-300 bg-green-500/10`;
  if (status === "Beta")
    return `${base} border-yellow-400/70 text-yellow-300 bg-yellow-500/10`;

  return `${base} border-sky-400/70 text-sky-300 bg-sky-500/10`;
}

/* ============================= */
/* Component */
/* ============================= */

export default function PortafolioClient() {
  const [q, setQ] = useState("");
  const [serviceFilter, setServiceFilter] = useState<string>(ALL);
  const [statusFilter, setStatusFilter] = useState<string>(ALL);

  // dropdown state (Servicio)
  const [serviceOpen, setServiceOpen] = useState(false);
  const serviceWrapRef = useRef<HTMLDivElement | null>(null);

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

  // cerrar dropdown al click fuera / escape
  useEffect(() => {
    function onDocMouseDown(e: MouseEvent) {
      if (!serviceWrapRef.current) return;
      if (!serviceWrapRef.current.contains(e.target as Node)) {
        setServiceOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setServiceOpen(false);
    }
    document.addEventListener("mousedown", onDocMouseDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onDocMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
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
          p.service,
          p.status,
        ]
          .join(" ")
          .toLowerCase();

        return haystack.includes(query);
      });
  }, [q, serviceFilter, statusFilter]);

  const hasFilters =
    serviceFilter !== ALL || statusFilter !== ALL || q.trim().length > 0;

  return (
    <div className="section">
      {/* HEADER */}
      <section className="max-w-4xl">
        <p className="section-title">Portafolio</p>
        <h1 className="section-heading">
          Proyectos web listos para operar{" "}
          <span className="text-tronx-accent">(y generar contactos)</span>.
        </h1>
        <p className="section-subtitle max-w-3xl">
          Casos reales: arquitectura moderna, medición y continuidad mensual para
          que el sitio no quede abandonado.
        </p>

        {/* ENFOQUE */}
        <div className="mt-8 grid md:grid-cols-3 gap-4 text-sm">
          <div className="card-surface p-4 border border-white/10">
            <Layers className="w-5 h-5 text-sky-400 mb-2" />
            Arquitectura escalable.
          </div>
          <div className="card-surface p-4 border border-white/10">
            <BarChart3 className="w-5 h-5 text-sky-400 mb-2" />
            Medición real.
          </div>
          <div className="card-surface p-4 border border-white/10">
            <ShieldCheck className="w-5 h-5 text-sky-400 mb-2" />
            Operación clara.
          </div>
        </div>

        {/* TOOLBAR */}
        <div className="mt-8 grid gap-3 lg:grid-cols-[1.4fr_0.9fr_0.9fr_auto] items-stretch">
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
                type="button"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* service filter (custom dropdown) */}
          <div
            ref={serviceWrapRef}
            className="relative rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
          >
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
              <Filter className="w-3.5 h-3.5" />
              Pack
            </div>

            <button
              type="button"
              onClick={() => setServiceOpen((v) => !v)}
              className={cx(
                "w-full flex items-center justify-between gap-3 text-sm text-slate-200 outline-none",
                "rounded-xl px-3 py-2 border transition",
                serviceOpen
                  ? "border-sky-400/40 bg-slate-950/50"
                  : "border-white/10 bg-transparent",
                "hover:border-sky-400/40"
              )}
              aria-haspopup="listbox"
              aria-expanded={serviceOpen}
              aria-label="Filtrar por pack"
            >
              <span className="truncate">{serviceFilter}</span>
              <ChevronDown
                className={cx(
                  "w-4 h-4 text-slate-300 transition",
                  serviceOpen && "rotate-180"
                )}
              />
            </button>

            {serviceOpen && (
              <div
                className={cx(
                  "absolute left-0 right-0 mt-2 z-50 overflow-hidden rounded-2xl border",
                  "border-white/10 bg-slate-950/95 backdrop-blur-xl shadow-2xl"
                )}
                role="listbox"
                aria-label="Opciones de pack"
              >
                <div className="p-2">
                  {services.map((s) => {
                    const active = s === serviceFilter;
                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() => {
                          setServiceFilter(s);
                          setServiceOpen(false);
                        }}
                        className={cx(
                          "w-full flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm transition text-left",
                          active
                            ? "bg-sky-500/25 border border-sky-400/30 text-white"
                            : "bg-transparent border border-transparent text-slate-200",
                          "hover:bg-sky-400/20 hover:border-sky-300/25"
                        )}
                      >
                        <span className="truncate">{s}</span>
                        {active ? (
                          <Check className="w-4 h-4 text-sky-200" />
                        ) : (
                          <span className="w-4 h-4" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
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
              setServiceOpen(false);
            }}
            className={cx(
              "rounded-2xl border px-4 py-3 text-sm transition",
              hasFilters
                ? "border-white/15 bg-white/5 text-slate-200 hover:bg-white/10"
                : "border-white/10 bg-black/30 text-slate-500 cursor-default"
            )}
            disabled={!hasFilters}
            aria-label="Limpiar filtros"
            type="button"
          >
            Limpiar
          </button>
        </div>

        <p className="mt-3 text-xs text-slate-500">
          Mostrando{" "}
          <span className="text-slate-200 font-semibold">
            {filtered.length}
          </span>{" "}
          de{" "}
          <span className="text-slate-200 font-semibold">{projects.length}</span>{" "}
          proyectos.
        </p>
      </section>

      {/* GRID */}
      <section className="mt-10 grid gap-10 md:grid-cols-2">
        {filtered.map((project) => (
          <article
            key={project.name}
            className="card-surface overflow-hidden border border-white/10 rounded-2xl hover:border-tronx-accent/50 transition"
          >
            <div className="relative w-full h-56 bg-slate-950/30">
              <Image
                src={project.img}
                alt={project.name}
                fill
                className="object-cover"
                priority={(project.priority ?? 0) >= 90}
              />
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                    {project.type}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-tronx-accent">
                    {project.name}
                  </h3>
                </div>

                {project.year && (
                  <span className="text-xs text-slate-400 border border-white/10 rounded-full px-2 py-1 bg-black/30">
                    {project.year}
                  </span>
                )}
              </div>

              <p className="mt-3 text-sm text-slate-300">{project.description}</p>

              {project.outcome && (
                <div className="mt-4 text-xs text-slate-300 border border-white/10 p-3 rounded-xl bg-black/30">
                  <strong className="text-slate-100">Resultado:</strong>{" "}
                  {project.outcome}
                </div>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                <span className={pillService(project.service)}>{project.service}</span>
                <span className={pillStatus(project.status)}>{project.status}</span>
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-slate-800/80 border border-slate-700/70 px-2 py-1 text-[11px] text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contacto#form" className="btn-primary">
                  Quiero algo similar →
                </Link>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost inline-flex items-center gap-2"
                >
                  Ver sitio <ArrowUpRight className="w-4 h-4" />
                </a>
                <Link href="/servicios#packs" className="btn-ghost">
                  Ver packs →
                </Link>
              </div>

              <p className="mt-3 text-[11px] text-slate-500">
                Nota: el pack indicado corresponde al servicio base; alcances adicionales se cotizan según necesidad.
              </p>
            </div>
          </article>
        ))}
      </section>

      {/* FINAL CTA */}
      <section className="mt-16 text-center">
        <p className="text-sm text-slate-400">
          Si tu caso es institucional (roles, continuidad, contenidos), recomendamos partir por <strong className="text-slate-200">Pack Pro</strong> o{" "}
          <strong className="text-slate-200">Pack Premium</strong>.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Link href="/contacto#form" className="btn-primary">
            Conversar proyecto →
          </Link>
          <Link href="/servicios#packs" className="btn-ghost">
            Ver planes y servicios →
          </Link>
        </div>
      </section>
    </div>
  );
}

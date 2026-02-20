"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Filter,
  Search,
  X,
  ChevronDown,
  Check,
  Layers,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

/* ============================= */
/* Types */
/* ============================= */

type Status = "En operación" | "En desarrollo" | "Beta";
type Service =
  | "Plan Premium"
  | "Plan Medio"
  | "Plan Básico"
  | "Landing page 48 horas";

type Project = {
  name: string;
  img: string;
  type: string;
  description: string;
  status: Status;
  tags: string[];
  url: string;
  service: Service;
  highlights?: string[];
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
      "Sitio institucional moderno con motor de contenidos y formularios conectados a CRM para apoyar membresías, cursos y misiones comerciales.",
    outcome: "Base institucional + captación trazable para operación gremial.",
    highlights: [
      "Contenidos administrables",
      "Formularios a CRM",
      "Estructura para membresías",
    ],
    status: "En operación",
    tags: ["Gremios", "CRM", "Eventos"],
    url: "https://www.asiapacific-chamber.com",
    service: "Plan Premium",
    year: "2025",
    priority: 100,
  },
  {
    name: "Dekaelo Media",
    img: "/portafolio/dekaelo.jpg",
    type: "Estudio audiovisual · Portafolio",
    description:
      "Sitio para estudio audiovisual con foco en videos corporativos y estructura preparada para escalar servicios.",
    outcome: "Portafolio orientado a conversión y crecimiento.",
    highlights: ["Arquitectura clara", "CTAs estratégicos"],
    status: "En operación",
    tags: ["Audiovisual", "Portafolio"],
    url: "https://www.dekaelomedia.com",
    service: "Plan Medio",
    year: "2025",
    priority: 80,
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
    "rounded-full px-2 py-1 border text-[11px] font-semibold inline-flex items-center";

  if (service === "Plan Premium")
    return `${base} border-sky-400/70 text-sky-300 bg-sky-500/10`;
  if (service === "Plan Medio")
    return `${base} border-indigo-400/70 text-indigo-300 bg-indigo-500/10`;
  if (service === "Plan Básico")
    return `${base} border-slate-500/70 text-slate-200 bg-white/5`;

  return `${base} border-emerald-400/70 text-emerald-300 bg-emerald-500/10`;
}

function pillStatus(status: Status) {
  const base =
    "rounded-full px-2 py-1 border text-[11px] inline-flex items-center";

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
  const [serviceOpen, setServiceOpen] = useState(false);
  const serviceWrapRef = useRef<HTMLDivElement | null>(null);

  const services = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => set.add(p.service));
    return [ALL, ...Array.from(set)];
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        serviceWrapRef.current &&
        !serviceWrapRef.current.contains(e.target as Node)
      ) {
        setServiceOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const filtered = useMemo(() => {
    const query = q.toLowerCase();

    return [...projects]
      .sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0))
      .filter((p) => {
        if (serviceFilter !== ALL && p.service !== serviceFilter)
          return false;

        if (!query) return true;

        const text = (
          p.name +
          p.description +
          p.tags.join(" ") +
          p.service
        ).toLowerCase();

        return text.includes(query);
      });
  }, [q, serviceFilter]);

  /* ============================= */
  /* UI */
  /* ============================= */

  return (
    <div className="section">
      {/* HEADER */}
      <section className="max-w-4xl">
        <p className="section-title">Portafolio</p>
        <h1 className="section-heading">
          Proyectos web listos para operar y escalar.
        </h1>
        <p className="section-subtitle max-w-3xl">
          No diseñamos sitios “bonitos”. Construimos activos digitales
          estructurados para continuidad, medición y crecimiento.
        </p>

        {/* ENFOQUE TRONX */}
        <div className="mt-8 grid md:grid-cols-3 gap-4 text-sm">
          <div className="card-surface p-4 border border-white/10">
            <Layers className="w-5 h-5 text-sky-400 mb-2" />
            Arquitectura clara y escalable.
          </div>
          <div className="card-surface p-4 border border-white/10">
            <BarChart3 className="w-5 h-5 text-sky-400 mb-2" />
            Medición real (GA4 / eventos).
          </div>
          <div className="card-surface p-4 border border-white/10">
            <ShieldCheck className="w-5 h-5 text-sky-400 mb-2" />
            Continuidad operativa.
          </div>
        </div>

        {/* TOOLBAR */}
        <div className="mt-8 grid gap-3 lg:grid-cols-[1.4fr_0.8fr_auto]">
          <div className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 flex items-center gap-3">
            <Search className="w-4 h-4 text-slate-400" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar proyecto..."
              className="w-full bg-transparent outline-none text-sm text-slate-200"
            />
            {q && (
              <button onClick={() => setQ("")}>
                <X className="w-4 h-4 text-slate-400" />
              </button>
            )}
          </div>

          <div
            ref={serviceWrapRef}
            className="relative rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
          >
            <button
              onClick={() => setServiceOpen(!serviceOpen)}
              className="w-full flex justify-between text-sm text-slate-200"
            >
              {serviceFilter}
              <ChevronDown className="w-4 h-4" />
            </button>

            {serviceOpen && (
              <div className="absolute mt-2 w-full bg-slate-950 border border-white/10 rounded-xl z-20">
                {services.map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      setServiceFilter(s);
                      setServiceOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-sky-400/20"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => {
              setQ("");
              setServiceFilter(ALL);
            }}
            className="rounded-2xl border border-white/10 px-4 py-3 text-sm"
          >
            Limpiar
          </button>
        </div>
      </section>

      {/* GRID */}
      <section className="mt-10 grid gap-10 md:grid-cols-2">
        {filtered.length === 0 && (
          <div className="col-span-full text-center text-slate-400 py-12">
            No encontramos proyectos con esos filtros.
          </div>
        )}

        {filtered.map((project) => (
          <article
            key={project.name}
            className="card-surface overflow-hidden border border-white/10 rounded-2xl"
          >
            <div className="relative w-full h-56">
              <Image
                src={project.img}
                alt={project.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-tronx-accent">
                  {project.name}
                </h3>
                {project.year && (
                  <span className="text-xs text-slate-400">
                    {project.year}
                  </span>
                )}
              </div>

              <p className="mt-3 text-sm text-slate-300">
                {project.description}
              </p>

              {project.outcome && (
                <div className="mt-4 text-xs text-slate-300 border border-white/10 p-3 rounded-xl">
                  <strong>Resultado:</strong> {project.outcome}
                </div>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                <span className={pillService(project.service)}>
                  {project.service}
                </span>
                <span className={pillStatus(project.status)}>
                  {project.status}
                </span>
              </div>

              <div className="mt-6 flex gap-3">
                <Link href="/contacto#form" className="btn-primary">
                  Quiero algo similar →
                </Link>
                <a
                  href={project.url}
                  target="_blank"
                  className="btn-ghost inline-flex items-center gap-2"
                >
                  Ver sitio <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* FINAL CTA */}
      <section className="mt-16 text-center">
        <p className="text-sm text-slate-400">
          Si tu proyecto requiere estructura, continuidad y medición,
          partimos por un Plan Medio o Premium.
        </p>
        <div className="mt-4">
          <Link href="/contacto#form" className="btn-primary">
            Conversar proyecto →
          </Link>
        </div>
      </section>
    </div>
  );
}

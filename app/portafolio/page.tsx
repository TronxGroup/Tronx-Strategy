"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronDown,
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
      "Sitio institucional moderno con motor de contenidos y formularios conectados a CRM para membresías y misiones comerciales.",
    outcome: "Base institucional + captación trazable.",
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
    type: "Portal institucional · Noticias",
    description:
      "Portal para asociación de funcionarios con noticias, beneficios y estructura operable por equipos internos.",
    outcome: "Sitio institucional con continuidad.",
    status: "En desarrollo",
    tags: ["Institucional", "Noticias"],
    url: "https://www.afminvuserviutarapaca.cl",
    service: "Plan Medio",
    year: "2025",
    priority: 95,
  },
  {
    name: "Dekaelo Media",
    img: "/portafolio/dekaelo.jpg",
    type: "Portafolio audiovisual",
    description:
      "Sitio para estudio audiovisual con arquitectura preparada para campañas y crecimiento por servicios.",
    outcome: "Portafolio orientado a conversión.",
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
    type: "Directorio territorial · Plataforma propia",
    description:
      "Plataforma del eje Santiago–Rancagua–Valparaíso con estructura SEO y base escalable.",
    outcome: "Activo propio con crecimiento por contenidos.",
    status: "Beta",
    tags: ["Directorio", "Territorio"],
    url: "https://www.sanraval.cl",
    service: "Plan Premium",
    year: "2025",
    priority: 75,
  },
  {
    name: "CityLube — Serviteca",
    img: "/portafolio/citylube.jpg",
    type: "Landing · SEO Local",
    description:
      "Landing enfocada en conversión directa vía WhatsApp y posicionamiento local.",
    outcome: "Captación rápida con SEO local.",
    status: "En operación",
    tags: ["SEO Local", "Servicios"],
    url: "https://www.citylube.cl",
    service: "Landing page 48 horas",
    year: "2025",
    priority: 60,
  },
  {
    name: "MagiaImaginacion.cl — Echevensko",
    img: "/portafolio/magia.jpg",
    type: "Landing de posicionamiento",
    description:
      "Plataforma para charlas corporativas con estructura preparada para campañas.",
    outcome: "Base de posicionamiento lista para escalar.",
    status: "En operación",
    tags: ["Branding", "Charlas"],
    url: "https://www.magiaimaginacion.cl",
    service: "Plan Básico",
    year: "2025",
    priority: 50,
  },
];

/* ============================= */
/* Helpers */
/* ============================= */

const ALL = "Todos";

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
  const [serviceFilter, setServiceFilter] = useState<string>(ALL);
  const [serviceOpen, setServiceOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const services = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => set.add(p.service));
    return [ALL, ...Array.from(set)];
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setServiceOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const filtered = useMemo(() => {
    return [...projects]
      .sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0))
      .filter((p) =>
        serviceFilter === ALL ? true : p.service === serviceFilter
      );
  }, [serviceFilter]);

  return (
    <div className="section">

      {/* HEADER */}
      <section className="max-w-4xl">
        <p className="section-title">Portafolio</p>
        <h1 className="section-heading">
          Activos digitales construidos para operar.
        </h1>
        <p className="section-subtitle max-w-3xl">
          Casos reales desarrollados con arquitectura moderna,
          gobierno técnico claro y continuidad mensual.
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
            Gobierno técnico.
          </div>
        </div>

        {/* FILTER */}
        <div
          ref={wrapRef}
          className="relative mt-8 max-w-xs rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
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
      </section>

      {/* GRID */}
      <section className="mt-12 grid gap-10 md:grid-cols-2">
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
          Si tu proyecto requiere estructura y continuidad, partimos por un Plan Medio o Premium.
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

// app/portafolio/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Layers,
  ShieldCheck,
  BarChart3,
  CheckCircle2,
  LayoutTemplate,
  Search,
  Headphones,
} from "lucide-react";

const SITE_URL = "https://www.tronxstrategy.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Portafolio — Tronx Strategy | Sitios web para servicios e instituciones",
  description:
    "Portafolio de Tronx Strategy: casos reales de sitios web para servicios, instituciones y plataformas con foco en estructura clara, medición y continuidad.",
  alternates: {
    canonical: "/portafolio",
  },
  openGraph: {
    title: "Portafolio — Tronx Strategy",
    description:
      "Casos reales de implementación web para empresas de servicios e instituciones.",
    url: "/portafolio",
    type: "website",
    locale: "es_CL",
    siteName: "Tronx Strategy",
  },
};

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
].sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm text-slate-200">
      <CheckCircle2 className="mt-[2px] h-4 w-4 shrink-0 text-sky-400" />
      <span>{children}</span>
    </li>
  );
}

function ServicePill({ service }: { service: Service }) {
  const styles: Record<Service, string> = {
    "Pack Premium":
      "border-sky-400/60 text-sky-300 bg-sky-500/10",
    "Pack Pro":
      "border-indigo-400/60 text-indigo-300 bg-indigo-500/10",
    "Pack Start":
      "border-slate-500/60 text-slate-200 bg-white/5",
    "Landing 48h":
      "border-emerald-400/60 text-emerald-300 bg-emerald-500/10",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold whitespace-nowrap ${styles[service]}`}
    >
      {service}
    </span>
  );
}

function StatusPill({ status }: { status: Status }) {
  const styles: Record<Status, string> = {
    "En operación":
      "border-green-400/60 text-green-300 bg-green-500/10",
    "En desarrollo":
      "border-sky-400/60 text-sky-300 bg-sky-500/10",
    Beta:
      "border-yellow-400/60 text-yellow-300 bg-yellow-500/10",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] whitespace-nowrap ${styles[status]}`}
    >
      {status}
    </span>
  );
}

export default function PortafolioPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="border-b border-white/10 bg-slate-950 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
            Portafolio
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            Casos reales de sitios web pensados para
            <span className="text-sky-300"> operar, captar y crecer</span>.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
            Tronx Strategy diseña sitios para servicios e instituciones con una
            lógica clara: buena estructura, medición real y continuidad. Este
            portafolio muestra proyectos donde la web no es un adorno, sino una
            base operativa.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
              <Layers className="mb-3 h-5 w-5 text-sky-400" />
              <h2 className="font-semibold text-white">Estructura clara</h2>
              <p className="mt-2 text-sm text-slate-300">
                Sitios pensados para mostrar mejor la oferta, ordenar el
                contenido y facilitar el contacto.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
              <BarChart3 className="mb-3 h-5 w-5 text-sky-400" />
              <h2 className="font-semibold text-white">Medición real</h2>
              <p className="mt-2 text-sm text-slate-300">
                Formularios, WhatsApp, SEO local o base para campañas según el
                tipo de proyecto.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
              <ShieldCheck className="mb-3 h-5 w-5 text-sky-400" />
              <h2 className="font-semibold text-white">Continuidad</h2>
              <p className="mt-2 text-sm text-slate-300">
                Proyectos con lógica de operación y mantenimiento, no sitios que
                se publican una vez y se abandonan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ENFOQUE */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
              Qué se ve aquí
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Un portafolio simple de entender
            </h2>
            <p className="mt-4 text-slate-300">
              Los casos están ordenados para mostrar los tipos de proyectos que
              mejor representa Tronx Strategy hoy: servicios, instituciones,
              portales y landings con foco comercial.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
              <LayoutTemplate className="mb-3 h-5 w-5 text-sky-400" />
              <h3 className="font-semibold text-white">
                Sitios para servicios
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Para empresas que necesitan mostrar mejor lo que hacen y generar
                más consultas.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
              <Search className="mb-3 h-5 w-5 text-sky-400" />
              <h3 className="font-semibold text-white">
                Landings de captación
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Proyectos más rápidos, enfocados en conversión, WhatsApp o SEO
                local.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
              <Headphones className="mb-3 h-5 w-5 text-sky-400" />
              <h3 className="font-semibold text-white">
                Portales e institucional
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Casos donde la continuidad, el orden de contenidos y la
                operación interna importan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GRID DE PROYECTOS */}
      <section className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
              Casos seleccionados
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Proyectos que muestran cómo trabajamos
            </h2>
            <p className="mt-4 text-slate-300">
              Cada caso resume tipo de proyecto, alcance base y lógica de uso.
            </p>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 transition hover:border-sky-400/40"
              >
                <div className="relative h-56 w-full bg-slate-950/40">
                  <Image
                    src={project.img}
                    alt={project.name}
                    fill
                    className="object-cover"
                    priority={(project.priority ?? 0) >= 90}
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                        {project.type}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-white">
                        {project.name}
                      </h3>
                    </div>

                    {project.year && (
                      <span className="rounded-full border border-white/10 bg-black/30 px-2 py-1 text-xs text-slate-400">
                        {project.year}
                      </span>
                    )}
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-300">
                    {project.description}
                  </p>

                  {project.outcome && (
                    <div className="mt-4 rounded-xl border border-white/10 bg-slate-950 p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                        Resultado
                      </p>
                      <p className="mt-2 text-sm text-slate-200">
                        {project.outcome}
                      </p>
                    </div>
                  )}

                  <div className="mt-4 flex flex-wrap gap-2">
                    <ServicePill service={project.service} />
                    <StatusPill status={project.status} />
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-700/70 bg-slate-800/70 px-2.5 py-1 text-[11px] text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/contacto#form"
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      Quiero algo similar
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost inline-flex items-center gap-2"
                    >
                      Ver sitio
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>

                  <p className="mt-3 text-[11px] text-slate-500">
                    El pack indicado corresponde al servicio base del proyecto.
                    Alcances adicionales pueden variar según necesidad.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO ENCAJA CON LOS SERVICIOS */}
      <section className="border-t border-white/10 bg-slate-950 py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
              Cómo se traduce a servicios
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Lo que ves en el portafolio se construye con una lógica simple
            </h2>
            <p className="mt-4 text-slate-300">
              Tronx Strategy trabaja en tres capas: implementación, medición y
              continuidad.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <h3 className="font-semibold text-white">1. Implementación</h3>
              <ul className="mt-4 space-y-2">
                <CheckItem>Landing o sitio institucional</CheckItem>
                <CheckItem>Estructura clara por servicios</CheckItem>
                <CheckItem>Formulario y contacto</CheckItem>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <h3 className="font-semibold text-white">2. Medición</h3>
              <ul className="mt-4 space-y-2">
                <CheckItem>Eventos y trazabilidad</CheckItem>
                <CheckItem>Base para campañas</CheckItem>
                <CheckItem>SEO o captación según caso</CheckItem>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <h3 className="font-semibold text-white">3. Continuidad</h3>
              <ul className="mt-4 space-y-2">
                <CheckItem>Soporte y actualizaciones</CheckItem>
                <CheckItem>Contenido y operación</CheckItem>
                <CheckItem>Sitio activo en el tiempo</CheckItem>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 text-center">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            ¿Quieres un sitio con esta lógica?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Cuéntanos qué servicio ofreces, qué objetivo tienes y qué tipo de
            estructura necesitas. Te proponemos una base clara y aterrizada.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contacto#form"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3"
            >
              Conversar proyecto
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/servicios"
              className="btn-ghost inline-flex items-center gap-2 bg-white/10 px-6 py-3 hover:bg-white/20"
            >
              Ver servicios
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-6 text-xs text-slate-400">
            Tronx Strategy trabaja con empresas de servicios e instituciones. No
            e-commerce. No sistemas complejos.
          </p>
        </div>
      </section>
    </main>
  );
}

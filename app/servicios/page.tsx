// app/servicios/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  LayoutTemplate,
  Search,
  BarChart3,
  Headphones,
  Wrench,
  BadgeCheck,
  Ban,
  Coins,
  Timer,
  MessageSquareMore,
  ShieldCheck,
  FileText,
} from "lucide-react";

const SITE_URL = "https://www.tronxstrategy.com";
const WHATSAPP_NUMBER = "56920080031";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "Servicios — Tronx Strategy | Captación digital para empresas de servicios",
  description:
    "Servicios de Tronx Strategy: base comercial digital, activación de captación y continuidad mensual para empresas de servicios.",
  alternates: {
    canonical: "/servicios",
  },
  openGraph: {
    title: "Servicios — Tronx Strategy",
    description:
      "Landing o sitio, textos base, medición, Google Ads opcional y continuidad mensual para empresas de servicios.",
    url: "/servicios",
    type: "website",
    locale: "es_CL",
    siteName: "Tronx Strategy",
  },
};

function buildWhatsAppLink() {
  const text =
    "Hola 👋 Quiero cotizar un servicio de Tronx Strategy.\n\n" +
    "Empresa / Proyecto:\n" +
    "Servicio principal:\n" +
    "Ciudad:\n" +
    "Objetivo (cotizaciones / consultas / agenda):\n" +
    "Servicio de interés:\n\n" +
    "Gracias 🙌";

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm text-slate-200">
      <CheckCircle2 className="mt-[2px] h-4 w-4 shrink-0 text-sky-400" />
      <span>{children}</span>
    </li>
  );
}

function SectionTitle({
  eyebrow,
  title,
  desc,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
          {eyebrow}
        </p>
      )}
      <h1 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
        {title}
      </h1>
      {desc && <p className="mt-4 text-slate-300">{desc}</p>}
    </div>
  );
}

export default function ServiciosPage() {
  const waLink = buildWhatsAppLink();

  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="border-b border-white/10 bg-slate-950 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionTitle
            eyebrow="Servicios"
            title="Tres servicios claros para captar mejor y sostener una base digital útil"
            desc="Tronx Strategy trabaja con empresas de servicios que necesitan una estructura clara para generar consultas. Nuestro foco es simple: una base comercial digital, activación de captación cuando conviene y continuidad mensual."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <LayoutTemplate className="mb-3 h-5 w-5 text-sky-400" />
              <h2 className="text-lg font-semibold text-white">
                Base comercial digital
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Landing o sitio web claro para explicar mejor el servicio,
                generar confianza y facilitar el contacto.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <Search className="mb-3 h-5 w-5 text-sky-400" />
              <h2 className="text-lg font-semibold text-white">
                Activación de captación
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Medición y Google Ads opcional para acelerar consultas cuando ya
                existe demanda.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <Headphones className="mb-3 h-5 w-5 text-sky-400" />
              <h2 className="text-lg font-semibold text-white">
                Continuidad mensual
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Soporte, ajustes y actualizaciones para que el sistema no quede
                abandonado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIO 1 */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <div className="flex items-center gap-2">
                <LayoutTemplate className="h-5 w-5 text-sky-400" />
                <p className="text-sm font-medium text-sky-300">Servicio 1</p>
              </div>

              <h2 className="mt-4 text-3xl font-semibold text-white">
                Base comercial digital
              </h2>

              <p className="mt-4 max-w-2xl text-slate-300">
                Diseñamos una estructura simple y clara para que tu empresa
                explique mejor su servicio, genere confianza y facilite el
                contacto. No solo armamos páginas: también ayudamos a ordenar la
                oferta y a redactar los textos base para que el sitio tenga más
                claridad comercial.
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-base font-semibold text-white">
                    Qué incluye
                  </h3>
                  <ul className="mt-4 space-y-2">
                    <CheckItem>
                      Landing de captación o sitio institucional
                    </CheckItem>
                    <CheckItem>Páginas de servicios y contacto</CheckItem>
                    <CheckItem>Formulario + botón de WhatsApp</CheckItem>
                    <CheckItem>
                      Estructura y textos base del sitio
                    </CheckItem>
                    <CheckItem>
                      Títulos, mensajes y llamados a la acción más claros
                    </CheckItem>
                    <CheckItem>SEO base e indexación</CheckItem>
                    <CheckItem>Configuración técnica esencial</CheckItem>
                    <CheckItem>Entrega documentada</CheckItem>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    Cuándo conviene
                  </h3>
                  <ul className="mt-4 space-y-2">
                    <CheckItem>No tienes sitio web</CheckItem>
                    <CheckItem>
                      Tu sitio actual es confuso, antiguo o no convierte
                    </CheckItem>
                    <CheckItem>
                      Quieres más consultas o cotizaciones
                    </CheckItem>
                    <CheckItem>
                      Necesitas una base lista para campañas
                    </CheckItem>
                    <CheckItem>
                      Tu empresa explica mal su servicio hoy
                    </CheckItem>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
              <p className="text-sm text-slate-300">Implementación</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                Desde $290.000
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                El valor depende del alcance. Una landing simple cuesta menos
                que un sitio institucional con varias páginas y más trabajo en
                estructura o contenidos.
              </p>

              <div className="mt-6 rounded-xl border border-white/10 bg-black/40 p-4">
                <div className="flex items-center gap-2">
                  <Coins className="h-4 w-4 text-sky-400" />
                  <p className="text-sm font-medium text-white">
                    Valores típicos
                  </p>
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  Landing simple: desde $290.000
                  <br />
                  Sitio profesional de servicios: desde $590.000
                </p>
              </div>

              <div className="mt-4 rounded-xl border border-white/10 bg-black/40 p-4">
                <div className="flex items-center gap-2">
                  <Timer className="h-4 w-4 text-sky-400" />
                  <p className="text-sm font-medium text-white">
                    Tiempos típicos
                  </p>
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  Landing simple: 7–10 días hábiles
                  <br />
                  Sitio institucional: 2–4 semanas
                </p>
              </div>

              <Link
                href="/contacto#form"
                className="btn-primary mt-6 inline-flex w-full items-center justify-center gap-2"
              >
                Solicitar propuesta
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIO 2 */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <div className="flex items-center gap-2">
                <Search className="h-5 w-5 text-sky-400" />
                <p className="text-sm font-medium text-sky-300">Servicio 2</p>
              </div>

              <h2 className="mt-4 text-3xl font-semibold text-white">
                Activación de captación
              </h2>

              <p className="mt-4 max-w-2xl text-slate-300">
                Si tu servicio ya tiene demanda, configuramos lo necesario para
                medir consultas y, cuando conviene, activamos campañas de
                búsqueda para acelerar captación. No se trata solo de “armar
                Google Ads”: se trata de dejar un sistema claro, medible y con
                sentido comercial.
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-base font-semibold text-white">
                    Qué incluye
                  </h3>
                  <ul className="mt-4 space-y-2">
                    <CheckItem>Eventos medibles</CheckItem>
                    <CheckItem>
                      Formulario y WhatsApp trazables
                    </CheckItem>
                    <CheckItem>GA4 / tags si aplica</CheckItem>
                    <CheckItem>
                      Revisión comercial de landing o sitio
                    </CheckItem>
                    <CheckItem>
                      Ajuste de mensajes y llamados a la acción
                    </CheckItem>
                    <CheckItem>Textos base de anuncios</CheckItem>
                    <CheckItem>Campañas Google Ads Search</CheckItem>
                    <CheckItem>Negativas base</CheckItem>
                    <CheckItem>Optimización periódica</CheckItem>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    Cuándo conviene
                  </h3>
                  <ul className="mt-4 space-y-2">
                    <CheckItem>
                      Tu servicio ya tiene búsqueda activa
                    </CheckItem>
                    <CheckItem>
                      Quieres más velocidad en captación
                    </CheckItem>
                    <CheckItem>
                      Necesitas saber qué canal trae leads
                    </CheckItem>
                    <CheckItem>
                      Tienes capacidad de responder consultas
                    </CheckItem>
                    <CheckItem>
                      Ya tienes una oferta razonablemente clara
                    </CheckItem>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                <p className="text-sm text-slate-300">
                  Activación de captación
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  Desde $390.000
                </h3>
                <p className="mt-3 text-sm text-slate-300">
                  Recomendado para estructuras simples. Si el proyecto requiere
                  más trabajo en tracking, revisión de landing y preparación
                  comercial, puede escalar.
                </p>
              </div>

              <div className="rounded-2xl border border-sky-400/20 bg-sky-500/10 p-6">
                <p className="text-sm text-slate-200">Versión más completa</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  $600.000 + IVA
                </h3>
                <p className="mt-3 text-sm text-slate-300">
                  Incluye estructura inicial, conversiones, revisión de landing,
                  mensajes base, anuncios y checklist de lanzamiento.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                <p className="text-sm text-slate-300">Gestión mensual</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  $350.000 + IVA / mes
                </h3>
                <p className="mt-3 text-sm text-slate-300">
                  Revisión, optimización y mejoras periódicas sobre campañas y
                  captación.
                </p>
              </div>

              <div className="rounded-2xl border border-sky-400/20 bg-sky-500/10 p-6">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-sky-300" />
                  <h3 className="font-semibold text-white">Importante</h3>
                </div>
                <p className="mt-3 text-sm text-slate-300">
                  No prometemos resultados mágicos. Diseñamos un sistema claro,
                  medible y optimizable para atraer mejores consultas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIO 3 */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <div className="flex items-center gap-2">
                <Headphones className="h-5 w-5 text-sky-400" />
                <p className="text-sm font-medium text-sky-300">Servicio 3</p>
              </div>

              <h2 className="mt-4 text-3xl font-semibold text-white">
                Continuidad mensual
              </h2>

              <p className="mt-4 max-w-2xl text-slate-300">
                Después de publicar, muchas empresas dejan el sitio botado. Este
                servicio existe para evitar eso: mantener la base digital
                activa, actualizada y disponible para seguir captando o crecer
                después.
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-base font-semibold text-white">
                    Qué incluye
                  </h3>
                  <ul className="mt-4 space-y-2">
                    <CheckItem>Hosting administrado</CheckItem>
                    <CheckItem>Soporte mensual</CheckItem>
                    <CheckItem>Ajustes menores</CheckItem>
                    <CheckItem>Actualizaciones básicas</CheckItem>
                    <CheckItem>Publicación de contenidos simples</CheckItem>
                    <CheckItem>
                      Continuidad comercial básica
                    </CheckItem>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    Cuándo conviene
                  </h3>
                  <ul className="mt-4 space-y-2">
                    <CheckItem>
                      No quieres depender de terceros para cada cambio
                    </CheckItem>
                    <CheckItem>
                      Quieres mantener el sitio vigente
                    </CheckItem>
                    <CheckItem>Necesitas soporte continuo</CheckItem>
                    <CheckItem>
                      Quieres una base lista para campañas futuras
                    </CheckItem>
                    <CheckItem>
                      No quieres que el sitio quede abandonado
                    </CheckItem>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
                <p className="text-sm text-slate-300">Hosting administrado</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  Desde $10.000 / mes
                </h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
                <p className="text-sm text-slate-300">Soporte mensual</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  Desde $29.990 / mes
                </h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
                <p className="text-sm text-slate-300">Gestión de contenidos</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  Desde $80.000 / mes
                </h3>
              </div>

              <div className="rounded-2xl border border-sky-400/20 bg-sky-500/10 p-6">
                <p className="text-sm text-slate-200">Plan recomendado</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  Desde $119.990 / mes
                </h3>
                <p className="mt-3 text-sm text-slate-300">
                  Hosting + soporte + continuidad básica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO TRABAJAMOS */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionTitle
            center
            eyebrow="Cómo se conectan estos servicios"
            title="Primero ordenamos la base. Luego aceleramos. Después sostenemos."
            desc="La lógica de Tronx Strategy no es vender piezas sueltas, sino construir una base útil para captar mejor."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <LayoutTemplate className="mb-3 h-5 w-5 text-sky-400" />
              <h3 className="font-semibold text-white">1. Base</h3>
              <p className="mt-2 text-sm text-slate-300">
                Sitio claro, textos base y estructura comercial simple.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <MessageSquareMore className="mb-3 h-5 w-5 text-sky-400" />
              <h3 className="font-semibold text-white">2. Captación</h3>
              <p className="mt-2 text-sm text-slate-300">
                Tracking y campañas para atraer y medir consultas.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <Wrench className="mb-3 h-5 w-5 text-sky-400" />
              <h3 className="font-semibold text-white">3. Continuidad</h3>
              <p className="mt-2 text-sm text-slate-300">
                Soporte, ajustes y mantenimiento para seguir operando.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUIEN ES */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionTitle
            center
            eyebrow="Enfoque"
            title="Trabajamos con proyectos claros"
            desc="Preferimos foco, velocidad y lógica comercial antes que complejidad innecesaria."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 text-sky-400" />
                <h3 className="font-semibold text-white">Sí hacemos</h3>
              </div>
              <ul className="mt-4 space-y-2">
                <CheckItem>Empresas que venden servicios</CheckItem>
                <CheckItem>Cotizaciones, consultas o agenda</CheckItem>
                <CheckItem>Servicios B2B o B2C claros</CheckItem>
                <CheckItem>Proyectos con foco comercial</CheckItem>
                <CheckItem>
                  Bases digitales pensadas para crecer
                </CheckItem>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <div className="flex items-center gap-2">
                <Ban className="h-5 w-5 text-sky-400" />
                <h3 className="font-semibold text-white">No hacemos</h3>
              </div>
              <ul className="mt-4 space-y-2">
                <CheckItem>E-commerce</CheckItem>
                <CheckItem>Apps o plataformas complejas</CheckItem>
                <CheckItem>Portales o dashboards a medida</CheckItem>
                <CheckItem>Marketing sin medición</CheckItem>
                <CheckItem>Proyectos sin responsable comercial</CheckItem>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-slate-950 py-24 text-center">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            ¿Qué necesitas hoy: base, captación o continuidad?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Cuéntanos tu servicio, tu ciudad y tu objetivo. Te respondemos con
            una propuesta simple, clara y aterrizada.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contacto#form"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3"
            >
              Solicitar propuesta
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center gap-2 bg-white/10 px-6 py-3 hover:bg-white/20"
            >
              WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <p className="mt-6 text-xs text-slate-400">
            Tronx Strategy trabaja con empresas de servicios. No e-commerce. No
            sistemas complejos.
          </p>
        </div>
      </section>
    </main>
  );
}

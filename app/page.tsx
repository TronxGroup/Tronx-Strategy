// app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Search,
  LayoutTemplate,
  BarChart3,
  Headphones,
  Wrench,
  BadgeCheck,
  Ban,
  Coins,
  Timer,
  MessageSquareMore,
  FileText,
  ShieldCheck,
} from "lucide-react";

const SITE_URL = "https://www.tronxstrategy.com";
const WHATSAPP_NUMBER = "56920080031";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tronx Strategy — Base comercial digital para empresas de servicios | Chile",
  description:
    "Tronx Strategy diseña bases comerciales digitales para empresas de servicios: sitio web claro, textos base, medición, activación de captación y continuidad mensual.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Tronx Strategy — Base comercial digital para empresas de servicios",
    description:
      "Estructura clara, textos base, medición, Google Ads opcional y continuidad mensual para captar más consultas.",
    url: "/",
    type: "website",
    locale: "es_CL",
    siteName: "Tronx Strategy",
  },
};

function buildWhatsAppLink() {
  const text =
    "Hola 👋 Quiero cotizar un sistema de captación digital para mi empresa.\n\n" +
    "Empresa / Proyecto:\n" +
    "Servicio principal:\n" +
    "Ciudad:\n" +
    "Objetivo (cotizaciones / consultas / agenda):\n" +
    "¿Ya tienen sitio web?:\n\n" +
    "Gracias 🙌";

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-200">
      {children}
    </span>
  );
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
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
        {title}
      </h2>
      {desc && <p className="mt-4 text-slate-300">{desc}</p>}
    </div>
  );
}

export default function HomePage() {
  const waLink = buildWhatsAppLink();

  return (
    <>
      {/* HERO */}
      <section
        className="relative flex min-h-screen items-center"
        style={{
          backgroundImage: "url('/BG_hero_strategy.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-24 lg:grid-cols-2 lg:px-8">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
              Captación digital para empresas de servicios
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-6xl">
              Una base digital más clara para
              <br />
              generar <span className="text-sky-300">más consultas reales</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
              Diseñamos estructuras simples para empresas de servicios: sitio
              web claro, textos base, formularios y WhatsApp, medición real,
              activación de captación cuando conviene y continuidad mensual para
              que el sistema siga funcionando.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>Abogados</Pill>
              <Pill>Consultoría</Pill>
              <Pill>Salud</Pill>
              <Pill>Educación</Pill>
              <Pill>Servicios técnicos</Pill>
              <Pill>B2B local</Pill>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contacto#form"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-base"
              >
                Solicitar propuesta
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost inline-flex items-center gap-2 bg-white/10 px-6 py-3 text-base hover:bg-white/20"
              >
                WhatsApp directo
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="font-semibold text-sky-300">Base digital</p>
                <p className="mt-1 text-sm text-slate-300">desde $290.000</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="font-semibold text-sky-300">Captación</p>
                <p className="mt-1 text-sm text-slate-300">desde $390.000</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="font-semibold text-sky-300">Continuidad</p>
                <p className="mt-1 text-sm text-slate-300">desde $119.990/mes</p>
              </div>
            </div>

            <p className="mt-6 text-xs text-slate-400">
              Enfoque: servicios. No e-commerce. No sistemas complejos.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/60 p-8 shadow-xl backdrop-blur">
            <p className="text-sm font-medium text-sky-300">
              Qué hacemos exactamente
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                <div className="flex items-center gap-2">
                  <LayoutTemplate className="h-4 w-4 text-sky-300" />
                  <p className="font-semibold text-white">
                    1. Creamos tu base comercial digital
                  </p>
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  Diseñamos una landing o sitio claro para explicar mejor el
                  servicio, ordenar la oferta y facilitar el contacto.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-sky-300" />
                  <p className="font-semibold text-white">
                    2. Ayudamos con textos y mensajes base
                  </p>
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  Ajustamos títulos, textos base y llamados a la acción para que
                  la empresa se entienda mejor.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                <div className="flex items-center gap-2">
                  <MessageSquareMore className="h-4 w-4 text-sky-300" />
                  <p className="font-semibold text-white">
                    3. Medimos formularios y WhatsApp
                  </p>
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  Dejamos configurado lo necesario para registrar consultas y
                  entender qué canal trae contactos.
                </p>
              </div>

              <div className="rounded-xl border border-sky-400/30 bg-sky-500/10 p-4">
                <div className="flex items-center gap-2">
                  <Search className="h-4 w-4 text-sky-300" />
                  <p className="font-semibold text-white">
                    4. Activamos captación si conviene
                  </p>
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  Si el servicio ya tiene demanda, activamos Google Ads para
                  acelerar consultas con una estructura medible.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                <div className="flex items-center gap-2">
                  <Headphones className="h-4 w-4 text-sky-300" />
                  <p className="font-semibold text-white">
                    5. Damos continuidad mensual
                  </p>
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  Soporte, ajustes y actualizaciones para que el sistema no
                  quede abandonado.
                </p>
              </div>
            </div>

            <Link
              href="/servicios"
              className="btn-primary mt-6 inline-flex w-full items-center justify-center gap-2 text-center"
            >
              Ver servicios
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionTitle
            center
            eyebrow="Problema que resolvemos"
            title="Muchas empresas de servicios tienen sitio, pero no tienen una base comercial clara"
            desc="Un sitio por sí solo no basta. Lo importante es explicar bien la oferta, facilitar el contacto, medir consultas y sostener la operación en el tiempo."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <h3 className="font-semibold text-white">Oferta confusa</h3>
              <p className="mt-2 text-sm text-slate-300">
                El cliente entra, no entiende rápido el servicio y no contacta.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <h3 className="font-semibold text-white">Sin medición</h3>
              <p className="mt-2 text-sm text-slate-300">
                Llegan consultas, pero nadie sabe desde dónde ni qué página
                funciona mejor.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <h3 className="font-semibold text-white">Sin continuidad</h3>
              <p className="mt-2 text-sm text-slate-300">
                El sitio se publica una vez y luego queda desactualizado o
                abandonado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="bg-black py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionTitle
            center
            eyebrow="Servicios"
            title="Tres servicios claros para captar mejor"
            desc="Nuestra lógica es simple: primero ordenamos la base, luego activamos captación y después sostenemos el sistema."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <LayoutTemplate className="mb-3 h-5 w-5 text-sky-400" />
              <h3 className="text-lg font-semibold text-white">
                Base comercial digital
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Landing o sitio claro para mostrar mejor la oferta, ordenar el
                servicio y facilitar el contacto.
              </p>

              <ul className="mt-4 space-y-2">
                <CheckItem>Landing o sitio institucional</CheckItem>
                <CheckItem>Estructura y textos base</CheckItem>
                <CheckItem>Formulario + WhatsApp</CheckItem>
                <CheckItem>SEO base e indexación</CheckItem>
                <CheckItem>Entrega documentada</CheckItem>
              </ul>

              <div className="mt-5 rounded-xl border border-white/10 bg-slate-950 p-4">
                <p className="text-sm font-medium text-white">Desde $290.000</p>
                <p className="mt-1 text-xs text-slate-400">
                  Ideal para empresas que necesitan una base clara y profesional.
                </p>
              </div>
            </article>

            <article className="rounded-2xl border border-sky-400/30 bg-sky-500/10 p-6">
              <BarChart3 className="mb-3 h-5 w-5 text-sky-400" />
              <h3 className="text-lg font-semibold text-white">
                Activación de captación
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Medición y Google Ads opcional para atraer y entender mejor las
                consultas reales.
              </p>

              <ul className="mt-4 space-y-2">
                <CheckItem>Tracking y eventos medibles</CheckItem>
                <CheckItem>Revisión comercial de landing</CheckItem>
                <CheckItem>Textos base de anuncios</CheckItem>
                <CheckItem>Google Ads Search</CheckItem>
                <CheckItem>Optimización periódica</CheckItem>
              </ul>

              <div className="mt-5 rounded-xl border border-sky-400/20 bg-black/20 p-4">
                <p className="text-sm font-medium text-white">Desde $390.000</p>
                <p className="mt-1 text-xs text-slate-300">
                  Recomendado cuando ya existe demanda y la empresa puede responder leads.
                </p>
              </div>
            </article>

            <article className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <Wrench className="mb-3 h-5 w-5 text-sky-400" />
              <h3 className="text-lg font-semibold text-white">
                Continuidad mensual
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Mantenemos el sistema activo con soporte, ajustes y continuidad
                básica para que no quede botado.
              </p>

              <ul className="mt-4 space-y-2">
                <CheckItem>Hosting administrado</CheckItem>
                <CheckItem>Soporte mensual</CheckItem>
                <CheckItem>Ajustes menores</CheckItem>
                <CheckItem>Actualizaciones básicas</CheckItem>
                <CheckItem>Continuidad comercial básica</CheckItem>
              </ul>

              <div className="mt-5 rounded-xl border border-white/10 bg-slate-950 p-4">
                <p className="text-sm font-medium text-white">Desde $119.990 / mes</p>
                <p className="mt-1 text-xs text-slate-400">
                  Para mantener la base vigente y lista para seguir creciendo.
                </p>
              </div>
            </article>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/servicios"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3"
            >
              Ver detalle de servicios
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PARA QUIÉN ES */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionTitle
            center
            eyebrow="Enfoque"
            title="Esto es para empresas de servicios. No para cualquier proyecto."
            desc="Trabajamos donde sí tiene sentido construir una base clara de captación."
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
                <CheckItem>Negocios con capacidad de responder leads</CheckItem>
                <CheckItem>Proyectos con foco comercial</CheckItem>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <div className="flex items-center gap-2">
                <Ban className="h-5 w-5 text-sky-400" />
                <h3 className="font-semibold text-white">No hacemos</h3>
              </div>
              <ul className="mt-4 space-y-2">
                <CheckItem>E-commerce</CheckItem>
                <CheckItem>Apps o sistemas complejos</CheckItem>
                <CheckItem>Dashboards o portales a medida</CheckItem>
                <CheckItem>Marketing sin medición</CheckItem>
                <CheckItem>Proyectos sin responsable comercial</CheckItem>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MODELO */}
      <section className="bg-black py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionTitle
            center
            eyebrow="Modelo de trabajo"
            title="Una lógica simple y fácil de entender"
            desc="Primero ordenamos la base. Luego activamos captación. Después sostenemos."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <Coins className="mb-3 h-5 w-5 text-sky-400" />
              <h3 className="font-semibold text-white">1. Base</h3>
              <p className="mt-2 text-sm text-slate-300">
                Pago único por una landing o sitio web con estructura clara y
                textos base.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <Search className="mb-3 h-5 w-5 text-sky-400" />
              <h3 className="font-semibold text-white">2. Captación</h3>
              <p className="mt-2 text-sm text-slate-300">
                Activamos campañas cuando ya existe demanda y la estructura está
                lista para medir.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <Headphones className="mb-3 h-5 w-5 text-sky-400" />
              <h3 className="font-semibold text-white">3. Continuidad</h3>
              <p className="mt-2 text-sm text-slate-300">
                Soporte y ajustes mensuales para mantener el sistema activo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionTitle
            center
            eyebrow="Proceso"
            title="Proceso claro y rápido"
            desc="Sin complejidad innecesaria. Lo importante es publicar bien, medir desde el inicio y sostener lo que funciona."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <p className="font-semibold text-sky-300">01</p>
              <p className="mt-2 text-sm text-slate-300">
                Brief: servicio, ciudad y objetivo.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <p className="font-semibold text-sky-300">02</p>
              <p className="mt-2 text-sm text-slate-300">
                Estructura, mensajes y textos base.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <p className="font-semibold text-sky-300">03</p>
              <p className="mt-2 text-sm text-slate-300">
                Desarrollo, formularios y medición.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <p className="font-semibold text-sky-300">04</p>
              <p className="mt-2 text-sm text-slate-300">
                Publicación y continuidad opcional.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-6">
            <div className="flex items-center gap-2">
              <Timer className="h-5 w-5 text-sky-400" />
              <h3 className="font-semibold text-white">Tiempos típicos</h3>
            </div>
            <p className="mt-2 text-sm text-slate-300">
              Landing simple: 7–10 días hábiles. Sitio institucional: 2–4 semanas.
            </p>
          </div>
        </div>
      </section>

      {/* DIFERENCIAL */}
      <section className="bg-black py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <SectionTitle
            center
            eyebrow="Nuestro diferencial"
            title="No solo hacemos una web: ayudamos a ordenar la oferta y dejar una base útil"
            desc="El valor no está solo en publicar un sitio, sino en que la empresa quede mejor explicada, mejor medida y mejor preparada para captar."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
              <FileText className="mb-3 h-5 w-5 text-sky-400" />
              <h3 className="font-semibold text-white">Más claridad</h3>
              <p className="mt-2 text-sm text-slate-300">
                Ordenamos servicios, textos y llamadas a la acción para que se entienda mejor qué vendes.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
              <BarChart3 className="mb-3 h-5 w-5 text-sky-400" />
              <h3 className="font-semibold text-white">Más control</h3>
              <p className="mt-2 text-sm text-slate-300">
                Formularios, WhatsApp y eventos configurados para registrar consultas reales.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
              <ShieldCheck className="mb-3 h-5 w-5 text-sky-400" />
              <h3 className="font-semibold text-white">Más continuidad</h3>
              <p className="mt-2 text-sm text-slate-300">
                Sitios y sistemas pensados para seguir operando, no para quedar abandonados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-slate-950 py-24 text-center">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            ¿Necesitas una base más clara para captar mejor?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Cuéntanos qué servicio vendes, en qué ciudad trabajas y qué objetivo tienes.
            Te proponemos una estructura simple, medible y aterrizada.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contacto#form"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3"
            >
              Pedir propuesta
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
            Tronx Strategy trabaja con empresas de servicios. No e-commerce. No sistemas complejos.
          </p>
        </div>
      </section>
    </>
  );
}

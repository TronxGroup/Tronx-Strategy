import Section from "@/components/Section";

export const metadata = { title: "Quiénes somos – Tronx Strategy" };

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 text-xs font-medium">
      {children}
    </span>
  );
}

function ValueCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card p-6 border border-slate-200 rounded-2xl bg-white">
      <h4 className="font-semibold text-slate-900">{title}</h4>
      <p className="text-sm text-slate-700 mt-2">{children}</p>
    </div>
  );
}

function Step({
  num,
  title,
  children,
}: {
  num: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card p-5 border border-slate-200 rounded-2xl bg-white">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm font-bold">
          {num}
        </div>
        <h4 className="font-semibold text-slate-900">{title}</h4>
      </div>
      <p className="text-sm text-slate-700 mt-2">{children}</p>
    </div>
  );
}

export default function Page() {
  return (
    <>
      {/* HERO */}
      <div className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
        <Section className="py-16">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2">
              <Pill>Growth B2B</Pill>
              <Pill>Operación en la nube</Pill>
              <Pill>Métricas & Embudos</Pill>
            </div>
            <h1 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Somos Tronx Strategy: estrategia, tecnología y contenido para crecer con datos.
            </h1>
            <p className="p-muted mt-4">
              La unidad de crecimiento B2B de Tronx Group. Combinamos consultoría, operación digital
              y producción de contenido para acelerar negocios con foco en resultados medibles.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/servicios/programa-socios" className="btn btn-primary">Programa Socios</a>
              <a href="/servicios/tronx-cloud" className="btn btn-secondary">Tronx Cloud Suite</a>
              <a href="/contacto" className="btn btn-ghost">Conversemos</a>
            </div>
          </div>
        </Section>
      </div>

      {/* MISIÓN / VISIÓN / DIFERENCIADORES */}
      <Section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ValueCard title="Misión">
            Potenciar empresas e instituciones mediante estrategia, tecnología y contenido,
            con impacto directo en KPIs de negocio: CAC, conversión, LTV y win-rate.
          </ValueCard>
          <ValueCard title="Visión">
            Ser el partner latinoamericano de referencia en growth B2B y automatizaciones,
            operando un stack cloud robusto y productos propios escalables.
          </ValueCard>
          <ValueCard title="Nuestro diferencial">
            Operamos como extensión de tu equipo: entregables en semanas, playbooks reutilizables,
            reporting claro y una cultura de mejora continua basada en datos.
          </ValueCard>
        </div>
      </Section>

      {/* PILARES */}
      <Section className="py-6">
        <h2 className="h3">Nuestros pilares</h2>
        <p className="p-muted mt-2 max-w-3xl">
          Unimos tres competencias clave para acelerar el tiempo a valor y sostener el crecimiento.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <ValueCard title="Estrategia aplicable">
            Diagnóstico, foco y plan táctico. Definimos embudos, audiencias y métricas con una hoja de ruta realista.
          </ValueCard>
          <ValueCard title="Operación en la nube">
            Infraestructura web, analítica, CRM y automatizaciones integradas (Tronx Cloud Suite) para ejecutar sin fricciones.
          </ValueCard>
          <ValueCard title="Contenido que convierte">
            Mensajes claros, creativos y piezas audiovisuales orientadas a performance y fidelización.
          </ValueCard>
        </div>
      </Section>

      {/* CÓMO TRABAJAMOS */}
      <Section className="py-12">
        <h2 className="h3">Cómo trabajamos</h2>
        <p className="p-muted mt-2 max-w-3xl">
          Implementamos la base, operamos el crecimiento y escalamos con decisiones guiadas por datos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <Step num={1} title="Onboarding (2–4 semanas)">
            Setup de dominios, correo corporativo, CRM, landings y medición (GA4/GTM). Handoff documentado y
            playbooks para tu equipo.
          </Step>
          <Step num={2} title="Sprints de growth">
            Quincenales: Ads (Google/Meta/LinkedIn), SEO/CRO, contenidos, automatizaciones y nurturing.
            Roadmap visible y priorización por impacto.
          </Step>
          <Step num={3} title="Métricas & escala">
            Dashboards CAC/CVR/LTV/ROAS, experimentación continua (A/B) y revisión ejecutiva trimestral (QBR).
          </Step>
        </div>
      </Section>

      {/* ECOSISTEMA TRONX */}
      <Section className="py-12">
        <h2 className="h3">Ecosistema Tronx</h2>
        <p className="p-muted mt-2 max-w-3xl">
          Formamos parte de <strong>Tronx Group</strong> y colaboramos con marcas y socios para potenciar resultados.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <ValueCard title="Dekaelo Media (audiovisual)">
            Producción estratégica: institucional, reels, vodcasts y campañas con publicación lista por plataforma.
            <br />
            <a className="text-emerald-700 underline underline-offset-2" href="https://dekaleomedia.com" target="_blank">dekaleomedia.com</a>
          </ValueCard>
          <ValueCard title="Tronx TV (editorial)">
            Historias originales (4K) que combinan documental, ficción y conversación. Programa estreno: Reality Day.
            <br />
            <a className="text-emerald-700 underline underline-offset-2" href="https://tronxtv.com" target="_blank">tronxtv.com</a>
          </ValueCard>
          <ValueCard title="Socios (Revenue Share)">
            Operamos embudos y CRM para aliados como <strong>APCC</strong> y <strong>Echevensko</strong>.
            <br />
            <a className="text-emerald-700 underline underline-offset-2" href="/servicios/programa-socios">Conocer el programa</a>
          </ValueCard>
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section className="py-12">
        <div className="card p-6 border border-slate-200 rounded-2xl bg-white">
          <h3 className="text-xl font-bold text-slate-900">Listos para impulsar tu crecimiento B2B</h3>
          <p className="text-sm text-slate-700 mt-2">
            Si tu oferta calza, partimos con <strong>Programa Socios</strong>. ¿Necesitas base tecnológica sólida?
            Activamos <strong>Tronx Cloud Suite</strong>.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a href="/servicios/programa-socios" className="btn btn-primary">Programa Socios</a>
            <a href="/servicios/tronx-cloud" className="btn btn-secondary">Tronx Cloud Suite</a>
            <a href="/contacto" className="btn btn-ghost">Hablar con un especialista</a>
          </div>
        </div>
      </Section>
    </>
  );
}


import Section from "@/components/Section";

export const metadata = { title: "Quiénes somos – Tronx Strategy" };

export default function Page() {
  return (
    <Section className="py-16">
      <h1 className="h2">Quiénes somos</h1>
      <p className="p-muted mt-4 max-w-3xl">
        Tronx Strategy es la unidad de crecimiento B2B de Tronx Group. Combinamos consultoría estratégica, operación
        digital y producción de contenido para acelerar negocios con foco en resultados medibles.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="card p-6">
          <h4 className="font-semibold">Misión</h4>
          <p className="text-sm text-slate-600 mt-2">
            Potenciar empresas e instituciones mediante estrategia, tecnología y contenido, con impacto en KPIs de negocio.
          </p>
        </div>
        <div className="card p-6">
          <h4 className="font-semibold">Visión</h4>
          <p className="text-sm text-slate-600 mt-2">
            Ser un partner latinoamericano de referencia en growth B2B y automatizaciones, con productos SaaS propios.
          </p>
        </div>
      </div>
    </Section>
  );
}

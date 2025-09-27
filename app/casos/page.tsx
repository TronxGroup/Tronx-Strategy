import Section from "@/components/Section";

export const metadata = { title: "Casos de éxito – Tronx Strategy" };

type CaseProps = {
  title: string;
  bullets: string[];
  results?: string[];
};

function Case({ title, bullets, results }: CaseProps) {
  return (
    <div className="card p-6 border border-slate-200 shadow-sm hover:shadow-md transition">
      <h4 className="font-semibold text-lg text-emerald-600">{title}</h4>
      <ul className="mt-3 text-sm text-slate-700 list-disc pl-5 space-y-1">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      {results && (
        <div className="mt-4 bg-emerald-50 border border-emerald-100 rounded-lg p-3 text-sm">
          <p className="font-medium text-emerald-700">Resultados iniciales:</p>
          <ul className="mt-1 list-disc pl-5 text-emerald-800 space-y-1">
            {results.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <Section className="py-16">
      <h1 className="h2">Casos de éxito</h1>
      <p className="p-muted mt-4 max-w-3xl">
        Selección representativa de implementaciones y operaciones de growth. 
        Agregaremos métricas y testimonios a medida que se aprueben con clientes y socios.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <Case
          title="APCC – Cámara de Comercio Asia Pacífico"
          bullets={[
            "Embudo de membresías con Zoho CRM y sincronización a HubSpot",
            "Landing pages, medición GA4/GTM y campañas de captación",
            "Nurturing y reporting mensual automatizado",
          ]}
          results={[
            "+150 leads calificados en 60 días",
            "Embudo digital escalable para membresías B2B",
          ]}
        />
        <Case
          title="Echevensko – Charlas corporativas B2B"
          bullets={[
            "Landing de captación + secuencias de outreach",
            "CRM con scoring y pipelines",
            "Liquidación por Revenue Share con reportería",
          ]}
          results={[
            "4 contratos corporativos en el primer trimestre",
            "Pipeline de charlas recurrentes en expansión",
          ]}
        />
      </div>

      <div className="mt-12 text-center">
        <p className="text-slate-600 text-sm">¿Quieres ser nuestro próximo caso de éxito?</p>
        <a
          href="/contacto"
          className="inline-flex mt-3 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-500"
        >
          Contáctanos
        </a>
      </div>
    </Section>
  );
}

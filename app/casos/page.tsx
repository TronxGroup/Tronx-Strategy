
import Section from "@/components/Section";

export const metadata = { title: "Casos de éxito – Tronx Strategy" };

function Case({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div className="card p-6">
      <h4 className="font-semibold">{title}</h4>
      <ul className="mt-2 text-sm text-slate-600 list-disc pl-5 space-y-1">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  );
}

export default function Page() {
  return (
    <Section className="py-16">
      <h1 className="h2">Casos de éxito</h1>
      <p className="p-muted mt-4 max-w-3xl">
        Selección representativa de implementaciones y operaciones de growth. (Agrega métricas y testimonios a medida que se aprueben).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <Case title="APCC – Cámara de Comercio Asia Pacífico" bullets={[
          "Embudo de membresías con Zoho CRM y sincronización a HubSpot",
          "Landing pages, medición GA4/GTM y campañas de captación",
          "Nurturing y reporting mensual automatizado"
        ]} />
        <Case title="Echevensko – Charlas corporativas B2B" bullets={[
          "Landing de captación + secuencias de outreach",
          "CRM con scoring y pipelines",
          "Liquidación por Revenue Share con reportería"
        ]} />
      </div>
    </Section>
  );
}

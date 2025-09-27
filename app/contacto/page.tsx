import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contacto – Tronx Strategy" };

export default function Page() {
  return (
    <Section className="py-16">
      <h1 className="h2">Contacto</h1>
      <p className="p-muted mt-4 max-w-3xl">
        Cuéntanos tu contexto y objetivos. Te proponemos un plan con hitos, KPIs y tiempos de implementación.
      </p>

      <ContactForm />

      <div className="mt-10 text-sm text-slate-600">
        <p>
          También puedes escribir a{" "}
          <a className="underline" href="mailto:info@tronxstrategy.com">
            info@tronxstrategy.com
          </a>{" "}
          o llamar al{" "}
          <a className="underline" href="tel:+56920080031">
            +56 9 2008 0031
          </a>.
        </p>
      </div>
    </Section>
  );
}


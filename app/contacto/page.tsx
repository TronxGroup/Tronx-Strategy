import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export const metadata = { title: "Contacto – Tronx Strategy" };

export default function Page() {
  return (
    <>
      {/* HERO */}
      <div className="bg-gradient-to-br from-brand-50 via-white to-brand-50">
        <Section className="py-16">
          <div className="max-w-3xl">
            <h1 className="h2">Hablemos 🚀</h1>
            <p className="p-muted mt-4">
              Cuéntanos tu contexto y objetivos. Te proponemos un plan claro con hitos,
              KPIs y tiempos de implementación para que tu crecimiento B2B parta en semanas, no meses.
            </p>
          </div>
        </Section>
      </div>

      {/* FORMULARIO */}
      <Section className="py-12">
        <div className="card p-6 border border-slate-200 rounded-2xl bg-white shadow-soft">
          <h2 className="text-xl font-bold text-slate-900">Envíanos un mensaje</h2>
          <p className="text-sm text-slate-700 mt-1">
            Completa el formulario y nuestro equipo te responderá en menos de 24h hábiles.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* INFORMACIÓN DIRECTA */}
      <Section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-5 flex items-start gap-3">
            <Mail className="text-brand-600 mt-1" size={20} />
            <div>
              <p className="font-medium text-slate-900">Correo</p>
              <a
                className="text-sm text-brand-700 underline"
                href="mailto:info@tronxstrategy.com"
              >
                info@tronxstrategy.com
              </a>
            </div>
          </div>
          <div className="card p-5 flex items-start gap-3">
            <Phone className="text-brand-600 mt-1" size={20} />
            <div>
              <p className="font-medium text-slate-900">Teléfono</p>
              <a
                className="text-sm text-brand-700 underline"
                href="tel:+56920080031"
              >
                +56 9 2008 0031
              </a>
            </div>
          </div>
          <div className="card p-5 flex items-start gap-3">
            <MapPin className="text-brand-600 mt-1" size={20} />
            <div>
              <p className="font-medium text-slate-900">Ubicación</p>
              <p className="text-sm text-slate-700">
                Santiago · Operación en la nube (LATAM & Global)
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section className="py-12">
        <div className="card p-6 border border-slate-200 rounded-2xl bg-gradient-to-br from-brand-50 to-white text-center">
          <h3 className="text-lg font-bold text-slate-900">
            ¿Listo para acelerar tu captación B2B?
          </h3>
          <p className="text-sm text-slate-700 mt-2">
            Agenda una conversación y definamos el siguiente paso juntos.
          </p>
          <div className="mt-4">
            <a href="/servicios" className="btn btn-primary">
              Ver servicios <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}

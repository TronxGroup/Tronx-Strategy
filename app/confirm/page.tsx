// app/confirm/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mensaje enviado — Tronx Strategy",
  description:
    "Confirmación de contacto. Hemos recibido tu mensaje y te responderemos dentro de 24 horas hábiles.",
  alternates: {
    canonical: "/confirm",
  },
};

export default function ConfirmPage() {
  return (
    <section className="section flex min-h-[60vh] items-center">
      <div className="w-full max-w-2xl mx-auto">
        <div className="card-surface px-6 py-8 sm:px-10 sm:py-10 text-center">
          {/* Icono simple */}
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-400/40">
            <span className="text-2xl">✓</span>
          </div>

          <p className="section-title text-sky-300/90">Confirmación</p>
          <h1 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-50">
            Hemos recibido tu mensaje
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-300">
            Gracias por contactarnos. Tu solicitud ya está en nuestro CRM y el
            equipo de Tronx Strategy la revisará dentro de las próximas{" "}
            <span className="font-semibold text-slate-100">
              24 horas hábiles
            </span>
            .
          </p>

          <p className="mt-2 text-xs sm:text-sm text-slate-400">
            Si necesitas actualizar algún detalle, puedes responder al correo de
            confirmación que recibirás o escribir directamente a{" "}
            <span className="text-slate-100 font-medium">
              info@tronxstrategy.com
            </span>
            .
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn-primary">
              Volver al inicio
            </Link>
            <Link href="/contacto" className="btn-ghost">
              Enviar otro mensaje
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

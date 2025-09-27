
"use client";
import Section from "@/components/Section";
import { useState } from "react";

export const metadata = { title: "Contacto – Tronx Strategy" };

export default function Page() {
  const [sent, setSent] = useState(false);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    // TODO: enviar a Zoho/endpoint
    setSent(true);
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <Section className="py-16">
      <h1 className="h2">Contacto</h1>
      <p className="p-muted mt-4 max-w-3xl">
        Cuéntanos tu contexto y objetivos. Te proponemos un plan con hitos, KPIs y tiempos de implementación.
      </p>

      <form onSubmit={onSubmit} className="mt-8 grid gap-4 max-w-2xl">
        <div className="grid sm:grid-cols-2 gap-4">
          <input name="nombre" required placeholder="Nombre" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" />
          <input name="apellido" required placeholder="Apellido" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" />
        </div>
        <input name="correo" type="email" required placeholder="Correo electrónico" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" />
        <input name="empresa" placeholder="Empresa (opcional)" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" />
        <textarea name="mensaje" rows={4} placeholder="Cuéntanos brevemente tu necesidad" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"></textarea>
        <label className="inline-flex items-center gap-2 text-sm text-slate-600">
          <input type="checkbox" name="newsletter" className="h-4 w-4 rounded border-slate-300" />
          Suscribirme al newsletter
        </label>
        <input type="hidden" name="source" value="tronxstrategy.com" />
        <button type="submit" className="btn btn-primary w-full sm:w-auto">Enviar</button>
        {sent && <p className="text-green-700 text-sm">¡Gracias! Te contactaremos a la brevedad.</p>}
      </form>

      <div className="mt-10 text-sm text-slate-600">
        <p>También puedes escribir a <a className="underline" href="mailto:info@tronxstrategy.com">info@tronxstrategy.com</a> o llamar al <a className="underline" href="tel:+56920080031">+56 9 2008 0031</a>.</p>
      </div>
    </Section>
  );
}

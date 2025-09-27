"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: enviar a Zoho/endpoint
    setSent(true);
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={onSubmit} className="mt-8 grid gap-4 max-w-2xl">
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          name="nombre"
          required
          placeholder="Nombre"
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
        />
        <input
          name="apellido"
          required
          placeholder="Apellido"
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
        />
      </div>
      <input
        name="correo"
        type="email"
        required
        placeholder="Correo electrónico"
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
      />
      <input
        name="empresa"
        placeholder="Empresa (opcional)"
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
      />
      <textarea
        name="mensaje"
        rows={4}
        placeholder="Cuéntanos brevemente tu necesidad"
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
      />
      <label className="inline-flex items-center gap-2 text-sm text-slate-600">
        <input type="checkbox" name="newsletter" className="h-4 w-4 rounded border-slate-300" />
        Suscribirme al newsletter
      </label>
      <input type="hidden" name="source" value="tronxstrategy.com" />
      <button type="submit" className="btn btn-primary w-full sm:w-auto">
        Enviar
      </button>
      {sent && <p className="text-green-700 text-sm">¡Gracias! Te contactaremos a la brevedad.</p>}
    </form>
  );
}

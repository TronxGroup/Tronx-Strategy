"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
  Mail,
  MessageCircle,
  ArrowRight,
  MapPin,
  Clock,
  ShieldCheck,
  Workflow,
  BarChart3,
  Sparkles,
  BriefcaseBusiness,
} from "lucide-react";

type Budget =
  | ""
  | "Hasta $290k"
  | "$590k–$690k"
  | "$990k–$1.5M"
  | "Solo Ads"
  | "No lo sé aún";

type Payload = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: Budget;
  message: string;
  phone?: string;
  city?: string;
  hp?: string; // honeypot
};

function safeTrim(v: any) {
  return typeof v === "string" ? v.trim() : "";
}

export default function ContactoPage() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState<null | "ok" | "error">(null);
  const [errorMsg, setErrorMsg] = useState("");

  const [form, setForm] = useState<Payload>({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    phone: "",
    city: "",
    hp: "",
  });

  const utm = useMemo(() => {
    if (typeof window === "undefined") return {};
    const params = new URLSearchParams(window.location.search);
    const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"];
    const out: Record<string, string> = {};
    keys.forEach((k) => {
      const v = params.get(k);
      if (v) out[k] = v;
    });
    return out;
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setDone(null);
    setErrorMsg("");

    if (safeTrim(form.hp).length > 0) {
      setDone("ok");
      return;
    }

    if (!safeTrim(form.name) || !safeTrim(form.email) || !safeTrim(form.company) || !safeTrim(form.message)) {
      setDone("error");
      setErrorMsg("Completa Nombre, Email, Empresa y Mensaje.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, utm }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "No se pudo enviar. Intenta nuevamente.");
      }

      // (Opcional) Evento para Ads/GA si tienes gtag cargado
      const gtag = typeof window !== "undefined" ? (window as any).gtag : null;
      if (typeof gtag === "function") {
        gtag("event", "generate_lead", { event_category: "lead", event_label: "contact_form" });
      }

      setDone("ok");
      setForm({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
        phone: "",
        city: "",
        hp: "",
      });
    } catch (err: any) {
      setDone("error");
      setErrorMsg(err?.message || "Error inesperado.");
    } finally {
      setLoading(false);
    }
  }

  const waText =
    "Hola 👋 Quiero cotizar un sitio de servicios + (opcional) Google Ads.\n\n" +
    "Empresa / Proyecto:\n" +
    "Servicio:\n" +
    "Ciudad:\n" +
    "Objetivo (leads / agenda / cotización):\n" +
    "Fecha ideal:\n";
  const waLink = `https://wa.me/56920080031?text=${encodeURIComponent(waText)}`;

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        backgroundImage: "url('/BG_contacto_strategy.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />

      <div className="relative section py-16 lg:py-20 space-y-14">
        <header className="max-w-4xl space-y-5">
          <p className="text-xs font-semibold tracking-[0.28em] uppercase text-sky-300/90">Contacto</p>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Pide una propuesta clara <span className="text-sky-300">en 24h hábiles</span>.
          </h1>

          <p className="text-base md:text-lg text-slate-200 max-w-3xl">
            Sitios para servicios (no e-commerce), con estructura operable, medición real y continuidad mensual opcional.
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-200">
              Alcance por escrito
            </span>
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-200">
              Medición real
            </span>
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-200">
              Operación mensual opcional
            </span>
          </div>
        </header>

        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] max-w-6xl">
          <div className="card-surface p-8 bg-black/70 border border-slate-700/70 backdrop-blur-sm rounded-2xl">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h2 className="text-xl font-semibold text-white">Formulario (1 minuto)</h2>
                <p className="mt-2 text-sm text-slate-300">Cuéntanos lo mínimo y te respondemos con alcance y valor.</p>
              </div>

              <div className="hidden md:flex items-center gap-2 text-xs text-slate-400">
                <Sparkles className="w-4 h-4 text-sky-300" />
                Respuesta: 24h hábiles
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-3">
              <input
                tabIndex={-1}
                autoComplete="off"
                value={form.hp || ""}
                onChange={(e) => setForm((p) => ({ ...p, hp: e.target.value }))}
                className="hidden"
                aria-hidden
              />

              <div className="grid md:grid-cols-2 gap-3">
                <input
                  className="h-11 rounded-xl border border-white/10 bg-black/40 px-4 text-sm text-slate-200 outline-none focus:border-sky-400/40"
                  placeholder="Nombre y apellido *"
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  required
                />
                <input
                  className="h-11 rounded-xl border border-white/10 bg-black/40 px-4 text-sm text-slate-200 outline-none focus:border-sky-400/40"
                  placeholder="Email *"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <input
                  className="h-11 rounded-xl border border-white/10 bg-black/40 px-4 text-sm text-slate-200 outline-none focus:border-sky-400/40"
                  placeholder="Empresa / Proyecto *"
                  value={form.company}
                  onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
                  required
                />
                <input
                  className="h-11 rounded-xl border border-white/10 bg-black/40 px-4 text-sm text-slate-200 outline-none focus:border-sky-400/40"
                  placeholder="Rubro/servicio (opcional)"
                  value={form.service}
                  onChange={(e) => setForm((p) => ({ ...p, service: e.target.value }))}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <input
                  className="h-11 rounded-xl border border-white/10 bg-black/40 px-4 text-sm text-slate-200 outline-none focus:border-sky-400/40"
                  placeholder="Teléfono (opcional)"
                  value={form.phone || ""}
                  onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                />
                <input
                  className="h-11 rounded-xl border border-white/10 bg-black/40 px-4 text-sm text-slate-200 outline-none focus:border-sky-400/40"
                  placeholder="Ciudad (opcional)"
                  value={form.city || ""}
                  onChange={(e) => setForm((p) => ({ ...p, city: e.target.value }))}
                />
              </div>

              <select
                className="h-11 rounded-xl border border-white/10 bg-black/40 px-4 text-sm text-slate-200 outline-none focus:border-sky-400/40"
                value={form.budget}
                onChange={(e) => setForm((p) => ({ ...p, budget: e.target.value as Budget }))}
                aria-label="Presupuesto estimado"
              >
                <option value="" className="bg-slate-950">
                  Presupuesto estimado (opcional)
                </option>
                <option value="Hasta $290k" className="bg-slate-950">
                  Hasta $290k (Pack Start)
                </option>
                <option value="$590k–$690k" className="bg-slate-950">
                  $590k–$690k (Pack Pro)
                </option>
                <option value="$990k–$1.5M" className="bg-slate-950">
                  $990k–$1.5M (Pack Premium)
                </option>
                <option value="Solo Ads" className="bg-slate-950">
                  Solo Google Ads (ya tengo sitio)
                </option>
                <option value="No lo sé aún" className="bg-slate-950">
                  No lo sé aún
                </option>
              </select>

              <textarea
                className="min-h-[140px] rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-slate-200 outline-none focus:border-sky-400/40"
                placeholder={
                  "Mensaje *\nObjetivo: (leads / agenda / institucional)\nSecciones clave:\nFecha ideal:\nLinks (si existen):"
                }
                value={form.message}
                onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                required
              />

              {done === "ok" && (
                <div className="rounded-xl border border-emerald-200/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
                  <strong>Listo.</strong> Recibimos tu mensaje. Te responderemos dentro de 24h hábiles.
                </div>
              )}

              {done === "error" && (
                <div className="rounded-xl border border-red-200/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                  {errorMsg || "No se pudo enviar. Intenta nuevamente."}
                </div>
              )}

              <div className="flex flex-wrap gap-3 pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary inline-flex items-center gap-2 px-6 py-3 disabled:opacity-60"
                >
                  {loading ? "Enviando..." : "Enviar solicitud"}
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="mailto:info@tronxstrategy.com"
                  className="btn-ghost bg-white/10 hover:bg-white/20 inline-flex items-center gap-2 px-6 py-3"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost bg-white/10 hover:bg-white/20 inline-flex items-center gap-2 px-6 py-3"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>

              <p className="text-xs text-slate-500">
                Al enviar, aceptas ser contactado(a) con fines comerciales. Trabajamos con alcance definido por escrito.
              </p>
            </form>
          </div>

          <aside className="space-y-6">
            <div className="card-surface p-7 bg-black/70 border border-slate-700/70 backdrop-blur-sm rounded-2xl">
              <h3 className="text-base font-semibold text-white flex items-center gap-2">
                <BriefcaseBusiness className="w-4 h-4 text-sky-300" />
                Información
              </h3>

              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li className="flex gap-3">
                  <MapPin className="w-4 h-4 text-sky-400 mt-1" />
                  Providencia, Santiago · Operación remota.
                </li>
                <li className="flex gap-3">
                  <Clock className="w-4 h-4 text-sky-400 mt-1" />
                  Lunes a viernes: 9:00–18:00 (GMT-3)
                </li>
                <li className="flex gap-3">
                  <ShieldCheck className="w-4 h-4 text-sky-400 mt-1" />
                  Alcance definido por escrito.
                </li>
              </ul>
            </div>

            <div className="card-surface p-7 bg-black/70 border border-slate-700/70 backdrop-blur-sm rounded-2xl">
              <h3 className="text-base font-semibold text-white">Enfoque Tronx</h3>

              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <div className="flex gap-3">
                  <Workflow className="w-4 h-4 text-sky-400 mt-1" />
                  Estructura operable.
                </div>
                <div className="flex gap-3">
                  <BarChart3 className="w-4 h-4 text-sky-400 mt-1" />
                  Medición real (leads).
                </div>
                <div className="flex gap-3">
                  <ShieldCheck className="w-4 h-4 text-sky-400 mt-1" />
                  Continuidad mensual recomendada.
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-white/10 bg-black/40 p-4 text-xs text-slate-300">
                Si tu sitio es de servicios, el Pack Pro suele ser el punto de partida más eficiente.
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/servicios#packs"
                  className="btn-ghost bg-white/10 hover:bg-white/20 px-6 py-3 inline-flex items-center gap-2"
                >
                  Ver packs
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/portafolio"
                  className="btn-ghost bg-white/10 hover:bg-white/20 px-6 py-3 inline-flex items-center gap-2"
                >
                  Ver portafolio
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </aside>
        </section>

        <section className="text-center pt-2">
          <p className="text-xs text-slate-500">
            No hacemos e-commerce ni sistemas complejos. Si tu caso es software a medida, no somos el partner correcto.
          </p>
        </section>
      </div>
    </section>
  );
}

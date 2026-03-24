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
  LayoutTemplate,
  Search,
  Headphones,
  FileText,
} from "lucide-react";

type Interest =
  | ""
  | "Base comercial digital"
  | "Activación de captación"
  | "Continuidad mensual"
  | "No lo sé aún";

type Budget =
  | ""
  | "Hasta $290k"
  | "$390k–$600k"
  | "$590k–$990k+"
  | "Mensual"
  | "No lo sé aún";

type Payload = {
  name: string;
  email: string;
  company: string;
  service: string;
  interest: Interest;
  budget: Budget;
  message: string;
  phone?: string;
  city?: string;
  hp?: string;
};

function safeTrim(v: unknown) {
  return typeof v === "string" ? v.trim() : "";
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-200">
      {children}
    </span>
  );
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
    interest: "",
    budget: "",
    message: "",
    phone: "",
    city: "",
    hp: "",
  });

  const utm = useMemo(() => {
    if (typeof window === "undefined") return {};
    const params = new URLSearchParams(window.location.search);
    const keys = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
      "gclid",
    ];
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

    if (
      !safeTrim(form.name) ||
      !safeTrim(form.email) ||
      !safeTrim(form.company) ||
      !safeTrim(form.message)
    ) {
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

      const gtag =
        typeof window !== "undefined" ? (window as any).gtag : null;
      if (typeof gtag === "function") {
        gtag("event", "generate_lead", {
          event_category: "lead",
          event_label: "contact_form",
        });
      }

      setDone("ok");
      setForm({
        name: "",
        email: "",
        company: "",
        service: "",
        interest: "",
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
    "Hola 👋 Quiero cotizar con Tronx Strategy.\n\n" +
    "Empresa / Proyecto:\n" +
    "Servicio principal:\n" +
    "Ciudad:\n" +
    "Objetivo (consultas / cotizaciones / agenda):\n" +
    "Me interesa:\n" +
    "- Base comercial digital\n" +
    "- Activación de captación\n" +
    "- Continuidad mensual\n\n" +
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

      <div className="relative section space-y-14 py-16 lg:py-20">
        <header className="max-w-4xl space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300/90">
            Contacto
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Pide una propuesta clara
            <span className="text-sky-300"> en 24h hábiles</span>.
          </h1>

          <p className="max-w-3xl text-base text-slate-200 md:text-lg">
            Trabajamos con empresas de servicios que necesitan una base digital
            más clara para generar consultas: sitio, textos base, medición,
            activación de captación y continuidad mensual.
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            <Pill>Base comercial digital</Pill>
            <Pill>Activación de captación</Pill>
            <Pill>Continuidad mensual</Pill>
          </div>
        </header>

        <section className="grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card-surface rounded-2xl border border-slate-700/70 bg-black/70 p-8 backdrop-blur-sm">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Formulario
                </h2>
                <p className="mt-2 text-sm text-slate-300">
                  Cuéntanos lo esencial y te respondemos con una propuesta
                  aterrizada.
                </p>
              </div>

              <div className="hidden items-center gap-2 text-xs text-slate-400 md:flex">
                <Sparkles className="h-4 w-4 text-sky-300" />
                Respuesta: 24h hábiles
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-3">
              <input
                tabIndex={-1}
                autoComplete="off"
                value={form.hp || ""}
                onChange={(e) =>
                  setForm((p) => ({ ...p, hp: e.target.value }))
                }
                className="hidden"
                aria-hidden
              />

              <div className="grid gap-3 md:grid-cols-2">
                <input
                  className="h-11 rounded-xl border border-white/10 bg-black/40 px-4 text-sm text-slate-200 outline-none focus:border-sky-400/40"
                  placeholder="Nombre y apellido *"
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  required
                />
                <input
                  className="h-11 rounded-xl border border-white/10 bg-black/40 px-4 text-sm text-slate-200 outline-none focus:border-sky-400/40"
                  placeholder="Email *"
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, email: e.target.value }))
                  }
                  required
                />
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <input
                  className="h-11 rounded-xl border border-white/10 bg-black/40 px-4 text-sm text-slate-200 outline-none focus:border-sky-400/40"
                  placeholder="Empresa / Proyecto *"
                  value={form.company}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, company: e.target.value }))
                  }
                  required
                />
                <input
                  className="h-11 rounded-xl border border-white/10 bg-black/40 px-4 text-sm text-slate-200 outline-none focus:border-sky-400/40"
                  placeholder="Servicio principal (opcional)"
                  value={form.service}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, service: e.target.value }))
                  }
                />
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <input
                  className="h-11 rounded-xl border border-white/10 bg-black/40 px-4 text-sm text-slate-200 outline-none focus:border-sky-400/40"
                  placeholder="Teléfono (opcional)"
                  value={form.phone || ""}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, phone: e.target.value }))
                  }
                />
                <input
                  className="h-11 rounded-xl border border-white/10 bg-black/40 px-4 text-sm text-slate-200 outline-none focus:border-sky-400/40"
                  placeholder="Ciudad (opcional)"
                  value={form.city || ""}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, city: e.target.value }))
                  }
                />
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <select
                  className="h-11 rounded-xl border border-white/10 bg-black/40 px-4 text-sm text-slate-200 outline-none focus:border-sky-400/40"
                  value={form.interest}
                  onChange={(e) =>
                    setForm((p) => ({
                      ...p,
                      interest: e.target.value as Interest,
                    }))
                  }
                  aria-label="Servicio de interés"
                >
                  <option value="" className="bg-slate-950">
                    Servicio de interés (opcional)
                  </option>
                  <option value="Base comercial digital" className="bg-slate-950">
                    Base comercial digital
                  </option>
                  <option
                    value="Activación de captación"
                    className="bg-slate-950"
                  >
                    Activación de captación
                  </option>
                  <option value="Continuidad mensual" className="bg-slate-950">
                    Continuidad mensual
                  </option>
                  <option value="No lo sé aún" className="bg-slate-950">
                    No lo sé aún
                  </option>
                </select>

                <select
                  className="h-11 rounded-xl border border-white/10 bg-black/40 px-4 text-sm text-slate-200 outline-none focus:border-sky-400/40"
                  value={form.budget}
                  onChange={(e) =>
                    setForm((p) => ({
                      ...p,
                      budget: e.target.value as Budget,
                    }))
                  }
                  aria-label="Presupuesto estimado"
                >
                  <option value="" className="bg-slate-950">
                    Presupuesto estimado (opcional)
                  </option>
                  <option value="Hasta $290k" className="bg-slate-950">
                    Hasta $290k
                  </option>
                  <option value="$390k–$600k" className="bg-slate-950">
                    $390k–$600k
                  </option>
                  <option value="$590k–$990k+" className="bg-slate-950">
                    $590k–$990k+
                  </option>
                  <option value="Mensual" className="bg-slate-950">
                    Mensual
                  </option>
                  <option value="No lo sé aún" className="bg-slate-950">
                    No lo sé aún
                  </option>
                </select>
              </div>

              <textarea
                className="min-h-[150px] rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-slate-200 outline-none focus:border-sky-400/40"
                placeholder={
                  "Mensaje *\nObjetivo: (consultas / cotizaciones / agenda)\n¿Necesitas sitio nuevo o mejora del actual?\n¿Te interesa también ayuda con los textos?\nFecha ideal:\nLinks de referencia (si existen):"
                }
                value={form.message}
                onChange={(e) =>
                  setForm((p) => ({ ...p, message: e.target.value }))
                }
                required
              />

              {done === "ok" && (
                <div className="rounded-xl border border-emerald-200/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
                  <strong>Listo.</strong> Recibimos tu mensaje. Te responderemos
                  dentro de 24h hábiles.
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
                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href="mailto:info@tronxstrategy.com"
                  className="btn-ghost inline-flex items-center gap-2 bg-white/10 px-6 py-3 hover:bg-white/20"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </a>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost inline-flex items-center gap-2 bg-white/10 px-6 py-3 hover:bg-white/20"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>

              <p className="text-xs text-slate-500">
                Al enviar, aceptas ser contactado(a) con fines comerciales.
                Trabajamos con alcance definido por escrito.
              </p>
            </form>
          </div>

          <aside className="space-y-6">
            <div className="card-surface rounded-2xl border border-slate-700/70 bg-black/70 p-7 backdrop-blur-sm">
              <h3 className="flex items-center gap-2 text-base font-semibold text-white">
                <BriefcaseBusiness className="h-4 w-4 text-sky-300" />
                Información
              </h3>

              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li className="flex gap-3">
                  <MapPin className="mt-1 h-4 w-4 text-sky-400" />
                  Santiago, Chile · Operación remota.
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-1 h-4 w-4 text-sky-400" />
                  Lunes a viernes: 9:00–18:00
                </li>
                <li className="flex gap-3">
                  <ShieldCheck className="mt-1 h-4 w-4 text-sky-400" />
                  Alcance y valores definidos por escrito.
                </li>
              </ul>
            </div>

            <div className="card-surface rounded-2xl border border-slate-700/70 bg-black/70 p-7 backdrop-blur-sm">
              <h3 className="text-base font-semibold text-white">
                Qué solemos resolver
              </h3>

              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <div className="flex gap-3">
                  <LayoutTemplate className="mt-1 h-4 w-4 text-sky-400" />
                  Sitios confusos o antiguos que no ayudan a vender.
                </div>
                <div className="flex gap-3">
                  <FileText className="mt-1 h-4 w-4 text-sky-400" />
                  Empresas que no saben cómo explicar bien su servicio.
                </div>
                <div className="flex gap-3">
                  <BarChart3 className="mt-1 h-4 w-4 text-sky-400" />
                  Negocios que quieren medir formularios y consultas reales.
                </div>
                <div className="flex gap-3">
                  <Workflow className="mt-1 h-4 w-4 text-sky-400" />
                  Empresas que necesitan una base lista para campañas.
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-white/10 bg-black/40 p-4 text-xs text-slate-300">
                Si todavía no sabes qué servicio necesitas, igual escríbenos.
                Te ayudamos a aterrizar si conviene partir por base, captación o
                continuidad.
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/servicios"
                  className="btn-ghost inline-flex items-center gap-2 bg-white/10 px-6 py-3 hover:bg-white/20"
                >
                  Ver servicios
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/portafolio"
                  className="btn-ghost inline-flex items-center gap-2 bg-white/10 px-6 py-3 hover:bg-white/20"
                >
                  Ver portafolio
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="card-surface rounded-2xl border border-slate-700/70 bg-black/70 p-7 backdrop-blur-sm">
              <h3 className="text-base font-semibold text-white">
                Cómo trabajamos
              </h3>

              <div className="mt-4 grid gap-3 text-sm text-slate-300">
                <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                  <p className="font-medium text-white">1. Base comercial digital</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Sitio claro + textos base + contacto.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                  <p className="font-medium text-white">2. Activación de captación</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Tracking + campañas cuando tiene sentido.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                  <p className="font-medium text-white">3. Continuidad mensual</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Soporte y ajustes para sostener el sistema.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section className="pt-2 text-center">
          <p className="text-xs text-slate-500">
            No hacemos e-commerce ni sistemas complejos. Si tu proyecto es
            software a medida, no somos el partner correcto.
          </p>
        </section>
      </div>
    </section>
  );
}

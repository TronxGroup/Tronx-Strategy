"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Cerrar con ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-black/40 backdrop-blur-xl">
      <div className="section py-3 flex items-center justify-between gap-4">
        {/* SOLO LOGO, MÁS GRANDE */}
        <Link href="/" className="flex items-center" aria-label="Ir al inicio">
          <div className="relative h-12 w-12 md:h-14 md:w-14">
            <Image
              src="/logo_Tronx_Stretegy.png"
              alt="Tronx Strategy"
              fill
              sizes="56px"
              className="object-contain drop-shadow-[0_0_36px_rgba(0,216,255,0.55)]"
              priority
            />
          </div>
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  active
                    ? "text-sky-300 font-semibold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA DESKTOP */}
        <Link href="/contacto" className="hidden md:inline-flex btn-primary">
          Agenda una llamada
        </Link>

        {/* HAMBURGUESA MOBILE */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-700/70 bg-white/5 p-2 text-white hover:bg-white/10 transition"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* MENU MOBILE (DRAWER) */}
      {open && (
        <div className="md:hidden">
          {/* overlay */}
          <button
            className="fixed inset-0 z-40 bg-black/70"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
          />

          {/* panel */}
          <div className="fixed right-0 top-0 z-50 h-full w-[86%] max-w-sm border-l border-slate-800/70 bg-slate-950/95 backdrop-blur-xl">
            <div className="p-5 border-b border-slate-800/70 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10">
                  <Image
                    src="/logo_Tronx_Stretegy.png"
                    alt="Tronx Strategy"
                    fill
                    sizes="40px"
                    className="object-contain drop-shadow-[0_0_28px_rgba(0,216,255,0.45)]"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white leading-tight">Tronx Strategy</p>
                  <p className="text-xs text-slate-400">Menú</p>
                </div>
              </div>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-xl border border-slate-700/70 bg-white/5 p-2 text-white hover:bg-white/10 transition"
                aria-label="Cerrar"
                onClick={() => setOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="p-5 space-y-2">
              {navItems.map((item) => {
                const active =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block rounded-xl border px-4 py-3 text-sm transition ${
                      active
                        ? "border-sky-400/40 bg-sky-500/10 text-sky-200"
                        : "border-slate-800/60 bg-white/5 text-white/90 hover:bg-white/10"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-3">
                <Link
                  href="/contacto"
                  className="btn-primary w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm"
                  onClick={() => setOpen(false)}
                >
                  Agenda una llamada <ArrowRight className="w-4 h-4" />
                </Link>

                <p className="mt-3 text-xs text-slate-400">
                  Tip: si estás cotizando, envía objetivo + público + 1 referencia y te respondemos con propuesta.
                </p>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

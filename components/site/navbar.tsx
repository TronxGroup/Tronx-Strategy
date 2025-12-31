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

  // Cierra menú al cambiar de ruta
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Bloquea scroll
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // ESC para cerrar
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-black/60 backdrop-blur-xl">
      <div className="section py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Inicio">
          <div className="relative h-12 w-12 md:h-14 md:w-14">
            <Image
              src="/logo_Tronx_Stretegy.png"
              alt="Tronx Strategy"
              fill
              sizes="56px"
              priority
              className="object-contain drop-shadow-[0_0_36px_rgba(0,216,255,0.55)]"
            />
          </div>
        </Link>

        {/* Desktop nav */}
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

        {/* CTA desktop */}
        <Link href="/contacto" className="hidden md:inline-flex btn-primary">
          Agenda una llamada
        </Link>

        {/* Hamburguesa */}
        <button
          className="md:hidden rounded-xl border border-slate-700/70 bg-white/5 p-2 text-white hover:bg-white/10"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* ===== MOBILE MENU ===== */}
      {open && (
        <>
          {/* OVERLAY OSCURO REAL */}
          <div
            className="fixed inset-0 z-40 bg-black/85 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* PANEL */}
          <aside className="fixed right-0 top-0 z-50 h-full w-[88%] max-w-sm bg-slate-950 border-l border-slate-800 shadow-2xl">
            {/* Header panel */}
            <div className="flex items-center justify-between p-5 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10">
                  <Image
                    src="/logo_Tronx_Stretegy.png"
                    alt="Tronx Strategy"
                    fill
                    sizes="40px"
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-semibold text-white">
                  Tronx Strategy
                </span>
              </div>

              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
                className="rounded-xl border border-slate-700 bg-white/5 p-2 hover:bg-white/10"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Links */}
            <nav className="p-5 space-y-2">
              {navItems.map((item) => {
                const active =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-sm border transition ${
                      active
                        ? "border-sky-400/40 bg-sky-500/10 text-sky-200"
                        : "border-slate-800 bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              {/* CTA */}
              <div className="pt-4">
                <Link
                  href="/contacto"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full inline-flex items-center justify-center gap-2"
                >
                  Agenda una llamada <ArrowRight className="w-4 h-4" />
                </Link>

                <p className="mt-3 text-xs text-slate-400">
                  Sitios web corporativos, rápidos y medibles.
                </p>
              </div>
            </nav>
          </aside>
        </>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/contacto", label: "Contacto" }
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/60 bg-black/40 backdrop-blur-xl">
      <div className="section py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-9 w-9 md:h-10 md:w-10">
            <Image
              src="/logo-tronxstrategy.png"
              alt="Tronx Strategy"
              fill
              sizes="40px"
              className="object-contain drop-shadow-[0_0_28px_rgba(0,216,255,0.65)]"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-[0.22em] text-slate-400 uppercase">
              Tronx
            </span>
            <span className="text-sm md:text-base font-semibold text-slate-50">
              Strategy
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  active
                    ? "text-tronx-accent"
                    : "text-slate-300 hover:text-slate-50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/contacto" className="hidden md:inline-flex btn-primary">
          Agenda una llamada
        </Link>
      </div>
    </header>
  );
}

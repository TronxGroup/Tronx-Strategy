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
        
        {/* SOLO LOGO, MÁS GRANDE */}
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-12 md:h-14 md:w-14">
            <Image
              src="/logo_Tronx_Stretegy.png"
              alt="Tronx Strategy"
              fill
              sizes="56px"
              className="object-contain drop-shadow-[0_0_36px_rgba(0,216,255,0.55)]"
            />
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
                    ? "text-sky-300 font-semibold"
                    : "text-slate-300 hover:text-white"
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

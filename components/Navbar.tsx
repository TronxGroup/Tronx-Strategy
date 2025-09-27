
"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/quienes-somos", label: "Quiénes somos" },
  { href: "/servicios", label: "Servicios" },
  { href: "/casos", label: "Casos de éxito" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="section flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" width={120} height={30} alt="Tronx Strategy" />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`hover:text-brand-700 ${pathname === l.href ? "text-brand-700 font-semibold" : "text-slate-700"}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href="/contacto" className="btn btn-primary text-sm">Conversemos</Link>
      </div>
    </header>
  );
}

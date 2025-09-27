import Link from "next/link";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-16 py-8 text-sm">
      <div className="section flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} Tronx Strategy. Todos los derechos
            reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/quienes-somos" className="hover:text-brand-700">
              Quiénes somos
            </Link>
            <Link href="/servicios" className="hover:text-brand-700">
              Servicios
            </Link>
            <Link href="/servicios/tronx-cloud" className="hover:text-brand-700">
              Tronx Cloud Suite
            </Link>
            <Link
              href="/servicios/programa-socios"
              className="hover:text-brand-700"
            >
              Programa Socios
            </Link>
            <Link href="/casos" className="hover:text-brand-700">
              Casos de éxito
            </Link>
            <Link href="/contacto" className="hover:text-brand-700">
              Contacto
            </Link>
            <a
              href="https://linkedin.com/company/tronx-strategy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-brand-700"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
        <div className="text-slate-500">
          <p>
            Canal único de contacto (holding):{" "}
            <a href="tel:+56920080031" className="hover:underline">
              +56 9 2008 0031
            </a>{" "}
            ·{" "}
            <a
              href="mailto:info@tronxgroup.com"
              className="hover:underline"
            >
              info@tronxgroup.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

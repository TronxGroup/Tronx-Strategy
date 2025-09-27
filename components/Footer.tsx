import Link from "next/link";
import Image from "next/image";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-16 py-8 text-sm">
      <div className="section flex flex-col gap-6">
        {/* fila principal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo Tronx Strategy */}
          <div className="flex items-center gap-3">
            <Image
              src="/Logo_TronxStrategy_v2025.png"
              alt="Tronx Strategy"
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="font-semibold text-slate-800">
              Tronx Strategy
            </span>
          </div>

          {/* Links de navegación */}
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
            {/* LinkedIn icon */}
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

        {/* Línea inferior */}
        <div className="text-slate-500 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Tronx Strategy. Todos los derechos
            reservados.
          </p>
          <p>
            Canal único de contacto:{" "}
            <a href="tel:+56920080031" className="hover:underline">
              +56 9 2008 0031
            </a>{" "}
            ·{" "}
            <a href="mailto:info@tronxstrategy.com" className="hover:underline">
              info@tronxstrategy.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

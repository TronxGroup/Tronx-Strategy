// components/site/footer.tsx

import Link from "next/link";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";

type FooterProps = {
  instagram?: string;
  linkedin?: string;
};

export default function Footer({
  instagram,
  linkedin,
}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-14">

        <div className="grid gap-10 md:grid-cols-3">

          {/* ===================== */}
          {/* Columna 1 — Marca */}
          {/* ===================== */}
          <div className="space-y-4">
            <p className="text-sm font-semibold text-white tracking-wide">
              Tronx Strategy
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              Unidad WebOps de Tronx Group SpA.
              Diseñamos activos digitales con arquitectura moderna,
              gobierno técnico claro y continuidad mensual.
            </p>

            <p className="text-xs text-slate-500">
              © {year} Tronx Strategy. Todos los derechos reservados.
            </p>
          </div>

          {/* ===================== */}
          {/* Columna 2 — Navegación */}
          {/* ===================== */}
          <div className="space-y-4">
            <p className="text-sm font-semibold text-white">
              Navegación
            </p>

            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-white transition">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-white transition">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/portafolio" className="hover:text-white transition">
                  Portafolio
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-white transition">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* ===================== */}
          {/* Columna 3 — Contacto */}
          {/* ===================== */}
          <div className="space-y-4">
            <p className="text-sm font-semibold text-white">
              Contacto directo
            </p>

            <div className="space-y-3 text-sm text-slate-400">

              <a
                href="mailto:info@tronxstrategy.com"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                info@tronxstrategy.com
              </a>

              <a
                href="https://wa.me/56920080031"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition"
              >
                <Phone className="w-4 h-4 text-green-400" />
                +56 9 2008 0031
              </a>
            </div>

            {/* Redes sociales */}
            <div className="flex gap-4 pt-2">
              {instagram && (
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-slate-700 text-slate-400 hover:border-sky-400 hover:text-white transition"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}

              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-slate-700 text-slate-400 hover:border-sky-400 hover:text-white transition"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>

            <p className="text-xs text-slate-500 pt-2">
              Operación 100% remota · Santiago, Chile
            </p>
          </div>

        </div>

        {/* Línea inferior holding */}
        <div className="mt-12 border-t border-slate-800 pt-6 text-xs text-slate-600 text-center">
          Tronx Strategy es una unidad de Tronx Group SpA.
        </div>

      </div>
    </footer>
  );
}

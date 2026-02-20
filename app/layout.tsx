// components/site/footer.tsx

import { Instagram, Linkedin, Mail, Phone } from "lucide-react";

export interface FooterProps {
  instagram?: string;
  linkedin?: string;
}

export default function Footer({
  instagram,
  linkedin,
}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-14">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Marca */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-white tracking-wide">
              Tronx Strategy
            </p>

            <p className="text-sm text-slate-400">
              Unidad WebOps de Tronx Group SpA.
              Arquitectura moderna, gobierno digital y continuidad mensual.
            </p>

            <p className="text-xs text-slate-500">
              © {year} Tronx Strategy. Todos los derechos reservados.
            </p>
          </div>

          {/* Contacto */}
          <div className="space-y-3 text-sm text-slate-400">
            <p className="font-semibold text-white">Contacto</p>

            <a
              href="mailto:info@tronxstrategy.com"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <Mail className="w-4 h-4 text-sky-400" />
              info@tronxstrategy.com
            </a>

            <a
              href="https://wa.me/56920080031"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <Phone className="w-4 h-4 text-green-400" />
              +56 9 2008 0031
            </a>
          </div>

          {/* Redes */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-white">
              Redes sociales
            </p>

            <div className="flex gap-4">
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
          </div>

        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-xs text-slate-600">
          Tronx Strategy es una unidad de Tronx Group SpA.
        </div>

      </div>
    </footer>
  );
}

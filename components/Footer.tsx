import Link from 'next/link';
import { Linkedin } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-6 text-sm text-white/70">
        {/* Columna izquierda: marca */}
        <div>
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-xl bg-gradient-to-tr from-cyan-400 to-emerald-400" />
            <span className="font-semibold text-white">TRONX STRATEGY</span>
          </div>
          <p className="mt-3">© {year} Tronx Strategy. Todos los derechos reservados.</p>
          <p className="mt-1">Tronx Strategy forma parte de Tronx Group.</p>
        </div>

        {/* Columna derecha: contacto + rrss + legal */}
        <div className="md:text-right space-y-1">
          <p>
            <a href="mailto:info@tronxstrategy.com" className="hover:text-white">
              info@tronxstrategy.com
            </a>{' '}
            · +56 9 2008 0031
          </p>
          <p>Av. Tu Dirección 123, Santiago, Chile</p>

          <div className="flex items-center gap-3 pt-1 md:justify-end">
            {/* RRSS: LinkedIn */}
            <a
              href="https://www.linkedin.com/company/tu-perfil" // ← reemplaza por el perfil real
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-white"
              aria-label="LinkedIn de Tronx Strategy"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>

            <span className="mx-2 text-white/30">·</span>

            {/* Menú legal */}
            <nav className="inline-flex items-center gap-3">
              <Link href="/privacidad" className="hover:text-white">
                Privacidad
              </Link>
              <span className="text-white/30">/</span>
              <Link href="/condiciones" className="hover:text-white">
                Condiciones
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

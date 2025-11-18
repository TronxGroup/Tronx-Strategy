"use client";

import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/70 mt-12">
      <div className="section py-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-slate-400 text-xs">
        {/* LOGO + SUBMARCA */}
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10">
            <Image
              src="/logo_Tronx_Stretegy.png"
              alt="Tronx Strategy Logo"
              fill
              sizes="40px"
              className="object-contain opacity-90"
            />
          </div>
          <div>
            <p className="text-slate-500">Tronx Strategy — Estudio Web</p>
            <p className="text-[10px] text-slate-600">
              Una unidad de Tronx Group SpA
            </p>
          </div>
        </div>

        {/* INFO + INSTAGRAM */}
        <div className="text-center sm:text-right space-y-2">
          <p>
            © {currentYear} Tronx Strategy. Todos los derechos reservados.
          </p>
          <p>
            <a
              href="mailto:info@tronxstrategy.com"
              className="text-sky-300 hover:text-sky-200"
            >
              info@tronxstrategy.com
            </a>{" "}
            · +56 9 2008 0031
          </p>

          <div className="flex sm:justify-end justify-center mt-1">
            <a
              href="https://www.instagram.com/tronxstrategy"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-sky-300 transition-colors"
            >
              {/* Ícono Instagram (SVG simple) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.4"
                stroke="currentColor"
                className="opacity-80"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17" cy="7" r="1.2" />
              </svg>
              <span>@tronxstrategy</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

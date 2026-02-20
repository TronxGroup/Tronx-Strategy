"use client";

import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";

type FooterProps = {
  instagram?: string;
  linkedin?: string;
};

export default function Footer({
  instagram,
  linkedin,
}: FooterProps) {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">

          {/* LEFT SIDE */}
          <div className="space-y-4">

            {/* Logo */}
            <div className="relative h-10 w-40">
              <Image
                src="/logo_Tronx_Stretegy.png"
                alt="Tronx Strategy"
                fill
                className="object-contain opacity-90"
                sizes="160px"
              />
            </div>

            {/* Copyright */}
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Tronx Strategy
            </p>

            {/* Frase institucional discreta */}
            <p className="text-[11px] text-slate-600 tracking-wide">
              Tronx Strategy es parte de Tronx Group.
            </p>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col items-start md:items-end gap-6">

            {/* Redes */}
            <div className="flex items-center gap-4">
              {instagram && (
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}

              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </div>

            {/* Mini descriptor técnico */}
            <p className="text-xs text-slate-500 max-w-xs text-left md:text-right">
              WebOps corporativo en Next.js · GitHub · Vercel · Cloudflare
            </p>

          </div>

        </div>
      </div>
    </footer>
  );
}

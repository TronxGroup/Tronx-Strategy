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
      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* Left */}
          <div className="space-y-2">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Tronx Strategy
            </p>

            {/* 👇 Frase MUY discreta */}
            <p className="text-[11px] text-slate-600 tracking-wide">
              Tronx Strategy es parte de{" "}
              <a
                href="https://www.tronxgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-400 transition-colors"
              >
                Tronx Group
              </a>.
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            {instagram && (
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors"
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
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
          </div>

        </div>
      </div>
    </footer>
  );
}

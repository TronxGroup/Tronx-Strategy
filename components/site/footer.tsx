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
    <footer className="border-t border-slate-800 bg-slate-950 p-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        <div className="text-sm text-slate-400">
          © {new Date().getFullYear()} Tronx Strategy
        </div>

        <div className="flex gap-4">
          {instagram && (
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 text-slate-400 hover:text-white" />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 text-slate-400 hover:text-white" />
            </a>
          )}
        </div>

      </div>
    </footer>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-black/60 mt-16">
      <div className="section py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
        <p>
          © {new Date().getFullYear()} Tronx Strategy · Tronx Group SpA. Todos
          los derechos reservados.
        </p>
        <p className="text-xs md:text-sm text-slate-500">
          Sitios web modernos · Infraestructura GitHub + Vercel + Cloudflare.
        </p>
      </div>
    </footer>
  );
}

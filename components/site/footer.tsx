<footer className="border-t border-slate-800/70 mt-12">
  <div className="section py-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-slate-400 text-xs">
    
    {/* LOGO EN EL FOOTER */}
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
      <p className="text-slate-500">Tronx Strategy — Tronx Group</p>
    </div>

    <div className="text-center sm:text-right space-y-1">
      <p>© {new Date().getFullYear()} Tronx Group SpA. Todos los derechos reservados.</p>
      <p>
        <a
          href="mailto:info@tronxgroup.com"
          className="text-sky-300 hover:text-sky-200"
        >
          info@tronxgroup.com
        </a>{" "}
        · +56 9 2008 0031
      </p>

      {/* X / Twitter */}
      <a
        href="https://x.com/TronxGroup"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 hover:text-sky-300"
      >
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-600 text-[10px] leading-none">
          X
        </span>
        <span>@TronxGroup</span>
      </a>
    </div>
  </div>
</footer>

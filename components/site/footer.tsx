<footer className="border-t border-slate-800/70 mt-12">
  <div className="section py-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-slate-400 text-xs">
    
    {/* LOGO */}
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

    {/* INFO */}
    <div className="text-center sm:text-right space-y-1">
      <p>© {new Date().getFullYear()} Tronx Strategy. Todos los derechos reservados.</p>
      <p>
        <a
          href="mailto:info@tronxstrategy.com"
          className="text-sky-300 hover:text-sky-200"
        >
          info@tronxstrategy.com
        </a>{" "}
        · +56 9 2008 0031
      </p>
    </div>
  </div>
</footer>

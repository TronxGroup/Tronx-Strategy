export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-start">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold">Contacto</h1>
        <p className="mt-3 text-neutral-300">¿Listo para conversar tu estrategia o cotizar un pack? Escríbenos.</p>
        <div className="mt-6 space-y-2 text-neutral-300">
          <p>📧 <a className="underline decoration-neutral-700 underline-offset-4 hover:text-white" href="mailto:info@tronxstrategy.com">info@tronxstrategy.com</a></p>
          <p>📱 +56 9 2008 0031</p>
        </div>
      </div>
      <form className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 grid gap-4" action="https://formspree.io/f/your-id" method="POST">
        <label className="grid gap-2 text-sm">
          <span>Nombre</span>
          <input name="nombre" className="bg-black border border-[var(--border)] rounded-xl px-3 py-2 outline-none focus:border-neutral-600" placeholder="Tu nombre" required />
        </label>
        <label className="grid gap-2 text-sm">
          <span>Email</span>
          <input type="email" name="email" className="bg-black border border-[var(--border)] rounded-xl px-3 py-2 outline-none focus:border-neutral-600" placeholder="tu@email.com" required />
        </label>
        <label className="grid gap-2 text-sm">
          <span>Mensaje</span>
          <textarea name="mensaje" className="bg-black border border-[var(--border)] rounded-xl px-3 py-2 h-28 outline-none focus:border-neutral-600" placeholder="Cuéntanos en qué te ayudamos" required></textarea>
        </label>
        <button type="submit" className="inline-flex items-center gap-2 rounded-2xl bg-white text-neutral-900 px-5 py-3 font-semibold">
          Enviar
        </button>
        <p className="text-xs text-neutral-500">*Reemplaza el action del formulario con tu endpoint de Formspree o conéctalo a tu CRM.</p>
      </form>
    </div>
  )
}

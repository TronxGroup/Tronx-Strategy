'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/sections/servicios', label: 'Servicios' },
  { href: '/sections/socios', label: 'Socios' },
  { href: '/sections/casos', label: 'Casos de Éxito' },
  { href: '/sections/quienes-somos', label: 'Quiénes Somos' },
  { href: '/sections/contacto', label: 'Contacto' }, // al final
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/60 border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-[var(--brand1)] to-[var(--brand2)]" />
          <span className="font-semibold tracking-wide">
            TRONX <span className="text-neutral-300">STRATEGY</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`hover:text-white ${isActive(l.href) ? 'text-white' : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-[var(--border)] text-neutral-300 hover:text-white"
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        >
          <div
            className="ml-auto h-full w-5/6 max-w-[320px] bg-neutral-950 border-l border-[var(--border)] p-6 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-7 w-7 rounded-xl bg-gradient-to-tr from-[var(--brand1)] to-[var(--brand2)]" />
                <span className="font-semibold text-white">TRONX STRATEGY</span>
              </div>
              <button
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border)] text-neutral-300 hover:text-white"
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm ${
                    isActive(l.href)
                      ? 'bg-neutral-900 text-white'
                      : 'text-neutral-300 hover:text-white hover:bg-neutral-900'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-6 text-xs text-neutral-500">
              © {new Date().getFullYear()} Tronx Strategy
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

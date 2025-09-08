import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import type { ReactNode } from 'react'
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Tronx Strategy | Consultoría, Digital & Comunicación',
  description: 'Estrategia, tecnología y comunicación para hacer crecer tu negocio. Tronx Strategy forma parte de Tronx Group.',
  openGraph: { type: 'website', title: 'Tronx Strategy', description: 'Consultoría + Digital + Comunicación', url: 'https://www.tronxstrategy.com/' },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.tronxstrategy.com/' },
}
export default function RootLayout({ children }: { children: ReactNode }){
  return (<html lang="es"><body className={inter.className}><Navbar /><main className="min-h-[70vh]">{children}</main><Footer /></body></html>) }
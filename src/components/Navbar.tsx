'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={clsx(
      'sticky top-0 z-50 backdrop-blur transition-all duration-300',
      scrolled ? 'bg-white shadow-md' : 'bg-white/80'
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <Link href="/" className="text-2xl font-bold tracking-tight text-blue-700">
          MCT Matériaux
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-gray-800 font-medium">
          <Link href="/" className="hover:text-blue-700 transition">Accueil</Link>
          <Link href="/produits" className="hover:text-blue-700 transition">Produits</Link>
          <Link href="/services" className="hover:text-blue-700 transition">Services</Link>
          <Link href="/contact" className="hover:text-blue-700 transition">Contact</Link>
          <Link
            href="/devis"
            className="ml-4 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
          >
            Devis gratuit
          </Link>
        </nav>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t px-4 pb-4 space-y-3 text-gray-700">
          <Link href="/" onClick={() => setOpen(false)} className="block hover:text-blue-700">Accueil</Link>
          <Link href="/produits" onClick={() => setOpen(false)} className="block hover:text-blue-700">Produits</Link>
          <Link href="/services" onClick={() => setOpen(false)} className="block hover:text-blue-700">Services</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="block hover:text-blue-700">Contact</Link>
          <Link
            href="/devis"
            onClick={() => setOpen(false)}
            className="inline-block w-full text-center mt-2 bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Devis gratuit
          </Link>
        </div>
      )}
    </header>
  )
}

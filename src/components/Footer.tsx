'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Logo + Social */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/chag-logo.png"
                alt="CHAG"
                width={36}
                height={36}
                className="rounded"
              />
              <span className="text-xl font-display font-bold">CHAG</span>
            </div>
            <p className="text-white/60 text-sm mb-4 font-body">
              Centro Hospitalario Animal Gratuito. El primer hospital veterinario gratuito de Chile.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/chag.cl/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-heart rounded-full flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/56956693126"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-green-600 rounded-full flex items-center justify-center transition-all"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Enlaces rápidos */}
          <div>
            <h4 className="font-display font-bold mb-4 text-lg">Enlaces</h4>
            <ul className="space-y-2 font-body">
              <li><Link href="/nosotros" className="text-white/60 hover:text-white text-sm transition-colors">Nosotros</Link></li>
              <li><Link href="/el-hospital" className="text-white/60 hover:text-white text-sm transition-colors">El Hospital</Link></li>
              <li><Link href="/como-apoyar" className="text-white/60 hover:text-white text-sm transition-colors">Cómo Apoyar</Link></li>
              <li><Link href="/alianza" className="text-white/60 hover:text-white text-sm transition-colors">Alianza</Link></li>
              <li><Link href="/blog" className="text-white/60 hover:text-white text-sm transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="font-display font-bold mb-4 text-lg">Legal</h4>
            <ul className="space-y-2 font-body">
              <li><span className="text-white/60 text-sm">Fundación CHAG</span></li>
              <li><span className="text-white/60 text-sm">Santiago, Chile</span></li>
              <li><Link href="/alianza" className="text-white/60 hover:text-white text-sm transition-colors">Alianza con TuSorteoLegal</Link></li>
              <li>
                <a href="https://tusorteolegal.cl" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-sm transition-colors">
                  tusorteolegal.cl
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contacto */}
          <div>
            <h4 className="font-display font-bold mb-4 text-lg">Contacto</h4>
            <ul className="space-y-3 font-body">
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <svg className="w-4 h-4 text-heart flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contacto@chag.cl
              </li>
              <li className="flex items-center gap-2 text-white/60 text-sm">
                <svg className="w-4 h-4 text-heart flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +569 5669 3126
              </li>
              <li>
                <Link href="/contacto" className="text-heart hover:text-heart-400 text-sm transition-colors font-medium">
                  Formulario de contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm font-body">
              &copy; {currentYear} CHAG - Centro Hospitalario Animal Gratuito. Todos los derechos reservados.
            </p>
            <div className="flex gap-4 font-body">
              <Link href="/contacto" className="text-white/40 hover:text-white text-sm transition-colors">
                Contacto
              </Link>
              <Link href="/alianza" className="text-white/40 hover:text-white text-sm transition-colors">
                Alianza
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

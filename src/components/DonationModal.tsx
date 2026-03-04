'use client'

import { useState, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface DonationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const [nombre, setNombre] = useState('')
  const [monto, setMonto] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setError('')

    if (!nombre.trim() || !monto.trim() || !email.trim()) {
      setError('Completa los campos obligatorios.')
      return
    }

    const montoNum = parseInt(monto.replace(/\D/g, ''), 10)
    if (isNaN(montoNum) || montoNum < 1000) {
      setError('El monto mínimo de donación es $1.000 CLP.')
      return
    }

    const text = `DONACIÓN CHAG: Nombre: ${nombre.trim()}, Monto: $${montoNum.toLocaleString('es-CL')} CLP, Email: ${email.trim()}, Teléfono: ${telefono.trim() || 'No proporcionado'}`
    const url = `https://wa.me/56984741253?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
    onClose()
    setNombre('')
    setMonto('')
    setEmail('')
    setTelefono('')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-navy/30 hover:text-navy transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-2xl font-display font-bold text-navy mb-1">Apoya a CHAG</h3>
            <p className="text-navy/50 font-body text-sm mb-6">
              Por ahora las donaciones se coordinan vía WhatsApp. Al enviar este formulario te contactaremos para confirmar tu aporte.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="don-nombre" className="block text-navy font-body text-sm font-medium mb-1">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="don-nombre"
                  required
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-navy placeholder-navy/30 focus:outline-none focus:border-heart focus:ring-1 focus:ring-heart transition-colors font-body text-sm"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="don-monto" className="block text-navy font-body text-sm font-medium mb-1">
                  Monto a donar en CLP *
                </label>
                <input
                  type="number"
                  id="don-monto"
                  required
                  min={1000}
                  value={monto}
                  onChange={(e) => setMonto(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-navy placeholder-navy/30 focus:outline-none focus:border-heart focus:ring-1 focus:ring-heart transition-colors font-body text-sm"
                  placeholder="Mínimo $1.000"
                />
              </div>

              <div>
                <label htmlFor="don-email" className="block text-navy font-body text-sm font-medium mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="don-email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-navy placeholder-navy/30 focus:outline-none focus:border-heart focus:ring-1 focus:ring-heart transition-colors font-body text-sm"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="don-telefono" className="block text-navy font-body text-sm font-medium mb-1">
                  Teléfono (opcional)
                </label>
                <input
                  type="tel"
                  id="don-telefono"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-navy placeholder-navy/30 focus:outline-none focus:border-heart focus:ring-1 focus:ring-heart transition-colors font-body text-sm"
                  placeholder="+569 1234 5678"
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm font-body text-center">{error}</p>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-[#E63946] hover:bg-[#d32f3c] text-white font-bold rounded-xl transition-all font-body shadow-lg shadow-[#E63946]/20 flex items-center justify-center gap-2"
              >
                Enviar por WhatsApp
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

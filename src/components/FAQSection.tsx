'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const faqs = [
  {
    q: '¿Qué es CHAG?',
    a: 'La fundación que construye el primer Hospital Público y Gratuito de Mascotas de Chile.'
  },
  {
    q: '¿Cómo puedo ayudar?',
    a: 'Apadrina consulta $3.000 / Ladrillo $5.000 / La Manada $2.000/mes / Un Día $15.000 / Empresarial desde $50.000.'
  },
  {
    q: '¿El 50% de los tickets va al hospital?',
    a: 'Sí. $2.500 de cada ticket de $5.000 va directo al hospital. Todo visible en nuestro dashboard.'
  },
  {
    q: 'Mi empresa quiere ser sponsor',
    a: 'Escríbenos a sandra@chag.cl para coordinar reunión y ver paquetes Bronce/Plata/Oro.'
  },
  {
    q: '¿Cómo sé que mi donación llega?',
    a: 'Dashboard público en tiempo real. Cada peso tiene destino visible. Transparencia total.'
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mb-4">
            Preguntas <span className="text-heart">Frecuentes</span>
          </h2>
          <p className="text-navy/60 font-body text-lg max-w-xl mx-auto">
            Todo lo que necesitas saber sobre CHAG y cómo puedes ayudar.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-5 font-display font-semibold text-navy flex justify-between items-center hover:bg-cta/5 transition-colors group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="pr-4 font-body font-semibold text-base">{faq.q}</span>
                <motion.svg
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5 flex-shrink-0 text-cta"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-navy/70 font-body text-sm leading-relaxed border-t border-gray-100 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href="/preguntas"
            className="inline-flex items-center gap-2 text-cta font-body font-semibold hover:gap-3 transition-all"
          >
            Ver todas las preguntas
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
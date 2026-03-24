'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const categorias = [
  {
    titulo: 'Sobre CHAG',
    preguntas: [
      { q: '¿Qué es CHAG?', a: 'La fundación que construye el primer Hospital Público y Gratuito de Mascotas de Chile.' },
      { q: '¿Quién está detrás de CHAG?', a: 'Fundación CHAG, constituida legalmente en Chile. Toda la documentación es pública y verificable.' },
      { q: '¿Dónde estará el hospital?', a: 'En Santiago, Chile. La ubicación exacta se anunciará una vez completada la etapa de financiamiento inicial.' },
    ]
  },
  {
    titulo: 'Cómo ayudar',
    preguntas: [
      { q: '¿Cómo puedo ayudar?', a: 'Apadrina consulta $3.000 / Ladrillo $5.000 / La Manada $2.000/mes / Un Día $15.000 / Empresarial desde $50.000.' },
      { q: '¿Qué es La Manada?', a: 'Es nuestra membresía mensual de $2.000. Eres miembro oficial del hospital y recibes actualizaciones exclusivas.' },
      { q: '¿Qué es un Ladrillo Fundador?', a: 'Con $5.000 tu nombre queda grabado en el muro del hospital como parte de su construcción.' },
      { q: 'Mi empresa quiere ser sponsor', a: 'Escríbenos a sandra@chag.cl para coordinar reunión y ver paquetes Bronce/Plata/Oro.' },
    ]
  },
  {
    titulo: 'Transparencia',
    preguntas: [
      { q: '¿El 50% de los tickets va al hospital?', a: 'Sí. $2.500 de cada ticket de $5.000 va directo al hospital. Todo visible en nuestro dashboard.' },
      { q: '¿Cómo sé que mi donación llega?', a: 'Dashboard público en tiempo real. Cada peso tiene destino visible. Transparencia total.' },
      { q: '¿Cómo sé que CHAG es legal?', a: 'Fundación constituida legalmente en Chile. Toda la documentación es pública y verificable en el Registro Civil.' },
    ]
  },
  {
    titulo: 'Contacto',
    preguntas: [
      { q: '¿Cómo puedo comunicarme?', a: 'WhatsApp: +56 9 5669 3126 / Email: contacto@chag.cl. Nuestro asistente está disponible 24/7 por WhatsApp.' },
      { q: '¿Tienen redes sociales?', a: 'Sí, encuéntranos en Instagram y TikTok como @chag.cl' },
    ]
  },
]

export default function PreguntasPage() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <main className="min-h-screen">
      {/* Hero — matches /nosotros style */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block px-4 py-1.5 bg-heart/20 border border-heart/30 rounded-full text-heart text-sm font-body font-medium mb-6">
              Ayuda y soporte
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Preguntas <span className="text-heart">Frecuentes</span>
            </h1>
            <p className="text-white/70 text-lg font-body max-w-2xl mx-auto">
              Todo lo que necesitas saber sobre CHAG, cómo ayudar y cómo funciona el hospital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          {categorias.map((cat, catIdx) => (
            <motion.div
              key={cat.titulo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: catIdx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-14"
            >
              {/* Category heading with left accent bar */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-cta rounded-full flex-shrink-0" />
                <h2 className="text-2xl font-display font-bold text-navy">{cat.titulo}</h2>
              </div>

              <div className="space-y-3">
                {cat.preguntas.map((faq, i) => {
                  const key = cat.titulo + i
                  return (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                    >
                      <button
                        className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-cta/5 transition-colors"
                        onClick={() => setOpen(open === key ? null : key)}
                      >
                        <span className="pr-4 font-body font-semibold text-navy text-base">{faq.q}</span>
                        <motion.svg
                          animate={{ rotate: open === key ? 180 : 0 }}
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
                        {open === key && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-5 pt-4 text-navy/70 font-body text-sm leading-relaxed border-t border-gray-100">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto px-4 text-center"
        >
          <h2 className="text-3xl font-display font-bold text-navy mb-4">
            ¿Tienes más <span className="text-heart">preguntas</span>?
          </h2>
          <p className="text-navy/60 font-body mb-8">
            Contáctanos directamente por WhatsApp o email — respondemos a la brevedad.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contacto"
              className="px-6 py-3 bg-cta hover:bg-cta/90 text-white font-body font-bold rounded-full transition-all shadow-lg shadow-cta/30 hover:scale-105"
            >
              Contáctanos
            </Link>
            <Link
              href="/como-apoyar"
              className="px-6 py-3 border border-navy/20 text-navy hover:bg-navy/5 font-body font-semibold rounded-full transition-all"
            >
              Cómo apoyar
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  )
}

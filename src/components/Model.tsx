'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: 1,
    title: 'Compras un ticket',
    description: 'Adquieres un boleto en TuSorteoLegal.cl y participas por departamentos y una camioneta.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      </svg>
    ),
    color: 'bg-navy',
  },
  {
    number: 2,
    title: 'Parte va a CHAG',
    description: 'Un porcentaje de cada ticket vendido se destina directamente al fondo de construcción del hospital.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: 'bg-heart',
  },
  {
    number: 3,
    title: 'Se construye el hospital',
    description: 'Con los fondos recaudados, hacemos realidad el primer hospital veterinario gratuito de Chile.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: 'bg-cta',
  },
]

export default function Model() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mb-4">
            Nuestro <span className="text-heart">Modelo</span>
          </h2>
          <p className="text-navy/60 font-body text-lg max-w-2xl mx-auto">
            Un ecosistema donde todos ganan: tú participas por premios increíbles y los animales reciben atención médica gratuita.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative"
            >
              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-navy/20 to-navy/5 -translate-x-1/2 z-0" />
              )}

              <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-xl transition-shadow">
                <div className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-6`}>
                  {step.icon}
                </div>

                <div className="text-sm font-body font-bold text-navy/30 mb-2">Paso {step.number}</div>
                <h3 className="text-xl font-display font-bold text-navy mb-3">{step.title}</h3>
                <p className="text-navy/60 font-body">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

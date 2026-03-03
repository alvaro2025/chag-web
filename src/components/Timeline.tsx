'use client'

import { motion } from 'framer-motion'

const phases = [
  {
    number: 1,
    title: 'Campaña de Recaudación',
    description: 'Venta de tickets a través de TuSorteoLegal y difusión del proyecto.',
    status: 'active',
  },
  {
    number: 2,
    title: 'Adquisición del Terreno',
    description: 'Compra y habilitación del terreno para la construcción del hospital.',
    status: 'upcoming',
  },
  {
    number: 3,
    title: 'Diseño y Permisos',
    description: 'Diseño arquitectónico, obtención de permisos municipales y de edificación.',
    status: 'upcoming',
  },
  {
    number: 4,
    title: 'Construcción',
    description: 'Inicio de obras de construcción del hospital veterinario.',
    status: 'upcoming',
  },
  {
    number: 5,
    title: 'Equipamiento',
    description: 'Adquisición de equipos médicos, insumos y mobiliario clínico.',
    status: 'upcoming',
  },
  {
    number: 6,
    title: 'Apertura',
    description: 'Inauguración y puesta en marcha del primer hospital veterinario gratuito de Chile.',
    status: 'upcoming',
  },
]

export default function Timeline() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mb-4">
            Hoja de <span className="text-heart">Ruta</span>
          </h2>
          <p className="text-navy/60 font-body text-lg max-w-2xl mx-auto">
            Nuestro plan para hacer realidad el hospital, fase por fase.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 md:-translate-x-px" />

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className={`bg-white rounded-xl border p-5 shadow-sm ${
                    phase.status === 'active'
                      ? 'border-heart/30 shadow-heart/10'
                      : 'border-gray-100'
                  }`}>
                    <div className={`text-xs font-body font-bold mb-1 ${
                      phase.status === 'active' ? 'text-heart' : 'text-navy/30'
                    }`}>
                      FASE {phase.number} {phase.status === 'active' && '- EN CURSO'}
                    </div>
                    <h3 className="text-lg font-display font-bold text-navy mb-1">{phase.title}</h3>
                    <p className="text-navy/60 font-body text-sm">{phase.description}</p>
                  </div>
                </div>

                {/* Circle */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 flex-shrink-0 z-10">
                  <div className={`w-4 h-4 rounded-full border-4 ${
                    phase.status === 'active'
                      ? 'bg-heart border-heart/30 shadow-lg shadow-heart/30'
                      : 'bg-white border-gray-300'
                  }`} />
                </div>

                {/* Empty spacer for opposite side */}
                <div className="hidden md:block flex-1 md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

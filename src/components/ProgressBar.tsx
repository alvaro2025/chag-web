'use client'

import { motion } from 'framer-motion'

const SOLD = 150
const GOAL = 50000

export default function ProgressBar() {
  const percentage = (SOLD / GOAL) * 100

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-3">
            Meta de Recaudación
          </h2>
          <p className="text-navy/60 font-body text-lg">
            Cada ticket vendido en TuSorteoLegal nos acerca al hospital
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8"
        >
          <div className="flex justify-between items-end mb-4">
            <div>
              <p className="text-sm text-navy/50 font-body mb-1">Tickets vendidos</p>
              <p className="text-4xl font-display font-bold text-navy">
                {SOLD.toLocaleString('es-CL')}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-navy/50 font-body mb-1">Meta</p>
              <p className="text-4xl font-display font-bold text-navy/30">
                {GOAL.toLocaleString('es-CL')}
              </p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full h-6 bg-gray-100 rounded-full overflow-hidden mb-3">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${Math.max(percentage, 1)}%` }}
              transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="h-full bg-gradient-to-r from-heart to-cta rounded-full relative"
            >
              <div className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-bold text-white font-body">
                {percentage.toFixed(1)}%
              </div>
            </motion.div>
          </div>

          <p className="text-center text-navy/50 text-sm font-body">
            Faltan <strong className="text-navy">{(GOAL - SOLD).toLocaleString('es-CL')}</strong> tickets para alcanzar la meta
          </p>
        </motion.div>
      </div>
    </section>
  )
}

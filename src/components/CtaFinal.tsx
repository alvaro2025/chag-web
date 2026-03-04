'use client'

import { motion } from 'framer-motion'
import CtaButtons from './CtaButtons'

export default function CtaFinal() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(230,57,70,0.15),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(34,197,94,0.1),_transparent_60%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
            Juntos podemos cambiar la vida de <span className="text-heart">miles de animales</span>
          </h2>
          <p className="text-white/60 font-body text-lg mb-10 max-w-2xl mx-auto">
            Cada ticket que compras nos acerca un paso más al primer hospital veterinario gratuito de Chile.
            Tu participación tiene doble impacto: podrías ganar un premio increíble y ayudas a los animales que más lo necesitan.
          </p>

          <CtaButtons size="large" />
        </motion.div>
      </div>
    </section>
  )
}

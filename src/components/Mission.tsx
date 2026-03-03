'use client'

import { motion } from 'framer-motion'

export default function Mission() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-heart/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-1.5 bg-heart/10 rounded-full text-heart text-sm font-body font-semibold mb-6">
            Nuestra Misión
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-navy mb-8 leading-tight">
            Un sueño que nace del <span className="text-heart">corazón</span>
          </h2>

          <blockquote className="text-xl md:text-2xl text-navy/70 font-body leading-relaxed max-w-3xl mx-auto">
            &ldquo;Chag nace del sueño de que todos los animales merezcan atención médica,
            independiente de si su familia puede pagarlo.
            <span className="text-heart font-semibold"> Entre todos podemos hacer realidad
            el primer hospital veterinario gratuito de Chile.</span>&rdquo;
          </blockquote>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-heart to-cta mx-auto mt-8 rounded-full"
          />
        </motion.div>
      </div>
    </section>
  )
}

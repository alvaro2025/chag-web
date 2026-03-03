'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function AnimatedCounter() {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const target = 250000

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const duration = 2500
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(eased * target)

      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView])

  return (
    <section ref={ref} className="py-20 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(230,57,70,0.1),_transparent_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-6xl md:text-8xl font-display font-bold text-white mb-4">
            +{count.toLocaleString('es-CL')}
          </div>
          <p className="text-xl md:text-2xl text-white/70 font-body">
            familias en Chile <span className="text-heart font-semibold">sin acceso a atención veterinaria</span> hoy
          </p>
          <p className="text-white/40 text-sm mt-4 font-body">
            Fuente: Estimación basada en datos del INE y Colegio Médico Veterinario de Chile
          </p>
        </motion.div>
      </div>
    </section>
  )
}

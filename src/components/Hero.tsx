'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import CtaButtons from './CtaButtons'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  type: 'paw' | 'heart'
}

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 16 + 10,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      type: i % 2 === 0 ? 'paw' : 'heart',
    }))
    setParticles(newParticles)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{ objectFit: 'cover', width: '100%', height: '100%', position: 'absolute' }}
      >
        <source src="/images/video%20hospital%20CHAG.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/70 to-navy/90" />

      {/* Background logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="/images/foto%20de%20logo%20fondo.png"
          alt=""
          className="w-[500px] max-w-[80vw] opacity-10"
        />
      </div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute pointer-events-none select-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            fontSize: particle.size,
            opacity: 0.15,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, Math.sin(particle.id) * 20, 0],
            opacity: [0.1, 0.25, 0.1],
            rotate: [0, particle.type === 'paw' ? 15 : -15, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        >
          {particle.type === 'paw' ? '\uD83D\uDC3E' : '\u2764\uFE0F'}
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 bg-heart/20 border border-heart/30 rounded-full text-heart text-sm font-body font-medium mb-6">
            Proyecto Social Chile
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight text-white">
            El primer hospital veterinario{' '}
            <span className="text-heart">gratuito</span>{' '}
            de Chile
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto font-body font-light"
        >
          Porque todos los animales merecen atención médica, sin importar la situación económica de su familia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <CtaButtons size="large" />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

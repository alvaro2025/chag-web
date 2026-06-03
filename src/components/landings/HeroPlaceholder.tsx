'use client'

import { motion } from 'framer-motion'

export default function HeroPlaceholder() {
  return (
    <motion.section
      initial={{}}
      className="w-full min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 bg-gray-100"
    >
      {/* TODO E0.11: título principal */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 text-center mb-4">
        {/* TODO: definir en E0.11 */}
      </h1>

      {/* TODO E0.11: subtítulo */}
      <p className="text-lg md:text-xl text-gray-500 text-center max-w-2xl">
        {/* TODO: definir en E0.11 */}
      </p>
    </motion.section>
  )
}

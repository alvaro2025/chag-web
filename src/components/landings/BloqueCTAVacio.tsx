'use client'

import { motion } from 'framer-motion'

export default function BloqueCTAVacio() {
  return (
    <motion.section
      initial={{}}
      className="w-full py-16 px-4 bg-white flex flex-col items-center gap-6"
    >
      {/* TODO E0.11: texto previo al CTA */}
      <div className="bg-gray-200 h-8 w-1/2 rounded" />
      <div className="bg-gray-200 h-4 w-1/3 rounded" />

      {/* TODO E0.11: definir label · acción · estilo del botón */}
      <button
        disabled
        className="bg-gray-200 text-gray-400 px-10 py-4 rounded-lg text-lg font-semibold cursor-not-allowed"
      >
        {/* TODO: copy botón en E0.11 */}
      </button>
    </motion.section>
  )
}

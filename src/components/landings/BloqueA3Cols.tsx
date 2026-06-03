'use client'

import { motion } from 'framer-motion'

export default function BloqueA3Cols() {
  return (
    <motion.section
      initial={{}}
      className="w-full py-16 px-4 bg-white"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((col) => (
          <div key={col} className="flex flex-col items-center gap-4">
            {/* TODO E0.11: ícono */}
            <div className="bg-gray-200 w-16 h-16 rounded-full" />

            {/* TODO E0.11: título columna */}
            <div className="bg-gray-200 h-6 w-3/4 rounded" />

            {/* TODO E0.11: descripción columna */}
            <div className="bg-gray-200 h-4 w-full rounded" />
            <div className="bg-gray-200 h-4 w-5/6 rounded" />
          </div>
        ))}
      </div>
    </motion.section>
  )
}

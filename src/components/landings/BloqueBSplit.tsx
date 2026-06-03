'use client'

import { motion } from 'framer-motion'

export default function BloqueBSplit() {
  return (
    <motion.section
      initial={{}}
      className="w-full py-16 px-4 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Texto */}
        <div className="flex-1 flex flex-col gap-4">
          {/* TODO E0.11: título bloque */}
          <div className="bg-gray-200 h-8 w-2/3 rounded" />

          {/* TODO E0.11: párrafo */}
          <div className="bg-gray-200 h-4 w-full rounded" />
          <div className="bg-gray-200 h-4 w-5/6 rounded" />
          <div className="bg-gray-200 h-4 w-4/6 rounded" />
        </div>

        {/* Imagen placeholder */}
        <div className="flex-1">
          <div className="bg-gray-200 aspect-video w-full rounded-lg" />
          {/* TODO E0.11: reemplazar con imagen real */}
        </div>
      </div>
    </motion.section>
  )
}

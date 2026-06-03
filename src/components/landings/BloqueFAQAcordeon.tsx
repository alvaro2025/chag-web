'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const FAQ_PLACEHOLDERS = [1, 2, 3, 4]

export default function BloqueFAQAcordeon() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <motion.section
      initial={{}}
      className="w-full py-16 px-4 bg-gray-50"
    >
      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        {/* TODO E0.11: título sección FAQ */}
        <div className="bg-gray-200 h-8 w-1/3 rounded mb-6" />

        {FAQ_PLACEHOLDERS.map((item) => (
          <div key={item} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setOpen(open === item ? null : item)}
              className="w-full flex justify-between items-center px-6 py-4 bg-white text-left"
            >
              <div className="bg-gray-200 h-4 w-3/4 rounded" />
              <span className="text-gray-400 text-xl">{open === item ? '−' : '+'}</span>
            </button>

            {open === item && (
              <div className="px-6 py-4 bg-white border-t border-gray-100">
                <div className="bg-gray-100 h-4 w-full rounded mb-2" />
                <div className="bg-gray-100 h-4 w-5/6 rounded" />
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  )
}

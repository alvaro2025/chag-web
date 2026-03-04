'use client'

import { useState } from 'react'
import DonationModal from './DonationModal'

interface CtaButtonsProps {
  size?: 'normal' | 'large'
  className?: string
}

export default function CtaButtons({ size = 'normal', className = '' }: CtaButtonsProps) {
  const [showDonation, setShowDonation] = useState(false)

  const baseClasses = size === 'large'
    ? 'px-8 py-4 font-bold text-lg rounded-full transition-all duration-300 font-body inline-flex items-center justify-center gap-2'
    : 'px-6 py-3 font-bold rounded-full transition-all duration-300 font-body inline-flex items-center justify-center gap-2'

  return (
    <>
      <div className={`flex flex-col sm:flex-row gap-4 justify-center ${className}`}>
        <a
          href="https://tusorteolegal.cl"
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseClasses} bg-[#22C55E] hover:bg-[#16a34a] text-white shadow-lg shadow-[#22C55E]/30 hover:shadow-[#22C55E]/50 hover:scale-105`}
        >
          Comprar Ticket
          <span role="img" aria-label="ticket">&#127915;</span>
        </a>
        <button
          onClick={() => setShowDonation(true)}
          className={`${baseClasses} bg-[#E63946] hover:bg-[#d32f3c] text-white shadow-lg shadow-[#E63946]/30 hover:shadow-[#E63946]/50 hover:scale-105`}
        >
          Donar al Hospital
          <span role="img" aria-label="heart">&#10084;&#65039;</span>
        </button>
      </div>
      <DonationModal isOpen={showDonation} onClose={() => setShowDonation(false)} />
    </>
  )
}

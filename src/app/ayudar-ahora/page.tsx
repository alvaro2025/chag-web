import type { Metadata } from 'next'
import HeroPlaceholder from '@/components/landings/HeroPlaceholder'
import BloqueA3Cols from '@/components/landings/BloqueA3Cols'
import BloqueBSplit from '@/components/landings/BloqueBSplit'
import BloqueCTAVacio from '@/components/landings/BloqueCTAVacio'
import BloqueFAQAcordeon from '@/components/landings/BloqueFAQAcordeon'
import Footer from '@/components/Footer'

// TODO: definir en E0.11
export const metadata: Metadata = {
  title: 'TODO: definir en E0.11',
  description: 'TODO: definir en E0.11',
}

export default function AyudarAhoraPage() {
  return (
    <main className="min-h-screen">
      <HeroPlaceholder />
      <BloqueA3Cols />
      <BloqueBSplit />
      <BloqueCTAVacio />
      <BloqueFAQAcordeon />
      <Footer />
    </main>
  )
}

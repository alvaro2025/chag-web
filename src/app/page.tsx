import Hero from '@/components/Hero'
import AnimatedCounter from '@/components/AnimatedCounter'
import ProgressBar from '@/components/ProgressBar'
import Mission from '@/components/Mission'
import Model from '@/components/Model'
import Timeline from '@/components/Timeline'
import Principles from '@/components/Principles'
import CtaFinal from '@/components/CtaFinal'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CHAG - Centro Hospitalario Animal Gratuito',
  description: 'El primer hospital veterinario gratuito de Chile. Porque todos los animales merecen atención médica, independiente de la situación económica de su familia.',
  alternates: {
    canonical: 'https://chag.cl',
  },
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CHAG - Centro Hospitalario Animal Gratuito',
    description: 'El primer hospital veterinario gratuito de Chile.',
    url: 'https://chag.cl',
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <AnimatedCounter />
      <ProgressBar />
      <Mission />
      <Model />
      <Timeline />
      <Principles />
      <CtaFinal />
    </main>
  )
}

import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export const metadata: Metadata = {
  metadataBase: new URL('https://chag.cl'),
  title: {
    default: 'CHAG - Centro Hospitalario Animal Gratuito',
    template: '%s | CHAG',
  },
  description: 'El primer hospital veterinario gratuito de Chile. Porque todos los animales merecen atención médica, independiente de la situación económica de su familia.',
  keywords: 'hospital veterinario gratuito, chile, animales, veterinario gratis, CHAG, fundación animal',
  authors: [{ name: 'CHAG' }],
verification: {
  google: 'QWUh4rZDZ1cp-DD78nc5yInfbUBNpUB2Mvfy0taCJLo',
  },
  openGraph: {
    title: 'CHAG - Centro Hospitalario Animal Gratuito',
    description: 'El primer hospital veterinario gratuito de Chile.',
    url: 'https://chag.cl',
    siteName: 'CHAG',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CHAG - Centro Hospitalario Animal Gratuito',
    description: 'El primer hospital veterinario gratuito de Chile.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="font-body antialiased">
        <Navigation />
        <div className="pt-16">
          {children}
        </div>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}

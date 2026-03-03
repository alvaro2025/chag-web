import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contáctanos por WhatsApp, email o formulario. CHAG - Centro Hospitalario Animal Gratuito.',
  alternates: { canonical: 'https://chag.cl/contacto' },
}

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

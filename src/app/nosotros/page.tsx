import { Metadata } from 'next'
import CtaButtons from '@/components/CtaButtons'

export const metadata: Metadata = {
  title: 'Nosotros',
  description: 'Conoce la historia, el equipo y los valores detrás de CHAG, el primer hospital veterinario gratuito de Chile.',
  alternates: { canonical: 'https://chag.cl/nosotros' },
}

const valores = [
  {
    title: 'Empatía',
    description: 'Entendemos el dolor de no poder darle atención médica a un ser querido. Por eso existimos.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Accesibilidad',
    description: 'La atención veterinaria no puede ser un lujo. Trabajamos para que sea un derecho accesible para todos.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: 'Responsabilidad',
    description: 'Cada recurso se administra con máximo cuidado. Rendimos cuentas de cada peso recaudado.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
]

export default function Nosotros() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1.5 bg-heart/20 border border-heart/30 rounded-full text-heart text-sm font-body font-medium mb-6">
            Sobre CHAG
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Quiénes <span className="text-heart">Somos</span>
          </h1>
          <p className="text-white/70 text-lg font-body max-w-2xl mx-auto">
            Un equipo comprometido con hacer realidad el primer hospital veterinario gratuito de Chile.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-navy mb-8">Nuestra Historia</h2>
          <div className="space-y-4 text-navy/70 font-body leading-relaxed">
            <p>
              CHAG nace de una realidad dolorosa que vemos todos los días en Chile: miles de familias que aman
              a sus mascotas pero no pueden costear su atención médica. Perros y gatos que sufren enfermedades
              tratables, pero que no reciben atención simplemente porque sus familias no tienen los recursos.
            </p>
            <p>
              Ante esta realidad, decidimos actuar. En alianza con <strong className="text-navy">TuSorteoLegal</strong>,
              creamos un modelo innovador donde la compra de tickets de sorteo financia directamente la
              construcción del primer hospital veterinario completamente gratuito de Chile.
            </p>
            <p>
              No somos solo un proyecto: somos un movimiento de personas que creen que la compasión
              por los animales no debería tener precio. Cada ticket vendido es un paso más hacia un
              Chile donde ningún animal quede sin atención médica por falta de recursos.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-navy mb-12 text-center">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valores.map((valor) => (
              <div key={valor.title} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
                <div className="w-16 h-16 bg-heart/5 rounded-2xl flex items-center justify-center text-heart mx-auto mb-6">
                  {valor.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-navy mb-3">{valor.title}</h3>
                <p className="text-navy/60 font-body text-sm">{valor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-navy mb-4">
            Sé parte del cambio
          </h2>
          <p className="text-navy/60 font-body mb-8">
            Únete al movimiento que está transformando la vida de los animales en Chile.
          </p>
          <CtaButtons />
        </div>
      </section>
    </main>
  )
}

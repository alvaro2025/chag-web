import { Metadata } from 'next'
import CtaButtons from '@/components/CtaButtons'

export const metadata: Metadata = {
  title: 'Alianza',
  description: 'Conoce el ecosistema CHAG + TuSorteoLegal: cómo la compra de tickets de sorteo financia la construcción del hospital veterinario gratuito.',
  alternates: { canonical: 'https://chag.cl/alianza' },
}

export default function Alianza() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1.5 bg-heart/20 border border-heart/30 rounded-full text-heart text-sm font-body font-medium mb-6">
            Ecosistema
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            La <span className="text-heart">Alianza</span>
          </h1>
          <p className="text-white/70 text-lg font-body max-w-2xl mx-auto">
            CHAG y TuSorteoLegal trabajan juntos en un modelo donde todos ganan: tú participas por premios y los animales reciben atención médica gratuita.
          </p>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-navy mb-12 text-center">
            Cómo funciona el <span className="text-heart">ecosistema</span>
          </h2>

          {/* Visual flow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* TuSorteoLegal */}
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8 text-center">
              <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-navy mb-2">TuSorteoLegal</h3>
              <p className="text-navy/60 font-body text-sm">
                Plataforma de sorteos legales donde puedes ganar departamentos y una camioneta JAC T8 comprando boletos desde $1.500 CLP.
              </p>
              <a
                href="https://tusorteolegal.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-navy font-body font-semibold text-sm hover:text-heart transition-colors"
              >
                Visitar sitio &rarr;
              </a>
            </div>

            {/* Arrow / Connection */}
            <div className="flex items-center justify-center">
              <div className="bg-gradient-to-r from-navy to-heart rounded-2xl p-8 text-center text-white w-full">
                <div className="text-3xl mb-3">&harr;</div>
                <h3 className="text-lg font-display font-bold mb-2">Alianza</h3>
                <p className="text-white/80 font-body text-sm">
                  Un porcentaje de cada ticket vendido se destina al fondo de construcción del hospital veterinario CHAG.
                </p>
              </div>
            </div>

            {/* CHAG */}
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8 text-center">
              <div className="w-16 h-16 bg-heart rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-navy mb-2">CHAG</h3>
              <p className="text-navy/60 font-body text-sm">
                Centro Hospitalario Animal Gratuito. Los fondos recaudados financian directamente la construcción del hospital veterinario.
              </p>
            </div>
          </div>

          {/* Beneficios */}
          <h2 className="text-3xl font-display font-bold text-navy mb-8 text-center">
            Todos <span className="text-cta">ganan</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-cta/5 border border-cta/20 rounded-2xl p-8">
              <h3 className="text-xl font-display font-bold text-navy mb-4">
                Para los <span className="text-cta">participantes</span>
              </h3>
              <ul className="space-y-3 font-body text-navy/70 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Participas por premios reales: 3 departamentos y una camioneta
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Tu compra genera impacto social directo
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Sorteo legal, certificado ante notario público
                </li>
              </ul>
            </div>

            <div className="bg-heart/5 border border-heart/20 rounded-2xl p-8">
              <h3 className="text-xl font-display font-bold text-navy mb-4">
                Para los <span className="text-heart">animales</span>
              </h3>
              <ul className="space-y-3 font-body text-navy/70 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-heart flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Atención veterinaria gratuita para quienes no pueden pagarla
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-heart flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Hospital equipado con tecnología de primer nivel
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-heart flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Financiamiento sostenible a largo plazo
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-4">Sé parte del ecosistema</h2>
          <p className="text-white/60 font-body mb-8">
            Compra un ticket, gana premios y ayuda a construir el hospital.
          </p>
          <CtaButtons />
        </div>
      </section>
    </main>
  )
}

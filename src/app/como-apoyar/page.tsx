import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cómo Apoyar',
  description: 'Descubre las 3 formas de apoyar a CHAG: compra un ticket de sorteo, comparte el proyecto o dona directamente por WhatsApp.',
  alternates: { canonical: 'https://chag.cl/como-apoyar' },
}

const formas = [
  {
    number: 1,
    title: 'Compra un Ticket de Sorteo',
    description: 'Adquiere un boleto en TuSorteoLegal.cl. Participas por premios increíbles (departamentos y camioneta) y una parte del valor va directamente al fondo de construcción del hospital.',
    cta: 'Ir a TuSorteoLegal',
    ctaLink: 'https://tusorteolegal.cl',
    ctaExternal: true,
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      </svg>
    ),
    color: 'bg-cta',
    highlight: true,
  },
  {
    number: 2,
    title: 'Comparte el Proyecto',
    description: 'Comparte CHAG en tus redes sociales, con tu familia y amigos. Cada persona que conoce el proyecto es un potencial apoyo para los animales que más lo necesitan.',
    cta: 'Compartir por WhatsApp',
    ctaLink: 'https://wa.me/?text=Conoce%20CHAG,%20el%20primer%20hospital%20veterinario%20gratuito%20de%20Chile%20%F0%9F%90%BE%20https://chag.cl',
    ctaExternal: true,
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
    color: 'bg-navy',
    highlight: false,
  },
  {
    number: 3,
    title: 'Donación Directa',
    description: 'Si deseas hacer una donación directa al proyecto, contáctanos por WhatsApp. Cada aporte, por pequeño que sea, nos acerca al objetivo de construir el hospital.',
    cta: 'Donar por WhatsApp',
    ctaLink: 'https://wa.me/56984741253?text=Hola,%20quiero%20hacer%20una%20donaci%C3%B3n%20a%20CHAG',
    ctaExternal: true,
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: 'bg-heart',
    highlight: false,
  },
]

export default function ComoApoyar() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1.5 bg-cta/20 border border-cta/30 rounded-full text-cta text-sm font-body font-medium mb-6">
            Participa
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Cómo <span className="text-cta">Apoyar</span>
          </h1>
          <p className="text-white/70 text-lg font-body max-w-2xl mx-auto">
            Existen 3 formas de contribuir al primer hospital veterinario gratuito de Chile. Elige la que más te acomode.
          </p>
        </div>
      </section>

      {/* 3 formas */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="space-y-8">
            {formas.map((forma) => (
              <div
                key={forma.number}
                className={`rounded-2xl border p-8 md:p-10 ${
                  forma.highlight
                    ? 'border-cta/30 bg-cta/5 shadow-lg shadow-cta/10'
                    : 'border-gray-100 bg-white shadow-sm'
                }`}
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className={`${forma.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white flex-shrink-0`}>
                    {forma.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-body font-bold text-navy/30 mb-1">Forma {forma.number}</div>
                    <h2 className="text-2xl font-display font-bold text-navy mb-3">{forma.title}</h2>
                    <p className="text-navy/60 font-body mb-6">{forma.description}</p>
                    <a
                      href={forma.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-6 py-3 font-bold rounded-full transition-all font-body ${
                        forma.highlight
                          ? 'bg-cta hover:bg-cta-600 text-white shadow-lg shadow-cta/30'
                          : 'bg-navy hover:bg-navy-600 text-white'
                      }`}
                    >
                      {forma.cta}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

                {forma.highlight && (
                  <div className="mt-6 pt-6 border-t border-cta/20">
                    <p className="text-navy/50 font-body text-sm">
                      Al comprar un ticket en TuSorteoLegal, participas por 3 departamentos y una Camioneta JAC T8 Azul.
                      Boletos desde $1.500 CLP.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-navy mb-10 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            {[
              { q: '¿Cuánto de mi ticket va al hospital?', a: 'Un porcentaje de cada ticket vendido en TuSorteoLegal se destina directamente al fondo de construcción del hospital CHAG. Los montos exactos se publican en nuestros informes de transparencia.' },
              { q: '¿Puedo donar sin comprar un ticket?', a: 'Sí, puedes hacer donaciones directas contactándonos por WhatsApp al +569 8474 1253. Aceptamos transferencias bancarias.' },
              { q: '¿Cómo sé que mi aporte se usa correctamente?', a: 'Publicamos informes periódicos de transparencia en nuestro sitio web y redes sociales, detallando ingresos, gastos y avance del proyecto.' },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="text-lg font-display font-bold text-navy mb-2">{faq.q}</h3>
                <p className="text-navy/60 font-body text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

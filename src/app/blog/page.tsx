import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Noticias, artículos y actualizaciones del proyecto CHAG, el primer hospital veterinario gratuito de Chile.',
  alternates: { canonical: 'https://chag.cl/blog' },
}

const articles = [
  {
    slug: 'por-que-chile-necesita-hospital-veterinario-gratuito',
    title: 'Por qué Chile necesita un hospital veterinario gratuito',
    excerpt: 'Más de 250.000 familias chilenas no pueden costear atención veterinaria para sus mascotas. Analizamos la realidad y la solución que proponemos desde CHAG.',
    date: '20 de febrero de 2026',
    readTime: '6 min',
    category: 'Impacto Social',
  },
  {
    slug: 'como-funciona-modelo-sorteo-solidario',
    title: 'Cómo funciona el modelo de sorteo solidario',
    excerpt: 'Explicamos paso a paso cómo la alianza entre CHAG y TuSorteoLegal permite financiar la construcción del hospital mientras los participantes ganan premios.',
    date: '5 de febrero de 2026',
    readTime: '4 min',
    category: 'Modelo',
  },
  {
    slug: 'historias-que-inspiran-animales-necesitan-ayuda',
    title: 'Historias que inspiran: los animales que necesitan nuestra ayuda',
    excerpt: 'Conoce las historias reales de familias y animales que nos motivan a seguir trabajando por hacer realidad el primer hospital veterinario gratuito de Chile.',
    date: '15 de enero de 2026',
    readTime: '5 min',
    category: 'Historias',
  },
]

export default function Blog() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="text-heart">Blog</span>
          </h1>
          <p className="text-white/70 text-lg font-body max-w-2xl mx-auto">
            Noticias, artículos y actualizaciones del proyecto CHAG.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 hover:shadow-md hover:border-gray-200 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-heart/10 text-heart text-xs font-body font-bold rounded-full">
                    {article.category}
                  </span>
                  <span className="text-navy/40 text-sm font-body">{article.date}</span>
                  <span className="text-navy/40 text-sm font-body">{article.readTime} lectura</span>
                </div>

                <h2 className="text-xl md:text-2xl font-display font-bold text-navy mb-3">
                  {article.title}
                </h2>

                <p className="text-navy/60 font-body mb-4">{article.excerpt}</p>

                <span className="text-heart hover:text-heart-600 transition-colors font-body font-semibold text-sm inline-flex items-center gap-1 cursor-default">
                  Leer artículo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-navy/40 font-body">
              Próximamente más artículos. Síguenos en redes sociales para mantenerte informado.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

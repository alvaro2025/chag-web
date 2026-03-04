import { Metadata } from 'next'
import CtaButtons from '@/components/CtaButtons'

export const metadata: Metadata = {
  title: 'El Hospital',
  description: 'Conoce el proyecto del primer hospital veterinario gratuito de Chile. Timeline, ubicación futura en Santiago y servicios planificados.',
  alternates: { canonical: 'https://chag.cl/el-hospital' },
}

const servicios = [
  { name: 'Consultas generales', icon: '🩺' },
  { name: 'Vacunación', icon: '💉' },
  { name: 'Esterilización', icon: '✂️' },
  { name: 'Cirugías de urgencia', icon: '🏥' },
  { name: 'Laboratorio clínico', icon: '🔬' },
  { name: 'Farmacia veterinaria', icon: '💊' },
  { name: 'Radiografías', icon: '📷' },
  { name: 'Hospitalización', icon: '🛏️' },
]

const fases = [
  { fase: 1, title: 'Campaña de Recaudación', status: 'En curso', description: 'Venta de tickets y difusión del proyecto a nivel nacional.' },
  { fase: 2, title: 'Adquisición del Terreno', status: 'Próximamente', description: 'Compra del terreno en la Región Metropolitana de Santiago.' },
  { fase: 3, title: 'Diseño Arquitectónico', status: 'Próximamente', description: 'Diseño del hospital con estándares veterinarios internacionales.' },
  { fase: 4, title: 'Permisos y Licencias', status: 'Próximamente', description: 'Obtención de permisos de edificación y patentes municipales.' },
  { fase: 5, title: 'Construcción', status: 'Próximamente', description: 'Edificación del hospital, áreas de atención y espacios comunes.' },
  { fase: 6, title: 'Equipamiento e Inauguración', status: 'Próximamente', description: 'Instalación de equipos médicos y apertura al público.' },
]

export default function ElHospital() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1.5 bg-heart/20 border border-heart/30 rounded-full text-heart text-sm font-body font-medium mb-6">
            El Proyecto
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            El <span className="text-heart">Hospital</span>
          </h1>
          <p className="text-white/70 text-lg font-body max-w-2xl mx-auto">
            Un centro de atención veterinaria de primer nivel, completamente gratuito, ubicado en Santiago de Chile.
          </p>
        </div>
      </section>

      {/* Visión */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-navy mb-8">Nuestra Visión</h2>
          <div className="space-y-4 text-navy/70 font-body leading-relaxed">
            <p>
              El hospital veterinario gratuito CHAG será un centro de atención integral para animales de compañía,
              diseñado con los más altos estándares de medicina veterinaria moderna. Contará con áreas de consulta,
              cirugía, laboratorio, farmacia y hospitalización.
            </p>
            <p>
              Ubicado en la Región Metropolitana de Santiago, será accesible para las comunas con mayor
              necesidad de atención veterinaria gratuita. El objetivo es atender a miles de animales al año,
              priorizando familias en situación de vulnerabilidad económica.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-navy mb-12 text-center">Servicios Planificados</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {servicios.map((servicio) => (
              <div key={servicio.name} className="bg-white rounded-xl border border-gray-100 p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{servicio.icon}</div>
                <p className="text-navy font-body font-medium text-sm">{servicio.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline detallado */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-navy mb-12 text-center">Timeline del Proyecto</h2>
          <div className="space-y-6">
            {fases.map((fase) => (
              <div key={fase.fase} className={`flex gap-6 p-6 rounded-xl border ${
                fase.status === 'En curso'
                  ? 'border-heart/30 bg-heart/5'
                  : 'border-gray-100 bg-white'
              }`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold text-lg ${
                  fase.status === 'En curso'
                    ? 'bg-heart text-white'
                    : 'bg-gray-100 text-navy/30'
                }`}>
                  {fase.fase}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-display font-bold text-navy">{fase.title}</h3>
                    <span className={`text-xs font-body font-bold px-2 py-0.5 rounded-full ${
                      fase.status === 'En curso'
                        ? 'bg-heart/20 text-heart'
                        : 'bg-gray-100 text-navy/30'
                    }`}>{fase.status}</span>
                  </div>
                  <p className="text-navy/60 font-body text-sm">{fase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-navy mb-4">Ubicación Futura</h2>
          <p className="text-navy/60 font-body text-lg mb-8">
            El hospital se ubicará en la Región Metropolitana de Santiago, en una zona accesible
            para las comunas con mayor necesidad. La ubicación exacta se definirá en la Fase 2 del proyecto.
          </p>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8">
            <div className="w-full h-64 bg-gray-100 rounded-xl flex items-center justify-center text-navy/30 font-body">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto mb-3 text-navy/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="font-medium">Región Metropolitana, Santiago</p>
                <p className="text-sm mt-1">Ubicación exacta por definir</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-4">Ayúdanos a hacerlo realidad</h2>
          <p className="text-white/60 font-body mb-8">
            Cada ticket comprado en TuSorteoLegal nos acerca un paso más a este sueño.
          </p>
          <CtaButtons />
        </div>
      </section>
    </main>
  )
}

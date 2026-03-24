'use client'
import { useState } from 'react'

const categorias = [
  {
    titulo: 'Sobre CHAG',
    preguntas: [
      { q: '¿Qué es CHAG?', a: 'La fundación que construye el primer Hospital Público y Gratuito de Mascotas de Chile.' },
      { q: '¿Quién está detrás de CHAG?', a: 'Fundación CHAG, constituida legalmente en Chile. Toda la documentación es pública y verificable.' },
      { q: '¿Dónde estará el hospital?', a: 'En Santiago, Chile. La ubicación exacta se anunciará una vez completada la etapa de financiamiento inicial.' },
    ]
  },
  {
    titulo: 'Cómo ayudar',
    preguntas: [
      { q: '¿Cómo puedo ayudar?', a: 'Apadrina consulta $3.000 / Ladrillo $5.000 / La Manada $2.000/mes / Un Día $15.000 / Empresarial desde $50.000.' },
      { q: '¿Qué es La Manada?', a: 'Es nuestra membresía mensual de $2.000. Eres miembro oficial del hospital y recibes actualizaciones exclusivas.' },
      { q: '¿Qué es un Ladrillo Fundador?', a: 'Con $5.000 tu nombre queda grabado en el muro del hospital como parte de su construcción.' },
      { q: 'Mi empresa quiere ser sponsor', a: 'Escríbenos a sandra@chag.cl para coordinar reunión y ver paquetes Bronce/Plata/Oro.' },
    ]
  },
  {
    titulo: 'Transparencia',
    preguntas: [
      { q: '¿El 50% de los tickets va al hospital?', a: 'Sí. $2.500 de cada ticket de $5.000 va directo al hospital. Todo visible en nuestro dashboard.' },
      { q: '¿Cómo sé que mi donación llega?', a: 'Dashboard público en tiempo real. Cada peso tiene destino visible. Transparencia total.' },
      { q: '¿Cómo sé que CHAG es legal?', a: 'Fundación constituida legalmente en Chile. Toda la documentación es pública y verificable en el Registro Civil.' },
    ]
  },
  {
    titulo: 'Contacto',
    preguntas: [
      { q: '¿Cómo puedo comunicarme?', a: 'WhatsApp: +56 9 5669 3126 / Email: contacto@chag.cl. Nuestro asistente está disponible 24/7 por WhatsApp.' },
      { q: '¿Tienen redes sociales?', a: 'Sí, encuéntranos en Instagram y TikTok como @chag.cl' },
    ]
  },
]

export default function PreguntasPage() {
  const [open, setOpen] = useState<string | null>(null)
  return (
    <main className="bg-white min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">Preguntas Frecuentes</h1>
        <p className="text-center text-gray-500 mb-12">Todo lo que necesitas saber sobre CHAG</p>
        {categorias.map((cat) => (
          <div key={cat.titulo} className="mb-10">
            <h2 className="text-xl font-bold text-green-600 mb-4">{cat.titulo}</h2>
            <div className="space-y-3">
              {cat.preguntas.map((faq, i) => {
                const key = cat.titulo + i
                return (
                  <div key={key} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      className="w-full text-left px-6 py-4 font-semibold text-gray-800 flex justify-between items-center hover:bg-gray-50"
                      onClick={() => setOpen(open === key ? null : key)}
                    >
                      {faq.q}
                      <span>{open === key ? '−' : '+'}</span>
                    </button>
                    {open === key && (
                      <div className="px-6 py-4 text-gray-600 bg-white">{faq.a}</div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

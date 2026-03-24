'use client'
import { useState } from 'react'

const faqs = [
  {
    q: '¿Qué es CHAG?',
    a: 'La fundación que construye el primer Hospital Público y Gratuito de Mascotas de Chile.'
  },
  {
    q: '¿Cómo puedo ayudar?',
    a: 'Apadrina consulta $3.000 / Ladrillo $5.000 / La Manada $2.000/mes / Un Día $15.000 / Empresarial desde $50.000.'
  },
  {
    q: '¿El 50% de los tickets va al hospital?',
    a: 'Sí. $2.500 de cada ticket de $5.000 va directo al hospital. Todo visible en nuestro dashboard.'
  },
  {
    q: 'Mi empresa quiere ser sponsor',
    a: 'Escríbenos a sandra@chag.cl para coordinar reunión y ver paquetes Bronce/Plata/Oro.'
  },
  {
    q: '¿Cómo sé que mi donación llega?',
    a: 'Dashboard público en tiempo real. Cada peso tiene destino visible. Transparencia total.'
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Preguntas Frecuentes</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 font-semibold text-gray-800 flex justify-between items-center hover:bg-gray-100"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {faq.q}
                <span>{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div className="px-6 py-4 text-gray-600 bg-white">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="/preguntas" className="text-green-600 font-semibold hover:underline">Ver todas las preguntas →</a>
        </div>
      </div>
    </section>
  )
}
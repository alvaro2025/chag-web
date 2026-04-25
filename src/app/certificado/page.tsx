'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const niveles = [
  { nombre: 'Consulta', monto: '$3.000', icono: '🩺', desc: 'Una consulta veterinaria completa para un animal sin hogar.' },
  { nombre: 'Ladrillo', monto: '$5.000', icono: '🧱', desc: 'Un ladrillo real para construir el hospital.' },
  { nombre: 'Manada', monto: '$2.000/mes', icono: '🐾', desc: 'Aporte mensual. Impacto sostenido en el tiempo.' },
  { nombre: 'Día', monto: '$15.000', icono: '☀️', desc: 'Financias un día completo de atenciones en el hospital.' },
  { nombre: 'Empresarial', monto: '$50.000+', icono: '🏢', desc: 'Tu empresa aparece como patrocinador oficial del hospital.' },
];

export default function CertificadoPage() {
  return (
    <main className="min-h-screen bg-white text-[#1B3A5C]">

      {/* Hero */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#1B3A5C] to-[#0f2540] text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <p className="uppercase tracking-[0.3em] text-[#E63946] text-sm mb-4">Tu huella permanente</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Certificado de<br /><span className="text-[#E63946]">Donación</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Cada aporte queda inmortalizado. Tu nombre. Tu huella.<br />
            Un hospital para miles de animales que no tienen voz.
          </p>
          <Link
            href="/donar"
            className="inline-block bg-[#22C55E] hover:bg-[#16a34a] text-white font-bold py-4 px-10 rounded-lg text-lg transition-colors"
          >
            Donar ahora →
          </Link>
        </motion.div>
      </section>

      {/* Preview certificado */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/certificado-donacion-muestra.jpg"
              alt="Certificado de donación CHAG"
              className="rounded-xl shadow-2xl w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
              Tu nombre, para siempre
            </h2>
            <p className="text-gray-600 text-lg">
              Al donar recibes un certificado oficial con tu nombre, el monto y un QR verificable en tiempo real.
            </p>
            <div className="space-y-3">
              {['Llega por email y WhatsApp', 'QR verificable en chag.cl/verificar', 'Imprimible en alta calidad', 'Válido como comprobante de aporte'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-[#22C55E] text-xl">✓</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Niveles de donación */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Elige tu nivel de aporte
          </h2>
          <p className="text-center text-gray-500 mb-12">Cada peso va directo al hospital. Sin intermediarios.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {niveles.map((nivel, i) => (
              <motion.div
                key={nivel.nombre}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="border-2 border-[#1B3A5C] rounded-xl p-6 hover:border-[#E63946] hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-3">{nivel.icono}</div>
                <h3 className="text-xl font-bold mb-1">{nivel.nombre}</h3>
                <p className="text-[#E63946] font-bold text-2xl mb-3">{nivel.monto}</p>
                <p className="text-gray-600 text-sm">{nivel.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/donar"
              className="inline-block bg-[#1B3A5C] hover:bg-[#0f2540] text-white font-bold py-4 px-10 rounded-lg text-lg transition-colors"
            >
              Súmate al muro de héroes →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}


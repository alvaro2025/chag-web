'use client';
import { motion } from 'framer-motion';

export default function CertificadoSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B3A5C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Tu Certificado de Donacion
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cada aporte queda inmortalizado.
            <br />
            <span className="text-[#E63946] font-semibold">Tu nombre. Tu huella. Un hospital para miles.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/images/certificado-donacion-muestra.jpg"
              alt="Certificado de Donacion CHAG"
              className="rounded-lg shadow-2xl w-full max-w-sm mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl">🏅</span>
              <div>
                <h3 className="text-xl font-bold text-[#1B3A5C] mb-1">Tu nombre en el certificado</h3>
                <p className="text-gray-500">
                  Diseno premium azul marino y dorado. Imprimelo y enmarcalo.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl">🔐</span>
              <div>
                <h3 className="text-xl font-bold text-[#1B3A5C] mb-1">100% verificable</h3>
                <p className="text-gray-500">
                  QR unico por certificado. Escaneas y ves tu donacion en tiempo real.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-3xl">📧</span>
              <div>
                <h3 className="text-xl font-bold text-[#1B3A5C] mb-1">Llega a tu correo y WhatsApp</h3>
                <p className="text-gray-500">
                  En segundos. Con el respaldo oficial de tu aporte.
                </p>
              </div>
            </div>

            <motion.a
              href="/donar"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-[#22C55E] hover:bg-[#16a34a] text-white font-bold py-4 px-8 rounded-lg transition-colors"
            >
              Dona ahora →
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

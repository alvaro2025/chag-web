import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de Fundación Chile Hospital Animal Gratuito (CHAG). Cómo recopilamos, usamos y protegemos tus datos personales.',
  alternates: { canonical: 'https://chag.cl/privacidad' },
}

export default function Privacidad() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1.5 bg-heart/20 border border-heart/30 rounded-full text-heart text-sm font-body font-medium mb-6">
            Legal
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Política de <span className="text-heart">Privacidad</span>
          </h1>
          <p className="text-white/70 text-lg font-body max-w-2xl mx-auto">
            Fundación Chile Hospital Animal Gratuito (CHAG) se compromete a proteger tus datos personales y garantizar tu privacidad.
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">

          {/* 1. Responsable */}
          <div className="mb-12">
            <h2 className="text-3xl font-display font-bold text-navy mb-6">1. Responsable del Tratamiento de Datos</h2>
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 space-y-2 font-body text-navy/70">
              <p><span className="font-semibold text-navy">Razón social:</span> Fundación Chile Hospital Animal Gratuito</p>
              <p><span className="font-semibold text-navy">Presidenta:</span> Sandra Evelyn Díaz Cifuentes, RUT 11.605.873-1</p>
              <p><span className="font-semibold text-navy">Domicilio legal:</span> Los Adobes 1823, Villa Hacienda Maipú, comuna de Maipú, Región Metropolitana, Chile</p>
              <p><span className="font-semibold text-navy">Constitución:</span> 13 de febrero de 2026, Repertorio N° 6180-2026, 42° Notaría de Santiago</p>
              <p><span className="font-semibold text-navy">Email:</span> contacto@chag.cl</p>
              <p><span className="font-semibold text-navy">WhatsApp:</span> +569 5431 8580</p>
              <p><span className="font-semibold text-navy">Sitio web:</span> https://chag.cl</p>
            </div>
          </div>

          {/* 2. Datos recopilados */}
          <div className="mb-12">
            <h2 className="text-3xl font-display font-bold text-navy mb-6">2. Datos Personales que Recopilamos</h2>
            <div className="space-y-4 text-navy/70 font-body leading-relaxed">
              <p>Recopilamos los siguientes datos personales según el contexto de la interacción:</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-heart mt-2 flex-shrink-0" />
                  <span><strong className="text-navy">Identificación:</strong> nombre completo, RUT u otro documento de identidad, cuando se requiera para gestionar donaciones o sorteos benéficos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-heart mt-2 flex-shrink-0" />
                  <span><strong className="text-navy">Comunicación:</strong> correo electrónico, número de teléfono o WhatsApp, para responder consultas y enviar comunicaciones.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-heart mt-2 flex-shrink-0" />
                  <span><strong className="text-navy">Donaciones:</strong> monto donado, método de pago y comprobante, para gestión contable y transparencia.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-heart mt-2 flex-shrink-0" />
                  <span><strong className="text-navy">Navegación:</strong> dirección IP, tipo de navegador, páginas visitadas y tiempo de visita, recopilados de forma anónima mediante cookies.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-heart mt-2 flex-shrink-0" />
                  <span><strong className="text-navy">Beneficiarios:</strong> datos de los animales y sus familias para prestar atención veterinaria (nombre del animal, especie, raza, datos del tutor), cuando corresponda.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 3. Finalidad */}
          <div className="mb-12">
            <h2 className="text-3xl font-display font-bold text-navy mb-6">3. Finalidad del Tratamiento</h2>
            <div className="space-y-4 text-navy/70 font-body leading-relaxed">
              <p>Tus datos personales son tratados para las siguientes finalidades:</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-heart mt-2 flex-shrink-0" />
                  <span>Gestionar donaciones y emitir comprobantes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-heart mt-2 flex-shrink-0" />
                  <span>Administrar sorteos benéficos realizados en alianza con TuSorteoLegal.cl.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-heart mt-2 flex-shrink-0" />
                  <span>Prestar y coordinar atención veterinaria gratuita para los beneficiarios del hospital CHAG.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-heart mt-2 flex-shrink-0" />
                  <span>Enviar comunicaciones informativas sobre el avance del proyecto, campañas y actividades de la Fundación.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-heart mt-2 flex-shrink-0" />
                  <span>Cumplir con obligaciones legales, contables y tributarias aplicables a una fundación.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-heart mt-2 flex-shrink-0" />
                  <span>Mejorar la experiencia de usuario en el sitio web chag.cl.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 4. Base legal */}
          <div className="mb-12">
            <h2 className="text-3xl font-display font-bold text-navy mb-6">4. Base Legal del Tratamiento</h2>
            <div className="space-y-4 text-navy/70 font-body leading-relaxed">
              <p>
                El tratamiento de tus datos personales se realiza conforme a la <strong className="text-navy">Ley N° 19.628 sobre Protección de la Vida Privada</strong> de la República de Chile, y sus modificaciones vigentes.
              </p>
              <p>
                Las bases de licitud aplicables son: el consentimiento del titular al interactuar con nuestros servicios (envío de formularios, donaciones, comunicaciones), la ejecución de la relación fundacional y la prestación de servicios de atención veterinaria, y el cumplimiento de obligaciones legales de la Fundación.
              </p>
            </div>
          </div>

          {/* 5. WhatsApp Business API */}
          <div className="mb-12">
            <h2 className="text-3xl font-display font-bold text-navy mb-6">5. Uso de WhatsApp Business API</h2>
            <div className="bg-heart/5 border border-heart/20 rounded-2xl p-6 space-y-4 text-navy/70 font-body leading-relaxed">
              <p>
                CHAG utiliza <strong className="text-navy">WhatsApp Business API</strong>, un servicio de infraestructura de mensajería proporcionado por <strong className="text-navy">Meta Platforms Ireland Limited</strong>, para comunicarse con donantes, voluntarios y beneficiarios.
              </p>
              <p>
                El número de WhatsApp Business de CHAG es <strong className="text-navy">+569 5431 8580</strong>. Las comunicaciones que enviamos a través de esta plataforma pueden incluir confirmaciones de donación, información sobre el avance del hospital, sorteos benéficos y respuestas a consultas.
              </p>
              <p>
                <strong className="text-navy">Rol de Meta:</strong> Meta actúa como proveedor de infraestructura tecnológica de mensajería. Los mensajes son procesados a través de los servidores de Meta conforme a sus propios términos de servicio y política de privacidad, disponibles en <strong className="text-navy">https://www.whatsapp.com/legal/privacy-policy</strong>.
              </p>
              <p>
                <strong className="text-navy">Derecho a no recibir mensajes:</strong> Si en algún momento no deseas seguir recibiendo mensajes de CHAG a través de WhatsApp, puedes responder al número <strong className="text-navy">+569 5431 8580</strong> con la palabra <strong className="text-navy">DETENER</strong> o <strong className="text-navy">STOP</strong> y dejaremos de contactarte por ese medio de inmediato.
              </p>
            </div>
          </div>

          {/* 6. Compartición de datos */}
          <div className="mb-12">
            <h2 className="text-3xl font-display font-bold text-navy mb-6">6. Compartición de Datos con Terceros</h2>
            <div className="space-y-4 text-navy/70 font-body leading-relaxed">
              <p>
                CHAG <strong className="text-navy">no vende ni comercializa</strong> datos personales a terceros. Únicamente compartimos datos en los siguientes casos y con las siguientes categorías de destinatarios:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-heart mt-2 flex-shrink-0" />
                  <span><strong className="text-navy">Proveedores tecnológicos:</strong> servicios de hosting, plataformas de mensajería (Meta/WhatsApp Business API), herramientas de automatización y analítica web, bajo acuerdos de confidencialidad.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-heart mt-2 flex-shrink-0" />
                  <span><strong className="text-navy">TuSorteoLegal:</strong> datos mínimos necesarios para gestionar los sorteos benéficos realizados en alianza.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-heart mt-2 flex-shrink-0" />
                  <span><strong className="text-navy">Autoridades competentes:</strong> cuando sea requerido por ley, orden judicial o entidad regulatoria.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 7. Seguridad */}
          <div className="mb-12">
            <h2 className="text-3xl font-display font-bold text-navy mb-6">7. Seguridad de los Datos</h2>
            <div className="space-y-4 text-navy/70 font-body leading-relaxed">
              <p>
                Implementamos medidas técnicas y organizativas razonables para proteger tus datos personales contra acceso no autorizado, pérdida, alteración o divulgación. Entre ellas: comunicaciones cifradas mediante SSL/TLS, acceso restringido al personal autorizado y revisión periódica de nuestros sistemas de seguridad.
              </p>
              <p>
                Sin perjuicio de lo anterior, ningún sistema de transmisión de datos por internet es completamente seguro. Te recomendamos no compartir información sensible innecesariamente.
              </p>
            </div>
          </div>

          {/* 8. Conservación */}
          <div className="mb-12">
            <h2 className="text-3xl font-display font-bold text-navy mb-6">8. Conservación de los Datos</h2>
            <div className="space-y-4 text-navy/70 font-body leading-relaxed">
              <p>
                Conservamos tus datos personales durante el tiempo necesario para cumplir las finalidades para las que fueron recabados, y en todo caso durante los plazos que exija la legislación chilena aplicable (obligaciones tributarias, contables, legales). Una vez cumplida la finalidad y vencidos los plazos legales, los datos serán eliminados o anonimizados de forma segura.
              </p>
            </div>
          </div>

          {/* 9. Derechos ARCO */}
          <div className="mb-12">
            <h2 className="text-3xl font-display font-bold text-navy mb-6">9. Tus Derechos (ARCO)</h2>
            <div className="space-y-4 text-navy/70 font-body leading-relaxed">
              <p>Conforme a la Ley N° 19.628, tienes los siguientes derechos respecto de tus datos personales:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                  <h3 className="font-display font-bold text-navy mb-2">Acceso</h3>
                  <p className="text-sm">Solicitar información sobre qué datos personales tuyos conservamos y cómo los tratamos.</p>
                </div>
                <div className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                  <h3 className="font-display font-bold text-navy mb-2">Rectificación</h3>
                  <p className="text-sm">Solicitar la corrección de datos inexactos, incompletos o desactualizados.</p>
                </div>
                <div className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                  <h3 className="font-display font-bold text-navy mb-2">Cancelación</h3>
                  <p className="text-sm">Solicitar la eliminación de tus datos cuando ya no sean necesarios para los fines recabados.</p>
                </div>
                <div className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                  <h3 className="font-display font-bold text-navy mb-2">Oposición</h3>
                  <p className="text-sm">Oponerte al tratamiento de tus datos para determinadas finalidades, como el envío de comunicaciones.</p>
                </div>
              </div>
              <p className="mt-4">
                Para ejercer cualquiera de estos derechos, contáctanos en <strong className="text-navy">contacto@chag.cl</strong> indicando tu nombre completo y la solicitud específica. Responderemos en un plazo máximo de 30 días hábiles.
              </p>
            </div>
          </div>

          {/* 10. Cookies */}
          <div className="mb-12">
            <h2 className="text-3xl font-display font-bold text-navy mb-6">10. Cookies y Tecnologías de Seguimiento</h2>
            <div className="space-y-4 text-navy/70 font-body leading-relaxed">
              <p>
                El sitio web chag.cl puede utilizar cookies y tecnologías similares para mejorar la experiencia de navegación y obtener estadísticas de uso anónimas. Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo.
              </p>
              <p>
                Puedes configurar tu navegador para rechazar o eliminar las cookies en cualquier momento. Ten en cuenta que algunas funcionalidades del sitio pueden verse afectadas si deshabilitas las cookies.
              </p>
            </div>
          </div>

          {/* 11. Modificaciones */}
          <div className="mb-12">
            <h2 className="text-3xl font-display font-bold text-navy mb-6">11. Modificaciones a Esta Política</h2>
            <div className="space-y-4 text-navy/70 font-body leading-relaxed">
              <p>
                CHAG se reserva el derecho de actualizar esta Política de Privacidad cuando lo estime necesario, por ejemplo, ante cambios legales o en nuestros servicios. Las modificaciones serán publicadas en esta misma página con la fecha de actualización correspondiente. Te recomendamos revisarla periódicamente.
              </p>
            </div>
          </div>

          {/* 12. Contacto */}
          <div className="mb-6">
            <h2 className="text-3xl font-display font-bold text-navy mb-6">12. Contacto</h2>
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 space-y-2 font-body text-navy/70">
              <p>Para cualquier consulta o solicitud relacionada con esta Política de Privacidad:</p>
              <div className="mt-4 space-y-2">
                <p><span className="font-semibold text-navy">Email:</span> contacto@chag.cl</p>
                <p><span className="font-semibold text-navy">WhatsApp:</span> +569 5431 8580</p>
                <p><span className="font-semibold text-navy">Domicilio:</span> Los Adobes 1823, Villa Hacienda Maipú, Maipú, Región Metropolitana, Chile</p>
              </div>
            </div>
          </div>

          {/* Fecha */}
          <div className="border-t border-gray-100 pt-8">
            <p className="text-navy/40 text-sm font-body text-center">
              Última actualización: 6 de marzo de 2026
            </p>
          </div>

        </div>
      </section>
    </main>
  )
}

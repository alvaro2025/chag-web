import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Causa CHAG',
  description:
    'Conoce la causa CHAG: cómo funciona el proyecto, el hospital veterinario gratuito, los premios, la transparencia legal y cómo sumarte.',
  alternates: {
    canonical: 'https://chag.cl/causa',
  },
}

const steps = [
  {
    title: 'Participas',
    text: 'Eliges una forma de apoyar la causa y te sumas al movimiento que construye el primer hospital veterinario gratuito de Chile.',
  },
  {
    title: 'Financias',
    text: 'Una parte de cada aporte se transforma en recursos reales para avanzar con la construcción y operación de CHAG.',
  },
  {
    title: 'Se construye',
    text: 'Cada hito visible acerca el hospital a miles de familias que hoy no pueden acceder a atención veterinaria.',
  },
]

const hospitalHighlights = [
  'Primer hospital veterinario gratuito de Chile.',
  'Atención enfocada en animales de familias que necesitan apoyo real.',
  'Proyecto con visión de largo plazo, transparencia y trazabilidad pública.',
  'Ubicado en Santiago, con alcance para miles de casos en todo el país.',
]

const prizes = [
  {
    name: 'Departamentos',
    detail: 'Premios principales de alto valor para seguir financiando la causa.',
  },
  {
    name: 'Camioneta',
    detail: 'Un premio destacado que impulsa la participación y la visibilidad del proyecto.',
  },
  {
    name: 'Experiencias CHAG',
    detail: 'Beneficios y reconocimientos pensados para quienes se comprometen con la misión.',
  },
]

const transparency = [
  'Documentación legal disponible y verificable.',
  'Proyecto operado desde una fundación constituida en Chile.',
  'Avance y uso de fondos observables en canales públicos y dashboard.',
  'Compromiso de reportar el estado del hospital, hitos y siguientes pasos.',
]

const faqs = [
  {
    q: '¿Qué es CHAG?',
    a: 'CHAG es el proyecto que impulsa el primer hospital veterinario gratuito de Chile para animales de familias que necesitan apoyo.',
  },
  {
    q: '¿Cómo ayuda mi participación?',
    a: 'Tu apoyo se transforma en recursos para construir y sostener el hospital, mientras te sumas a los premios asociados a la campaña.',
  },
  {
    q: '¿Dónde se ve la transparencia?',
    a: 'En la documentación legal pública, en los canales oficiales y en el seguimiento del avance del proyecto.',
  },
  {
    q: '¿Qué pasa después de participar?',
    a: 'Sigues conectado al avance de la causa, a los hitos del proyecto y a las novedades del hospital CHAG.',
  },
]

function SectionTitle({
  kicker,
  title,
  text,
}: {
  kicker: string
  title: string
  text?: string
}) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#E63946]">
        {kicker}
      </p>
      <h2 className="font-display text-3xl font-bold text-[#1B3A5C] md:text-4xl">{title}</h2>
      <div className="mt-4 h-1.5 w-28 rounded-full bg-[linear-gradient(90deg,#E63946_0%,#D4AF37_50%,#22C55E_100%)]" />
      {text ? <p className="mt-4 text-base leading-7 text-slate-700">{text}</p> : null}
    </div>
  )
}

function Stat({
  value,
  label,
}: {
  value: string
  label: string
}) {
  return (
    <div className="rounded-[1.75rem] border border-[#1B3A5C]/10 bg-white p-5 shadow-[0_18px_45px_rgba(27,58,92,0.08)]">
      <p className="font-display text-2xl font-bold text-[#1B3A5C]">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-700">{label}</p>
    </div>
  )
}

function ColorOrb({ index }: { index: number }) {
  const ringClass =
    index === 0
      ? 'bg-[linear-gradient(135deg,#E63946_0%,#D4AF37_50%,#22C55E_100%)]'
      : index === 1
        ? 'bg-[linear-gradient(135deg,#22C55E_0%,#D4AF37_50%,#E63946_100%)]'
        : 'bg-[linear-gradient(135deg,#D4AF37_0%,#E63946_50%,#22C55E_100%)]'

  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#fff,rgba(255,255,255,0.6))] p-1 shadow-[0_12px_30px_rgba(27,58,92,0.14)]">
      <div className={`flex h-full w-full items-center justify-center rounded-full ${ringClass} animate-[spin_10s_linear_infinite]`}>
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg">
          {index === 0 ? '🤝' : index === 1 ? '💚' : '🏥'}
        </span>
      </div>
    </div>
  )
}

export default function CausaPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'CHAG',
      url: 'https://chag.cl',
      description: 'Proyecto del primer hospital veterinario gratuito de Chile.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    },
  ]

  return (
    <main className="bg-[#FBFBF7] text-slate-700">
      {jsonLd.map((entry, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}

      <section className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,rgba(76,175,80,0.14),transparent_38%),linear-gradient(180deg,#ffffff_0%,#f4f8ef_100%)]">
        <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_42%),radial-gradient(circle_at_top_left,rgba(76,175,80,0.12),transparent_38%)]" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col gap-12 px-5 py-16 md:px-8 lg:flex-row lg:items-center lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-[#1B3A5C]/10 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#E63946] shadow-sm">
              Causa CHAG
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight text-[#1B3A5C] md:text-6xl">
              Una causa concreta para construir el primer hospital veterinario gratuito de Chile.
            </h1>
            <div className="mt-5 h-1.5 w-32 rounded-full bg-[linear-gradient(90deg,#E63946_0%,#D4AF37_50%,#22C55E_100%)]" />
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
              CHAG une una campaña de participación, premios y transparencia para transformar
              apoyo ciudadano en atención veterinaria real para miles de animales y sus familias.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/como-apoyar"
                className="inline-flex items-center justify-center rounded-full bg-[#22C55E] px-7 py-4 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(34,197,94,0.28)] transition hover:bg-[#16a34a]"
              >
                Apoyar la causa
              </Link>
              <Link
                href="/el-hospital"
                className="inline-flex items-center justify-center rounded-full border border-[#1B3A5C]/15 bg-white px-7 py-4 text-sm font-semibold text-[#1B3A5C] transition hover:border-[#E63946]/30 hover:text-[#E63946]"
              >
                Ver el hospital
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-[#1B3A5C]/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#1B3A5C]">
                Apoyo real
              </span>
              <span className="rounded-full border border-[#1B3A5C]/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#E63946]">
                Premios visibles
              </span>
              <span className="rounded-full border border-[#1B3A5C]/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#22C55E]">
                Transparencia pública
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <SectionTitle
          kicker="Cómo funciona"
          title="Participar es simple: apoyar, financiar y construir."
          text="El recorrido de la causa es directo y entendible. Cada paso suma a una obra concreta y medible."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[1.75rem] border border-[#1B3A5C]/10 bg-white p-6 shadow-[0_18px_45px_rgba(27,58,92,0.08)]"
            >
              <ColorOrb index={index} />
              <p className="mt-5 font-display text-5xl font-bold text-[#E63946]/20">{index + 1}</p>
              <h3 className="mt-4 font-display text-2xl font-bold text-[#1B3A5C]">{step.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-700">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="hospital" className="bg-[#F4F8EF]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionTitle
              kicker="Hospital CHAG"
              title="El destino de la causa es un hospital veterinario gratuito, útil y verificable."
              text="No es una idea abstracta: es infraestructura, atención profesional y acceso real para familias que hoy no pueden costear una clínica privada."
            />
            <ul className="mt-8 space-y-4">
              {hospitalHighlights.map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl border border-[#1B3A5C]/10 bg-white p-4 shadow-sm">
                  <span className="mt-1 h-3 w-3 rounded-full bg-[#22C55E]" />
                  <span className="text-base leading-7 text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] border border-[#1B3A5C]/10 bg-white p-6 shadow-[0_30px_80px_rgba(27,58,92,0.12)]">
            <div className="rounded-[1.5rem] bg-[linear-gradient(180deg,#153B2E_0%,#0e261d_100%)] p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Proyecto CHAG
              </p>
              <p className="mt-3 font-display text-3xl font-bold">Atención veterinaria gratuita</p>
              <p className="mt-4 text-sm leading-7 text-white/80">
                El hospital apunta a dar respuesta a casos que hoy quedan fuera del sistema
                por una sola razón: el costo.
              </p>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Stat value="Santiago" label="Base operativa del proyecto y futura ubicación del hospital." />
              <Stat value="Miles" label="El objetivo es alcanzar a miles de animales y familias en el tiempo." />
            </div>
          </div>
        </div>
      </section>

      <section id="premios" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <SectionTitle
          kicker="Premios"
          title="Premios potentes, con una causa más potente todavía."
          text="La campaña integra incentivos visibles para sostener el interés y seguir empujando la obra del hospital."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {prizes.map((prize) => (
            <article
              key={prize.name}
              className="overflow-hidden rounded-[1.75rem] border border-[#D4AF37]/20 bg-white shadow-[0_18px_45px_rgba(21,59,46,0.08)]"
            >
              <div className="flex h-44 items-center justify-center bg-[linear-gradient(135deg,rgba(76,175,80,0.12),rgba(212,175,55,0.14))]">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-dashed border-[#4CAF50]/35 bg-white/70 text-xs font-semibold uppercase tracking-[0.25em] text-[#4CAF50]">
                  Imagen
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                  Premio
                </p>
                <h3 className="mt-4 font-display text-2xl font-bold text-[#153B2E]">{prize.name}</h3>
                <p className="mt-3 text-base leading-7 text-slate-700">{prize.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="transparencia" className="bg-[#FBFBF7]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <SectionTitle
            kicker="Transparencia legal"
            title="La causa solo funciona si todo es claro, público y verificable."
            text="Acá no te pedimos fe ciega: te mostramos lo que hay, cómo avanza y dónde mirar si querés seguir el rastro."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[1.75rem] border border-[#1B3A5C]/10 bg-white p-6 shadow-sm">
              <p className="font-display text-2xl font-bold text-[#1B3A5C]">Pilares de transparencia</p>
              <ul className="mt-5 space-y-4">
                {transparency.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
                    <span className="text-base leading-7 text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Stat value="Legal" label="La estructura institucional y el marco documental son públicos." />
              <Stat value="Dashboard" label="El avance y los hitos pueden seguirse en canales visibles." />
              <Stat value="Foco social" label="La prioridad es siempre la causa y el hospital, no la espectacularidad." />
              <Stat value="Chile" label="Proyecto desarrollado con visión local y alcance nacional." />
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <SectionTitle
          kicker="FAQ"
          title="Preguntas frecuentes, sin letra chica."
          text="Respuestas simples para despejar dudas antes de apoyar o compartir la causa."
        />
        <div className="mt-10 grid gap-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-[1.5rem] border border-[#D4AF37]/20 bg-white p-6 shadow-sm"
            >
              <summary className="cursor-pointer list-none font-display text-xl font-bold text-[#153B2E]">
                {item.q}
              </summary>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="cta" className="bg-[#153B2E] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-8 md:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                CTA + Footer
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
                Súmate a la causa y ayúdanos a construir el hospital.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/80">
                Tu apoyo acelera una meta concreta: atención veterinaria gratuita para familias
                que hoy no tienen otra alternativa.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/como-apoyar"
                  className="inline-flex items-center justify-center rounded-full bg-[#22C55E] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(34,197,94,0.28)] transition hover:bg-white hover:text-[#1B3A5C]"
                >
                  Quiero apoyar ahora
                </Link>
                <Link
                  href="/preguntas"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#1B3A5C]"
                >
                  Ver preguntas frecuentes
                </Link>
              </div>
            </div>

            <div className="rounded-[1.5rem] bg-white/10 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Footer de causa
              </p>
              <div className="mt-5 space-y-3 text-sm leading-7 text-white/80">
                <p>CHAG - Centro Hospitalario Animal Gratuito.</p>
                <p>El primer hospital veterinario gratuito de Chile.</p>
                <p>Seguimos construyendo una causa visible, medible y cercana.</p>
              </div>
              <div className="mt-8 border-t border-white/10 pt-5 text-xs uppercase tracking-[0.24em] text-white/60">
                Causa CHAG · Transparencia · Hospital · Comunidad
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

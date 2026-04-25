async function getCertData(uuid: string) {
  try {
    const res = await fetch(
      `https://jarvis.ecosistemachile.com/verificar-certificado/${uuid}`,
      { next: { revalidate: 30 } }
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default async function VerificarCertPage({
  params,
}: {
  params: { uuid: string };
}) {
  const data = await getCertData(params.uuid);

  if (!data || !data.valido) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white p-4">
        <div className="max-w-md w-full bg-red-50 border-2 border-[#E63946] rounded-xl p-8 text-center">
          <h1 className="text-3xl font-bold text-[#E63946] mb-4">Certificado no valido</h1>
          <p className="text-gray-600">Este codigo QR no corresponde a un certificado emitido por CHAG.</p>
          <a href="/" className="inline-block mt-6 text-[#1B3A5C] underline">Volver al inicio</a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white p-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="border-2 border-[#1B3A5C] rounded-xl p-8 text-center shadow-xl">
          <div className="text-6xl mb-4">✅</div>
          <h1 className="text-4xl font-bold text-[#1B3A5C] mb-2">Certificado Valido</h1>
          <p className="text-[#E63946] mb-8">CHAG - Centro Hospitalario Animal Gratuito</p>
          <div className="space-y-4 text-left bg-gray-50 rounded-lg p-6 mb-8">
            <Dato label="Donante" valor={data.nombre_donante} />
            <Dato label="Monto donado" valor={data.monto_donado} />
            <Dato label="Tipo de aporte" valor={data.tipo_donacion} />
            <Dato label="Fecha" valor={data.fecha} />
            <Dato label="Estado" valor="VERIFICADO" />
          </div>
          <a href="/donar" className="inline-block bg-[#22C55E] hover:bg-[#16a34a] text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Sumate tu tambien
          </a>
        </div>
      </div>
    </main>
  );
}

function Dato({ label, valor }: { label: string; valor: string }) {
  return (
    <div className="flex justify-between border-b border-gray-200 pb-2">
      <span className="text-gray-500">{label}:</span>
      <span className="font-semibold text-[#1B3A5C]">{valor}</span>
    </div>
  );
}
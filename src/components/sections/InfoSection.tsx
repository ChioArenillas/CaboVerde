import { appsData, documentationData, moneyData } from "@/data/data";
import { Card } from "../ui/Card";
import { InfoItem } from "../ui/InfoItem";

export function InfoSection() {
  return (
    <div className="space-y-8">
      {/* Welcome */}
      <Card title="👋 Welcome Meeting">
        <p>
          El primer día, como cada uno llegará a una hora diferente, iremos
          organizando las llegadas al hotel y nos iremos reuniendo. Esa misma
          tarde o al día siguiente os explicaré un poco cómo funciona todo y
          resolveremos las dudas que tengáis.
        </p>
      </Card>

      {/* Documentación */}
      <Card title="📄 Documentación">
        {documentationData.documentation.map((doc) => (
          <InfoItem key={doc.title} title={doc.title} desc={doc.desc} />
        ))}
      </Card>

      {/* Apps */}
      <Card title="📱 Conectividad y Apps">
        <div className="space-y-4">
          <div>
            <h4 className="font-bold mb-1">Tarjeta SIM</h4>
            <p>{appsData.sim}</p>
          </div>

          <div>
            <h4 className="font-bold mb-2">🗺️ Apps útiles</h4>
            <ul className="space-y-1 list-disc list-inside">
              {appsData.apps.map((app) => (
                <li key={app.name}>
                  <strong>{app.name}:</strong> {app.desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>

      {/* Dinero */}
 <Card title="💸 Dinero y Fondo Común">
  <p>
    La moneda oficial es el <strong>{moneyData.currency}</strong>.
  </p>

  {moneyData.recommendation}

  <div className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-lg space-y-2">
    <p>{moneyData.commonFund.intro}</p>

    <p className="font-bold text-sky-800 text-base">
      💰 Fondo Común: {moneyData.commonFund.amount}
    </p>

    <div className="text-sky-700">
      {moneyData.commonFund.documento}
    </div>

    <p className="text-sky-700">
      {moneyData.commonFund.description}
    </p>
  </div>
</Card>

      {/* Seguro */}
      <Card title="🩺 Seguro Médico">
        <p>
          Os lo mandan dos días antes del comienzo del turno, por email. La
          duración es desde el mismo día que empieza el turno hasta un día
          después.
        </p>

        <p>
          Puedes consultar toda la información sobre el seguro{" "}
          <a
            href="https://www.weroad.es/legal/seguro-medico-equipaje"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 font-semibold hover:text-sky-800 underline"
          >
            aquí.
          </a>
        </p>
      </Card>

      <Card title="📸 Permisos fotos/vídeo publicidad">
        <p>
          Yo en todos los viajes suelo mandar después fotos y vídeos de grupo o
          del viaje que a veces weroad usa para publi, para la web o IG y cosas
          así. En caso de que os parezca bien y no os importe salir necesito que
          me mandéis este documento (abajo) con vuestros datos firmados. Si
          alguno no quiere salir me lo decís y hago sin vosotros sin problema.
        </p>

        <p>
          Necesitaría que me lo mandéis estos días antes del viaje porfa, no
          hace falta que lo imprimáis, lo podéis rellenar en el ordena o móvil
          con cualquier app o I love PDF por ej. Si tenéis
          dudas me decís 🫶{" "}
        </p>
         <a
    href="/WR-GLOBAL-Privacy-Template-Approval.pdf"
    download
    className="inline-flex items-center gap-2 mt-4 bg-sky-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-sky-700 transition"
  >
    📄 Descargar documento
  </a>
      </Card>
    </div>
  );
}

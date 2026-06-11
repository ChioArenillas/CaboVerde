import { appsData, documentationData, moneyData } from "@/data/data";
import { Card } from "../ui/Card";
import { InfoItem } from "../ui/InfoItem";

export function InfoSection() {
  return (
    <div className="space-y-8">
            <Card title="Welcome Meeting">
        <p>
          El primer día, como cada uno llegará a una hora diferente, iremos organizando
          las llegadas al hotel y nos iremos reuniendo. Esa misma tarde o al día siguiente os
          explicaré un poco cómo funciona todo y resolveremos las dudas que
          tengáis.
        </p>
      </Card>

      <Card title="Documentación">
        {documentationData.documentation.map((doc) => (
          <InfoItem
            key={doc.title}
            title={doc.title}
            desc={doc.desc}
          />
        ))}
      </Card>

      <Card title="Conectividad y Apps">
        <div className="space-y-4">

          <div>
            <h4 className="font-bold mb-1">📱 eSIM / SIM</h4>
            <p className="text-sm text-gray-600">
              {appsData.sim}
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-2">🗺️ Apps útiles</h4>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              {appsData.apps.map((app) => (
                <li key={app.name}>
                  <strong>{app.name}:</strong> {app.desc}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </Card>


<Card title="Dinero y Fondo Común">
  <p className="mb-3">
    La moneda oficial es el <strong>{moneyData.currency}</strong>.
  </p>

  <p className="text-sm text-gray-600 mb-4">
    {moneyData.recommendation}
  </p>

  <div className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-lg">
    <p className="mb-3">{moneyData.commonFund.intro}</p>

    <p className="font-bold text-sky-800 text-lg mb-2">
      💰 Fondo Común: {moneyData.commonFund.amount}
    </p>

    <p className="text-sm text-sky-700">
      {moneyData.commonFund.description}
    </p>
  </div>
</Card>      
      <Card title="Seguro Médico">
  <p>
    Os lo mandan dos días antes del comienzo del turno, por email. La duración es desde
    el mismo día que empieza el turno hasta un día después.
  </p>

  <p className="mt-4">
    Puedes consultar toda la información sobre el seguro {" "}
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





    </div>
  );
}
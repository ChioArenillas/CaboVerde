import { Card } from "../ui/Card";
import { InfoItem } from "../ui/InfoItem";

export function InfoSection() {
  return (
    <div className="space-y-8">
            <Card title="Welcome Meeting">
        <p>
          El día 1, como cada uno llegará a una hora diferente, iré organizando
          las llegadas al hotel y nos iremos reuniendo. Al día siguiente os
          explicaré un poco cómo funciona todo y resolveremos las dudas que
          tengáis.
        </p>
      </Card>

      <Card title="Documentación">
        <InfoItem
          title="Pasaporte"
          desc="En perfecto estado, y con al menos 6 meses de vigencia residual a la fecha de salida del país. ¡Siempre contigo!"
        />
        <InfoItem
          title="Visa"
          desc="No necesaria para ciudadanos españoles para viajes turísticos de hasta 90 días."
        />
      </Card>
            <Card title="Conectividad y Apps">
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-gray-800 mb-1 flex items-center gap-2">
              📱 eSIM / Tarjeta SIM
            </h4>
            <p className="text-sm text-gray-600">
              Recomendado comprar una <strong>eSIM</strong> (Holafly, Airalo)
              antes de salir para tener datos al aterrizar. También puedes
              comprar una SIM local (Unitel o CV Móvel) en el aeropuerto o en
              Santa Maria.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-1 flex items-center gap-2">
              🗺️ Apps útiles
            </h4>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>
                <strong>WhatsApp:</strong> Para la comunicación del grupo.
              </li>
              <li>
                <strong>Bolt:</strong> La app de VTC/taxi que funciona en la isla
                (alternativa a Uber).
              </li>
              <li>
                <strong>Google Maps:</strong> Funciona correctamente en Cabo
                Verde para orientarse.
              </li>
            </ul>
          </div>
        </div>
      </Card>


      <Card title="Dinero y Fondo Común">
        <p className="mb-3">
          La moneda oficial es el <strong>Escudo caboverdiano (CVE)</strong>. Sin
          embargo, el <strong>Euro</strong> es ampliamente aceptado en la mayoría
          de hoteles, restaurantes y tiendas turísticas.
        </p>
        <p className="text-sm text-gray-600 mb-4">
          Recomendación: Lleva algo de efectivo en euros para pequeñas compras y
          propinas. Tarjetas como Revolut o N26 funcionan bien para sacar dinero
          sin comisiones.
        </p>
            <Card title="Fondo Común">

        <div className="bg-sky-50 border-l-4 border-sky-400 p-4 rounded-r-lg">
          
          <p className="font-bold text-sky-800 text-lg mb-2">
            💰 Fondo Común: ~200€
          </p>
          <p className="text-sm text-sky-700">
            Se paga por Bizum al coordinador, quien lo gestiona. Se usa para
            gastos grupales: entradas a sitios de visita, transportes comunes,
            actividades extra y el fondo del coordinador.
          </p>
        </div>
                        <p className="mb-3">
          Como ya sabéis tenemos un fondo común que se pagará por bizum al
          coordinador que es el responsable de gestionarlo.
        </p>

        <p className="mt-4 text-sm text-gray-600">
          Se usa para todos los gastos en los que participemos todos como:
          Entradas a los sitios de visita, Transportes comunes, Actividades
          extra y Fondo común del coordinador.
        </p>
</Card>
      </Card>
      <Card title="Seguro Médico">
  <p>
    Os lo mandan dos días antes del comienzo del turno. La duración es desde
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
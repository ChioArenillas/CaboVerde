import { checklist, meds, temperatura } from "@/data/data";
import { Card } from "../ui/Card";
import { CheckItem } from "../ui/CheckItem";

export function EquipajeSection() {

  return (
    <div className="space-y-8">
      <Card title="Temperatura">
        <div className="flex items-center gap-4">
          <div className="text-5xl">{temperatura.icono}</div>
          <div>
            <p className="text-2xl font-bold text-orange-500">{temperatura.grados}</p>
            <p className="text-gray-600">{temperatura.text}</p>
          </div>
        </div>
      </Card>

      <Card title="¿Qué meter en la mochila?">
        <ul className="space-y-3">
          {checklist.map((text) => (
            <CheckItem key={text} text={text} />
          ))}
        </ul>
      </Card>

      <Card title="💊 Medicamentos">
        <p className="mb-4">
          Botiquín básico según necesidades personales. Se recomienda:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {meds.map((med) => (
            <div
              key={med}
              className="bg-red-50 text-red-700 px-4 py-2 rounded-lg text-sm font-medium text-center border border-red-100"
            >
               {med}
            </div>
          ))}
        </div>
      </Card>

    </div>
  );
}

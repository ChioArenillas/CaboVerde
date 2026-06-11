import { servicesData } from "@/data/data";
import { Card } from "../ui/Card";

export function ServiciosSection() {
  return (
    <div className="space-y-8">
      <Card title="Desglose de Servicios">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="text-xs text-gray-700 uppercase bg-sky-50">
              <tr>
                <th className="px-4 py-3 rounded-tl-lg">Día</th>
                <th className="px-4 py-3">Dónde</th>
                <th className="px-4 py-3">Servicio</th>
                <th className="px-4 py-3 rounded-tr-lg">Pago</th>
                                <th className="px-4 py-3">Comidas Incluidas</th>

              </tr>
            </thead>
            <tbody>
              {servicesData.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-100 hover:bg-gray-50 align-top"
                >
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">
                    {row.day}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">{row.where}</td>
                  <td className="px-4 py-3">{row.service}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        row.payment === "Incluido"
                          ? "bg-green-100 text-green-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {row.payment}
                    </span>
                    
                  </td>
                                    <td className="px-4 py-3 whitespace-nowrap">{row.meals}</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

    </div>
  );
}

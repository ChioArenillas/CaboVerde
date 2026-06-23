import { servicesSummary } from "@/data/data";
import { Card } from "../ui/Card";

export function ServiciosSection() {
  return (
    <div className="space-y-8">
      <Card title="Servicios">
<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

  {/* Incluido */}
  <div className="rounded-xl  border border-emerald-800">
    <div className="p-4 border-b border-emerald-800">
      <h3 className="font-bold ">
        ✅ INCLUIDO
      </h3>
    </div>

    <div className="p-3 space-y-2">
      {servicesSummary.included.map((item) => (
        <div
          key={item}
          className="rounded-lg bg-emerald-900/40 p-3 text-sm"
        >
          {item}
        </div>
      ))}
    </div>
  </div>

  {/* Fondo común */}
  <div className="rounded-xl border border-amber-800">
    <div className="p-4 border-b border-amber-800">
      <h3 className="font-bold ">
        💸 FONDO COMÚN
      </h3>
    </div>

    <div className="p-3 space-y-2">
      {servicesSummary.moneypot.map((item) => (
        <div
          key={item}
          className="rounded-lg bg-amber-900/40 p-3 text-sm"
        >
          {item}
        </div>
      ))}
    </div>
  </div>

  {/* Extras */}
  <div className="rounded-xl  border border-fuchsia-800">
    <div className="p-4 border-b border-fuchsia-800">
      <h3 className="font-bold ">
        🎯 ACTIVIDADES EXTRA
      </h3>
    </div>

    <div className="p-3 space-y-2">
      {servicesSummary.extras.map((item) => (
        <div
          key={item}
          className="rounded-lg bg-fuchsia-900/40 p-3 text-sm"
        >
          {item}
        </div>
      ))}
    </div>
  </div>

  {/* No incluido */}
  <div className="rounded-xl border border-red-800">
    <div className="p-4 border-b border-red-800">
      <h3 className="font-bold ">
        ❌ NO INCLUIDO
      </h3>
    </div>

    <div className="p-3 space-y-2">
      {servicesSummary.notIncluded.map((item) => (
        <div
          key={item}
          className="rounded-lg bg-red-900/40 p-3 text-sm"
        >
          {item}
        </div>
      ))}
    </div>
  </div>

</div>
      </Card>
    </div>
  );
}
import { servicesSummary } from "@/data/data";
import { Card } from "../ui/Card";

export function ServiciosSection() {
  return (
    <div className="space-y-8">
      <Card title="Servicios">

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          {/* INCLUIDO */}
          <div className="rounded-xl border border-emerald-200 bg-white">
            <div className="p-4 border-b border-emerald-200">
              <h3 className="font-bold text-emerald-700">
                ✅ INCLUIDO
              </h3>
            </div>

            <div className="p-3 space-y-2">
              {servicesSummary.included.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-emerald-100 bg-emerald-50 p-3 text-sm text-emerald-900"
                >
                  {item.title}
                </div>
              ))}
            </div>
          </div>

          {/* FONDO COMÚN */}
          <div className="rounded-xl border border-amber-200 bg-white">
            <div className="p-4 border-b border-amber-200">
              <h3 className="font-bold text-amber-700">
                💸 FONDO COMÚN
              </h3>
            </div>

            <div className="p-3 space-y-2">
              {servicesSummary.moneypot.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-amber-100 bg-amber-50 p-3 text-sm text-amber-900"
                >
                  <div className="flex flex-wrap items-start gap-2">
                    <div className="flex items-center">
                      <span>{item.title}</span>
                    </div>
                <span className="px-3 py-1 rounded-full bg-amber text-amber-900 text-xs font-medium">
                  💸 {item.price}
                </span>
                      {item.duration && (
                        <div className="text-amber-900">🕐{item.duration}</div>
                      )}
                    </div>
                  </div>
              ))}
            </div>
          </div>

          {/* EXTRAS */}
          <div className="rounded-xl border border-fuchsia-200 bg-white">
            <div className="p-4 border-b border-fuchsia-200">
              <h3 className="font-bold text-fuchsia-700">
                🎯 ACTIVIDADES EXTRA
              </h3>
            </div>

            <div className="p-3 space-y-2">
              {servicesSummary.extras.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-fuchsia-100 bg-fuchsia-50 p-3 text-sm text-fuchsia-900"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span>{item.title}</span>
                    </div>

                    <span className="text-xs text-fuchsia-700">
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* NO INCLUIDO */}
          <div className="rounded-xl border border-red-200 bg-white">
            <div className="p-4 border-b border-red-200">
              <h3 className="font-bold text-red-700">
                ❌ NO INCLUIDO
              </h3>
            </div>

            <div className="p-3 space-y-2">
              {servicesSummary.notIncluded.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-red-100 bg-red-50 p-3 text-sm text-red-900"
                >
                  {item.title}
                </div>
              ))}
            </div>
          </div>

        </div>

      </Card>
    </div>
  );
}
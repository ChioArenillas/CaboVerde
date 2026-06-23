import { itineraryData, mapImage } from "@/data/data";
import { motion, AnimatePresence } from "framer-motion";

export function ItinerarioSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-sky-700 mb-6">
        Itinerario Completo
      </h2>

      {/* Map */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6 flex flex-col items-center">
        <img
          src={mapImage}
          alt="Mapa de Isla Sal con puntos de interés"
          className="w-full max-w-md md:max-w-lg h-auto rounded-lg object-cover shadow-sm"
        />
        <p className="text-xs text-center text-gray-500 mt-3">
          📍 Puntos clave de nuestra ruta por la Isla de Sal
        </p>
      </div>

      <div className="relative border-l-4 border-sky-300 ml-4 md:ml-6 space-y-8">
        {itineraryData.map((item, index) => (
          <motion.div
            key={item.day}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8"
          >
            <div className="absolute -left-3.5 top-1 w-7 h-7 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-md">
              {item.day.split(" ")[1]}
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-xs font-bold text-sky-500 uppercase tracking-wide mb-1">
                {item.day}
              </div>
              <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mt-2 leading-relaxed">{item.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-medium">
                  📍 {item.where}
                </span>

                <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-medium">
                  ✅ Incluido: {item.included}
                </span>

                {item.moneypot !== "—" && (
                  <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-medium">
                    💸 Fondo común: {item.moneypot}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

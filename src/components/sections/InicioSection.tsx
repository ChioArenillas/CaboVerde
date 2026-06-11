import { MoodItemData } from "@/types/types";
import { Card } from "../ui/Card";
import { MoodItem } from "../ui/MoodItem";
import { esfuerzo, moods } from "@/data/data";

export function InicioSection() {
  

  return (
    <div className="space-y-8">
      <Card title="¿Qué es WeRoad?">
        <p>
          WeRoad organiza viajes de aventura en grupo para descubrir destinos de
          forma auténtica junto a otros viajeros con intereses similares. La
          idea es vivir experiencias, conocer gente y disfrutar del viaje
          juntos. En muchos casos, tanto para los coordinadores como para los
          participantes, también es la primera vez en el destino.
        </p>
        <p className="mt-3">
          Los viajes cuentan con un itinerario previamente diseñado para que el
          grupo pueda aprovechar al máximo la experiencia. Por ello, las
          actividades y rutas previstas no pueden modificarse según las
          preferencias individuales. Aun así, siempre intentaremos adaptarnos a
          las circunstancias del grupo y ser flexibles cuando la logística y la
          situación lo permitan.
        </p>
      </Card>

      <Card title="¿Cuál es mi papel como coordinadora?">
        <p>
          Los viajes están gestionados por Coordinadores, quienes actúan como
          líderes del grupo y compañeros de viaje, fomentando una atmósfera de
          camaradería y descubrimiento compartido. Este es mi 12º viaje como
          coordinadora de WeRoad. No soy un guía de viaje experta, por eso
          contamos con guías locales durante el viaje. También es mi primera vez
          en el destino al igual que vosotros.
        </p>
        <p className="mt-3">
          Gestiono parte del itinerario, el fondo común y sobre todo el grupo y
          los posibles inconvenientes que puedan surgir, además de resolver
          dudas. Pero soy una compañera más y comparto con vosotros la
          experiencia, durmiendo con vosotros, comiendo con vosotros y
          participando en las actividades.
        </p>
      </Card>

      <Card title="Mood del viaje">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {moods.map((mood) => (
            <MoodItem
              key={mood.title}
              icon={mood.icon}
              title={mood.title}
              desc={mood.desc}
            />
          ))}
        </div>
      </Card>
      <Card title="Esfuerzo Físico y Mood">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-1 bg-gray-200 rounded-full h-4 overflow-hidden">
            <div
              className="bg-green-500 h-full rounded-full"
              style={{ width: esfuerzo.porcentaje }}
            ></div>
          </div>
          <span className="text-sm font-bold text-green-600">{esfuerzo.title}</span>
        </div>
        <p>
          {esfuerzo.text}
        </p>
      </Card>
    </div>
  );
}

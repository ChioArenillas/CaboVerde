import { MoodItemData } from "@/types/types";
import { Card } from "../ui/Card";
import { MoodItem } from "../ui/MoodItem";

export function InicioSection() {
  const moods: MoodItemData[] = [
    {
      icon: "🌴",
      title: "Relax",
      desc: "Playas paradisíacas y atardeceres infinitos.",
    },
    {
      icon: "🤙",
      title: "Buen Rollo",
      desc: "Grupo pequeño y ambiente familiar.",
    },
    {
      icon: "🌊",
      title: "Aventura Suave",
      desc: "Excursiones accesibles para todos.",
    },
  ];

  return (
    <div className="space-y-8">
      <Card title="¿Qué es WeRoad?">
        <p>
          WeRoad organiza viajes de aventura en grupo. Su enfoque es
          proporcionar experiencias auténticas y emocionantes, permitiendo a los
          participantes explorar destinos de todo el mundo junto a otros
          viajeros que comparten intereses similares. Los viajes están guiados
          por Coordinadores, quienes actúan como líderes del grupo y compañeros
          de viaje, fomentando una atmósfera de camaradería y descubrimiento
          compartido. La filosofía de WeRoad se centra en vivir aventuras
          juntos, compartiendo nuevas experiencias y emociones mientras se
          exploran destinos a menudo por primera vez tanto para los
          coordinadores como para los participantes.
        </p>
      </Card>

      <Card title="¿Cuál es mi papel como coordinadora?">
        <p>
          Este es mi 12º viaje como coordinadora de WeRoad. No soy un guía de
          viaje experta, por eso contamos con guías locales durante el viaje.
          También es mi primera vez en el destino al igual que vosotros.
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
              style={{ width: "40%" }}
            ></div>
          </div>
          <span className="text-sm font-bold text-green-600">BAJO - MEDIO</span>
        </div>
        <p>
          Itinerario relajado 360°. Ritmo tranquilo para disfrutar de la isla
          sin prisas, con excursiones suaves y mucho tiempo de playa. ¡La
          combinación perfecta!
        </p>
      </Card>
    </div>
  );
}

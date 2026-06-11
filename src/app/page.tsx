"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- TYPES ---

interface Tab {
  id: string;
  label: string;
  icon: string;
}

interface ItineraryItem {
  day: string;
  title: string;
  desc: string;
}

interface ServiceItem {
  day: string;
  where: string;
  service: string;
  meals: string;
  payment: "Incluido" | "Fondo común";
}

interface MoodItemData {
  icon: string;
  title: string;
  desc: string;
}

interface InfoItemData {
  title: string;
  desc: string;
}

interface CheckItemData {
  text: string;
}

// --- DATA ---

const heroImage = "/embarcaciones-pequenas-agua-turquesa-cielo-nublado.jpg";

const mapImage = "/mapa-ruta-isla-sal-santa-maria.webp"; 

const tripDates = "18 - 25 Julio 2026";

const tabs: Tab[] = [
  { id: "inicio", label: "Inicio", icon: "🏠" },
  { id: "itinerario", label: "Itinerario", icon: "🗺️" },
  { id: "servicios", label: "Servicios", icon: "🏨" },
  { id: "info", label: "Info Práctica", icon: "ℹ️" },
  { id: "equipaje", label: "Equipaje", icon: "🎒" },
];

const itineraryData: ItineraryItem[] = [
  {
    day: "Sábado 18",
    title: "¡Bienvenidos a Sal!",
    desc: "Llegada al aeropuerto de Sal. Traslado al hotel en Santa Maria. Welcome meeting y cena de bienvenida para conocernos.",
  },
  {
    day: "Domingo 19",
    title: "Santa Maria y sus playas",
    desc: "Día de relax en la famosa playa de Santa Maria. Agua turquesa y arena blanca. Por la tarde, paseo por el pueblo y atardecer en el muelle.",
  },
  {
    day: "Lunes 20",
    title: "Salinas de Pedra de Lume",
    desc: "Excursión al cráter volcánico de Pedra de Lume. Flotaremos en sus aguas saladas. Por la tarde, tiempo libre para disfrutar de la playa.",
  },
  {
    day: "Martes 21",
    title: "Desierto de Viana y Naufragio",
    desc: "Ruta en 4x4 por el Desierto de Viana, un paisaje lunar increíble. Visita al naufragio del barco Cabo Santa Maria. Atardecer en el desierto.",
  },
  {
    day: "Miércoles 22",
    title: "Aventura o Relax",
    desc: "Día libre para actividades opcionales: kitesurf, buceo, snorkel o simplemente disfrutar de la piscina y la playa. ¡Tú eliges!",
  },
  {
    day: "Jueves 23",
    title: "Ruta en Quad y Buracona",
    desc: "Excursión en quad por la isla hasta la piscina natural de Buracona (Blue Eye). Almuerzo típico caboverdiano en un restaurante local.",
  },
  {
    day: "Viernes 24",
    title: "Playa, relax y compras",
    desc: "Último día completo para disfrutar del mar, comprar recuerdos en el mercado de Santa Maria y preparar las maletas.",
  },
  {
    day: "Sábado 25",
    title: "Adiós Cabo Verde",
    desc: "Último baño en el Atlántico si da tiempo, desayuno y traslado al aeropuerto. ¡Hasta la próxima aventura!",
  },
];

const servicesData: ServiceItem[] = [
  {
    day: "Sábado 18",
    where: "Santa Maria",
    service: "Llegada y traslado al hotel",
    meals: "-",
    payment: "Incluido",
  },
  {
    day: "Sábado 18",
    where: "Santa Maria",
    service: "Welcome Meeting y Cena de bienvenida",
    meals: "Cena",
    payment: "Fondo común",
  },
  {
    day: "Domingo 19",
    where: "Santa Maria",
    service: "Día de playa en Santa Maria",
    meals: "Desayuno",
    payment: "Incluido",
  },
  {
    day: "Domingo 19",
    where: "Santa Maria",
    service: "Paseo por el pueblo y muelle",
    meals: "-",
    payment: "Incluido",
  },
  {
    day: "Lunes 20",
    where: "Pedra de Lume",
    service: "Excursión a las Salinas de Pedra de Lume",
    meals: "Desayuno",
    payment: "Fondo común",
  },
  {
    day: "Martes 21",
    where: "Desierto de Viana",
    service: "Ruta en 4x4 por el Desierto de Viana",
    meals: "Desayuno",
    payment: "Fondo común",
  },
  {
    day: "Martes 21",
    where: "Desierto de Viana",
    service: "Visita al naufragio Cabo Santa Maria",
    meals: "-",
    payment: "Fondo común",
  },
  {
    day: "Miércoles 22",
    where: "Santa Maria",
    service: "Día libre (actividades opcionales)",
    meals: "Desayuno",
    payment: "Incluido",
  },
  {
    day: "Jueves 23",
    where: "Buracona",
    service: "Ruta en Quad por la isla",
    meals: "Desayuno",
    payment: "Fondo común",
  },
  {
    day: "Jueves 23",
    where: "Buracona",
    service: "Visita a la piscina natural de Buracona",
    meals: "-",
    payment: "Fondo común",
  },
  {
    day: "Jueves 23",
    where: "Buracona",
    service: "Almuerzo típico caboverdiano",
    meals: "Almuerzo",
    payment: "Fondo común",
  },
  {
    day: "Viernes 24",
    where: "Santa Maria",
    service: "Día libre / Relax / Compras",
    meals: "Desayuno",
    payment: "Incluido",
  },
  {
    day: "Sábado 25",
    where: "Aeropuerto",
    service: "Traslado al aeropuerto y despedida",
    meals: "Desayuno",
    payment: "Incluido",
  },
];

// --- COMPONENTS ---

interface CardProps {
  title: string;
  children: React.ReactNode;
}

function Card({ title, children }: CardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 hover:shadow-md transition-shadow">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        {title}
      </h2>
      <div className="text-gray-600 leading-relaxed">{children}</div>
    </div>
  );
}

interface MoodItemProps {
  icon: string;
  title: string;
  desc: string;
}

function MoodItem({ icon, title, desc }: MoodItemProps) {
  return (
    <div className="bg-sky-50 rounded-xl p-4 text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <h4 className="font-bold text-sky-800">{title}</h4>
      <p className="text-sm text-sky-600 mt-1">{desc}</p>
    </div>
  );
}


interface InfoItemProps {
  title: string;
  desc: string;
}

function InfoItem({ title, desc }: InfoItemProps) {
  return (
    <div className="mb-4 last:mb-0">
      <h4 className="font-bold text-gray-800 mb-1">{title}</h4>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

interface CheckItemProps {
  text: string;
}

function CheckItem({ text }: CheckItemProps) {
  return (
    <li className="flex items-start gap-3">
      <span className="flex-shrink-0 w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center mt-0.5">
        <svg
          className="w-3 h-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </span>
      <span className="text-gray-700">{text}</span>
    </li>
  );
}

// --- SECTIONS ---

function InicioSection() {
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
          WeRoad organiza viajes de aventura en grupo. Su enfoque
es proporcionar experiencias auténticas y emocionantes,
permitiendo a los participantes explorar destinos de todo
el mundo junto a otros viajeros que comparten intereses
similares. Los viajes están guiados por Coordinadores,
quienes actúan como líderes del grupo y compañeros de
viaje, fomentando una atmósfera de camaradería y
descubrimiento compartido. La filosofía de WeRoad se
centra en vivir aventuras juntos, compartiendo nuevas
experiencias y emociones mientras se exploran destinos a
menudo por primera vez tanto para los coordinadores
como para los participantes.
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
          <span className="text-sm font-bold text-green-600">
            BAJO - MEDIO
          </span>
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

function ItinerarioSection() {
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
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ServiciosSection() {
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

function InfoSection() {
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

function EquipajeSection() {
  const checklist: string[] = [
    "Mochila o maleta mediana (las habitaciones pueden tener poco espacio).",
    "Ropa de verano total, bañadores y ropa ligera.",
    "Gorra o sombrero y gafas de sol.",
    "Cortavientos o chaqueta fina (por la brisa nocturna).",
    "Zapatillas cómodas y sandalias de playa.",
    "Crema de sol +50 (¡el sol pega fuerte!).",
    "Adaptador de enchufe tipo C/E/F (aunque los hoteles suelen tener europeos).",
  ];

  const meds: string[] = [
    "Ibuprofeno",
    "Paracetamol",
    "Fortasec",
    "Suero Oral",
    "Antihistamínicos",
    "Tiritas",
  ];

  return (
    <div className="space-y-8">
      <Card title="Temperatura">
        <div className="flex items-center gap-4">
          <div className="text-5xl">☀️</div>
          <div>
            <p className="text-2xl font-bold text-orange-500">25ºC - 30ºC</p>
            <p className="text-gray-600">
              Clima cálido todo el año con brisa marina constante.
            </p>
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

      <Card title="Medicamentos">
        <p className="mb-4">
          Botiquín básico según necesidades personales. Se recomienda:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {meds.map((med) => (
            <div
              key={med}
              className="bg-red-50 text-red-700 px-4 py-2 rounded-lg text-sm font-medium text-center border border-red-100"
            >
              💊 {med}
            </div>
          ))}
        </div>
      </Card>

    </div>
  );
}

// --- MAIN APP ---

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("inicio");

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 font-sans text-gray-800">
      {/* Header / Hero */}
      <header className="relative w-full h-72 md:h-96 overflow-hidden">
        <img
          src={heroImage}
          alt="Cabo Verde Isla Sal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-white mb-2"
          >
            Cabo Verde · Isla Sal
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/90"
          >
            {tripDates} · Sol, playa y buen rollo en el Atlántico 🌊
          </motion.p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 overflow-x-auto">
          <div className="flex space-x-1 md:space-x-2 py-3 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? "bg-sky-500 text-white shadow-md scale-105"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "inicio" && <InicioSection />}
            {activeTab === "itinerario" && <ItinerarioSection />}
            {activeTab === "servicios" && <ServiciosSection />}
            {activeTab === "info" && <InfoSection />}
            {activeTab === "equipaje" && <EquipajeSection />}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="text-center py-6 text-gray-500 text-sm bg-white/50">
        <p>Hecho con ❤️ para los viajeros de WeRoad · Cabo Verde 2026</p>
      </footer>
    </div>
  );
}

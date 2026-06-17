
import { AppsData, DocumentationData, Esfuerzo, ItineraryItem, MoneyData, MoodItemData, ServiceItem, Tab, Temperatura } from "@/types/types";

export const heroImage = "/embarcaciones-pequenas-agua-turquesa-cielo-nublado.jpg";

export const mapImage = "/mapa-ruta-isla-sal-santa-maria.webp"; 

export const tripDates = "18 - 25 Julio 2026";

export const tabs: Tab[] = [
  { id: "inicio", label: "Inicio", icon: "🏠" },
  { id: "info", label: "Info Práctica", icon: "ℹ️" },
  { id: "itinerario", label: "Itinerario", icon: "🗺️" },
  { id: "servicios", label: "Servicios", icon: "🏨" },
  { id: "equipaje", label: "Equipaje", icon: "🎒" },
];

export const moods: MoodItemData[] = [
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

export const esfuerzo: Esfuerzo = {
      porcentaje: "40%",
      title: "BAJO - MEDIO",
      text: "Itinerario relajado 360°. Ritmo tranquilo para disfrutar de la isla sin prisas, con excursiones suaves y mucho tiempo de playa. ¡La combinación perfecta!"
    }


export const itineraryData: ItineraryItem[] = [
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
    title: "Ruta en Quad y Buracona",
    desc: "Excursión en quad por la isla hasta la piscina natural de Buracona (Blue Eye). Almuerzo típico caboverdiano en un restaurante local.",

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
    title: "Salinas de Pedra de Lume",
    desc: "Excursión al cráter volcánico de Pedra de Lume. Flotaremos en sus aguas saladas. Por la tarde, tiempo libre para disfrutar de la playa.",
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

export const servicesData: ServiceItem[] = [
  {
    day: "Sábado 18",
    where: "Santa Maria",
    service: "Noche de hotel",
    meals: "-",
    payment: "Incluido",
  },
  {
    day: "Domingo 19",
    where: "Santa Maria",
    service: "Excursión de día completo para visitar la isla con transporte.",
    meals: "Desayuno y Almuerzo",
    payment: "Incluido",
  },
  {
    day: "Domingo 19",
    where: "Santa Maria",
    service: "Noche de hotel",
    meals: "-",
    payment: "Incluido",
  },


  {
    day: "Lunes 20",
    where: "Buracona",
    service: "Ruta en Quad por la isla",
    meals: "Desayuno",
    payment: "Fondo común",
  },
    {
    day: "Lunes 20",
    where: "Santa Maria",
    service: "Noche de hotel",
    meals: "-",
    payment: "Incluido",
  },


  {
    day: "Martes 21",
    where: "",
    service: "Excursión de esnórquel con equipo de esnórquel",
    meals: "-",
    payment: "Incluido",
  },
    {
    day: "Martes 21",
    where: "",
    service: "Clase de baile",
    meals: "-",
    payment: "Fondo común",
  },

    {
    day: "Martes 21",
    where: "",
    service: "Cóctel de bienvenida al atardecer",
    meals: "-",
    payment: "Incluido",
  },
      {
    day: "Martes 21",
    where: "Santa Maria",
    service: "Noche de hotel",
    meals: "-",
    payment: "Incluido",
  },



  {
    day: "Miércoles 22",
    where: "",
    service: "Excursión de medio día en catamarán con transporte de ida y vuelta para el puerto y barra libre de bebidas y snack",
    meals: "Desayuno",
    payment: "Incluido",
  },
        {
    day: "Miércoles 22",
    where: "Santa Maria",
    service: "Noche de hotel",
    meals: "-",
    payment: "Incluido",
  },


  {
    day: "Jueves 23",
    where: "",
    service: "Clases de surf/windsurf",
    meals: "-",
    payment: "Fondo común",
  },
  {
    day: "Jueves 23",
    where: "",
    service: "Cata de 2 cervezas locales, 2 zumos naturales y 2 tapas",
    meals: "Desayuno",
    payment: "Incluido",
  },
          {
    day: "Jueves 23",
    where: "Santa Maria",
    service: "Noche de hotel",
    meals: "-",
    payment: "Incluido",
  },



  {
    day: "Viernes 24",
    where: "Santa Maria",
    service: "Día libre / Relax / Compras",
    meals: "Desayuno",
    payment: "Incluido",
  },
            {
    day: "Viernes 24",
    where: "Santa Maria",
    service: "Noche de hotel",
    meals: "-",
    payment: "Incluido",
  },



  {
    day: "Sábado 25",
    where: "",
    service: "Despedida y fin del viaje",
    meals: "Desayuno",
    payment: "Incluido",
  },
];

export const documentationData: DocumentationData = {
  documentation: [
    {
      title: "Pasaporte",
      desc: "En perfecto estado, con al menos 6 meses de vigencia residual. Siempre contigo.",
    },
    {
      title: "Visa",
      desc: "No necesaria para ciudadanos españoles.",
    },
{
  title: "Carnet de Conducir",
  desc: (
    <>
      <span className="text-red-500 font-bold">¡IMPORTANTE!</span>{" "}
      Es obligatorio para la excursión en buggies, nos lo pedirán.
      No es necesario el internacional.
    </>
  )
},
{
  title: "Tasa aeroportuaria (31 €)",
  desc: (
    <>
      Debe abonarse antes del viaje en{" "}
      <a
        href="https://www.ease.gov.cv"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-600 font-semibold hover:text-sky-800 underline"
      >
        www.ease.gov.cv
      </a>
      , preferiblemente con al menos 5 días de antelación.
    </>
  ),
},  
],
};
export const appsData: AppsData = {
    sim:

      "En Santa Maria hay una tienda donde podéis conseguir una SIM local por unos 10 € con 5 GB de datos, más 2 € por la tarjeta SIM. También existen opciones de eSIM online, pero suelen ser más caras y algunos viajeros han reportado un rendimiento irregular en comparación con las SIM locales.",
    apps: [
      {
        name: "WhatsApp",
        desc: "Comunicación del grupo.",
      },
      {
        name: "Google Maps",
        desc: "Orientación en destino.",
      },
    ],
}

  export const moneyData: MoneyData = {
  currency: "Escudo caboverdiano (CVE)  (1€ = 110 escudos)",
  recommendation: (
    <>
    <p>Los euros son aceptados en muchos lugares, pero en restaurantes es mejor cambiarlo a la moneda local (especialmente en zonas poco turísticas). Los euros pueden aceptarse, pero normalmente con un tipo de cambio menos favorable (1 € = 100 escudos). La mayoría de los restaurantes aceptan pago con tarjeta, aunque algunos pueden aplicar una comisión del 5%. </p>
    <p>Se prevee unos <span className="font-bold">300€</span> para los gastos del día a día (comidas y recuerdos). Para vuestros gastos os recomiendo usar la tarjeta Revolut, os la podéis sacar {" "}
      <a
        href="https://revolut.com/referral/?referral-code=rococf5mo!AUG2-25-AR&geo-redirect"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-600 font-semibold hover:text-sky-800 underline"
      >
         aquí  
      </a> y os la mandan a casa. </p>
    </>
  ),
  commonFund: {
    amount: "200€",
    intro: "Como ya sabéis tenemos un fondo común que se paga en efectivo al coordinador el primer día de la llegada, quien es el responsable de gestionarlo.",
    description: "Se usa para todos los gastos en los que participemos como grupo: entradas a los sitios de visita, transportes comunes, actividades extra y el fondo del coordinador. En caso de no usarse todo el fondo común, se repartirá la suma sobrante entre todos los participantes al final del viaje. Por otro lado, si se realizan más actividades de las previstas, se pedirá una suma mayor de fondo común.",
    documento: (
    <>
      Podéis consultar en este el fondo común con los ingresos y gastos actualizados en este{" "}
      <a
        href="https://docs.google.com/spreadsheets/d/1kgX2Q5pr05eD3MKLQHRoMS_NtP6HIJD4/edit?usp=sharing&ouid=114359442271263270458&rtpof=true&sd=true"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-600 font-semibold hover:text-sky-800 underline"
      >
        link 
      </a>
       .
    </>
  ), 
  },
};

export const temperatura: Temperatura = {
    icono: "☀️",
    grados: "Temperatura diurna: 27 °C – 30 °C",
    text: "Clima cálido todo el año con brisa marina constante."
}
export const checklist: string[] = [
  "🎒 Mochila o maleta mediana (las habitaciones pueden tener poco espacio).",
  "👕 Ropa de verano total, bañadores y ropa ligera.",
  "🧢 Gorra o sombrero y gafas de sol.",
  "🧣 Un pañuelo o buff para cubrirte la cara y protegerte de la arena durante la excursión en buggy.",
  "👕 Ropa que pueda ensuciarse para la actividad en buggy.",
  "👟 Escarpines o zapatillas de agua para la excursión por la isla (hay que caminar sobre rocas en la zona donde se observan los tiburones). También pueden alquilarse allí por unos 3 €.",
  "👟 Zapatillas cómodas y sandalias de playa.",
  "🧴 Crema de sol +50 (¡el sol pega fuerte!).",
  "🔌 Se utilizan enchufes de tipo europeo, los mismos que en España, no necesario adaptador.",
];
  export const meds: string[] = [
    "Ibuprofeno",
    "Paracetamol",
    "Biodramina para el mareo",
    "Fortasec",
    "Suero Oral",
    "Antihistamínicos",
    "Tiritas",
  ];


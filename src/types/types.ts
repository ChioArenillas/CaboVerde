// --- TYPES ---

export interface Tab {
  id: string;
  label: string;
  icon: string;
}

export interface Esfuerzo  {
      porcentaje: string,
      title: string,
      text: string
}

export interface ItineraryItem {
  day: string;
  title: string;
  desc: string;
}

export interface ServiceItem {
  day: string;
  where: string;
  service: string;
  meals: string;
  payment: "Incluido" | "Fondo común";
}

export interface MoodItemData {
  icon: string;
  title: string;
  desc: string;
}


export interface DocumentationItem {
  title: string;
  desc: string;
}

export interface DocumentationData {
  documentation: DocumentationItem[];
}

export interface AppItem {
  name: string;
  desc: string;
}

export interface AppsData {
  sim: string;
  apps: AppItem[];
}
export interface MoneyData{
  currency: string,
    recommendation: string,
  commonFund: {
    amount: string,
    intro: string,
    description: string
}
}

export interface Temperatura{
    icono: string,
    grados: string,
    text: string
}
export interface CheckItemData {
  text: string;
}
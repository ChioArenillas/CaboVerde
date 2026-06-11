// --- TYPES ---

export interface Tab {
  id: string;
  label: string;
  icon: string;
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

export interface InfoItemData {
  title: string;
  desc: string;
}

export interface CheckItemData {
  text: string;
}
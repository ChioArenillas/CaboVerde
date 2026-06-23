// --- TYPES ---

import { ReactNode } from "react";

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
where: string;
included: string;
moneypot: string;
}
export interface IncludedItem {
  title: string;
}

export interface MoneyPotItem {
  title: string;
  price: string;
  duration?: string;
}

export interface ExtrasItem {
  title: string;
  price?: string;
  duration?: string;
}

export interface NotIncludedItem {
  title: string;
}

export interface ServicesSummary {
  included: IncludedItem[];
  moneypot: MoneyPotItem[];
  extras: ExtrasItem[];
  notIncluded: NotIncludedItem[];
}
export interface MoodItemData {
  icon: string;
  title: string;
  desc: string;
}


export interface DocumentationItem {
  title: string;
  desc: ReactNode;
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
    recommendation: ReactNode,
  commonFund: {
    amount: string,
    intro: string,
    description: string,
    documento: ReactNode
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
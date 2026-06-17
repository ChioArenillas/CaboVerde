"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { InicioSection } from "@/components/sections/InicioSection";
import { ItinerarioSection } from "@/components/sections/ItinerarioSection";
import { ServiciosSection } from "@/components/sections/ServiciosSection";
import { InfoSection } from "@/components/sections/InfoSection";
import { EquipajeSection } from "@/components/sections/EquipajeSection";
import { tabs } from "@/data/data";



export default function App() {
        const [activeTab, setActiveTab] = useState<string>("inicio");


  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 font-sans text-gray-800">
      <Header />
      <Navigation 
      tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab} />

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
            {activeTab === "info" && <InfoSection />}
            {activeTab === "itinerario" && <ItinerarioSection />}
            {activeTab === "servicios" && <ServiciosSection />}
            {activeTab === "equipaje" && <EquipajeSection />}
          </motion.div>
        </AnimatePresence>
      </main>
    <Footer />
    </div>
  );
}

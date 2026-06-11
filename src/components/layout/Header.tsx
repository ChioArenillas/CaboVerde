import { heroImage, tripDates } from "@/data/data";
import { motion } from "framer-motion";


export default function Header() {
  return (
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
            Cabo Verde · Isla de la Sal
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
  )
}


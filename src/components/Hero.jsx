import React from "react";
import { motion } from "framer-motion";
import mobile from "../assets/background/background-mobile.png";
import desktop from "../assets/background/background-desktop.png";

function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-[95%] m-auto mt-5 min-h-[80vh] rounded-4xl overflow-hidden"
    >
      {/* MOBILE IMAGE */}
      <motion.img
        src={mobile}
        alt="Hero Mobile"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 w-full h-full object-cover md:hidden"
      />

      {/* DESKTOP IMAGE */}
      <motion.img
        src={desktop}
        alt="Hero Desktop"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      />

      {/* CENTERED TEXT */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-10 mt-30 h-full text-white gap-6 pt-20 md:pt-32 pb-20">
        {/* HEADLINE */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-3xl max-w-[400px] font-light md:text-6xl md:max-w-2xl leading-tight"
        >
          Accelerating Electric Mobility in Africa
        </motion.p>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base md:text-lg max-w-[300px] md:max-w-xl"
        >
          We're building the energy backbone that will power Africa's transition
          to clean, reliable mobility.
        </motion.p>

        {/* BUTTON */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="bg-white text-black md:px-10 px-28 py-5 rounded-full font-medium hover:bg-gray-100 transition-colors mt-6"
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
}

export default HeroSection;

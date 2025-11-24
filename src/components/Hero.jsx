import React from "react";
import mobile from "../assets/background/background-mobile.png";
import desktop from "../assets/background/background-desktop.png";

function HeroSection() {
  return (
    <div className="relative w-[95%] m-auto mt-5 min-h-[80vh] rounded-4xl overflow-hidden">

      {/* MOBILE IMAGE */}
      <img
        src={mobile}
        alt="Hero Mobile"
        className="absolute inset-0 w-full h-full object-cover md:hidden"
      />

      {/* DESKTOP IMAGE */}
      <img
        src={desktop}
        alt="Hero Desktop"
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      />

      {/* CENTERED TEXT OVERLAY */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-10 mt-30 h-full text-white gap-6 pt-20 md:pt-32 pb-20">

        <p className="text-3xl max-w-[400px] font-light md:text-6xl md:max-w-2xl leading-tight">
          Accelerating Electric Mobility in Africa
        </p>

        <p className="text-base md:text-lg max-w-[300px] md:max-w-xl">
          We're building the energy backbone that will power Africa's transition
          to clean, reliable mobility.
        </p>

        <button className="bg-white text-black md:px-10 px-28 py-5 rounded-full font-medium hover:bg-gray-100 transition-colors mt-6">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default HeroSection;

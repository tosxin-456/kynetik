import React from "react";
import mobile from "../assets/background/background-mobile.png";
import desktop from "../assets/background/background-desktop.png";

function HeroSection() {
  return (
    <>
      <div className="relative w-[95%] m-auto min-h-[80vh]  mt-5">
        {/* MOBILE IMAGE */}
        <img
          src={mobile}
          alt="Hero Mobile"
          className="absolute inset-0 w-full h-full object-cover md:hidden rounded-4xl"
        />

        {/* DESKTOP IMAGE */}
        <img
          src={desktop}
          alt="Hero Desktop"
          className="absolute inset-0 w-full h-full object-cover hidden md:block rounded-4xl"
        />

        {/* CENTERED TEXT OVERLAY */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-10 text-white min-h-[80vh]">
          <h1 className="text-3xl md:text-5xl font-bold max-w-2xl">
            Accelerating Electric Mobility in Africa
          </h1>

          <p className="mt-4 text-base md:text-lg max-w-xl">
            We're building the energy backbone that will power Africa's
            transition to clean, reliable mobility.
          </p>

          <button className="mt-6 bg-white text-black px-9 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
}

export default HeroSection;

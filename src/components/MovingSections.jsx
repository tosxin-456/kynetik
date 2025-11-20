import React from "react";
import petrol from "../assets/petrol.svg";
import solar from "../assets/solar.svg";
import money from "../assets/moneyy.svg";

function MovingSections() {
  return (
    <div className="relative">
      {/* Section 1 - Orange */}
      <div className="sticky top-0 z-10">
        <div className="bg-[#E96A32] flex flex-col md:flex-row items-center md:items-center m-5 rounded-4xl px-6 py-7 md:py-10 gap-8 min-h-screen md:min-h-0">
          {/* Left Column: Text */}
          <div className="md:w-1/2 text-white">
            <p className="text-lg mb-2 uppercase">Our Core</p>
            <h1 className="text-3xl md:text-4xl font-normal mb-7">
              Rebuilding the Backbone of Mobility
            </h1>
            <p className="text-base mt-20 md:text-[15px]">
              Kynetik is creating the infrastructure that will power Africa's
              transition to clean and reliable mobility. Our ecosystem—battery
              swapping, fast charging, clean energy systems, and purpose-built
              electric motorcycles—brings a new level of efficiency and
              opportunity to riders, businesses, and entire communities.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={petrol}
              alt="Electric mobility"
              className="w-full h-[400px] md:h-[600px] rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* Section 2 - Gray */}
      <div className="sticky top-0 z-20">
        <div className="bg-[#F7F7F7] flex flex-col md:flex-row items-center md:items-center m-5 rounded-4xl px-6 py-7 md:py-10 gap-8 min-h-screen md:min-h-0">
          {/* Left Column: Text */}
          <div className="md:w-1/2 text-[#282828]">
            <p className="text-lg mb-2 uppercase">Our Core</p>
            <h1 className="text-3xl md:text-4xl font-normal mb-7">
              Energy That Never Stops
            </h1>
            <p className="text-base mt-20 md:text-[15px]">
              Our network is designed for consistency and scale. Automated
              stations offer instant battery swaps. Manned stations provide
              personal support and coverage in high-demand areas. With
              IoT-driven station placement and real-time battery monitoring,
              riders always stay powered—no delays, no uncertainty.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={solar}
              alt="Electric mobility"
              className="w-full h-[400px] md:h-[600px] rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* Section 3 - White */}
      <div className="sticky top-0 z-30">
        <div className="bg-[#FFFFFF] flex flex-col md:flex-row items-center md:items-center m-5 rounded-4xl px-6 py-7 md:py-10 gap-8 shadow-lg min-h-screen md:min-h-0">
          {/* Left Column: Text */}
          <div className="md:w-1/2 text-[#282828]">
            <p className="text-lg mb-2 uppercase">Our Core</p>
            <h1 className="text-3xl md:text-4xl font-normal mb-7">
              More Power. More Profit.
            </h1>
            <p className="text-base mt-20 md:text-[15px]">
              Kynetik riders earn up to 50% more than petrol riders thanks to
              lower operating costs and stable electricity pricing. No fuel
              hikes. No unpredictability. Just reliable, affordable power.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={money}
              alt="Electric mobility"
              className="w-full h-[400px] md:h-[600px] rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* Spacer to allow last section to be visible */}
      <div className="h-screen"></div>
    </div>
  );
}

export default MovingSections;
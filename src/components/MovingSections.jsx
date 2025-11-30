import React from "react";
import { motion } from "framer-motion";
import petrol from "../assets/petrol.svg";
import solar from "../assets/solar.svg";
import money from "../assets/moneyy.svg";

function MovingSections() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative">
      {/* Section 1 - Orange */}
      <div className="md:sticky md:top-0 md:z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-[#E96A32] flex flex-col md:flex-row items-center md:items-center m-5 rounded-4xl px-8 py-7 md:py-10 gap-8 min-h-[85vh] md:min-h-0"
        >
          {/* Left Column: Text */}
          <div className="md:w-1/2 text-white">
            <p className="text-lg mb-8 uppercase">Our Core</p>
            <p className="text-5xl md:text-5xl leading-tight mb-7">
              Rebuilding the Backbone of Mobility
            </p>
            <p className="text-base mt-20 md:text-[12px] max-w-[350px] ">
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
              className="w-full h-[300px] md:h-[400px] rounded-lg object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Section 2 - Gray */}
      <div className="md:sticky md:top-0 md:z-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-[#F7F7F7] flex flex-col md:flex-row items-center md:items-center m-5 rounded-4xl px-8 py-7 md:py-10 gap-8 min-h-[85vh] md:min-h-0"
        >
          {/* Left Column: Text */}
          <div className="md:w-1/2 text-[#282828]">
            <p className="text-lg mb-8 uppercase">Our Core</p>
            <p className="text-5xl md:text-5xl leading-tight mb-7">
              Energy That Never Stops
            </p>
            <p className="text-base mt-20 md:text-[12px] max-w-[350px] ">
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
              className="w-full h-[300px] md:h-[400px] rounded-lg object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Section 3 - White */}
      <div className="md:sticky md:top-0 md:z-30">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="bg-[#FFFFFF] flex flex-col md:flex-row items-center md:items-center m-5 rounded-4xl px-8 py-7 md:py-10 gap-8  min-h-[85vh] md:min-h-0"
        >
          {/* Left Column: Text */}
          <div className="md:w-1/2 text-[#282828]">
            <p className="text-lg mb-8 uppercase">Our Core</p>
            <p className="text-5xl md:text-5xl leading-tight mb-7">
              More Power. More Profit.
            </p>
            <p className="text-base mt-20 md:text-[12px] max-w-[350px] ">
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
              className="w-full h-[300px] md:h-[400px] rounded-lg object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default MovingSections;

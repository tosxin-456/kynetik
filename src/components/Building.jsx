import React from "react";
import { motion } from "framer-motion";
import building from "../assets/builind-desktop.svg";
import energy from "../assets/energy.svg";
import min from "../assets/min.svg";
import power from "../assets/power.svg";

// Animation variants
const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

const desktop_data = [
  {
    id: 0,
    icon: energy,
    header: "Energy Backbone",
    subtext:
      "A dedicated EV energy network brings reliability, predictability, and control back to riders and cities."
  },
  {
    id: 1,
    icon: min,
    header: "Economic Mobility for Millions",
    subtext:
      "Electric mobility cuts operating costs and increases earnings,creating real financial uplift at scale."
  },
  {
    id: 2,
    icon: power,
    header: "Built for African Realities",
    subtext:
      "Durable EVs, data-driven infrastructure, and scalable systems make mass adoption possible—without forcing Africa to fit into foreign models."
  }
];
const mobile_data = [
  {
    id: 0,
    icon: energy,
    header: "Energy That Never Stops",
    subtext:
      "We deploy a dual-station model (automated + manned), optimized using IoT-driven analytics. This ensures maximum uptime, efficient asset placement, and predictable energy delivery."
  },
  {
    id: 1,
    icon: min,
    header: "Charge in Minutes, Move for Hours",
    subtext:
      "Our fast-charging network increases fleet productivity and reduces rider downtime, strengthening overall system throughput."
  },
  {
    id: 2,
    icon: power,
    header: "More Power. More Profit.",
    subtext:
      "Kynetik delivers earning improvements of up to 50% for riders by replacing volatile fuel costs with stable, low-cost electricity—unlocking superior lifetime value and high user retention."
  }
];

function Building() {
  return (
    <>
      {/* DESKTOP */}
      <div className="mt-16 mb-16 hidden md:block px-6 md:px-4">
        {/* Section Title */}
        <motion.h2
          className="text-sm uppercase text-left text-[#E96A32] mb-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why we're building
        </motion.h2>

        {/* Grid Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {desktop_data.map((item, index) => (
            <motion.div
              key={item.id}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15
              }}
              whileHover={{ scale: 1.03 }}
              className="flex flex-col bg-[#F7F7F7] p-3 rounded-2xl w-full mx-auto space-y-4 shadow-sm"
            >
              {/* Header + Icon */}
              <div className="flex items-center justify-between w-full">
                <p className="text-md font-medium max-w-[80%]">{item.header}</p>

                <div className="h-12 w-12 flex items-center justify-center">
                  <img src={item.icon} alt="icon" className="h-10 w-10" />
                </div>
              </div>

              {/* Subtext */}
              <p className="text-gray-600 py-5 text-[12px] leading-relaxed">
                {item.subtext}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MOBILE */}
      <div className="mt-16 block mb-36 md:hidden px-6 md:px-4">
        {/* Section Title */}
        <motion.h2
          className="text-sm text-left text-[#E96A32] mb-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why we're building
        </motion.h2>

        {/* Grid Items */}
        <div className="grid grid-cols-1 gap-4">
          {mobile_data.map((item, index) => (
            <motion.div
              key={item.id}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15
              }}
              className="flex flex-col bg-[#F7F7F7] p-3 rounded-xl w-full mx-auto space-y-4 shadow-sm"
            >
              {/* Header + Icon */}
              <div className="flex items-center justify-between w-full">
                <p className="text-md font-medium max-w-[80%]">{item.header}</p>

                <div className="h-12 w-12 flex items-center justify-center">
                  <img src={item.icon} alt="icon" className="h-10 w-10" />
                </div>
              </div>

              {/* Subtext */}
              <p className="text-gray-600 mb-7 mt-7 text-[11px] leading-relaxed">
                {item.subtext}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Building;

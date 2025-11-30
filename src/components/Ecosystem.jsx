import React from "react";
import { motion } from "framer-motion";
import eco from "../assets/ecosystem.svg";
import group from "../assets/Group_desktop.svg";
import group_mobile from "../assets/Group 48096798.svg";

function Ecosystem() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="bg-[#FFFFFF] flex flex-col md:flex-row items-start m-5 rounded-4xl px-8 py-7 md:py-10 gap-8 "
      >
        {/* Left Column: Heading */}
        <div className="md:w-1/2 text-[#282828] flex flex-col justify-start">
          <p className="text-5xl leading-tight">
            <span className="parabole-text">Our</span> Ecosystem
          </p>
        </div>

        {/* Right Column: Text */}
        <div className="md:w-1/2 text-[#282828] flex flex-col justify-start space-y-6">
          <p className="text-base md:text-[17px]">
            Our ecosystem connects smart battery-swap stations, fast chargers,
            clean energy systems, and durable electric motorcycles built
            specifically for African roads and real-world hustle.
          </p>
          <p className="text-base md:text-[17px]">
            We’re not just replacing petrol with batteries. We’re rewiring the
            economics of movement—creating an energy network and mobility system
            that’s cheaper, faster, and far more accessible for millions.
          </p>
        </div>
      </motion.div>

      <div className="w-[90%] md:mt-[200px] mb-[50px] md:mb-[100px] mt-[50px] m-auto flex flex-col items-center gap-8">
        {/* Desktop Image */}
        <img
          src={group}
          alt="Electric mobility"
          className="hidden md:block w-full h-[500px] md:h-auto object-cover rounded-3xl"
        />
        {/* Mobile Image */}
        <img
          src={eco}
          alt="Electric mobility"
          className="block md:hidden w-full h-auto object-cover rounded-3xl"
        />
        {/* Eco Image */}
        {/* <img src={eco} alt="" className="max-w-full" /> */}
      </div>
      <div
        style={{ backgroundColor: "rgba(2,1,32,0.16)" }}
        className="h-[1px] w-[95%] m-auto mb-8"
      ></div>
    </div>
  );
}

export default Ecosystem;

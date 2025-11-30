import React from "react";
import { motion } from "framer-motion";
import money from "../assets/built.svg";



export default function BuiltForTheFuture() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="w-[95%] mt-[50px] m-auto">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible" // <- animate instead of whileInView
        transition={{ duration: 0.6, delay: 0.25 }}
        className="bg-[#F1EDE9] rounded-4xl flex flex-col md:flex-row items-start justify-start m-0 px-0 py-0 min-h-[85vh] md:min-h-screen"
      >
        {/* Text Column (Right on Desktop, First on Mobile) */}
        <div className="md:w-1/2 w-full px-6 py-6 text-[#282828] space-y-4 md:space-y-5 order-1 md:order-2 h-full flex flex-col justify-between">
          <p className="text-5xl md:text-6xl leading-tight mb-4">
            Built for the <span className="parabole-text">Future</span> We Need
          </p>

          <div className="flex">
            <span className="h-2 w-2 mt-2 bg-orange-500 rounded-full flex-shrink-0"></span>
            <div className="ml-3 space-y-3">
              <p className="text-[15px] md:text-[18px] mb-[20px]  leading-relaxed">
                Kynetik began with a simple question
              </p>
              <p className="text-[15px] md:text-[18px] mb-[20px]   font-medium leading-relaxed">
                What if mobility in Africa actually worked for everyone?
              </p>
              <p className="text-[15px] md:text-[18px] mb-[20px]   font-medium leading-relaxed">
                What if riders could earn more without being crushed by fuel
                costs?
              </p>
              <p className="text-[15px] md:text-[18px] mb-[20px]   font-medium leading-relaxed">
                What if cities could breathe cleaner? That question became our
                mission.
              </p>
            </div>
          </div>

          <p className="text-[15px] md:text-[18px] mb-[20px]  font-bold uppercase leading-relaxed">
            That question became our mission.
          </p>
          <p className="text-[15px] md:text-[18px]  leading-relaxed">
            We’re building the energy backbone that will carry Africa into its
            electric future. Not in theory, on the ground, in the streets, where
            movement truly matters.
          </p>
        </div>

        {/* Image Column (Left on Desktop, Second on Mobile) */}

        <div className="md:w-1/2 w-full flex justify-center md:justify-start order-2 md:order-1">
          <img
            src={money}
            alt="Electric mobility"
            className="
              w-[100%] 
              h-[500px] md:h-full
              md:w-auto
              object-cover
              rounded-3xl
            "
          />
        </div>
      </motion.div>
    </div>
  );
}

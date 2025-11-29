import React from "react";
import { motion } from "framer-motion";
import letter from "../assets/letter.svg";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 }
};

function LetterSection() {
  return (
    <>
      {/* Divider Line */}
      <motion.div
        style={{ backgroundColor: "rgba(2,1,32,0.16)" }}
        className="h-[1px] w-[90%] m-auto md:mt-20 mt-8 mb-8"
        initial={{ opacity: 0, width: "60%" }}
        whileInView={{ opacity: 1, width: "90%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      ></motion.div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 px-6 md:px-10 max-w-7xl mx-auto">
        {/* TEXT */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[#616161] text-4xl md:text-5xl text-left leading-tight"
        >
          <span className="text-[#232323]">Kynetik</span> delivers the{" "}
          <span className="text-[#232323]">infrastructure</span> required to
          scale <span className="text-[#232323]">electric mobility</span> across
          the continent. Our integrated network of energy solutions ensures
          reliable, clean, and{" "}
          <span className="text-[#232323]">cost-efficient transportation.</span>
        </motion.p>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="h-56 w-56 shrink-0 md:block hidden -ml-3"
        >
          <img
            src={letter}
            alt="Letter Visual"
            className="h-72 w-72 shrink-0 md:block hidden"
          />
        </motion.div>
      </div>
    </>
  );
}

export default LetterSection;

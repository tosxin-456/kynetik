import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ZeroSection() {
  return (
    <div className="relative bg-[#F8F7F5] md:mb-[50px] p-10">
      {/* Top line divider */}
      <div
        style={{ backgroundColor: "rgba(2,1,32,0.16)" }}
        className="h-[1px] w-full mb-8"
      ></div>

      {/* Main layout */}
      <div className="grid md:grid-cols-2 gap-20 items-start">
        {/* LEFT: Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[10px] uppercase font-[4-mt-6] text-[#020120]"
        >
          Built for the Riders <br /> Who Move Nations
        </motion.h2>

        {/* RIGHT: Description + KPIs */}
        <div>
          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[#232323] max-w-xl leading-relaxed mb-14"
          >
            A single rider often supports multiple dependents. By cutting daily
            expenses and boosting earnings, Kynetik improves income for families
            across Africa.
          </motion.p>

          {/* KPI GRID */}
          <div className="space-y-12">
            {/* --- Row 1 (45% + 50%) --- */}
            <div className="grid grid-cols-2 md:gap-8 gap-2">
              {/* 45% */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="flex items-start gap-4"
              >
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "6rem" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-[#E96A32] w-[1px]"
                ></motion.div>

                <div>
                  <p className="text-5xl text-[#020120]">45%</p>
                  <p className="text-[10px] text-[#616161] mt-6">
                    Up to 45% higher <br /> take-home pay
                  </p>
                </div>
              </motion.div>

              {/* 50% */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex items-start gap-4"
              >
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "6rem" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-[#E96A32] w-[1.5px] md:w-[1px]"
                ></motion.div>

                <div>
                  <p className="text-5xl text-[#020120]">50%</p>
                  <p className="text-[10px] text-[#616161] mt-4">
                    50% lower <br className="md:hidden" />
                    powering costs
                  </p>
                </div>
              </motion.div>
            </div>

            {/* --- Row 2 (ZERO) --- */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex items-start gap-4"
            >
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "6rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[#E96A32] w-[1px]"
              ></motion.div>

              <div>
                <p className="text-5xl text-[#020120]">ZERO</p>
                <p className="text-[10px] text-[#616161] mt-5">
                  Zero emissions <br className="md:hidden" /> from every ride
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

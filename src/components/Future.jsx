import React from "react";
import { motion } from "framer-motion";

export default function Future() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-[#E96A32] flex justify-center items-center px-6 py-12 md:py-20 m-5 rounded-4xl min-h-[40vh]"
    >
      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl w-full">
        {/* Left Column */}
        <div className="md:w-1/2 text-white flex flex-col items-center text-center">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl font-normal mb-3"
          >
            Move Into the Future <br /> With Us
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base mt-3 mb-3 md:text-[15px]"
          >
            Kinetiks gives you the infrastructure, technology, and reliability
            to stay ahead of the shift. Whether you're a rider, business, or
            city, we help you move cleaner, earn more, and build a future that
            actually works.
          </motion.p>

          {/* Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-white text-black px-15 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Join Us
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

import React from "react";
import letter from "../assets/mailbox.svg";
import { motion } from "framer-motion";

export default function LetterModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0 bg-black/50 backdrop-blur-sm
        flex items-center justify-center
        z-50 px-4
      "
    >
      {/* MODAL CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="
          bg-white rounded-2xl p-6 md:p-10 max-w-md w-full
          text-center shadow-xl relative
        "
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="
            absolute top-3 right-3 text-gray-600 hover:text-black
            text-xl font-bold
          "
        >
          ×
        </button>

        {/* IMAGE */}
        <img
          src={letter}
          alt="letter icon"
          className="w-20 md:w-24 mx-auto mb-4"
        />

        {/* TEXT */}
        <p className="text-gray-700 leading-relaxed">
          If you'd like to explore our projects, products, or learn more about
          how we're reimagining clean mobility in Africa, you can send us a
          mail. We look forward to connecting with you!
        </p>

        {/* BUTTON */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="
            bg-[#E96A32] text-white w-full py-4 rounded-full
            font-medium hover:bg-orange-500 transition-colors mt-6
          "
        >
          Send a mail
        </motion.button>
      </motion.div>
    </div>
  );
}

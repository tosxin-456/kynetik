import React from "react";
import letter from "../assets/letter.svg";

function LetterSection() {
  return (
    <div className="flex flex-col my-5 md:flex-row items-center justify-center gap-6 md:gap-8 px-6 md:px-10 max-w-7xl mx-auto">
      {/* Text Section */}
      <p className="text-[#616161] text-4xl md:text-5xl text-left md:text-left font-medium leading-tight">
        <span className="text-[#232323]">Kynetik</span> delivers the{" "}
        <span className="text-[#232323]">infrastructure</span> required to scale{" "}
        <span className="text-[#232323]">electric mobility</span> across the
        continent. Our integrated network of energy solutions ensures reliable,
        clean, and{" "}
        <span className="text-[#232323]">cost-efficient transportation.</span>
      </p>

      {/* Image Section */}
      <img
        src={letter}
        alt="Letter Visual"
        className="h-56 w-56 shrink-0 md:block hidden"
      />
    </div>
  );
}

export default LetterSection;

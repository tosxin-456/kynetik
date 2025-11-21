import React from "react";

function Future() {
  return (
    <div className="bg-[#E96A32] flex flex-col md:flex-row items-center md:items-center m-5 rounded-4xl px-6 py-15 md:py-10 gap-8 md:hidden">
      {/* Left Column: Text */}
      <div className="md:w-1/2 text-white flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl text-center font-normal mb-3">
          Move Into the Future With Us
        </h1>
        <p className="text-base text-center mt-3 md:text-[15px]">
          Your health journey starts here. Join Sophia and experience healthcare
          designed for the modern world.
        </p>
        <button className="mt-3 bg-white text-black px-9 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Future;

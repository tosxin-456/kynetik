import React from "react";

function Future() {
  return (
    <div className="bg-[#E96A32] flex justify-center items-center px-6 py-12 md:py-20 m-5 rounded-4xl min-h-[40vh]">
      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl w-full">
        {/* Left Column: Text */}
        <div className="md:w-1/2 text-white flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl font-normal mb-3">
            Move Into the Future With Us
          </h1>
          <p className="text-base mt-3  mb-3 md:text-[15px]">
            Your health journey starts here. Join Sophia and experience
            healthcare designed for the modern world.
          </p>
          <button className="mt-6 bg-white text-black px-15 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Future;

import React, { useState } from "react";
import logo from "../assets/logo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="p-4 flex items-center justify-between relative">
      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        onClick={toggleMenu}
        className="cursor-pointer"
      />

      {/* Desktop Links */}
      <div className="hidden md:flex flex-1 items-center justify-center gap-10">
        <div className="bg-[#F1F1F1] rounded-full p-2 px-3.5 cursor-pointer">
          About
        </div>
      </div>

      <div className="hidden md:flex">
        <div className="bg-[#E96A32] text-white rounded-full p-2 px-3.5 cursor-pointer">
          Contact Us
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-black bg-[#F1F1F1] rounded-full p-2 px-3.5 font-medium cursor-pointer"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-200 flex flex-col items-center space-y-2 p-4 z-50 md:hidden">
          <div className="text-black font-medium cursor-pointer">About</div>
          <div className="text-black font-medium cursor-pointer">
            Contact Us
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom"; // ← Required for navigation
import logo from "../assets/kynetik.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="p-4 flex items-center md:w-[98%] m-auto justify-between relative">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Logo" className="cursor-pointer w-40" />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex flex-1 items-center justify-center gap-10">
        <Link
          to="/about"
          className="bg-[#F1F1F1] text-[12px] rounded-full p-1 px-2 cursor-pointer"
        >
          About
        </Link>
      </div>

      <div className="hidden md:flex">
        <Link
          to="/contact"
          className="bg-[#E96A32] text-[15px] text-white rounded-full p-2 px-3.5 cursor-pointer"
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-black border-[1px] border-[#090A0B40] bg-[#F1F1F1] rounded-full p-2 px-3.5 font-medium cursor-pointer"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-200 flex flex-col items-center space-y-2 p-4 z-50 md:hidden">
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="text-black font-medium cursor-pointer"
          >
            About
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="text-black font-medium cursor-pointer"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

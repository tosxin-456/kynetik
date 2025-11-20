import React, { useState } from "react";
import logo from "../assets/logo.svg";

import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="p-4 flex items-center justify-between relative">
        {/* Logo */}
        <img src={logo} alt="Logo" onClick={toggleMenu} />

        {/* Desktop Links */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-10">
          <div className="bg-[#F1F1F1] rounded-full p-2 px-3.5 ">About</div>
        </div>

        <div className="hidden md:flex">
          <div className="bg-[#E96A32] text-[#FFFFFF] rounded-full p-2 px-3.5 ">
            Contact Us
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-gray-200 flex flex-col items-center space-y-2 p-4 md:hidden">
            <div className="text-blue-500 ">About</div>
            <div className="text-green-500 ">Contact Us</div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import linkedIN from "../assets/linkedIn.svg";
import Xicon from "../assets/X.svg";
import logo from "../assets/kynetik_footer.svg";

export default function Footer() {
  return (
    <footer className="relative mt-[100px] text-black overflow-visible">
      {/* Main Container */}
      <div className="bg-white w-full px-6 sm:px-10 py-10">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start w-full gap-10">
          {/* Left Section */}
          <div className="text-sm md:text-base text-left sm:text-left w-full sm:w-1/2 space-y-4">
            <p className="max-w-[300px]">
              Building the energy infrastructure for Africa’s electric mobility
              future.
            </p>

            {/* Social Icons */}
            <div className="flex justify-start sm:justify-start space-x-6 mt-4">
              <a href="#">
                <img src={facebook} alt="Facebook" className="w-10 h-10" />
              </a>
              <a href="#">
                <img src={instagram} alt="Instagram" className="w-10 h-10" />
              </a>
              <a href="#">
                <img src={linkedIN} alt="LinkedIn" className="w-10 h-10" />
              </a>
              <a href="#">
                <img src={Xicon} alt="X" className="w-10 h-10" />
              </a>
            </div>
          </div>

          {/* Right Section (Links) */}
          <div className="grid grid-cols-2 gap-y-3 text-sm md:text-base w-full sm:w-1/2 text-left sm:text-right">
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <Link to="/careers" className="hover:underline">
              Careers
            </Link>

            <Link to="/technology" className="hover:underline">
              Technology
            </Link>
            <Link to="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>

            <Link to="/why-electric" className="hover:underline">
              Why Electric
            </Link>
            <Link to="/terms" className="hover:underline">
              Terms Of Service
            </Link>

            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full text-center bg-white pb-10 pt-6">
        <img
          src={logo}
          alt="Kynetix Logo"
          className="mx-auto w-[60%] sm:w-[40%] md:w-[25%]"
        />
        <p className="text-xs mt-2 text-gray-600">
          © 2025 Kynetik Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

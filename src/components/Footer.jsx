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
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start text-[12px] w-full gap-10">
          {/* Left Section */}
          <div className="text-sm text-[12px] md:text-base text-left sm:text-left w-full sm:w-1/2 space-y-10">
            <p className="max-w-[300px] md:text-[12px] text-[14px] ">
              Building the energy infrastructure for Africa’s electric mobility
              future.
            </p>

            {/* Social Icons */}
            <div className="flex justify-start sm:justify-start space-x-6 md:mt-20">
              <a href="#">
                <img src={facebook} alt="Facebook" className="md:w-7 md:h-7 h-9 w-9" />
              </a>
              <a href="#">
                <img src={instagram} alt="Instagram" className="md:w-7 md:h-7 h-9 w-9" />
              </a>
              <a href="#">
                <img src={linkedIN} alt="LinkedIn" className="md:w-7 md:h-7 h-9 w-9" />
              </a>
              <a href="#">
                <img src={Xicon} alt="X" className="md:w-7 md:h-7 h-9 w-9" />
              </a>
            </div>
          </div>

          {/* Right Section (Links) */}
          <div className="grid grid-cols-2 text-[12px] gap-y-10 text-sm md:text-left w-full sm:w-1/2 text-left sm:text-right">
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
      <div className="w-full md:mt-40 text-center bg-white pb-10 pt-6">
        <img
          src={logo}
          alt="Kynetix Logo"
          className="mx-auto w-[95%] sm:w-[95%] md:w-[95%]"
        />
        <p className="text-xs mt-10 text-gray-600">
          © 2025 Kynetik Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

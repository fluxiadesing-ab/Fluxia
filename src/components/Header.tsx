"use client";

import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import Image from "next/image";

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      {/* Top Announcement Bar */}
      <div className="bg-black border-b border-gray-800">
        <div className="container mx-auto px-6 py-2">
          <p className="text-center text-sm text-gray-300">
            Change your life with small surprises that keep your marriage alive.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-between">
          {/* Navigation Links */}
          <nav className="flex items-center space-x-8">
            <a
              href="/"
              className="text-white font-medium hover:text-gray-300 transition-colors border-b-2 border-white pb-1"
            >
              Home
            </a>
            <a
              href="/story"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Story Behind FLUXIA
            </a>
            <a
              href="/about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About us
            </a>
            <a
              href="/contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact us
            </a>
          </nav>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            <Image
              src="/images/logo.avif"
              alt="FLUXIA Logo"
              width={180}
              height={180}
              priority
              className="object-contain"
            />
          </div>

          {/* Right Side - Country Selector and Search */}
          <div className="flex items-center space-x-4">
            {/* Country/Currency Selector */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 text-sm hover:text-gray-300 transition-colors"
              >
                <span>United States | USD $</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-gray-900 rounded-lg shadow-lg py-2 z-50">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-800"
                  >
                    United States | USD $
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-800"
                  >
                    Canada | CAD $
                  </a>
                </div>
              )}
            </div>

            {/* Search Icon */}
            <button className="hover:text-gray-300 transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

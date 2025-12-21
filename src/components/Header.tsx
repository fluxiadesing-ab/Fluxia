"use client";

import React, { useState } from "react";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Customize", href: "https://fluxia.myspreadshop.com/create" },
    { name: "Story Behind FLUXIA", href: "/story" },
  ];

  return (
    <header className="bg-black text-white w-full">
      {/* Top Announcement Bar */}
      <div className="bg-black border-b border-gray-800">
        <div className="container mx-auto px-6 py-2">
          <p className="text-center text-sm text-gray-300">
            Change your life with small surprises that keep your marriage alive.
          </p>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="container mx-auto px-6 md:py-10 py-6">
        <div className="flex items-center justify-between relative min-h-[60px]">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden z-50 relative hover:text-gray-300 transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Navigation Links - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors pb-1 ${
                  isActive(link.href)
                    ? "text-white border-b-2 border-white font-medium"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <Image
              src="/images/logo.jpeg"
              alt="FLUXIA Design"
              width={140}
              height={140}
              priority
              className="
      object-contain
      w-24 h-24
      sm:w-26 sm:h-26
      md:w-32 md:h-32"
            />
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden lg:block">
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
                </div>
              )}
            </div>

            <button
              className="hover:text-gray-300 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-black z-40 pt-24">
            <nav className="flex flex-col items-center space-y-6 px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-xl transition-colors pb-2 ${
                    isActive(link.href)
                      ? "text-white border-b-2 border-white font-medium"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Currency Dropdown */}
              <div className="pt-6 border-t border-gray-800 w-full text-center">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center justify-center space-x-2 text-sm hover:text-gray-300 transition-colors mx-auto"
                >
                  <span>United States | USD $</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {isDropdownOpen && (
                  <div className="mt-2 bg-gray-900 rounded-lg py-2 mx-auto w-56">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:bg-gray-800"
                    >
                      United States | USD $
                    </a>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

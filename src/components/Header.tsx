"use client";

import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// 1. استيراد usePathname لمعرفة المسار الحالي
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // 2. تفعيل التابع للحصول على المسار (مثل / أو /story)
  const pathname = usePathname();

  // 3. دالة مساعدة لتحديد ما إذا كان الرابط نشطاً أم لا
  const isActive = (path: string) => pathname === path;

  // قائمة الروابط لتسهيل الإدارة وتجنب التكرار
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Story Behind FLUXIA", href: "/story" },
    { name: "About us", href: "/about" },
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
      <div className="container mx-auto px-6 py-10">
        <div className="flex items-center justify-between relative min-h-[60px]">
          
          {/* Navigation Links */}
          <nav className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors pb-1 ${
                  isActive(link.href)
                    ? "text-white border-b-2 border-white font-medium" // التنسيق عند النشاط
                    : "text-gray-300 hover:text-white" // التنسيق العادي
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
              alt="FLUXIA Logo"
              width={140}
              height={140}
              priority
              className="object-contain"
            />
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
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
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-800">
                    United States | USD $
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-800">
                    Canada | CAD $
                  </a>
                </div>
              )}
            </div>

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
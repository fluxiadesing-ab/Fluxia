"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';


const Footer: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Country/Region Selector */}
          <div>
            <h3 className="text-sm font-medium mb-4">Country/region</h3>
            <div className="relative w-fit">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between space-x-8 px-4 py-3 border border-gray-600 rounded hover:border-gray-500 transition-colors min-w-[200px]"
              >
                <span className="text-sm">United States | USD $</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute bottom-full mb-2 left-0 w-full bg-gray-900 rounded-lg shadow-lg py-2 z-50">
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-800">
                    United States | USD $
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-800">
                    Canada | CAD $
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-medium mb-4">Quick links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="/refund" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Refund policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Terms of service
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div className="flex justify-start md:justify-end items-start">
            <div>
              <h3 className="text-sm font-medium mb-4">Payment methods</h3>
              <div className="flex items-center space-x-3">
                {/* PayPal */}
                <div className="bg-white rounded px-2 py-1.5 w-16 h-10 flex items-center justify-center">
                  <Image 
                    src="/images/payment/paypal.png" 
                    alt="PayPal" 
                    width={50} 
                    unoptimized
                    height={20}
                    className="object-contain"
                  />
                </div>

                {/* Visa */}
                <div className="bg-white rounded px-2 py-1.5 w-16 h-10 flex items-center justify-center">
                  <Image 
                    src="/images/payment/visa.png" 
                    alt="Visa" 
                    width={40} 
                    unoptimized
                    height={14}
                    className="object-contain"
                  />
                </div>

                {/* Mastercard */}
                <div className="bg-white rounded px-2 py-1.5 w-16 h-10 flex items-center justify-center">
                  <Image 
                    src="/images/payment/mastercard.png" 
                    alt="Mastercard" 
                    width={30} 
                    height={20}
                    unoptimized
                    className="object-contain"
                  />
                </div>

                {/* American Express */}
                <div className="bg-white rounded px-2 py-1.5 w-16 h-10 flex items-center justify-center">
                  <Image 
                    src="/images/payment/amex.png" 
                    alt="American Express" 
                    width={35} 
                    height={20}
                    unoptimized
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex justify-center items-center">
            <div className="text-sm text-gray-400">
              © 2025, FLUXIA
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 items-start">
          
          <div className="flex flex-col space-y-4">
            <div className="relative w-28 h-28">
              <Image 
                src="/images/logo.jpeg" 
                alt="FLUXIA Design" 
                fill
                className="object-contain rounded-sm"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tighter">FLUXIA</h2>
              <p className="text-xs text-gray-400 uppercase tracking-[0.2em] mt-1">
                CHANGE YOUR LIFE
              </p>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-6 uppercase tracking-wider">Quick links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Refund policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Terms of service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
                  About us
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Payment Methods */}
          <div className="flex flex-col md:items-end">
            <h3 className="text-sm font-semibold mb-6 uppercase tracking-wider">Payment methods</h3>
            <div className="flex flex-wrap gap-3 md:justify-end">
              {['paypal', 'visa', 'mastercard', 'amex'].map((method) => (
                <div key={method} className="bg-white rounded px-2 py-1 w-12 h-8 flex items-center justify-center shadow-sm">
                  <Image 
                    src={`/images/payment/${method}.png`} 
                    alt={method} 
                    width={35} 
                    height={20}
                    className="object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            <div className="relative">
              <p className="text-[10px] text-gray-300 uppercase mb-2">Country/region</p>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between space-x-4 px-3 py-2 border border-gray-700 rounded text-sm hover:bg-gray-900 transition-all min-w-[180px]"
              >
                <span>United States | USD $</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute bottom-full mb-2 left-0 w-full bg-[#111] border border-gray-800 rounded shadow-2xl py-2 z-50">
                  <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-800 transition-colors">
                    United States | USD $
                  </button>
                </div>
              )}
            </div>

            {/* Copyright */}
            <div className="text-[12px] text-gray-300 order-last md:order-none">
              © {new Date().getFullYear()}, <span className="text-gray-300 font-medium tracking-widest">FLUXIA</span>. All rights reserved.
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link"; 

const DHero: React.FC = () => {
  return (
    <section className="relative bg-neutral-900 text-white overflow-hidden">
      {/* Decorative Lines - تبقى كما هي */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>
        <div className="absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>

        <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-full border-2 border-gray-500 flex items-center justify-center mb-4">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="text-white"
            >
              <path
                d="M8 2 L9 6 L13 6 L10 9 L11 13 L8 10 L5 13 L6 9 L3 6 L7 6 Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="w-px h-32 bg-gradient-to-b from-gray-500 to-transparent"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tighter">
              Turn your feelings
              <br />
              <span className="text-gray-400">into designs</span>
            </h1>
            <p className="text-xl text-gray-400 font-light tracking-wide">
              Wear . sip . gift your story
            </p>
            <Link href="/shop">
              <button className="mt-4 px-8 py-3 border border-white hover:bg-white hover:text-black transition-all duration-300">
                SHOP NOW
              </button>
            </Link>
          </div>

          {/* Right Side - Image Grid */}
          <div className="grid grid-cols-3 gap-4">
            {/* Image 1 - Couple Silhouette */}
            <div className="relative aspect-square bg-gray-800 rounded-lg overflow-hidden group">
              <Image
                src="/images/c1.jpeg" // تأكد من المسار
                alt="Couple Silhouette"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>

            {/* Image 2 - Gift Box */}
            <div className="relative aspect-square bg-gray-800 rounded-lg overflow-hidden group">
              <Image
                src="/images/c2.jpeg" // تأكد من المسار
                alt="Gift Box"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>

            {/* Image 3 - Couple Kiss */}
            <div className="relative aspect-square bg-gray-800 rounded-lg overflow-hidden group">
              <Image
                src="/images/c3.jpeg" // تأكد من المسار
                alt="Couple Moment"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Arrow indicator at top right */}

      <div className="absolute top-4 right-8">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          className="text-gray-500 transform rotate-90"
        >
          <path
            d="M 10 10 L 30 30 M 30 30 L 30 15 M 30 30 L 15 30"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </section>
  );
};

export default DHero;

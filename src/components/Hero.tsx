"use client";

import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-neutral-900 text-white overflow-hidden">
      {/* Decorative Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Horizontal lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        
        {/* Vertical lines */}
        <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>
        <div className="absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>
        
        {/* Center decorative element */}
        <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-full border-2 border-gray-500 flex items-center justify-center mb-4">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white">
              <path d="M8 2 L9 6 L13 6 L10 9 L11 13 L8 10 L5 13 L6 9 L3 6 L7 6 Z" fill="currentColor"/>
            </svg>
          </div>
          <div className="w-px h-32 bg-gradient-to-b from-gray-500 to-transparent"></div>
          <div className="w-8 h-8 rounded-full border-2 border-gray-500 flex items-center justify-center my-4">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white">
              <path d="M8 2 L9 6 L13 6 L10 9 L11 13 L8 10 L5 13 L6 9 L3 6 L7 6 Z" fill="currentColor"/>
            </svg>
          </div>
          <div className="w-px h-32 bg-gradient-to-b from-gray-500 to-transparent"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-26 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 flex flex-col items-center text-center">
            <h1 className="text-5xl lg:text-6xl font-bold  leading-tight">
              Turn your feelings<br />
              into designs
            </h1>
            <p className="text-xl text-gray-300">
              Wear . sip . gift your story
            </p>
          </div>

          {/* Right Side - Image Grid */}
          <div className="grid grid-cols-3 gap-4">
            {/* Image 1 - Couple Silhouette */}
            <div className="relative aspect-square bg-gray-800 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 to-gray-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="120" height="120" viewBox="0 0 120 120" className="text-gray-700">
                    {/* Couple silhouette illustration */}
                    <ellipse cx="40" cy="30" rx="12" ry="15" fill="currentColor"/>
                    <ellipse cx="80" cy="30" rx="12" ry="15" fill="currentColor"/>
                    <path d="M 35 45 Q 40 50 40 60 L 40 80 L 35 100 L 30 100 L 35 80 L 35 60" fill="currentColor"/>
                    <path d="M 85 45 Q 80 50 80 60 L 80 80 L 85 100 L 90 100 L 85 80 L 85 60" fill="currentColor"/>
                    <path d="M 40 50 L 80 50" stroke="currentColor" strokeWidth="8"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Image 2 - Gift Box */}
            <div className="relative aspect-square bg-gray-800 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                <svg width="100" height="100" viewBox="0 0 100 100" className="text-gray-600">
                  {/* Gift box illustration */}
                  <rect x="25" y="35" width="50" height="45" fill="currentColor" rx="2"/>
                  <rect x="20" y="30" width="60" height="10" fill="currentColor" rx="2"/>
                  <path d="M 50 25 Q 40 25 40 35 L 60 35 Q 60 25 50 25" fill="currentColor"/>
                  <rect x="47" y="35" width="6" height="45" fill="currentColor" opacity="0.5"/>
                  <rect x="20" y="43" width="60" height="6" fill="currentColor" opacity="0.5"/>
                </svg>
              </div>
            </div>

            {/* Image 3 - Couple Kiss */}
            <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-100 flex items-center justify-center">
                <svg width="120" height="120" viewBox="0 0 120 120" className="text-gray-800">
                  {/* Couple kiss silhouette */}
                  <ellipse cx="45" cy="50" rx="15" ry="18" fill="currentColor"/>
                  <ellipse cx="75" cy="50" rx="15" ry="18" fill="currentColor"/>
                  <path d="M 50 55 Q 60 58 70 55" fill="none" stroke="currentColor" strokeWidth="3"/>
                  <path d="M 40 68 Q 45 73 45 83 L 45 95" stroke="currentColor" strokeWidth="12" strokeLinecap="round"/>
                  <path d="M 80 68 Q 75 73 75 83 L 75 95" stroke="currentColor" strokeWidth="12" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Arrow indicator at top right */}
      <div className="absolute top-4 right-8">
        <svg width="40" height="40" viewBox="0 0 40 40" className="text-gray-500 transform rotate-90">
          <path d="M 10 10 L 30 30 M 30 30 L 30 15 M 30 30 L 15 30" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
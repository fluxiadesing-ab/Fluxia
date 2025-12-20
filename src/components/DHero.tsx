"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

/* =========================
   Image Box Component
   ========================= */
type ImageBoxProps = {
  src: string;
  alt: string;
  className?: string;
};

const ImageBox: React.FC<ImageBoxProps> = ({ src, alt, className }) => {
  return (
    <div
      className={`relative w-full overflow-hidden group ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
  );
};

/* =========================
   Hero Component
   ========================= */
const DHero: React.FC = () => {
  return (
    <section className="relative bg-neutral-900 text-white overflow-hidden">
      {/* Decorative Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
        <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent" />
        <div className="absolute top-0 bottom-0 right-1/2 w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent" />
        
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-full border-2 border-gray-500 flex items-center justify-center mb-4">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 2 L9 6 L13 6 L10 9 L11 13 L8 10 L5 13 L6 9 L3 6 L7 6 Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="w-px h-32 bg-gradient-to-b from-gray-500 to-transparent" />
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div className="space-y-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tighter">
              Turn your feelings
              <br />
              <span className="text-gray-400">into designs</span>
            </h1>
            
            <p className="text-xl text-gray-400 font-light tracking-wide">
              Wear . sip . gift your story
            </p>
            
            <Link href="/shop" className="mt-4 px-8 py-3 border border-white hover:bg-white hover:text-black transition-all duration-300">
              SHOP NOW
            </Link>
          </div>

          {/* Right Side - Images in Diagonal Layout */}
          <div className="relative h-[440px] w-full">
            {/* صورة أعلى اليمين */}
            <div className="absolute top-0 right-0 w-56">
              <ImageBox
                src="/images/c1.jpeg"
                alt="Couple Silhouette"
                className="h-34"
              />
            </div>

            {/* صورة في المنتصف */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56">
              <ImageBox
                src="/images/c2.jpeg"
                alt="Gift Box"
                className="h-34"
              />
            </div>

            {/* صورة أسفل اليسار */}
            <div className="absolute bottom-0 left-0 w-56">
              <ImageBox
                src="/images/c3.jpeg"
                alt="Couple Moment"
                className="h-34"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Arrow */}
      <div className="absolute top-4 right-8">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          className="text-gray-500 rotate-90"
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
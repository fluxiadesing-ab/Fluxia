
"use client";

import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  // يمكنك استبدال هذه بمسارات صورك الفعلية
  const products = [
    { id: 1, image: "/images/assets/image1.png", alt: "Stay Chill Cat" },
    { id: 2, image: "/images/assets/image2.png", alt: "Dog Dad" },
    { id: 3, image: "/images/assets/image3.png", alt: "Stay Chill Dog" },
    { id: 4, image: "/images/assets/image4.png", alt: "You Got This" },
    { id: 5, image: "/images/assets/image5.png", alt: "Adventure Awaits" },
    { id: 6, image: "/images/assets/image6.png", alt: "Coffee Lover" },  
    { id: 7, image: "/images/assets/image7.png", alt: "Bookworm" },
    { id: 8, image: "/images/assets/image8.png", alt: "Nature Explorer" },
    { id: 9, image: "/images/assets/image9.png", alt: "Music Vibes" },
    { id: 10, image: "/images/assets/image10.png", alt: "Fitness Fanatic" },
    { id: 11, image: "/images/assets/image11.png", alt: "Travel Bug" },
    { id: 12, image: "/images/assets/image12.png", alt: "Foodie Fun" }

  ];

  // نضاعف المنتجات للحصول على حركة سلسة
  const duplicatedProducts = [...products, ...products];
  
  return (
    <section className="bg-gray-50 py-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 flex flex-col mb-8 items-center text-center">
            <h2 className="text-5xl lg:text-6xl md:text-4xl font-bold text-black leading-tight">
              Own your style
            </h2>
            <p className="text-2xl lg:text-2xl text-gray-700">
              Customize your print, your way
            </p>
          </div>

          {/* Right Side - Infinite Scrolling Images */}
          <div className="relative">
            {/* Row 1 - Scrolling Right */}
            <div className="mb-2 relative overflow-hidden max-w-[600px] fade-mask">
              <div className="flex gap-4 animate-scroll-right">
                {duplicatedProducts.map((product, index) => (
                  <div
                    key={`row1-${index}`}
                    className="flex-shrink-0 w-48 h-48 lg:w-52 lg:h-52 bg-gray-300 rounded-lg overflow-hidden shadow-lg"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={product.image}
                        alt={product.alt}
                        fill
                        className="object-cover"
                        sizes="256px"
                        unoptimized
                        priority={index < 4}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 - Scrolling Left */}
            <div className="mb-2 relative overflow-hidden max-w-[600px] fade-mask">
              <div className="flex gap-4 animate-scroll-left">
                {duplicatedProducts.map((product, index) => (
                  <div
                    key={`row2-${index}`}
                    className="flex-shrink-0 w-48 h-48 lg:w-52 lg:h-52 bg-gray-300 rounded-lg overflow-hidden shadow-lg"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={product.image}
                        alt={product.alt}
                        fill
                        unoptimized
                        className="object-cover"
                        sizes="256px"
                        priority={index < 4}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
          width: fit-content;
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
          width: fit-content;
        }

        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }

        /* Fade-out effect using CSS mask */
        .fade-mask {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 15%,
            /* تم التعديل من 5% */ black 85%,
            /* تم التعديل من 95% */ transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 15%,
            /* تم التعديل من 5% */ black 85%,
            /* تم التعديل من 95% */ transparent
          );
        }
      `}</style>
    </section>
  );
};

export default Hero;

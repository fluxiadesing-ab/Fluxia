"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const SPEED = 0.5;

const InfiniteSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const isDragging = useRef(false);
  const isHovering = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const dragged = useRef(false);

const slides = [
  {
    id: 1,
    image: "/assets/slider/1.png",
    alt: "Product 1",
    url:
      "https://fluxia.myspreadshop.com/stay+chill-A6922c4853c285b0e6a160c88?productType=499&sellable=qNmgENarEncR11glYoD8-499-24&appearance=2",
  },
  {
    id: 2,
    image: "/assets/slider/2.png",
    alt: "Product 2",
    url:
      "https://fluxia.myspreadshop.com/stay+chill-A6922c4853c285b0e6a160c88?productType=401&sellable=qNmgENarEncR11glYoD8-401-10&appearance=2",
  },
  {
    id: 3,
    image: "/assets/slider/3.png",
    alt: "Product 3",
    url:
      "https://fluxia.myspreadshop.com/stay+chill-A6922c4853c285b0e6a160c88?productType=842&sellable=qNmgENarEncR11glYoD8-842-33&appearance=2&size=29",
  },
  {
    id: 4,
    image: "/assets/slider/4.png",
    alt: "Product 4",
    url:
      "https://fluxia.myspreadshop.com/stay+chill-A6922c4853c285b0e6a160c88?productType=949&sellable=qNmgENarEncR11glYoD8-949-32&appearance=2&size=29",
  },
  {
    id: 5,
    image: "/assets/slider/5.png",
    alt: "Product 5",
    url:
      "https://fluxia.myspreadshop.com/stay+chill-A6922c4853c285b0e6a160c88?productType=1462&sellable=qNmgENarEncR11glYoD8-1462-36&appearance=2&size=29",
  },
  {
    id: 6,
    image: "/assets/slider/6.png",
    alt: "Product 6",
    url:
      "https://fluxia.myspreadshop.com/stay+chill-A6922c4853c285b0e6a160c88?productType=1049&sellable=qNmgENarEncR11glYoD8-1049-37&appearance=2&size=29",
  },
  {
    id: 7,
    image: "/assets/slider/7.png",
    alt: "Product 7",
    url:
      "https://fluxia.myspreadshop.com/stay+chill-A6922c4853c285b0e6a160c88?productType=1268&sellable=qNmgENarEncR11glYoD8-1268-10&appearance=796",
  },
  {
    id: 8,
    image: "/assets/slider/8.png",
    alt: "Product 8",
    url:
      "https://fluxia.myspreadshop.com/stay+chill-A6922c4853c285b0e6a160c88?productType=2417&sellable=qNmgENarEncR11glYoD8-2417-36&appearance=1024&size=29",
  },
  {
    id: 9,
    image: "/assets/slider/9.png",
    alt: "Product 9",
    url:
      "https://fluxia.myspreadshop.com/stay+chill-A6922c4853c285b0e6a160c88?productType=1459&sellable=qNmgENarEncR11glYoD8-1459-215&appearance=842&size=167",
  },
];


  const items = [...slides, ...slides];

  // الحركة التلقائية
  useEffect(() => {
    const animate = () => {
      if (sliderRef.current && !isDragging.current && !isHovering.current) {
        sliderRef.current.scrollLeft += SPEED;
        const maxScroll = sliderRef.current.scrollWidth / 2;
        if (sliderRef.current.scrollLeft >= maxScroll) {
          sliderRef.current.scrollLeft = 0;
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const startDragging = (pageX: number) => {
    if (!sliderRef.current) return;
    isDragging.current = true;  
    dragged.current = false;
    startX.current = pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const moveDragging = (pageX: number) => {
    if (!isDragging.current || !sliderRef.current) return;

    const x = pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;

    if (Math.abs(walk) > 5) dragged.current = true;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
          A variety of products
        </h2>
        <p className="text-gray-600">Discover our latest collection</p>
      </div>

      <div
        ref={sliderRef}
        className="flex gap-4 md:gap-6 overflow-hidden cursor-grab active:cursor-grabbing select-none touch-pan-y"
        onMouseDown={(e) => startDragging(e.pageX)}
        onMouseMove={(e) => {
          e.preventDefault();
          moveDragging(e.pageX);
        }}
        onMouseUp={stopDragging}
        onMouseLeave={() => {
          stopDragging();
          isHovering.current = false;
        }}
        onMouseEnter={() => (isHovering.current = true)}
        onTouchStart={(e) => startDragging(e.touches[0].pageX)}
        onTouchMove={(e) => moveDragging(e.touches[0].pageX)}
        onTouchEnd={stopDragging}
      >
        {items.map((slide, i) => (
          <Link
            key={i}
            href={slide.url}
            draggable={false}
            onClick={(e) => {
              if (dragged.current) e.preventDefault();
            }}
            className="flex-shrink-0 w-60 h-72 md:w-80 md:h-96 relative rounded-xl border border-gray-200 bg-gray-100 overflow-hidden"
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              draggable={false}
              className="object-cover p-4 pointer-events-none"
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default InfiniteSlider;

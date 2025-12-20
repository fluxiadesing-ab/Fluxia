"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";

// سرعة الحركة التلقائية
const SPEED = 0.5;

const InfiniteSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const isDragging = useRef(false);
  const isHovering = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const slides = [
    { id: 1, image: "/assets/slider/1.png", alt: "Product 1" },
    { id: 2, image: "/assets/slider/2.png", alt: "Product 2" },
    { id: 3, image: "/assets/slider/3.png", alt: "Product 3" },
    { id: 4, image: "/assets/slider/4.png", alt: "Product 4" },
    { id: 5, image: "/assets/slider/5.png", alt: "Product 5" },
    { id: 6, image: "/assets/slider/6.png", alt: "Product 6" },
    { id: 7, image: "/assets/slider/7.png", alt: "Product 7" },
    { id: 8, image: "/assets/slider/8.png", alt: "Product 8" },
    { id: 9, image: "/assets/slider/9.png", alt: "Product 9" },
  ];

  // تكرار القائمة مرة واحدة فقط (نسختين) لضمان حركة لانهائية ناعمة
  const items = [...slides, ...slides];

  // 1. منطق الحركة التلقائية
  useEffect(() => {
    const animate = () => {
      if (sliderRef.current && !isDragging.current && !isHovering.current) {
        sliderRef.current.scrollLeft += SPEED;

        const maxScroll = sliderRef.current.scrollWidth / 2;
        // عندما نصل لنهاية النسخة الأولى، نعود للصفر (بدون أن يلاحظ المستخدم)
        if (sliderRef.current.scrollLeft >= maxScroll) {
          sliderRef.current.scrollLeft = 0;
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // --- دوال التعامل مع السحب (للماوس واللمس معاً) ---

  const startDragging = (pageX: number) => {
    if (!sliderRef.current) return;
    isDragging.current = true;
    startX.current = pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const moveDragging = (e: React.MouseEvent | React.TouchEvent, pageX: number) => {
    if (!isDragging.current || !sliderRef.current) return;
    // e.preventDefault(); // تم إزالته للسماح بالسكرول العمودي في الصفحة، إلا لو أردت منعه
    
    const x = pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  // --- أحداث الماوس ---
  const onMouseDown = (e: React.MouseEvent) => startDragging(e.pageX);
  const onMouseMove = (e: React.MouseEvent) => {
    e.preventDefault(); // نمنع تحديد النصوص بالماوس
    moveDragging(e, e.pageX);
  };
  
  // --- أحداث اللمس (للموبايل) ---
  const onTouchStart = (e: React.TouchEvent) => startDragging(e.touches[0].pageX);
  const onTouchMove = (e: React.TouchEvent) => moveDragging(e, e.touches[0].pageX);

  return (
    <section className="py-12 md:py-16 bg-gray-50 overflow-hidden">
      <div className="mb-8 md:mb-12 text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2 md:mb-4">
          A variety of products
        </h2>
        <p className="text-base md:text-lg text-gray-600">
          Discover our latest collection
        </p>
      </div>

      <div
        ref={sliderRef}
        // إضافة touch-pan-y للسماح بالسكرول العمودي للصفحة أثناء لمس السلايدر
        className="flex gap-4 md:gap-6 overflow-hidden cursor-grab active:cursor-grabbing select-none touch-pan-y"
        
        // أحداث الماوس
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={() => {
          stopDragging();
          isHovering.current = false;
        }}
        onMouseEnter={() => (isHovering.current = true)}

        // أحداث اللمس (Touch)
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={stopDragging}
      >
        {items.map((slide, i) => (
          <div
            key={i}
            // التعديل هنا: w-60 (صغير للجوال) و md:w-80 (كبير للشاشات المتوسطة والأكبر)
            className="flex-shrink-0 w-60 h-72 md:w-80 md:h-96 relative rounded-xl  border border-gray-200 bg-gray-100 overflow-hidden transition-all duration-300"
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover pointer-events-none p-4"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfiniteSlider;
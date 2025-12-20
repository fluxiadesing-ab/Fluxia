"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";

// سرعة الحركة التلقائية (كلما قل الرقم زاد البطء)
const SPEED = 0.5;

const InfiniteSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  // Refs للحالة (لا تسبب إعادة تصيير للمكون)
  const isDragging = useRef(false);
  const isHovering = useRef(false); // نستخدم هذا بدلاً من isPaused لوضوح أكثر
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const slides = [
    { id: 1, image: "/assets/slider/1.jpg", alt: "Product 1" },
    { id: 2, image: "/assets/slider/2.jpg", alt: "Product 2" },
    { id: 3, image: "/assets/slider/3.jpg", alt: "Product 3" },
    { id: 4, image: "/assets/slider/4.jpg", alt: "Product 4" },
    { id: 5, image: "/assets/slider/5.jpg", alt: "Product 5" },
  ];

  // تكرار العناصر لضمان اللانهائية
  const items = [...slides, ...slides];

  // 1. منطق الحركة التلقائية
  useEffect(() => {
    const animate = () => {
      // التحرك فقط إذا لم يكن هناك سحب (Drag) ولم يكن المؤشر فوق العنصر (Hover)
      if (sliderRef.current && !isDragging.current && !isHovering.current) {
        sliderRef.current.scrollLeft += SPEED;

        // إعادة التعيين عند الوصول للنصف (لخلق وهم اللانهائية)
        const maxScroll = sliderRef.current.scrollWidth / 2;
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

  // 2. أحداث الفأرة (الماوس)

  // عند الضغط للبدء بالسحب
  const onMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  // عند التحريك بالسحب
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // سرعة السحب اليدوي
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // عند رفع اليد عن الماوس (إيقاف السحب)
  const onMouseUp = () => {
    isDragging.current = false;
  };

  // عند دخول الماوس للمنطقة (إيقاف مؤقت للحركة التلقائية)
  const onMouseEnter = () => {
    isHovering.current = true;
  };

  // عند خروج الماوس تماماً من المنطقة (استئناف الحركة وإيقاف السحب)
  const onMouseLeave = () => {
    isHovering.current = false;
    isDragging.current = false;
  };

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          A variety of products with different designs
        </h2>
        <p className="text-lg text-gray-600">
          
        </p>
      </div>
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-hidden cursor-grab active:cursor-grabbing select-none"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {items.map((slide, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-80 h-80 relative rounded-xl border border-gray-200 bg-gray-100 overflow-hidden"
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover pointer-events-none" // منع سحب الصورة نفسها
              draggable={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfiniteSlider;
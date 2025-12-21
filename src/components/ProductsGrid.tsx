"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // 1. استيراد مكون Link

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  link: string; // 2. إضافة حقل الرابط في الواجهة (Interface)
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

    //   useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) =>
  //       prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 3000); // Change image every 3 seconds
  //   return () => clearInterval(interval);
  // }, [product.images.length]);

  return (
    // 3. تغليف الكارت بالكامل بـ Link
    <Link href={product.link} className="block group">
      <article className="bg-white overflow-hidden shadow-md hover:border-gray-600 border border-transparent rounded-lg transition-all duration-300 h-full">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-gray-300">
          <div className="relative aspect-square bg-[#3b3b3b] flex items-center justify-center overflow-hidden">
            <Image
              src={product.images[currentImageIndex]}
              alt={product.title}
              fill
              className="object-contain p-2 md:p-12 group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              priority={product.id <= 4}
            />
          </div>

          {/* Image Indicators */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5">
            {product.images.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? "bg-white w-4" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="p-3 md:p-4">
          <h3 className="text-sm md:text-lg font-medium text-gray-900 mb-2 mt-2 md:mt-5 line-clamp-2 group-hover:text-gray-700 transition-colors text-center">
            {product.title}
          </h3>

          <p className="text-xs md:text-sm text-gray-600 line-clamp-1 text-center mt-1 md:mt-2 ">
            {product.description}
          </p>
        </div>
      </article>
    </Link>
  );
};

const ProductsGrid: React.FC = () => {
  // 4. إضافة روابط المنتجات هنا (مثلاً روابط لصفحة التصميم المعني d=1)
  const products: Product[] = [
    {
      id: 1,
      title: "YOU GOT THIS",
      price: 24.99,
      description: "Motivational design that inspires confidence.",
      images: ["/assets/top/1/1.png"],
      link: "/shop?d=1", // رابط يوجه لتصميم رقم 1
    },
    {
      id: 2,
      title: "Stay Chill",
      price: 34.99,
      description:
        "Playful cat-themed design for men, women, teens, and kids who love funny memes, cute animal art, and quirky feline humor. A great everyday gift for cat moms, cat dads, and pet lovers.",
      images: [
        "/assets/top/2/1.png",
      ],
      link: "/shop?d=2"
    },
    {
      id: 3,
      title: "Thank you to the kind people",
      price: 29.99,
      description:
        "A design made to show your love, calm the heart, and remind the gentle souls around you that they’re never taken for granted. They’are not ignored — they’are truly first in your heart.",
      images: [
        "/assets/top/3/1.png",
      ],
      link: "/shop?d=3"
    },
    {
      id: 4,
      title: "Dog dad",
      price: 24.99,
      description:
        "ICute dog-lover design that captures the playful spirit of your favorite pup. Great for men, women, and kids who love dogs. A perfect everyday gift for pet owners, trainers, groomers, and fur parents.",
      images: [
        "/assets/top/4/1.png",
      ],
      link: "/shop?d=4"
    },
    {
      id: 5,
      title: "Let the Gains Begin",
      price: 27.99,
      description:
        "Perfect motivational gym shirt for anyone who loves lifting, bodybuilding, and chasing gains. Designed for fitness lovers, powerlifters, and anyone who enjoys pushing their limits.",
      images: [
        "/assets/top/5/1.png",
      ],
      link: "/shop?d=5"
    },
    {
      id: 6,
      title: "Admit It Life Would Be Boring Without Me",
      price: 39.99,
      description:
        "Admit It Life Would Be Boring Without Me, Funny Saying Retro. funny saying in retro vintage style is a fun gag gifts.",
      images: [
        "/assets/top/6/1.png",
      ],
      link: "/shop?d=6"
    },
    {
      id: 7,
      title: "Linemen — Because Quarterbacks Need Heroes",
      price: 29.99,
      description:
        "Highlight the unsung heroes of the football field with the'Linemen Because Quarterbacks Need Heroes' T-shirt. Perfect for players and fans who value the linemen's role.",
      images: [
        "/assets/top/7/1.png",
      ],
      link: "/shop?d=7"
    },
    {
      id: 8,
      title: "Saltwater Aquarist — Life Is Better",
      price: 28.99,
      description:
        "Celebrate sea life with this 'Life's Better with Clowns' T-shirt. Perfect for aquarium enthusiasts, it highlights the magic of clownfish and playful saltwater aquariums.",
      images: [
        "/assets/top/8/1.png",
      ],
      link: "/shop?d=8"
    },
  ];

  return (
    <section className="py-8 md:py-16 bg-white mt-8">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        {/* Products Grid */}
        {/* التعديل هنا: gap-3 للجوال لكي يعطي مساحة أكبر للكارت، و gap-6 للكبير */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  //     useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrentImageIndex((prevIndex) =>
  //         prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
  //       );
  //     }
  //     , 3000); // Change image every 3 seconds

  //     return () => clearInterval(interval);
  //   }, [product.images.length]);

  return (
    <article className="group bg-white overflow-hidden shadow-md hover:border-gray-600 border border-transparent">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-[#3b3b3b]">
        <div className="relative aspect-square bg-[#3b3b3b] flex items-center justify-center overflow-hidden">
          <Image
            src={product.images[currentImageIndex]}
            alt={product.title}
            fill
            unoptimized
            className="object-contain py-14 group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw,
           (max-width: 1024px) 50vw,
           25vw"
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
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 mb-2 mt-5 line-clamp-2 hover:text-gray-700 transition-colors justify-center flex">
          {product.title}
        </h3>

        {/* <p className="text-xl font-medium text-black justify-center flex">
          ${product.price.toFixed(2)}
        </p> */}

        {/* Hidden Description for SEO */}
        <p className="text-sm text-gray-600 line-clamp-1 text-center mt-2">
          {product.description}
        </p>
      </div>
    </article>
  );
};

const ProductsGrid: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      title: "YOU GOT THIS",
      price: 24.99,
      description:
        "Motivational design that inspires confidence and positivity. Great for men, women, teens, and kids who appreciate uplifting messages and supportive encouragement. Perfect for everyday wear.",
      images: [
        "/assets/pro/1/1.png",
        "/assets/pro/1/2.png",
        "/assets/pro/1/3.png",
      ],
    },
    {
      id: 2,
      title: "Stay Chill",
      price: 34.99,
      description:
        "Playful cat-themed design for men, women, teens, and kids who love funny memes, cute animal art, and quirky feline humor. A great everyday gift for cat moms, cat dads, and pet lovers.",
      images: [
        "/assets/pro/2/1.png",
        "/assets/pro/2/2.png",
        "/assets/pro/2/3.png",
      ],
    },
    {
      id: 3,
      title: "Thank you to the kind people",
      price: 29.99,
      description:
        "A design made to show your love, calm the heart, and remind the gentle souls around you that they’re never taken for granted. They’are not ignored — they’are truly first in your heart.",
      images: [
        "/assets/pro/3/1.png",
        "/assets/pro/3/2.png",
        "/assets/pro/3/3.png",
      ],
    },
    {
      id: 4,
      title: "Dog dad",
      price: 24.99,
      description:
        "ICute dog-lover design that captures the playful spirit of your favorite pup. Great for men, women, and kids who love dogs. A perfect everyday gift for pet owners, trainers, groomers, and fur parents.",
      images: [
        "/assets/pro/4/1.png",
        "/assets/pro/4/2.png",
        "/assets/pro/4/3.png",
      ],
    },
    {
      id: 5,
      title: "Let the Gains Begin",
      price: 27.99,
      description:
        "Perfect motivational gym shirt for anyone who loves lifting, bodybuilding, and chasing gains. Designed for fitness lovers, powerlifters, and anyone who enjoys pushing their limits.",
      images: [
        "/assets/pro/5/1.png",
        "/assets/pro/5/2.png",
        "/assets/pro/5/3.png",
      ],
    },
    {
      id: 6,
      title: "Admit It Life Would Be Boring Without Me, Funny",
      price: 39.99,
      description:
        "Admit It Life Would Be Boring Without Me, Funny Saying Retro. funny saying in retro vintage style is a fun gag gifts.It's a great joke quote for adults and kids to show their humour, funny sayings is",
      images: [
        "/assets/pro/6/1.png",
        "/assets/pro/6/2.png",
        "/assets/pro/6/3.png",
      ],
    },
    {
      id: 7,
      title: "Smile More, Stress Less Daily",
      price: 32.99,
      description:
        "Motivational “Smile More, Stress Less Daily” tee. Retro-style design that promotes a happier mindset and works great as an apology gift. Perfect for everyday wear.",
      images: [
        "/assets/pro/7/1.png",
        "/assets/pro/7/2.png",
        "/assets/pro/7/3.png",
      ],
    },
    {
      id: 8,
      title: "Saltwater Aquarist — Life Is Better",
      price: 28.99,
      description:
        "Celebrate sea life with this 'Life's Better with Clowns' T-shirt. Perfect for aquarium enthusiasts, it highlights the magic of clownfish and playful saltwater aquariums.",
      images: [
        "/assets/pro/8/1.png",
        "/assets/pro/8/2.png",
        "/assets/pro/8/3.png",
      ],
    },
  ];

  return (
    <section className="py-16 bg-white mt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;

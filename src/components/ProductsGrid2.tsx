"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  link: string;
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
    <Link href={product.link} className="block group">
    <article className=" bg-white overflow-hidden shadow-md border border-gray-400 hover:border-gray-600 rounded-lg transition-colors hover:shadow-lg h-full">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-300   ">
        <div className="relative aspect-square bg-white flex items-center justify-center overflow-hidden">
          <Image
            src={product.images[currentImageIndex]}
            alt={product.title}
            fill
            className="object-contain p-2 md:p-8 group-hover:scale-105 transition-transform duration-300"
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
        <h3 className="text-sm md:text-lg font-medium text-gray-900 mb-2 mt-2 md:mt-5 line-clamp-2 hover:text-gray-700 transition-colors text-center">
          {product.title}
        </h3>

        {/* Hidden Description for SEO */}
        <p className="text-xs md:text-sm text-gray-600 line-clamp-1 text-center mt-1 md:mt-2">
          {product.description}
        </p>
      </div>
    </article>
    </Link>
  );
};

const ProductsGrid2: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      title: "Small Steps Big Changes Motivational Shirt",
      price: 24.99,
      description:
        "Inspiring “Small Steps Lead to Big Changes” tee. Perfect for motivation, personal growth, gym wear, or daily positivity. A great reminder to stay consistent and believe in progress.",
      images: [
        "/assets/down/1/1.png",
      ],
      link: "/shop?d=9"
    },
    {
      id: 2,
      title: "Gamer Don’t Pause Funny Gaming Shirt",
      price: 34.99,
      description:
        "Cool “Gamer Don’t Pause” tee for real gamers who never quit mid-match. Funny gaming shirt perfect for streamers, friends, or any video game lover. Great gift for gamers.",
      images: [
        "/assets/down/2/1.png",
      ],
      link: "/shop?d=10"
    },
    {
      id: 3,
      title: "Smile More, Stress Less Daily",
      price: 32.99,
      description:
        "Motivational “Smile More, Stress Less Daily” tee. Retro-style design that promotes a happier mindset and works great as an apology gift. Perfect for everyday wear.",
      images: [
        "/assets/down/3/1.png",
      ],
      link: "/shop?d=11"
    },
    {
      id: 4,
      title: "Easily Distracted by Sloths & Dogs",
      price: 24.99,
      description:
        "Combine your love for sloths and dogs with the 'Easily Distracted By Sloths And Dogs' T-shirt. A fun choice for animal lovers who adore these adorable creatures.",
      images: [
        "/assets/down/4/1.png",
      ],
      link: "/shop?d=12"
    },
  ];

  return (
    <section className="py-8 md:py-16 bg-white mt-8">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      {/* View More */}
      <div className="mt-12 flex justify-center">
        <Link
          href="https://fluxia.myspreadshop.com/all?listModeOverride=DESIGN"
          className="text-sm md:text-base font-medium text-white bg-black p-3 mt-4 hover:border border-black hover:bg-white hover:text-black transition-colors"
        >
          SEE All DESIGNS
        </Link>
      </div>
    </section>
  );
};

export default ProductsGrid2;

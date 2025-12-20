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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // تغيير كل ثانية

    return () => clearInterval(interval);
  }, [product.images.length]);

  return (
    <article className="group bg-white overflow-hidden shadow-md hover:border-gray-600 border border-transparent">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={product.images[currentImageIndex]}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         25vw"
          quality={90}
          priority={product.id <= 4}
        />

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

        <p className="text-xl font-medium text-black justify-center flex">
          ${product.price.toFixed(2)}
        </p>

        {/* Hidden Description for SEO */}
        <p className="sr-only" aria-hidden="true">
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
      title: "Stay Chill Cat Design",
      price: 24.99,
      description:
        "Premium quality cat design print. Perfect for cat lovers. Made with high-quality materials.",
      images: [
        "/assets/pro/1/1.png",
        "/assets/pro/1/2.png",
        "/assets/pro/1/3.png",
      ],
    },
    {
      id: 2,
      title: "Dog Dad Collection",
      price: 34.99,
      description:
        "Show your love for dogs with this amazing dog dad design. High quality print on premium material.",
      images: [
        "/assets/pro/2/1.png",
        "/assets/pro/2/2.png",
        "/assets/pro/2/3.png",
      ],
    },
    {
      id: 3,
      title: "Stay Chill Dog Edition",
      price: 29.99,
      description:
        "Relaxing dog design for dog enthusiasts. Perfect gift for any occasion with premium quality.",
      images: [
        "/assets/pro/3/1.png",
        "/assets/pro/3/2.png",
        "/assets/pro/3/3.png",
      ],
    },
    {
      id: 4,
      title: "You Got This Motivational",
      price: 24.99,
      description:
        "Inspirational design to keep you motivated. Great quality and comfortable fit for everyday wear.",
      images: [
        "/assets/pro/4/1.png",
        "/assets/pro/4/2.png",
        "/assets/pro/4/3.png",
      ],
    },
    // {
    //   id: 5,
    //   title: "Thank You Kind People",
    //   price: 27.99,
    //   description:
    //     "Spread positivity with this heartwarming design. Premium quality materials and excellent craftsmanship.",
    //   images: [
    //     "/assets/image1.jpg",
    //     "/assets/image3.jpg",
    //     "/assets/image4.jpg",
    //   ],
    // },
    // {
    //   id: 6,
    //   title: "Custom Print Design Pro",
    //   price: 39.99,
    //   description:
    //     "Professional custom print design. High resolution graphics with durable and long-lasting quality.",
    //   images: [
    //     "/assets/image2.jpg",
    //     "/assets/image4.jpg",
    //     "/assets/image3.jpg",
    //   ],
    // },
    // {
    //   id: 7,
    //   title: "Personalized Style Print",
    //   price: 32.99,
    //   description:
    //     "Create your own unique style with personalized prints. Premium fabric and vibrant colors.",
    //   images: [
    //     "/assets/image3.jpg",
    //     "/assets/image2.jpg",
    //     "/assets/image1.jpg",
    //   ],
    // },
    // {
    //   id: 8,
    //   title: "Express Yourself Edition",
    //   price: 28.99,
    //   description:
    //     "Express your personality with this unique design. Quality guaranteed with sustainable materials.",
    //   images: [
    //     "/assets/image4.jpg",
    //     "/assets/image3.jpg",
    //     "/assets/image2.jpg",
    //   ],
    // },
  ];

  return (
    <section className="py-16 bg-white mt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">


        {/* Products Grid */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default ProductsGrid;

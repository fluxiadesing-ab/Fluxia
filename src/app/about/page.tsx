"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutUs = () => {
  return (
    <div className="bg-white text-[#1a1a1a] min-h-screen">
        <Header />
      <div className="container mx-auto px-6 max-w-3xl  py-20">
        
        {/* العنوان الرئيسي */}
        <h1 className="text-5xl font-medium mb-12 text-black">About us</h1>

        {/* القسم الأول */}
        <section className="mb-12">
          <h2 className="text-xl font-normal mb-6 text-gray-800">About Change Your Life</h2>
          <p className="text-lg leading-relaxed mb-6">
            At <span className="font-bold">Change Your Life</span>, we believe the right gift can turn an ordinary day into a new beginning.
          </p>
          
          <p className="text-lg mb-8">We create feel–good apparel and thoughtful gifts for:</p>
          
          {/* القائمة - بنفس ستايل الصورة مع مسافات كبيرة */}
          <ul className="space-y-10">
            <li className="relative pl-5">
              <span className="absolute left-0 top-3 w-1.5 h-1.5 bg-black rounded-full"></span>
              <p className="text-lg text-gray-700">Newlyweds starting their journey together</p>
            </li>
            <li className="relative pl-5">
              <span className="absolute left-0 top-3 w-1.5 h-1.5 bg-black rounded-full"></span>
              <p className="text-lg text-gray-700">Couples celebrating a fresh chapter</p>
            </li>
            <li className="relative pl-5">
              <span className="absolute left-0 top-3 w-1.5 h-1.5 bg-black rounded-full"></span>
              <p className="text-lg text-gray-700">New parents welcoming their first baby</p>
            </li>
            <li className="relative pl-5">
              <span className="absolute left-0 top-3 w-1.5 h-1.5 bg-black rounded-full"></span>
              <p className="text-lg text-gray-700">Families and friends who want to say “I’m sorry”, “I miss you”, or simply “I love you”</p>
            </li>
          </ul>
        </section>

        <p className="text-lg leading-relaxed mb-16">
          Our designs are made to speak when words feel too small. A cozy hoodie after a long day, a fun t-shirt that brings back an inside joke, a matching set that says “we’re in this together” – every piece is designed to warm hearts at home.
        </p>

        {/* قسم What we stand for */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">What we stand for</h2>
          
          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-medium mb-2">Real feelings, not random prints</h3>
              <p className="text-gray-600 leading-relaxed">
                Every design starts with a real moment: an apology, a thank-you, a new baby, a second chance. We ask: “How can this gift help them reconnect?” and design from there.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Family first</h3>
              <p className="text-gray-600 leading-relaxed">
                We focus on couples and families, not trends. If it doesn’t feel good to wear around the people you love most, it doesn’t make it to our store.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Quality you can actually live in</h3>
              <p className="text-gray-600 leading-relaxed">
                These aren’t “one-time photo” shirts. We choose comfortable fabrics and durable prints made to survive movie nights, baby spills, road trips, and laundry day.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Made to order, made for you</h3>
              <p className="text-gray-600 leading-relaxed">
                Each item is printed on demand when you place your order. That means less waste, more choice, and designs that stay special.
              </p>
            </div>
          </div>
        </section>

        {/* قسم Our promise */}
        <section className="pt-10 border-t border-gray-100">
          <h2 className="text-2xl font-medium mb-6">Our promise</h2>
          <p className="text-lg mb-6 text-gray-700">We’re not here to fill your closet. We’re here to help you:</p>
          <ul className="list-disc pl-6 space-y-3 mb-10 text-gray-700">
            <li>say the words you’ve been putting off</li>
            <li>celebrate the people who changed your life</li>
            <li>turn everyday moments into memories</li>
          </ul>
          <p className="text-xl font-medium italic">Change your life – one meaningful gift at a time.</p>
        </section>

      </div>
      <Footer />
    </div>

  );
};

export default AboutUs;
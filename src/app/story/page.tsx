"use client";

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';


const StoryBehindFluxia = () => {
  return (
    <div className="bg-white text-[#1a1a1a] min-h-screen ">
        <Header />
      <div className="container mx-auto px-6 max-w-3xl py-20">
        
        {/* العنوان الرئيسي */}
        <h1 className="text-5xl font-medium mb-16 text-black tracking-tight">
          Story Behind FLUXIA
        </h1>

        {/* المقدمة - السؤال الافتتاحي */}
        <section className="mb-12">
          <p className="text-2xl leading-snug mb-8 font-light italic text-gray-600">
            "FLUXIA started with one simple question: Why does social media make marriage and family life look so toxic, unfair, and broken?"
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Every day we see jokes, posts, and videos that turn couples into enemies and homes into battlefields. But we believe something completely different.
          </p>
        </section>

        {/* قسم المعتقدات */}
        <section className="mb-12 space-y-6">
          <p className="text-lg leading-relaxed">
            We believe that a healthy marriage and a loving family can change your life in the best way. Real relationships are built on affection, respect, understanding, and the emotional stability every human is searching for.
          </p>
          <p className="text-lg leading-relaxed font-bold text-black border-l-2 border-black pl-6 my-10">
            That belief gave birth to FLUXIA.
          </p>
          <p className="text-lg leading-relaxed">
            Our brand is all about turning real feelings into designs you can wear, gift, and live with every day. Most conflicts in relationships are not signs of failure. Often they’re just simple misunderstandings that can be fixed with honest communication, empathy, and good intentions.
          </p>
        </section>

        {/* قسم الرسالة والتصميم */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 text-black uppercase tracking-wider">Our Purpose</h2>
          <p className="text-lg leading-relaxed mb-6">
            That’s why our designs are not just random graphics or fast trends. Every hoodie, mug, poster, or gift is created to celebrate committed love and family, and to encourage better communication between partners, parents, and kids.
          </p>
          <p className="text-lg leading-relaxed">
            We create real, story-driven designs for real couples and families — to remind them that love is still beautiful, and that healthy relationships are possible.
          </p>
        </section>

        {/* قسم معنى الاسم والشعار */}
        <section className="pt-12 border-t border-gray-100">
          <h2 className="text-xl font-bold mb-6 text-black uppercase tracking-wider">The Meaning of FLUXIA</h2>
          <p className="text-lg leading-relaxed mb-8">
            The word <span className="font-bold">FLUXIA</span> comes from the idea of <span className="italic">flux</span> — movement, growth, and positive change. In our logo, the star and the family silhouette represent that idea:
          </p>
          
          <ul className="space-y-6 mb-12">
            <li className="flex items-start">
              <span className="mr-4 text-black text-xl">•</span>
              <p className="text-lg text-gray-700">Love as a guiding light in the middle of life’s chaos.</p>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-black text-xl">•</span>
              <p className="text-lg text-gray-700">Our slogan <span className="font-bold">“CHANGE YOUR LIFE”</span> is a reminder that real change starts at home.</p>
            </li>
          </ul>

          <p className="text-2xl font-medium text-black text-center pt-8 border-t border-gray-50 mt-10">
            With kindness, understanding, and true love.
          </p>
        </section>

      </div>
      <Footer />
    </div>
  );
};

export default StoryBehindFluxia;
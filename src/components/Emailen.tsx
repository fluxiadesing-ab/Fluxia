"use client";

import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const EmailEnter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (email) {
      // Add your email submission logic here
      console.log('Email submitted:', email);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="bg-black text-white py-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 border border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Mail className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get 10% Off Your First Order
          </h2>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Subscribe to our newsletter and receive an instant discount on your first purchase
          </p>

          {/* Email Input */}
          <div className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all backdrop-blur-sm"
                />
              </div>
              <button
                onClick={handleSubmit}
                disabled={isSubmitted}
                className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all transform  disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {isSubmitted ? (
                  <span>Subscribed ✓</span>
                ) : (
                  <>
                    <span>Subscribe Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <p className="text-sm text-gray-400 mt-6">
            By subscribing, you agree to our Privacy Policy
          </p>

          {/* Success Message */}
          {isSubmitted && (
            <div className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg backdrop-blur-sm">
              <p className="text-green-300">
                🎉 Thank you for subscribing! Check your email for the discount code
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmailEnter;
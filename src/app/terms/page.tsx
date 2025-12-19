"use client";

import React from 'react';
import Footer from '@/components/Footer';
import { Mail } from 'lucide-react';
import { ShieldCheck, Scale, Globe, UserCheck, HelpCircle } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Header Section */}
      <header className="bg-neutral-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-400 text-sm">
            <span>Last updated: 08/12/2025</span>
            <span className="hidden md:inline">|</span>
            <span>Shop name: FLUXIADESIGN</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        
        {/* Intro */}
        <div className="mb-12 text-lg leading-relaxed text-gray-700 border-b pb-8">
          These Terms of Service (“Terms”) govern your access to and use of this shop (the “Shop”) and your purchase of products offered through it. 
          <span className="block mt-4 font-semibold text-black italic">
            By using the Shop and/or placing an order, you agree to these Terms.
          </span>
        </div>

        <div className="space-y-12">
          
          {/* Section 1: Partner Shop - Very Important */}
          <section className="bg-amber-50 p-6 md:p-8 rounded-2xl border border-amber-100">
            <div className="flex items-center mb-4 text-amber-800">
              <Globe className="w-6 h-6 mr-3" />
              <h2 className="text-xl font-bold">1) Who We Are (Partner Shop Notice)</h2>
            </div>
            <p className="text-gray-800 leading-relaxed">
              This Shop is a Partner Shop operated by an independent shop owner (“we/us/our”). Products sold here are made-to-order and fulfilled by <strong>FLUXIADESIGN / FLUXIADESIGN (sprd.net AG or its local affiliate)</strong> who handles production, payment processing, shipping, and returns logistics.
            </p>
            <p className="mt-4 text-sm text-amber-700 italic">
              *If any conflict exists between these Terms and FLUXIADESIGN’s platform terms, FLUXIADESIGN’s terms apply for fulfillment-related matters.
            </p>
          </section>

          {/* Section 2 & 3 */}
          <div className="grid md:grid-cols-2 gap-10">
            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <UserCheck className="w-5 h-5 mr-2" /> 2) Eligibility & Account
              </h2>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Must be at least 18 years old to place an order.</li>
                <li>• Accuracy of information is required.</li>
                <li>• Unlawful use of the Shop is strictly prohibited.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 flex items-center text-black">
                3) Products & Print-on-Demand
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                All items are printed on demand. Colors and placement may vary slightly from on-screen previews due to monitor settings and production processes. Minor variations are not considered defects.
              </p>
            </section>
          </div>

          {/* Sections 4, 5, 6 */}
          <section className="space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-2">4) Pricing, Taxes & Payment</h2>
              <p className="text-gray-700 text-sm">Prices are shown in [CURRENCY]. Applicable taxes and shipping costs are calculated at checkout. Payments are processed by FLUXIADESIGN or its payment providers.</p>
            </div>
            
            <div className="p-4 border-l-4 border-gray-200 bg-gray-50">
              <h2 className="text-xl font-bold mb-2">5) Order Acceptance & Cancellation</h2>
              <p className="text-gray-700 text-sm">Your order is accepted when it is confirmed by email. Because items are produced on demand, changes or cancellations may not be possible once production starts.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">6) Shipping & Delivery</h2>
              <p className="text-gray-700 text-sm">Delivery times are estimates. We are not responsible for delays caused by carriers, customs, or incorrect address information provided by you.</p>
            </div>
          </section>

          {/* Section 7: Returns */}
          <section className="border border-gray-200 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Scale className="w-6 h-6 mr-3" /> 7) Returns, Exchanges & Refunds
            </h2>
            <p className="text-gray-700 mb-4">Returns are governed by FLUXIADESIGN’s Fair Return / Satisfaction Guarantee:</p>
            <ul className="list-disc pl-6 space-y-3 text-sm text-gray-600">
              <li>Eligible items: return within 30-90 days (region dependent).</li>
              <li>Condition: Must be unused and in original condition.</li>
              <li><strong>Customized Items:</strong> Cash refunds are <strong>not</strong> available for items you customized yourself (custom text/personalization). Exchanges or vouchers may be issued instead.</li>
            </ul>
          </section>

          {/* Legal Sections (8 - 13) */}
          <section className="bg-neutral-50 p-8 rounded-2xl space-y-8">
            <div>
              <h2 className="text-lg font-bold mb-2 uppercase tracking-wider text-neutral-500">8) Intellectual Property</h2>
              <p className="text-sm text-gray-600">All designs, logos, and content are owned by or licensed to us or Spreadshirt. You may not copy or reproduce any content without permission.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-lg font-bold mb-2 uppercase tracking-wider text-neutral-500">11) Disclaimer</h2>
                <p className="text-xs text-gray-500">The Shop and products are provided “as is.” We disclaim all warranties, express or implied, including merchantability and fitness for a particular purpose.</p>
              </div>
              <div>
                <h2 className="text-lg font-bold mb-2 uppercase tracking-wider text-neutral-500">12) Limitation of Liability</h2>
                <p className="text-xs text-gray-500">Neither we nor Spreadshirt shall be liable for indirect, incidental, or consequential damages. Total liability is limited to the amount paid for the order.</p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center pt-12 border-t border-gray-100">
            <div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
              <HelpCircle className="w-8 h-8 text-black" />
            </div>
            <h2 className="text-2xl font-bold mb-2">15) Contact</h2>
            <p className="text-gray-600 mb-6">Questions about orders, shipping, or returns?</p>
            <a 
              href="mailto:customer@fluxiadesign.com" 
              className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              customer@fluxiadesign.com
            </a>
          </section>

        </div>
      </main>

        <Footer />
    </div>
  );
};

export default TermsOfService;
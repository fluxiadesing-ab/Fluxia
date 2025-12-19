"use client";

import React from 'react';
import Footer from '@/components/Footer';
import { RefreshCcw, Package, AlertCircle, Mail, CheckCircle2 } from 'lucide-react';

const RefundPolicy = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Header Section */}
      <header className="bg-neutral-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund & Return Policy</h1>
          <p className="text-gray-400">Last updated: 08/12/2025 | Shop: FLUXIADESIGN</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        
        {/* Introduction */}
        <div className="mb-12 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
          <p className="text-lg text-blue-900 leading-relaxed">
            We want you to love your order. Because all items are printed on demand by <strong>Spreadshop / Spreadshirt</strong>, returns and refunds follow Spreadshirt’s Fair Return Policy.
          </p>
        </div>

        <div className="space-y-12">
          
          {/* Section 1 & 2: Window and Eligibility */}
          <section className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 p-6 rounded-xl">
              <div className="flex items-center mb-4 text-black">
                <RefreshCcw className="w-6 h-6 mr-2" />
                <h2 className="text-xl font-bold">1) Return Window</h2>
              </div>
              <p className="text-gray-700">
                You may return eligible items within <strong>30 days</strong> of the delivery date if they don’t fit or you’re not satisfied. In some regions Spreadshirt offers up to 90 days; your order confirmation/help page will show the applicable window.
              </p>
            </div>

            <div className="border border-gray-200 p-6 rounded-xl">
              <div className="flex items-center mb-4 text-black">
                <CheckCircle2 className="w-6 h-6 mr-2" />
                <h2 className="text-xl font-bold">2) Eligible Returns</h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                <li>The item must be unused, unwashed, and in original condition.</li>
                <li>All original packaging/tags should be included.</li>
                <li>You must provide your order number and reason for return.</li>
              </ul>
            </div>
          </section>

          {/* Section 3: Non-Returnable */}
          <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <div className="flex items-center mb-4 text-red-600">
              <AlertCircle className="w-6 h-6 mr-2" />
              <h2 className="text-2xl font-bold">3) Non-Returnable Items</h2>
            </div>
            <p className="mb-4 text-gray-800">
              Refunds to the original payment method are <strong>not available for items you customized yourself</strong> (e.g., you added custom text, changed design placement, or created a personalized product). In these cases, Spreadshirt may offer an exchange or store voucher instead.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-3 rounded shadow-sm text-sm">• Digital/downloadable products.</div>
              <div className="bg-white p-3 rounded shadow-sm text-sm">• Items marked “final sale”.</div>
            </div>
          </section>

          {/* Section 4: Damaged Items */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Package className="w-6 h-6 mr-2" /> 4) Damaged, Defective, or Incorrect Items
            </h2>
            <p className="text-gray-700 mb-4">
              If your item arrives damaged, defective, or different from what you ordered, contact us within the return window with:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4 font-medium text-sm">
              <span className="bg-neutral-100 px-4 py-2 rounded-full">✓ Your order number</span>
              <span className="bg-neutral-100 px-4 py-2 rounded-full">✓ Clear photos of the issue</span>
            </div>
            <p className="text-gray-600 italic text-sm">We’ll arrange a replacement or refund at no extra cost.</p>
          </section>

          {/* Section 5: How to start */}
          <section className="border-t pt-10">
            <h2 className="text-2xl font-bold mb-4 text-black">5) How to Start a Return / Exchange</h2>
            <div className="bg-neutral-900 text-white p-8 rounded-2xl">
              <p className="mb-6 opacity-90">Because orders are fulfilled by Spreadshop / Spreadshirt, returns are processed through their support system.</p>
              <ol className="space-y-4 text-sm md:text-base">
                <li className="flex gap-4">
                  <span className="bg-white text-black w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs">1</span>
                  Contact FLUXIADESIGN Customer Service and share your Order number, Item(s) and Reason.
                </li>
                <li className="flex gap-4">
                  <span className="bg-white text-black w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs">2</span>
                  Receive return instructions and (where applicable) a return label.
                </li>
                <li className="flex gap-4">
                  <span className="bg-white text-black w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs">3</span>
                  Ship the item back as instructed.
                </li>
              </ol>
            </div>
          </section>

          {/* Sections 6, 7, 8: Small details */}
          <section className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-bold mb-2">6) Refunds</h3>
              <p className="text-gray-600">Approved refunds are issued to the original payment method. Processing time depends on your bank.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-bold mb-2">7) Exchanges</h3>
              <p className="text-gray-600">We can exchange for a new product or issue a voucher, depending on stock availability.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-bold mb-2">8) Shipping Costs</h3>
              <p className="text-gray-600">If defective, we cover it. If due to fit/preference, it depends on the region and case.</p>
            </div>
          </section>

          {/* Section 9: Help */}
          <section className="text-center pt-10 border-t">
            <h2 className="text-2xl font-bold mb-4">9) Need Help?</h2>
            <p className="text-gray-600 mb-6">If you have any questions about sizing, orders, or returns, reach out anytime:</p>
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

export default RefundPolicy;
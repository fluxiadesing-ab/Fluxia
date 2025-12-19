"use client";

import React from 'react';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Header Section */}
      <header className="bg-neutral-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Last updated: November 19, 2025</p>
        </div>
      </header>

      {/* Content Section */}
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="prose prose-neutral max-w-none">
          <p className="mb-6 leading-relaxed">
            FLUXIA operates this store and website, including all related information, content, features, tools, products and services, in order to provide you, the customer, with a curated shopping experience (the "Services"). FLUXIA is powered by Shopify, which enables us to provide the Services to you. This Privacy Policy describes how we collect, use, and disclose your personal information when you visit, use, or make a purchase or other transaction using the Services or otherwise communicate with us. If there is a conflict between our Terms of Service and this Privacy Policy, this Privacy Policy controls with respect to the collection, processing, and disclosure of your personal information.
          </p>
          
          <p className="mb-8 leading-relaxed">
            Please read this Privacy Policy carefully. By using and accessing any of the Services, you acknowledge that you have read this Privacy Policy and understand the collection, use, and disclosure of your information as described in this Privacy Policy.
          </p>

          <hr className="my-10 border-gray-200" />

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-black">Personal Information We Collect or Process</h2>
            <p className="mb-4">
              When we use the term "personal information," we are referring to information that identifies or can reasonably be linked to you or another person. Personal information does not include information that is collected anonymously or that has been de-identified, so that it cannot identify or be reasonably linked to you. We may collect or process the following categories of personal information, including inferences drawn from this personal information, depending on how you interact with the Services, where you live, and as permitted or required by applicable law:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Contact details:</strong> including your name, address, billing address, shipping address, phone number, and email address.</li>
              <li><strong>Financial information:</strong> including credit card, debit card, and financial account numbers, payment card information, financial account information, transaction details, form of payment, payment confirmation and other payment details.</li>
              <li><strong>Account information:</strong> including your username, password, security questions, preferences and settings.</li>
              <li><strong>Transaction information:</strong> including the items you view, put in your cart, add to your wishlist, or purchase, return, exchange or cancel and your past transactions.</li>
              <li><strong>Communications with us:</strong> including the information you include in communications with us, for example, when sending a customer support inquiry.</li>
              <li><strong>Device information:</strong> including information about your device, browser, or network connection, your IP address, and other unique identifiers.</li>
              <li><strong>Usage information:</strong> including information regarding your interaction with the Services, including how and when you interact with or navigate the Services.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-black">Personal Information Sources</h2>
            <p className="mb-4">We may collect personal information from the following sources:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Directly from you:</strong> including when you create an account, visit or use the Services, communicate with us, or otherwise provide us with your personal information.</li>
              <li><strong>Automatically through the Services:</strong> including from your device when you use our products or services or visit our websites, and through the use of cookies and similar technologies.</li>
              <li><strong>From our service providers:</strong> including when we engage them to enable certain technology and when they collect or process your personal information on our behalf.</li>
              <li><strong>From our partners or other third parties.</strong></li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-black">How We Use Your Personal Information</h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>Provide, Tailor, and Improve the Services.</strong> We use your personal information to provide you with the Services, including to perform our contract with you, to process your payments, to fulfill your orders, to remember your preferences and items you are interested in, to send notifications to you related to your account, to process purchases, returns, exchanges or other transactions, to create, maintain and otherwise manage your account, to arrange for shipping, to facilitate any returns and exchanges, to enable you to post reviews, and to create a customized shopping experience for you.</p>
              <p><strong>Marketing and Advertising.</strong> We use your personal information for marketing and promotional purposes, such as to send marketing, advertising and promotional communications by email, text message or postal mail.</p>
              <p><strong>Security and Fraud Prevention.</strong> We use your personal information to authenticate your account, to provide a secure payment and shopping experience, detect, investigate or take action regarding possible fraudulent activity.</p>
              <p><strong>Legal Reasons.</strong> We use your personal information to comply with applicable law or respond to valid legal process.</p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-black">How We Disclose Personal Information</h2>
            <p className="mb-4">In certain circumstances, we may disclose your personal information to third parties for legitimate purposes:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>With Shopify, vendors and other third parties who perform services on our behalf.</li>
              <li>With business and marketing partners to provide marketing services and advertise to you.</li>
              <li>When you direct, request us or otherwise consent to our disclosure.</li>
              <li>With our affiliates or otherwise within our corporate group.</li>
            </ul>
          </section>

          {/* Shopify Relation */}
          <section className="mb-10 p-6 bg-gray-50 border-l-4 border-black">
            <h2 className="text-xl font-bold mb-2">Relationship with Shopify</h2>
            <p className="text-sm text-gray-600">
              The Services are hosted by Shopify, which collects and processes personal information about your access to and use of the Services... To learn more, visit the <a href="https://www.shopify.com/legal/privacy" className="underline text-blue-600">Shopify Consumer Privacy Policy</a>.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-black">Your Rights and Choices</h2>
            <p className="mb-4">Depending on where you live, you may have some or all of the rights listed below:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="p-4 border border-gray-200 rounded-lg"><strong>Right to Access / Know:</strong> Access to personal information we hold about you.</li>
              <li className="p-4 border border-gray-200 rounded-lg"><strong>Right to Delete:</strong> Request deletion of your personal information.</li>
              <li className="p-4 border border-gray-200 rounded-lg"><strong>Right to Correct:</strong> Correct inaccurate personal information.</li>
              <li className="p-4 border border-gray-200 rounded-lg"><strong>Right of Portability:</strong> Receive a copy of your information.</li>
            </ul>
          </section>

          {/* Contact Section */}
          <section className="mt-12 p-8 bg-neutral-900 text-white rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-6 text-gray-300">
              Should you have any questions about our privacy practices or this Privacy Policy, please contact us:
            </p>
            <div className="space-y-2">
              <p><span className="text-gray-500">Email:</span> <a href="mailto:customer@fluxiadesign.com" className="hover:text-blue-400 underline">customer@fluxiadesign.com</a></p>
              <p><span className="text-gray-500">Address:</span> Makkah Al-Mukarramah, Makkah, 24222, SA</p>
            </div>
          </section>
        </div>

      </main>
        <Footer />
    </div>
  );
};

export default PrivacyPolicy;
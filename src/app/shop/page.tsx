"use client";

import React, { useState, useEffect, Suspense, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation'; // استيراد أدوات التحكم بالروابط
import Footer from '@/components/Footer';
import Header from '@/components/Header';

// --- Types ---
interface Product {
  id: number | string;
  title: string;
  price: number;
  description: string;
  image: string;
  link: string;
}

interface Design {
  id: string;
  name: string;
  designImage: string;
  allProductsLink: string; // الحقل الجديد للرابط الخاص بكل مجموعة
  products: Product[];
}

// --- Data Structure ---
const designsData: Record<string, Design> = {
  "1": {
    id: "1",
    name: "YOU GOT THIS",
    designImage: "/assets/designs/1.png",
    allProductsLink: "https://fluxia.myspreadshop.com/you+got+this?idea=6923f28e3c285b0e6a4d8f18",
    products: [
      { id: "1-1", title: "YOU GOT THIS Men's Premium T-Shirt", price: 23.99, description: "This premium T-shirt is as close to perfect as can be. It's optimized for all types of print and will quickly become your favorite T-shirt. Soft, comfortable and durable, this is a definite must-own.", image: "/assets/pro/1/1.jpg", link: "https://fluxia.myspreadshop.com/you+got+this-A6923f28e3c285b0e6a4d8f18?productType=812&sellable=bNXgbajZbrUeddglOEoj-812-7&appearance=823" },
      { id: "1-2", title: "YOU GOT THIS Women's Premium T-Shirt", price: 24.99, description: "The headliner of our Collection is the premium T-shirt. This is as perfect as perfect gets: it's soft yet stretchy, a little longer than a standard tee and figure-flattering. ITEM RUNS SMALL.", image: "/assets/pro/1/2.jpg", link: "https://fluxia.myspreadshop.com/you+got+this-A6923f28e3c285b0e6a4d8f18?productType=813&sellable=bNXgbajZbrUeddglOEoj-813-8&appearance=823" },
      { id: "1-3", title: "YOU GOT THIS Kids' Premium T-Shirt", price: 20.49, description: "Our collections premium T-shirt should be a big part of any kids' wardrobe. It wears rough and tough for kids who play the same way. Ideal for playing outside or sitting quietly doing homework, the premium T-shirt from the our collection is as versatile and durable as it gets.", image: "/assets/pro/1/3.jpg", link: "https://fluxia.myspreadshop.com/you+got+this-A6923f28e3c285b0e6a4d8f18?productType=815&sellable=bNXgbajZbrUeddglOEoj-815-9&appearance=823" },
      { id: "1-4", title: "YOU GOT THIS Women's Premium Hoodie", price: 35.99, description: "If you're looking for a top-quality, instant-favorite sweatshirt, you've come to the right place! Our Premium Hoodie from our t Collection is everything you could ask for: it's warm and cozy with a tailored and feminine fit, and it's built to last. This item runs small.", image: "/assets/pro/1/4.jpg", link: "https://fluxia.myspreadshop.com/you+got+this-A6923f28e3c285b0e6a4d8f18?productType=444&sellable=bNXgbajZbrUeddglOEoj-444-23&appearance=647" },
      { id: "1-5", title: "YOU GOT THIS Organic Short Sleeve Baby Bodysuit", price: 18.49, description: "Kids grow up so fast. Your little one may still be an infant, but we're sure they're crying for something stylish, comfortable, and eco-friendly (of course, they must have just wet their diaper). Well, you can satisfy their 'demands' with this practical, organic short sleeve bodysuit.", image: "/assets/pro/1/5.jpg", link: "https://fluxia.myspreadshop.com/you+got+this-A6923f28e3c285b0e6a4d8f18?productType=401&sellable=bNXgbajZbrUeddglOEoj-401-10&appearance=469" },
      { id: "1-6", title: "YOU GOT THIS Unisex Contrast Hoodie", price: 35.99, description: "The Unisex Contrast Hoodie is a stylish and comfortable must-have for any wardrobe. Designed with a double-fabric hood featuring a contrasting inner, it adds a bold touch to your look. The matching flat lace drawcords provide an adjustable fit, while ribbed cuffs and hem offer a snug and cozy feel. A tear-out label ensures tag-free comfort, making this hoodie perfect for everyday wear.", image: "/assets/pro/1/6.jpg", link: "https://fluxia.myspreadshop.com/you+got+this-A6923f28e3c285b0e6a4d8f18?productType=1007&sellable=bNXgbajZbrUeddglOEoj-1007-23&appearance=289" },
      { id: "1-7", title: "YOU GOT THIS Women's Flowy Tank Top by Bella", price: 23.49, description: "Flattering, flowy and lightweight, this stylish tank top is super-soft to the touch and a comfort to wear. Featuring an A-line body and racerback cut, the flowy tank top is a wardrobe chameleon. Versatile enough for a workout or for a night on the town, this one is a must-own.", image: "/assets/pro/1/7.jpg", link: "https://fluxia.myspreadshop.com/you+got+this-A6923f28e3c285b0e6a4d8f18?productType=752&sellable=bNXgbajZbrUeddglOEoj-752-16&appearance=4" },
      { id: "1-8", title: "YOU GOT THIS Full Color Mug", price: 15.99, description: "A colorful companion for your favorite brew. Good for all types of beverages, this classic container is a great way to make your hot cocoa cool again.", image: "/assets/pro/1/8.jpg", link: "https://fluxia.myspreadshop.com/you+got+this-A6923f28e3c285b0e6a4d8f18?productType=949&sellable=bNXgbajZbrUeddglOEoj-949-32&appearance=2&size=29" },

    ]
  },

  "2": {
    id: "2",
    name: "Stay Chill",
    designImage: "/assets/designs/2.png",
    allProductsLink: "https://fluxia.myspreadshop.com/stay+chill?idea=6922c4853c285b0e6a160c88",
    products: [
      { id: "2-1", title: "Stay Chill Women's Premium T-Shirt", price: 24.99, description: "The headliner of our Collection is the premium T-shirt. This is as perfect as perfect gets: it's soft yet stretchy, a little longer than a standard tee and figure-flattering. ITEM RUNS SMALL.", image: "/assets/pro/2/1.jpg", link: "https://fluxia.myspreadshop.com/stay+chill-A6922c4853c285b0e6a160c88?productType=813&sellable=qNmgENarEncR11glYoD8-813-8&appearance=648" },
      { id: "2-2", title: "Stay Chill Organic Short Sleeve Baby Bodysuit", price: 18.49, description: "Kids grow up so fast. Your little one may still be an infant, but we're sure they're crying for something stylish, comfortable, and eco-friendly (of course, they must have just wet their diaper). Well, you can satisfy their 'demands' with this practical, organic short sleeve bodysuit.", image: "/assets/pro/2/2.jpg", link: "https://fluxia.myspreadshop.com/stay+chill-A6922c4853c285b0e6a160c88?productType=401&sellable=qNmgENarEncR11glYoD8-401-10&appearance=2" },
      { id: "2-3", title: "Stay Chill Kids‘ Premium Hoodie", price: 33.49, description: "If you’re looking for a top-quality, instant-favorite sweatshirt for any child, you’ve come to the right place! Our Premium Hoodie from the Spreadshirt Collection is everything you could ask for: it’s warm and cozy, heavyweight and roomy, and built to last. ITEM RUNS SMALL.", image: "/assets/pro/2/3.jpg", link: "https://fluxia.myspreadshop.com/stay+chill-A6922c4853c285b0e6a160c88?productType=654&sellable=qNmgENarEncR11glYoD8-654-24&appearance=648" },
      { id: "2-4", title: "Stay Chill Baby Cap", price: 12.99, description: "Is your baby self-conscious about their bald spot? Or (more realistically), maybe you’re just seeking the perfect cap to keep them warm and comfy. Available in an array of colors, this baby cap is the perfect gift or purchase for that newborn.", image: "/assets/pro/2/4.jpg", link: "https://fluxia.myspreadshop.com/stay+chill-A6922c4853c285b0e6a160c88?productType=1368&sellable=qNmgENarEncR11glYoD8-1368-205&appearance=2&size=53" },
      { id: "2-5", title: "Stay Chill American Apparel Women’s Racerneck Tank", price: 22.99, description: "Make a move in this shaped-fit racerneck tank with a sporty close-cut silhouette. The cotton-blend means that it will hold its shape, and the recycled polyester means it will make an impact on your look, not the planet.", image: "/assets/pro/2/5.jpg", link: "https://fluxia.myspreadshop.com/stay+chill-A6922c4853c285b0e6a160c88?productType=2381&sellable=qNmgENarEncR11glYoD8-2381-16&appearance=2" },
      { id: "2-6", title: "Stay Chill Stanley/Stella Radder Unisex Oversized Organic Sweatshirt", price: 40.49, description: "The iconic organic sweatshirt from Stanley/Stella: cozy, high-end and made responsibly. A classic made for wearing time and time again.", image: "/assets/pro/2/6.jpg", link: "https://fluxia.myspreadshop.com/stay+chill-A6922c4853c285b0e6a160c88?productType=2479&sellable=qNmgENarEncR11glYoD8-2479-27&appearance=2" },
      { id: "2-7", title: "Stay Chill Women’s Cropped Hoodie", price: 35.49, description: "A must-have hoodie that’s both trendy and comfortable. The slightly cropped, oversized fit with a drawstring at the waist provides a flattering shape. Pair it with some jeans for a casual day look or with your best sweatpants for the ultimate loungewear.", image: "/assets/pro/2/7.jpg", link: "https://fluxia.myspreadshop.com/stay+chill-A6922c4853c285b0e6a160c88?productType=2883&sellable=qNmgENarEncR11glYoD8-2883-23&appearance=2" },
      { id: "2-8", title: "Stay Chill Champion Unisex 1/4 Zip Pullover Sweatshirt", price: 43.49, description: "Keep warm in the chilly weather with the Champion Unisex 1/4 Zip Pullover Sweatshirt. A classic-everyday sweatshirt with the additional touch of the quarter zip up collar, keeps you looking casual yet put together at the same time. Suitable for any occasion, this sweatshirt is an ideal wardobe staple.", image: "/assets/pro/2/8.jpg", link: "https://fluxia.myspreadshop.com/stay+chill-A6922c4853c285b0e6a160c88?productType=2508&sellable=qNmgENarEncR11glYoD8-2508-27&appearance=2" },

    ]
  },
  "3": {
    id: "3",
    name: "Thank you to the kind people",
    designImage: "/assets/designs/3.png",
    allProductsLink: "https://fluxia.myspreadshop.com/thank+you+to+the+kind+people?idea=6922c48f59adb31b423ff75d",
    products: [
      { id: "3-1", title: "Thank you to the kind people Men's Premium T-Shirt", price: 23.99, description: "This premium T-shirt is as close to perfect as can be. It's optimized for all types of print and will quickly become your favorite T-shirt. Soft, comfortable and durable, this is a definite must-own.", image: "/assets/pro/3/1.jpg", link: "https://fluxia.myspreadshop.com/thank+you+to+the+kind+people-A6922c48f59adb31b423ff75d?productType=812&sellable=EmkpjpjQxrsDEngYqdwj-812-7&appearance=2" },
      { id: "3-2", title: "Thank you to the kind people Women's Premium T-Shirt", price: 24.99, description: "The headliner of our Collection is the premium T-shirt. This is as perfect as perfect gets: it's soft yet stretchy, a little longer than a standard tee and figure-flattering. ITEM RUNS SMALL.", image: "/assets/pro/3/2.jpg", link: "https://fluxia.myspreadshop.com/thank+you+to+the+kind+people-A6922c48f59adb31b423ff75d?productType=813&sellable=EmkpjpjQxrsDEngYqdwj-813-8&appearance=2" },
      { id: "3-3", title: "Thank you to the kind people Kids' Premium T-Shirt", price: 20.49, description: "Our collections premium T-shirt should be a big part of any kids' wardrobe. It wears rough and tough for kids who play the same way. Ideal for playing outside or sitting quietly doing homework, the premium T-shirt from the our collection is as versatile and durable as it gets.", image: "/assets/pro/3/3.jpg", link: "https://fluxia.myspreadshop.com/thank+you+to+the+kind+people-A6922c48f59adb31b423ff75d?productType=815&sellable=EmkpjpjQxrsDEngYqdwj-815-9&appearance=2" },
      { id: "3-4", title: "Thank you to the kind people Women's Premium Hoodie", price: 35.99, description: "If you're looking for a top-quality, instant-favorite sweatshirt, you've come to the right place! Our Premium Hoodie from our t Collection is everything you could ask for: it's warm and cozy with a tailored and feminine fit, and it's built to last. This item runs small.", image: "/assets/pro/3/4.jpg", link: "https://fluxia.myspreadshop.com/thank+you+to+the+kind+people-A6922c48f59adb31b423ff75d?productType=444&sellable=EmkpjpjQxrsDEngYqdwj-444-23&appearance=2" },
      { id: "3-5", title: "Thank you to the kind people Toddler Premium T-Shirt", price: 20.49, description: "The grand daddy of our collection, this premium T-shirt is as close to perfect as can be. It's optimized for all types of print and will quickly become you favorite T-shirt. Soft and comfortable, durable and thick, this is a definite must-own and a recommended product.", image: "/assets/pro/3/5.jpg", link: "https://fluxia.myspreadshop.com/thank+you+to+the+kind+people-A6922c48f59adb31b423ff75d?productType=814&sellable=EmkpjpjQxrsDEngYqdwj-814-9&appearance=2" },
      { id: "3-6", title: "Thank you to the kind people 20 oz Water Bottle", price: 18.99, description: "Bring your favorite beverage with you wherever you go in a stylish water bottle. We currently offer these eco-friendly and reusable water bottles in the colors silver and white.", image: "/assets/pro/3/6.jpg", link: "https://fluxia.myspreadshop.com/thank+you+to+the+kind+people-A6922c48f59adb31b423ff75d?productType=757&sellable=EmkpjpjQxrsDEngYqdwj-757-39&appearance=1&size=29" },
      { id: "3-7", title: "Thank you to the kind people Recycled Duffel Bag", price: 21.99, description: "This large, square-shaped duffle bag from recycled polyester is perfect for travel, a trip to the gym, or as a home for your sports equipment. Complete with shoulder strap and reinforced bottom, this bag is built to last.", image: "/assets/pro/3/7.jpg", link: "https://fluxia.myspreadshop.com/thank+you+to+the+kind+people-A6922c48f59adb31b423ff75d?productType=636&sellable=EmkpjpjQxrsDEngYqdwj-636-33&appearance=2&size=29" },
      { id: "3-8", title: "Thank you to the kind people Unisex Baseball T-Shirt", price: 29.99, description: "Play ball! Take to the field or the classroom in this classic contrasting baseball tee by Tultex. An always-fashionable style, this baseball T-shirt is great by itself or as a layer under a T-shirt or hoodie.", image: "/assets/pro/3/8.jpg", link: "https://fluxia.myspreadshop.com/thank+you+to+the+kind+people-A6922c48f59adb31b423ff75d?productType=951&sellable=EmkpjpjQxrsDEngYqdwj-951-19&appearance=54" },
    ]
  },
  "4": {
    id: "4",
    name: "dog dad",
    designImage: "/assets/designs/4.png",
    allProductsLink: "https://fluxia.myspreadshop.com/dog+dad?idea=6923f4823c285b0e6a5a9597",
    products: [
      { id: "4-1", title: "dog dad Gildan Heavy Blend Adult Zip Hoodie", price: 36.99, description: "This hoodie checks all the right boxes: Kangaroo pocket, drawstring hood, zipper and comfort all wrapped into one. It’s the ultimate choice for lounging around and dress-down days!", image: "/assets/pro/4/1.jpg", link: "https://fluxia.myspreadshop.com/dog+dad-A6923f4823c285b0e6a5a9597?productType=198&sellable=J14YB85xpvTyDDp7bme2-198-29&appearance=2" },
      { id: "4-2", title: "dog dad Dog Bandana", price: 14.99, description: "Dogs are a man's best friend and this bandana is a dog's best friend. Your dog has a personality in its own right, so let it shine through with this great accessory.", image: "/assets/pro/4/2.jpg", link: "https://fluxia.myspreadshop.com/dog+dad-A6923f4823c285b0e6a5a9597?productType=611&sellable=J14YB85xpvTyDDp7bme2-611-41&appearance=2&size=29" },
      { id: "4-3", title: "dog dad Snapback Baseball Cap", price: 20.49, description: "This snapback cap comes with instant street cred. A must-have for anyone seeking that urban style, the snap-back comes with a flat but flexible brim. Throw this on as a complement to whatever look you’re going for.", image: "/assets/pro/4/3.jpg", link: "https://fluxia.myspreadshop.com/dog+dad-A6923f4823c285b0e6a5a9597?productType=803&sellable=J14YB85xpvTyDDp7bme2-803-34&appearance=2&size=29" },
      { id: "4-4", title: "dog dad Women's Moisture Wicking Performance T-Shirt", price: 25.49, description: "This performance tee has everything you’ll need for the perfect workout. It’s roomy, lightweight and highly breathable thanks to the PosiCharge moisture-wicking technology. With anti-fading features, your color and print will be protected wash after wash.", image: "/assets/pro/4/4.jpg", link: "https://fluxia.myspreadshop.com/dog+dad-A6923f4823c285b0e6a5a9597?productType=1341&sellable=J14YB85xpvTyDDp7bme2-1341-8&appearance=2" },
      { id: "4-5", title: "dog dad Unisex Joggers", price: 32.99, description: "These ultra-comfy mid-weight unisex joggers are ideal for lounging at home or keeping you warm for your workout. No matter your style, these cozy joggers are an essential basic.", image: "/assets/pro/4/5.jpg", link: "https://fluxia.myspreadshop.com/dog+dad-A6923f4823c285b0e6a5a9597?productType=1446&sellable=J14YB85xpvTyDDp7bme2-1446-219&appearance=309" },
      { id: "4-6", title: "dog dad Women's Premium Hoodie", price: 35.99, description: "If you're looking for a top-quality, instant-favorite sweatshirt, you've come to the right place! Our Premium Hoodie from our t Collection is everything you could ask for: it's warm and cozy with a tailored and feminine fit, and it's built to last. This item runs small.", image: "/assets/pro/4/6.jpg", link: "https://fluxia.myspreadshop.com/dog+dad-A6923f4823c285b0e6a5a9597?productType=444&sellable=J14YB85xpvTyDDp7bme2-444-23&appearance=2" },
      { id: "4-7", title: "dog dad Kid's Football Tee", price: 22.99, description: "Your kid can take a trip to yesteryear with this style-refined vintage T-shirt from LAT Apparel. This tee makes for an incredibly soft and comfortable wear, while features like the EasyTear™ label and double-needle stitching ensure a durable and fashionable wear for years to come.", image: "/assets/pro/4/7.jpg", link: "https://fluxia.myspreadshop.com/dog+dad-A6923f4823c285b0e6a5a9597?productType=1398&sellable=J14YB85xpvTyDDp7bme2-1398-9&appearance=54" },
      { id: "4-8", title: "dog dad Unisex Stars & Stripes T-Shirt", price: 28.49, description: "Proudly wear your stars and stripes in this all-American T-shirt crafted from breathable cotton.", image: "/assets/pro/4/8.jpg", link: "https://fluxia.myspreadshop.com/dog+dad-A6923f4823c285b0e6a5a9597?productType=1454&sellable=J14YB85xpvTyDDp7bme2-1454-8&appearance=1" },
    ]
  },
  "5": {
    id: "5",
    name: "Let the Gains Begin",
    designImage: "/assets/designs/5.png",
    allProductsLink: "https://fluxia.myspreadshop.com/let+the+gains+begin?idea=68ff70e608663611d20d65c5",
    products: [
      { id: "5-1", title: "Let the Gains Begin Women's Premium T-Shirt", price: 24.99, description: "The headliner of our Collection is the premium T-shirt. This is as perfect as perfect gets: it's soft yet stretchy, a little longer than a standard tee and figure-flattering. ITEM RUNS SMALL.", image: "/assets/pro/5/1.jpg", link: "https://fluxia.myspreadshop.com/let+the+gains+begin-A68ff70e608663611d20d65c5?productType=813&sellable=QwNLOzgDLMtjaLxE893Z-813-8&appearance=2" },
      { id: "5-2", title: "Let the Gains Begin Adjustable Apron", price: 19.49, description: "The last layer of defense against spillage of all sorts, this adjustable apron is a wonderful gift for yourself or a loved one. With plenty of coverage and pockets for utensils, forget cooking classes... this apron is all you need to become a gourmet chef!", image: "/assets/pro/5/2.jpg", link: "https://fluxia.myspreadshop.com/let+the+gains+begin-A68ff70e608663611d20d65c5?productType=1186&sellable=QwNLOzgDLMtjaLxE893Z-1186-35&appearance=2&size=29" },
      { id: "5-3", title: "Let the Gains Begin Full Color Mug", price: 15.99, description: "A colorful companion for your favorite brew. Good for all types of beverages, this classic container is a great way to make your hot cocoa cool again.", image: "/assets/pro/5/3.jpg", link: "https://fluxia.myspreadshop.com/let+the+gains+begin-A68ff70e608663611d20d65c5?productType=949&sellable=QwNLOzgDLMtjaLxE893Z-949-32&appearance=2&size=29" },
      { id: "5-4", title: "Let the Gains Begin Men's T-Shirt", price: 20.49, description: "Discover our Men's T-Shirt, crafted with sustainably and fairly grown cotton for an eco-friendly choice that doesn't skimp on style. Featuring double-needle stitching throughout, a seamless rib at the neck, and taped shoulder-to-shoulder construction for enhanced structure. Available in multiple colors and a wide range of sizes.", image: "/assets/pro/5/4.jpg", link: "https://fluxia.myspreadshop.com/let+the+gains+begin-A68ff70e608663611d20d65c5?productType=210&sellable=QwNLOzgDLMtjaLxE893Z-210-7&appearance=2" },
      { id: "5-5", title: "Let the Gains Begin Unisex Crewneck Sweatshirt", price: 34.99, description: "This classic has stood the test of time. Always in fashion, this crewneck sweatshirt by Gildan is perfect as an outer, under or single layer. Soft and comfortable, this stand-by is a must.", image: "/assets/pro/5/5.jpg", link: "https://fluxia.myspreadshop.com/let+the+gains+begin-A68ff70e608663611d20d65c5?productType=512&sellable=QwNLOzgDLMtjaLxE893Z-512-26&appearance=2" },
      { id: "5-6", title: "Let the Gains Begin Men's V-Neck T-Shirt by Bella + Canvas", price: 25.49, description: "Funny how throwing a little V in the neckline can make a T-shirt look classier, but it totally does. Nice enough to wear to the club and casual enough to wear around the house, this super soft jersey cotton V-neck is versatility at its finest.", image: "/assets/pro/5/6.jpg", link: "https://fluxia.myspreadshop.com/let+the+gains+begin-A68ff70e608663611d20d65c5?productType=686&sellable=QwNLOzgDLMtjaLxE893Z-686-12&appearance=708" },
      { id: "5-7", title: "Let the Gains Begin Stanley/Stella Drummer Unisex Organic Hoodie", price: 38.49, description: "The mid-weight organic hoodie from Stanley/Stella: cozy, high-end and made responsibly. A classic made for wearing time and time again.", image: "/assets/pro/5/7.jpg", link: "https://fluxia.myspreadshop.com/let+the+gains+begin-A68ff70e608663611d20d65c5?productType=2930&sellable=QwNLOzgDLMtjaLxE893Z-2930-22&appearance=2" },
      { id: "5-8", title: "Let the Gains Begin Washed Unisex T-Shirt", price: 27.99, description: "Getting the kiddos dressed for school or play just got easier. Reach for the Hanes Youth T-Shirt on busy mornings, and your kids will be ready for whatever comes next! This original style features a classic fit, tear-away tag and comfortable fabric to ensure maximum versatility.", image: "/assets/pro/5/8.jpg", link: "https://fluxia.myspreadshop.com/let+the+gains+begin-A68ff70e608663611d20d65c5?productType=3212&sellable=QwNLOzgDLMtjaLxE893Z-3212-7&appearance=1519" },
    ]
  },
  "6": {
    id: "6",
    name: "Admit It Life Would Be Boring Without Me, Funny",
    designImage: "/assets/designs/6.png",
    allProductsLink: "https://fluxia.myspreadshop.com/admit+it+life+would+be+boring+without+me%2C+funny?idea=68ebee5cc20b5110650d530c",
    products: [
      { id: "6-1", title: "Kids' Premium T-Shirt", price: 20.49, description: "Our collections premium T-shirt should be a big part of any kids' wardrobe. It wears rough and tough for kids who play the same way. Ideal for playing outside or sitting quietly doing homework, the premium T-shirt from the our collection is as versatile and durable as it gets.", image: "/assets/pro/6/1.jpg", link: "https://fluxia.myspreadshop.com/admit+it+life+would+be+boring+without+me+funny-A68ebee5cc20b5110650d530c?productType=815&sellable=ybwdGk2dMphg7w1bBkjD-815-9&appearance=648" },
      { id: "6-2", title: "Men's Premium Tank", price: 24.99, description: "Hit the beach, the street or the gym in this soft, durable tank from the our collection.", image: "/assets/pro/6/2.jpg", link: "https://fluxia.myspreadshop.com/admit+it+life+would+be+boring+without+me+funny-A68ebee5cc20b5110650d530c?productType=916&sellable=ybwdGk2dMphg7w1bBkjD-916-15&appearance=648" },
      { id: "6-3", title: "Kids‘ Premium Hoodie", price: 33.49, description: "If you’re looking for a top-quality, instant-favorite sweatshirt for any child, you’ve come to the right place! Our Premium Hoodie from the Spreadshirt Collection is everything you could ask for: it’s warm and cozy, heavyweight and roomy, and built to last. ITEM RUNS SMALL.", image: "/assets/pro/6/3.jpg", link: "https://fluxia.myspreadshop.com/admit+it+life+would+be+boring+without+me+funny-A68ebee5cc20b5110650d530c?productType=654&sellable=ybwdGk2dMphg7w1bBkjD-654-24&appearance=4" },
      { id: "6-4", title: "Women's T-Shirt", price: 23.49, description: "Discover our Women's T-Shirt, crafted with sustainably and fairly grown USA cotton for an eco-friendly choice that doesn't skimp on style. This T-shirt features a feminine mid-scoop neck, cap sleeves, and a slightly tapered fit for a flattering silhouette. Durable double-needle stitching and seamless rib at the neck ensure comfort and longevity. Ideal for any casual occasion, this t-shirt combines ethical manufacturing with everyday versatility.", image: "/assets/pro/6/4.jpg", link: "https://fluxia.myspreadshop.com/admit+it+life+would+be+boring+without+me+funny-A68ebee5cc20b5110650d530c?productType=347&sellable=ybwdGk2dMphg7w1bBkjD-347-8&appearance=386" },
      { id: "6-5", title: "Organic Contrast SS Baby Bodysuit", price: 21.99, description: "This sweet baby bodysuit is made with organic cotton for a natural, breathable and soft short-sleeved outfit. The subtle color contrast adds that extra little touch of cuteness. Dressing even the squirmiest baby is a breeze with the envelope-style neckline and easy snap closures.", image: "/assets/pro/6/5.jpg", link: "https://fluxia.myspreadshop.com/admit+it+life+would+be+boring+without+me+funny-A68ebee5cc20b5110650d530c?productType=1268&sellable=ybwdGk2dMphg7w1bBkjD-1268-10&appearance=796" },
      { id: "6-6", title: "Baby Fleece One Piece", price: 24.99, description: "Your little one will feel like a real lucky bunny in this cute bodysuit. Cozy ribbed cuffs help create the ultimate comfortable fit. Featuring an easy-on, easy-off snap tape closure, it’ll make dressing your baby child’s play.", image: "/assets/pro/6/6.jpg", link: "https://fluxia.myspreadshop.com/admit+it+life+would+be+boring+without+me+funny-A68ebee5cc20b5110650d530c?productType=2426&sellable=ybwdGk2dMphg7w1bBkjD-2426-204&appearance=2" },
      { id: "6-7", title: "Baby 5 Star Print One Piece", price: 19.99, description: "Dress your little star in our charming baby bodysuit adorned with a delightful star pattern. With an innovative three snap closure for easy changing and a comfortable fit that allows your baby to move freely. This adorable outfit will keep your little one looking cute and feeling cozy.", image: "/assets/pro/6/7.jpg", link: "https://fluxia.myspreadshop.com/admit+it+life+would+be+boring+without+me+funny-A68ebee5cc20b5110650d530c?productType=3027&sellable=ybwdGk2dMphg7w1bBkjD-3027-10&appearance=1242" },
      { id: "6-8", title: "Toddler Girls Flutter T-shirt", price: 21.99, description: "Dress your little one in the charming Toddler Girls Flutter T-shirt, perfect for any occasion. This tee features double needle ribbed binding on the collar and bottom hem for enhanced durability and a comfortable fit. The double-layered flutter sleeves with serged edges add a whimsical touch, while coverstitched armholes and side seams ensure the shirt holds up to active play. Stylish and sturdy, this shirt blends practicality with playful flair.", image: "/assets/pro/6/8.jpg", link: "https://fluxia.myspreadshop.com/admit+it+life+would+be+boring+without+me+funny-A68ebee5cc20b5110650d530c?productType=3154&sellable=ybwdGk2dMphg7w1bBkjD-3154-9&appearance=2" },
    ]
  },
  "7": {
    id: "7",
    name: "Linemen — Because Quarterbacks Need Heroes",
    designImage: "/assets/designs/7.png",
    allProductsLink: "https://fluxia.myspreadshop.com/linemen+%E2%80%94+because+quarterbacks+need+heroes?idea=68ff4af50df5fd6af7836d98",
    products: [
      { id: "7-1", title: "Gildan Ultra Cotton Youth T-Shirt", price: 20.99, description: "We’re assuming kids aren’t using the word “ultra” as an exclamation, but that could change quickly once they get a look at this tee. The comfy cotton option makes for the perfect after-school tee, although it’s versatile enough for any time and occasion.", image: "/assets/pro/7/5.jpg", link: "https://fluxia.myspreadshop.com/linemen+because+quarterbacks+need+heroes-A68ff4af50df5fd6af7836d98?productType=1357&sellable=zvlnmpNq2DsGx9yevrbd-1357-9&appearance=348" },
      { id: "7-2", title: "Full Color Mug", price: 15.99, description: "A colorful companion for your favorite brew. Good for all types of beverages, this classic container is a great way to make your hot cocoa cool again.", image: "/assets/pro/7/2.jpg", link: "https://fluxia.myspreadshop.com/linemen+because+quarterbacks+need+heroes-A68ff4af50df5fd6af7836d98?productType=949&sellable=zvlnmpNq2DsGx9yevrbd-949-32&appearance=2&size=29" },
      { id: "7-3", title: "Computer Backpack", price: 31.99, description: "Perfect for students, businessmen on the go or your favorite local hipster who needs to carry his laptop with him on his vintage bike, this computer backpack has all the bells and whistles. Dedicated padded laptop storage, a guaranteed-to-keep-your-stuff-organized interior, headphone port… what more could you need?", image: "/assets/pro/7/7.jpg", link: "https://fluxia.myspreadshop.com/linemen+because+quarterbacks+need+heroes-A68ff4af50df5fd6af7836d98?productType=1157&sellable=zvlnmpNq2DsGx9yevrbd-1157-33&appearance=378&size=29" },
      { id: "7-4", title: "Fanny Pack", price: 19.99, description: "Whether you clip it around your waist, sling it over your shoulder or wear it cross-body – this retro fanny pack will be your new multifunctional best friend. In true and classic fanny pack style, it’s made of durable polyester and topped off with an adjustable strap.", image: "/assets/pro/7/8.jpg", link: "https://fluxia.myspreadshop.com/linemen+because+quarterbacks+need+heroes-A68ff4af50df5fd6af7836d98?productType=1586&sellable=zvlnmpNq2DsGx9yevrbd-1586-33&appearance=2&size=29" },
      { id: "7-5", title: "Men’s Fitted Poly/Cotton T-Shirt", price: 23.49, description: "This fitted cotton/poly tee should be a staple of everyone's wardrobe. The cotton/poly blend makes for durable wear and a form-fit that won't stretch after a few washes, and the sustainable recycled polyester means you can feel good about looking good.", image: "/assets/pro/7/3.jpg", link: "https://fluxia.myspreadshop.com/linemen+because+quarterbacks+need+heroes-A68ff4af50df5fd6af7836d98?productType=1130&sellable=zvlnmpNq2DsGx9yevrbd-1130-7&appearance=566" },
      { id: "7-6", title: "Unisex Tri-Blend T-Shirt", price: 26.49, description: "The unisex T-shirt in a super trendy heather look. The blended fabrics combine durability with silky smooth comfort wear.", image: "/assets/pro/7/4.jpg", link: "https://fluxia.myspreadshop.com/linemen+because+quarterbacks+need+heroes-A68ff4af50df5fd6af7836d98?productType=691&sellable=zvlnmpNq2DsGx9yevrbd-691-7&appearance=490" },
      { id: "7-7", title: "Men's Premium T-Shirt", price: 23.99, description: "This premium T-shirt is as close to perfect as can be. It's optimized for all types of print and will quickly become your favorite T-shirt. Soft, comfortable and durable, this is a definite must-own.", image: "/assets/pro/7/1.jpg", link: "https://fluxia.myspreadshop.com/linemen+because+quarterbacks+need+heroes-A68ff4af50df5fd6af7836d98?productType=812&sellable=zvlnmpNq2DsGx9yevrbd-812-7&appearance=366" },
      { id: "7-8", title: "Unisex Crewneck Sweatshirt", price: 34.99, description: "This classic has stood the test of time. Always in fashion, this crewneck sweatshirt by Gildan is perfect as an outer, under or single layer. Soft and comfortable, this stand-by is a must.", image: "/assets/pro/7/6.jpg", link: "https://fluxia.myspreadshop.com/linemen+because+quarterbacks+need+heroes-A68ff4af50df5fd6af7836d98?productType=512&sellable=zvlnmpNq2DsGx9yevrbd-512-26&appearance=2" },
    ]
  },
  "8": {
    id: "8",
    name: "Saltwater Aquarist — Life Is Better",
    designImage: "/assets/designs/8.png",
    allProductsLink: "https://fluxia.myspreadshop.com/saltwater+aquarist+%E2%80%94+life+is+better?idea=68ff4af4c20b511065a2cc4f",
    products: [
      { id: "8-1", title: "Saltwater Aquarist — Life Is Better Women's Premium T-Shirt", price: 24.99, description: "The headliner of our Collection is the premium T-shirt. This is as perfect as perfect gets: it's soft yet stretchy, a little longer than a standard tee and figure-flattering. ITEM RUNS SMALL.", image: "/assets/pro/8/1.jpg", link: "https://fluxia.myspreadshop.com/saltwater+aquarist+life+is+better-A68ff4af4c20b511065a2cc4f?productType=813&sellable=VMa4ol2GZJsnN4q3Ljxr-813-8&appearance=648" },
      { id: "8-2", title: "Saltwater Aquarist — Life Is Better Women's Hoodie", price: 33.49, description: "This plush pullover is perfect for the gym, errands or kicking around the house. The midweight fabric makes for a versatile under, over or solo layer. A staple in casual comfort, this classic style is a must-own.", image: "/assets/pro/8/2.jpg", link: "https://fluxia.myspreadshop.com/saltwater+aquarist+life+is+better-A68ff4af4c20b511065a2cc4f?productType=405&sellable=VMa4ol2GZJsnN4q3Ljxr-405-23&appearance=129" },
      { id: "8-3", title: "Saltwater Aquarist — Life Is Better Women's V-Neck T-Shirt", price: 25.49, description: "This contoured, classic cut V-neck T-shirt has that flattering style that's sure to turn some heads. It's great for layering under a sweater or sweatshirt and even better by itself with a pair of jeans. It's a good idea to own this one in a few different colors; it's definitely a go-to item.", image: "/assets/pro/8/3.jpg", link: "https://fluxia.myspreadshop.com/saltwater+aquarist+life+is+better-A68ff4af4c20b511065a2cc4f?productType=348&sellable=VMa4ol2GZJsnN4q3Ljxr-348-13&appearance=2" },
      { id: "8-4", title: "Saltwater Aquarist — Life Is Better Throw Pillow Cover 17.5” x 17.5”", price: 17.99, description: "Whether you're looking for a couch decoration, something to rest your head on during a Game of Thrones marathon, or the perfect weapon during a pillow fight, this throw pillow cover is the perfect choice. Soft and durable, you can be confident that your pillows will be 'covered' for the foreseeable future.", image: "/assets/pro/8/4.jpg", link: "https://fluxia.myspreadshop.com/saltwater+aquarist+life+is+better-A68ff4af4c20b511065a2cc4f?productType=1049&sellable=VMa4ol2GZJsnN4q3Ljxr-1049-37&appearance=2&size=29" },
      { id: "8-5", title: "Saltwater Aquarist — Life Is Better Women's Cropped T-Shirt", price: 26.49, description: "Show off your curves with this trendy crop top that's just flirty enough. Ultra-lightweight, super comfy and breezy, this is sure to be an everyday favorite.", image: "/assets/pro/8/5.jpg", link: "https://fluxia.myspreadshop.com/saltwater+aquarist+life+is+better-A68ff4af4c20b511065a2cc4f?productType=1408&sellable=VMa4ol2GZJsnN4q3Ljxr-1408-8&appearance=164" },
      { id: "8-6", title: "Saltwater Aquarist — Life Is Better Kids' Apron", price: 17.99, description: "Let the kids go wild in the kitchen with this extra wide apron. Your next generation chef is going to love it – and will be protected against dough splashes and chocolate hands. The material is soft to the touch, stain resistant and won't fade after frequent laundering.", image: "/assets/pro/8/6.jpg", link: "https://fluxia.myspreadshop.com/saltwater+aquarist+life+is+better-A68ff4af4c20b511065a2cc4f?productType=1426&sellable=VMa4ol2GZJsnN4q3Ljxr-1426-35&appearance=2&size=29" },
      { id: "8-7", title: "Saltwater Aquarist — Life Is Better Washed Women´s Muscle Tank Top", price: 22.49, description: "This casual, boxy muscle tank is designed for comfort and style. It's the ideal easy throw-on top for both workouts or casual outings. Pair it with gym leggings for a sporty look or with jeans for a chic yet laid-back outfit.", image: "/assets/pro/8/7.jpg", link: "https://fluxia.myspreadshop.com/saltwater+aquarist+life+is+better-A68ff4af4c20b511065a2cc4f?productType=2917&sellable=VMa4ol2GZJsnN4q3Ljxr-2917-16&appearance=1227" },
      { id: "8-8", title: "Saltwater Aquarist — Life Is Better 17 oz Insulated Stainless Steel Water Bottle", price: 23.49, description: "Whether you’re in a lecture hall or hiking rugged trails, this insulated water bottle will keep you quenched on all occasions. Featuring a sleek design and double-wall insulation, you can keep any beverage cold for 24 hours or hot for 12.", image: "/assets/pro/8/8.jpg", link: "https://fluxia.myspreadshop.com/saltwater+aquarist+life+is+better-A68ff4af4c20b511065a2cc4f?productType=1453&sellable=VMa4ol2GZJsnN4q3Ljxr-1453-39&appearance=1&size=29" },
    ]
  },
  "9": {
    id: "9",
    name: "Small Steps Big Changes Motivational Shirt",
    designImage: "/assets/designs/9.png",
    allProductsLink: "https://fluxia.myspreadshop.com/small+steps+big+changes+motivational+shirt?idea=68ff70e6c20b511065879848&page=2",
    products: [
      { id: "9-1", title: "Small Steps Big Changes Motivational Shirt Men's Premium Hoodie", price: 35.99, description: "If you're looking for a top-quality, instant-favorite sweatshirt, you've come to the right place! Our Premium Hoodie is everything you could ask for: it's warm and cozy, heavyweight and roomy, and built to last.", image: "/assets/pro/9/1.jpg", link: "https://fluxia.myspreadshop.com/small+steps+big+changes+motivational+shirt-A68ff70e6c20b511065879848?productType=20&sellable=5wBGAa9xEac7zGlVMRA0-20-22&appearance=1" },
      { id: "9-2", title: "Small Steps Big Changes Motivational Shirt Women's Premium Hoodie", price: 35.99, description: "If you're looking for a top-quality, instant-favorite sweatshirt, you've come to the right place! Our Premium Hoodie from our t Collection is everything you could ask for: it's warm and cozy with a tailored and feminine fit, and it's built to last. This item runs small.", image: "/assets/pro/9/2.jpg", link: "https://fluxia.myspreadshop.com/small+steps+big+changes+motivational+shirt-A68ff70e6c20b511065879848?productType=444&sellable=5wBGAa9xEac7zGlVMRA0-444-23&appearance=1" },
      { id: "9-3", title: "Small Steps Big Changes Motivational Shirt Kids' Premium T-Shirt", price: 20.49, description: "Our collections premium T-shirt should be a big part of any kids' wardrobe. It wears rough and tough for kids who play the same way. Ideal for playing outside or sitting quietly doing homework, the premium T-shirt from the our collection is as versatile and durable as it gets.", image: "/assets/pro/9/3.jpg", link: "https://fluxia.myspreadshop.com/small+steps+big+changes+motivational+shirt-A68ff70e6c20b511065879848?productType=815&sellable=5wBGAa9xEac7zGlVMRA0-815-9&appearance=1" },
      { id: "9-4", title: "Small Steps Big Changes Motivational Shirt Men's Premium Long Sleeve T-Shirt", price: 25.00, description: "This premium long sleeve t-shirt is as close to perfect as can be. It's optimized for all types of print and will quickly become your favorite layer. Soft, comfortable and durable, this is a definite must-own and a recommended product", image: "/assets/pro/9/4.jpg", link: "https://fluxia.myspreadshop.com/small+steps+big+changes+motivational+shirt-A68ff70e6c20b511065879848?productType=875&sellable=5wBGAa9xEac7zGlVMRA0-875-18&appearance=1" },
      { id: "9-5", title: "Small Steps Big Changes Motivational Shirt Men's T-Shirt", price: 20.49, description: "Discover our Men's T-Shirt, crafted with sustainably and fairly grown cotton for an eco-friendly choice that doesn't skimp on style. Featuring double-needle stitching throughout, a seamless rib at the neck, and taped shoulder-to-shoulder construction for enhanced structure. Available in multiple colors and a wide range of sizes.", image: "/assets/pro/9/5.jpg", link: "https://fluxia.myspreadshop.com/small+steps+big+changes+motivational+shirt-A68ff70e6c20b511065879848?productType=210&sellable=5wBGAa9xEac7zGlVMRA0-210-7&appearance=1" },
      { id: "9-6", title: "Small Steps Big Changes Motivational Shirt Eco-Friendly Cotton Tote", price: 21.49, description: "Help the Earth, your back and some conscience with this dual-purpose, eco-friendly cotton tote. Carry anything you please to anywhere you’re headed in this fashionable 100% Earth-friendly cotton tote.", image: "/assets/pro/9/6.jpg", link: "https://fluxia.myspreadshop.com/small+steps+big+changes+motivational+shirt-A68ff70e6c20b511065879848?productType=378&sellable=5wBGAa9xEac7zGlVMRA0-378-33&appearance=140&size=29" },
      { id: "9-7", title: "Small Steps Big Changes Motivational Shirt Camper Mug", price: 17.99, description: "Classic retro cup with enamel coating to be used outdoors. Not only cowboys will enjoy sipping a hot coffee or cool bourbon by the campfire. The mug has rolled rims made of stainless steel for added comfort and timeless style. Small irregularities round up this mug’s vintage look.", image: "/assets/pro/9/7.jpg", link: "https://fluxia.myspreadshop.com/small+steps+big+changes+motivational+shirt-A68ff70e6c20b511065879848?productType=1313&sellable=5wBGAa9xEac7zGlVMRA0-1313-32&appearance=1&size=29" },
      { id: "9-8", title: "Small Steps Big Changes Motivational Shirt Bucket Hat", price: 20.99, description: "The Bucket Hat is an iconic accessory with a retro vibe. The short and defined brim will keep you looking and feeling good year-round. This unisex style will complete any outfit, whether you’re lounging by a pool or on an urban adventure.", image: "/assets/pro/9/8.jpg", link: "https://fluxia.myspreadshop.com/small+steps+big+changes+motivational+shirt-A68ff70e6c20b511065879848?productType=1462&sellable=5wBGAa9xEac7zGlVMRA0-1462-36&appearance=1&size=29" },
    ]
  },
  "10": {
    id: "10",
    name: "Gamer Don’t Pause Funny Gaming Shirt",
    designImage: "/assets/designs/10.png",
    allProductsLink: "https://fluxia.myspreadshop.com/gamer+don%E2%80%99t+pause+funny+gaming+shirt?idea=68ff70e60df5fd6af764fabb",
    products: [
      { id: "10-1", title: "Gamer Don’t Pause Funny Gaming Shirt Toddler Premium T-Shirt", price: 20.49, description: "The grand daddy of our collection, this premium T-shirt is as close to perfect as can be. It's optimized for all types of print and will quickly become you favorite T-shirt. Soft and comfortable, durable and thick, this is a definite must-own and a recommended product.", image: "/assets/pro/10/1.jpg", link: "https://fluxia.myspreadshop.com/gamer+dont+pause+funny+gaming+shirt-A68ff70e60df5fd6af764fabb?productType=814&sellable=LkJEwnOQ3yiwgrkQQ94X-814-9&appearance=1" },
      { id: "10-2", title: "Gamer Don’t Pause Funny Gaming Shirt Women's T-Shirt", price: 23.49, description: "Discover our Women's T-Shirt, crafted with sustainably and fairly grown USA cotton for an eco-friendly choice that doesn't skimp on style. This T-shrit features a feminine mid-scoop neck, cap sleeves, and a slightly tapered fit for a flattering silhouette. Durable double-needle stitching and seamless rib at the neck ensure comfort and longevity. Ideal for any casual occasion, this t-shirt combines ethical manufacturing with everyday versatility.", image: "/assets/pro/10/2.jpg", link: "https://fluxia.myspreadshop.com/gamer+dont+pause+funny+gaming+shirt-A68ff70e60df5fd6af764fabb?productType=347&sellable=LkJEwnOQ3yiwgrkQQ94X-347-8&appearance=1" },
      { id: "10-3", title: "Gamer Don’t Pause Funny Gaming Shirt Contrast Coffee Mug", price: 15.49, description: "A bright start for your day: indulge yourself with a hot drink from our contrasting ceramic mug. The subtle optics of the contrasting trim and handle give your favorite brew a stylish setting. Everybody’s coffee order is unique to them, so why should your mug be any different?", image: "/assets/pro/10/3.jpg", link: "https://fluxia.myspreadshop.com/gamer+dont+pause+funny+gaming+shirt-A68ff70e60df5fd6af764fabb?productType=268&sellable=LkJEwnOQ3yiwgrkQQ94X-268-32&appearance=544&size=29" },
      { id: "10-4", title: "Gamer Don’t Pause Funny Gaming Shirt Tote Bag", price: 17.99, description: "This canvas tote bag is a multi-functional masterpiece. Use it as a reusable grocery bag, for books or other goodies – wherever you’re going, bring it with you.", image: "/assets/pro/10/4.jpg", link: "https://fluxia.myspreadshop.com/gamer+dont+pause+funny+gaming+shirt-A68ff70e60df5fd6af764fabb?productType=842&sellable=LkJEwnOQ3yiwgrkQQ94X-842-33&appearance=1&size=29" },

    ]
  },
  "11": {
    id: "11",
    name: "Smile More, Stress Less Daily",
    designImage: "/assets/designs/11.png",
    allProductsLink: "https://fluxia.myspreadshop.com/smile+more%2C+stress+less+daily?idea=68ff70e6c20b511065879849",
    products: [
      { id: "11-1", title: "", price: 0, description: "", image: "/assets/pro/11/1.jpg", link: "https://fluxia.myspreadshop.com/smile+more+stress+less+daily-A68ff70e6c20b511065879849?productType=1130&sellable=bNXr2BjpbBIbAx3jOqam-1130-7&appearance=2" },
      { id: "11-2", title: "", price: 0, description: "", image: "/assets/pro/11/2.jpg", link: "https://fluxia.myspreadshop.com/smile+more+stress+less+daily-A68ff70e6c20b511065879849?productType=611&sellable=bNXr2BjpbBIbAx3jOqam-611-41&appearance=2&size=29" },
      { id: "11-3", title: "", price: 0, description: "", image: "/assets/pro/11/3.jpg", link: "https://fluxia.myspreadshop.com/smile+more+stress+less+daily-A68ff70e6c20b511065879849?productType=1094&sellable=bNXr2BjpbBIbAx3jOqam-1094-205&appearance=2&size=53" },
      { id: "11-4", title: "", price: 0, description: "", image: "/assets/pro/11/4.jpg", link: "https://fluxia.myspreadshop.com/smile+more+stress+less+daily-A68ff70e6c20b511065879849?productType=1268&sellable=bNXr2BjpbBIbAx3jOqam-1268-10&appearance=796" },
      { id: "11-5", title: "", price: 0, description: "", image: "/assets/pro/11/5.jpg", link: "https://fluxia.myspreadshop.com/smile+more+stress+less+daily-A68ff70e6c20b511065879849?productType=3250&sellable=bNXr2BjpbBIbAx3jOqam-3250-10&appearance=1" },
      { id: "11-6", title: "", price: 0, description: "", image: "/assets/pro/11/6.jpg", link: "https://fluxia.myspreadshop.com/smile+more+stress+less+daily-A68ff70e6c20b511065879849?productType=3319&sellable=bNXr2BjpbBIbAx3jOqam-3319-9&appearance=1400" },
      { id: "11-7", title: "", price: 0, description: "", image: "/assets/pro/11/7.jpg", link: "https://fluxia.myspreadshop.com/smile+more+stress+less+daily-A68ff70e6c20b511065879849?productType=3027&sellable=bNXr2BjpbBIbAx3jOqam-3027-10&appearance=1242" },
      { id: "11-8", title: "", price: 0, description: "", image: "/assets/pro/11/8.jpg", link: "https://fluxia.myspreadshop.com/smile+more+stress+less+daily-A68ff70e6c20b511065879849?productType=2426&sellable=bNXr2BjpbBIbAx3jOqam-2426-204&appearance=2" },
    ]
  },
  "12": {
    id: "12",
    name: "Easily Distracted by Sloths & Dogs",
    designImage: "/assets/designs/12.png",
    allProductsLink: "https://fluxia.myspreadshop.com/easily+distracted+by+sloths+%26+dogs?idea=68ff4af4c20b511065a2cc50",
    products: [
      { id: "12-1", title: "", price: 0, description: "", image: "/assets/pro/12/1.jpg", link: "https://fluxia.myspreadshop.com/easily+distracted+by+sloths+dogs-A68ff4af4c20b511065a2cc50?productType=1544&sellable=J14eRNndGmseLYoqEglm-1544-16&appearance=2" },
      { id: "12-2", title: "", price: 0, description: "", image: "/assets/pro/12/2.jpg", link: "https://fluxia.myspreadshop.com/easily+distracted+by+sloths+dogs-A68ff4af4c20b511065a2cc50?productType=2376&sellable=J14eRNndGmseLYoqEglm-2376-220&appearance=2" },
      { id: "12-3", title: "", price: 0, description: "", image: "/assets/pro/12/3.jpg", link: "https://fluxia.myspreadshop.com/easily+distracted+by+sloths+dogs-A68ff4af4c20b511065a2cc50?productType=2381&sellable=J14eRNndGmseLYoqEglm-2381-16&appearance=2" },
      { id: "12-4", title: "", price: 0, description: "", image: "/assets/pro/12/4.jpg", link: "https://fluxia.myspreadshop.com/easily+distracted+by+sloths+dogs-A68ff4af4c20b511065a2cc50?productType=2420&sellable=J14eRNndGmseLYoqEglm-2420-220&appearance=2" },
      { id: "12-5", title: "", price: 0, description: "", image: "/assets/pro/12/5.jpg", link: "https://fluxia.myspreadshop.com/easily+distracted+by+sloths+dogs-A68ff4af4c20b511065a2cc50?productType=2421&sellable=J14eRNndGmseLYoqEglm-2421-23&appearance=2" },
      { id: "12-6", title: "", price: 0, description: "", image: "/assets/pro/12/6.jpg", link: "https://fluxia.myspreadshop.com/easily+distracted+by+sloths+dogs-A68ff4af4c20b511065a2cc50?productType=2422&sellable=J14eRNndGmseLYoqEglm-2422-220&appearance=2" },
      { id: "12-7", title: "", price: 0, description: "", image: "/assets/pro/12/7.jpg", link: "https://fluxia.myspreadshop.com/easily+distracted+by+sloths+dogs-A68ff4af4c20b511065a2cc50?productType=2440&sellable=J14eRNndGmseLYoqEglm-2440-8&appearance=2" },
      { id: "12-8", title: "", price: 0, description: "", image: "/assets/pro/12/8.jpg", link: "https://fluxia.myspreadshop.com/easily+distracted+by+sloths+dogs-A68ff4af4c20b511065a2cc50?productType=2883&sellable=J14eRNndGmseLYoqEglm-2883-23&appearance=2" },
    ]
  },
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
<Link href={product.link} className="block h-full">
  <article className="group bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100">
    
    {/* حاوية الصورة: تم تغيير h-96 إلى aspect-square لضمان التناسب 1:1 */}
    <div className="relative w-full aspect-square overflow-hidden bg-gray-50">
      <Image 
        src={product.image} 
        alt={product.title} 
        fill 
        className="object-cover transition-transform duration-500 group-hover:scale-105" 
      />
    </div>

 <div className="p-3 md:p-6"> {/* تقليل الحواف الداخلية على الجوال */}
  
  <h3 className="text-sm md:text-lg font-medium text-gray-900 mb-1 md:mb-3 line-clamp-3 group-hover:text-blue-600 transition-colors text-center">
    {product.title}
  </h3>

  {/* الوصف المخفي لـ SEO يبقى كما هو */}
  <p className="sr-only">{product.description}</p>

  <p className="text-lg md:text-2xl font-medium text-black justify-center flex mt-auto">
    ${product.price.toFixed(2)}
  </p>
</div>
  </article>
</Link>
);

// المكون الأساسي للمحتوى لفصله من أجل Suspense
function ShopContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const designQuery = searchParams.get('d');
  const initialDesignId = Object.keys(designsData)[0];
  const [selectedDesign, setSelectedDesign] = useState<string>(designQuery || initialDesignId);
  const [isSticky, setIsSticky] = useState(false);

  // --- إعدادات السحب المحسنة ---
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isMoved, setIsMoved] = useState(false); // للتفريق بين السحب والنقر

  useEffect(() => {
    if (designQuery && designsData[designQuery]) {
      setSelectedDesign(designQuery);
    }
  }, [designQuery]);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDown(true);
    setIsMoved(false); // إعادة التعيين عند كل ضغطة
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    setIsDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !sliderRef.current) return;
    
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    
    // إذا تحرك المستخدم أكثر من 5 بكسل، نعتبره سحباً وليس نقراً
    if (Math.abs(walk) > 5) {
      setIsMoved(true);
      e.preventDefault(); // منع أي سلوك افتراضي فقط عند التحرك الفعلي
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleDesignChange = (id: string) => {
    // إذا كان المستخدم يسحب، لا نغير التصميم
    if (isMoved) return;
    
    setSelectedDesign(id);
    router.push(`/shop?d=${id}`, { scroll: false });
  };

  const currentDesignData = designsData[selectedDesign];
  const displayProducts = currentDesignData?.products || [];
  const seeAllLink = currentDesignData?.allProductsLink || "#";
  return (
    <>
      {/* شريط التصاميم العلوي */}
        <section
          className={`z-10 bg-white border-b border-gray-100 transition-all duration-300 ${
            isSticky ? "sticky top-0 shadow-lg" : "relative shadow-sm"
          }`}
        >
          <div className="py-2">
            <div
              ref={sliderRef}
              className={`overflow-x-auto scrollbar-hide ${
                isDown ? "cursor-grabbing" : "cursor-grab"
              }`}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              <div className="flex gap-6 px-4 md:px-8 pb-2 min-w-max items-center">
                {Object.values(designsData).map((design) => (
                  <button
                    key={design.id}
                    onClick={() => handleDesignChange(design.id)}
                    onDragStart={(e) => e.preventDefault()}
                    className="flex-shrink-0 group outline-none"
                  >
                    <div
                      className={`relative w-18 h-18   md:w-24 md:h-24 rounded-lg overflow-hidden bg-[#3b3b3b] border transition-all mt-2 ${
                        selectedDesign === design.id
                          ? "border-black scale-110 shadow-md"
                          : "border-gray-100 opacity-80 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={design.designImage}
                        alt={design.name}
                        fill // أهم خاصية: منع تداخل أحداث الصورة مع السحب
                        className="object-contain p-2 pointer-events-none select-none"
                        draggable={false}
                      />
                    </div>
                  </button>
                ))}

                <Link
                  href="https://fluxia.myspreadshop.com/create"
                  className="flex-shrink-0 group outline-none no-underline"
                  onDragStart={(e) => e.preventDefault()}
                  onClick={(e) => isMoved && e.preventDefault()}
                >
                  <div className="flex flex-col items-center justify-center w-18 h-18 md:w-24 md:h-24 rounded-lg bg-gray-100 border border-dashed border-gray-400 mt-2 transition-all group-hover:bg-black group-hover:border-black group-active:scale-95">
                    <span className="text-[10px] md:text-xs font-bold text-gray-600 group-hover:text-white uppercase tracking-tighter">
                      Customize
                    </span>

                    <svg
                      className="w-4 h-4 md:w-6 md:h-6 text-gray-500 group-hover:text-white mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                </Link>

                {/* --- زر "See All" الجديد في نهاية الشريط --- */}
                <Link
                  href="https://fluxia.myspreadshop.com/all?listModeOverride=DESIGN" // ضع رابط متجرك الرئيسي هنا
                  className="flex-shrink-0 group outline-none no-underline"
                  onDragStart={(e) => e.preventDefault()}
                  onClick={(e) => isMoved && e.preventDefault()} // منع الانتقال إذا كان سحباً
                >
                  <div className="flex flex-col items-center justify-center w-18 h-18 md:w-24 md:h-24 rounded-lg bg-gray-100 border border-dashed border-gray-400 mt-2 transition-all group-hover:bg-black group-hover:border-black group-active:scale-95">
                    <span className="text-[10px] md:text-xs font-bold text-gray-600 group-hover:text-white uppercase tracking-tighter">
                      See All
                    </span>
                    <svg
                      className="w-4 h-4 md:w-6 md:h-6 text-gray-500 group-hover:text-white mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* شبكة المنتجات */}
        <section className="py-12">
          <div className="container mx-auto px-1  md:px-2">
            <div className="mb-8 px-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {designsData[selectedDesign]?.name}
              </h2>
              <p className="text-gray-500">
                20+ items found
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
              {displayProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* زر رؤية الكل الديناميكي */}
          {seeAllLink !== "#" && (
            <div className="mt-16 flex justify-center">
              <Link
                href={seeAllLink}
                className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-300 bg-black rounded-full hover:bg-gray-800 hover:scale-105 active:scale-95 shadow-lg"
              >
                <span>See All Products</span>
                <svg
                  className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          )}
        </section>
        {/* كود CSS المخصص لإخفاء الشريط نهائياً */}
        <style jsx global>{`
          /* إخفاء شريط التمرير لمتصفحات Chrome و Safari و Edge */
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }

          /* إخفاء شريط التمرير لمتصفح Firefox */
          .scrollbar-hide {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}</style>
    </>
  );
}

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* يجب تغليف المكون بـ Suspense عند استخدام useSearchParams في Next.js */}
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
        <ShopContent />
      </Suspense>
      <Footer />
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
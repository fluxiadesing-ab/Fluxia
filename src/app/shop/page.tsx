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
    name: "Nature Collection",
    designImage: "/assets/designs/3.png",
    allProductsLink: "https://fluxia.myspreadshop.com/thank+you+to+the+kind+people?idea=6922c48f59adb31b423ff75d",
    products: [
      { id: "3-1", title: "", price: 39.99, description: "", image: "/assets/pro/4/1.png", link: "" },
    ]
  },
  "4": {
    id: "4",
    name: "Nature Collection",
    designImage: "/assets/designs/4.png",
    allProductsLink: "https://fluxia.myspreadshop.com/thank+you+to+the+kind+people?idea=6922c48f59adb31b423ff75d",
    products: [
      { id: "4-1", title: "", price: 39.99, description: "", image: "/assets/pro/4/1.png", link: "" },
    ]
  },
  "5": {
    id: "5",
    name: "Nature Collection",
    designImage: "/assets/designs/5.png",
    allProductsLink: "https://fluxia.myspreadshop.com/thank+you+to+the+kind+people?idea=6922c48f59adb31b423ff75d",
    products: [
      { id: "5-1", title: "", price: 39.99, description: "", image: "/assets/pro/4/1.png", link: "" },
    ]
  },
  "6": {
    id: "6",
    name: "Nature Collection",
    designImage: "/assets/designs/6.png",
    allProductsLink: "https://fluxia.myspreadshop.com/thank+you+to+the+kind+people?idea=6922c48f59adb31b423ff75d",
    products: [
      { id: "6-1", title: "", price: 39.99, description: "", image: "/assets/pro/4/1.png", link: "" },
    ]
  },
  "7": {
    id: "7",
    name: "Nature Collection",
    designImage: "/assets/designs/7.png",
    allProductsLink: "https://fluxia.myspreadshop.com/thank+you+to+the+kind+people?idea=6922c48f59adb31b423ff75d",
    products: [
      { id: "7-1", title: "", price: 39.99, description: "", image: "/assets/pro/4/1.png", link: "" },
    ]
  },
  "8": {
    id: "8",
    name: "Nature Collection",
    designImage: "/assets/designs/8.png",
    allProductsLink: "https://fluxia.myspreadshop.com/thank+you+to+the+kind+people?idea=6922c48f59adb31b423ff75d",
    products: [
      { id: "8-1", title: "", price: 39.99, description: "", image: "/assets/pro/4/1.png", link: "" },
    ]
  },
  "9": {
    id: "9",
    name: "Nature Collection",
    designImage: "/assets/designs/9.png",
    allProductsLink: "https://fluxia.myspreadshop.com/thank+you+to+the+kind+people?idea=6922c48f59adb31b423ff75d",
    products: [
      { id: "9-1", title: "", price: 39.99, description: "", image: "/assets/pro/4/1.png", link: "" },
    ]
  },
  "10": {
    id: "10",
    name: "Nature Collection",
    designImage: "/assets/designs/10.png",
    allProductsLink: "https://fluxia.myspreadshop.com/thank+you+to+the+kind+people?idea=6922c48f59adb31b423ff75d",
    products: [
      { id: "10-1", title: "", price: 39.99, description: "", image: "/assets/pro/4/1.png", link: "" },
    ]
  },
  "11": {
    id: "11",
    name: "Nature Collection",
    designImage: "/assets/designs/11.png",
    allProductsLink: "https://fluxia.myspreadshop.com/thank+you+to+the+kind+people?idea=6922c48f59adb31b423ff75d",
    products: [
      { id: "11-1", title: "", price: 39.99, description: "", image: "/assets/pro/4/1.png", link: "" },
    ]
  },
  "12": {
    id: "12",
    name: "Nature Collection",
    designImage: "/assets/designs/12.png",
    allProductsLink: "https://fluxia.myspreadshop.com/thank+you+to+the+kind+people?idea=6922c48f59adb31b423ff75d",
    products: [
      { id: "12-1", title: "", price: 39.99, description: "", image: "/assets/pro/4/1.png", link: "" },
    ]
  },
  "13": {
    id: "13",
    name: "Enjoy The Process Motivational Shirt",
    designImage: "/assets/designs/13.png",
    allProductsLink: "https://fluxia.myspreadshop.com/thank+you+to+the+kind+people?idea=6922c48f59adb31b423ff75d",
    products: [
      { id: "13-1", title: "", price: 39.99, description: "", image: "/assets/pro/4/1.png", link: "" },
    ]
  },
  "14": {
    id: "14",
    name: "Conquer The Day Motivational T-Shirt",
    designImage: "/assets/designs/14.png",
    allProductsLink: "https://fluxia.myspreadshop.com/thank+you+to+the+kind+people?idea=6922c48f59adb31b423ff75d",
    products: [
      { id: "14-1", title: "", price: 39.99, description: "", image: "/assets/pro/4/1.png", link: "" },
    ]
  },
  "15": {
    id: "15",
    name: "Sweat Is Just Fat Crying' Funny Workout Gy",
    designImage: "/assets/designs/15.png",
    allProductsLink: "https://fluxia.myspreadshop.com/thank+you+to+the+kind+people?idea=6922c48f59adb31b423ff75d",
    products: [
      { id: "15-1", title: "", price: 39.99, description: "", image: "/assets/pro/4/1.png", link: "" },
    ]
  },
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
<Link href={product.link} className="block h-full">
  <article className="group bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg h-full border border-gray-100">
    
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
      <section className={`z-10 bg-white border-b border-gray-100 transition-all duration-300 ${
        isSticky ? 'sticky top-0 shadow-lg' : 'relative shadow-sm'
      }`}>
        <div className="py-2">
          <div 
            ref={sliderRef}
            className={`overflow-x-auto scrollbar-hide ${isDown ? 'cursor-grabbing' : 'cursor-grab'}`}
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
                  <div className={`relative w-18 h-18   md:w-24 md:h-24 rounded-lg overflow-hidden bg-[#3b3b3b] border transition-all mt-2 ${
                    selectedDesign === design.id ? 'border-black scale-110 shadow-md' : 'border-gray-100 opacity-80 hover:opacity-100'
                  }`}>
                    <Image src={design.designImage} alt={design.name} fill // أهم خاصية: منع تداخل أحداث الصورة مع السحب
                      className="object-contain p-2 pointer-events-none select-none" 
                      draggable={false} />
                  </div>
                </button>
              ))}

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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              {designsData[selectedDesign]?.name}
            </h2>
            <p className="text-gray-500">{displayProducts.length} items found</p>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
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
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Script from "next/script";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // العنوان: جعلناه أشمل ليشمل المنتجات الأخرى
  title: "Fluxia | Custom Printing on T-Shirts, Mugs, Bags & More",
  
  // الوصف: ركزنا هنا على التنوع (جاهز + مخصص) وعلى قائمة المنتجات
  description: "Create your style with Fluxia. High-quality custom printing on t-shirts, hoodies, mugs, and bags. Choose from our ready-made collections or upload your own design today!",
  
  // الكلمات المفتاحية: أضفنا المنتجات الجديدة
  keywords: [
    "custom t-shirts", 
    "custom hoodies", 
    "personalized mugs", 
    "custom tote bags", 
    "print on demand", 
    "ready-made designs", 
    "Fluxia store"
  ],

  // تحسين الظهور عند مشاركة الرابط (OpenGraph)
  openGraph: {
    title: "Fluxia | Your Creative Printing Store",
    description: "Personalize your world! Custom and ready-made designs for t-shirts, mugs, bags, and hoodies.",
    url: "https://fluxiadesign.com",
    siteName: "Fluxia",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="rIR1OB2ssan6EnTGgcfHHgsh1ns6TaYKrQeh5CndLkA"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-970P244BDY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-970P244BDY', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`
    ${robotoCondensed.variable}
    antialiased
  `}
      >
        {children}
      </body>
    </html>
  );
}

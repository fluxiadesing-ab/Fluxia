import Image from "next/image";
import Header from '../components/Header';
import Hero from '../components/Hero';
import DHero from '../components/DHero';
import Footer from '../components/Footer';
import Email from '../components/Emailen';
import ProductsGrid from "@/components/ProductsGrid";




export default function Home() {
  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full  flex-col  bg-white">
        <Header />
        <Hero />
        <ProductsGrid />
        <DHero />
        <Email />
        <Footer />
      </main>
    </div>
  );
}

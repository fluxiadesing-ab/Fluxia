import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-16">
<section className="mt-12 p-8 bg-neutral-900 text-white rounded-2xl">
  <h1 className="text-2xl font-bold mb-4">Contact Fluxia Design</h1>

  <p className="mb-4 text-gray-300 leading-relaxed">
    Fluxia Design is a print-on-demand brand focused on high-quality apparel and original designs.
    We work with trusted production partners to deliver premium products with reliable shipping and support.
  </p>

  <p className="mb-4 text-gray-300 leading-relaxed">
    If you have questions about our products, orders, collaborations, or general inquiries,
    feel free to reach out. We aim to respond to all messages within 24–48 hours.
  </p>

  <p className="mb-6 text-gray-300 leading-relaxed">
    For order-related questions, please include your order details to help us assist you faster.
  </p>

  <div className="space-y-3 text-sm">
    <p>
      <span className="text-gray-500">Email:</span>{" "}
      <a
        href="mailto:customer@fluxiadesign.com"
        className="hover:text-blue-400 underline"
      >
        customer@fluxiadesign.com
      </a>
    </p>

    <p>
      <span className="text-gray-500">Business Location:</span>{" "}
      Makkah Al-Mukarramah, Makkah, 24222, Saudi Arabia
    </p>
  </div>
</section>

      </main>

      <Footer />
    </>
  );
}

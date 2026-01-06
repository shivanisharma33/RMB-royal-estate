import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import TeamSection from '@/components/TeamSection';

/* ASSETS */
import heroImg from "@/assets/contact.jpg";
import officeImg from "@/assets/contact.jpg";
import detailImg from "@/assets/contact.jpg";
import lifestyleImg from "@/assets/contact.jpg";

export default function About() {
  return (
    <div className="bg-black text-white font-light">

      {/* ================= HEADER ================= */}
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="About Us"
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Center Title */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-6xl tracking-widest uppercase mb-6">
            About Us
          </h1>
          <p className="max-w-xl text-sm md:text-base text-white/70">
            A real estate group built on relationships, integrity, and a
            different way of thinking.
          </p>
        </div>
      </section>

      {/* ================= IMAGE + TEXT ================= */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 px-8 md:px-20 py-32">
        <img
          src={officeImg}
          alt="Our Office"
          className="w-full object-cover grayscale"
        />

        <div className="max-w-md">
          <h2 className="text-2xl uppercase tracking-widest mb-8">
            We don’t follow the standard model.
          </h2>
          <p className="text-sm leading-relaxed text-white/70">
            Our approach to real estate is intentionally different. We believe
            the process should feel personal, strategic, and considered — not
            rushed or transactional. Every decision we make is guided by long-
            term value and genuine relationships.
          </p>
        </div>
      </section>

      {/* ================= FULL WIDTH STATEMENT ================= */}
      <section className="px-8 md:px-20 py-32 border-t border-white/10">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl uppercase tracking-widest mb-10">
            Real estate, done differently.
          </h2>
          <p className="text-sm leading-relaxed text-white/70">
            We work with buyers, sellers, and investors who value clarity,
            confidence, and quality execution. From marketing to negotiation,
            our focus remains on delivering outcomes that stand the test of
            time.
          </p>
        </div>
      </section>

      {/* ================= TEXT + IMAGE ================= */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 px-8 md:px-20 py-32">
        <div className="max-w-md">
          <h2 className="text-2xl uppercase tracking-widest mb-8">
            People first. Always.
          </h2>
          <p className="text-sm leading-relaxed text-white/70">
            Behind every property is a person, a family, or an investor with a
            story. Understanding that story allows us to deliver advice that is
            not only informed — but meaningful.
          </p>
        </div>

        <img
          src={detailImg}
          alt="Detail"
          className="w-full object-cover grayscale"
        />
      </section>

      {/* ================= IMAGE + STATEMENT ================= */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 px-8 md:px-20 py-32">
        <img
          src={lifestyleImg}
          alt="Lifestyle"
          className="w-full object-cover grayscale"
        />

        <div className="max-w-md">
          <h2 className="text-2xl uppercase tracking-widest mb-8">
            Built on trust & experience.
          </h2>
          <p className="text-sm leading-relaxed text-white/70">
            Our team combines local market expertise with a modern, strategic
            mindset. Whether buying, selling, or investing — we guide each step
            with transparency and confidence.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-8 md:px-20 py-32 border-t border-white/10 text-center">
        <h2 className="text-2xl md:text-3xl uppercase tracking-widest mb-8">
          Let’s work together
        </h2>
        <p className="max-w-xl mx-auto text-sm text-white/70 mb-10">
          If you’re ready for a smarter, more considered approach to real
          estate, we’d love to talk.
        </p>
        <a
          href="/contact"
          className="inline-block border border-white px-14 py-4 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition"
        >
          Contact Us
        </a>
      </section>
    <TeamSection />
      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}

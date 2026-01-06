import { ArrowUpRight, ArrowUp } from "lucide-react";
import rmbLogo from "@/assets/rmb.png";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white px-10 pt-20 pb-10">
      
      {/* ================= TOP GRID ================= */}
      <div className="grid grid-cols-12 gap-10 items-start">
        
        {/* LEFT LOGO */}
        <div className="col-span-4">
          <img
            src={rmbLogo}
            alt="RMB Real Estate"
            className="h-14 w-auto object-contain"
          />
        </div>

        {/* CENTER CONTENT */}
        <div className="col-span-4 text-sm leading-relaxed max-w-sm">
          <p className="mb-6">
            We’re people first and professionals second – which means no
            polyester suits, bad toupees or smooth-talking real estate nonsense.
          </p>
          <p className="text-xs tracking-wide opacity-70">
            110/95 Hazel Glen Drive, Doreen.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 mt-8 text-lg">
            <a href="#" className="hover:opacity-70 transition">◎</a>
            <a href="#" className="hover:opacity-70 transition">f</a>
            <a href="#" className="hover:opacity-70 transition">in</a>
          </div>
        </div>

        {/* RIGHT NEWSLETTER */}
        <div className="col-span-4 flex justify-end">
          <div className="w-72">
            <div className="flex items-center justify-between border-b border-white/40 pb-2 text-sm">
              <span>Call for Inquiry</span>
              <ArrowUpRight size={16} />
            </div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-white/20 mt-16 pt-6 flex items-center justify-between text-xs">
        <p className="opacity-60">
          © Copyright 2025 RMB Real Estate. Design LBD STUDIOS.
        </p>

        {/* SCROLL TO TOP */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="hover:opacity-70 transition"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;

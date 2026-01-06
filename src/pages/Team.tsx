import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import TeamSection from '@/components/TeamSection';



export default function Team() {
  return (
    <div className="min-h-screen bg-black text-white font-light">

      {/* ================= HEADER ================= */}
      <Navbar />

      {/* ================= HERO ================= */}
  
   <TeamSection />
  

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}

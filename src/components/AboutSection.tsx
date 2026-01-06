import { motion } from "framer-motion";
import Logo from "./Logo";
import aboutVideo from "@/assets/hero-videos.mp4";

const AboutSection = () => {
  return (
    <section className="w-full bg-black py-32">

      {/* ================= VIDEO BLOCK ================= */}
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative w-full aspect-[16/9] overflow-hidden">

          {/* Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover blur-[2px]"
            src={aboutVideo}
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Center Logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Logo className="w-14 h-14 text-white opacity-90" />
          </div>

        </div>
      </motion.div>

      {/* ================= TEXT ================= */}
      <motion.div
        className="max-w-xl mx-auto mt-24 px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
      >
        <p className="text-[13px] leading-relaxed text-white/75 font-light">
          Marchetti Group do real estate differently. For one thing, we’re people
          first and professionals second — which means no polyester suits, bad
          toupees or smooth-talking real estate nonsense. We work for clients,
          rather than commissions. We value proper, long-term relationships.
          And we always deliver exceptional service. We use new tech.
          We grow through creativity.
        </p>
      </motion.div>

    </section>
  );
};

export default AboutSection;

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroVideo from "@/assets/hero-videos.mp4";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax ONLY (video never fades or stops)
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const words = ["No", "agents", "here.", "Just", "experts."];

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      
      {/* ================= BACKGROUND VIDEO ================= */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y, scale }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 z-10" />

        <video
          className="w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      </motion.div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-20 flex items-center justify-center h-full px-6">
        <h1 className="hero-heading text-center text-white drop-shadow-2xl">
          <span className="sr-only">No agents here. Just experts.</span>

          <span className="flex flex-wrap justify-center gap-x-4">
            {words.map((word, index) => (
              <motion.span key={index} className="overflow-hidden">
                <motion.span
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + index * 0.1,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </motion.span>
            ))}
          </span>
        </h1>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
        animate={{ opacity: [0, 1] }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-xs tracking-[0.2em] uppercase text-white/70">
          Scroll Down
        </span>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

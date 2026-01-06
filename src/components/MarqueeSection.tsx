import { motion } from 'framer-motion';

const MarqueeSection = () => {
  const text = 'Real estate done differently. ';
  const repeatedText = text.repeat(8);

  return (
    <section className="py-16 overflow-hidden border-y border-border/20">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, -2000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: 'linear',
          },
        }}
      >
        <span className="section-heading text-foreground/20 px-4">
          {repeatedText}
        </span>
        <span className="section-heading text-foreground/20 px-4">
          {repeatedText}
        </span>
      </motion.div>
    </section>
  );
};

export default MarqueeSection;

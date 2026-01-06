import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

const FeatureCard = ({ title, description, image, imageAlt, reverse = false }: FeatureCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <motion.div
      ref={containerRef}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-16 md:py-24 ${
        reverse ? 'lg:flex-row-reverse' : ''
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className={`space-y-6 ${reverse ? 'lg:order-2' : ''}`}
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
      >
        <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
          {title}
        </h3>
        <p className="body-text text-foreground/80">
          {description}
        </p>
      </motion.div>

      <motion.div
        className={`overflow-hidden aspect-[4/3] ${reverse ? 'lg:order-1' : ''}`}
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
      >
        <motion.img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
          style={{ y: imageY, scale: imageScale }}
        />
      </motion.div>
    </motion.div>
  );
};

export default FeatureCard;

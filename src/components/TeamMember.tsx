import { motion } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  phone: string;
  email: string;
  image: string;
  index: number;
}

const TeamMember = ({ name, phone, email, image, index }: TeamMemberProps) => {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.19, 1, 0.22, 1],
      }}
    >
      <div className="aspect-[3/4] overflow-hidden mb-6">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
        />
      </div>
      <h4 className="text-lg font-medium text-foreground mb-2">{name}</h4>
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <a
          href={`tel:${phone.replace(/\s/g, '')}`}
          className="hover:text-foreground transition-colors"
        >
          {phone}
        </a>
        <span>-</span>
        <a
          href={`mailto:${email}`}
          className="hover:text-foreground transition-colors"
        >
          Email
        </a>
      </div>
    </motion.div>
  );
};

export default TeamMember;

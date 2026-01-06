import FeatureCard from './FeatureCard';
import locationImg from '@/assets/location.jpg';
import horseImg from '@/assets/horses.jpg';
import interiorImg from '@/assets/interior.jpg';

const features = [
  {
    title: 'Home ground advantage',
    description:
      "Our patch is Doreen and the surrounding suburbs, from Woodstock and Whittlesea down to Hurstbridge and Wattle Glen. It goes without saying (but hey, we'll say it anyway): we know this area like the back of our hand.",
    image: locationImg,
    imageAlt: 'Aerial view of Australian countryside',
  },
  {
    title: 'Acres of experience',
    description:
      "Residential properties are our bread and butter, but we also specialise in premium acreages. Horses, stables, bright golden haze on the meadow - that sort of thing. Special properties require special skills.",
    image: horseImg,
    imageAlt: 'Horse in Australian countryside paddock',
  },
  {
    title: 'Polish and precision',
    description:
      "With Marchetti Group, you're getting a polished experience. Real estate with the five star treatment. We leverage new technology, digital marketing, and good, old-fashioned customer service.",
    image: interiorImg,
    imageAlt: 'Luxury modern home interior',
  },
];

const FeaturesSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight text-foreground">
            Real estate done differently.
          </h2>
        </div>

        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            {...feature}
            reverse={index % 2 !== 0}
          />
        ))}

      </div>
    </section>
  );
};

export default FeaturesSection;

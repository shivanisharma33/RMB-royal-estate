import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';


import FeaturesSection from '@/components/FeaturesSection';
import TeamSection from '@/components/TeamSection';

import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <Hero />
    

      <FeaturesSection />
      <TeamSection />
 
      <Footer />
    </main>
  );
};

export default Index;

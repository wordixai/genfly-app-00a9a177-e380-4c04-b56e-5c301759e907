import { SEOHead } from '@/components/SEOHead';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { ComicGenerator } from '@/components/ComicGenerator';
import { Gallery } from '@/components/Gallery';
import { Pricing } from '@/components/Pricing';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <>
      <SEOHead />
      <Header />
      <main>
        <Hero />
        <Features />
        <ComicGenerator />
        <Gallery />
        <Pricing />
      </main>
      <Footer />
    </>
  );
};

export default Index;
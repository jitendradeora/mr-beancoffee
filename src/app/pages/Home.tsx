import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Products } from '../components/Products';
import { About } from '../components/About';
import { Commitment } from '../components/Commitment';
import { ProductOverview } from '../components/ProductOverview';
import { CoffeeRegions } from '../components/CoffeeRegions';
import { FeaturedVarieties } from '../components/FeaturedVarieties';
import { Testimonials } from '../components/Testimonials';
import { CTA } from '../components/CTA';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Commitment />
        <ProductOverview />
        <Products />
        <CoffeeRegions />
        <FeaturedVarieties />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
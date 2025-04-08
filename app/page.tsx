import { HeroSection } from '@/components/landing-page/hero-section';
import { FeaturesSection } from '@/components/landing-page/features-section';
import { HowItWorksSection } from '@/components/landing-page/how-it-works-section';
import { CtaSection } from '@/components/landing-page/cta-section';
import { Footer } from '@/components/landing-page/footer';
import { Navbar } from '@/components/landing-page/navbar';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}



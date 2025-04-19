import HeroSection from "@/sections/heroSection";
import Services from "@/components/services";
import PotentialEarnings from "@/components/potentialEarnings";
import { Footer } from "@/sections/footer";
import Tape from "@/components/tape";
import AffiliatePanel from "@/components/affiliatePanel";
import { TestimonialsCarousel } from "@/components/testimonialsCarousel";
import Cta from "@/components/cta";
import FeatureSection from "@/sections/featuresSection";
import FAQSection from "@/components/faqSection";
import WhySection from "@/components/whySection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Tape />
      <FeatureSection />
      <PotentialEarnings />
      <AffiliatePanel />
      <TestimonialsCarousel />
      <WhySection />
      <Services />
      <FAQSection />
      <Cta />
      <Footer />
    </main>
  );
}

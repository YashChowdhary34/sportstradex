import FeaturesSection from "@/components/featuresSection";
import AffiliatePanel from "../components/affiliatePanel";
import Cta from "../components/cta";
import FAQ from "../components/faq";
import { Footer } from "../components/footer";
import HeroSection from "../components/heroSection";
import HowItWorks from "../components/howitworks";
import Navbar from "../components/navbar";
import OfferingSection from "../components/offeringSection";
import PotentialEarnings from "../components/potentialEarnings";
import Tape from "../components/tape";
import { TestimonialCarousel } from "../components/testimonialCarousel";
import TryCourse from "../components/tryCourse";
import WhyUs from "../components/whyUs";
import Infographics from "@/components/infographics";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
        <HeroSection />
      </header>
      <main>
        <Tape />
        <TryCourse />
        <OfferingSection />
        <PotentialEarnings />
        <AffiliatePanel />
        <HowItWorks />
        <TestimonialCarousel />
        <FeaturesSection />
        <WhyUs />
        <Infographics />
        <FAQ />
        <Cta />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

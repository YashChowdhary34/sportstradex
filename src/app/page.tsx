
import AffiliatePanel from "../components/landing-page/affiliatePanel";
import Cta from "../components/cta";
import FAQ from "../components/faq";
import { Footer } from "../components/footer";
import HeroSection from "../components/landing-page/heroSection";
import HowItWorks from "../components/landing-page/howitworks";
import Navbar from "../components/navbar";
import OfferingSection from "../components/landing-page/offeringSection";
import PotentialEarnings from "../components/landing-page/potentialEarnings";
import Tape from "../components/landing-page/tape";
import { TestimonialCarousel } from "../components/landing-page/testimonialCarousel";
import TryCourse from "../components/landing-page/tryCourse";
import WhyUs from "../components/landing-page/whyUs";
import Infographics from "@/components/landing-page/infographics";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
        <HeroSection />
      </header>
      <main>
        <Tape />
        <OfferingSection />
        <TryCourse />
        <PotentialEarnings />
        <AffiliatePanel />
        <HowItWorks />
        <TestimonialCarousel />
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

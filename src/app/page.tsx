import HeroSection from "@/components/heroSection";
import FeatureSection from "@/components/featureSection";
import PotentialEarnings from "@/components/potentialEarnings";
import { Footer } from "@/components/footer";
import Tape from "@/components/tape";
import AffiliatePanel from "@/components/affiliatePanel";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeatureSection />
      <PotentialEarnings />
      <Tape />
      <AffiliatePanel />
      <Footer />
    </main>
  );
}

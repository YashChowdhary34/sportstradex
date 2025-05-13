import PocketMoneyHero from "@/components/pocket-money/hero";
import HowItWorks from "@/components/pocket-money/how-it-works";
import EarningsOverview from "@/components/pocket-money/earnings-overview";
import WhyChooseUs from "@/components/pocket-money/why-choose-us";
import FAQ from "@/components/pocket-money/faq";
import CallToAction from "@/components/pocket-money/call-to-action";
import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar";
import DriveEarnings from "@/components/courses-page/driveEarnings";

export default function PocketMoneyPage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="pt-20">
        <PocketMoneyHero />
        <HowItWorks />
        <DriveEarnings />
        <EarningsOverview />
        <WhyChooseUs />
        <FAQ />
        <CallToAction />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

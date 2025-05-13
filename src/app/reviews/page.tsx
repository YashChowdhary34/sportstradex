import HeroSection from "@/app/reviews/heroSection";
import Navbar from "@/components/navbar";
import WelcomeSection from "./welcomeSection";
import LovedBySection from "./lovedbySection";
import { Footer } from "@/components/footer";
import FAQ from "@/components/faq";
import Cta from "@/components/cta";
import TestimonialSlideshow from "./testimonialSlideshow";
import DriveEarnings from "@/components/courses-page/driveEarnings";

export default function Reviews() {
  return (
    <>
      <header>
        <Navbar />
        <HeroSection />
      </header>
      <main>
        <TestimonialSlideshow />
        <WelcomeSection />
        <DriveEarnings />
        <LovedBySection />
        <FAQ />
        <Cta />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

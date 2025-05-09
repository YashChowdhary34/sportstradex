import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar";
import WhyOurCourse from "../../components/whyOurCourse";
import CoursesSection from "../../components/courses-page/coursesSection";
import FAQ from "@/components/faq";
import Cta from "@/components/cta";
import NoHiddenCharges from "../../components/courses-page/noHiddenCharges";
import DriveEarnings from "../../components/courses-page/driveEarnings";
import { StillNotSure } from "@/components/stillNotSure";
import Infographics from "@/components/landing-page/infographics";
import HeroSection from "@/components/courses-page/heroSection";

export default function Courses() {
  return (
    <>
      <header>
        <Navbar />
        <HeroSection />
      </header>
      <main>
        <CoursesSection />
        <NoHiddenCharges />
        <DriveEarnings />
        <WhyOurCourse />
        <StillNotSure />
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

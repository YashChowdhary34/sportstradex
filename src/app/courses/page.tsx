import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar";
import CoursesHeroSection from "./heroSection";
import WhyOurCourse from "../../components/whyOurCourse";
import CoursesSection from "./coursesSection";
import FAQ from "@/components/faq";
import Cta from "@/components/cta";
import NoHiddenCharges from "./noHiddenCharges";
import DriveEarnings from "./driveEarnings";
import { StillNotSure } from "@/components/stillNotSure";
import Infographics from "@/components/infographics";

export default function Courses() {
  return (
    <>
      <header>
        <Navbar />
        <CoursesHeroSection />
      </header>
      <main>
        <CoursesSection />
        <DriveEarnings />
        <NoHiddenCharges />

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

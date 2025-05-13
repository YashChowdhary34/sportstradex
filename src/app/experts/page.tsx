import CaseStudySection from "../../components/caseStudy";
import Cta from "../../components/cta";
import ExpertsSlideshow from "../../components/expertsSlideshow";
import ExpertTeamSection from "../../components/expertsTeam";
import ExploreSports from "../../components/exploreSports";
import FAQ from "../../components/faq";
import { Footer } from "../../components/footer";
import GrowTogetherSection from "../../components/growTogether";
import Navbar from "../../components/navbar";

export default function Experts() {
  return (
    <>
      <header>
        <Navbar />
        <ExpertTeamSection />
      </header>
      <main>
        <ExpertsSlideshow />
        <CaseStudySection />
        <GrowTogetherSection />
        <ExploreSports />
        <FAQ />
        <Cta />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

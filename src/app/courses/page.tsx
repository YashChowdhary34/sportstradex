import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar";
import CoursesHeroSection from "./heroSection";
import WhyOurCourse from "../../components/whyOurCourse";
import { TestimonialCarousel } from "@/components/testimonialCarousel";
import CoursesSection from "./coursesSection";
import FAQ from "@/components/faq";
import Cta from "@/components/cta";

export default function Courses() {
  return (
    <>
      <header>
        <Navbar />
        <CoursesHeroSection />
      </header>
      <main>
        <CoursesSection />
        <WhyOurCourse />
        <TestimonialCarousel />
        <FAQ />
        <Cta />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

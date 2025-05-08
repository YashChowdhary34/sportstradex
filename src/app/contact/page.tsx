import ContactForm from "../../components/contactForm";
import Cta from "../../components/cta";
import FAQ from "../../components/faq";
import { Footer } from "../../components/footer";
import Navbar from "../../components/navbar";

export default function Contact() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <ContactForm />
        <FAQ />
        <Cta />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

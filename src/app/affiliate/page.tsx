import AffiliatePanel from "@/components/affiliatePanel";
import Cta from "@/components/cta";
import FAQ from "@/components/faq";
import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar";
import AffiliatePage from "./affiliateSection";

export default function Affiliate() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <AffiliatePage/>
        <FAQ />
        <Cta />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

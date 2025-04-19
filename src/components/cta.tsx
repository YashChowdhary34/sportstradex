import Image from "next/image";
import { Button } from "@/components/ui/button";
import PlaceholderImage from "@/assets/images/hero-image.jpg";

export default function Cta() {
  return (
    <section className="py-10 bg-[#c8f65d]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <Image
              src={PlaceholderImage}
              alt="Mobile App Interface"
              width={400}
              height={500}
              className="mx-auto"
            />
          </div>

          <div className="md:w-1/2">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 text-black"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              BOOST YOUR EARNINGS WITH OUR FREE COURSE
            </h2>
            <p className="text-black mb-8">
              Quickly grow your performance. Supercharge your earnings with our
              free and easy course now.
            </p>

            <div className="flex gap-4">
              <Button className="bg-[#0a2a2f] text-white hover:bg-[#0a2a2f]/75 flex items-center gap-2">
                <span>Get Free</span>
              </Button>
              <Button className="bg-[#0a2a2f] text-white hover:bg-[#0a2a2f]/75 flex items-center gap-2">
                <span>Talk To Us</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

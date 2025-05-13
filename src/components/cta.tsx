import Image from "next/image";
import { Button } from "@/components/ui/button";
import Blueprint from "@/assets/images/footer (2).png";

export default function Cta() {
  return (
    <section className="py-10 bg-lighter">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <Image
              src={Blueprint}
              alt="Mobile App Interface"
              width={400}
              height={500}
              className="mx-auto"
            />
          </div>

          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-extrabold  mb-6 text-black font-manrope">
              ACCELERATE YOUR EARNINGS - LEARN FROM THE BEST
            </h2>
            <p className="text-black mb-8">
              Join our exclusive affiliate training program and discover how to
              turn your network into consistent income — the smart way.
            </p>

            <div className="flex gap-4">
              <Button className="bg-darkest text-white hover:bg-dark flex items-center gap-2">
                <span>Enroll for Free</span>
              </Button>
              <Button className="bg-darkest text-white hover:bg-dark flex items-center gap-2">
                <span>Chat with Us</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

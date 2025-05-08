import Image from "next/image";
import { Button } from "@/components/ui/button";
import Placeholder1 from "@/assets/images/profit_1.jpg";
import Placeholder2 from "@/assets/images/profit_2.jpg";

export default function CaseStudySection() {
  return (
    <section className="w-full bg-[#c8f65d]/75 py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          {/* Left side - Images */}
          <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full">
            <div className="absolute top-0 left-0 md:left-10 rotate-[-5deg] z-10 w-[80%] md:w-[85%] max-w-[350px]">
              <div className="relative w-full pt-[100%]">
                <Image
                  src={Placeholder1}
                  alt="Global Sports Trading Market statistics"
                  fill
                  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 33vw"
                  style={{ objectFit: "contain", objectPosition: "top left" }}
                  className="rounded-md shadow-lg"
                  priority
                />
              </div>
            </div>
            <div className="absolute top-[100px] sm:top-[120px] md:top-[160px] left-[40px] md:left-[60px] rotate-[5deg] z-20 w-[80%] md:w-[85%] max-w-[350px]">
              <div className="relative w-full pt-[100%]">
                <Image
                  src={Placeholder2}
                  alt="Sports Trading Career Growth statistics"
                  fill
                  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 33vw"
                  style={{ objectFit: "contain", objectPosition: "top left" }}
                  className="rounded-md shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              How the <span className="text-[#00c2b0]">Course</span> Drives
              Profits with Expert Insights
            </h2>

            <p className="text-gray-600 md:text-lg">
              We want everyone to get educated on the science of sports trading.
              They scored 1000%+ ROIs.
            </p>

            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-bold">1468%</p>
                <p className="text-sm text-gray-500">ROI</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-bold">8.59%</p>
                <p className="text-sm text-gray-500">Conversion Rate</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-bold">₹73,457</p>
                <p className="text-sm text-gray-500">Profits Generated</p>
              </div>
            </div>

            <Button
              variant="outline"
              className="rounded-full border-2 border-gray-300 px-8 py-4 h-auto font-medium hover:bg-gray-100 transition-colors"
            >
              READ REVIEWS
            </Button>

            <div className="pt-8 border-t border-gray-200 mt-8">
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex-shrink-0">
                  <Image
                    src="/placeholder.svg?height=40&width=80"
                    alt="Obvi logo"
                    width={80}
                    height={40}
                    className="opacity-100"
                  />
                  <div className="h-1 w-full bg-[#00c2b0] mt-2 rounded-full"></div>
                </div>
                <Image
                  src="/placeholder.svg?height=40&width=100"
                  alt="Bulletproof logo"
                  width={100}
                  height={40}
                  className="opacity-50"
                />
                <Image
                  src="/placeholder.svg?height=40&width=80"
                  alt="Brand logo"
                  width={80}
                  height={40}
                  className="opacity-50"
                />
                <Image
                  src="/placeholder.svg?height=40&width=100"
                  alt="Orbit baby logo"
                  width={100}
                  height={40}
                  className="opacity-50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

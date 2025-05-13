import { Check } from "lucide-react";
import AffiliateImage from "@/assets/images/agent-dashboard.png";
import Image from "next/image";

export default function AffiliatePanel() {
  return (
    <section className="py-10 bg-dark text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col space-x-5 md:flex-row">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 font-manrope">
              GET ACCESS TO OUR AFFILIATE PANEL
            </h2>
            <p className="text-gray-400 mb-8">
              Turn Your Network Into Daily Income! Unlock a smart earning
              opportunity with the SportsTradex Affiliate Program — where your
              influence turns into real income. Whether you&apos;re a content
              creator, student, or community leader — you can now earn
              consistently from sports trading enthusiasts you refer!
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-zinc-800 p-2 rounded-full">
                  <Check className="h-5 w-5 text-lime-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-manrope">
                    No Investment, No Risk
                  </h3>
                  <p className="text-gray-400">
                    Start promoting instantly with zero upfront cost.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-zinc-800 p-2 rounded-full">
                  <Check className="h-5 w-5 text-lime-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-manrope mb-2">
                    Smart Dashboard
                  </h3>
                  <p className="text-gray-400">
                    Track clicks, signups, client activity, and your earnings in
                    real time.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-zinc-800 p-2 rounded-full">
                  <Check className="h-5 w-5 text-lime-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-manrope mb-2">
                    Weekly Payouts
                  </h3>
                  <p className="text-gray-400">
                    Withdraw your income every week with full transparency.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-zinc-800 p-2 rounded-full">
                  <Check className="h-5 w-5 text-lime-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-manrope mb-2">
                    Your Network, Your Business
                  </h3>
                  <p className="text-gray-400">
                    Refer directly or build a team of sub-affiliates and earn a
                    10% override on their performance too!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Affiliate Panel Card */}
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="relative">
              {/* <div className="bg-lime-400 p-6 rounded-xl shadow-xl max-w-md">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-black text-sm">Money Transfer</p>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gray-800"></div>
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  </div>
                </div>
                <div className="bg-lime-300 p-3 rounded-lg mb-4">
                  <p className="text-black text-sm">Balance</p>
                  <p className="text-black text-3xl font-bold">$3,200.00</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">
                    US
                  </div>
                  <div className="h-0.5 flex-1 bg-gray-700 relative mx-2 dotted-line">
                    <div className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-red-500"></div>
                  </div>
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
                    CA
                  </div>
                </div>
              </div> */}
              <Image
                src={AffiliateImage}
                alt="Affiliate Panel"
                className="rounded-lg shadow-lg border-2 border-lime-400"
              />
              <div className="absolute -bottom-4 -right-4 w-4 h-4 rounded-full bg-green-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

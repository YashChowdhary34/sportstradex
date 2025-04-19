import { Check } from "lucide-react";

export default function AffiliatePanel() {
  return (
    <section className="py-16 bg-[#0a2a2f] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              GET ACCESS TO OUR AFFILIATE PANEL
            </h2>
            <p className="text-gray-400 mb-8">
              Integrating advanced technologies, SportsTradeX reshapes the
              online passive money making landscape, our earning panel is more
              user-friendly and adaptive to modern needs.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-zinc-800 p-2 rounded-full">
                  <Check className="h-5 w-5 text-lime-400" />
                </div>
                <div>
                  <h3
                    className="text-xl font-medium mb-2"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    Access 24/7 Customer Support
                  </h3>
                  <p className="text-gray-400">
                    Our assistance anytime with our dedicated support team ready
                    to help with any issues or questions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-zinc-800 p-2 rounded-full">
                  <Check className="h-5 w-5 text-lime-400" />
                </div>
                <div>
                  <h3
                    className="text-xl font-medium mb-2"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    Track Transactions in Real-Time
                  </h3>
                  <p className="text-gray-400">
                    Monitor the status of your transactions with instant updates
                    and notifications.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Affiliate Panel Card */}
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="relative">
              <div className="bg-lime-400 p-6 rounded-xl shadow-xl max-w-md">
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
              </div>

              <div className="absolute -bottom-4 -right-4 w-4 h-4 rounded-full bg-green-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

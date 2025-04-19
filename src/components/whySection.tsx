export default function WhySection() {
  return (
    <section className="w-full py-10 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-2">
            Why choose us?
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            It <span className="text-teal-500 font-serif italic">works</span>{" "}
            like crazy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Stat */}
          <div className="text-center">
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-3">
              18X
            </h3>
            <p className="text-gray-600 text-sm md:text-base max-w-[250px] mx-auto">
              Higher return rate than without our course
            </p>
          </div>

          {/* Middle Chart - Side by side bars */}
          <div className="text-center">
            <div className="flex justify-center items-end gap-4 mb-4">
              <div className="flex flex-col items-center">
                <div className="w-[120px] h-[120px] bg-lime-400 rounded-lg flex items-center justify-center mb-2 border border-black">
                  <p className="text-white font-bold text-2xl">90%</p>
                </div>
                <p className="text-sm text-gray-600">With us</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-[80px] h-[35px] bg-[#ff6633] border border-black rounded-lg flex items-center justify-center mb-2">
                  <p className="text-gray-700 font-bold text-xl">5%</p>
                </div>
                <p className="text-sm text-gray-600">Without us</p>
              </div>
            </div>

            <p className="text-gray-600 text-sm md:text-base">
              Get higher return rates with our course
            </p>
          </div>

          {/* Right Stat */}
          <div className="text-center">
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-3">
              7 Days
            </h3>
            <p className="text-gray-600 text-sm md:text-base max-w-[250px] mx-auto">
              Average time to get your first payout
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

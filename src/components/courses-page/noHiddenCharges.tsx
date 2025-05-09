import Image from "next/image";
import { CreditCard, Trophy, CheckCircle, Globe } from "lucide-react";
import Placeholder from "@/assets/images/hidden_charges_mockup.png";

export default function NoHiddenCharges() {
  return (
    <section className="bg-white text-black py-16 px-6 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-light text-sm md:text-base mb-2 animate-fadeIn">
            400,000 STUDENTS & COUNTING
          </p>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-2 animate-slideUp font-manrope">
            No hidden fees. No prior checks.
          </h2>
          <p className="text-xl md:text-2xl animate-slideUp animation-delay-200 font-medium font-manrope">
            No more barriers to earning passive income.
          </p>
        </div>

        {/* Main content with phone and features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
          {/* Left features - visible on larger screens */}
          <div className="hidden md:flex flex-col justify-center space-y-24">
            <div className="max-w-xs animate-fadeInLeft animation-delay-300">
              <div className="flex items-start mb-3">
                <CreditCard className="h-8 w-8 text-light mr-2 flex-shrink-0" />
              </div>
              <h3 className="text-lg font-bold font-manrope mb-2">
                Get the free course and an account in 5 minutes.
              </h3>
              <p className="text-gray-400 text-sm">
                No credit history, credit check, or minimum deposit required.
              </p>
            </div>

            <div className="max-w-xs animate-fadeInLeft animation-delay-500">
              <div className="flex items-start mb-3">
                <Trophy className="h-8 w-8 text-light mr-2 flex-shrink-0" />
              </div>
              <h3 className="text-lg font-bold font-manrope mb-2">
                The only premium course for building income.
              </h3>
              <p className="text-gray-400 text-sm">
                2% unlimited cash back on your favorite brands, 2X first year
                cash back, unique premium benefits and more!
              </p>
            </div>
          </div>

          {/* Center - Phone */}
          <div className="flex justify-center items-center md:col-span-1">
            <div className="relative w-64 md:w-80 h-auto animate-float">
              <Image
                src={Placeholder}
                width={100}
                height={1200}
                alt="Banking app interface showing account balance and features"
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Right features - visible on larger screens */}
          <div className="hidden md:flex flex-col justify-center space-y-24">
            <div className="max-w-xs animate-fadeInRight animation-delay-300">
              <div className="flex items-start mb-3">
                <CheckCircle className="h-8 w-8 text-light mr-2 flex-shrink-0" />
              </div>
              <h3 className="text-lg font-bold font-manrope mb-2">
                Build your U.S. credit
              </h3>
              <p className="text-gray-400 text-sm">
                We believe in forming positive habits. Build your U.S. credit
                with Sable.
              </p>
            </div>

            <div className="max-w-xs animate-fadeInRight animation-delay-500">
              <div className="flex items-start mb-3">
                <Globe className="h-8 w-8 text-light mr-2 flex-shrink-0" />
              </div>
              <h3 className="text-lg font-bold font-manrope mb-2">
                Bank like a global citizen with Sable.
              </h3>
              <p className="text-gray-400 text-sm">
                Start building credit before you even enter the country.
                Non-U.S. citizens can apply with their passport or visa.
              </p>
            </div>
          </div>

          {/* Mobile features - visible only on small screens */}
          <div className="grid grid-cols-1 gap-8 md:hidden">
            <div className="animate-fadeInUp animation-delay-300">
              <div className="flex items-start mb-3">
                <CreditCard className="h-8 w-8 text-light mr-2 flex-shrink-0" />
              </div>
              <h3 className="text-lg font-bold font-manrope mb-2">
                Get a secured credit card and bank account in 5 minutes.
              </h3>
              <p className="text-gray-400 text-sm">
                No credit history, credit check, or minimum deposit required.
              </p>
            </div>

            <div className="animate-fadeInUp animation-delay-400">
              <div className="flex items-start mb-3">
                <Trophy className="h-8 w-8 text-light mr-2 flex-shrink-0" />
              </div>
              <h3 className="text-lg font-bold font-manrope mb-2">
                The only premium card for building credit.
              </h3>
              <p className="text-gray-400 text-sm">
                2% unlimited cash back on your favorite brands, 2X first year
                cash back back, unique premium benefits and more!
              </p>
            </div>

            <div className="animate-fadeInUp animation-delay-500">
              <div className="flex items-start mb-3">
                <CheckCircle className="h-8 w-8 text-light mr-2 flex-shrink-0" />
              </div>
              <h3 className="text-lg font-bold font-manrope mb-2">
                Build your U.S. credit
              </h3>
              <p className="text-gray-400 text-sm">
                We believe in forming positive habits. Build your U.S. credit
                with Sable.
              </p>
            </div>

            <div className="animate-fadeInUp animation-delay-600">
              <div className="flex items-start mb-3">
                <Globe className="h-8 w-8 text-light mr-2 flex-shrink-0" />
              </div>
              <h3 className="text-lg font-bold font-manrope mb-2">
                Bank like a global citizen with Sable.
              </h3>
              <p className="text-gray-400 text-sm">
                Start building credit before you even enter the country.
                Non-U.S. citizens can apply with their passport or visa.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        {/* <div className="mt-16 md:mt-24">
          <div className="h-px bg-gray-800 w-full"></div>
        </div> */}
      </div>
    </section>
  );
}

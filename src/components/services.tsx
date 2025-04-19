"use client";

import { GraduationCap, Wallet, Handshake } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const featureItems = document.querySelectorAll(".feature-item");
    featureItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      featureItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div
      className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
      ref={sectionRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-8">
        {/* Credit Card Section */}
        <div className="feature-item flex flex-col items-center text-center md:border-r md:border-gray-200 md:pr-8 opacity-0 transition-all duration-700 translate-y-8">
          <div className="bg-teal-700 rounded-full p-4 mb-6 transform transition-transform duration-500 hover:scale-110">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Courses
          </h2>
          <p className="text-gray-600">
            Comprehensive modules, practical lessons, and expert-guided content
            to master the science of sports trading.
          </p>
        </div>

        {/* Management Section */}
        <div className="feature-item flex flex-col items-center text-center border-t border-gray-200 pt-8 md:border-t-0 md:pt-0 md:border-r md:border-gray-200 md:px-4 opacity-0 transition-all duration-700 delay-200 translate-y-8">
          <div className="bg-green-600 rounded-full p-4 mb-6 transform transition-transform duration-500 hover:scale-110">
            <Wallet className="h-6 w-6 text-white" />
          </div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Pocket Money
          </h2>
          <p className="text-gray-600">
            Our partner program offers students to be a part and earn passively
            while putting our word out.
          </p>
        </div>

        {/* Application Section */}
        <div className="feature-item flex flex-col items-center text-center border-t border-gray-200 pt-8 md:border-t-0 md:pt-0 md:pl-8 opacity-0 transition-all duration-700 delay-400 translate-y-8">
          <div className="bg-gray-700 rounded-full p-4 mb-6 transform transition-transform duration-500 hover:scale-110">
            <Handshake className="h-6 w-6 text-white" />
          </div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Affiliate
          </h2>
          <p className="text-gray-600">
            Become a partner and generate weekly income passively through our
            affiliate program.
          </p>
        </div>
      </div>
    </div>
  );
}

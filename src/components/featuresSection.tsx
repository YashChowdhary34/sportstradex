"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PhoneImage from "@/assets/images/phone-mockup.png";

export default function FeatureSection() {
  const [activeTab, setActiveTab] = useState<keyof typeof content>("courses");

  const tabs: { id: "courses" | "pocketmoney" | "affiliate"; label: string }[] =
    [
      { id: "courses", label: "Courses" },
      { id: "pocketmoney", label: "Pocket Money" },
      { id: "affiliate", label: "Affiliate" },
    ];

  const content = {
    courses: {
      title: "Try our Courses",
      description:
        "Learn the secrets of successful sports trading with our expert-led courses. Gain the skills and knowledge you need to excel in the industry.",
      image: "/placeholder.svg?height=600&width=300",
    },
    pocketmoney: {
      title: "Earn With Us",
      description:
        "Turn your passion for sports into a profitable side hustle. Join our platform and start earning money while enjoying the game.",
      image: "/placeholder.svg?height=600&width=300",
    },
    affiliate: {
      title: "Become an Agent",
      description:
        "Join our affiliate program and earn commissions by referring new users to our platform. Share the love for sports trading and get rewarded.",
      image: "/placeholder.svg?height=600&width=300",
    },
  };

  return (
    <section className="w-full py-10 px-4 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full bg-teal-800 p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#c8f65d] text-black"
                    : "hover:bg-[#c8f65d] text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-8 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center md:text-left"
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {content[activeTab].title}
              </h2>
              <p className="text-gray-700 mb-6 max-w-lg mx-auto md:mx-0">
                {content[activeTab].description}
              </p>

              <div className="flex justify-center md:justify-start space-x-2">
                <button
                  className="w-8 h-8 rounded-full bg-[#004d40] text-white flex items-center justify-center hover:bg-[#00695c] transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  className="w-8 h-8 rounded-full bg-[#004d40] text-white flex items-center justify-center hover:bg-[#00695c] transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="relative mt-8 md:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="relative mx-auto max-w-[300px]"
              >
                <div className="relative">
                  {/* Phone frame */}
                  <div className="relative z-10 mx-auto">
                    <Image
                      src={PhoneImage}
                      alt="Phone mockup"
                      width={300}
                      height={600}
                      className="relative z-10"
                    />
                  </div>

                  {/* Decorative element */}
                  {/* {activeTab === "courses" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      className="absolute top-0 right-0 z-20 transform -translate-y-4 translate-x-4"
                    >
                      <div className="bg-[#ff8a65] rounded-full p-3 w-16 h-16 flex items-center justify-center">
                        <div className="relative w-full h-full">
                          <div className="absolute inset-0 bg-[#ffd54f] rounded-full transform translate-x-1 -translate-y-1"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-2xl">🍕</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )} */}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CoursesMockup from "@/assets/mockups/courses-mockup.png";
import AffiliateMockup from "@/assets/mockups/affiliate-mockup.png";
import PocketMoneyMockup from "@/assets/mockups/pocketmoney-mockup.png";

export default function OfferingSection() {
  const [activeTab, setActiveTab] = useState<keyof typeof content>("courses");

  const tabs = useMemo(
    () =>
      [
        { id: "courses", label: "Courses" },
        { id: "pocketmoney", label: "Pocket Money" },
        { id: "affiliate", label: "Affiliate" },
      ] as const,
    []
  );

  const content = {
    courses: {
      title: "Try our Courses",
      description:
        "Get expert-led training designed for Indian sports enthusiasts that cover everything from the basics to advanced strategies. Learn at your own pace and become a pro.",
      image: CoursesMockup,
    },
    pocketmoney: {
      title: "Earn With Us",
      description:
        "Earn ₹150 instantly just by sharing! Post our ready-made promotional content on your social media and get paid, no investment just sharing. It's that simple!",
      image: PocketMoneyMockup,
    },
    affiliate: {
      title: "Become an Agent",
      description:
        "Earn 10% commission on every sale! Help your friends and family discover our courses and earn money while doing it. Get access to our dashboard, easy payouts and unlimited earnings. It's a win-win!",
      image: AffiliateMockup,
    },
  };

  // Function to handle next/previous tab navigation
  const navigateTab = useCallback(
    (direction: "next" | "prev") => {
      const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
      const tabsCount = tabs.length;

      if (direction === "next") {
        const nextIndex = (currentIndex + 1) % tabsCount;
        setActiveTab(tabs[nextIndex].id);
      } else {
        const prevIndex = (currentIndex - 1 + tabsCount) % tabsCount;
        setActiveTab(tabs[prevIndex].id);
      }
    },
    [activeTab, tabs]
  );

  // Setup interval for auto-rotation
  useEffect(() => {
    // Create interval that rotates the tabs every 5 seconds
    const rotationInterval = setInterval(() => {
      navigateTab("next");
    }, 5000);

    // Clear interval on component unmount or when activeTab changes
    return () => clearInterval(rotationInterval);
  }, [activeTab, navigateTab]);

  return (
    <section className="w-full pt-4 pb-0 px-4 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full bg-dark p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 text-sm font-bold rounded-full transition-all duration-300 font-manrope ${
                  activeTab === tab.id
                    ? "bg-lighter text-dark"
                    : "hover:bg-lighter hover:text-dark text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content with fixed height */}
        <div className="flex flex-col gap-8 items-center">
          {/* Text Content with fixed height */}
          <div className="h-40 md:h-40 flex items-start justify-center relative w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20, position: "absolute" }}
                animate={{ opacity: 1, y: 0, position: "absolute" }}
                exit={{ opacity: 0, y: -20, position: "absolute" }}
                transition={{ duration: 0.3 }}
                className="text-center md:text-left w-full"
              >
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 font-manrope">
                  {content[activeTab].title}
                </h2>
                <p className="text-gray-700 mb-6 max-w-lg mx-auto md:mx-0">
                  {content[activeTab].description}
                </p>

                <div className="flex justify-center md:justify-start space-x-2">
                  <button
                    className="w-8 h-8 rounded-full bg-dark text-white flex items-center justify-center hover:bg-light transition-colors"
                    aria-label="Previous"
                    onClick={() => navigateTab("prev")}
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    className="w-8 h-8 rounded-full bg-dark text-white flex items-center justify-center hover:bg-light transition-colors"
                    aria-label="Next"
                    onClick={() => navigateTab("next")}
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image Content with fixed height */}
          <div className="h-[600px] relative w-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 50, position: "absolute" }}
                animate={{ opacity: 1, x: 0, position: "absolute" }}
                exit={{ opacity: 0, x: -50, position: "absolute" }}
                transition={{ duration: 0.4 }}
                className="relative mx-auto"
                style={{ width: "300px", height: "600px" }}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={content[activeTab].image}
                    alt={`${activeTab} mockup`}
                    width={300}
                    height={600}
                    className="relative z-10 object-contain max-h-full"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

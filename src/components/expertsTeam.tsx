"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface StatItem {
  id: number;
  value: string;
  description: string;
  highlight?: boolean;
}

export default function ExpertTeamSection() {
  const [activeStatIndex, setActiveStatIndex] = useState(1); // Start with the second item (0.3%) as active
  const [autoRotate, setAutoRotate] = useState(true);

  const stats: StatItem[] = [
    {
      id: 0,
      value: "~₹37 lakh",
      description: "cumulative trading volume to date",
    },
    {
      id: 1,
      value: "0.3%",
      description: "of the global sport trading volume",
      highlight: true,
    },
    {
      id: 2,
      value: "~30",
      description: "Expert Teammates (& growing)",
    },
    {
      id: 3,
      value: "25+",
      description: "leading global and local exchanges",
    },
    {
      id: 4,
      value: "2017",
      description: "start, trading-natives",
    },
    {
      id: 5,
      value: "1,200+",
      description: "trading-asset pairs",
    },
    {
      id: 6,
      value: "24/7",
      description: "liquidity",
    },
    {
      id: 7,
      value: "12 million+",
      description: "trades done to date",
    },
  ];

  // Auto-rotate active stat every 3 seconds
  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      setActiveStatIndex((prevIndex) => (prevIndex + 1) % stats.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [autoRotate, stats.length]);

  // Pause auto-rotation for 10 seconds when user clicks a stat
  const handleStatClick = (index: number) => {
    setActiveStatIndex(index);
    setAutoRotate(false);

    // Resume auto-rotation after 10 seconds
    setTimeout(() => {
      setAutoRotate(true);
    }, 10000);
  };

  return (
    <section className="w-full py-16 md:py-20 bg-[#0a2a2f] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Our <span className="text-[#c8f65d]">Experts</span> Team
          </h2>
          <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-300 leading-relaxed">
            At SportsTradex we handpick our experts from the best trading teams
            in the world. We are a team of traders, developers, and data
            scientists with a passion for sports and trading.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-700 rounded-lg overflow-hidden shadow-xl relative">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className={`relative cursor-pointer p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center text-center min-h-[160px] md:min-h-[180px] ${
                index === activeStatIndex
                  ? "bg-[#0a0a0a]"
                  : "bg-[#0a0a0a] hover:bg-[#111]"
              }`}
              onClick={() => handleStatClick(index)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <AnimatePresence mode="wait">
                {index === activeStatIndex && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#c8f65d]/20 to-[#c8f65d]/20 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <motion.h3
                  className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-2 ${
                    index === activeStatIndex ? "text-[#c8f65d]" : "text-white"
                  }`}
                >
                  {stat.value}
                </motion.h3>
                <motion.p className="text-xs md:text-sm text-gray-400">
                  {stat.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Animated Badge */}
        <motion.div
          className="mt-8 mx-auto w-max bg-[#0a0a0a] text-white px-4 py-2 rounded-full border border-[#c8f65d]/30 shadow-lg hidden md:flex items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="h-3 w-3 bg-[#c8f65d] rounded-full pulse-animation"></span>
          <span className="text-sm font-medium">
            Our experts are available 24/7 for consultations
          </span>
        </motion.div>
      </div>

      {/* Curved Bottom Edge */}
      <div className="absolute bottom-0 left-0 w-full h-12 md:h-16 lg:h-24 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,90.7C672,107,768,117,864,112C960,107,1056,85,1152,74.7C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

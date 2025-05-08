"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import HeroImage from "@/assets/images/hero-vertical.png";
import NSEAcademyLogo from "@/assets/logo/others/nse-academy-logo.png";
import FinologyLogo from "@/assets/logo/others/finology-logo.png";
import TradingviewLogo from "@/assets/logo/others/tradingview-logo.png";

export default function HeroSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Function to handle resize and redraw grid
    const handleResize = () => {
      if (gridRef.current) {
        const width = gridRef.current.offsetWidth;
        const height = gridRef.current.offsetHeight;

        setDimensions({ width, height });
      }
    };

    // Initial setup
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Create grid lines effect when dimensions change
    if (gridRef.current && dimensions.width > 0 && dimensions.height > 0) {
      // Clear previous grid
      while (gridRef.current.firstChild) {
        gridRef.current.removeChild(gridRef.current.firstChild);
      }

      // Create vertical lines
      for (let i = 0; i < dimensions.width; i += 70) {
        const line = document.createElement("div");
        line.className = "absolute top-0 bottom-0 w-px bg-white/7 grid-line";
        line.style.left = `${i}px`;
        gridRef.current.appendChild(line);
      }

      // Create horizontal lines
      for (let i = 0; i < dimensions.height; i += 70) {
        const line = document.createElement("div");
        line.className = "absolute left-0 right-0 h-px bg-white/7 grid-line";
        line.style.top = `${i}px`;
        gridRef.current.appendChild(line);
      }
    }
  }, [dimensions]);

  return (
    <div className="relative min-w-full bg-dark">
      <section className="relative pt-20 md:pt-32 pb-20 px-4 container mx-auto overflow-hidden">
        {/* Grid Background */}
        <div
          ref={gridRef}
          className="absolute inset-0 pointer-events-none z-0"
        ></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center relative z-10">
          {/* Left Column - Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold text-white font-manrope"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-lighter">Master</span> The Science Of
              <br />
              Sports Trading
            </motion.h1>

            <motion.p
              className="text-white/80 text-lg max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Join India&apos;s first structured, skill-based sports trading
              course from industry level experts.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/account"
                className="bg-lighter text-[#0a2a2f] font-medium px-6 py-3 rounded-full hover:bg-lighter/75 transition-colors duration-300 btn-hover-effect"
              >
                Claim Now
              </Link>
              <Link
                href="/tutorial"
                className="flex items-center gap-2 bg-[#0a2a2f] text-white px-6 py-3 rounded-full border border-white/20 hover:bg-lighter/25 transition-colors duration-300 btn-hover-effect"
              >
                <div className="bg-white rounded-full p-1">
                  <Play size={12} className="text-[#0a2a2f] ml-0.5" />
                </div>
                Watch Tutorial
              </Link>
            </motion.div>

            <motion.div
              className="pt-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-white/60 text-sm mb-4">TRUSTED BY THE BEST</p>
              <div className="flex flex-wrap items-center gap-8">
                <motion.div
                  className="text-white font-semibold"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Image
                    src={FinologyLogo}
                    alt="FinologyLogo"
                    className="h-8 w-auto"
                  />
                </motion.div>
                <motion.div
                  className="text-white font-semibold"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Image
                    src={NSEAcademyLogo}
                    alt="NSEAcademyLogo"
                    className="h-10 w-auto"
                  />
                </motion.div>
                <motion.div
                  className="text-white font-semibold"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Image
                    src={TradingviewLogo}
                    alt="TradingviewLogo"
                    className="h-10 w-auto"
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image and Stats */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative h-[450px] md:h-[500px] lg:h-[550px] w-full">
              {/* Main Image */}
              <motion.div
                className="absolute inset-0"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <div className="relative h-full w-full rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm">
                  <Image
                    src={HeroImage}
                    alt="Person using SportsTradeX"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </motion.div>

              {/* Rating Card - Repositioned */}
              <motion.div
                className="absolute top-4 left-4 md:left-8 bg-[#e8f9f5] p-4 rounded-xl shadow-lg w-40 float-animation z-10"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                style={{ animationDelay: "0.5s" }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold">4.7</span>
                  <span className="text-yellow-400 text-2xl">★</span>
                </div>
                <p className="text-sm text-gray-700 mt-1">
                  4.6K+ Positive
                  <br />
                  Feedback
                </p>
              </motion.div>

              {/* Users Card - Repositioned */}
              <motion.div
                className="absolute top-4 right-4 md:right-8 bg-[#4ce1b6] p-4 rounded-xl shadow-lg w-40 float-animation z-10"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                style={{ animationDelay: "1s" }}
              >
                <div className="flex flex-col">
                  <span className="text-lighter text-3xl font-bold">80K</span>
                  <span className="text-white text-sm">New Users</span>
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-lighter">↑</span>
                    <span className="text-white text-xs">+14.6%</span>
                  </div>
                </div>
              </motion.div>

              {/* Chart Element - Repositioned */}
              <motion.div
                className="absolute bottom-20 right-4 md:right-12 bg-white p-3 rounded-xl shadow-lg float-animation z-10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{
                  rotate: [0, -1, 1, -1, 0],
                  transition: { duration: 0.5 },
                }}
                style={{ animationDelay: "1.5s" }}
              >
                <div className="w-16 h-16 relative">
                  <div className="w-full h-full flex items-end">
                    <div className="h-3 w-2 bg-blue-400 mx-0.5"></div>
                    <div className="h-5 w-2 bg-blue-400 mx-0.5"></div>
                    <div className="h-4 w-2 bg-blue-400 mx-0.5"></div>
                    <div className="h-8 w-2 bg-blue-400 mx-0.5"></div>
                    <div className="h-6 w-2 bg-blue-400 mx-0.5"></div>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0,50 Q25,20 50,40 T100,30"
                        fill="none"
                        stroke="#4ce1b6"
                        strokeWidth="3"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Curved Bottom Edge */}
      <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 lg:h-32 overflow-hidden">
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
    </div>
  );
}

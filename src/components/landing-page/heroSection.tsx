"use client";

import Image from "next/image";
import Link from "next/link";
import { ChartNoAxesCombined  } from "lucide-react";
import { motion } from "framer-motion";
import HeroImage from "@/assets/herosection/heroImage.png" ;
import NSEAcademyLogo from "@/assets/logo/others/nse-academy-logo.png";
import FinologyLogo from "@/assets/logo/others/finology-logo.png";
import TradingviewLogo from "@/assets/logo/others/tradingview-logo.png";

export default function HeroSection() {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  // Background gradient animation
  const gradientAnimation = {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "linear",
    },
  };

  // Subtle card hover animation
  const cardHoverAnimation = {
    scale: 1.03,
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
    transition: { duration: 0.3, ease: "easeOut" },
  };

  return (
    <div className="relative min-w-full bg-darkest overflow-hidden">
      {/* Animated Background Element */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-30"
        animate={gradientAnimation}
        style={{
          background:
            "linear-gradient(45deg, #0a2a2f 0%, #228B22 50%, #0a2a2f 100%)",
          backgroundSize: "200% 200%",
          filter: "blur(120px)",
          zIndex: 0,
        }}
      />

      <section className="relative pt-20 md:pt-24 pb-20 px-4 container mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center relative z-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Left Column - Text Content */}
          <motion.div className="space-y-8">
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold text-white font-manrope"
              variants={itemVariants}
            >
              <motion.span
                className="inline-block"
                animate={{
                  color: ["#228B22", "#ADFF2F", "#228B22"],
                  textShadow: [
                    "0 0 5px rgba(76, 225, 182, 0)",
                    "0 0 15px rgba(76, 225, 182, 0.5)",
                    "0 0 5px rgba(76, 225, 182, 0)",
                  ],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Master
              </motion.span>{" "}
              The Science Of
              <br />
              Sports Trading
            </motion.h1>

            <motion.p
              className="text-white/80 text-lg max-w-md"
              variants={itemVariants}
            >
              Join India&apos;s first structured, skill-based sports trading
              course from industry level experts.
            </motion.p>

            <motion.div
              className="flex items-center gap-4"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  href="/account"
                  className="inline-block bg-lighter text-darker font-medium px-6 py-3 rounded-full hover:bg-lighter/75 transition-colors duration-300 btn-hover-effect"
                >
                  Free Course
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  href="/tutorial"
                  className="inline-flex items-center gap-2 bg-[#0a2a2f] text-white px-6 py-3 rounded-full border border-white/20 hover:bg-lighter/25 transition-colors duration-300 btn-hover-effect"
                >
                  <motion.div
                    className="bg-white rounded-full p-1"
                    animate={{ rotate: [0, 0, 10, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 5,
                    }}
                  >
                    <ChartNoAxesCombined 
                      size={15}
                      className="text-[#0a2a2f] ml-0.5"
                    />
                  </motion.div>
                  Start Trading
                </Link>
              </motion.div>
            </motion.div>

            <motion.div className="pt-0" variants={itemVariants}>
              <p className="text-white/60 text-sm mb-4 tracking-wide">
                TRUSTED BY THE BEST
              </p>
              <motion.div
                className="flex flex-wrap items-center gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <motion.div
                  className="text-white font-semibold"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                    delay: 0.9,
                    duration: 0.5,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Image
                    src={FinologyLogo}
                    alt="FinologyLogo"
                    className="h-8 w-auto"
                  />
                </motion.div>
                <motion.div
                  className="text-white font-semibold"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                    delay: 1.0,
                    duration: 0.5,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Image
                    src={NSEAcademyLogo}
                    alt="NSEAcademyLogo"
                    className="h-10 w-auto"
                  />
                </motion.div>
                <motion.div
                  className="text-white font-semibold"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                    delay: 1.1,
                    duration: 0.5,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Image
                    src={TradingviewLogo}
                    alt="TradingviewLogo"
                    className="h-10 w-auto"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image and Stats */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative h-[450px] md:h-[500px] lg:h-[550px] w-full">
              {/* Main Image */}
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
              >
                <motion.div
                  className="relative h-full w-full rounded-xl overflow-hidden"
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                >
                  <Image
                    src={HeroImage}
                    alt="Person using SportsTradeX"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center"
                    priority
                  />

                  {/* Semi-transparent overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-darkest/40 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </motion.div>
              </motion.div>

              {/* Rating Card - Updated with subtle animations */}
              {/* <motion.div
                className="absolute top-4 left-4 md:left-8 bg-[#e8f9f5] p-4 rounded-xl shadow-lg w-40 z-10"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={cardHoverAnimation}
                transition={{ duration: 0.4, delay: 0.9 }}
              >
                <div className="flex items-center gap-2">
                  <motion.span
                    className="text-3xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                  >
                    4.7
                  </motion.span>
                  <motion.span
                    className="text-yellow-400 text-2xl"
                    animate={{
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    ★
                  </motion.span>
                </div>
                <motion.p
                  className="text-sm text-gray-700 mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                >
                  4.6K+ Positive
                  <br />
                  Feedback
                </motion.p>
              </motion.div> */}

              {/* Users Card - Updated with subtle animations */}
              {/* <motion.div
                className="absolute bottom-10 right-4 md:right-8 bg-[#4ce1b6] p-4 rounded-xl shadow-lg w-40 z-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={cardHoverAnimation}
                transition={{ duration: 0.4, delay: 1.1 }}
              >
                <div className="flex flex-col">
                  <motion.span
                    className="text-lighter text-3xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                  >
                    80K
                  </motion.span>
                  <motion.span
                    className="text-white text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                  >
                    New Users
                  </motion.span>
                  <motion.div
                    className="flex items-center gap-1 mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6, duration: 0.5 }}
                  >
                    <motion.span
                      className="text-lighter"
                      animate={{
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      ↑
                    </motion.span>
                    <span className="text-white text-xs">+14.6%</span>
                  </motion.div>
                </div>
              </motion.div> */}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Curved Bottom Edge */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-16 md:h-24 lg:h-32 overflow-hidden -mb-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        style={{ zIndex: 5 }}
      >
        <svg
          className="absolute bottom-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <motion.path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,90.7C672,107,768,117,864,112C960,107,1056,85,1152,74.7C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          ></motion.path>
        </svg>
      </motion.div>
    </div>
  );
}

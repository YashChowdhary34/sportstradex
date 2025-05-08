"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { TrendingUp, Clock, Award } from "lucide-react";

export default function WhyUs() {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const barWithUsVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: 140,
      opacity: 1,
      transition: {
        height: { duration: 1.2, ease: "easeOut" },
        opacity: { duration: 0.4 },
      },
    },
  };

  const barWithoutUsVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: 35,
      opacity: 1,
      transition: {
        height: { duration: 0.6, ease: "easeOut", delay: 0.4 },
        opacity: { duration: 0.4, delay: 0.4 },
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="w-full py-10 bg-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-lime-200 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-teal-200 opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-10">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4 font-manrope"
            variants={titleVariants}
            initial="hidden"
            animate={controls}
          >
            Why choose us?
          </motion.h2>

          <motion.p
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800  font-manrope"
            variants={titleVariants}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.2 }}
          >
            It{" "}
            <motion.span
              className="text-teal-500 font-serif italic"
              animate={{
                scale: [1, 1.1, 1],
                color: ["#0d9488", "#14b8a6", "#0d9488"],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              works
            </motion.span>{" "}
            like crazy.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Return Rate Card */}
          <motion.div
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            variants={statVariants}
            custom={0}
            initial="hidden"
            animate={controls}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-lime-100 rounded-bl-full opacity-70 -mr-8 -mt-8 group-hover:bg-lime-200 transition-colors duration-300"></div>

            <div className="mb-6 relative">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-teal-50 border border-teal-100 text-teal-600 mb-4">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Superior Results
              </h3>
              <div className="h-1 w-10 bg-lime-400 rounded-full mb-3"></div>
            </div>

            <div className="mb-6">
              <div className="flex items-end justify-start gap-1">
                <span className="text-5xl font-bold text-gray-800">18</span>
                <span className="text-3xl font-bold text-teal-500 mb-1">X</span>
              </div>
              <p className="text-gray-600 mt-2">
                Higher return rate compared to industry standards
              </p>
            </div>

            <div className="mt-auto">
              <div className="flex items-center text-sm text-teal-600">
                <span className="font-medium">Learn our strategy</span>
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Comparison Chart Card */}
          <motion.div
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            variants={statVariants}
            custom={1}
            initial="hidden"
            animate={controls}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-teal-100 rounded-bl-full opacity-70 -mr-8 -mt-8 group-hover:bg-teal-200 transition-colors duration-300"></div>

            <div className="mb-6 relative">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-lime-50 border border-lime-100 text-lime-600 mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Success Rate
              </h3>
              <div className="h-1 w-10 bg-teal-400 rounded-full mb-3"></div>
            </div>

            <div className="flex justify-center items-end gap-6 h-[160px] mb-4">
              <div className="flex flex-col items-center">
                <motion.div
                  className="relative w-24 bg-gradient-to-t from-lime-600 to-lime-400 rounded-lg flex items-center justify-center mb-3 shadow-md overflow-hidden"
                  style={{ height: 140 }}
                  variants={barWithUsVariants}
                  initial="hidden"
                  animate={controls}
                >
                  <motion.div
                    className="absolute inset-0 bg-white opacity-20"
                    animate={{
                      y: ["-100%", "100%"],
                      opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "linear",
                    }}
                  />
                  <p className="text-white font-bold text-2xl drop-shadow-md relative z-10">
                    90%
                  </p>
                </motion.div>
                <p className="text-sm font-medium text-gray-700">With us</p>
              </div>

              <div className="flex flex-col items-center">
                <motion.div
                  className="relative w-16 bg-gradient-to-t from-orange-600 to-orange-400 rounded-lg flex items-center justify-center mb-3 shadow-md overflow-hidden"
                  style={{ height: 35 }}
                  variants={barWithoutUsVariants}
                  initial="hidden"
                  animate={controls}
                >
                  <p className="text-white font-bold text-lg drop-shadow-md relative z-10">
                    5%
                  </p>
                </motion.div>
                <p className="text-sm font-medium text-gray-700">Without us</p>
              </div>
            </div>

            <p className="text-gray-600 text-sm">
              Our students consistently achieve a 90% success rate compared to
              the industry average of only 5%
            </p>
          </motion.div>

          {/* Payout Time Card */}
          <motion.div
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            variants={statVariants}
            custom={2}
            initial="hidden"
            animate={controls}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-bl-full opacity-70 -mr-8 -mt-8 group-hover:bg-blue-200 transition-colors duration-300"></div>

            <div className="mb-6 relative">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 border border-blue-100 text-blue-600 mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Rapid Results
              </h3>
              <div className="h-1 w-10 bg-blue-400 rounded-full mb-3"></div>
            </div>

            <div className="mb-6">
              <div className="flex items-center">
                <span className="text-5xl font-bold text-gray-800">7</span>
                <span className="text-2xl font-bold text-teal-500 ml-2">
                  Days
                </span>
              </div>
              <p className="text-gray-600 mt-2">
                Average time to receive your first payout after starting
              </p>
            </div>

            <div className="mt-6">
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-lime-400 to-teal-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "70%" }}
                  transition={{ delay: 2.5, duration: 1 }}
                ></motion.div>
              </div>
              <div className="flex justify-between mt-1 text-xs text-gray-500">
                <span>Day 1</span>
                <span>Day 7</span>
                <span>Day 14</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.8 }}
        >
          <button className="px-10 py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-medium rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
            <div className="flex items-center justify-center">
              <span className="mr-2">Start your journey today</span>
              <div className="w-6 h-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

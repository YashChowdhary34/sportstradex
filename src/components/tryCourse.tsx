"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, useInView, useAnimation } from "framer-motion";
import bookletMockup from "@/assets/images/booklet-mockup.png";

export default function TryCourse() {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100, rotate: -5 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 3,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  };

  // Button variants with pulse effect
  const buttonVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.025, 1],
      transition: {
        scale: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        },
      },
    },
    hover: {
      scale: 1.05,
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  const floatAnimation = {
    hidden: { y: 0 },
    visible: {
      y: [-8, 8, -8],
      transition: {
        repeat: Infinity,
        duration: 4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="text-white overflow-hidden relative"
      style={{
        background:
          "linear-gradient(135deg, #0a2a2f 0%, #0a2a2f 50%, #c8f65d 100%)",
      }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white opacity-5"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        {/* <motion.div
          className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-white opacity-5"
          animate={{
            scale: [1, 1.1, 1],
            y: [0, -20, 0],
            transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
        /> */}
      </div>

      <div className="container px-4 py-10 mx-auto md:py-24 lg:py-28 relative z-10 ">
        <motion.div
          className="grid items-center gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="space-y-6 ">
            <motion.h1
              className="text-4xl font-extrabold md:text-5xl lg:text-6xl font-manrope"
              variants={itemVariants}
            >
              Try Our Course 100% <br />
              <motion.span
                className="inline-block"
                animate={{
                  color: ["#ffffff", "#c8f65d", "#ffffff"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Risk-Free
              </motion.span>
            </motion.h1>

            <motion.p className="text-xs md:text-xl" variants={itemVariants}>
              No contracts. No commitments. Guaranteed results.
              <span className="text-sm">*</span>
            </motion.p>

            <motion.div
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
              variants={itemVariants}
            >
              {/* Fixed: Wrap button in a div with inline-block to contain the pulsating effect */}
              <div className="inline-block">
                <motion.div
                  className="relative inline-block"
                  variants={buttonVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button
                    className="bg-white text-black hover:bg-gray-100 rounded-md px-6 py-4 text-base font-semibold relative z-10"
                    size="lg"
                  >
                    Get Started
                  </Button>
                  {/* Separate pulsating effect layer */}
                  <motion.span
                    className="absolute inset-0 rounded-md"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(255, 255, 255, 0.7)",
                        "0 0 0 10px rgba(255, 255, 255, 0)",
                        "0 0 0 0 rgba(255, 255, 255, 0)",
                      ],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </div>

              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="flex">
                  {/* 4 Full yellow stars with staggered animation */}
                  {[...Array(4)].map((_, i) => (
                    <motion.svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#FFD700"
                      stroke="#FFD700"
                      className="w-5 h-5"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 + i * 0.1, duration: 0.3 }}
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </motion.svg>
                  ))}
                  {/* Partial star (70% filled) with animation */}
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3, duration: 0.3 }}
                  >
                    <defs>
                      <linearGradient id="partialFill">
                        <stop offset="70%" stopColor="#FFD700" />
                        <stop offset="70%" stopColor="white" />
                      </linearGradient>
                    </defs>
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                      fill="url(#partialFill)"
                      stroke="#FFD700"
                    />
                  </motion.svg>
                </div>
                <motion.span
                  className="text-sm font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                >
                  4.7 Rating (800+ Reviews)
                </motion.span>
              </motion.div>
            </motion.div>

            <motion.p className="text-xs opacity-50" variants={itemVariants}>
              * for serious learners with verified ₹5 Lakh+ annual income.
            </motion.p>
          </div>

          <div className="flex justify-center md:justify-end">
            <motion.div
              className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px]"
              variants={imageVariants}
              animate={controls}
            >
              <motion.div
                variants={floatAnimation}
                animate="visible"
                className="transform rotate-3"
              >
                <Image
                  src={bookletMockup}
                  placeholder="blur"
                  alt="Image of course looking like a book"
                  width={420}
                  height={420}
                  className="object-contain drop-shadow-xl"
                  priority
                />

                {/* Decorative elements around the image */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0, rotate: -45 }}
                  animate={{ opacity: 0.9, scale: 1, rotate: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <span className="text-black text-xs font-bold">FREE!</span>
                </motion.div>

                <motion.div
                  className="absolute -bottom-2 -left-2 w-20 h-20 bg-[#c8f65d] rounded-full flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.9, scale: 1 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                >
                  <span className="text-black text-xs font-bold text-center">
                    LIMITED
                    <br />
                    TIME
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

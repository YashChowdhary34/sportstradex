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
      scale: [1, 1.02, 1],
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
      boxShadow: "0 10px 25px -5px rgba(76, 225, 182, 0.4)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  const floatAnimation = {
    hidden: { y: 0 },
    visible: {
      y: [-5, 5, -5],
      transition: {
        repeat: Infinity,
        duration: 4,
        ease: "easeInOut",
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

  return (
    <section
      ref={sectionRef}
      className="text-white overflow-hidden relative bg-darkest"
    >
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

      <div className="container px-4 py-16 mx-auto md:py-24 lg:py-28 relative z-10">
        <motion.div
          className="grid items-center gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="space-y-6">
            <motion.h1
              className="text-4xl font-extrabold md:text-5xl lg:text-6xl font-manrope"
              variants={itemVariants}
            >
              Try Our Course 100% <br />
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
                Risk-Free
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-white/80 text-lg max-w-md"
              variants={itemVariants}
            >
              No contracts. No commitments. Guaranteed results.
              <span className="text-sm align-super ml-1">*</span>
            </motion.p>

            <motion.div
              className="flex items-center gap-4 flex-wrap"
              variants={itemVariants}
            >
              {/* Themed button with pulsating effect */}
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
                    className="bg-lighter text-darkest font-medium px-8 py-6 rounded-full hover:bg-lighter/90 transition-colors duration-300 text-base"
                    size="lg"
                  >
                    Get Started
                  </Button>
                  {/* Pulsating effect layer */}
                  <motion.span
                    className="absolute inset-0 rounded-full"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(76, 225, 182, 0.7)",
                        "0 0 0 10px rgba(76, 225, 182, 0)",
                        "0 0 0 0 rgba(76, 225, 182, 0)",
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
                  {/* 4 Full stars with staggered animation */}
                  {[...Array(4)].map((_, i) => (
                    <motion.svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#4ce1b6"
                      stroke="#4ce1b6"
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
                        <stop offset="70%" stopColor="#4ce1b6" />
                        <stop offset="70%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                      fill="url(#partialFill)"
                      stroke="#4ce1b6"
                    />
                  </motion.svg>
                </div>
                <motion.span
                  className="text-sm font-medium text-white/90"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                >
                  4.7 Rating (800+ Reviews)
                </motion.span>
              </motion.div>
            </motion.div>

            <motion.p className="text-white/50 text-xs" variants={itemVariants}>
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
                <div className="relative rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm">
                  <Image
                    src={bookletMockup}
                    placeholder="blur"
                    alt="Image of course looking like a book"
                    width={420}
                    height={420}
                    className="object-contain drop-shadow-xl"
                    priority
                  />
                </div>

                {/* Decorative elements around the image */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg"
                  initial={{ opacity: 0, scale: 0, rotate: -45 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                  }}
                >
                  <span className="text-darkest text-xs font-bold">FREE!</span>
                </motion.div>

                <motion.div
                  className="absolute -bottom-2 -left-2 w-20 h-20 bg-[#4ce1b6] rounded-full flex items-center justify-center shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                  }}
                >
                  <span className="text-darker text-xs font-bold text-center">
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

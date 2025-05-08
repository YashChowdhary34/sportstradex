"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Play } from "lucide-react";
import { useRef } from "react";

export default function CoursesHeroSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const { scrollYProgress } = useScroll();
  const headerY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  return (
    <>
      <section className="relative p-28 px-4 container overflow-hidden bg-[#0a2a2f] min-w-full">
        {/* Grid Background */}
        <div
          ref={gridRef}
          className="absolute inset-0 pointer-events-none z-0"
        ></div>

        <motion.div
          ref={headerRef}
          style={{ y: headerY }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6 font-manrope"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-[#c8f65d]">Transform</span> Your Sports
            Knowledge Into{" "}
            <span className="text-[#c8f65d]">Profitable Skills</span>
          </motion.h1>

          <motion.p
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Our structured courses teach you the exact strategies to analyze
            odds, identify value, and make data-driven decisions that lead to
            consistent profits in sports trading.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="#courses"
              className="bg-[#c8f65d] text-[#0a2a2f] font-medium px-6 py-3 rounded-full hover:bg-[#c8f65d]/90 transition-colors duration-300"
            >
              Explore Courses
            </Link>
            <Link
              href="#testimonials"
              className="flex items-center gap-2 bg-transparent text-white px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="bg-white rounded-full p-1">
                <Play size={12} className="text-[#0a2a2f] ml-0.5" />
              </div>
              Student Success Stories
            </Link>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-[#c8f65d] font-bold text-3xl">10K+</div>
              <div className="text-white/80 text-sm">Students</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-[#c8f65d] font-bold text-3xl">4.8</div>
              <div className="text-white/80 text-sm">Average Rating</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-[#c8f65d] font-bold text-3xl">3+</div>
              <div className="text-white/80 text-sm">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-[#c8f65d] font-bold text-3xl">85%</div>
              <div className="text-white/80 text-sm">Success Rate</div>
            </div>
          </motion.div>
        </motion.div>
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
      </section>
    </>
  );
}

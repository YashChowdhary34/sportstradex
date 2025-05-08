"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function WelcomeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Transform values for the scroll animation
  const topRowX = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const bottomRowX = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden py-10 md:py-20 lg:py-28 bg-white"
    >
      <div className="container mx-auto px-4 text-center mb-12 md:mb-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 font-manrope">
          Experience
          <br />
          Welcome
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          A webinar platform designed for traders to host jaw-dropping
          experiences that drive revenue.
        </p>
        <button className="bg-lime-500 hover:bg-lime-500/75 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
          Request a demo
        </button>
      </div>

      <div className="relative w-full">
        {/* Top row - moves left on scroll */}
        <motion.div
          style={{ x: topRowX }}
          className="flex gap-4 md:gap-6 mb-4 md:mb-6 px-4 w-[200%]"
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={`top-${item}`}
              className="relative w-[300px] md:w-[400px] lg:w-[500px] aspect-[2/1] rounded-2xl overflow-hidden flex-shrink-0"
            >
              <Image
                src={`/placeholder.svg?height=250&width=500&text=Webinar${item}`}
                alt={`Chats screenshot ${item}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 300px, (max-width: 1200px) 400px, 500px"
              />
            </div>
          ))}
        </motion.div>

        {/* Bottom row - moves right on scroll */}
        <motion.div
          style={{ x: bottomRowX }}
          className="flex gap-4 md:gap-6 px-4 w-[200%] -translate-x-1/4"
        >
          {[7, 8, 9, 10, 11, 12].map((item) => (
            <div
              key={`bottom-${item}`}
              className="relative w-[300px] md:w-[400px] lg:w-[500px] aspect-[2/1] rounded-2xl overflow-hidden flex-shrink-0"
            >
              <Image
                src={`/placeholder.svg?height=250&width=500&text=Webinar${item}`}
                alt={`Chats screenshot ${item}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 300px, (max-width: 1200px) 400px, 500px"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

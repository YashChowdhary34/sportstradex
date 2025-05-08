"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

export default function GrowTogetherSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section
      ref={ref}
      className="w-full max-w-7xl mx-auto px-0 py-12 md:py-20 overflow-visible bg-white"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 lg:gap-0 relative px-4 md:px-0">
        {/* Left Image */}
        <motion.div
          className="w-full md:w-[35%] relative md:-ml-4 lg:-ml-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.7, ease: "easeOut" },
            },
          }}
        >
          <div className="rounded-3xl overflow-hidden border-2 border-blue-600 shadow-lg transform -rotate-2">
            <Image
              src="/placeholder.svg?height=500&width=400"
              alt="Person writing and working"
              width={400}
              height={500}
              className="w-full h-auto object-cover aspect-[4/5]"
            />
          </div>
        </motion.div>

        {/* Center Content */}
        <motion.div
          className="w-full md:w-[30%] text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, delay: 0.1, ease: "easeOut" },
            },
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight leading-tight">
            Make you grow,
            <br />
            together<span className="text-gray-400">.</span>
          </h2>

          <p className="text-gray-600 mb-6 text-base leading-relaxed">
            Vous avez beaucoup à nous apprendre sur votre marché et votre offre.
          </p>

          <p className="font-bold mb-1 text-base">
            Des infos précieuses qui méritent toute notre attention
          </p>

          <p className="text-gray-600 mb-8 text-base leading-relaxed">
            : parce qu'une solution digitale, ça se construit ensemble. C'est
            pour cela qu'un projet ne démarre jamais sans un vrai kick-off et
            que nous avons développés des méthodologies de{" "}
            <span className="font-bold">co-construction</span>. Vous impliquer
            dans chaque étape du projet, c'est vous en donner une maîtrise.
          </p>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10"
          >
            <a
              href="#contact"
              className="inline-block px-12 py-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 text-white font-medium transition-all duration-300 hover:shadow-lg"
            >
              nous contacter
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full md:w-[35%] relative md:-mr-4 lg:-mr-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.7, ease: "easeOut" },
            },
          }}
        >
          <div className="rounded-3xl overflow-hidden border-2 border-pink-600 shadow-lg transform rotate-2">
            <Image
              src="/placeholder.svg?height=500&width=400"
              alt="Person working on laptop"
              width={400}
              height={500}
              className="w-full h-auto object-cover aspect-[4/5]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

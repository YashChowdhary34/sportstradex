"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import StepOne from "@/assets/images/howitworks_1.png";
import StepTwo from "@/assets/images/howitworks_2.png";
import StepThree from "@/assets/images/howitworks_3.png";

export default function HowItWorks() {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const steps = [
    {
      number: 1,
      title: "Sign Up",
      heading: "Create",
      description:
        "Create your free affiliate account in seconds and unlock your personal dashboard to start tracking clicks, signups, and income — all in one place. No investment needed.",
      image: StepOne,
      alt: "Free Blueprint Course - Learn Sports Trading from Zero",
      aspectRatio: "16/7",
      bgGradient: "from-teal-700 to-teal-400",
    },
    {
      number: 2,
      title: "Share & Promote",
      heading: "Engage",
      description:
        "Get your unique referral link and start promoting it via WhatsApp, Instagram, Telegram, YouTube, or personal contacts. Use our promo kit, custom creatives, and link generator to boost engagement.",
      image: StepTwo,
      alt: "Pocket Money Program - Earn by sharing content",
      aspectRatio: "16/7",
      bgGradient: "from-yellow-400 to-red-500",
    },
    {
      number: 3,
      title: "Earn & Grow",
      heading: "Analyze",
      description:
        "Earn commissions for every successful referral and user activity. Track your growth in real time, and withdraw your earnings weekly. Build your own sub-affiliate team and earn extra 10% from their success too.",
      image: StepThree,
      alt: "SportsTradex Affiliate Program - Lifetime Commission Dashboard",
      aspectRatio: "16/7",
      bgGradient: "from-purple-800 to-purple-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 bg-white" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12 md:mb-16"
        >
          <motion.div variants={itemVariants} className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-extrabold text-black mb-4 font-manrope">
              How it works
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Manage your experience from start to finish, from integrations to
              registration and from interactive stage elements to post-event
              data, it&apos;s all here.
            </p>
            <button className="bg-lime-500 hover:bg-lime-500/75 text-white font-medium py-2 px-6 rounded-full transition-all">
              Learn more
            </button>
          </motion.div>
        </motion.div>

        {/* Steps section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-20"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="grid md:grid-cols-12 gap-8 md:gap-12 items-center"
            >
              {/* Step Info */}
              <div className="md:col-span-4 flex flex-col justify-center space-y-4">
                <p className="text-sm font-medium text-gray-500 mb-1">
                  Step {step.number}
                </p>
                <div className="flex items-center mb-2">
                  <h3 className="text-3xl md:text-4xl font-bold font-manrope">
                    {step.heading}
                  </h3>
                  <ArrowUpRight className="h-6 w-6 ml-2" />
                </div>
                <p className="text-base text-gray-700">{step.description}</p>
              </div>

              {/* Step Image */}
              <div className="md:col-span-8">
                <div
                  className={`rounded-3xl overflow-hidden bg-gradient-to-r ${step.bgGradient} shadow-lg`}
                >
                  <div
                    className="relative w-full"
                    style={{ aspectRatio: step.aspectRatio }}
                  >
                    <Image
                      src={step.image || "/placeholder.svg"}
                      alt={step.alt}
                      fill
                      className="object-cover p-4"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 75vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

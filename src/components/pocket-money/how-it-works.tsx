"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ClipboardCheck, Share2, CreditCard } from "lucide-react";

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const steps = [
    {
      icon: <ClipboardCheck className="h-8 w-8 text-[#0a2a2f]" />,
      title: "Sign Up & Access Your Promo Dashboard",
      description:
        'Click "Join Now" to instantly access your Pocket Money Offer Page. You\'ll find 3 content-based tasks — each worth ₹50.',
      details:
        "Click on Offer 1 to receive your personalized banner, short video, and sharing instructions.",
      number: "1",
    },
    {
      icon: <Share2 className="h-8 w-8 text-[#0a2a2f]" />,
      title: "Post Banners & Videos On Social Media",
      description:
        "Upload the provided visuals to Instagram (Post or Story), Facebook (Feed or Story), or WhatsApp (Status).",
      details:
        "Follow the caption and hashtag format. After posting, submit your live post links using our simple form.",
      number: "2",
    },
    {
      icon: <CreditCard className="h-8 w-8 text-[#0a2a2f]" />,
      title: "Get Reviewed & Paid",
      description: "Our team will review your posts within 7 days.",
      details:
        "If your post is active, correctly shared, and eligible — you unlock ₹50. Complete the other tasks any time within 7 days. For each approved post, you'll receive ₹50 credited via UPI.",
      number: "3",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#0a2a2f] font-manrope">
            💼 How It Works – Just 3 Steps To Earn
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            No investment. No referrals. No risks. Just real rewards for real
            action.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={itemVariants}
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 h-full relative z-10 hover:shadow-xl transition-shadow duration-300">
                <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-[#c8f65d] flex items-center justify-center font-bold text-xl text-[#0a2a2f]">
                  {step.number}
                </div>

                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#c8f65d]/20 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 text-center text-[#0a2a2f]">
                  ✅ STEP {step.number}: {step.title}
                </h3>

                <p className="text-gray-700 mb-4 text-center">
                  {step.description}
                </p>

                <p className="text-gray-600 text-sm text-center">
                  {step.details}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 0L40 20L20 40L0 20L20 0Z" fill="#c8f65d" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

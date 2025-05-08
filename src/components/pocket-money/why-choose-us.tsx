"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Zap, Users, CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const reasons = [
    {
      icon: <Shield className="h-6 w-6 text-[#c8f65d]" />,
      title: "Safe & Reliable",
      points: [
        "No app downloads or installation required",
        "No product selling or subscriptions",
        "No referral chain or networking needed",
        "Works even if you have zero followers",
        "Posts use verified, platform-friendly content",
        "Every post is reviewed for fairness and quality",
      ],
    },
    {
      icon: <Zap className="h-6 w-6 text-[#c8f65d]" />,
      title: "Why Are We Offering This?",
      description:
        "Instead of spending heavily on digital ads, we'd rather reward real people for promoting our platform. This initiative helps us grow while giving you a zero-cost opportunity to earn and learn. It's a win-win for smart users like you.",
    },
    {
      icon: <Users className="h-6 w-6 text-[#c8f65d]" />,
      title: "Terms & Conditions (Simplified)",
      points: [
        "Posts must remain public and follow guidelines for at least 7 days",
        "Deleted or hidden posts will not qualify",
        "All UPI payments are processed within 7 working days",
        "Only one Pocket Money account per user",
        "Fake activity or spamming leads to immediate disqualification",
      ],
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
            🌟 Why Choose Our Pocket Money Program?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We&lsquo;ve designed this program to be simple, transparent, and
            beneficial for everyone involved.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 h-full hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-[#0a2a2f] flex items-center justify-center mr-4">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0a2a2f]">
                  {reason.title}
                </h3>
              </div>

              {reason.description && (
                <p className="text-gray-700 mb-4">{reason.description}</p>
              )}

              {reason.points && (
                <ul className="space-y-3">
                  {reason.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#c8f65d] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "When do I receive the money?",
      answer:
        "Each ₹50 task is reviewed and paid within 7 days after approval.",
    },
    {
      question: "Can I complete all 3 offers at once?",
      answer: "Yes — though we recommend spacing them out for better reach.",
    },
    {
      question: "Is this trustworthy and secure?",
      answer:
        "Absolutely. This is a structured awareness program built around verified social tasks — not sales or schemes.",
    },
    {
      question: "What if I forget to submit the form?",
      answer:
        "Your reward will only be processed if you submit your post links for review.",
    },
    {
      question: "Do I need to have many followers?",
      answer:
        "Not at all! This program works even if you have zero followers. We're focused on the quality of your posts, not your follower count.",
    },
    {
      question: "Can I participate from anywhere in India?",
      answer:
        "Yes, the program is open to participants from all across India. As long as you have access to social media platforms and a UPI ID, you can participate.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-[#f9f9f9]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#0a2a2f] font-manrope">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about our Pocket Money Program
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className={cn(
                  "flex items-center justify-between w-full text-left p-5 rounded-xl transition-all duration-200",
                  openIndex === index
                    ? "bg-[#0a2a2f] text-white shadow-lg"
                    : "bg-white hover:bg-gray-50 text-[#0a2a2f] shadow-md"
                )}
              >
                <span className="font-bold text-lg">Q. {faq.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 transition-transform duration-200",
                    openIndex === index
                      ? "transform rotate-180 text-[#c8f65d]"
                      : ""
                  )}
                />
              </button>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 rounded-b-xl bg-white shadow-md",
                  openIndex === index ? "max-h-40 mt-1 p-5" : "max-h-0"
                )}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

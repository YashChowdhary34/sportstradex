"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Define the slide content type
type SlideContent = {
  id: number;
  title: string;
  boldText: string;
  description: string;
  category: string;
  categoryDescription: string;
  links: string[];
};

export default function ExpertsSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slide content data
  const slides: SlideContent[] = [
    {
      id: 1,
      title: "Learn from our expert",
      boldText: "Data Science Specialist for Match Reading",
      description:
        "Master the analytical frameworks used by professional traders to decode live match data and identify high-probability patterns before they become obvious.",
      category: "DATA EXPERT",
      categoryDescription:
        "Our data science expert brings years of experience in cricket analytics, teaching you how to transform raw match statistics into actionable trading insights through our Module 4: Data Science of Match Reading.",
      links: ["DATA FRAMEWORKS", "PATTERN RECOGNITION", "STATISTICAL MODELS"],
    },
    {
      id: 2,
      title: "Train with our expert",
      boldText: "Risk Management & Trading Systems Architect",
      description:
        "Learn proven risk-free trading systems that protect your resources while maximizing return potential across different match scenarios.",
      category: "RISK SPECIALIST",
      categoryDescription:
        "With expertise in both sports and financial markets, our risk specialist teaches the principles behind Module 6: Risk-Free Trading Systems and the exclusive ₹500 → ₹50,000 Map bonus guide.",
      links: ["RISK MANAGEMENT", "CAPITAL PROTECTION", "SCALING STRATEGIES"],
    },
    {
      id: 3,
      title: "Build your brand with our",
      boldText: "Sports Analyst Career Development Coach",
      description:
        "Transform your analytical skills into a recognized brand with guidance from our expert who has helped launch over 50 successful sports consultants in India.",
      category: "CAREER EXPERT",
      categoryDescription:
        "Learn how to position yourself as an authority in the sports trading space through our Module 8: Build Your Analysis Brand and Module 9: The Referral + Growth Model.",
      links: ["PERSONAL BRANDING", "CLIENT ACQUISITION", "CONTENT STRATEGY"],
    },
    {
      id: 4,
      title: "Master the tools with our",
      boldText: "Technical Systems & Trading Tools Engineer",
      description:
        "Get hands-on training with proprietary tools like GameFlow Analyzer and SmartPitch Tool from the developer who built them specifically for the Indian cricket market.",
      category: "TOOLS EXPERT",
      categoryDescription:
        "Our technical expert breaks down complex trading tools into simple, actionable processes in Module 10: Tools of the Trade and provides exclusive access to our Auto Spreadsheet Trackers.",
      links: [
        "TOOL MASTERY",
        "DASHBOARD CUSTOMIZATION",
        "AUTOMATION TECHNIQUES",
      ],
    },
    {
      id: 5,
      title: "Scale your business with our",
      boldText: "Affiliate & Consultant Program Director",
      description:
        "Learn how to build and manage a network of clients while earning passive income through our industry-leading 10% commission structure.",
      category: "BUSINESS EXPERT",
      categoryDescription:
        "With experience in scaling sports consulting businesses from side-hustle to full-time income, our business expert leads the Consultant Toolkit and Low-Risk Career Framework bonus guides.",
      links: [
        "CLIENT MANAGEMENT",
        "COMMISSION OPTIMIZATION",
        "SCALING TECHNIQUES",
      ],
    },
  ];

  // Auto-rotate slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-2">
          <p className="text-sm uppercase tracking-wider flex items-center justify-center gap-2">
            <ArrowRight className="h-4 w-4" />
            EXPERTS
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-800 max-w-3xl mx-auto">
              {slides[currentSlide].title}{" "}
              <span className="font-bold">{slides[currentSlide].boldText}</span>
            </h2>
          </motion.div>
        </AnimatePresence>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${currentSlide}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="relative h-[350px] md:h-[400px] w-full overflow-hidden rounded-md"
            >
              <Image
                src={`/placeholder.svg?height=400&width=600`}
                alt={slides[currentSlide].category}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-col space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentSlide}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="flex items-center">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  <h3 className="text-xl font-bold uppercase">
                    {slides[currentSlide].category}
                  </h3>
                </div>

                <p className="text-gray-600">
                  {slides[currentSlide].categoryDescription}
                </p>

                <Link
                  href="#"
                  className="inline-block bg-black text-white px-6 py-3 rounded-full text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors"
                >
                  Learn More
                </Link>

                <div className="pt-6 space-y-3">
                  {slides[currentSlide].links.map((link, index) => (
                    <div
                      key={index}
                      className="uppercase text-gray-700 font-medium hover:text-black cursor-pointer transition-colors"
                    >
                      {link}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === index ? "w-8 bg-black" : "w-2 bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

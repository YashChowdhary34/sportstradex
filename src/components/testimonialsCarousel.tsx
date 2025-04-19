"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  Pause,
  Play,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialHeadshot from "@/assets/images/testimonals-headshot.jpg";

// Testimonial data type
type Testimonial = {
  id: number;
  name: string;
  role: string;
  location: string;
  image: string;
  content: string;
  rating: number;
  course: string;
};

// Sample testimonials with Indian names and contexts
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Small Business Owner",
    location: "Mumbai",
    image: TestimonialHeadshot.src,
    content:
      "The financial education courses completely transformed how I manage my business finances. I've implemented the strategies I learned and seen a 32% increase in profitability within just 6 months. The instructors explained complex concepts in simple terms.",
    rating: 5,
    course: "Business Finance Mastery",
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Software Engineer",
    location: "Bangalore",
    image: TestimonialHeadshot.src,
    content:
      "As someone working in tech, I always focused on my career but neglected financial planning. This course changed everything! I now have a solid investment strategy and have already started building a diverse portfolio. The mobile app makes tracking progress so convenient.",
    rating: 5,
    course: "Investment Fundamentals",
  },
  {
    id: 3,
    name: "Vikram Malhotra",
    role: "Marketing Director",
    location: "Delhi",
    image: TestimonialHeadshot.src,
    content:
      "I've tried several financial courses before, but none were as practical and relevant to the Indian market as this one. The tax-saving strategies alone saved me ₹1.2 lakhs last year. The community support from other students is an unexpected bonus!",
    rating: 4,
    course: "Tax Planning Strategies",
  },
  {
    id: 4,
    name: "Ananya Desai",
    role: "Healthcare Professional",
    location: "Chennai",
    image: TestimonialHeadshot.src,
    content:
      "Balancing a demanding medical career with financial planning seemed impossible until I found this platform. The bite-sized lessons fit perfectly into my busy schedule, and the personalized roadmap helped me clear my education loan while starting investments.",
    rating: 5,
    course: "Debt Management & Wealth Building",
  },
  {
    id: 5,
    name: "Arjun Reddy",
    role: "Freelance Designer",
    location: "Hyderabad",
    image: TestimonialHeadshot.src,
    content:
      "As a freelancer with irregular income, I struggled with financial stability. The course taught me how to budget effectively, create an emergency fund, and plan for taxes. My financial anxiety has reduced significantly, and I'm finally saving consistently.",
    rating: 5,
    course: "Freelancer Financial Freedom",
  },
  {
    id: 6,
    name: "Meera Iyer",
    role: "School Teacher",
    location: "Kolkata",
    image: TestimonialHeadshot.src,
    content:
      "On a teacher's salary, I never thought investing would be possible for me. This course showed me that starting small is better than not starting at all. The compound interest calculator was an eye-opener! I've now set up SIPs and am on track for retirement.",
    rating: 5,
    course: "Investing on Any Income",
  },
  {
    id: 7,
    name: "Karan Singh",
    role: "Recent Graduate",
    location: "Pune",
    image: TestimonialHeadshot.src,
    content:
      "Starting my career with student loans was overwhelming. This program gave me a clear plan to pay off debt while still building wealth. The debt snowball method they taught has helped me clear 40% of my loans in just one year!",
    rating: 4,
    course: "Fresh Graduate Financial Roadmap",
  },
  {
    id: 8,
    name: "Divya Krishnan",
    role: "IT Project Manager",
    location: "Gurgaon",
    image: TestimonialHeadshot.src,
    content:
      "The real estate investment module was exactly what I needed. It helped me analyze properties objectively and negotiate better deals. I've successfully purchased my first investment property and the rental yield is exactly as the course calculations predicted.",
    rating: 5,
    course: "Real Estate Investment Masterclass",
  },
  {
    id: 9,
    name: "Suresh Menon",
    role: "Restaurant Owner",
    location: "Kochi",
    image: TestimonialHeadshot.src,
    content:
      "Running a restaurant during the pandemic was challenging, but the business continuity planning module helped me pivot successfully. The cash flow management techniques were practical and easy to implement even during uncertain times.",
    rating: 4,
    course: "Business Resilience & Finance",
  },
  {
    id: 10,
    name: "Neha Agarwal",
    role: "Homemaker & Investor",
    location: "Jaipur",
    image: TestimonialHeadshot.src,
    content:
      "I wanted to contribute to my family's finances by investing wisely. This course empowered me with knowledge and confidence. The stock market fundamentals were explained so clearly, and now I manage a growing portfolio that has outperformed fixed deposits by 12%!",
    rating: 5,
    course: "Stock Market Fundamentals",
  },
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    if (isPlaying) {
      startAutoPlay();
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
    if (isPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      startAutoPlay();
    }
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    if (isPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      startAutoPlay();
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToTestimonial = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    if (isPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      startAutoPlay();
    }
  };

  // Card animation variants for entering, center, and exiting states
  const cardVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      y: direction > 0 ? 10 : -10,
      scale: 0.96,
      rotateY: direction > 0 ? 3 : -3,
    }),
    center: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        opacity: { duration: 0.3, ease: "easeOut" },
        y: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
        scale: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
        rotateY: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      },
    },
    exit: (direction: number) => ({
      opacity: 0,
      y: direction > 0 ? -10 : 10,
      scale: 0.96,
      rotateY: direction > 0 ? -3 : 3,
      transition: {
        opacity: { duration: 0.3, ease: "easeIn" },
        y: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
        scale: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
        rotateY: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      },
    }),
  };

  // Content fade animations for staggered effect
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2, duration: 0.3 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "backOut",
        delay: 0.1,
      },
    },
  };

  const quoteVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.4 } },
  };

  return (
    <section className="py-20 relative overflow-hidden bg-[#0a2a2f] text-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            What Our Students Say About Us
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main testimonial carousel */}
          <div className="relative bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-xl border border-white/10 mb-10 min-h-[320px] md:min-h-[280px] perspective">
            <AnimatePresence custom={direction} initial={false} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                  <div className="md:w-1/4 flex flex-col items-center">
                    <motion.div
                      variants={imageVariants}
                      initial="hidden"
                      animate="visible"
                      className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-lime-400 mb-3"
                    >
                      <Image
                        src={
                          testimonials[currentIndex].image || "/placeholder.svg"
                        }
                        alt={testimonials[currentIndex].name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <motion.div
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <h3 className="font-bold text-lg text-center">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-gray-300 text-sm text-center">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-gray-400 text-xs text-center">
                        {testimonials[currentIndex].location}
                      </p>
                      <div className="flex mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "h-4 w-4",
                              i < testimonials[currentIndex].rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "fill-gray-600 text-gray-600"
                            )}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  <div className="md:w-3/4">
                    <div className="relative">
                      <motion.div
                        variants={quoteVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <Quote className="absolute -top-2 -left-2 h-8 w-8 text-lime-400/30" />
                      </motion.div>
                      <motion.div
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <p className="text-gray-100 pl-6 pt-4 italic leading-relaxed">
                          {testimonials[currentIndex].content}
                        </p>
                        <div className="mt-4 pl-6">
                          <span className="inline-block bg-lime-400/20 text-lime-300 text-xs px-3 py-1 rounded-full">
                            Course: {testimonials[currentIndex].course}
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex items-center gap-3 bg-zinc-700 rounded-full px-3 py-2 shadow-lg border border-white/10">
              <Button
                onClick={handlePrevious}
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full bg-zinc-800 hover:bg-zinc-900 text-white hover:text-[#c8f65d] hover:scale-105 transition-all duration-300"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous</span>
              </Button>

              <Button
                onClick={togglePlayPause}
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full bg-zinc-800 hover:bg-zinc-900 text-white hover:text-[#c8f65d] hover:scale-105 transition-all duration-300"
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
                <span className="sr-only">{isPlaying ? "Pause" : "Play"}</span>
              </Button>

              <Button
                onClick={handleNext}
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full bg-zinc-800 hover:bg-zinc-900 text-white hover:text-[#c8f65d] hover:scale-105 transition-all duration-300"
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </div>

          {/* Testimonial indicators/thumbnails */}
          <div className="flex justify-center flex-wrap gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "bg-lime-400 w-8"
                    : "bg-zinc-600 hover:bg-zinc-500"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p
            className="text-gray-300 mb-6"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Join thousands of satisfied students and transform your financial
            future today
          </p>
          <Button className="bg-lime-400 hover:bg-lime-400/75 text-black px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300">
            Enroll Now
          </Button>
        </div>
      </div>

      {/* Add this global style for 3D perspective */}
      <style jsx global>{`
        .perspective {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Trophy,
  Calendar,
  TrendingUp,
  Users,
  DollarSign,
  Laptop,
  Code,
  Database,
  Layout,
} from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";
import Link from "next/link";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";
import PricingPlans from "@/components/pricing-plans";
import HowItWorks from "@/components/how-it-works";
import Tape from "@/components/tape";

const MotionDiv = motion.div;

export default function Home() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#001a0e] py-16 md:py-24">
        <div className="container px-4 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
          >
            <div className="flex-1 text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                Learn Skills That <span className="text-[#00e676]">Matter</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-gray-300 text-lg md:text-xl mb-8"
              >
                Join thousands of successful students with our premium courses
                and start sports trading now.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <Button
                  size="lg"
                  className="bg-[#00e676] hover:bg-[#00c853] text-black font-bold px-8"
                >
                  Claim Your Free Course
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#00e676] text-[#00e676] hover:bg-[#00e676]/10"
                >
                  View Courses
                </Button>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex-1 mt-8 md:mt-0"
            >
              <div className="relative w-full max-w-md mx-auto">
                <Image
                  src="/images/hero-image.png"
                  alt="Learning success"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Tape Section */}
      <Tape />

      {/* Featured Courses Section */}
      <section className="py-16 bg-[#001a0e]" ref={ref}>
        <div className="container px-4 mx-auto max-w-6xl">
          <MotionDiv
            variants={container}
            initial="hidden"
            animate={controls}
            className="text-center mb-12"
          >
            <motion.h2
              variants={item}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Featured Courses
            </motion.h2>
            <motion.p
              variants={item}
              className="text-gray-300 max-w-2xl mx-auto"
            >
              Our expert instructors provide comprehensive courses with detailed
              lessons to help you succeed
            </motion.p>
          </MotionDiv>

          <MotionDiv
            variants={container}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Course 1 */}
            <motion.div variants={item}>
              <div className="bg-[#002713] border border-[#003a1c] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#00e676]/20 hover:translate-y-[-5px]">
                <div className="relative h-48">
                  <Image
                    src="/images/course-1.jpg"
                    alt="Web Development"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#00e676] text-black px-3 py-1 rounded-full text-sm font-bold">
                      Bestseller
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Code className="w-5 h-5 text-[#00e676]" />
                    <span className="text-gray-300 text-sm">
                      Web Development
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Modern JavaScript: From Fundamentals to Expert
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Master JavaScript from the ground up and build modern web
                    applications with confidence
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-[#00e676] font-bold text-xl">
                      $89.99
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="text-yellow-400">★★★★★</div>
                      <span className="text-gray-300 text-sm">(1,245)</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link href="/courses/javascript">
                    <Button className="w-full bg-[#00e676] hover:bg-[#00c853] text-black font-bold">
                      Enroll Now
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Course 2 */}
            <motion.div variants={item}>
              <div className="bg-[#002713] border border-[#003a1c] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#00e676]/20 hover:translate-y-[-5px]">
                <div className="relative h-48">
                  <Image
                    src="/images/course-2.jpg"
                    alt="Data Science"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Database className="w-5 h-5 text-[#00e676]" />
                    <span className="text-gray-300 text-sm">Data Science</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Data Science & Machine Learning Bootcamp
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Learn Python, NumPy, Pandas, Matplotlib, and build
                    real-world ML projects
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-[#00e676] font-bold text-xl">
                      $129.99
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="text-yellow-400">★★★★☆</div>
                      <span className="text-gray-300 text-sm">(876)</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link href="/courses/data-science">
                    <Button className="w-full bg-[#00e676] hover:bg-[#00c853] text-black font-bold">
                      Enroll Now
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Course 3 */}
            <motion.div variants={item}>
              <div className="bg-[#002713] border border-[#003a1c] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#00e676]/20 hover:translate-y-[-5px]">
                <div className="relative h-48">
                  <Image
                    src="/images/course-3.jpg"
                    alt="UI/UX Design"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#00e676] text-black px-3 py-1 rounded-full text-sm font-bold">
                      New
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Layout className="w-5 h-5 text-[#00e676]" />
                    <span className="text-gray-300 text-sm">UI/UX Design</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Complete UI/UX Design Masterclass
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Learn Figma, user research, wireframing, and create stunning
                    interfaces
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-[#00e676] font-bold text-xl">
                      $99.99
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="text-yellow-400">★★★★★</div>
                      <span className="text-gray-300 text-sm">(542)</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link href="/courses/ui-ux">
                    <Button className="w-full bg-[#00e676] hover:bg-[#00c853] text-black font-bold">
                      Enroll Now
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </MotionDiv>

          <motion.div
            variants={item}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            className="mt-12 text-center"
          >
            <Link href="/courses">
              <Button
                size="lg"
                className="bg-[#00e676] hover:bg-[#00c853] text-black font-bold px-8"
              >
                View All Courses
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-[#002713]">
        <div className="container px-4 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose ElitePickz
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We're committed to providing the most comprehensive learning
              experience with complete transparency
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#003a1c] p-6 rounded-lg hover:shadow-lg hover:shadow-[#00e676]/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#00e676]/20 rounded-full flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-[#00e676]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Expert Instructors
              </h3>
              <p className="text-gray-300">
                Learn from industry professionals with years of real-world
                experience
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-[#003a1c] p-6 rounded-lg hover:shadow-lg hover:shadow-[#00e676]/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#00e676]/20 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-[#00e676]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Lifetime Access
              </h3>
              <p className="text-gray-300">
                Buy once and access your courses forever, including all future
                updates
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#003a1c] p-6 rounded-lg hover:shadow-lg hover:shadow-[#00e676]/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#00e676]/20 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-[#00e676]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Career Growth
              </h3>
              <p className="text-gray-300">
                Our courses are designed to help you advance your career and
                increase your income
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-[#003a1c] p-6 rounded-lg hover:shadow-lg hover:shadow-[#00e676]/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#00e676]/20 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-[#00e676]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Community Support
              </h3>
              <p className="text-gray-300">
                Join our community of learners and share knowledge with peers
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-[#003a1c] p-6 rounded-lg hover:shadow-lg hover:shadow-[#00e676]/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#00e676]/20 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-[#00e676]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Money-Back Guarantee
              </h3>
              <p className="text-gray-300">
                We stand behind our courses with a 30-day satisfaction guarantee
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#003a1c] p-6 rounded-lg hover:shadow-lg hover:shadow-[#00e676]/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#00e676]/20 rounded-full flex items-center justify-center mb-4">
                <Laptop className="h-6 w-6 text-[#00e676]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Project-Based Learning
              </h3>
              <p className="text-gray-300">
                Build real-world projects that you can add to your portfolio
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#001a0e]">
        <div className="container px-4 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Students Say
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hear from students who have transformed their careers with
              ElitePickz courses
            </p>
          </motion.div>
          <Testimonials />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-[#002713]">
        <div className="container px-4 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Follow these simple steps to start your learning journey with us
            </p>
          </motion.div>
          <HowItWorks />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-[#002713]">
        <div className="container px-4 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Learning Plan
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Select the package that fits your learning goals and budget
            </p>
          </motion.div>
          <PricingPlans />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#001a0e]">
        <div className="container px-4 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#003a1c] to-[#00562b] rounded-xl p-8 md:p-12"
          >
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Learning?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Join ElitePickz today and get access to our premium courses.
                Start turning your knowledge into real-world skills.
              </p>
              <Button
                size="lg"
                className="bg-[#00e676] hover:bg-[#00c853] text-black font-bold px-8 text-lg"
              >
                Get Started Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, HelpCircle, X } from "lucide-react"
import { motion } from "framer-motion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly")

  const plans = [
    {
      id: "basic",
      name: "Basic",
      description: "Perfect for beginners looking to start their learning journey",
      monthlyPrice: 19.99,
      yearlyPrice: 199.99,
      features: [
        { name: "Access to 10 courses", included: true },
        { name: "Basic course materials", included: true },
        { name: "Course completion certificates", included: true },
        { name: "24/7 support", included: true },
        { name: "Access to community forums", included: true },
        { name: "Project feedback", included: false },
        { name: "1-on-1 mentorship", included: false },
        { name: "Job placement assistance", included: false },
      ],
      isPopular: false,
      buttonText: "Get Started",
      color: "bg-[#003a1c]",
    },
    {
      id: "pro",
      name: "Pro",
      description: "Our most popular plan for serious learners",
      monthlyPrice: 49.99,
      yearlyPrice: 499.99,
      features: [
        { name: "Access to all courses", included: true },
        { name: "Premium course materials", included: true },
        { name: "Course completion certificates", included: true },
        { name: "24/7 priority support", included: true },
        { name: "Access to community forums", included: true },
        { name: "Project feedback", included: true },
        { name: "1-on-1 mentorship (2 sessions/month)", included: true },
        { name: "Job placement assistance", included: false },
      ],
      isPopular: true,
      buttonText: "Get Started",
      color: "bg-[#00e676]",
    },
    {
      id: "premium",
      name: "Premium",
      description: "For professionals seeking career advancement",
      monthlyPrice: 99.99,
      yearlyPrice: 999.99,
      features: [
        { name: "Access to all courses", included: true },
        { name: "Premium course materials", included: true },
        { name: "Course completion certificates", included: true },
        { name: "24/7 priority support", included: true },
        { name: "Access to community forums", included: true },
        { name: "Project feedback", included: true },
        { name: "1-on-1 mentorship (unlimited)", included: true },
        { name: "Job placement assistance", included: true },
      ],
      isPopular: false,
      buttonText: "Get Started",
      color: "bg-[#003a1c]",
    },
  ]

  const featureExplanations = {
    "Access to 10 courses": "Choose from our catalog of beginner-friendly courses",
    "Access to all courses": "Unlimited access to our entire course library",
    "Basic course materials": "Includes video lessons, quizzes, and basic assignments",
    "Premium course materials": "Includes video lessons, quizzes, advanced assignments, and downloadable resources",
    "Course completion certificates": "Receive a certificate upon successful completion of each course",
    "24/7 support": "Get help from our support team whenever you need it",
    "24/7 priority support": "Get expedited help from our support team with priority queue",
    "Access to community forums": "Connect with fellow students and instructors in our online community",
    "Project feedback": "Receive detailed feedback on your course projects from instructors",
    "1-on-1 mentorship (2 sessions/month)": "Schedule two 30-minute sessions per month with an expert mentor",
    "1-on-1 mentorship (unlimited)": "Schedule unlimited 30-minute sessions with an expert mentor",
    "Job placement assistance": "Get help with resume building, interview preparation, and job referrals",
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <main className="flex flex-col min-h-screen">
      <section className="bg-[#001a0e] py-16">
        <div className="container px-4 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your learning goals and budget. All plans come with our satisfaction guarantee.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <Tabs defaultValue="monthly" className="w-full max-w-md" onValueChange={(value) => setBillingCycle(value)}>
              <TabsList className="grid w-full grid-cols-2 bg-[#002713]">
                <TabsTrigger
                  value="monthly"
                  className="data-[state=active]:bg-[#00e676] data-[state=active]:text-black"
                >
                  Monthly
                </TabsTrigger>
                <TabsTrigger value="yearly" className="data-[state=active]:bg-[#00e676] data-[state=active]:text-black">
                  Yearly <span className="ml-2 text-xs bg-[#00e676]/20 px-2 py-0.5 rounded-full">Save 16%</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {plans.map((plan) => (
              <motion.div key={plan.id} variants={item}>
                <Card
                  className={`bg-[#002713] border-[#003a1c] h-full ${plan.isPopular ? "ring-2 ring-[#00e676]" : ""} hover:shadow-lg hover:shadow-[#00e676]/20 transition-all duration-300`}
                >
                  {plan.isPopular && (
                    <div className="bg-[#00e676] text-black text-center py-1 text-sm font-bold">MOST POPULAR</div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
                    <div className="mt-2">
                      <span className="text-3xl font-bold text-white">
                        ${billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="text-gray-400 ml-1">{billingCycle === "monthly" ? "/month" : "/year"}</span>
                    </div>
                    <p className="text-gray-300 mt-2">{plan.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-[#00e676] shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                          )}
                          <span className={feature.included ? "text-gray-300" : "text-gray-500"}>{feature.name}</span>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <HelpCircle className="w-4 h-4 text-gray-500 shrink-0 mt-0.5 ml-1 cursor-help" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="max-w-xs">{featureExplanations[feature.name]}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className={`w-full ${plan.isPopular ? "bg-[#00e676] hover:bg-[#00c853] text-black" : "bg-[#003a1c] hover:bg-[#004a24] text-white"} font-bold`}
                    >
                      {plan.buttonText}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">All Plans Include</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[#002713] p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-[#00e676]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">30-Day Money-Back Guarantee</h3>
                    <p className="text-gray-300">
                      If you're not satisfied with our courses, we offer a full refund within 30 days
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#002713] p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-[#00e676]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Lifetime Access</h3>
                    <p className="text-gray-300">
                      Once you purchase a course, you'll have access to it forever, including all updates
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#002713] p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-[#00e676]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Mobile Access</h3>
                    <p className="text-gray-300">Access your courses on any device with our mobile-friendly platform</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#002713] p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-[#00e676]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Course Completion Certificates</h3>
                    <p className="text-gray-300">
                      Receive certificates for all completed courses to showcase your skills
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#002713] p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-[#00e676]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Regular Content Updates</h3>
                    <p className="text-gray-300">Our courses are regularly updated to keep up with industry changes</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#002713] p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-[#00e676]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Downloadable Resources</h3>
                    <p className="text-gray-300">Access code samples, cheat sheets, and other learning materials</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#002713]">
        <div className="container px-4 mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about our pricing and plans
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#003a1c] p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-white mb-2">Can I switch plans later?</h3>
              <p className="text-gray-300">
                Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you'll be charged the prorated
                difference. If you downgrade, you'll receive credit towards your next billing cycle.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-[#003a1c] p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-white mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-300">
                We accept all major credit cards, PayPal, and Apple Pay. For yearly plans, we also offer payment via
                bank transfer.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#003a1c] p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-white mb-2">How does the 30-day guarantee work?</h3>
              <p className="text-gray-300">
                If you're not satisfied with our service for any reason, simply contact our support team within 30 days
                of your purchase, and we'll issue a full refund, no questions asked.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-[#003a1c] p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-white mb-2">Do you offer team or enterprise plans?</h3>
              <p className="text-gray-300">
                Yes, we offer special pricing for teams and enterprises. Please contact our sales team for more
                information and a custom quote.
              </p>
            </motion.div>
          </motion.div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Learning Journey?</h2>
              <p className="text-gray-300 text-lg mb-8">
                Join thousands of successful students who have transformed their careers with our courses.
              </p>
              <Link href="/courses">
                <Button size="lg" className="bg-[#00e676] hover:bg-[#00c853] text-black font-bold px-8 text-lg">
                  Browse Courses
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

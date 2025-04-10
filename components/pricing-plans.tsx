"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

export default function PricingPlans() {
  const plans = [
    {
      id: 1,
      name: "Basic",
      price: "$19.99",
      period: "per month",
      description: "Perfect for beginners looking to start their learning journey",
      features: [
        "Access to 10 courses",
        "Basic course materials",
        "Course completion certificates",
        "24/7 support",
        "Access to community forums",
      ],
      isPopular: false,
      buttonText: "Get Started",
    },
    {
      id: 2,
      name: "Pro",
      price: "$49.99",
      period: "per month",
      description: "Our most popular plan for serious learners",
      features: [
        "Access to all courses",
        "Premium course materials",
        "Course completion certificates",
        "24/7 priority support",
        "Access to community forums",
        "Project feedback",
        "1-on-1 mentorship (2 sessions/month)",
      ],
      isPopular: true,
      buttonText: "Get Started",
    },
    {
      id: 3,
      name: "Premium",
      price: "$99.99",
      period: "per month",
      description: "For professionals seeking career advancement",
      features: [
        "Access to all courses",
        "Premium course materials",
        "Course completion certificates",
        "24/7 priority support",
        "Access to community forums",
        "Project feedback",
        "1-on-1 mentorship (unlimited)",
        "Job placement assistance",
      ],
      isPopular: false,
      buttonText: "Get Started",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {plans.map((plan, index) => (
        <motion.div
          key={plan.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card
            className={`bg-[#002713] border-[#003a1c] h-full ${plan.isPopular ? "ring-2 ring-[#00e676]" : ""} hover:shadow-lg hover:shadow-[#00e676]/20 transition-all duration-300`}
          >
            {plan.isPopular && (
              <div className="bg-[#00e676] text-black text-center py-1 text-sm font-bold">MOST POPULAR</div>
            )}
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
              <div className="mt-2">
                <span className="text-3xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400 ml-1">{plan.period}</span>
              </div>
              <p className="text-gray-300 mt-2">{plan.description}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#00e676] shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
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
    </div>
  )
}

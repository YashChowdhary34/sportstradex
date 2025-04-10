"use client"

import { Trophy, Users, TrendingUp, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Stats() {
  const [animated, setAnimated] = useState(false)
  const [counts, setCounts] = useState({
    winRate: 0,
    members: 0,
    profit: 0,
    years: 0,
  })

  const targetCounts = {
    winRate: 95,
    members: 15000,
    profit: 1250,
    years: 5,
  }

  useEffect(() => {
    if (animated) {
      const duration = 2000 // 2 seconds
      const interval = 20 // update every 20ms
      const steps = duration / interval

      const winRateIncrement = targetCounts.winRate / steps
      const membersIncrement = targetCounts.members / steps
      const profitIncrement = targetCounts.profit / steps
      const yearsIncrement = targetCounts.years / steps

      let currentStep = 0

      const timer = setInterval(() => {
        currentStep++

        setCounts({
          winRate: Math.min(Math.round(winRateIncrement * currentStep), targetCounts.winRate),
          members: Math.min(Math.round(membersIncrement * currentStep), targetCounts.members),
          profit: Math.min(Math.round(profitIncrement * currentStep), targetCounts.profit),
          years: Math.min(Math.round(yearsIncrement * currentStep * 10) / 10, targetCounts.years),
        })

        if (currentStep >= steps) {
          clearInterval(timer)
        }
      }, interval)

      return () => clearInterval(timer)
    }
  }, [animated])

  return (
    <motion.section
      className="bg-[#002713] py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setAnimated(true)}
    >
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Trophy className="h-8 w-8 text-[#00e676]" />
            </div>
            <div className="text-3xl font-bold text-white">{counts.winRate}%</div>
            <div className="text-gray-400 text-sm">Success Rate</div>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Users className="h-8 w-8 text-[#00e676]" />
            </div>
            <div className="text-3xl font-bold text-white">{counts.members}+</div>
            <div className="text-gray-400 text-sm">Active Students</div>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-2">
              <TrendingUp className="h-8 w-8 text-[#00e676]" />
            </div>
            <div className="text-3xl font-bold text-white">+{counts.profit}</div>
            <div className="text-gray-400 text-sm">Projects Completed</div>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Calendar className="h-8 w-8 text-[#00e676]" />
            </div>
            <div className="text-3xl font-bold text-white">{counts.years}+ Years</div>
            <div className="text-gray-400 text-sm">Experience</div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

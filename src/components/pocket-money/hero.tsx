"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Instagram, Facebook, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PocketMoneyHero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#0a2a2f] text-white pt-16 pb-20 md:pt-24 md:pb-32">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-black/40 to-transparent" />
        <div className="h-full w-full bg-[radial-gradient(#c8f65d_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-block px-4 py-1 bg-[#c8f65d]/20 rounded-full text-[#c8f65d] text-sm font-medium mb-6">
              Earn While You Learn
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight font-manrope">
              Pocket Money Program —{" "}
              <span className="text-[#c8f65d]">Share. Earn. Repeat.</span>
            </h1>

            <p className="text-xl md:text-2xl font-bold mb-4 text-[#c8f65d]">
              🪙 Get Paid ₹150 for Promoting SportsTradex on Social Media
            </p>

            <p className="text-lg md:text-xl mb-8 text-gray-300">
              A Free Program That Rewards You for Spreading the Word — No Skills
              Required
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Instagram className="h-5 w-5 text-[#c8f65d]" />
                <span className="text-sm">Instagram</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Facebook className="h-5 w-5 text-[#c8f65d]" />
                <span className="text-sm">Facebook</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <MessageSquare className="h-5 w-5 text-[#c8f65d]" />
                <span className="text-sm">WhatsApp</span>
              </div>
            </div>

            <p className="text-gray-300 mb-8">
              If you&apos;ve got WhatsApp, Instagram, or Facebook — you&apos;re
              already eligible! We&apos;re inviting enthusiastic learners,
              sports fans, and digital explorers to help promote our educational
              platform.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <Button className="bg-[#c8f65d] hover:bg-[#c8f65d]/80 text-[#0a2a2f] font-bold text-lg px-8 py-6 rounded-full">
                <span>Join Now</span>
                <motion.div
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right content - Phone mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto max-w-[300px] lg:max-w-none"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-[#c8f65d]/20 rounded-full blur-xl"></div>
              <div className="relative bg-[#0a2a2f] border-8 border-[#0a2a2f]/80 rounded-[2.5rem] overflow-hidden shadow-2xl">
                <div className="aspect-[9/19] w-full max-w-[300px] mx-auto overflow-hidden rounded-[2rem]">
                  <Image
                    src="/placeholder.svg?height=600&width=300"
                    alt="Pocket Money Program"
                    width={300}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2a2f] via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <p className="text-[#c8f65d] font-bold mb-2">Earn up to</p>
                  <p className="text-4xl font-extrabold text-white">₹150</p>
                  <p className="text-sm text-gray-300 mt-1">Just by sharing!</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

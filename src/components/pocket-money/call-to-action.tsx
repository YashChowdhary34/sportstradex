"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-[#0a2a2f] text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="h-full w-full bg-[radial-gradient(#c8f65d_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 font-manrope">
              🚀 Ready to Earn Your First ₹150 Online?
            </h2>

            <p className="text-xl text-gray-300 mb-8">
              Step into the smarter side of social media sharing.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              className="mb-12"
            >
              <Button className="bg-[#c8f65d] hover:bg-[#c8f65d]/80 text-[#0a2a2f] font-bold text-lg px-8 py-6 rounded-full">
                <span>Join the Pocket Money Program Now</span>
                <motion.div
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.div>
              </Button>
            </motion.div>

            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                Designed by SportsTradex – India&apos;s First Cricket Data &
                Sports Analytics Learning Platform
              </p>
              <p className="text-gray-500 text-xs mt-2">
                © 2025 SportsTradex. All Rights Reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

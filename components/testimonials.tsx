"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { motion } from "framer-motion"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "John D.",
      avatar: "/images/testimonial-1.jpg",
      content:
        "I've been using ElitePickz courses for 6 months and my career has completely transformed. The instructors are incredibly knowledgeable and the project-based approach prepared me for real-world challenges.",
      rating: 5,
      location: "Chicago, IL",
    },
    {
      id: 2,
      name: "Maria S.",
      avatar: "/images/testimonial-2.jpg",
      content:
        "The courses are consistently high-quality. What I love most is the practical approach - you build real projects that you can add to your portfolio, which helped me land my dream job.",
      rating: 5,
      location: "Dallas, TX",
    },
    {
      id: 3,
      name: "Robert K.",
      avatar: "/images/testimonial-3.jpg",
      content:
        "As a career changer, ElitePickz has helped me understand complex programming concepts in a simple way. Their JavaScript course was particularly helpful in my transition to web development.",
      rating: 4,
      location: "Boston, MA",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="bg-[#002713] border-[#003a1c] h-full hover:shadow-lg hover:shadow-[#00e676]/20 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? "text-[#00e676] fill-[#00e676]" : "text-gray-500"}`}
                  />
                ))}
              </div>

              <p className="text-gray-300">"{testimonial.content}"</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote, ChevronRight, MessageCircle, ThumbsUp } from "lucide-react"
import { motion, useInView, useAnimation } from "framer-motion"
import Link from "next/link"

export default function ReviewsPage() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const reviews = [
    {
      id: 1,
      name: "John D.",
      avatar: "/images/testimonial-1.jpg",
      content:
        "The JavaScript course was incredibly comprehensive. The instructor broke down complex concepts into digestible pieces, and the projects helped me build a strong portfolio. I landed a job as a frontend developer within a month of completing the course!",
      rating: 5,
      course: "Modern JavaScript: From Fundamentals to Expert",
      date: "October 15, 2023",
      helpful: 124,
      replies: 3,
    },
    {
      id: 2,
      name: "Maria S.",
      avatar: "/images/testimonial-2.jpg",
      content:
        "The Data Science Bootcamp exceeded my expectations. The curriculum was up-to-date with the latest industry practices, and the instructor was always available to answer questions. The hands-on projects gave me real-world experience that I could showcase in interviews.",
      rating: 5,
      course: "Data Science & Machine Learning Bootcamp",
      date: "September 28, 2023",
      helpful: 98,
      replies: 5,
    },
    {
      id: 3,
      name: "Robert K.",
      avatar: "/images/testimonial-3.jpg",
      content:
        "As someone transitioning from graphic design to UI/UX, this course was exactly what I needed. The instructor's approach to teaching design principles and Figma was excellent. I now have a portfolio that showcases my UI/UX skills, and I've already landed freelance work!",
      rating: 4,
      course: "Complete UI/UX Design Masterclass",
      date: "September 10, 2023",
      helpful: 76,
      replies: 2,
    },
    {
      id: 4,
      name: "Emily T.",
      avatar: "/images/student-4.jpg",
      content:
        "The React Native course was fantastic! I had some experience with React, but this course took my skills to the next level. Building real mobile apps during the course gave me the confidence to start my own app development business. Highly recommended!",
      rating: 5,
      course: "React Native: Build Mobile Apps",
      date: "August 25, 2023",
      helpful: 112,
      replies: 7,
    },
    {
      id: 5,
      name: "Michael P.",
      avatar: "/images/student-5.jpg",
      content:
        "I was skeptical about learning blockchain development online, but this course changed my mind. The instructor's expertise and teaching style made complex concepts accessible. The projects were challenging but rewarding, and I now have a solid understanding of Solidity and Web3.",
      rating: 5,
      course: "Blockchain Development with Solidity",
      date: "August 12, 2023",
      helpful: 89,
      replies: 4,
    },
    {
      id: 6,
      name: "Sarah L.",
      avatar: "/images/student-6.jpg",
      content:
        "The MERN stack course was comprehensive and well-structured. I appreciated the focus on best practices and modern development techniques. The final project was challenging but gave me a complete application for my portfolio. I'm now working as a full-stack developer!",
      rating: 5,
      course: "Full-Stack Web Development with MERN",
      date: "July 30, 2023",
      helpful: 134,
      replies: 9,
    },
  ]

  const videoTestimonials = [
    {
      id: 1,
      name: "David Thompson",
      role: "Frontend Developer at Google",
      thumbnail: "/images/video-testimonial-1.jpg",
      course: "Modern JavaScript: From Fundamentals to Expert",
    },
    {
      id: 2,
      name: "Jennifer Lopez",
      role: "Data Scientist at Microsoft",
      thumbnail: "/images/video-testimonial-2.jpg",
      course: "Data Science & Machine Learning Bootcamp",
    },
    {
      id: 3,
      name: "Robert Chen",
      role: "UI/UX Designer at Airbnb",
      thumbnail: "/images/video-testimonial-3.jpg",
      course: "Complete UI/UX Design Masterclass",
    },
  ]

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#001a0e] py-16">
        <div className="container px-4 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              What Our Students <span className="text-[#00e676]">Say About Us</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              Read honest reviews from our students who have transformed their careers with our courses
            </p>
            <div className="flex items-center justify-center mt-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#001a0e] overflow-hidden">
                    <Image
                      src={`/images/testimonial-${(i % 3) + 1}.jpg`}
                      alt={`Student ${i}`}
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span className="ml-2 text-white font-semibold">4.8 out of 5</span>
                </div>
                <p className="text-gray-400 text-sm">Based on 2,500+ reviews</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 bg-[#002713]" ref={ref}>
        <div className="container px-4 mx-auto max-w-6xl">
          <motion.div variants={container} initial="hidden" animate={controls} className="text-center mb-12">
            <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold text-white mb-4">
              Video Testimonials
            </motion.h2>
            <motion.p variants={item} className="text-gray-300 max-w-2xl mx-auto">
              Watch our students share their learning experiences and success stories
            </motion.p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {videoTestimonials.map((testimonial) => (
              <motion.div key={testimonial.id} variants={item}>
                <div className="bg-[#003a1c] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#00e676]/20 hover:translate-y-[-5px]">
                  <div className="relative">
                    <Image
                      src={testimonial.thumbnail || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={400}
                      height={225}
                      className="w-full aspect-video object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-[#00e676]/80 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#00e676] transition-colors">
                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-black border-b-[8px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{testimonial.name}</h3>
                    <p className="text-[#00e676] mb-3">{testimonial.role}</p>
                    <p className="text-gray-300 text-sm">
                      Course: <span className="font-semibold">{testimonial.course}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Written Reviews */}
      <section className="py-16 bg-[#001a0e]">
        <div className="container px-4 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Student Reviews</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Read detailed reviews from our students about their learning experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#002713] border-[#003a1c] overflow-hidden h-full hover:shadow-lg hover:shadow-[#00e676]/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={review.avatar || "/placeholder.svg"}
                          alt={review.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{review.name}</h4>
                        <p className="text-gray-400 text-sm">{review.date}</p>
                      </div>
                      <div className="ml-auto">
                        <Quote className="w-8 h-8 text-[#00e676]/30" />
                      </div>
                    </div>

                    <div className="flex mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-500"}`}
                        />
                      ))}
                    </div>

                    <p className="text-gray-300 mb-4">"{review.content}"</p>

                    <div className="bg-[#001a0e] p-3 rounded-lg mb-4">
                      <p className="text-sm text-gray-400">
                        Course: <span className="text-[#00e676]">{review.course}</span>
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{review.helpful} found this helpful</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        <span>{review.replies} replies</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-[#00e676] hover:bg-[#00c853] text-black font-bold px-8">
              Load More Reviews
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#002713]">
        <div className="container px-4 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#003a1c] to-[#00562b] rounded-xl p-8 md:p-12"
          >
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Our Community of Learners</h2>
              <p className="text-gray-300 text-lg mb-8">
                Start your learning journey today and become our next success story. Browse our courses and take the
                first step toward your dream career.
              </p>
              <Link href="/courses">
                <Button size="lg" className="bg-[#00e676] hover:bg-[#00c853] text-black font-bold px-8 text-lg">
                  Explore Courses
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

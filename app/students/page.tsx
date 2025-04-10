"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Briefcase, MapPin, GraduationCap, Award, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

export default function StudentsPage() {
  const students = [
    {
      id: 1,
      name: "Michael Johnson",
      image: "/images/student-1.jpg",
      role: "Senior Frontend Developer",
      company: "Google",
      location: "San Francisco, CA",
      bio: "After completing the JavaScript and React courses, I landed my dream job at Google. The project-based learning approach prepared me for real-world challenges.",
      courses: ["Modern JavaScript", "React Masterclass"],
      linkedin: "https://linkedin.com",
      featured: true,
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah Williams",
      image: "/images/student-2.jpg",
      role: "Data Scientist",
      company: "Microsoft",
      location: "Seattle, WA",
      bio: "The Data Science Bootcamp gave me the skills to transition from marketing to data science. Now I'm working on AI projects at Microsoft.",
      courses: ["Data Science Bootcamp", "Machine Learning Fundamentals"],
      linkedin: "https://linkedin.com",
      featured: true,
      rating: 5,
    },
    {
      id: 3,
      name: "David Thompson",
      image: "/images/student-3.jpg",
      role: "UI/UX Designer",
      company: "Airbnb",
      location: "New York, NY",
      bio: "The UI/UX Design Masterclass transformed my career. I went from a graphic designer to leading UI/UX projects at Airbnb in just 6 months.",
      courses: ["UI/UX Design Masterclass", "Advanced Figma"],
      linkedin: "https://linkedin.com",
      featured: false,
      rating: 4,
    },
    {
      id: 4,
      name: "Jennifer Lopez",
      image: "/images/student-4.jpg",
      role: "Mobile App Developer",
      company: "Uber",
      location: "Chicago, IL",
      bio: "Learning React Native opened up new opportunities for me. I now develop cross-platform mobile apps for Uber and love every minute of it.",
      courses: ["React Native", "iOS Development with Swift"],
      linkedin: "https://linkedin.com",
      featured: false,
      rating: 5,
    },
    {
      id: 5,
      name: "Robert Chen",
      image: "/images/student-5.jpg",
      role: "Blockchain Developer",
      company: "Coinbase",
      location: "Miami, FL",
      bio: "The Blockchain Development course gave me the specialized knowledge I needed to stand out in the job market. Now I'm building the future of finance.",
      courses: ["Blockchain Development with Solidity", "Web3 Fundamentals"],
      linkedin: "https://linkedin.com",
      featured: true,
      rating: 5,
    },
    {
      id: 6,
      name: "Alex Morgan",
      image: "/images/student-6.jpg",
      role: "Full-Stack Developer",
      company: "Netflix",
      location: "Los Angeles, CA",
      bio: "The MERN stack course was comprehensive and practical. I built a portfolio that impressed Netflix recruiters and landed my current role.",
      courses: ["Full-Stack Web Development", "Node.js Advanced"],
      linkedin: "https://linkedin.com",
      featured: false,
      rating: 4,
    },
  ]

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
      <section className="bg-[#001a0e] py-12">
        <div className="container px-4 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Successful Students</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Meet the students who transformed their careers with our courses and are now working at top companies
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {students.map((student) => (
              <motion.div key={student.id} variants={item}>
                <Card className="bg-[#002713] border-[#003a1c] overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:shadow-[#00e676]/20 hover:translate-y-[-5px]">
                  <CardContent className="p-0">
                    <div className="relative h-64 w-full">
                      <Image
                        src={student.image || "/placeholder.svg"}
                        alt={student.name}
                        fill
                        className="object-cover"
                      />
                      {student.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-[#00e676] text-black px-3 py-1 rounded-full text-sm font-bold">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-1">{student.name}</h3>

                      <div className="flex items-center gap-2 text-[#00e676] mb-3">
                        <Briefcase className="w-4 h-4" />
                        <span>
                          {student.role} at {student.company}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-gray-300 text-sm mb-4">
                        <MapPin className="w-4 h-4" />
                        <span>{student.location}</span>
                      </div>

                      <div className="flex mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < student.rating ? "text-[#00e676] fill-[#00e676]" : "text-gray-500"}`}
                          />
                        ))}
                      </div>

                      <p className="text-gray-300 mb-4">{student.bio}</p>

                      <div className="bg-[#003a1c] p-3 rounded-lg mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <GraduationCap className="w-4 h-4 text-[#00e676]" />
                          <span className="text-white font-semibold">Courses Completed</span>
                        </div>
                        <ul className="pl-6 text-gray-300 text-sm">
                          {student.courses.map((course, index) => (
                            <li key={index} className="list-disc">
                              {course}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Link href={student.linkedin} target="_blank" className="w-full">
                      <Button
                        variant="outline"
                        className="w-full border-[#00e676] text-[#00e676] hover:bg-[#00e676]/10"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Connect on LinkedIn
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-[#002713]">
        <div className="container px-4 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Success by the Numbers</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our students achieve remarkable results after completing our courses
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#003a1c] p-6 rounded-lg text-center"
            >
              <div className="w-16 h-16 bg-[#00e676]/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Award className="h-8 w-8 text-[#00e676]" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">85%</div>
              <p className="text-gray-300">of our students get hired within 3 months of course completion</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-[#003a1c] p-6 rounded-lg text-center"
            >
              <div className="w-16 h-16 bg-[#00e676]/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Briefcase className="h-8 w-8 text-[#00e676]" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">$25K+</div>
              <p className="text-gray-300">average salary increase after completing our courses</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#003a1c] p-6 rounded-lg text-center"
            >
              <div className="w-16 h-16 bg-[#00e676]/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <GraduationCap className="h-8 w-8 text-[#00e676]" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">15,000+</div>
              <p className="text-gray-300">students have successfully completed our courses</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-[#003a1c] p-6 rounded-lg text-center"
            >
              <div className="w-16 h-16 bg-[#00e676]/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Star className="h-8 w-8 text-[#00e676]" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">4.8/5</div>
              <p className="text-gray-300">average course rating from our students</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join Our Success Stories?</h2>
              <p className="text-gray-300 text-lg mb-8">
                Start your journey today and become our next success story. Browse our courses and take the first step
                toward your dream career.
              </p>
              <Link href="/courses">
                <Button size="lg" className="bg-[#00e676] hover:bg-[#00c853] text-black font-bold px-8 text-lg">
                  Explore Courses
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

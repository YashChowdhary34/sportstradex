"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Search, Code, Database, Layout, Smartphone, Cpu, BookOpen } from "lucide-react"
import { motion } from "framer-motion"

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredCourses, setFilteredCourses] = useState([])

  const courses = [
    {
      id: 1,
      title: "Modern JavaScript: From Fundamentals to Expert",
      description: "Master JavaScript from the ground up and build modern web applications with confidence",
      image: "/images/course-1.jpg",
      category: "web-development",
      price: 89.99,
      rating: 5,
      reviews: 1245,
      instructor: "Alex Morgan",
      bestseller: true,
      new: false,
      icon: <Code className="w-5 h-5 text-[#00e676]" />,
      categoryName: "Web Development",
    },
    {
      id: 2,
      title: "Data Science & Machine Learning Bootcamp",
      description: "Learn Python, NumPy, Pandas, Matplotlib, and build real-world ML projects",
      image: "/images/course-2.jpg",
      category: "data-science",
      price: 129.99,
      rating: 4,
      reviews: 876,
      instructor: "Sarah Williams",
      bestseller: false,
      new: false,
      icon: <Database className="w-5 h-5 text-[#00e676]" />,
      categoryName: "Data Science",
    },
    {
      id: 3,
      title: "Complete UI/UX Design Masterclass",
      description: "Learn Figma, user research, wireframing, and create stunning interfaces",
      image: "/images/course-3.jpg",
      category: "ui-ux",
      price: 99.99,
      rating: 5,
      reviews: 542,
      instructor: "Mike Johnson",
      bestseller: false,
      new: true,
      icon: <Layout className="w-5 h-5 text-[#00e676]" />,
      categoryName: "UI/UX Design",
    },
    {
      id: 4,
      title: "React Native: Build Mobile Apps",
      description: "Create cross-platform mobile applications for iOS and Android using React Native",
      image: "/images/course-4.jpg",
      category: "mobile-apps",
      price: 109.99,
      rating: 5,
      reviews: 328,
      instructor: "David Thompson",
      bestseller: true,
      new: false,
      icon: <Smartphone className="w-5 h-5 text-[#00e676]" />,
      categoryName: "Mobile Apps",
    },
    {
      id: 5,
      title: "Blockchain Development with Solidity",
      description: "Build decentralized applications on Ethereum and understand blockchain fundamentals",
      image: "/images/course-5.jpg",
      category: "blockchain",
      price: 149.99,
      rating: 4,
      reviews: 215,
      instructor: "Robert Chen",
      bestseller: false,
      new: true,
      icon: <Cpu className="w-5 h-5 text-[#00e676]" />,
      categoryName: "Blockchain",
    },
    {
      id: 6,
      title: "Full-Stack Web Development with MERN",
      description: "Master MongoDB, Express, React, and Node.js to build complete web applications",
      image: "/images/course-6.jpg",
      category: "web-development",
      price: 119.99,
      rating: 5,
      reviews: 687,
      instructor: "Jennifer Lopez",
      bestseller: true,
      new: false,
      icon: <Code className="w-5 h-5 text-[#00e676]" />,
      categoryName: "Web Development",
    },
    {
      id: 7,
      title: "Python for Data Analysis and Visualization",
      description: "Learn to analyze and visualize data using Python, Pandas, and Matplotlib",
      image: "/images/course-7.jpg",
      category: "data-science",
      price: 89.99,
      rating: 4,
      reviews: 432,
      instructor: "Sarah Williams",
      bestseller: false,
      new: false,
      icon: <Database className="w-5 h-5 text-[#00e676]" />,
      categoryName: "Data Science",
    },
    {
      id: 8,
      title: "Advanced CSS and Sass: Flexbox, Grid, Animations",
      description: "Master modern CSS techniques and build stunning responsive websites",
      image: "/images/course-8.jpg",
      category: "web-development",
      price: 79.99,
      rating: 5,
      reviews: 521,
      instructor: "Alex Morgan",
      bestseller: false,
      new: false,
      icon: <Code className="w-5 h-5 text-[#00e676]" />,
      categoryName: "Web Development",
    },
    {
      id: 9,
      title: "iOS App Development with Swift",
      description: "Learn to build professional iOS applications using Swift and Xcode",
      image: "/images/course-9.jpg",
      category: "mobile-apps",
      price: 129.99,
      rating: 4,
      reviews: 318,
      instructor: "David Thompson",
      bestseller: false,
      new: true,
      icon: <Smartphone className="w-5 h-5 text-[#00e676]" />,
      categoryName: "Mobile Apps",
    },
  ]

  useEffect(() => {
    setFilteredCourses(courses)
  }, [])

  const handleSearch = (e) => {
    const term = e.target.value
    setSearchTerm(term)

    if (term.trim() === "") {
      setFilteredCourses(courses)
    } else {
      const filtered = courses.filter(
        (course) =>
          course.title.toLowerCase().includes(term.toLowerCase()) ||
          course.description.toLowerCase().includes(term.toLowerCase()) ||
          course.categoryName.toLowerCase().includes(term.toLowerCase()),
      )
      setFilteredCourses(filtered)
    }
  }

  const filterByCategory = (category) => {
    if (category === "all") {
      setFilteredCourses(courses)
    } else {
      const filtered = courses.filter((course) => course.category === category)
      setFilteredCourses(filtered)
    }
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
      <section className="bg-[#001a0e] py-12">
        <div className="container px-4 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Explore Our Courses</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Browse our comprehensive collection of courses designed to help you master in-demand skills
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4"
          >
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search courses..."
                className="pl-10 bg-[#002713] border-[#003a1c] text-white"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>

            <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={filterByCategory}>
              <TabsList className="bg-[#002713] w-full md:w-auto grid grid-cols-3 md:flex">
                <TabsTrigger value="all" className="data-[state=active]:bg-[#00e676] data-[state=active]:text-black">
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="web-development"
                  className="data-[state=active]:bg-[#00e676] data-[state=active]:text-black"
                >
                  Web Dev
                </TabsTrigger>
                <TabsTrigger
                  value="data-science"
                  className="data-[state=active]:bg-[#00e676] data-[state=active]:text-black"
                >
                  Data Science
                </TabsTrigger>
                <TabsTrigger value="ui-ux" className="data-[state=active]:bg-[#00e676] data-[state=active]:text-black">
                  UI/UX
                </TabsTrigger>
                <TabsTrigger
                  value="mobile-apps"
                  className="data-[state=active]:bg-[#00e676] data-[state=active]:text-black"
                >
                  Mobile
                </TabsTrigger>
                <TabsTrigger
                  value="blockchain"
                  className="data-[state=active]:bg-[#00e676] data-[state=active]:text-black"
                >
                  Blockchain
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredCourses.map((course) => (
              <motion.div key={course.id} variants={item}>
                <div className="bg-[#002713] border border-[#003a1c] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#00e676]/20 hover:translate-y-[-5px]">
                  <div className="relative h-48">
                    <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                    {course.bestseller && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#00e676] text-black px-3 py-1 rounded-full text-sm font-bold">
                          Bestseller
                        </span>
                      </div>
                    )}
                    {course.new && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#00e676] text-black px-3 py-1 rounded-full text-sm font-bold">New</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {course.icon}
                      <span className="text-gray-300 text-sm">{course.categoryName}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                    <p className="text-gray-400 mb-4">{course.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="text-[#00e676] font-bold text-xl">${course.price}</div>
                      <div className="flex items-center gap-1">
                        <div className="text-yellow-400">
                          {"★".repeat(course.rating) + "☆".repeat(5 - course.rating)}
                        </div>
                        <span className="text-gray-300 text-sm">({course.reviews})</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <Link href={`/courses/${course.id}`}>
                      <Button className="w-full bg-[#00e676] hover:bg-[#00c853] text-black font-bold">
                        Enroll Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-[#00e676] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No courses found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Course Categories Section */}
      <section className="py-16 bg-[#002713]">
        <div className="container px-4 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Browse by Category</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore our wide range of course categories to find the perfect fit for your learning goals
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#003a1c] p-6 rounded-lg text-center hover:bg-[#004a24] transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#00e676]/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Code className="h-6 w-6 text-[#00e676]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Web Development</h3>
              <p className="text-gray-300 text-sm">24 courses</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-[#003a1c] p-6 rounded-lg text-center hover:bg-[#004a24] transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#00e676]/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Database className="h-6 w-6 text-[#00e676]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Data Science</h3>
              <p className="text-gray-300 text-sm">18 courses</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#003a1c] p-6 rounded-lg text-center hover:bg-[#004a24] transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#00e676]/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Layout className="h-6 w-6 text-[#00e676]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">UI/UX Design</h3>
              <p className="text-gray-300 text-sm">12 courses</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-[#003a1c] p-6 rounded-lg text-center hover:bg-[#004a24] transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#00e676]/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Smartphone className="h-6 w-6 text-[#00e676]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Mobile Apps</h3>
              <p className="text-gray-300 text-sm">15 courses</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-[#003a1c] p-6 rounded-lg text-center hover:bg-[#004a24] transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#00e676]/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Cpu className="h-6 w-6 text-[#00e676]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Blockchain</h3>
              <p className="text-gray-300 text-sm">8 courses</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#003a1c] p-6 rounded-lg text-center hover:bg-[#004a24] transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#00e676]/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <BookOpen className="h-6 w-6 text-[#00e676]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">All Categories</h3>
              <p className="text-gray-300 text-sm">View all</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Can't Find What You're Looking For?</h2>
              <p className="text-gray-300 text-lg mb-8">
                Contact our team to request specific courses or topics you'd like to learn about.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-[#00e676] hover:bg-[#00c853] text-black font-bold px-8 text-lg">
                  Contact Us
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

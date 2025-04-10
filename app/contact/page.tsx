"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    contactReason: "general",
    preferredContact: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value) => {
    setFormData((prev) => ({ ...prev, contactReason: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      contactReason: "general",
      preferredContact: "",
    })
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
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Have questions about our courses or need help? We're here to assist you. Fill out the form below and we'll
              get back to you as soon as possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card className="bg-[#002713] border-[#003a1c]">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          className="bg-[#001a0e] border-[#003a1c]"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          className="bg-[#001a0e] border-[#003a1c]"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone (Optional)</Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="+1 (555) 123-4567"
                          className="bg-[#001a0e] border-[#003a1c]"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="preferredContact">Preferred Contact Method</Label>
                        <Select
                          value={formData.preferredContact}
                          onValueChange={(value) => handleSelectChange("preferredContact", value)}
                        >
                          <SelectTrigger className="bg-[#001a0e] border-[#003a1c]">
                            <SelectValue placeholder="Select a method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="phone">Phone</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="How can we help you?"
                        className="bg-[#001a0e] border-[#003a1c]"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Reason for Contact</Label>
                      <RadioGroup
                        value={formData.contactReason}
                        onValueChange={handleRadioChange}
                        className="flex flex-col space-y-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="general" id="general" />
                          <Label htmlFor="general" className="font-normal">
                            General Inquiry
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="course" id="course" />
                          <Label htmlFor="course" className="font-normal">
                            Course Specific Question
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="support" id="support" />
                          <Label htmlFor="support" className="font-normal">
                            Technical Support
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="billing" id="billing" />
                          <Label htmlFor="billing" className="font-normal">
                            Billing Question
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Please provide details about your inquiry..."
                        className="bg-[#001a0e] border-[#003a1c] min-h-[150px]"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-[#00e676] hover:bg-[#00c853] text-black font-bold">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="space-y-6">
                <Card className="bg-[#002713] border-[#003a1c]">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-[#00e676] mt-1" />
                        <div>
                          <p className="text-gray-300">Email Us</p>
                          <a href="mailto:support@elitepickz.com" className="text-white hover:text-[#00e676]">
                            support@elitepickz.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-[#00e676] mt-1" />
                        <div>
                          <p className="text-gray-300">Call Us</p>
                          <a href="tel:+18001234567" className="text-white hover:text-[#00e676]">
                            +1 (800) 123-4567
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-[#00e676] mt-1" />
                        <div>
                          <p className="text-gray-300">Location</p>
                          <p className="text-white">
                            123 Learning Street
                            <br />
                            San Francisco, CA 94103
                            <br />
                            United States
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-[#00e676] mt-1" />
                        <div>
                          <p className="text-gray-300">Business Hours</p>
                          <p className="text-white">
                            Monday - Friday: 9am - 6pm
                            <br />
                            Saturday: 10am - 4pm
                            <br />
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#002713] border-[#003a1c]">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Live Chat</h3>
                    <p className="text-gray-300 mb-4">
                      Need immediate assistance? Chat with our support team in real-time.
                    </p>
                    <Button className="w-full bg-[#003a1c] hover:bg-[#004a24] text-white">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Start Live Chat
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-[#002713]">
        <div className="container px-4 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Find Us</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Visit our office or reach out to us online. We're here to help you succeed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden h-[400px] bg-[#001a0e] border border-[#003a1c]"
          >
            {/* This would be replaced with an actual map component */}
            <div className="w-full h-full flex items-center justify-center bg-[#001a0e]">
              <p className="text-gray-400">Interactive Map Would Be Displayed Here</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#001a0e]">
        <div className="container px-4 mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Find quick answers to common questions</p>
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
              className="bg-[#002713] p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-white mb-2">How quickly do you respond to inquiries?</h3>
              <p className="text-gray-300">
                We aim to respond to all inquiries within 24 hours during business days. For urgent matters, we
                recommend using our live chat feature for immediate assistance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-[#002713] p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-white mb-2">Can I visit your office in person?</h3>
              <p className="text-gray-300">
                Yes, you're welcome to visit our office during business hours. We recommend scheduling an appointment in
                advance to ensure someone is available to assist you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#002713] p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-white mb-2">How can I get technical support for a course?</h3>
              <p className="text-gray-300">
                For technical support related to courses, you can use the contact form and select "Technical Support" as
                the reason for contact. Alternatively, you can email our support team directly or use the live chat
                feature.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

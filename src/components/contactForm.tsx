"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useInView } from "react-intersection-observer";
import {
  Linkedin,
  Youtube,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Users,
  FileText,
  AlertCircle,
  Send,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  mobile: z
    .string()
    .min(10, { message: "Please enter a valid mobile number." }),
  category: z.string().min(1, { message: "Please select a category." }),
  message: z
    .string()
    .min(10, { message: "Please tell us more about your query." }),
});

type FormValues = z.infer<typeof formSchema>;

const queryCategories = [
  { id: "course", label: "Course / Blueprint Access" },
  { id: "pocket-money", label: "Pocket Money Program" },
  { id: "affiliate", label: "Affiliate Earnings / Dashboard" },
  { id: "tools", label: "Tool or Plugin Access" },
  { id: "business", label: "Business Collaboration" },
  { id: "other", label: "Something Else" },
];

const contactSections = [
  {
    title: "General Support & Customer Queries",
    icon: <MessageSquare className="h-5 w-5" />,
    details: [
      "Course Access (Free Blueprint / Pro Plan / Expert Suite)",
      "Login Issues or Dashboard Errors",
      "Pocket Money Program Payouts",
      "Software, Tools & Plugin Access",
      "Community or Telegram Group Entry",
    ],
    contact: [
      { type: "Email", value: "support@sportstradex.in" },
      { type: "Phone / WhatsApp", value: "+91-93929-XXXXX" },
      { type: "Response Time", value: "Within 24 business hours" },
      {
        type: "Live Support",
        value: "Monday–Saturday, 10:00 AM – 6:00 PM IST",
      },
    ],
  },
  {
    title: "Affiliate & Partnership Enquiries",
    icon: <Users className="h-5 w-5" />,
    details: [
      "Commission Dashboard Help",
      "Referral Payouts",
      "Tracking Issues / System Bugs",
      "New Partner Applications",
    ],
    contact: [
      { type: "Email", value: "affiliate@sportstradex.in" },
      { type: "WhatsApp", value: "+91-XXXXXXXXXX" },
      { type: "Documentation", value: "https://sportstradex.in/affiliates" },
    ],
  },
  {
    title: "Legal & Compliance",
    icon: <FileText className="h-5 w-5" />,
    details: [
      "Policy-related inquiries",
      "Copyright issues",
      "Disclaimers",
      "Platform compliance",
    ],
    contact: [
      { type: "Compliance Team", value: "legal@sportstradex.in" },
      { type: "Data & Privacy", value: "privacy@sportstradex.in" },
    ],
  },
];

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      category: "",
      message: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log(data);

    toast({
      title: "Form submitted!",
      description: "We'll get back to you within 24-48 hours.",
    });

    form.reset();
    setIsSubmitting(false);
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="w-full py-12 md:py-24 flex justify-center bg-white"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#0a2a2f]">
            Contact SportsTradex — We&apos;re Here to Help You Succeed
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At SportsTradex, we&apos;re committed to guiding learners, creators,
            and sports enthusiasts through every step of their journey in
            skill-based sports trading and analytics.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Contact Info */}
          <motion.div className="space-y-8" variants={containerVariants}>
            {/* Head Office */}
            <motion.div
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
              variants={itemVariants}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#C3FF72] flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-[#0a2a2f]" />
                </div>
                <h2 className="text-xl font-bold text-[#0a2a2f]">
                  Head Office (Registered Address)
                </h2>
              </div>

              <div className="pl-2 border-l-2 border-[#C3FF72] ml-5">
                <p className="text-gray-700 mb-1">
                  SportsTradex Technologies Private Limited
                </p>
                <p className="text-gray-700 mb-1">
                  Level 3, Spaces & More Business Centre
                </p>
                <p className="text-gray-700 mb-1">
                  Plot No. 17, Kavuri Hills, Phase 1
                </p>
                <p className="text-gray-700 mb-1">Madhapur, Hitech City</p>
                <p className="text-gray-700 mb-1">
                  Hyderabad, Telangana – 500081
                </p>
                <p className="text-gray-700 mb-1">India</p>

                <div className="mt-4 space-y-1">
                  <p className="text-gray-700">
                    <span className="font-medium">CIN:</span> [You can insert if
                    registered]
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">GSTIN:</span> [Insert if
                    required]
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Clock className="h-4 w-4 text-[#0a2a2f]" />
                    <p className="text-gray-700">
                      <span className="font-medium">Support Hours:</span> Monday
                      to Saturday, 10:00 AM – 6:00 PM IST
                    </p>
                  </div>
                  <p className="text-gray-700 pl-6">
                    (Sundays and Indian National Holidays – Closed)
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Sections */}
            {contactSections.map((section, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
                variants={itemVariants}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#C3FF72] flex items-center justify-center">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-bold text-[#0a2a2f]">
                    {section.title}
                  </h2>
                </div>

                <div className="pl-2 border-l-2 border-[#C3FF72] ml-5">
                  <p className="font-medium text-gray-700 mb-2">
                    For any questions related to:
                  </p>
                  <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
                    {section.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>

                  <div className="space-y-2 mt-4">
                    {section.contact.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        {item.type.includes("Email") ? (
                          <Mail className="h-4 w-4 text-[#0a2a2f]" />
                        ) : item.type.includes("Phone") ||
                          item.type.includes("WhatsApp") ? (
                          <Phone className="h-4 w-4 text-[#0a2a2f]" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-[#0a2a2f]" />
                        )}
                        <p className="text-gray-700">
                          <span className="font-medium">{item.type}:</span>{" "}
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Media */}
            <motion.div
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
              variants={itemVariants}
            >
              <h2 className="text-xl font-bold text-[#0a2a2f] mb-4">
                Social Media & Community Channels
              </h2>
              <p className="text-gray-700 mb-4">
                Stay updated with announcements, course sneak peeks, platform
                improvements, and real-time insights:
              </p>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <Instagram className="h-5 w-5 text-[#0a2a2f]" />
                  <span className="text-gray-700">@sportstradexindia</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <MessageSquare className="h-5 w-5 text-[#0a2a2f]" />
                  <span className="text-gray-700">Telegram Channel</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <Youtube className="h-5 w-5 text-[#0a2a2f]" />
                  <span className="text-gray-700">SportsTradex Official</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-[#0a2a2f]" />
                  <span className="text-gray-700">
                    SportsTradex Technologies
                  </span>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="rounded-3xl bg-[#C3FF72] p-8 md:p-10 h-fit sticky top-24"
            variants={containerVariants}
          >
            <motion.div className="space-y-6" variants={containerVariants}>
              <motion.div className="space-y-2" variants={itemVariants}>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0a2a2f]">
                  Quick Contact Form
                </h2>
                <p className="text-gray-700 text-sm md:text-base">
                  We respond fastest to detailed form submissions. Fill out the
                  form below and we&apos;ll get back to you within 24-48 hours.
                </p>
              </motion.div>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <motion.div variants={itemVariants}>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#0a2a2f] font-medium">
                            Full Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              className="border-0 border-b border-black/20 rounded-none bg-transparent px-0 py-2 focus-visible:ring-0 focus-visible:border-black"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#0a2a2f] font-medium">
                            Email Address
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="you@example.com"
                              type="email"
                              className="border-0 border-b border-black/20 rounded-none bg-transparent px-0 py-2 focus-visible:ring-0 focus-visible:border-black"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <FormField
                      control={form.control}
                      name="mobile"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#0a2a2f] font-medium">
                            Mobile Number
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your mobile number"
                              type="tel"
                              className="border-0 border-b border-black/20 rounded-none bg-transparent px-0 py-2 focus-visible:ring-0 focus-visible:border-black"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#0a2a2f] font-medium">
                            Category of Query
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="border-0 border-b border-black/20 rounded-none bg-transparent px-0 py-2 focus-visible:ring-0 focus-visible:border-black">
                                <SelectValue placeholder="Select a category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {queryCategories.map((category) => (
                                <SelectItem
                                  key={category.id}
                                  value={category.id}
                                >
                                  {category.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#0a2a2f] font-medium">
                            Your Message
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your query in detail..."
                              className="border-0 border-b border-black/20 rounded-none bg-transparent px-0 py-2 min-h-[120px] focus-visible:ring-0 focus-visible:border-black resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="pt-2">
                    <Button
                      type="submit"
                      className="w-full bg-[#0a2a2f] text-white hover:bg-[#0a2a2f]/90 rounded-lg py-6 flex items-center justify-center gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </Button>
                    <p className="text-xs text-gray-700 mt-3 text-center">
                      Response expected within 24–48 hours (excluding Sundays &
                      holidays)
                    </p>
                  </motion.div>
                </form>
              </Form>
            </motion.div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div className="mt-16" variants={itemVariants}>
          <h2 className="text-2xl font-bold text-[#0a2a2f] mb-6 text-center">
            Find Us
          </h2>
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm h-[400px] bg-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2954088332393!2d78.38106491487767!3d17.44112888804592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x71680e401e6e741!2sKavuri%20Hills%2C%20Phase%201%2C%20Jubilee%20Hills%2C%20Hyderabad%2C%20Telangana%20500033!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SportsTradex Office Location"
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="flex justify-center mt-4">
            <a
              href="https://maps.google.com/?q=Kavuri+Hills+Phase+1+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0a2a2f] hover:text-[#0a2a2f]/70 flex items-center gap-2"
            >
              <MapPin className="h-4 w-4" />
              <span>Get Directions</span>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

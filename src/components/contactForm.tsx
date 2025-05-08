"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useInView } from "react-intersection-observer";
import { Facebook, Twitter, Linkedin, Youtube, Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  project: z
    .string()
    .min(10, { message: "Please tell us a bit more about your project." }),
  services: z.array(z.string()).refine((value) => value.length > 0, {
    message: "Please select at least one service.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const services = [
  { id: "courses", label: "Courses" },
  { id: "affiliate", label: "Affiliate" },
  { id: "pocketmoney", label: "Pocket Money" },
  { id: "content-creation", label: "Content creation" },
  { id: "strategy-consulting", label: "Strategy & consulting" },
  { id: "other", label: "Other" },
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
      project: "",
      services: [],
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log(data);

    toast({
      title: "Form submitted!",
      description: "We'll get back to you soon.",
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
      className="w-full py-12 md:py-28 flex justify-center"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Contact Info */}
          <motion.div className="space-y-8 pt-6" variants={containerVariants}>
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex items-center">
                <span className="font-semibold">Contact Us</span>
              </div>
            </motion.div>

            <motion.div className="space-y-8" variants={containerVariants}>
              <motion.div className="flex space-x-4" variants={itemVariants}>
                <div className="mt-1">
                  <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-600 text-sm">💬</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-semibold">Chat to us</h3>
                  <p className="text-sm text-gray-500 mb-1">
                    Our friendly team is here to help.
                  </p>
                  <p className="text-sm">hi@untitledui.com</p>
                </div>
              </motion.div>

              <motion.div className="flex space-x-4" variants={itemVariants}>
                <div className="mt-1">
                  <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-600 text-sm">📍</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-semibold">Visit us</h3>
                  <p className="text-sm text-gray-500 mb-1">
                    Come say hello at our office HQ.
                  </p>
                  <p className="text-sm">
                    100 Smith Street
                    <br />
                    Collingwood VIC 3066 AU
                  </p>
                </div>
              </motion.div>

              <motion.div className="flex space-x-4" variants={itemVariants}>
                <div className="mt-1">
                  <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-600 text-sm">📞</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-semibold">Call us</h3>
                  <p className="text-sm text-gray-500 mb-1">
                    Mon-Fri from 8am to 5pm.
                  </p>
                  <p className="text-sm">+1 (555) 000-0000</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4 pt-4"
              variants={itemVariants}
            >
              <a
                href="#"
                className="text-gray-500 hover:text-gray-800 transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-800 transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-800 transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-800 transition-colors"
              >
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-800 transition-colors"
              >
                <Globe size={20} />
                <span className="sr-only">Website</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="rounded-3xl bg-[#C3FF72] p-8 md:p-10"
            variants={containerVariants}
          >
            <motion.div className="space-y-6" variants={containerVariants}>
              <motion.div className="space-y-2" variants={itemVariants}>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                  Got ideas? We&apos;ve got <br className="hidden sm:block" />
                  the skills. Let&apos;s team up.
                </h2>
                <p className="text-gray-700 text-sm md:text-base">
                  Tell us more about yourself and what you&apos;re got in mind.
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
                          <FormControl>
                            <Input
                              placeholder="you@company.com"
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
                      name="project"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us a little about the project..."
                              className="border-0 border-b border-black/20 rounded-none bg-transparent px-0 py-2 min-h-[80px] focus-visible:ring-0 focus-visible:border-black resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="pt-2">
                    <p className="mb-4 text-base font-medium">
                      How can we help?
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <FormField
                        control={form.control}
                        name="services"
                        render={() => (
                          <FormItem className="space-y-0">
                            {services.map((service, index) => (
                              <div
                                key={service.id}
                                className={cn(
                                  "flex items-center mb-3",
                                  index >= 3
                                    ? "sm:col-start-2 sm:row-start-1"
                                    : ""
                                )}
                              >
                                <FormField
                                  control={form.control}
                                  name="services"
                                  render={({ field }) => {
                                    return (
                                      <FormItem
                                        key={service.id}
                                        className="flex flex-row items-center space-x-3 space-y-0 m-0"
                                      >
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value?.includes(
                                              service.id
                                            )}
                                            onCheckedChange={(checked) => {
                                              return checked
                                                ? field.onChange([
                                                    ...field.value,
                                                    service.id,
                                                  ])
                                                : field.onChange(
                                                    field.value?.filter(
                                                      (value) =>
                                                        value !== service.id
                                                    )
                                                  );
                                            }}
                                            className="rounded-sm border-black/50 h-5 w-5 data-[state=checked]:bg-black data-[state=checked]:border-black"
                                          />
                                        </FormControl>
                                        <div className="text-sm font-normal">
                                          {service.label}
                                        </div>
                                      </FormItem>
                                    );
                                  }}
                                />
                              </div>
                            ))}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="pt-2">
                    <Button
                      type="submit"
                      className="w-full bg-black text-white hover:bg-black/90 rounded-lg py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Let's get started!"}
                    </Button>
                  </motion.div>
                </form>
              </Form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

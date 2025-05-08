import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Twitter, Instagram, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a2a2f] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="SportsTradex Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <span className="text-xl font-extrabold font-manrope">
                SportsTradex
              </span>
            </Link>
            <p className="text-gray-400 mb-4">
              India&apos;s first structured, skill-based cricket analytics and
              sports trading training platform.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-[#c8f65d] transition duration-300"
              >
                <Twitter className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#c8f65d] transition duration-300"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#c8f65d] transition duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#c8f65d] transition duration-300"
              >
                <Facebook className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-extrabold mb-4 font-manrope">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-[#c8f65d] transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-gray-400 hover:text-[#c8f65d] transition duration-300"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/pocket-money"
                  className="text-gray-400 hover:text-[#c8f65d] transition duration-300"
                >
                  Pocket Money
                </Link>
              </li>
              <li>
                <Link
                  href="/experts"
                  className="text-gray-400 hover:text-[#c8f65d] transition duration-300"
                >
                  Our Experts
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="text-gray-400 hover:text-[#c8f65d] transition duration-300"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-extrabold  mb-4 font-manrope">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#c8f65d] transition duration-300"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#c8f65d] transition duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#c8f65d] transition duration-300"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#c8f65d] transition duration-300"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-extrabold mb-4 font-manrope">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Email: support@sportstradex.in</li>
              <li className="text-gray-400">Phone: +91 98765 43210</li>
              <li className="text-gray-400">Address: Mumbai, India</li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-extrabold mb-2 font-manrope">
                Subscribe to our newsletter
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md w-full text-sm focus:outline-none"
                />
                <Button className="bg-[#c8f65d] hover:bg-[#c8f65d]/75 text-black rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="border-t border-gray-800 pt-8 text-center"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          <p className="text-gray-400 mb-2">
            Built for Responsible Learning. Designed for Smarter Decisions.
          </p>
          <p className="text-gray-500">
            © 2025 SportsTradex.in. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

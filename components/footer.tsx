import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#001208] border-t border-[#003a1c]">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image src="/images/logo.png" alt="ElitePickz" width={160} height={40} className="h-10 w-auto" />
            </Link>
            <p className="text-gray-400 mb-4">
              Premium online courses from verified experts. Helping students succeed since 2018.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-gray-400 hover:text-[#00e676]">
                <Facebook size={20} />
              </Link>
              <Link href="https://twitter.com" className="text-gray-400 hover:text-[#00e676]">
                <Twitter size={20} />
              </Link>
              <Link href="https://instagram.com" className="text-gray-400 hover:text-[#00e676]">
                <Instagram size={20} />
              </Link>
              <Link href="https://youtube.com" className="text-gray-400 hover:text-[#00e676]">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-gray-400 hover:text-[#00e676]">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/students" className="text-gray-400 hover:text-[#00e676]">
                  Our Students
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-400 hover:text-[#00e676]">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-[#00e676]">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#00e676]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Course Categories */}
          <div className="col-span-1">
            <h3 className="text-white font-bold mb-4">Course Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses/web-development" className="text-gray-400 hover:text-[#00e676]">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/courses/mobile-apps" className="text-gray-400 hover:text-[#00e676]">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/courses/data-science" className="text-gray-400 hover:text-[#00e676]">
                  Data Science
                </Link>
              </li>
              <li>
                <Link href="/courses/ui-ux" className="text-gray-400 hover:text-[#00e676]">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/courses/blockchain" className="text-gray-400 hover:text-[#00e676]">
                  Blockchain
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-span-1">
            <h3 className="text-white font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#00e676]">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-[#00e676]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-[#00e676]">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-[#00e676]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-gray-400 hover:text-[#00e676]">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#003a1c] mt-12 pt-6 text-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} ElitePickz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

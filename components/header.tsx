"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-[#001a0e] border-b border-[#003a1c]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.png" alt="ElitePickz" width={180} height={40} className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/courses" className="text-white hover:text-[#00e676] font-medium">
              Courses
            </Link>
            <Link href="/students" className="text-white hover:text-[#00e676] font-medium">
              Our Students
            </Link>
            <Link href="/reviews" className="text-white hover:text-[#00e676] font-medium">
              Reviews
            </Link>
            <Link href="/pricing" className="text-white hover:text-[#00e676] font-medium">
              Pricing
            </Link>
            <Link href="/contact" className="text-white hover:text-[#00e676] font-medium">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="outline" className="border-[#00e676] text-[#00e676] hover:bg-[#00e676]/10">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-[#00e676] hover:bg-[#00c853] text-black font-bold">Sign Up</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#002713] border-t border-[#003a1c]">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/courses"
                className="text-white hover:text-[#00e676] font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </Link>
              <Link
                href="/students"
                className="text-white hover:text-[#00e676] font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Students
              </Link>
              <Link
                href="/reviews"
                className="text-white hover:text-[#00e676] font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link
                href="/pricing"
                className="text-white hover:text-[#00e676] font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-[#00e676] font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-3 pt-4 border-t border-[#003a1c]">
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full border-[#00e676] text-[#00e676] hover:bg-[#00e676]/10">
                    Login
                  </Button>
                </Link>
                <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-[#00e676] hover:bg-[#00c853] text-black font-bold">Sign Up</Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

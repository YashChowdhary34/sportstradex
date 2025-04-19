"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Check for scroll position on both initial load and scroll
  useEffect(() => {
    // Set initial scroll state on component mount
    const initialCheck = () => {
      setScrolled(window.scrollY > 10);
    };

    // Handle scroll events
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    // Run initial check immediately
    initialCheck();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0a2a2f]/90 backdrop-blur-sm shadow-md"
          : "bg-[#0a2a2f]/75 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center transform hover:scale-105 duration-300 ease-in-out"
          >
            <div className="relative h-8 w-auto">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 sm:h-8 sm:w-8 bg-gradient-to-r from-[#4ce1b6] to-[#c8f65d] rounded-md flex items-center justify-center">
                  <div className="h-3 w-5 sm:h-4 sm:w-6 bg-[#0a2a2f] rounded-sm"></div>
                </div>
                <span className="text-white font-bold text-lg sm:text-xl">
                  SportsTradeX
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link
              href="/courses"
              className="text-white hover:text-[#c8f65d] transition-colors text-sm lg:text-base"
            >
              Courses
            </Link>
            <Link
              href="/experts"
              className="text-white hover:text-[#c8f65d] transition-colors text-sm lg:text-base"
            >
              Our Experts
            </Link>
            <Link
              href="/pocketmoney"
              className="text-white hover:text-[#c8f65d] transition-colors text-sm lg:text-base"
            >
              Pocket Money
            </Link>
            <Link
              href="/affiliate"
              className="text-white hover:text-[#c8f65d] transition-colors text-sm lg:text-base"
            >
              Affiliate
            </Link>
            <Link
              href="/reviews"
              className="text-white hover:text-[#c8f65d] transition-colors text-sm lg:text-base"
            >
              Reviews
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-[#c8f65d] transition-colors text-sm lg:text-base"
            >
              Contact
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <Link
              href="/login"
              className="text-white px-4 py-1.5 lg:px-5 lg:py-2 rounded-full border border-white/20 hover:bg-[#c8f65d]/25 transition-colors text-sm"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-[#c8f65d] text-[#0a2a2f] font-medium px-4 py-1.5 lg:px-5 lg:py-2 rounded-full hover:bg-[#c8f65d]/75 transition-colors text-sm"
            >
              Signup
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-[400px] opacity-100 py-2" : "max-h-0 opacity-0"
          )}
        >
          <nav className="flex flex-col space-y-3 pb-3 bg-[#0a2a2f] shadow-lg rounded-lg p-4 border border-white/10">
            <Link
              href="/courses"
              className="text-white/90 hover:text-[#c8f65d] transition-colors text-center py-2 rounded-md hover:bg-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/experts"
              className="text-white/90 hover:text-[#c8f65d] transition-colors text-center py-2 rounded-md hover:bg-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Experts
            </Link>
            <Link
              href="/pocketmoney"
              className="text-white/90 hover:text-[#c8f65d] transition-colors text-center py-2 rounded-md hover:bg-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              Pocket Money
            </Link>
            <Link
              href="/affiliate"
              className="text-white/90 hover:text-[#c8f65d] transition-colors text-center py-2 rounded-md hover:bg-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              Affiliate
            </Link>
            <Link
              href="/reviews"
              className="text-white/90 hover:text-[#c8f65d] transition-colors text-center py-2 rounded-md hover:bg-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </Link>
            <Link
              href="/contact"
              className="text-white/90 hover:text-[#c8f65d] transition-colors text-center py-2 rounded-md hover:bg-white/5"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <Link
                href="/login"
                className="text-white text-center px-3 py-2 rounded-full border border-white/20 hover:bg-[#c8f65d]/25 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-[#c8f65d] text-center text-[#0a2a2f] font-medium px-3 py-2 rounded-full hover:bg-[#c8f65d]/75 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

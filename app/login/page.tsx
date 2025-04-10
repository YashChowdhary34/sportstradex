"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login attempt with:", email, password)
  }

  return (
    <main className="flex flex-col min-h-screen">
      <section className="bg-[#001a0e] py-12">
        <div className="container px-4 mx-auto max-w-md">
          <div className="bg-[#002713] border border-[#003a1c] rounded-xl p-6 md:p-8">
            <div className="text-center mb-6">
              <Link href="/" className="inline-block mb-6">
                <Image src="/images/logo.png" alt="ElitePickz" width={160} height={40} className="h-10 w-auto" />
              </Link>
              <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
              <p className="text-gray-400 mt-2">Sign in to access your account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-[#001a0e] border-[#003a1c]"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="/forgot-password" className="text-sm text-[#00e676] hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-[#001a0e] border-[#003a1c]"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm font-normal">
                  Remember me
                </Label>
              </div>

              <Button type="submit" className="w-full bg-[#00e676] hover:bg-[#00c853] text-black font-bold">
                Sign In
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Don't have an account?{" "}
                <Link href="/signup" className="text-[#00e676] hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

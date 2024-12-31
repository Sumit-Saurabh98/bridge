'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-indigo-900">Blog</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-600 hover:text-indigo-600">Home</Link>
            <Link href="/posts" className="text-slate-600 hover:text-indigo-600">Posts</Link>
            <Link href="/about" className="text-slate-600 hover:text-indigo-600">About</Link>
            <Link href="/contact" className="text-slate-600 hover:text-indigo-600">Contact</Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" className="text-slate-600 hover:text-indigo-600">
                Sign in
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-slate-600" />
            ) : (
              <Menu className="h-6 w-6 text-slate-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-slate-600 hover:text-indigo-600 px-4">Home</Link>
              <Link href="/posts" className="text-slate-600 hover:text-indigo-600 px-4">Posts</Link>
              <Link href="/about" className="text-slate-600 hover:text-indigo-600 px-4">About</Link>
              <Link href="/contact" className="text-slate-600 hover:text-indigo-600 px-4">Contact</Link>
              <hr className="border-slate-200" />
              <Link href="/login" className="text-slate-600 hover:text-indigo-600 px-4">Sign in</Link>
              <Link href="/register" className="text-slate-600 hover:text-indigo-600 px-4">Get Started</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
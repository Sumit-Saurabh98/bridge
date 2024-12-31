'use client'

import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* 404 Number */}
        <div className="relative">
          <div className="text-[200px] font-bold text-indigo-900/10 leading-none select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl md:text-5xl font-bold text-indigo-900 bg-gradient-to-br from-indigo-600 to-indigo-900 bg-clip-text text-transparent">
              Page Not Found
            </div>
          </div>
        </div>

        {/* Illustration */}
        <div className="w-64 h-64 mx-auto relative">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full text-indigo-600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="100" cy="100" r="80" className="stroke-current" strokeWidth="6" strokeLinecap="round" strokeDasharray="15 15" />
            <circle cx="100" cy="100" r="40" className="stroke-current opacity-50" strokeWidth="6" strokeLinecap="round" strokeDasharray="10 10" />
            <path 
              d="M100 60 L100 140 M60 100 L140 100" 
              className="stroke-current" 
              strokeWidth="6" 
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Message */}
        <div className="space-y-4">
          <h2 className="text-xl text-slate-600">
            Oops! It seems we&apos;ve ventured into uncharted territory.
          </h2>
          <p className="text-slate-500 max-w-md mx-auto">
            The page you&apos;re looking for might have been moved, deleted, or possibly never existed. 
            Let&apos;s get you back on track!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="bg-indigo-600 text-white hover:bg-indigo-700 w-full sm:w-auto">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <Button 
            variant="outline" 
            className="text-indigo-600 border-indigo-600 hover:bg-indigo-50 w-full sm:w-auto"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>

        {/* Help Link */}
        <div className="text-sm text-slate-500">
          Need help? {" "}
          <Link href="/contact" className="text-indigo-600 hover:text-indigo-500 font-medium">
            Contact our support team
          </Link>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/5 rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-indigo-500/5 rounded-full animate-pulse delay-1000" />
          <div className="absolute top-3/4 left-1/2 w-32 h-32 bg-indigo-500/5 rounded-full animate-pulse delay-2000" />
        </div>
      </div>
    </div>
  )
}
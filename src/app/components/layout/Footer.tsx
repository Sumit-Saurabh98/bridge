import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-indigo-900">Blog</h3>
            <p className="text-slate-600">
              Sharing thoughts, ideas, and stories that matter.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-slate-700">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-600 hover:text-indigo-600">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-indigo-600">Contact</Link>
              </li>
              <li>
                <Link href="/posts" className="text-slate-600 hover:text-indigo-600">All Posts</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-slate-700">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-slate-600 hover:text-indigo-600">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-600 hover:text-indigo-600">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-slate-700">Stay Updated</h4>
            <p className="text-slate-600">Subscribe to our newsletter</p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-center text-slate-600">
            © {new Date().getFullYear()} Blog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
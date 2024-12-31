// Landing.tsx
'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

// Sample posts data
const posts = [
  {
    id: 1,
    title: "The Future of Web Development",
    excerpt: "Exploring the latest trends and technologies shaping the web development landscape.",
    image: "https://cdn.pixabay.com/photo/2017/10/10/21/47/laptop-2838921_1280.jpg",
    category: "Technology"
  },
  {
    id: 2,
    title: "Mastering React Hooks",
    excerpt: "A comprehensive guide to using React Hooks effectively in your applications.",
    image: "/api/placeholder/800/401",
    category: "Programming"
  },
  {
    id: 3,
    title: "UI Design Principles",
    excerpt: "Essential principles for creating beautiful and functional user interfaces.",
    image: "/api/placeholder/800/402",
    category: "Design"
  },
  {
    id: 4,
    title: "The Art of Storytelling",
    excerpt: "How to craft compelling narratives that engage and inspire your readers.",
    image: "/api/placeholder/800/403",
    category: "Writing"
  }
]

export default function Landing() {
  // State for hero post
  const [heroPost, setHeroPost] = useState(posts[0]) // Initialize with first post
  const [mounted, setMounted] = useState(false)
  
  // State for featured posts slider
  const [currentIndex, setCurrentIndex] = useState(0)
  const postsPerSlide = 3
  const maxIndex = Math.ceil(posts.length / postsPerSlide) - 1

  // Move random selection to useEffect
  useEffect(() => {
    const randomPost = posts[Math.floor(Math.random() * posts.length)]
    setHeroPost(randomPost)
    setMounted(true)
  }, [])

  const nextSlide = () => {
    setCurrentIndex(current => current === maxIndex ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrentIndex(current => current === 0 ? maxIndex : current - 1)
  }

  // Don't render content until after client-side hydration
  if (!mounted) {
    return null // or a loading skeleton
  }


  return (
    <main className="flex-1">
      {/* Hero Section */}
     <section className="relative h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroPost.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/80 to-indigo-900/90"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
          <div className="flex flex-col justify-center h-full max-w-2xl">
            <span className="text-indigo-200 text-sm font-medium mb-2">
              {heroPost.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {heroPost.title}
            </h1>
            <p className="text-xl text-indigo-100 mb-8">
              {heroPost.excerpt}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-indigo-600 hover:bg-indigo-50">
                Read Article
              </Button>
              <Button variant="outline" className="text-white border-white bg-transparent hover:bg-white/10">
                Explore More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Slider */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-indigo-900">Featured Posts</h2>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="icon"
                onClick={prevSlide}
                className="rounded-full"
                disabled={currentIndex === 0}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                onClick={nextSlide}
                className="rounded-full"
                disabled={currentIndex === maxIndex}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full flex-shrink-0">
                {posts.slice(currentIndex * postsPerSlide, (currentIndex * postsPerSlide) + postsPerSlide).map((post) => (
                  <div key={post.id} className="group relative h-[400px] rounded-lg overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${post.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-sm font-medium text-indigo-200 mb-2 block">
                        {post.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {post.title}
                      </h3>
                      <p className="text-slate-200 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <Link 
                        href={`/post/${post.id}`}
                        className="inline-flex items-center text-white hover:text-indigo-200"
                      >
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to start writing?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join our community of writers and share your stories with the world.
          </p>
          <Link href="/register">
            <Button className="bg-white text-indigo-600 hover:bg-indigo-50">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
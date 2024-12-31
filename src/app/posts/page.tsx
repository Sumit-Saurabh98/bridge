'use client'

import { Button } from "@/components/ui/button"
import { IPost } from "@/lib/interfaces"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

// Sample posts data with categories
const posts = [
  {
    _id: "1",
    title: "Understanding React 18's New Features",
    content: "Dive deep into the latest React features and how they improve performance.",
    image: "/api/placeholder/800/400",
    category: "Technology",
    author: "John Doe",
    createdAt: new Date("2024-03-15")
  },
  {
    _id: "2",
    title: "The Future of AI in Business",
    content: "How artificial intelligence is reshaping modern business landscapes.",
    image: "/api/placeholder/800/401",
    category: "Business",
    author: "Jane Smith",
    createdAt: new Date("2024-03-14")
  },
  {
    _id: "3",
    title: "Cryptocurrency Market Analysis",
    content: "A detailed look at current crypto trends and future predictions.",
    image: "/api/placeholder/800/402",
    category: "Share Market",
    author: "Mike Johnson",
    createdAt: new Date("2024-03-13")
  },
  {
    _id: "4",
    title: "Mobile App Development Trends",
    content: "Latest trends in mobile app development for 2024.",
    image: "/api/placeholder/800/403",
    category: "Technology",
    author: "Sarah Williams",
    createdAt: new Date("2024-03-12")
  },
  {
    _id: "5",
    title: "Small Business Growth Strategies",
    content: "Effective strategies for scaling your small business.",
    image: "/api/placeholder/800/404",
    category: "Business",
    author: "David Brown",
    createdAt: new Date("2024-03-11")
  },
  {
    _id: "6",
    title: "Stock Market Prediction Models",
    content: "Advanced techniques for predicting market movements.",
    image: "/api/placeholder/800/405",
    category: "Share Market",
    author: "Emma Davis",
    createdAt: new Date("2024-03-10")
  },
  {
    _id: "7",
    title: "Understanding React 18's New Features",
    content: "Dive deep into the latest React features and how they improve performance.",
    image: "/api/placeholder/800/400",
    category: "Technology",
    author: "John Doe",
    createdAt: new Date("2024-03-15")
  },
  {
    _id: "8",
    title: "The Future of AI in Business",
    content: "How artificial intelligence is reshaping modern business landscapes.",
    image: "/api/placeholder/800/401",
    category: "Business",
    author: "Jane Smith",
    createdAt: new Date("2024-03-14")
  },
  {
    _id: "9",
    title: "Cryptocurrency Market Analysis",
    content: "A detailed look at current crypto trends and future predictions.",
    image: "/api/placeholder/800/402",
    category: "Share Market",
    author: "Mike Johnson",
    createdAt: new Date("2024-03-13")
  },
  {
    _id: "10",
    title: "Mobile App Development Trends",
    content: "Latest trends in mobile app development for 2024.",
    image: "/api/placeholder/800/403",
    category: "Technology",
    author: "Sarah Williams",
    createdAt: new Date("2024-03-12")
  },
  {
    _id: "11",
    title: "Small Business Growth Strategies",
    content: "Effective strategies for scaling your small business.",
    image: "/api/placeholder/800/404",
    category: "Business",
    author: "David Brown",
    createdAt: new Date("2024-03-11")
  },
  {
    _id: "12",
    title: "Stock Market Prediction Models",
    content: "Advanced techniques for predicting market movements.",
    image: "/api/placeholder/800/405",
    category: "Share Market",
    author: "Emma Davis",
    createdAt: new Date("2024-03-10")
  },

  {
    _id: "13",
    title: "Understanding React 18's New Features",
    content: "Dive deep into the latest React features and how they improve performance.",
    image: "/api/placeholder/800/400",
    category: "Technology",
    author: "John Doe",
    createdAt: new Date("2024-03-15")
  },
  {
    _id: "14",
    title: "The Future of AI in Business",
    content: "How artificial intelligence is reshaping modern business landscapes.",
    image: "/api/placeholder/800/401",
    category: "Business",
    author: "Jane Smith",
    createdAt: new Date("2024-03-14")
  },
  {
    _id: "15",
    title: "Cryptocurrency Market Analysis",
    content: "A detailed look at current crypto trends and future predictions.",
    image: "/api/placeholder/800/402",
    category: "Share Market",
    author: "Mike Johnson",
    createdAt: new Date("2024-03-13")
  },
  {
    _id: "16",
    title: "Mobile App Development Trends",
    content: "Latest trends in mobile app development for 2024.",
    image: "/api/placeholder/800/403",
    category: "Technology",
    author: "Sarah Williams",
    createdAt: new Date("2024-03-12")
  },
  {
    _id: "17",
    title: "Small Business Growth Strategies",
    content: "Effective strategies for scaling your small business.",
    image: "/api/placeholder/800/404",
    category: "Business",
    author: "David Brown",
    createdAt: new Date("2024-03-11")
  },
  {
    _id: "18",
    title: "Stock Market Prediction Models",
    content: "Advanced techniques for predicting market movements.",
    image: "/api/placeholder/800/405",
    category: "Share Market",
    author: "Emma Davis",
    createdAt: new Date("2024-03-10")
  }
]

// Get unique categories
const categories = Array.from(new Set(posts.map(post => post.category)))

function PostSlider({ posts, category }: { posts: IPost[], category: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const postsInCategory = posts.filter(post => post.category === category)
  const postsPerSlide = 3
  const maxIndex = Math.max(0, Math.ceil(postsInCategory.length / postsPerSlide) - 1)

  const nextSlide = () => {
    setCurrentIndex(current => current === maxIndex ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrentIndex(current => current === 0 ? maxIndex : current - 1)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-indigo-900">{category}</h2>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="icon"
            onClick={prevSlide}
            className="rounded-full"
            disabled={maxIndex === 0}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            onClick={nextSlide}
            className="rounded-full"
            disabled={maxIndex === 0}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full flex-shrink-0">
            {postsInCategory
              .slice(currentIndex * postsPerSlide, (currentIndex * postsPerSlide) + postsPerSlide)
              .map((post) => (
                <div key={post._id} className="group relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center space-x-2 text-sm text-indigo-200 mb-2">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-200 mb-4 line-clamp-2">
                      {post.content}
                    </p>
                    <Link 
                      href={`/post/${post._id}`}
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
  )
}

export default function AllPosts() {
  const [heroPost, setHeroPost] = useState(posts[0])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const randomPost = posts[Math.floor(Math.random() * posts.length)]
    setHeroPost(randomPost)
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-indigo-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[500px] mb-16">
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {heroPost.title}
            </h1>
            <p className="text-xl text-indigo-100 mb-8">
              {heroPost.content}
            </p>
            <div className="flex items-center space-x-4 text-indigo-200 mb-8">
              <span>{heroPost.author}</span>
              <span>•</span>
              <span>{heroPost.createdAt ? new Date(heroPost.createdAt).toLocaleDateString() : 'Unknown'}</span>
            </div>
            <Link href={`/post/${heroPost._id}`}>
              <Button className="bg-white text-indigo-600 hover:bg-indigo-50">
                Read Article
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Category Sections */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-16">
        {categories.map((category) => (
          <PostSlider 
            key={category} 
            category={category} 
            posts={posts}
          />
        ))}
      </div>
    </main>
  )
}
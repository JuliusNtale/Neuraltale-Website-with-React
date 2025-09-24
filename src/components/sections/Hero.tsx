'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Logo from '@/components/ui/Logo'
import dynamic from 'next/dynamic'

// Lazy load heavy animations
const MotionDiv = dynamic(() => 
  import('framer-motion').then(mod => ({ default: mod.motion.div })), 
  { ssr: false }
)

const FloatingElements = dynamic(() => 
  import('./HeroFloatingElements'), 
  { 
    ssr: false,
    loading: () => <div className="absolute inset-0" /> // Placeholder
  }
)

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Static Background - No animation for better performance */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-transparent z-10" />
      
      {/* Lazy loaded floating elements */}
      <FloatingElements />

      {/* Main Content - Critical path, loads immediately */}
      <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Logo size="lg" showText={true} layout="vertical" />
          </div>

          {/* Main Heading - No animation initially for faster LCP */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            <span className="block">Building Tomorrow's</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Tech Solutions
            </span>
            <span className="block text-gray-700">Today</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            From cutting-edge equipment to custom software, we deliver integrated technology 
            solutions that transform businesses and empower communities across Africa.
          </p>

          {/* CTA Buttons - Critical, load immediately */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/services">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Explore Our Services
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                Get a Quote
              </button>
            </Link>
          </div>

          {/* Scroll indicator - Static for performance */}
          <div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={scrollToServices}
          >
            <div className="flex flex-col items-center text-gray-400 hover:text-blue-600 transition-colors">
              <span className="text-sm mb-2">Scroll to explore</span>
              <ChevronDown className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

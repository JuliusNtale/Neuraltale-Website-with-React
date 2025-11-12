'use client'

import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Logo from '@/components/ui/Logo'
import dynamic from 'next/dynamic'

// Lazy load DarkVeil after initial render - not critical for LCP
const DarkVeil = dynamic(() => import('../reactbits/DarkVeil'), { 
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
})

export default function Hero() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* DarkVeil Background - Lazy loaded */}
      <div className="absolute inset-0 w-full h-full z-10">
        <DarkVeil  />
      </div>

      {/* Main Content - Critical path, loads immediately */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Logo - Render immediately */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <Logo size="lg" showText={true} layout="vertical" />
          </div>

          {/* Main Heading - Static HTML for instant LCP */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in-up">
            <span className="block">Building Tomorrow's</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Tech Solutions
            </span>
            <span className="block text-gray-200">Today</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto animate-fade-in-up animation-delay-200">
            From cutting-edge equipment to custom software, we deliver integrated technology 
            solutions that transform businesses and empower communities across Africa.
          </p>

          {/* CTA Buttons - Critical, load immediately */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
            <Link href="/services">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Explore Our Services
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-gray-300 text-gray-200 px-8 py-4 rounded-xl text-lg font-semibold hover:border-blue-400 hover:text-blue-400 hover:bg-white/10 transition-all duration-300">
                Get a Quote
              </button>
            </Link>
          </div>

          {/* Scroll indicator */}
          <div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
            onClick={scrollToServices}
          >
            <div className="flex flex-col items-center text-gray-300 hover:text-blue-400 transition-colors">
              <span className="text-sm mb-2">Scroll to explore</span>
              <ChevronDown className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

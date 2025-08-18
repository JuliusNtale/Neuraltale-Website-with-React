'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Sparkles, Zap, Code } from 'lucide-react'
import Link from 'next/link'
import Logo from '@/components/ui/Logo'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-transparent z-10" />
      
      {/* Floating 3D Elements */}
      <div className="absolute inset-0 z-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className={`w-16 h-16 border-2 border-neon-blue/30 rotate-45 animate-pulse-neon ${
              i % 2 ? 'bg-gradient-to-br from-transparent to-neon-blue/10' : 'bg-gradient-to-br from-transparent to-neon-purple/10'
            }`} />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Floating Icons */}
          <div className="flex justify-center space-x-8 mb-8">
            {[Sparkles, Zap, Code].map((Icon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.2 }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="p-4 rounded-full glass neon-blue"
              >
                <Icon className="w-8 h-8 text-neon-blue" />
              </motion.div>
            ))}
          </div>

          {/* Company Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="mb-8"
          >
            <Logo size="xl" showText={false} className="justify-center" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
          >
            <span className="gradient-text">NEURALTALE</span>
            <br />
            <span className="text-gray-900 text-3xl md:text-4xl lg:text-5xl font-light">Where Technology Solves</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Professional equipment supply, custom software development, and IT solutions. 
            Delivering intelligent technology that solves problems, empowers people, and accelerates progress.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold text-lg rounded-lg neon-blue shadow-2xl relative overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-neon-blue text-neon-blue font-bold text-lg rounded-lg hover:bg-neon-blue hover:text-dark-bg transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">See Our Services</span>
                <div className="absolute inset-0 bg-neon-blue transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-gray-300 text-gray-700 font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              <span className="relative z-10">Contact Us</span>
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={scrollToServices}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-gray-400 hover:text-neon-blue transition-colors"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Mouse Follower Effect */}
      <motion.div
        className="fixed w-32 h-32 rounded-full pointer-events-none z-40 mix-blend-difference"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)',
        }}
        animate={{
          x: mousePosition.x - 64,
          y: mousePosition.y - 64,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      />
    </section>
  )
}

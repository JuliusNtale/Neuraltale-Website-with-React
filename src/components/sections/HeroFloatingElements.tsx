'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Zap, Code } from 'lucide-react'

export default function HeroFloatingElements() {
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

  return (
    <>
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
            <div className={`w-16 h-16 border-2 border-blue-600/30 rotate-45 ${
              i % 2 ? 'bg-gradient-to-br from-transparent to-blue-600/10' : 'bg-gradient-to-br from-transparent to-purple-600/10'
            }`} />
          </motion.div>
        ))}
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 z-25">
        {[Sparkles, Zap, Code].map((Icon, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + index * 0.2 }}
            whileHover={{ scale: 1.2, rotate: 360 }}
            className="absolute p-4 rounded-full bg-white/20 backdrop-blur-sm border border-blue-200"
            style={{
              left: `${10 + index * 25}%`,
              top: `${20 + index * 15}%`,
            }}
          >
            <Icon className="w-8 h-8 text-blue-600" />
          </motion.div>
        ))}
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
    </>
  )
}

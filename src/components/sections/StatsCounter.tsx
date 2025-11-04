'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { Users, Server, Shield, Award, TrendingUp, Zap } from 'lucide-react'
import type { Stat } from '@/types'

const stats: Stat[] = [
  {
    id: '1',
    value: 1000,
    label: 'Happy Clients',
    suffix: '+',
  },
  {
    id: '2',
    value: 99.9,
    label: 'Uptime',
    suffix: '%',
  },
  {
    id: '3',
    value: 500,
    label: 'Projects Completed',
    suffix: '+',
  },
  {
    id: '4',
    value: 24,
    label: 'Support',
    suffix: '/7',
  },
  {
    id: '5',
    value: 50,
    label: 'Team Members',
    suffix: '+',
  },
  {
    id: '6',
    value: 95,
    label: 'Client Satisfaction',
    suffix: '%',
  }
]

const statIcons = [Users, TrendingUp, Award, Shield, Server, Zap]

const StatCard = ({ stat, icon: Icon, index, inView }: { 
  stat: Stat; 
  icon: any; 
  index: number; 
  inView: boolean; 
}) => {
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [inView, hasAnimated])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: 'spring',
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        rotateY: 5,
      }}
      className="relative group"
    >
      {/* Card Container */}
      <div className="glass rounded-2xl p-8 text-center border border-gray-700 relative overflow-hidden transition-all duration-500 group-hover:border-neon-blue/50">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-neon-blue rounded-full"
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={inView ? { scale: 1, rotate: 0 } : {}}
          transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
          whileHover={{ rotate: 360, scale: 1.2 }}
          className="w-16 h-16 mx-auto mb-6 p-4 rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple neon-blue relative z-10"
        >
          <Icon className="w-full h-full text-white" />
        </motion.div>

        {/* Value */}
        <div className="relative z-10 mb-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: index * 0.1 + 0.5, type: 'spring', stiffness: 200 }}
            className="text-4xl md:text-5xl font-bold gradient-text"
          >
            {hasAnimated ? (
              <CountUp
                start={0}
                end={stat.value}
                duration={2.5}
                delay={index * 0.2}
                decimals={stat.value % 1 !== 0 ? 1 : 0}
                suffix={stat.suffix || ''}
                prefix={stat.prefix || ''}
              />
            ) : (
              '0'
            )}
          </motion.div>
        </div>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: index * 0.1 + 0.7 }}
          className="text-gray-300 font-medium text-lg relative z-10"
        >
          {stat.label}
        </motion.p>

        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-[1px] rounded-2xl bg-dark-bg" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink animate-gradient-shift blur-sm" />
        </div>
      </div>

      {/* Floating Ring */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-neon-blue/20 pointer-events-none"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  )
}

export default function StatsCounter() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  })

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/3 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Our Impact in Numbers</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Measurable results that demonstrate our commitment to excellence and innovation
          </p>
        </motion.div>

        {/* Stats Grid - Hide last 3 stats on mobile using CSS only */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.id} 
              className={`${index >= 3 ? 'hidden md:block' : ''}`}
            >
              <StatCard
                stat={stat}
                icon={statIcons[index]}
                index={index}
                inView={inView}
              />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 text-center "
        >
          <div className="glass rounded-2xl p-8 border border-gray-700 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to join these numbers?
            </h3>
            <p className="text-gray-300 mb-6">
              Join businesses and communities who have transformed their operations with NEURALTALE
            </p>
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold text-lg rounded-lg shadow-2xl relative overflow-hidden group"
              >
                <span className="relative z-10">Start Your Journey</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-pink"
                  initial={{ x: '100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => {
            // Predefined positions to avoid hydration mismatches
            const positions = [
              { left: 15.2, top: 20.1 },
              { left: 85.4, top: 75.3 },
              { left: 45.7, top: 35.8 },
              { left: 72.1, top: 60.2 },
              { left: 28.6, top: 85.7 },
              { left: 62.3, top: 15.4 },
              { left: 8.9, top: 55.1 },
              { left: 93.2, top: 40.8 }
            ]
            const position = positions[i] || { left: 50, top: 50 }
            const duration = 8 + (i * 0.5) // Deterministic duration based on index
            const delay = i * 0.25 // Deterministic delay based on index
            
            return (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${position.left}%`,
                  top: `${position.top}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, -10, 0],
                  rotate: [0, 180, 360],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: delay,
                }}
              >
                <div className="w-2 h-2 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

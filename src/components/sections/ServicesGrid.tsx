'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { 
  Brain, 
  Cloud, 
  Shield, 
  Smartphone, 
  Database, 
  Cpu,
  Network,
  Bot,
  ArrowRight,
  Repeat2
} from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import type { Service } from '@/types'

const services: Service[] = [
  {
    id: '1',
    title: 'Equipment Supply',
    description: 'Networking devices, IoT technology, computers, and accessories from trusted global partners.',
    icon: 'Network',
    features: ['Networking Devices', 'IoT Technology', 'Computer Hardware', 'Tech Accessories'],
    color: 'blue'
  },
  {
    id: '2',
    title: 'Custom Software',
    description: 'Enterprise solutions, mobile apps, automation tools, and AI-powered systems tailored to your needs.',
    icon: 'Brain',
    features: ['Enterprise Solutions', 'Mobile Apps', 'Automation Tools', 'AI Systems'],
    color: 'blue'
  },
  {
    id: '3',
    title: 'Technical Services',
    description: 'Setup, integration, cybersecurity implementation, and ongoing technical support.',
    icon: 'Shield',
    features: ['System Setup', 'Integration', 'Cybersecurity', 'Ongoing Support'],
    color: 'blue'
  },
  {
    id: '4',
    title: 'Security Services',
    description: 'Physical security solutions including CCTV surveillance, access control, automated gates, and perimeter security.',
    icon: 'Shield',
    features: ['CCTV Systems', 'Access Control', 'Automated Gates', 'Perimeter Security'],
    color: 'blue'
  },
  {
    id: '5',
    title: 'IT Consulting',
    description: 'Strategic technology planning and digital transformation guidance for your business.',
    icon: 'Cpu',
    features: ['Strategy Planning', 'Digital Transformation', 'Technology Assessment', 'Implementation'],
    color: 'blue'
  },
  {
    id: '6',
    title: 'System Integration',
    description: 'Seamless integration of hardware and software solutions for optimal performance.',
    icon: 'Database',
    features: ['Hardware Integration', 'Software Integration', 'Performance Optimization', 'Testing'],
    color: 'blue'
  },
  {
    id: '7',
    title: 'Maintenance & Support',
    description: 'Comprehensive maintenance services and 24/7 technical support for all your systems.',
    icon: 'Bot',
    features: ['24/7 Support', 'Preventive Maintenance', 'Remote Monitoring', 'Emergency Response'],
    color: 'blue'
  }
]

const iconMap = {
  Brain,
  Cloud,
  Shield,
  Smartphone,
  Database,
  Cpu,
  Network,
  Bot
}

const colorClasses = {
  professional: {
    gradient: 'from-gray-900 to-black',
    glow: 'shadow-lg hover:shadow-orange-200/20',
    border: 'border-gray-200 dark:border-gray-700',
    text: 'text-orange-600',
    bgGradient: 'from-white to-gray-50 dark:from-gray-900 dark:to-black',
    hover: 'hover:from-orange-500/5 hover:via-orange-500/3 hover:to-transparent',
    iconGradient: 'from-blue-600 to-blue-700',
    shadow: 'rgba(249,115,22,0.3)'
  },
  blue: {
    gradient: 'from-gray-900 to-black',
    glow: 'shadow-lg hover:shadow-orange-200/20',
    border: 'border-gray-200 dark:border-gray-700',
    text: 'text-orange-600',
    bgGradient: 'from-white to-gray-50 dark:from-gray-900 dark:to-black',
    hover: 'hover:from-orange-500/5 hover:via-orange-500/3 hover:to-transparent',
    iconGradient: 'from-blue-600 to-blue-700',
    shadow: 'rgba(249,115,22,0.3)'
  },
  purple: {
    gradient: 'from-gray-900 to-black',
    glow: 'shadow-lg hover:shadow-orange-200/20',
    border: 'border-gray-200 dark:border-gray-700',
    text: 'text-orange-600',
    bgGradient: 'from-white to-gray-50 dark:from-gray-900 dark:to-black',
    hover: 'hover:from-orange-500/5 hover:via-orange-500/3 hover:to-transparent',
    iconGradient: 'from-blue-600 to-blue-700',
    shadow: 'rgba(249,115,22,0.3)'
  },
  pink: {
    gradient: 'from-gray-900 to-black',
    glow: 'shadow-lg hover:shadow-orange-200/20',
    border: 'border-gray-200 dark:border-gray-700',
    text: 'text-orange-600',
    bgGradient: 'from-white to-gray-50 dark:from-gray-900 dark:to-black',
    hover: 'hover:from-orange-500/5 hover:via-orange-500/3 hover:to-transparent',
    iconGradient: 'from-blue-600 to-blue-700',
    shadow: 'rgba(249,115,22,0.3)'
  },
  green: {
    gradient: 'from-gray-900 to-black',
    glow: 'shadow-lg hover:shadow-orange-200/20',
    border: 'border-gray-200 dark:border-gray-700',
    text: 'text-orange-600',
    bgGradient: 'from-white to-gray-50 dark:from-gray-900 dark:to-black',
    hover: 'hover:from-orange-500/5 hover:via-orange-500/3 hover:to-transparent',
    iconGradient: 'from-blue-600 to-blue-700',
    shadow: 'rgba(249,115,22,0.3)'
  },
  yellow: {
    gradient: 'from-gray-900 to-black',
    glow: 'shadow-lg hover:shadow-orange-200/20',
    border: 'border-gray-200 dark:border-gray-700',
    text: 'text-orange-600',
    bgGradient: 'from-white to-gray-50 dark:from-gray-900 dark:to-black',
    hover: 'hover:from-orange-500/5 hover:via-orange-500/3 hover:to-transparent',
    iconGradient: 'from-blue-600 to-blue-700',
    shadow: 'rgba(249,115,22,0.3)'
  },
  indigo: {
    gradient: 'from-gray-900 to-black',
    glow: 'shadow-lg hover:shadow-orange-200/20',
    border: 'border-gray-200 dark:border-gray-700',
    text: 'text-orange-600',
    bgGradient: 'from-white to-gray-50 dark:from-gray-900 dark:to-black',
    hover: 'hover:from-orange-500/5 hover:via-orange-500/3 hover:to-transparent',
    iconGradient: 'from-orange-500 to-orange-600',
    shadow: 'rgba(249,115,22,0.3)'
  },
  red: {
    gradient: 'from-gray-900 to-black',
    glow: 'shadow-lg hover:shadow-orange-200/20',
    border: 'border-gray-200 dark:border-gray-700',
    text: 'text-orange-600',
    bgGradient: 'from-white to-gray-50 dark:from-gray-900 dark:to-black',
    hover: 'hover:from-orange-500/5 hover:via-orange-500/3 hover:to-transparent',
    iconGradient: 'from-orange-500 to-orange-600',
    shadow: 'rgba(249,115,22,0.3)'
  }
}

// Service Card Flip Component
function ServiceCardFlip({ service, index, inView }: { service: Service; index: number; inView: boolean }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const IconComponent = iconMap[service.icon as keyof typeof iconMap]
  const colors = colorClasses[service.color]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: 'spring',
        stiffness: 100
      }}
      className="relative w-full max-w-[320px] h-[380px] group [perspective:2000px] mx-auto"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={cn(
          "relative w-full h-full",
          "[transform-style:preserve-3d]",
          "transition-all duration-700",
          isFlipped
            ? "[transform:rotateY(180deg)]"
            : "[transform:rotateY(0deg)]"
        )}
      >
        {/* Front of card */}
        <div
          className={cn(
            "absolute inset-0 w-full h-full",
            "[backface-visibility:hidden] [transform:rotateY(0deg)]",
            "overflow-hidden rounded-2xl",
            "bg-white dark:bg-zinc-900",
            `border ${colors.border}`,
            colors.glow,
            "transition-all duration-700",
            "group-hover:shadow-xl",
            isFlipped ? "opacity-0" : "opacity-100"
          )}
        >
          {/* Animated Icon Background */}
          <div className={`relative h-full overflow-hidden bg-gradient-to-b ${colors.bgGradient}`}>
            <div className="absolute inset-0 flex items-start justify-center pt-16">
              <div className="relative w-[200px] h-[120px] flex items-center justify-center">
                {/* Animated particles behind icon */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={cn(
                      "absolute w-[30px] h-[30px]",
                      "rounded-full",
                      "opacity-0",
                      "shadow-[0_0_20px_rgba(249,115,22,0.4)]"
                    )}
                    animate={{
                      scale: [1.5, 1, 0.3],
                      opacity: [0, 0.7, 0],
                      y: [0, -3, 3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "linear"
                    }}
                  />
                ))}
                
                {/* Main service icon */}
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className={`
                    relative z-10 w-20 h-20 p-5 rounded-xl bg-gradient-to-br ${colors.iconGradient}
                    shadow-xl border border-slate-300/20
                  `}
                >
                  <IconComponent className="w-full h-full text-white" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Front card content */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center justify-between gap-3">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight transition-all duration-500 ease-out group-hover:translate-y-[-4px]">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 tracking-tight transition-all duration-500 ease-out group-hover:translate-y-[-4px] delay-75">
                  {service.description.slice(0, 80)}...
                </p>
              </div>
              <div className="relative group/icon">
                <div
                  className={cn(
                    "absolute inset-[-8px] rounded-lg transition-opacity duration-300",
                    "bg-gradient-to-br from-slate-500/20 via-slate-500/10 to-transparent"
                  )}
                />
                <Repeat2 className="relative z-10 w-5 h-5 text-orange-600 transition-transform duration-300 group-hover/icon:scale-110 group-hover/icon:-rotate-12" />
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className={cn(
            "absolute inset-0 w-full h-full",
            "[backface-visibility:hidden] [transform:rotateY(180deg)]",
            "p-6 rounded-2xl",
            `bg-gradient-to-b ${colors.bgGradient}`,
            `border ${colors.border}`,
            colors.glow,
            "flex flex-col",
            "transition-all duration-700",
            "group-hover:shadow-xl",
            !isFlipped ? "opacity-0" : "opacity-100"
          )}
        >
          <div className="flex-1 space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight transition-all duration-500 ease-out group-hover:translate-y-[-2px]">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 tracking-tight transition-all duration-500 ease-out group-hover:translate-y-[-2px] line-clamp-3">
                {service.description}
              </p>
            </div>

            <div className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <motion.div
                  key={feature}
                  className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 transition-all duration-500"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isFlipped ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: (featureIndex * 0.1) + 0.2 }}
                >
                  <ArrowRight className="w-3 h-3 text-orange-600" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-700">
            <Link href="/services">
              <div
                className={cn(
                  "group/start relative",
                  "flex items-center justify-between",
                  "p-4 -m-4 rounded-xl",
                  "transition-all duration-300",
                  "bg-gradient-to-r from-gray-100 via-gray-100 to-gray-100",
                  "dark:from-gray-800 dark:via-gray-800 dark:to-gray-800",
                  "hover:from-orange-500/5 hover:via-orange-500/3 hover:to-transparent",
                  "hover:scale-[1.02] hover:cursor-pointer"
                )}
              >
                <span className="text-sm font-semibold text-gray-900 dark:text-white transition-colors duration-300 group-hover/start:text-orange-600">
                  Learn More
                </span>
                <div className="relative group/icon">
                  <div
                    className={cn(
                      "absolute inset-[-6px] rounded-lg transition-all duration-300",
                      "bg-gradient-to-br from-orange-600/20 via-orange-600/10 to-transparent",
                      "opacity-0 group-hover/start:opacity-100 scale-90 group-hover/start:scale-100"
                    )}
                  />
                  <ArrowRight className="relative z-10 w-4 h-4 text-orange-600 transition-all duration-300 group-hover/start:translate-x-0.5 group-hover/start:scale-110" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* No inline styles needed anymore - using Framer Motion animations */}
    </motion.div>
  )
}

export default function ServicesGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge technology solutions designed to propel your business into the future
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-6">
          {services.map((service, index) => (
            <ServiceCardFlip
              key={service.id}
              service={service}
              index={index}
              inView={inView}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-orange-500 text-white font-bold text-lg rounded-lg shadow-2xl relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>View All Services & Packages</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                initial={{ x: '100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

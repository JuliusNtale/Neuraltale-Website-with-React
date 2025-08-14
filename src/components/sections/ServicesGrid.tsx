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
  ArrowRight
} from 'lucide-react'
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
    color: 'purple'
  },
  {
    id: '3',
    title: 'Technical Services',
    description: 'Setup, integration, cybersecurity implementation, and ongoing technical support.',
    icon: 'Shield',
    features: ['System Setup', 'Integration', 'Cybersecurity', 'Ongoing Support'],
    color: 'pink'
  },
  {
    id: '4',
    title: 'IT Consulting',
    description: 'Strategic technology planning and digital transformation guidance for your business.',
    icon: 'Cpu',
    features: ['Strategy Planning', 'Digital Transformation', 'Technology Assessment', 'Implementation'],
    color: 'green'
  },
  {
    id: '5',
    title: 'System Integration',
    description: 'Seamless integration of hardware and software solutions for optimal performance.',
    icon: 'Database',
    features: ['Hardware Integration', 'Software Integration', 'Performance Optimization', 'Testing'],
    color: 'blue'
  },
  {
    id: '6',
    title: 'Maintenance & Support',
    description: 'Comprehensive maintenance services and 24/7 technical support for all your systems.',
    icon: 'Bot',
    features: ['24/7 Support', 'Preventive Maintenance', 'Remote Monitoring', 'Emergency Response'],
    color: 'purple'
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
  blue: {
    gradient: 'from-blue-500 to-blue-600',
    glow: 'shadow-lg hover:shadow-blue-200',
    border: 'border-blue-200',
    text: 'text-blue-600'
  },
  purple: {
    gradient: 'from-purple-500 to-purple-600',
    glow: 'shadow-lg hover:shadow-purple-200',
    border: 'border-purple-200',
    text: 'text-purple-600'
  },
  pink: {
    gradient: 'from-pink-500 to-pink-600',
    glow: 'shadow-lg hover:shadow-pink-200',
    border: 'border-pink-200',
    text: 'text-pink-600'
  },
  green: {
    gradient: 'from-green-500 to-green-600',
    glow: 'shadow-lg hover:shadow-green-200',
    border: 'border-green-200',
    text: 'text-green-600'
  },
  yellow: {
    gradient: 'from-yellow-500 to-yellow-600',
    glow: 'shadow-lg hover:shadow-yellow-200',
    border: 'border-yellow-200',
    text: 'text-yellow-600'
  },
  indigo: {
    gradient: 'from-indigo-500 to-indigo-600',
    glow: 'shadow-lg hover:shadow-indigo-200',
    border: 'border-indigo-200',
    text: 'text-indigo-600'
  },
  red: {
    gradient: 'from-red-500 to-red-600',
    glow: 'shadow-lg hover:shadow-red-200',
    border: 'border-red-200',
    text: 'text-red-600'
  }
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]
            const colors = colorClasses[service.color]
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  rotateX: 5,
                }}
                className={`
                  relative group bg-white rounded-2xl p-6 border ${colors.border}
                  ${colors.glow} transition-all duration-500 shadow-lg
                  transform-gpu perspective-1000
                `}
              >
                {/* Background Gradient */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 
                  group-hover:opacity-10 transition-opacity duration-500 rounded-2xl
                `} />
                
                {/* Floating Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`
                    w-16 h-16 mx-auto mb-6 p-4 rounded-xl bg-gradient-to-br ${colors.gradient}
                    ${colors.glow} relative z-10
                  `}
                >
                  <IconComponent className="w-full h-full text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:${colors.text} transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                        className="flex items-center justify-center text-xs text-gray-500"
                      >
                        <div className={`w-1 h-1 bg-gradient-to-r ${colors.gradient} rounded-full mr-2`} />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      mt-6 px-4 py-2 text-sm font-medium border ${colors.border}
                      ${colors.text} rounded-lg hover:bg-gradient-to-r hover:${colors.gradient}
                      hover:text-white transition-all duration-300 relative overflow-hidden group/btn
                    `}
                  >
                    <span className="relative z-10">Learn More</span>
                    <div className={`
                      absolute inset-0 bg-gradient-to-r ${colors.gradient} 
                      transform -translate-x-full group-hover/btn:translate-x-0 
                      transition-transform duration-300
                    `} />
                  </motion.button>
                </div>

                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 bg-gradient-to-r ${colors.gradient} rounded-full`}
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${30 + i * 20}%`,
                      }}
                      animate={{
                        y: [0, -10, 0],
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
              </motion.div>
            )
          })}
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
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-lg shadow-2xl relative overflow-hidden group"
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

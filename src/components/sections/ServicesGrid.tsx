'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Brain, 
  Cloud, 
  Shield, 
  Smartphone, 
  Database, 
  Cpu,
  Network,
  Bot
} from 'lucide-react'
import type { Service } from '@/types'

const services: Service[] = [
  {
    id: '1',
    title: 'Artificial Intelligence',
    description: 'Advanced AI solutions including machine learning, natural language processing, and computer vision to transform your business.',
    icon: 'Brain',
    features: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP'],
    color: 'blue'
  },
  {
    id: '2',
    title: 'Cloud Computing',
    description: 'Scalable cloud infrastructure and migration services to optimize your operations and reduce costs.',
    icon: 'Cloud',
    features: ['AWS/Azure/GCP', 'Migration', 'DevOps', 'Serverless'],
    color: 'purple'
  },
  {
    id: '3',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
    icon: 'Shield',
    features: ['Threat Detection', 'Compliance', 'Penetration Testing', 'Security Audits'],
    color: 'pink'
  },
  {
    id: '4',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications with cutting-edge user experiences.',
    icon: 'Smartphone',
    features: ['iOS/Android', 'React Native', 'Flutter', 'PWA'],
    color: 'green'
  },
  {
    id: '5',
    title: 'Data Analytics',
    description: 'Turn your data into actionable insights with advanced analytics and visualization.',
    icon: 'Database',
    features: ['Big Data', 'Business Intelligence', 'Data Visualization', 'Predictive Analytics'],
    color: 'blue'
  },
  {
    id: '6',
    title: 'IoT Solutions',
    description: 'Connect and optimize your devices with intelligent IoT platforms and edge computing.',
    icon: 'Network',
    features: ['Edge Computing', 'Device Management', 'Real-time Analytics', 'Automation'],
    color: 'purple'
  },
  {
    id: '7',
    title: 'Quantum Computing',
    description: 'Next-generation computing solutions for complex problem-solving and optimization.',
    icon: 'Cpu',
    features: ['Quantum Algorithms', 'Optimization', 'Research', 'Simulation'],
    color: 'pink'
  },
  {
    id: '8',
    title: 'Automation & Robotics',
    description: 'Intelligent automation solutions to streamline processes and increase efficiency.',
    icon: 'Bot',
    features: ['RPA', 'Process Automation', 'Robotics', 'Workflow Optimization'],
    color: 'green'
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
    gradient: 'from-neon-blue to-blue-400',
    glow: 'neon-blue',
    border: 'border-neon-blue/30',
    text: 'text-neon-blue'
  },
  purple: {
    gradient: 'from-neon-purple to-purple-400',
    glow: 'neon-purple',
    border: 'border-neon-purple/30',
    text: 'text-neon-purple'
  },
  pink: {
    gradient: 'from-neon-pink to-pink-400',
    glow: 'neon-pink',
    border: 'border-neon-pink/30',
    text: 'text-neon-pink'
  },
  green: {
    gradient: 'from-neon-green to-green-400',
    glow: 'shadow-[0_0_20px_rgba(0,245,160,0.3)]',
    border: 'border-neon-green/30',
    text: 'text-neon-green'
  }
}

export default function ServicesGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-dark-bg to-gray-900">
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
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                  relative group glass rounded-2xl p-6 border ${colors.border}
                  hover:${colors.glow} transition-all duration-500
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
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:${colors.text} transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
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
                        className="flex items-center justify-center text-xs text-gray-300"
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
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink text-white font-bold text-lg rounded-lg shadow-2xl relative overflow-hidden group"
          >
            <span className="relative z-10">Explore All Services</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue"
              initial={{ x: '100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

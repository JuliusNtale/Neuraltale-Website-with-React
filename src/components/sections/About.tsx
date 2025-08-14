'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building2, Calendar, MapPin, User, Target, Heart } from 'lucide-react'

const companyStats = [
  { label: 'Founded', value: '2025', icon: Calendar },
  { label: 'Headquarters', value: 'Dar es Salaam, Tanzania', icon: MapPin },
  { label: 'Founder & CEO', value: 'Julius Peter Ntale', icon: User },
  { label: 'Structure', value: 'Limited Liability Company', icon: Building2 },
]

const coreValues = [
  {
    title: 'Innovation',
    description: 'Always exploring the new.',
    icon: '💡'
  },
  {
    title: 'Excellence',
    description: 'Quality without compromise.',
    icon: '⭐'
  },
  {
    title: 'Integrity',
    description: 'Honest and transparent in all we do.',
    icon: '🤝'
  },
  {
    title: 'Client-Centricity',
    description: 'Solutions built around people.',
    icon: '👥'
  },
  {
    title: 'Sustainability',
    description: 'Technology for a better tomorrow.',
    icon: '🌱'
  }
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">About Neuraltale</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technology should solve problems, not create them. We are the bridge between hardware and software, between vision and reality.
          </p>
        </motion.div>

        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 mb-16 border border-gray-200 shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-6 gradient-text">Our Story</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Neuraltale was born from a simple truth — technology should solve problems, not create them. 
            Founded in 2025, we set out to merge world-class innovation with the real needs of businesses 
            and communities across Africa and beyond. We are the bridge between hardware and software, 
            between vision and reality.
          </p>
        </motion.div>

        {/* Company Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {companyStats.map((stat, index) => (
            <div key={stat.label} className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg text-center">
              <stat.icon className="w-8 h-8 text-neon-blue mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h4>
              <p className="text-gray-600">{stat.value}</p>
            </div>
          ))}
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-neon-blue mr-3" />
              <h3 className="text-2xl font-bold gradient-text">Vision</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              To redefine how businesses and communities experience technology — building a future 
              where every challenge meets its perfect solution.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <Heart className="w-8 h-8 text-neon-purple mr-3" />
              <h3 className="text-2xl font-bold gradient-text">Mission</h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              To deliver intelligent software, reliable equipment, and expert services that solve problems, 
              empower people, and accelerate progress.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Our Core Values</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg text-center hover:border-neon-blue/50 transition-colors duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Global Ambition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mt-16 border border-gray-200 shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-6 gradient-text text-center">Global Ambition</h3>
          <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
            We see Neuraltale as a global African brand, expanding across East Africa, then internationally — 
            driven by partnerships, research, and relentless innovation.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

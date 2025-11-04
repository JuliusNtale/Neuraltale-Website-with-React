'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  Github,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react'
import Logo from '@/components/ui/Logo'
import type { SocialLink, NavItem } from '@/types'

const footerLinks = {
  services: [
    { title: 'Enterprise Solutions', href: '/services#enterprise' },
    { title: 'Cloud Computing', href: '/services#infrastructure' },
    { title: 'Software Development', href: '/services#development' },
    { title: 'IT Consulting', href: '/services#consulting' },
  ],
  company: [
    { title: 'About Us', href: '/about' },
    { title: 'Our Services', href: '/services' },
    { title: 'Contact Us', href: '/contact' },
    { title: 'Get Quote', href: '/services#quote' },
  ],
  resources: [
    { title: 'Documentation', href: '/services' },
    { title: 'Case Studies', href: '/about' },
    { title: 'Technology Blog', href: '/about' },
    { title: 'Support', href: '/contact' },
  ],
  legal: [
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Terms of Service', href: '/terms' },
    { title: 'Cookie Policy', href: '/cookies' },
    { title: 'GDPR Compliance', href: '/gdpr' },
  ]
}

const socialLinks: SocialLink[] = [
  { name: 'GitHub', href: 'https://github.com/neuraltaletechnologies', icon: 'Github' },
  { name: 'Twitter', href: 'https://twitter.com/neuraltaletech', icon: 'Twitter' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/neuraltale', icon: 'Linkedin' },
  { name: 'Instagram', href: 'https://instagram.com/neuraltaletechnologiestz', icon: 'Instagram' },
]

const iconMap = {
  Github,
  Twitter,
  Linkedin,
  Instagram,
}

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gray-900 border-t border-gray-700 overflow-hidden text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-hex-pattern opacity-5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 py-16"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Updated with <span className="gradient-text">NEURALTALE</span>
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Get the latest insights on technology trends, industry news, and NEURALTALE updates delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-lg bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
              {/* Brand Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
                className="lg:col-span-2"
              >
                <div className="mb-6">
                  <Logo size="lg" showText={true} className="text-white" />
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  Pioneering the future of technology with innovative solutions in AI, 
                  cloud computing, cybersecurity, and beyond. Transform your business 
                  with cutting-edge technology.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-5 h-5 text-neon-blue" />
                    <a href="mailto:helpdesk@neuraltale.com" className="hover:text-neon-blue transition-colors">helpdesk@neuraltale.com</a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-5 h-5 text-neon-blue" />
                    <a href="tel:+255653520829" className="hover:text-neon-blue transition-colors">+255 653 520 829</a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-neon-blue" />
                    <span>Dar es Salaam, Tanzania</span>
                  </div>
                </div>
              </motion.div>

              {/* Links Sections */}
              {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + categoryIndex * 0.1 }}
                >
                  <h4 className="text-white font-bold text-lg mb-4 capitalize">
                    {category}
                  </h4>
                  <ul className="space-y-3">
                    {links.map((link, linkIndex) => (
                      <motion.li
                        key={link.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + categoryIndex * 0.1 + linkIndex * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          className="text-gray-400 hover:text-neon-blue transition-all duration-300 block hover:translate-x-1 transform"
                        >
                          {link.title}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="border-t border-gray-800 py-8"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-gray-400 text-center md:text-left">
                <p>&copy; 2025 NEURALTALE. All rights reserved.</p>
                <p className="text-sm mt-1">
                  Built with ❤️ using Next.js, TypeScript & Tailwind CSS
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-6">
                {socialLinks.map((social, index) => {
                  const IconComponent = iconMap[social.icon as keyof typeof iconMap]
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-lg glass border border-gray-700 hover:border-neon-blue/50 flex items-center justify-center text-gray-400 hover:text-neon-blue transition-all duration-300"
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-lg glass border border-gray-700 hover:border-neon-blue/50 flex items-center justify-center text-gray-400 hover:text-neon-blue transition-all duration-300 group"
              >
                <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => {
            // Predefined positions to avoid hydration mismatches
            const positions = [
              { left: 94.2, top: 99.3 },
              { left: 15.8, top: 39.6 },
              { left: 58.7, top: 66.3 },
              { left: 60.0, top: 48.4 },
              { left: 0.5, top: 48.7 },
              { left: 83.2, top: 25.6 },
              { left: 27.6, top: 85.7 },
              { left: 42.9, top: 11.3 },
              { left: 85.4, top: 21.5 },
              { left: 13.9, top: 11.6 },
              { left: 61.3, top: 82.2 },
              { left: 50.2, top: 99.1 }
            ]
            const position = positions[i] || { left: 50, top: 50 }
            const duration = 10 + (i * 0.5) // Deterministic duration based on index
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
                  y: [0, -30, 0],
                  x: [0, 15, -15, 0],
                  rotate: [0, 360],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: delay,
                }}
              >
                <div className="w-1 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

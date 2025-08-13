'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Hexagon, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  Github,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react'
import type { SocialLink, NavItem } from '@/types'

const footerLinks = {
  services: [
    { title: 'Artificial Intelligence', href: '#ai' },
    { title: 'Cloud Computing', href: '#cloud' },
    { title: 'Cybersecurity', href: '#security' },
    { title: 'Mobile Development', href: '#mobile' },
  ],
  company: [
    { title: 'About Us', href: '#about' },
    { title: 'Our Team', href: '#team' },
    { title: 'Careers', href: '#careers' },
    { title: 'Blog', href: '#blog' },
  ],
  resources: [
    { title: 'Documentation', href: '#docs' },
    { title: 'Case Studies', href: '#cases' },
    { title: 'Whitepapers', href: '#papers' },
    { title: 'Support', href: '#support' },
  ],
  legal: [
    { title: 'Privacy Policy', href: '#privacy' },
    { title: 'Terms of Service', href: '#terms' },
    { title: 'Cookie Policy', href: '#cookies' },
    { title: 'GDPR', href: '#gdpr' },
  ]
}

const socialLinks: SocialLink[] = [
  { name: 'GitHub', href: '#github', icon: 'Github' },
  { name: 'Twitter', href: '#twitter', icon: 'Twitter' },
  { name: 'LinkedIn', href: '#linkedin', icon: 'Linkedin' },
  { name: 'Instagram', href: '#instagram', icon: 'Instagram' },
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
    <footer className="relative bg-dark-bg border-t border-gray-800 overflow-hidden">
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
                Stay Updated with <span className="gradient-text">NeuralTale</span>
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Get the latest insights on technology trends, industry news, and NeuralTale updates delivered to your inbox.
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
                <div className="flex items-center space-x-3 mb-6">
                  <div className="relative">
                    <Hexagon className="w-10 h-10 text-neon-blue animate-pulse-neon" />
                    <div className="absolute inset-0 w-10 h-10 bg-neon-blue/20 rounded-full blur-md" />
                  </div>
                  <span className="text-2xl font-bold gradient-text">NeuralTale</span>
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
                    <span>hello@neuraltale.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-5 h-5 text-neon-blue" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-neon-blue" />
                    <span>San Francisco, CA</span>
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
                        <motion.a
                          href={link.href}
                          whileHover={{ x: 5 }}
                          className="text-gray-400 hover:text-neon-blue transition-colors duration-300 block"
                        >
                          {link.title}
                        </motion.a>
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
                <p>&copy; 2024 NeuralTale Technologies. All rights reserved.</p>
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
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 15, -15, 0],
                rotate: [0, 360],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 10 + Math.random() * 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 3,
              }}
            >
              <div className="w-1 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
  )
}

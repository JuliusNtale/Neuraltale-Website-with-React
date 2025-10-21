'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Logo from '@/components/ui/Logo'
import type { NavItem } from '@/types'

const navItems: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'Solutions', href: '/solutions' },
  { 
    title: 'Services', 
    href: '/services',
    hasDropdown: true,
    dropdownItems: [
      { title: 'Equipment Supply', href: '/services#equipment', description: 'Networking, Wi-Fi, IoT, Workstations' },
      { title: 'Custom Software', href: '/services#software', description: 'Web/Mobile, AI-assisted Solutions' },
      { title: 'Systems Integration', href: '/services#integration', description: 'Wi-Fi Hotspots, Payment Solutions' },
      { title: 'Security Services', href: '/services#security', description: 'CCTV, Gates, Fencing, Access Control' },
      { title: 'Cyber & Support', href: '/services#cybersecurity', description: 'Security & SLA Support' }
    ]
  },
  { title: 'Industries', href: '/industries' },
  { title: 'Blog', href: '/blog' },
  { title: 'Case Studies', href: '/case-studies' },
  {
    title: 'Company', 
    href: '/about',
    hasDropdown: true,
    dropdownItems: [
      { title: 'About Us', href: '/about', description: 'Our story and mission' },
      { title: 'Office Location', href: '/location', description: 'Visit our Dar es Salaam office' },
      { title: 'Careers', href: '/careers', description: 'Join our team' },
      { title: 'Press & Media', href: '/press', description: 'Media resources and press kit' },
      { title: 'Support', href: '/support', description: 'Get help and resources' }
    ]
  },
  { title: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const isInternalLink = (href: string) => href.startsWith('/') && !href.startsWith('/#')
  const isAnchorLink = (href: string) => href.startsWith('#') || href.startsWith('/#')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo size="md" showText={true} />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => {
              if (item.hasDropdown && item.dropdownItems) {
                return (
                  <div
                    key={item.title}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="relative text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium cursor-pointer flex items-center space-x-1"
                    >
                      <span>{item.title}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.title ? 'rotate-180' : ''
                      }`} />
                    </motion.div>

                    {/* Dropdown */}
                    <AnimatePresence>
                      {activeDropdown === item.title && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                        >
                          {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                            <Link
                              key={dropdownItem.title}
                              href={dropdownItem.href}
                              className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="text-gray-900 font-medium">{dropdownItem.title}</div>
                              {dropdownItem.description && (
                                <div className="text-gray-500 text-sm">{dropdownItem.description}</div>
                              )}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }
              
              const NavComponent = isInternalLink(item.href) ? Link : 'a'
              
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <NavComponent
                    href={item.href}
                    className="relative text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                    <motion.span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600"
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </NavComponent>
                </motion.div>
              )
            })}
          </div>

          {/* CTA Button */}
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block px-6 py-2 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-lg neon-blue transition-all duration-300 hover:shadow-lg"
            >
              Get Started
            </motion.button>
          </Link>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-neon-blue transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-200"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => {
                if (item.hasDropdown && item.dropdownItems) {
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                        className="flex items-center justify-between w-full text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium py-2"
                      >
                        <span>{item.title}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.title ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.title && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-2"
                          >
                            {item.dropdownItems.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.title}
                                href={dropdownItem.href}
                                className="block text-gray-500 hover:text-blue-600 transition-colors duration-300 py-2"
                                onClick={() => {
                                  setIsMobileMenuOpen(false)
                                  setActiveDropdown(null)
                                }}
                              >
                                {dropdownItem.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                }
                
                const NavComponent = isInternalLink(item.href) ? Link : 'a'
                
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <NavComponent
                      href={item.href}
                      className="block text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </NavComponent>
                  </motion.div>
                )
              })}
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
                >
                  Get Started
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

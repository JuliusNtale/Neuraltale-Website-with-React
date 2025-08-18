'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FileText, Home, Briefcase, Building, Users, Phone, HeadphonesIcon, Newspaper, Code, Layers, Factory } from 'lucide-react'

interface SitemapItem {
  title: string
  href: string
  description: string
  icon: React.ComponentType<any>
  children?: SitemapItem[]
}

const sitemapData: SitemapItem[] = [
  {
    title: 'Home',
    href: '/',
    description: 'Main landing page with company overview and services',
    icon: Home,
  },
  {
    title: 'About',
    href: '/about',
    description: 'Learn about NEURALTALE, our mission, and team',
    icon: Users,
  },
  {
    title: 'Services',
    href: '/services',
    description: 'Our comprehensive IT solutions and services',
    icon: Briefcase,
  },
  {
    title: 'Solutions',
    href: '/solutions',
    description: 'Technology solutions for various business needs',
    icon: Code,
  },
  {
    title: 'Industries',
    href: '/industries',
    description: 'Industry-specific solutions and expertise',
    icon: Factory,
  },
  {
    title: 'Case Studies',
    href: '/case-studies',
    description: 'Success stories and project showcases',
    icon: Layers,
  },
  {
    title: 'Blog',
    href: '/blog',
    description: 'Latest insights, guides, and technology updates',
    icon: FileText,
    children: [
      {
        title: 'Captive Portal M-Pesa Vouchers Guide',
        href: '/blog/captive-portal-mpesa-vouchers-guide',
        description: 'Complete guide to implementing M-Pesa voucher systems',
        icon: FileText,
      },
      {
        title: 'Omada vs UniFi for Hotels in Tanzania',
        href: '/blog/omada-vs-unifi-hotels-tanzania',
        description: 'Comparison of networking solutions for hospitality',
        icon: FileText,
      },
      {
        title: 'SME Networking Questions Before Buying',
        href: '/blog/sme-networking-questions-before-buying',
        description: 'Essential considerations for small business networks',
        icon: FileText,
      },
    ],
  },
  {
    title: 'Careers',
    href: '/careers',
    description: 'Join our team and career opportunities',
    icon: Users,
  },
  {
    title: 'Contact',
    href: '/contact',
    description: 'Get in touch with our team',
    icon: Phone,
  },
  {
    title: 'Support',
    href: '/support',
    description: 'Technical support and customer service',
    icon: HeadphonesIcon,
  },
  {
    title: 'Press',
    href: '/press',
    description: 'Press releases and media resources',
    icon: Newspaper,
  },
]

interface SitemapItemProps {
  item: SitemapItem
  index: number
  isChild?: boolean
}

function SitemapItemComponent({ item, index, isChild = false }: SitemapItemProps) {
  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`${isChild ? 'ml-8 mt-4' : 'mb-8'}`}
    >
      <Link
        href={item.href}
        className={`block p-6 rounded-xl border transition-all duration-300 hover:shadow-lg group ${
          isChild 
            ? 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300' 
            : 'bg-white border-gray-200 hover:bg-blue-50 hover:border-blue-300'
        }`}
      >
        <div className="flex items-start space-x-4">
          <div className={`p-3 rounded-lg ${isChild ? 'bg-gray-200' : 'bg-blue-100'} group-hover:scale-110 transition-transform`}>
            <Icon className={`w-6 h-6 ${isChild ? 'text-gray-600' : 'text-blue-600'}`} />
          </div>
          <div className="flex-1">
            <h3 className={`font-bold mb-2 group-hover:text-blue-600 transition-colors ${
              isChild ? 'text-lg text-gray-700' : 'text-xl text-gray-900'
            }`}>
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>
            <div className="mt-3 flex items-center text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Visit page →
            </div>
          </div>
        </div>
      </Link>
      
      {/* Child items */}
      {item.children && (
        <div className="mt-4">
          {item.children.map((child, childIndex) => (
            <SitemapItemComponent 
              key={child.href} 
              item={child} 
              index={childIndex} 
              isChild={true} 
            />
          ))}
        </div>
      )}
    </motion.div>
  )
}

export default function Sitemap() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Site Map
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Navigate through all pages and sections of the NEURALTALE website. 
            Discover our services, solutions, and resources.
          </p>
        </motion.div>

        {/* Sitemap Grid */}
        <div className="grid gap-6">
          {sitemapData.map((item, index) => (
            <SitemapItemComponent key={item.href} item={item} index={index} />
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm">
            Can't find what you're looking for? <Link href="/contact" className="text-blue-600 hover:underline">Contact us</Link> for assistance.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

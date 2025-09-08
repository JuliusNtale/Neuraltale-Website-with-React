'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaTag,
  FaArrowRight,
  FaSearch,
  FaWifi,
  FaMobile,
  FaNetworkWired
} from 'react-icons/fa'

const BlogList = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'all', name: 'All Posts', count: 4 },
    { id: 'networking', name: 'Networking', count: 2 },
    { id: 'mpesa', name: 'M-Pesa Integration', count: 1 },
    { id: 'guides', name: 'Setup Guides', count: 4 },
    { id: 'domains', name: 'Domain & Web', count: 1 }
  ]

  const blogPosts = [
    {
      id: 4,
      slug: 'domain-types-guide-tanzania',
      title: 'Complete Guide to Domain Types in Tanzania: .com, .co.tz, .org - Which Should You Choose?',
      excerpt: 'Confused about domain extensions? This comprehensive guide explains all domain types (.com, .co.tz, .org, .net) and helps Tanzanian businesses choose the perfect domain for their needs.',
      content: `Complete guide to choosing the right domain extension for your Tanzanian business. Learn the differences between .com, .co.tz, .org, and more with practical advice and cost comparisons.`,
      author: 'Julius Ntale',
      publishDate: '2025-09-08',
      readTime: '12 min read',
      category: 'guides',
      tags: ['Domain Registration', 'Business Guide', 'Website Setup', '.co.tz', 'Tanzania'],
      featured: true,
      image: '/blog/domain-types-guide.jpg',
      seo: {
        title: 'Complete Guide to Domain Types in Tanzania: .com, .co.tz, .org - Which Should You Choose?',
        description: 'Expert guide on choosing the right domain extension for your Tanzanian business. Compare .com, .co.tz, .org and make the best decision.',
        keywords: ['domain types Tanzania', '.co.tz domain registration', '.com vs .co.tz Tanzania', 'domain extension guide Tanzania']
      }
    },
    {
      id: 1,
      slug: 'captive-portal-mpesa-vouchers-guide',
      title: 'How to Deploy a Captive Portal with M-Pesa Vouchers (Step-by-Step)',
      excerpt: 'Complete guide to setting up Wi-Fi hotspot with M-Pesa voucher system for hotels, cafes, and public spaces in Tanzania. Includes code examples and best practices.',
      content: `Learn how to create a professional captive portal system that accepts M-Pesa payments for Wi-Fi access. This comprehensive guide covers everything from initial setup to going live.`,
      author: 'Julius Ntale',
      publishDate: '2025-01-15',
      readTime: '15 min read',
      category: 'mpesa',
      tags: ['M-Pesa', 'Captive Portal', 'Wi-Fi Hotspot', 'Tutorial'],
      featured: true,
      image: '/blog/captive-portal-mpesa.jpg',
      seo: {
        title: 'How to Deploy Captive Portal with M-Pesa Vouchers - Complete Guide',
        description: 'Step-by-step tutorial for creating Wi-Fi hotspot with M-Pesa voucher system in Tanzania. Includes API integration, portal setup, and monetization strategies.',
        keywords: ['captive portal M-Pesa', 'Wi-Fi hotspot M-Pesa vouchers', 'M-Pesa API integration', 'hotspot monetization Tanzania']
      }
    },
    {
      id: 2,
      slug: 'omada-vs-unifi-hotels-tanzania',
      title: 'Omada vs UniFi for Hotels in Tanzania: Which Network Solution is Better?',
      excerpt: 'Detailed comparison of TP-Link Omada and Ubiquiti UniFi systems for hospitality businesses. Cost analysis, features, and real-world performance in Tanzanian hotels.',
      content: `Compare TP-Link Omada and Ubiquiti UniFi networking solutions specifically for hotel deployments in Tanzania. We analyze costs, features, management, and guest experience.`,
      author: 'Sarah Kimaro',
      publishDate: '2025-01-10', 
      readTime: '12 min read',
      category: 'networking',
      tags: ['TP-Link Omada', 'UniFi', 'Hotel WiFi', 'Comparison'],
      featured: true,
      image: '/blog/omada-vs-unifi-hotels.jpg',
      seo: {
        title: 'TP-Link Omada vs UniFi for Hotels Tanzania - Complete Comparison 2025',
        description: 'Expert comparison of TP-Link Omada vs Ubiquiti UniFi for hotel WiFi in Tanzania. Includes cost analysis, guest portal features, and deployment recommendations.',
        keywords: ['Omada vs UniFi hotels Tanzania', 'hotel WiFi comparison', 'TP-Link Omada hotels', 'UniFi hospitality Tanzania']
      }
    },
    {
      id: 3,
      slug: 'sme-networking-equipment-buying-guide',
      title: 'What SMEs Should Ask Before Buying Networking Gear',
      excerpt: 'Essential questions every small and medium enterprise should ask before purchasing network equipment. Avoid costly mistakes and choose the right solution for your business.',
      content: `Before investing in network infrastructure, SMEs need to ask the right questions. This guide helps you make informed decisions and avoid common pitfalls.`,
      author: 'Peter Mollel',
      publishDate: '2025-01-05',
      readTime: '10 min read', 
      category: 'networking',
      tags: ['SME', 'Network Equipment', 'Buying Guide', 'Business'],
      featured: false,
      image: '/blog/sme-networking-guide.jpg',
      seo: {
        title: 'SME Network Equipment Buying Guide Tanzania - What to Ask Before Purchasing',
        description: 'Essential guide for SMEs in Tanzania buying network equipment. Learn what questions to ask, avoid costly mistakes, and choose the right networking solution.',
        keywords: ['SME networking equipment Tanzania', 'business network buying guide', 'network equipment checklist SME', 'enterprise networking Tanzania']
      }
    }
  ]

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const searchFilteredPosts = filteredPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const featuredPosts = blogPosts.filter(post => post.featured)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Technology Insights & Guides
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
              Expert guides on network setup, M-Pesa integration, and technology solutions 
              for businesses in Tanzania.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[
                { label: 'Technical Guides', value: '15+', icon: FaNetworkWired },
                { label: 'Setup Tutorials', value: '25+', icon: FaWifi },
                { label: 'Integration Tips', value: '10+', icon: FaMobile }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-6 h-6 text-blue-300" />
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our most popular technical guides and tutorials for IT professionals 
              and business owners in Tanzania.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video bg-gray-200 relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <FaCalendarAlt className="w-4 h-4 mr-1" />
                      {new Date(post.publishDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center">
                      <FaClock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                    <div className="flex items-center">
                      <FaUser className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      <span>Read More</span>
                      <FaArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browse our complete collection of technical guides, tutorials, and insights.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8">
            <div className="max-w-2xl mx-auto mb-6">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:text-blue-600'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {searchFilteredPosts.map((post) => (
              <article key={post.id} className="bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-gray-200 rounded-t-xl relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <FaCalendarAlt className="w-3 h-3 mr-1" />
                      {new Date(post.publishDate).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center">
                      <FaClock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <FaTag className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-500">{post.category}</span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {searchFilteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <FaSearch className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Articles Found</h3>
              <p className="text-gray-600">Try adjusting your search or browse all categories.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help Implementing These Solutions?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our technical team can help you implement any of the solutions covered 
            in our blog posts. Get expert assistance today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Get Technical Support
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogList

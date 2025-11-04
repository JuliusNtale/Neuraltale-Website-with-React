'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  FaDownload,
  FaImage,
  FaFileAlt,
  FaUser,
  FaNewspaper,
  FaCamera,
  FaPalette,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaTwitter,
  FaExternalLinkAlt
} from 'react-icons/fa'

const Press = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const mediaCategories = [
    { id: 'all', name: 'All Resources', count: 15 },
    { id: 'logos', name: 'Logos', count: 6 },
    { id: 'photos', name: 'Photos', count: 5 },
    { id: 'documents', name: 'Documents', count: 4 }
  ]

  const mediaResources = [
    {
      id: 1,
      category: 'logos',
      title: 'Neuraltale Logo - Primary',
      description: 'Main logo in high resolution PNG and SVG formats',
      format: 'PNG, SVG',
      size: '2.5 MB',
      downloadUrl: '/media/logo-primary.zip',
      preview: '/media/logo-primary-preview.png'
    },
    {
      id: 2,
      category: 'logos',
      title: 'Neuraltale Logo - White Version',
      description: 'Logo for dark backgrounds in various formats',
      format: 'PNG, SVG',
      size: '2.1 MB',
      downloadUrl: '/media/logo-white.zip',
      preview: '/media/logo-white-preview.png'
    },
    {
      id: 3,
      category: 'logos',
      title: 'Neuraltale Logo - Icon Only',
      description: 'Icon version without text for social media',
      format: 'PNG, SVG',
      size: '1.8 MB',
      downloadUrl: '/media/logo-icon.zip',
      preview: '/media/logo-icon-preview.png'
    },
    {
      id: 4,
      category: 'photos',
      title: 'Office Photos',
      description: 'Professional photos of our Dar es Salaam office',
      format: 'JPG',
      size: '15 MB',
      downloadUrl: '/media/office-photos.zip',
      preview: '/media/office-preview.jpg'
    },
    {
      id: 5,
      category: 'photos',
      title: 'Founder Photos',
      description: 'Professional headshots of Julius Ntale, Founder & CEO',
      format: 'JPG',
      size: '8 MB',
      downloadUrl: '/media/founder-photos.zip',
      preview: '/media/founder-preview.jpg'
    },
    {
      id: 6,
      category: 'photos',
      title: 'Team Photos',
      description: 'Group photos and individual team member photos',
      format: 'JPG',
      size: '12 MB',
      downloadUrl: '/media/team-photos.zip',
      preview: '/media/team-preview.jpg'
    },
    {
      id: 7,
      category: 'documents',
      title: 'Company Fact Sheet',
      description: 'Key facts, statistics, and company information',
      format: 'PDF',
      size: '500 KB',
      downloadUrl: '/media/fact-sheet.pdf',
      preview: '/media/fact-sheet-preview.png'
    },
    {
      id: 8,
      category: 'documents',
      title: 'Brand Guidelines',
      description: 'Complete brand usage guidelines and style guide',
      format: 'PDF',
      size: '3.2 MB',
      downloadUrl: '/media/brand-guidelines.pdf',
      preview: '/media/brand-guidelines-preview.png'
    }
  ]

  const pressReleases = [
    {
      id: 1,
      title: 'Neuraltale Expands Wi-Fi Infrastructure Services Across Tanzania',
      date: '2025-01-10',
      excerpt: 'Leading IT equipment supplier announces expansion of enterprise Wi-Fi services with focus on hospitality and education sectors.',
      downloadUrl: '/press/press-release-1.pdf'
    },
    {
      id: 2,
      title: 'M-Pesa Integration Platform Launches for Small Businesses',
      date: '2024-12-15',
      excerpt: 'Neuraltale unveils comprehensive M-Pesa integration solution enabling small businesses to accept digital payments seamlessly.',
      downloadUrl: '/press/press-release-2.pdf'
    },
    {
      id: 3,
      title: 'Partnership with TP-Link Strengthens Network Equipment Supply Chain',
      date: '2024-11-20',
      excerpt: 'Strategic partnership with TP-Link enhances Neuraltale\'s ability to deliver enterprise-grade networking solutions in East Africa.',
      downloadUrl: '/press/press-release-3.pdf'
    }
  ]

  const awards = [
    {
      year: '2024',
      title: 'Best IT Service Provider - Tanzania Business Awards',
      organization: 'Tanzania Chamber of Commerce'
    },
    {
      year: '2023',
      title: 'Innovation in Technology Solutions',
      organization: 'East Africa Technology Summit'
    },
    {
      year: '2023',
      title: 'Young Entrepreneur of the Year - Finalist',
      organization: 'Tanzania Entrepreneurship Awards'
    }
  ]

  const filteredResources = selectedCategory === 'all' 
    ? mediaResources 
    : mediaResources.filter(resource => resource.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Press & Media Kit
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto mb-8">
              Media resources, company information, and press materials for journalists, 
              partners, and media professionals covering Neuraltale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/media/neuraltale-complete-media-kit.zip"
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <FaDownload className="w-5 h-5" />
                <span>Download Complete Media Kit</span>
              </a>
              <Link
                href="#contact"
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                Media Inquiries
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Neuraltale
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2025, Neuraltale is Tanzania's leading IT equipment supplier 
                and technology solutions provider. We specialize in enterprise networking, 
                M-Pesa integration, and custom software development for businesses across 
                SME, hospitality, education, and retail sectors.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Founded', value: '2025' },
                  { label: 'Employees', value: '50+' },
                  { label: 'Clients Served', value: '500+' },
                  { label: 'Projects Completed', value: '1,000+' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/media/office-main.jpg" 
                alt="Neuraltale Office" 
                className="w-full h-40 object-cover rounded-lg"
              />
              <img 
                src="/media/team-work.jpg" 
                alt="Team at Work" 
                className="w-full h-40 object-cover rounded-lg"
              />
              <img 
                src="/media/server-room.jpg" 
                alt="Server Room" 
                className="w-full h-40 object-cover rounded-lg"
              />
              <img 
                src="/media/client-meeting.jpg" 
                alt="Client Meeting" 
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Bio */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the visionary leader driving technology transformation across Tanzania.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <img 
                    src="/media/julius-ntale-founder.jpg" 
                    alt="Julius Ntale, Founder & CEO" 
                    className="w-full aspect-square object-cover rounded-xl"
                  />
                </div>
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Julius Peter Ntale</h3>
                  <p className="text-lg text-blue-600 mb-4">Founder & Chief Executive Officer</p>
                  
                  <p className="text-gray-600 mb-4">
                    Julius is a technology entrepreneur and software engineer with over 8 years of experience 
                    in the IT industry. He founded Neuraltale in 2025 with a vision to bridge the 
                    technology gap for businesses in Tanzania through innovative and affordable solutions.
                  </p>
                  
                  <p className="text-gray-600 mb-6">
                    Under his leadership, Neuraltale has grown from a startup to Tanzania's leading IT equipment 
                    supplier, serving over 500 businesses across multiple sectors. Julius holds a degree in 
                    Computer Science and is passionate about leveraging technology to solve real-world problems.
                  </p>
                  
                  <div className="flex space-x-4">
                    <a 
                      href="https://linkedin.com/in/juliusntale" 
                      className="text-blue-600 hover:text-blue-700"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Julius Ntale on LinkedIn"
                      aria-label="Connect with Julius Ntale on LinkedIn"
                    >
                      <FaLinkedin className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://twitter.com/juliusntale" 
                      className="text-blue-400 hover:text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Julius Ntale on Twitter"
                      aria-label="Follow Julius Ntale on Twitter"
                    >
                      <FaTwitter className="w-6 h-6" />
                    </a>
                    <a 
                      href="mailto:juliusntale@neuraltale.com" 
                      className="text-gray-600 hover:text-gray-700"
                      title="Email Julius Ntale"
                      aria-label="Send email to Julius Ntale"
                    >
                      <FaEnvelope className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Media Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Download high-quality logos, photos, and brand materials for your publication.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {mediaCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg border-2 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => (
              <div key={resource.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
                  <img 
                    src={resource.preview} 
                    alt={resource.title}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{resource.format}</span>
                    <span>{resource.size}</span>
                  </div>
                  <a
                    href={resource.downloadUrl}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <FaDownload className="w-4 h-4" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Colors */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Brand Colors
            </h2>
            <p className="text-lg text-gray-600">
              Official Neuraltale brand color palette
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Primary Blue', hex: '#1E40AF', rgb: 'RGB(30, 64, 175)', bgClass: 'bg-blue-700' },
              { name: 'Secondary Blue', hex: '#3B82F6', rgb: 'RGB(59, 130, 246)', bgClass: 'bg-blue-500' },
              { name: 'Accent Teal', hex: '#0D9488', rgb: 'RGB(13, 148, 136)', bgClass: 'bg-teal-600' },
              { name: 'Dark Gray', hex: '#374151', rgb: 'RGB(55, 65, 81)', bgClass: 'bg-gray-600' }
            ].map((color, index) => (
              <div key={index} className="text-center">
                <div 
                  className={`w-full h-24 rounded-lg mb-4 border border-gray-200 ${color.bgClass}`}
                />
                <h3 className="font-semibold text-gray-900 mb-1">{color.name}</h3>
                <p className="text-sm text-gray-600">{color.hex}</p>
                <p className="text-xs text-gray-500">{color.rgb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Press Releases
            </h2>
            <p className="text-lg text-gray-600">
              Latest news and announcements from Neuraltale
            </p>
          </div>

          <div className="space-y-6">
            {pressReleases.map((release) => (
              <div key={release.id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{release.title}</h3>
                    <p className="text-gray-600 mb-3">{release.excerpt}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(release.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <a
                      href={release.downloadUrl}
                      className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                      <FaDownload className="w-4 h-4" />
                      <span>Download PDF</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Awards & Recognition
            </h2>
            <p className="text-lg text-gray-600">
              Industry recognition and achievements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{award.title}</h3>
                <p className="text-gray-600 mb-1">{award.organization}</p>
                <p className="text-blue-600 font-medium">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Media Inquiries
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            For press inquiries, interview requests, or additional information, 
            please contact our media relations team.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="font-semibold text-white mb-4">General Media Inquiries</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="w-5 h-5 text-blue-400" />
                  <span>helpdesk@neuraltale.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="w-5 h-5 text-blue-400" />
                  <span>+255 653 520 829</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="font-semibold text-white mb-4">CEO Interviews</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="w-5 h-5 text-blue-400" />
                  <span>juliusntale@neuraltale.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaLinkedin className="w-5 h-5 text-blue-400" />
                  <span>linkedin.com/in/juliusntale</span>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-gray-400 mt-8">
            Response time: Within 24 hours for urgent requests, 48 hours for general inquiries.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Press

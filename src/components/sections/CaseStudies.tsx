'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  FaBuilding,
  FaHotel,
  FaGraduationCap,
  FaStore,
  FaChartLine,
  FaClock,
  FaUsers,
  FaDollarSign,
  FaArrowRight,
  FaQuoteLeft,
  FaCalendarAlt,
  FaDownload,
  FaExternalLinkAlt
} from 'react-icons/fa'

const CaseStudiesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedCase, setSelectedCase] = useState<any>(null)

  const categories = [
    { id: 'all', name: 'All Industries', icon: FaBuilding },
    { id: 'sme', name: 'SMEs', icon: FaBuilding },
    { id: 'hospitality', name: 'Hospitality', icon: FaHotel },
    { id: 'education', name: 'Education', icon: FaGraduationCap },
    { id: 'retail', name: 'Retail', icon: FaStore }
  ]

  const caseStudies = [
    {
      id: 1,
      category: 'sme',
      title: 'Mwenge Electronics: Digital Transformation Success',
      client: 'Mwenge Electronics Shop',
      industry: 'Electronics Retail',
      location: 'Dar es Salaam, Tanzania',
      duration: '3 months',
      teamSize: '4 specialists',
      challenge: 'Manual inventory tracking, cash-only payments, and lack of customer data insights were limiting growth potential.',
      solution: 'Implemented integrated POS system with inventory management, mobile payment integration, and customer analytics dashboard.',
      results: [
        { metric: 'Sales Increase', value: '45%', period: '6 months' },
        { metric: 'Inventory Accuracy', value: '98%', period: 'ongoing' },
        { metric: 'Customer Retention', value: '60%', period: '1 year' },
        { metric: 'Transaction Speed', value: '70%', period: 'faster' }
      ],
      technologies: ['Custom POS System', 'M-Pesa Integration', 'Cloud Database', 'Analytics Dashboard'],
      testimonial: {
        quote: "Neuraltale transformed our business operations completely. We now track every product, accept mobile payments, and understand our customers better. Sales have increased by 45% in just 6 months!",
        author: "James Mwalimu",
        position: "Owner, Mwenge Electronics"
      },
      images: ['/images/case-studies/mwenge-before.jpg', '/images/case-studies/mwenge-after.jpg'],
      featured: true
    },
    {
      id: 2,
      category: 'hospitality',
      title: 'Serengeti View Lodge: Guest Experience Revolution',
      client: 'Serengeti View Lodge',
      industry: 'Hospitality & Tourism',
      location: 'Arusha, Tanzania',
      duration: '4 months',
      teamSize: '6 specialists',
      challenge: 'Poor Wi-Fi connectivity, manual booking processes, and limited guest engagement were affecting satisfaction scores.',
      solution: 'Deployed enterprise Wi-Fi network, integrated booking system, and implemented guest portal with local attractions.',
      results: [
        { metric: 'Guest Satisfaction', value: '60%', period: 'improvement' },
        { metric: 'Direct Bookings', value: '35%', period: 'increase' },
        { metric: 'Wi-Fi Speed', value: '10x', period: 'faster' },
        { metric: 'Staff Efficiency', value: '40%', period: 'improvement' }
      ],
      technologies: ['UniFi Wi-Fi Network', 'Property Management System', 'Guest Portal', 'Online Booking Integration'],
      testimonial: {
        quote: "Our guests now enjoy seamless connectivity and digital services. The new system has significantly improved our operations and guest satisfaction ratings.",
        author: "Sarah Kimaro",
        position: "General Manager, Serengeti View Lodge"
      },
      images: ['/images/case-studies/serengeti-lobby.jpg', '/images/case-studies/serengeti-rooms.jpg'],
      featured: true
    },
    {
      id: 3,
      category: 'education',
      title: 'Arusha Technical College: Digital Learning Platform',
      client: 'Arusha Technical College',
      industry: 'Technical Education',
      location: 'Arusha, Tanzania',
      duration: '6 months',
      teamSize: '8 specialists',
      challenge: 'Limited digital infrastructure and no online learning capabilities during COVID-19 pandemic.',
      solution: 'Built comprehensive digital learning platform with campus-wide Wi-Fi and virtual classroom capabilities.',
      results: [
        { metric: 'Students Connected', value: '2,000+', period: 'students' },
        { metric: 'Online Courses', value: '150+', period: 'courses' },
        { metric: 'Learning Engagement', value: '80%', period: 'increase' },
        { metric: 'Admin Efficiency', value: '50%', period: 'improvement' }
      ],
      technologies: ['Learning Management System', 'Campus Wi-Fi', 'Virtual Classrooms', 'Student Portal'],
      testimonial: {
        quote: "Neuraltale enabled us to continue education during the pandemic. Our digital platform now serves over 2,000 students with excellent results.",
        author: "Dr. Peter Mollel",
        position: "Principal, Arusha Technical College"
      },
      images: ['/images/case-studies/atc-classroom.jpg', '/images/case-studies/atc-lab.jpg'],
      featured: false
    },
    {
      id: 4,
      category: 'retail',
      title: 'Mlimani City: Smart Retail Analytics',
      client: 'Mlimani City Mall Stores',
      industry: 'Retail & Shopping',
      location: 'Dar es Salaam, Tanzania',
      duration: '5 months',
      teamSize: '7 specialists',
      challenge: 'Multiple store owners lacked customer insights and unified loyalty programs across the mall.',
      solution: 'Implemented mall-wide Wi-Fi with customer analytics and integrated loyalty program across all participating stores.',
      results: [
        { metric: 'Customer Engagement', value: '85%', period: 'increase' },
        { metric: 'Repeat Visits', value: '55%', period: 'increase' },
        { metric: 'Average Spend', value: '30%', period: 'increase' },
        { metric: 'Data Insights', value: '100%', period: 'coverage' }
      ],
      technologies: ['Mall-wide Wi-Fi', 'Customer Analytics', 'Loyalty Platform', 'Mobile App'],
      testimonial: {
        quote: "The unified system gives us incredible insights into customer behavior. Our loyalty program has transformed how customers engage with our stores.",
        author: "Ahmed Hassan",
        position: "Mall Operations Manager"
      },
      images: ['/images/case-studies/mlimani-exterior.jpg', '/images/case-studies/mlimani-interior.jpg'],
      featured: false
    },
    {
      id: 5,
      category: 'sme',
      title: 'Kilimanjaro Coffee Co-op: Supply Chain Digitization',
      client: 'Kilimanjaro Coffee Cooperative',
      industry: 'Agriculture & Processing',
      location: 'Moshi, Tanzania',
      duration: '4 months',
      teamSize: '5 specialists',
      challenge: 'Manual tracking of coffee production and farmer payments led to inefficiencies and disputes.',
      solution: 'Digital supply chain management system with farmer portal and automated payment processing.',
      results: [
        { metric: 'Processing Efficiency', value: '65%', period: 'improvement' },
        { metric: 'Payment Accuracy', value: '99%', period: 'accuracy' },
        { metric: 'Farmer Satisfaction', value: '75%', period: 'increase' },
        { metric: 'Quality Tracking', value: '100%', period: 'visibility' }
      ],
      technologies: ['Supply Chain Management', 'Farmer Portal', 'Mobile Payments', 'Quality Tracking'],
      testimonial: {
        quote: "The digital system has revolutionized our operations. Farmers get paid faster and we have complete visibility into our supply chain.",
        author: "Grace Lyimo",
        position: "Cooperative Manager"
      },
      images: ['/images/case-studies/coffee-farm.jpg', '/images/case-studies/coffee-processing.jpg'],
      featured: false
    }
  ]

  const filteredCases = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(caseStudy => caseStudy.category === selectedCategory)

  const featuredCases = caseStudies.filter(caseStudy => caseStudy.featured)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Real Results, Real Impact
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto mb-8">
              Discover how businesses across Tanzania have transformed their operations 
              and achieved remarkable results with our technology solutions.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                { label: 'Projects Delivered', value: '500+' },
                { label: 'Industries Served', value: '4+' },
                { label: 'Client Satisfaction', value: '96%' },
                { label: 'Average ROI', value: '257%' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-purple-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Highlighted projects that showcase the transformative power of our technology solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredCases.map((caseStudy) => (
              <div key={caseStudy.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg mr-3">
                      {categories.find(cat => cat.id === caseStudy.category)?.icon && (() => {
                        const IconComponent = categories.find(cat => cat.id === caseStudy.category)?.icon;
                        return IconComponent ? <IconComponent className="w-6 h-6 text-blue-600" /> : null;
                      })()}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{caseStudy.client}</h3>
                      <p className="text-sm text-gray-500">{caseStudy.industry} • {caseStudy.location}</p>
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{caseStudy.title}</h4>
                  <p className="text-gray-600 mb-6">{caseStudy.challenge}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {caseStudy.results.slice(0, 4).map((result, index) => (
                      <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{result.value}</div>
                        <div className="text-xs text-gray-600">{result.metric}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <FaClock className="w-4 h-4 mr-1" />
                        {caseStudy.duration}
                      </div>
                      <div className="flex items-center">
                        <FaUsers className="w-4 h-4 mr-1" />
                        {caseStudy.teamSize}
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedCase(caseStudy)}
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      <span>Read Full Story</span>
                      <FaArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Case Studies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browse through our complete portfolio of successful projects across different industries.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg border-2 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((caseStudy) => (
              <div key={caseStudy.id} className="bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-gray-100 rounded-lg mr-3">
                      {categories.find(cat => cat.id === caseStudy.category)?.icon && (() => {
                        const IconComponent = categories.find(cat => cat.id === caseStudy.category)?.icon;
                        return IconComponent ? <IconComponent className="w-5 h-5 text-gray-600" /> : null;
                      })()}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{caseStudy.client}</h3>
                      <p className="text-xs text-gray-500">{caseStudy.industry}</p>
                    </div>
                  </div>

                  <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">{caseStudy.title}</h4>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{caseStudy.challenge}</p>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {caseStudy.results.slice(0, 2).map((result, index) => (
                      <div key={index} className="text-center p-2 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-blue-600">{result.value}</div>
                        <div className="text-xs text-gray-600">{result.metric}</div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedCase(caseStudy)}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Case Study Details */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedCase.title}</h2>
                  <p className="text-lg text-gray-600">{selectedCase.client} • {selectedCase.location}</p>
                </div>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">The Challenge</h3>
                  <p className="text-gray-600 mb-6">{selectedCase.challenge}</p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Solution</h3>
                  <p className="text-gray-600 mb-6">{selectedCase.solution}</p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCase.technologies.map((tech: string, index: number) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Results Achieved</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {selectedCase.results.map((result: any, index: number) => (
                      <div key={index} className="text-center p-4 border border-gray-200 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{result.value}</div>
                        <div className="text-sm text-gray-600">{result.metric}</div>
                        <div className="text-xs text-gray-500">{result.period}</div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <FaQuoteLeft className="w-6 h-6 text-blue-600 mb-2" />
                    <p className="text-gray-700 italic mb-3">"{selectedCase.testimonial.quote}"</p>
                    <div className="text-sm">
                      <div className="font-semibold text-gray-900">{selectedCase.testimonial.author}</div>
                      <div className="text-gray-600">{selectedCase.testimonial.position}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <FaCalendarAlt className="w-4 h-4" />
                  <span>Start Your Project</span>
                </Link>
                <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center space-x-2">
                  <FaDownload className="w-4 h-4" />
                  <span>Download Case Study</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join the businesses that have transformed their operations and achieved 
            remarkable growth with our technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Start Your Transformation
            </Link>
            <Link
              href="/solutions"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudiesPage

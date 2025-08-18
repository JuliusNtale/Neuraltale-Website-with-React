'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  FaWifi, 
  FaStore, 
  FaGraduationCap, 
  FaHotel,
  FaBuilding,
  FaMobile,
  FaCreditCard,
  FaShieldAlt,
  FaArrowRight,
  FaCheck,
  FaCalendarAlt,
  FaDownload
} from 'react-icons/fa'

const SolutionsPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('sme')

  const industries = [
    {
      id: 'sme',
      name: 'SMEs',
      icon: FaBuilding,
      title: 'Small & Medium Enterprises',
      description: 'Complete technology infrastructure for growing businesses',
      solutions: [
        'Business Wi-Fi Networks',
        'Point-of-Sale Systems', 
        'Customer Management Software',
        'Mobile Payment Integration',
        'Cloud Storage & Backup',
        'Cybersecurity Solutions'
      ],
      benefits: [
        'Increase operational efficiency by 40%',
        'Reduce IT costs by 30%',
        'Improve customer experience',
        'Scale technology with business growth'
      ]
    },
    {
      id: 'hospitality',
      name: 'Hospitality',
      icon: FaHotel,
      title: 'Hotels & Restaurants',
      description: 'Guest-focused technology solutions for hospitality businesses',
      solutions: [
        'Guest Wi-Fi Hotspots',
        'Property Management Systems',
        'Online Booking Integration',
        'Digital Menu & Ordering',
        'Payment Gateway Integration',
        'Guest Analytics Dashboard'
      ],
      benefits: [
        'Enhance guest satisfaction',
        'Streamline operations',
        'Increase direct bookings',
        'Improve revenue per guest'
      ]
    },
    {
      id: 'education',
      name: 'Education',
      icon: FaGraduationCap,
      title: 'Educational Institutions',
      description: 'Digital learning infrastructure for schools and universities',
      solutions: [
        'Campus-wide Wi-Fi Networks',
        'Learning Management Systems',
        'Student Information Systems',
        'Digital Library Solutions',
        'Online Examination Platforms',
        'Virtual Classroom Setup'
      ],
      benefits: [
        'Enable digital learning',
        'Improve student engagement',
        'Streamline administration',
        'Support remote education'
      ]
    },
    {
      id: 'retail',
      name: 'Retail',
      icon: FaStore,
      title: 'Retail & Commerce',
      description: 'Modern retail technology for enhanced customer experiences',
      solutions: [
        'In-store Wi-Fi Networks',
        'Inventory Management Systems',
        'Mobile POS Solutions',
        'Customer Loyalty Programs',
        'E-commerce Integration',
        'Analytics & Reporting'
      ],
      benefits: [
        'Boost customer engagement',
        'Optimize inventory management',
        'Increase sales conversion',
        'Gain valuable insights'
      ]
    }
  ]

  const selectedIndustryData = industries.find(industry => industry.id === selectedIndustry)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Technology Solutions for Every Industry
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
              Tailored technology solutions designed to transform businesses across SMEs, 
              Hospitality, Education, and Retail sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Get Free Consultation
              </Link>
              <Link
                href="#industries"
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section id="industries" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose your industry to discover tailored technology solutions that address 
              your specific business needs and challenges.
            </p>
          </div>

          {/* Industry Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl border-2 transition-all duration-300 ${
                  selectedIndustry === industry.id
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                <industry.icon className="w-6 h-6" />
                <span className="font-semibold">{industry.name}</span>
              </button>
            ))}
          </div>

          {/* Selected Industry Details */}
          {selectedIndustryData && (
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <selectedIndustryData.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{selectedIndustryData.title}</h3>
                      <p className="text-gray-600">{selectedIndustryData.description}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Solutions Include:</h4>
                    <div className="space-y-3">
                      {selectedIndustryData.solutions.map((solution, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <FaCheck className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{solution}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/services"
                      className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>View Services</span>
                      <FaArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-6">Key Benefits:</h4>
                  <div className="space-y-4 mb-8">
                    {selectedIndustryData.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <FaCheck className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Ready to Get Started?</h5>
                    <p className="text-gray-600 mb-4">
                      Schedule a free consultation to discuss your specific needs and get a custom solution proposal.
                    </p>
                    <div className="flex flex-col space-y-3">
                      <Link
                        href="/contact"
                        className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <FaCalendarAlt className="w-4 h-4" />
                        <span>Schedule Consultation</span>
                      </Link>
                      <Link
                        href="#"
                        className="flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <FaDownload className="w-4 h-4" />
                        <span>Download Company Profile</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Core Technology Stack */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Technology Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to deliver robust, scalable solutions 
              across all industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FaWifi,
                title: 'Wi-Fi Infrastructure',
                description: 'Enterprise-grade networking with Omada and UniFi solutions',
                technologies: ['TP-Link Omada', 'Ubiquiti UniFi', 'Cisco Meraki', 'Aruba Networks']
              },
              {
                icon: FaMobile,
                title: 'Mobile Solutions',
                description: 'Cross-platform mobile applications for business needs',
                technologies: ['React Native', 'Flutter', 'Progressive Web Apps', 'Native iOS/Android']
              },
              {
                icon: FaCreditCard,
                title: 'Payment Integration',
                description: 'Seamless payment processing for Tanzanian businesses',
                technologies: ['M-Pesa API', 'Airtel Money', 'Tigo Pesa', 'VISA/Mastercard']
              },
              {
                icon: FaShieldAlt,
                title: 'Cybersecurity',
                description: 'Comprehensive security solutions and monitoring',
                technologies: ['Firewall Setup', 'VPN Solutions', 'Security Monitoring', 'Compliance']
              }
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{tech.title}</h3>
                <p className="text-gray-600 mb-4">{tech.description}</p>
                <div className="space-y-1">
                  {tech.technologies.map((technology, techIndex) => (
                    <div key={techIndex} className="text-sm text-gray-500">
                      {technology}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Transform Your Business with Technology
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of businesses across Tanzania that have modernized their operations 
            with NEURALTALE's technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Start Your Project
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SolutionsPage

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  FaBuilding,
  FaHotel,
  FaGraduationCap,
  FaStore,
  FaUsers,
  FaChartLine,
  FaGlobe,
  FaHandshake,
  FaRocket,
  FaCheck,
  FaArrowRight
} from 'react-icons/fa'

const IndustriesPage = () => {
  const [activeIndustry, setActiveIndustry] = useState(0)

  const industries = [
    {
      id: 'sme',
      title: 'Small & Medium Enterprises (SMEs)',
      icon: FaBuilding,
      description: 'Empowering growing businesses with scalable technology solutions',
      challenge: 'SMEs often struggle with limited IT budgets and lack of technical expertise',
      solution: 'Cost-effective, easy-to-manage technology that grows with your business',
      services: [
        'Business Wi-Fi Network Setup',
        'Point-of-Sale (POS) Systems',
        'Customer Management Software',
        'Mobile Payment Integration',
        'Cloud Storage & Backup Solutions',
        'Basic Cybersecurity Setup'
      ],
      benefits: [
        'Reduce operational costs by 30%',
        'Improve customer service efficiency',
        'Streamline business processes',
        'Enable remote work capabilities',
        'Secure business data and transactions'
      ],
      caseStudy: {
        client: 'Mwenge Electronics Shop',
        result: 'Increased sales by 45% with integrated POS and inventory management system'
      },
      stats: {
        clients: '150+',
        satisfaction: '98%',
        avgROI: '250%'
      }
    },
    {
      id: 'hospitality',
      title: 'Hospitality & Tourism',
      icon: FaHotel,
      description: 'Enhancing guest experiences through innovative technology',
      challenge: 'Managing guest expectations while maintaining operational efficiency',
      solution: 'Guest-centric technology that improves satisfaction and streamlines operations',
      services: [
        'Guest Wi-Fi Hotspot Solutions',
        'Property Management Systems',
        'Online Booking Integration',
        'Digital Menu & Ordering Systems',
        'Guest Analytics & CRM',
        'Revenue Management Tools'
      ],
      benefits: [
        'Improve guest satisfaction scores',
        'Increase direct bookings',
        'Reduce operational overhead',
        'Enhance revenue per available room',
        'Streamline staff workflows'
      ],
      caseStudy: {
        client: 'Serengeti View Lodge',
        result: 'Improved guest satisfaction by 60% with seamless Wi-Fi and digital services'
      },
      stats: {
        clients: '75+',
        satisfaction: '96%',
        avgROI: '180%'
      }
    },
    {
      id: 'education',
      title: 'Educational Institutions',
      icon: FaGraduationCap,
      description: 'Transforming learning through digital innovation',
      challenge: 'Bridging the digital divide while maintaining quality education',
      solution: 'Comprehensive digital learning infrastructure and management systems',
      services: [
        'Campus-wide Wi-Fi Networks',
        'Learning Management Systems (LMS)',
        'Student Information Systems',
        'Digital Library Solutions',
        'Virtual Classroom Setup',
        'Educational Content Management'
      ],
      benefits: [
        'Enable blended learning approaches',
        'Improve student engagement',
        'Streamline administrative processes',
        'Support remote learning capabilities',
        'Enhance teaching effectiveness'
      ],
      caseStudy: {
        client: 'Arusha Technical College',
        result: 'Enabled online learning for 2,000+ students during COVID-19 pandemic'
      },
      stats: {
        clients: '40+',
        satisfaction: '94%',
        avgROI: '320%'
      }
    },
    {
      id: 'retail',
      title: 'Retail & E-commerce',
      icon: FaStore,
      description: 'Modernizing retail operations for the digital age',
      challenge: 'Competing with online retailers while maintaining in-store experience',
      solution: 'Omnichannel retail technology that bridges online and offline experiences',
      services: [
        'In-store Wi-Fi & Customer Analytics',
        'Inventory Management Systems',
        'Mobile POS Solutions',
        'E-commerce Platform Integration',
        'Customer Loyalty Programs',
        'Sales Analytics & Reporting'
      ],
      benefits: [
        'Increase sales conversion rates',
        'Optimize inventory management',
        'Enhance customer experience',
        'Gain valuable business insights',
        'Expand market reach online'
      ],
      caseStudy: {
        client: 'Mlimani City Mall Stores',
        result: 'Increased customer engagement by 85% with integrated loyalty program'
      },
      stats: {
        clients: '200+',
        satisfaction: '97%',
        avgROI: '280%'
      }
    }
  ]

  const overallStats = [
    { label: 'Industries Served', value: '4+', icon: FaGlobe },
    { label: 'Total Clients', value: '465+', icon: FaUsers },
    { label: 'Average ROI', value: '257%', icon: FaChartLine },
    { label: 'Client Satisfaction', value: '96%', icon: FaHandshake }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto mb-8">
              Specialized technology solutions tailored for SMEs, Hospitality, Education, 
              and Retail sectors across Tanzania.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {overallStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-6 h-6 text-green-300" />
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-green-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tailored Solutions for Every Sector
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We understand that each industry has unique challenges and requirements. 
              Our solutions are specifically designed to address sector-specific needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 mb-12">
            {industries.map((industry, index) => (
              <button
                key={industry.id}
                onClick={() => setActiveIndustry(index)}
                className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                  activeIndustry === index
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-center mb-4">
                  <industry.icon className={`w-8 h-8 mr-3 ${
                    activeIndustry === index ? 'text-white' : 'text-blue-600'
                  }`} />
                  <h3 className="font-semibold text-lg">{industry.title.split(' ')[0]}</h3>
                </div>
                <p className={`text-sm ${
                  activeIndustry === index ? 'text-blue-100' : 'text-gray-600'
                }`}>
                  {industry.description}
                </p>
              </button>
            ))}
          </div>

          {/* Active Industry Details */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-blue-100 rounded-lg mr-6">
                  {industries[activeIndustry] && (() => {
                    const IconComponent = industries[activeIndustry].icon;
                    return <IconComponent className="w-10 h-10 text-blue-600" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {industries[activeIndustry]?.title}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {industries[activeIndustry]?.description}
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">The Challenge</h4>
                    <p className="text-gray-600 bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                      {industries[activeIndustry]?.challenge}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Our Solution</h4>
                    <p className="text-gray-600 bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                      {industries[activeIndustry]?.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Services We Provide</h4>
                    <div className="space-y-3">
                      {industries[activeIndustry]?.services.map((service, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <FaCheck className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h4>
                    <div className="space-y-3">
                      {industries[activeIndustry]?.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <FaRocket className="w-3 h-3 text-blue-600" />
                          </div>
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 mb-8">
                    <h5 className="font-semibold text-gray-900 mb-2">Success Story</h5>
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>{industries[activeIndustry]?.caseStudy.client}</strong>
                    </p>
                    <p className="text-gray-700">
                      {industries[activeIndustry]?.caseStudy.result}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        {industries[activeIndustry]?.stats.clients}
                      </div>
                      <div className="text-sm text-gray-600">Clients Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">
                        {industries[activeIndustry]?.stats.satisfaction}
                      </div>
                      <div className="text-sm text-gray-600">Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        {industries[activeIndustry]?.stats.avgROI}
                      </div>
                      <div className="text-sm text-gray-600">Avg ROI</div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-3">
                    <Link
                      href="/solutions"
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>View Solutions</span>
                      <FaArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 text-center"
                    >
                      Get Industry-Specific Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Your Industry */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Industry Leaders Choose Neuraltale
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our deep understanding of industry-specific challenges and proven track record 
              makes us the preferred technology partner.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Industry Expertise',
                description: 'Deep understanding of sector-specific challenges and regulations',
                features: ['Compliance Knowledge', 'Best Practices', 'Risk Management', 'Standards Adherence']
              },
              {
                title: 'Proven Solutions',
                description: 'Battle-tested technology solutions with measurable results',
                features: ['Case Studies', 'ROI Tracking', 'Performance Metrics', 'Success Stories']
              },
              {
                title: 'Local Support',
                description: 'On-ground support team that understands Tanzanian business landscape',
                features: ['24/7 Support', 'Local Presence', 'Quick Response', 'Cultural Understanding']
              }
            ].map((reason, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 mb-4">{reason.description}</p>
                <ul className="space-y-2">
                  {reason.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <FaCheck className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join industry leaders who have already modernized their operations with our 
            specialized technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Get Industry Consultation
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default IndustriesPage

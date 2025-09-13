'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  FaCode, 
  FaDatabase, 
  FaGlobe,
  FaCheckCircle,
  FaArrowRight,
  FaClock,
  FaUsers,
  FaShieldAlt,
  FaLightbulb,
  FaRocket,
  FaTag,
  FaBuilding,
  FaIndustry,
  FaBusinessTime
} from 'react-icons/fa'
import ServiceQuoteForm from '@/components/ServiceQuoteForm'

const CorporateServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showQuoteForm, setShowQuoteForm] = useState(false)
  const [selectedPackageForQuote, setSelectedPackageForQuote] = useState('')

  const corporateServices = [
    {
      category: 'enterprise',
      title: 'Enterprise Software Solutions',
      subtitle: 'Custom enterprise applications for large organizations',
      icon: FaBuilding,
      description: 'Scalable, secure enterprise software solutions designed to streamline your business operations and drive digital transformation.',
      features: [
        'Custom ERP/CRM systems',
        'Enterprise architecture design',
        'Legacy system modernization',
        'API integration & development',
        'Cloud migration strategies',
        'Security compliance (ISO 27001, SOC 2)',
        '24/7 enterprise support',
        'Dedicated project manager'
      ],
      timeline: '3-12 months',
      pricing: 'Contact for custom quote',
      bestFor: 'Large corporations, government agencies, multinational companies'
    },
    {
      category: 'infrastructure',
      title: 'IT Infrastructure & Cloud Services',
      subtitle: 'Complete IT infrastructure management and cloud solutions',
      icon: FaDatabase,
      description: 'Professional IT infrastructure services including cloud architecture, server management, and network security solutions.',
      features: [
        'Cloud infrastructure setup (AWS, Azure, GCP)',
        'Server installation & configuration',
        'Network security implementation',
        'Data backup & disaster recovery',
        'Infrastructure monitoring & maintenance',
        'Cybersecurity audits & compliance',
        'Scalability planning',
        'Performance optimization'
      ],
      timeline: '1-6 months',
      pricing: 'Starting from $2,000/month',
      bestFor: 'Medium to large businesses, financial institutions, healthcare'
    },
    {
      category: 'development',
      title: 'Custom Software Development',
      subtitle: 'Tailored software solutions for business needs',
      icon: FaCode,
      description: 'Full-stack development services creating custom applications that align with your business objectives and processes.',
      features: [
        'Web application development',
        'Mobile app development (iOS/Android)',
        'Desktop application development',
        'API development & integration',
        'Database design & optimization',
        'Quality assurance & testing',
        'Documentation & training',
        'Ongoing maintenance & support'
      ],
      timeline: '2-8 months',
      pricing: 'Starting from $15,000',
      bestFor: 'Growing businesses, startups scaling operations, established companies'
    },
    {
      category: 'consulting',
      title: 'Technology Consulting & Strategy',
      subtitle: 'Strategic technology guidance for business growth',
      icon: FaLightbulb,
      description: 'Expert technology consulting to help businesses make informed decisions about their digital transformation journey.',
      features: [
        'Technology assessment & audit',
        'Digital transformation roadmap',
        'Technology stack recommendations',
        'Process optimization consulting',
        'Vendor selection & management',
        'ROI analysis & cost optimization',
        'Training & change management',
        'Ongoing strategic support'
      ],
      timeline: '1-3 months',
      pricing: 'Starting from $5,000',
      bestFor: 'C-level executives, IT directors, business owners'
    },
    {
      category: 'equipment',
      title: 'Professional Equipment Supply',
      subtitle: 'Enterprise-grade hardware and networking equipment',
      icon: FaIndustry,
      description: 'Supply and installation of professional IT equipment, networking hardware, and technology infrastructure components.',
      features: [
        'Enterprise servers & workstations',
        'Networking equipment (routers, switches, firewalls)',
        'Security systems & cameras',
        'IoT devices & sensors',
        'Audio/visual conference systems',
        'Installation & configuration',
        'Warranty & support services',
        'Equipment lifecycle management'
      ],
      timeline: '2-8 weeks',
      pricing: 'Custom quotes based on requirements',
      bestFor: 'Offices, manufacturing facilities, educational institutions'
    },
    {
      category: 'security',
      title: 'Physical Security Services',
      subtitle: 'Comprehensive security solutions for homes and businesses',
      icon: FaShieldAlt,
      description: 'Complete physical security services including CCTV surveillance, access control systems, perimeter security, and automated gate solutions.',
      features: [
        'CCTV camera installation & monitoring',
        'IP surveillance systems with remote access',
        'Automatic & remote gate control systems',
        'Wire fence & perimeter security installation',
        'Access control systems (biometric, card readers)',
        'Motion detection & alarm systems',
        'Security system integration & automation',
        '24/7 monitoring & maintenance support'
      ],
      timeline: '1-4 weeks',
      pricing: 'Starting from $2,500 for basic systems',
      bestFor: 'Residential homes, office buildings, industrial facilities, retail stores'
    },
    {
      category: 'support',
      title: 'Managed IT Services',
      subtitle: '24/7 IT support and system management',
      icon: FaBusinessTime,
      description: 'Comprehensive managed IT services to keep your business technology running smoothly with proactive monitoring and support.',
      features: [
        '24/7 system monitoring & support',
        'Help desk & user support',
        'Proactive maintenance & updates',
        'Security monitoring & incident response',
        'Backup monitoring & testing',
        'Performance reporting & analytics',
        'Strategic technology planning',
        'Vendor management & coordination'
      ],
      timeline: 'Ongoing monthly service',
      pricing: 'Starting from $150/user/month',
      bestFor: 'Businesses without dedicated IT staff, remote teams'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Services', icon: FaGlobe },
    { id: 'enterprise', name: 'Enterprise Solutions', icon: FaBuilding },
    { id: 'infrastructure', name: 'Infrastructure', icon: FaDatabase },
    { id: 'development', name: 'Development', icon: FaCode },
    { id: 'consulting', name: 'Consulting', icon: FaLightbulb },
    { id: 'equipment', name: 'Equipment Supply', icon: FaIndustry },
    { id: 'security', name: 'Security Services', icon: FaShieldAlt },
    { id: 'support', name: 'Managed Services', icon: FaBusinessTime }
  ]

  const filteredServices = selectedCategory === 'all' 
    ? corporateServices 
    : corporateServices.filter(service => service.category === selectedCategory)

  const handleQuoteRequest = (serviceTitle: string) => {
    setSelectedPackageForQuote(serviceTitle)
    setShowQuoteForm(true)
  }

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-900 to-gray-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Professional Technology Services
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
                Comprehensive IT solutions and technology services designed for businesses, 
                enterprises, and organizations seeking professional digital transformation.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                  <FaBusinessTime className="text-blue-300" />
                  <span>Enterprise-Grade Solutions</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                  <FaShieldAlt className="text-green-300" />
                  <span>Security & Compliance</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                  <FaUsers className="text-yellow-300" />
                  <span>Dedicated Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Service Categories
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive range of professional technology services 
                tailored for businesses of all sizes.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full border-2 transition-all duration-300 hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300 hover:text-blue-600'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="quote" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredServices.map((service, index) => (
                <div
                  key={service.title}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <service.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                        <p className="text-gray-600 text-sm">{service.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center text-sm">
                        <FaClock className="w-4 h-4 text-blue-600 mr-2" />
                        <span className="text-gray-600">Timeline: {service.timeline}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <FaTag className="w-4 h-4 text-green-600 mr-2" />
                        <span className="text-gray-600">Pricing: {service.pricing}</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-gray-500 font-medium">Best for: </span>
                        <span className="text-gray-600">{service.bestFor}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <div className="space-y-2">
                        {service.features.slice(0, 4).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-2">
                            <FaCheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 4 && (
                          <div className="text-sm text-blue-600 font-medium">
                            +{service.features.length - 4} more features
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button
                        onClick={() => handleQuoteRequest(service.title)}
                        className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                      >
                        <span>Get Quote</span>
                        <FaArrowRight className="w-4 h-4" />
                      </button>
                      <button className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose NEURALTALE */}
        <section className="py-16  bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-100 mb-4">
                Why Choose NEURALTALE?
              </h2>
              <p className="text-lg text-white max-w-3xl mx-auto">
                We combine technical expertise with business understanding to deliver 
                solutions that drive real results for your organization.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: FaBusinessTime,
                  title: 'Enterprise Experience',
                  description: 'Years of experience working with large organizations and complex business requirements.'
                },
                {
                  icon: FaShieldAlt,
                  title: 'Security First',
                  description: 'All solutions built with security and compliance as core principles from day one.'
                },
                {
                  icon: FaUsers,
                  title: 'Dedicated Support',
                  description: '24/7 support with dedicated account managers and technical specialists.'
                },
                {
                  icon: FaRocket,
                  title: 'Scalable Solutions',
                  description: 'Future-proof technology solutions that grow with your business needs.'
                }
              ].map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-white">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Let's discuss how NEURALTALE can help accelerate your digital transformation 
                and drive business growth through technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => handleQuoteRequest('General Consultation')}
                  className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  Get Free Consultation
                </button>
                <Link
                  href="#contact"
                  className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300 inline-block"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Quote Form Modal */}
      {showQuoteForm && (
        <ServiceQuoteForm
          isOpen={showQuoteForm}
          selectedService={selectedPackageForQuote}
          onClose={() => setShowQuoteForm(false)}
        />
      )}
    </>
  )
}

export default CorporateServicesPage

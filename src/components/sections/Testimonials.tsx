'use client'

import { useState, useMemo, useCallback } from 'react'
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  companyType: string
  location: string
  content: string
  rating: number
  project: string
  results: string[]
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Mwangi',
    position: 'General Manager',
    company: 'Kilimanjaro Hotel',
    companyType: 'Hospitality',
    location: 'Arusha',
    content: 'Neuraltale transformed our guest Wi-Fi experience completely. Before, we had constant complaints about slow internet. Now our guests consistently praise our connectivity in reviews. The TP-Link Omada system they installed has been rock solid for 18 months.',
    rating: 5,
    project: 'Complete hotel Wi-Fi infrastructure for 80 rooms',
    results: [
      '99.5% network uptime',
      '40% increase in positive reviews mentioning Wi-Fi',
      'Zero guest Wi-Fi complaints in the last 12 months'
    ]
  },
  {
    id: 2,
    name: 'James Mollel',
    position: 'Operations Manager',
    company: 'Dar Logistics Ltd',
    companyType: 'Logistics',
    location: 'Dar es Salaam',
    content: 'Our warehouse operations depend on real-time inventory tracking. Neuraltale designed a network that handles 200+ scanners and tablets without any slowdowns. The system has paid for itself through improved efficiency and reduced errors.',
    rating: 5,
    project: 'Industrial network for 15,000 sqm warehouse facility',
    results: [
      '25% improvement in picking accuracy',
      '30% reduction in inventory processing time',
      'Seamless integration with existing WMS'
    ]
  },
  {
    id: 3,
    name: 'Dr. Amina Hassan',
    position: 'Director',
    company: 'Coast Medical Centre',
    companyType: 'Healthcare',
    location: 'Zanzibar',
    content: 'Patient data security was our biggest concern. Neuraltale implemented a HIPAA-compliant network that keeps our medical records completely separate from guest Wi-Fi. Their M-Pesa integration also allows patients to pay bills seamlessly.',
    rating: 5,
    project: 'Secure medical network with payment integration',
    results: [
      'Zero security incidents in 24 months',
      '50% faster patient check-in process',
      '90% of patients now use digital payments'
    ]
  },
  {
    id: 4,
    name: 'Peter Msigwa',
    position: 'IT Manager',
    company: 'Tanzanite Manufacturing',
    companyType: 'Manufacturing',
    location: 'Moshi',
    content: 'We needed a network that could handle harsh industrial conditions. The solution Neuraltale provided has survived dust, heat, and power fluctuations for over 2 years. Their local support is exceptional - they have never taken more than 4 hours to respond.',
    rating: 5,
    project: 'Industrial-grade network for manufacturing facility',
    results: [
      '99.8% uptime despite harsh conditions',
      '4-hour maximum support response time',
      '60% reduction in network-related downtime'
    ]
  },
  {
    id: 5,
    name: 'Grace Mushi',
    position: 'Principal',
    company: 'Mwanza Secondary School',
    companyType: 'Education',
    location: 'Mwanza',
    content: 'Neuraltale helped us bring reliable internet to our 800 students. The parental control features and bandwidth management ensure educational use while the student portal makes it easy to manage access. This has revolutionized how we teach.',
    rating: 5,
    project: 'Educational network for 800+ students and 45 staff',
    results: [
      '100% curriculum now includes digital learning',
      '80% improvement in student research capabilities',
      'Reduced internet costs by 35% through better management'
    ]
  },
  {
    id: 6,
    name: 'Mohamed Ali',
    position: 'Owner',
    company: 'Stone Town Restaurants',
    companyType: 'Restaurant Chain',
    location: 'Zanzibar',
    content: 'Managing 5 restaurant locations was a nightmare before Neuraltale. Now I can see real-time sales, manage inventory, and even monitor security cameras from my phone. Their cloud-based system works perfectly even during power outages with the UPS setup.',
    rating: 5,
    project: 'Multi-location restaurant management system',
    results: [
      'Real-time monitoring across 5 locations',
      '25% improvement in inventory management',
      'Seamless operations during power outages'
    ]
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = useMemo(() => [
    { id: 'all', name: 'All Industries', count: testimonials.length },
    { id: 'hospitality', name: 'Hospitality', count: testimonials.filter(t => t.companyType === 'Hospitality').length },
    { id: 'healthcare', name: 'Healthcare', count: testimonials.filter(t => t.companyType === 'Healthcare').length },
    { id: 'education', name: 'Education', count: testimonials.filter(t => t.companyType === 'Education').length },
    { id: 'manufacturing', name: 'Manufacturing', count: testimonials.filter(t => t.companyType === 'Manufacturing').length }
  ], [])

  const filteredTestimonials = useMemo(() => 
    selectedCategory === 'all' 
      ? testimonials 
      : testimonials.filter(t => t.companyType.toLowerCase() === selectedCategory),
    [selectedCategory]
  )

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length)
  }, [filteredTestimonials.length])

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length)
  }, [filteredTestimonials.length])

  const currentTestimonial = filteredTestimonials[currentIndex] || testimonials[0]

  const renderStars = useCallback((rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ))
  }, [])

  const getInitials = useCallback((name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }, [])

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real feedback from businesses across Tanzania who have transformed their operations with our technology solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id)
                setCurrentIndex(0)
              }}
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

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-blue-100">
              <FaQuoteLeft className="w-12 h-12" />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="w-5 h-5 text-gray-600" />
            </button>

            <div className="text-center">
              {/* Rating */}
              <div className="flex justify-center mb-6">
                {renderStars(currentTestimonial.rating)}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-medium italic">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Client Info */}
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mb-8">
                <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                  {getInitials(currentTestimonial.name)}
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-blue-600 font-medium">
                    {currentTestimonial.position}
                  </p>
                  <p className="text-gray-600">
                    {currentTestimonial.company} • {currentTestimonial.location}
                  </p>
                </div>
              </div>

              {/* Project Details */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h5 className="font-semibold text-gray-900 mb-3">Project: {currentTestimonial.project}</h5>
                <div className="grid md:grid-cols-3 gap-4">
                  {currentTestimonial.results.map((result, index) => (
                    <div key={index} className="text-sm text-gray-600 bg-white rounded p-3">
                      ✓ {result}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {filteredTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            All Customer Success Stories
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm mr-4">
                    {getInitials(testimonial.name)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-gray-700 mb-4 line-clamp-3">
                  "{testimonial.content}"
                </p>
                
                <div className="text-sm text-blue-600 font-medium">
                  {testimonial.companyType} • {testimonial.location}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Let us help transform your business with reliable, scalable technology solutions 
            tailored to your specific needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Get Your Free Consultation
            </a>
            <a
              href="/portfolio"
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors duration-300"
            >
              View More Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

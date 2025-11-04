'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  FaHeadset,
  FaClock,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaSearch,
  FaBook,
  FaVideo,
  FaDownload,
  FaTicketAlt,
  FaChevronDown,
  FaChevronUp,
  FaExclamationTriangle,
  FaCheckCircle,
  FaInfoCircle,
  FaArrowRight,
  FaShieldAlt
} from 'react-icons/fa'

const SupportPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [ticketForm, setTicketForm] = useState({
    name: '',
    email: '',
    company: '',
    priority: 'medium',
    category: '',
    subject: '',
    description: ''
  })

  const supportCategories = [
    { id: 'all', name: 'All Topics', count: 24 },
    { id: 'network', name: 'Network Issues', count: 8 },
    { id: 'software', name: 'Software Support', count: 6 },
    { id: 'hardware', name: 'Hardware Problems', count: 4 },
    { id: 'security', name: 'Security Concerns', count: 3 },
    { id: 'billing', name: 'Billing & Account', count: 3 }
  ]

  const faqs = [
    {
      id: 1,
      category: 'network',
      question: 'My Wi-Fi network is running slowly. What should I check first?',
      answer: 'Start by checking the number of connected devices, as too many devices can slow down your network. Also verify your internet speed with your ISP, check for interference from other devices, and ensure your router firmware is up to date. If you have an Omada or UniFi setup, check the controller for any alerts or issues.'
    },
    {
      id: 2,
      category: 'network',
      question: 'How do I reset my Omada access point?',
      answer: 'To reset an Omada access point: 1) Locate the reset button on the device, 2) With the device powered on, press and hold the reset button for 10 seconds, 3) Release the button and wait for the device to reboot (LED indicators will show the status), 4) The device will return to factory defaults and need to be reconfigured through the Omada Controller.'
    },
    {
      id: 3,
      category: 'software',
      question: 'I cannot access my POS system. What should I do?',
      answer: 'First, check your internet connection and ensure all cables are properly connected. Try restarting the POS terminal and check if the software loads properly. If using a cloud-based system, verify your internet connection is stable. Contact our support team if the issue persists - we provide remote assistance for POS systems.'
    },
    {
      id: 4,
      category: 'software',
      question: 'How do I update my business software?',
      answer: 'Software updates depend on your specific system. For cloud-based solutions, updates are automatic. For local installations, check the software\'s help menu for update options. We recommend scheduling updates during off-peak hours. Our team can assist with major updates to ensure business continuity.'
    },
    {
      id: 5,
      category: 'security',
      question: 'I suspect my network has been compromised. What should I do immediately?',
      answer: 'Immediately disconnect from the internet, change all passwords (especially admin passwords), run a security scan on all devices, and contact our security team. Document any suspicious activities and preserve logs if possible. We offer emergency security response within 2 hours for critical issues.'
    },
    {
      id: 6,
      category: 'hardware',
      question: 'My network equipment is not powering on. How can I troubleshoot?',
      answer: 'Check the power adapter and ensure it\'s properly plugged in. Try a different power outlet and check if the power LED indicator is showing. For PoE devices, verify the PoE injector or switch is working. If the device still doesn\'t power on, it may need replacement - contact us for hardware support.'
    },
    {
      id: 7,
      category: 'billing',
      question: 'How can I view my service invoice and payment history?',
      answer: 'Log into your client portal at portal.Neuraltale.co.tz to view all invoices and payment history. You can also request invoices via email or contact our billing department. We accept payments via bank transfer, mobile money (M-Pesa, Airtel Money), and cash payments at our offices.'
    },
    {
      id: 8,
      category: 'billing',
      question: 'What is included in my support package?',
      answer: 'Support packages vary by service level. Basic support includes email support and knowledge base access. Premium support includes 24/7 phone support, remote assistance, on-site visits, and priority response times. Enterprise clients receive dedicated support managers and proactive monitoring.'
    }
  ]

  const supportChannels = [
    {
      icon: FaPhone,
      title: '24/7 Phone Support',
      description: 'Call us anytime for urgent technical issues',
      contact: '+25565320829',
      availability: 'Available 24/7',
      responseTime: 'Immediate',
      priority: 'Critical & Urgent Issues'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp Support',
      description: 'Quick support via WhatsApp messaging',
      contact: '+255 987 654 321',
      availability: '6 AM - 10 PM EAT',
      responseTime: '< 15 minutes',
      priority: 'General Questions & Issues'
    },
    {
      icon: FaEnvelope,
      title: 'Email Support',
      description: 'Detailed technical support via email',
      contact: 'support@Neuraltale.co.tz',
      availability: 'Business Hours',
      responseTime: '< 2 hours',
      priority: 'Non-Urgent Issues'
    },
    {
      icon: FaTicketAlt,
      title: 'Support Tickets',
      description: 'Track your support requests online',
      contact: 'portal.Neuraltale.co.tz',
      availability: '24/7 Access',
      responseTime: 'Varies by Priority',
      priority: 'All Issue Types'
    }
  ]

  const knowledgeBase = [
    {
      icon: FaBook,
      title: 'User Guides',
      description: 'Step-by-step guides for all our solutions',
      count: '50+ Guides',
      link: '/knowledge-base/guides'
    },
    {
      icon: FaVideo,
      title: 'Video Tutorials',
      description: 'Watch and learn with video tutorials',
      count: '25+ Videos',
      link: '/knowledge-base/videos'
    },
    {
      icon: FaDownload,
      title: 'Downloads',
      description: 'Software, drivers, and documentation',
      count: '100+ Files',
      link: '/knowledge-base/downloads'
    },
    {
      icon: FaShieldAlt,
      title: 'Security Best Practices',
      description: 'Keep your systems secure with our guides',
      count: '15+ Articles',
      link: '/knowledge-base/security'
    }
  ]

  const filteredFaqs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory)

  const searchFilteredFaqs = filteredFaqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Support ticket submitted:', ticketForm)
    alert('Support ticket submitted successfully! We will respond within 2 hours.')
    setTicketForm({
      name: '',
      email: '',
      company: '',
      priority: 'medium',
      category: '',
      subject: '',
      description: ''
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-teal-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Expert Support When You Need It
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 max-w-4xl mx-auto mb-8">
              Get help from our technical experts 24/7. From quick fixes to complex 
              troubleshooting, we're here to keep your technology running smoothly.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                { label: 'Support Channels', value: '4+', icon: FaHeadset },
                { label: 'Response Time', value: '< 2hrs', icon: FaClock },
                { label: 'Satisfaction Rate', value: '98%', icon: FaCheckCircle },
                { label: 'Knowledge Base', value: '200+', icon: FaBook }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-6 h-6 text-teal-300" />
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-teal-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Multiple Ways to Get Support
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the support channel that works best for your situation. 
              We're available 24/7 for critical issues.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <channel.icon className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{channel.title}</h3>
                <p className="text-gray-600 mb-4">{channel.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Contact:</span>
                    <span className="font-medium text-gray-900">{channel.contact}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Available:</span>
                    <span className="font-medium text-gray-900">{channel.availability}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Response:</span>
                    <span className="font-medium text-green-600">{channel.responseTime}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <span className="text-xs text-gray-500">Best for: </span>
                  <span className="text-xs font-medium text-gray-700">{channel.priority}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Self-Service Knowledge Base
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers instantly with our comprehensive knowledge base, tutorials, 
              and documentation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {knowledgeBase.map((resource, index) => (
              <Link 
                key={index} 
                href={resource.link}
                className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300 block"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <resource.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-3">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-600">{resource.count}</span>
                  <FaArrowRight className="w-4 h-4 text-blue-600" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Quick answers to the most common questions from our clients.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8">
            <div className="max-w-2xl mx-auto mb-6">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {supportCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-teal-600 text-white border-teal-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-teal-300 hover:text-teal-600'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {searchFilteredFaqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg border border-gray-200">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                >
                  <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {expandedFaq === faq.id ? (
                    <FaChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <FaChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === faq.id && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {searchFilteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <FaInfoCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No FAQs Found</h3>
              <p className="text-gray-600">Try adjusting your search or contact our support team.</p>
            </div>
          )}
        </div>
      </section>

      {/* Support Ticket Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Submit a Support Ticket
            </h2>
            <p className="text-lg text-gray-600">
              Can't find the answer you're looking for? Submit a support ticket and our 
              technical team will help you.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <form onSubmit={handleTicketSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={ticketForm.name}
                    onChange={(e) => setTicketForm({...ticketForm, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={ticketForm.email}
                    onChange={(e) => setTicketForm({...ticketForm, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    value={ticketForm.company}
                    onChange={(e) => setTicketForm({...ticketForm, company: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Priority Level *
                  </label>
                  <select
                    value={ticketForm.priority}
                    onChange={(e) => setTicketForm({...ticketForm, priority: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  >
                    <option value="low">Low - General Question</option>
                    <option value="medium">Medium - Minor Issue</option>
                    <option value="high">High - Service Disruption</option>
                    <option value="critical">Critical - System Down</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Issue Category *
                </label>
                <select
                  value={ticketForm.category}
                  onChange={(e) => setTicketForm({...ticketForm, category: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="network">Network Issues</option>
                  <option value="software">Software Support</option>
                  <option value="hardware">Hardware Problems</option>
                  <option value="security">Security Concerns</option>
                  <option value="billing">Billing & Account</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  value={ticketForm.subject}
                  onChange={(e) => setTicketForm({...ticketForm, subject: e.target.value})}
                  placeholder="Brief description of your issue"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Detailed Description *
                </label>
                <textarea
                  value={ticketForm.description}
                  onChange={(e) => setTicketForm({...ticketForm, description: e.target.value})}
                  rows={6}
                  placeholder="Please provide detailed information about your issue, including any error messages, steps to reproduce, and what you've already tried..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start">
                  <FaExclamationTriangle className="w-5 h-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-1">Response Time Expectations</h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Critical: Within 30 minutes</li>
                      <li>• High: Within 2 hours</li>
                      <li>• Medium: Within 4 hours</li>
                      <li>• Low: Within 1 business day</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors duration-300 flex items-center space-x-2 mx-auto"
                >
                  <FaTicketAlt className="w-5 h-5" />
                  <span>Submit Support Ticket</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-16 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <FaExclamationTriangle className="w-8 h-8 text-red-600 mr-3" />
            <h2 className="text-3xl font-bold text-red-900">Emergency Support</h2>
          </div>
          <p className="text-lg text-red-700 mb-8">
            System completely down? Critical security breach? Call our emergency hotline 
            for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+25565320829"
              className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <FaPhone className="w-5 h-5" />
              <span>Emergency: +25565320829</span>
            </a>
            <a
              href="https://wa.me/255987654321"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>WhatsApp Emergency</span>
            </a>
          </div>
          <p className="text-sm text-red-600 mt-4">
            Available 24/7 for critical issues that affect business operations
          </p>
        </div>
      </section>
    </div>
  )
}

export default SupportPage

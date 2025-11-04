'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  FaUsers,
  FaGraduationCap,
  FaClock,
  FaMapMarkerAlt,
  FaArrowRight,
  FaHeart,
  FaRocket,
  FaShieldAlt,
  FaGlobe,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt
} from 'react-icons/fa'

const CareersPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all')
  const [applicationForm, setApplicationForm] = useState({
    position: '',
    name: '',
    email: '',
    phone: '',
    experience: '',
    coverLetter: ''
  })

  const departments = [
    { id: 'all', name: 'All Positions', count: 12 },
    { id: 'engineering', name: 'Engineering', count: 5 },
    { id: 'support', name: 'Technical Support', count: 3 },
    { id: 'sales', name: 'Sales & Marketing', count: 2 },
    { id: 'management', name: 'Management', count: 2 }
  ]

  const openPositions = [
    {
      id: 1,
      title: 'Senior Software Developer',
      department: 'engineering',
      type: 'Remote',
      location: 'Dar es Salaam',
      experience: '3-5 years',
      description: 'Lead development of custom software solutions for our enterprise clients across various industries.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience with React, Node.js, and Python',
        'Experience with database design and optimization',
        'Strong problem-solving and communication skills',
        'Experience with cloud platforms (AWS/Azure preferred)'
      ],
      responsibilities: [
        'Design and develop scalable web applications',
        'Collaborate with cross-functional teams',
        'Mentor junior developers',
        'Code review and quality assurance',
        'Client interaction and requirement gathering'
      ],
      benefits: [
        'Performance bonuses',
        'Health insurance for you and your family',
        'Professional development opportunities',
        'Flexible working arrangements',
        'Annual leave and sick leave'
      ]
    },
    {
      id: 2,
      title: 'Network Infrastructure Specialist',
      department: 'engineering',
      type: 'Part-time',
      location: 'Arusha',
      experience: '2-4 years',
      description: 'Design and implement enterprise network solutions using Omada and UniFi technologies.',
      requirements: [
        'Network+ or CCNA certification preferred',
        '2+ years experience with enterprise networking',
        'Experience with TP-Link Omada and Ubiquiti UniFi',
        'Knowledge of network security principles',
        'Valid driver\'s license and willingness to travel'
      ],
      responsibilities: [
        'Design network architectures for clients',
        'Install and configure network equipment',
        'Troubleshoot network issues',
        'Provide technical documentation',
        'Train client staff on network usage'
      ],
      benefits: [
        'Travel allowances and company vehicle',
        'Technical certification support',
        'Equipment and tools provided',
        'Performance-based incentives',
        'Career advancement opportunities'
      ]
    },
    {
      id: 3,
      title: 'Technical Support Engineer',
      department: 'support',
      type: 'Full-time',
      location: 'Dar es Salaam',
      experience: '1-3 years',
      description: 'Provide technical support to our clients and ensure their systems run smoothly.',
      requirements: [
        'Diploma or degree in IT/Computer Science',
        'Experience with Windows and Linux systems',
        'Strong troubleshooting skills',
        'Excellent communication in English and Swahili',
        'Customer service experience preferred'
      ],
      responsibilities: [
        'Respond to client technical issues',
        'Remote and on-site troubleshooting',
        'System maintenance and updates',
        'Documentation of support cases',
        'Client training and knowledge transfer'
      ],
      benefits: [
        'Comprehensive training program',
        'Career progression pathway',
        'Health and accident insurance',
        'Transport allowance',
        'Team building activities'
      ]
    },
    {
      id: 4,
      title: 'Sales Executive - Technology Solutions',
      department: 'sales',
      type: 'Full-time',
      location: 'Dar es Salaam',
      experience: '2-4 years',
      description: 'Drive business growth by identifying and acquiring new clients for our technology solutions.',
      requirements: [
        'Bachelor\'s degree in Business, Marketing, or IT',
        '2+ years experience in B2B sales',
        'Understanding of technology solutions',
        'Excellent presentation and negotiation skills',
        'Valid driver\'s license'
      ],
      responsibilities: [
        'Identify and qualify new business opportunities',
        'Conduct client presentations and demos',
        'Develop and maintain client relationships',
        'Collaborate with technical teams for proposals',
        'Meet and exceed sales targets'
      ],
      benefits: [
        'Attractive commission structure',
        'Company car and fuel allowance',
        'Sales incentive trips',
        'Professional development training',
        'Performance bonuses'
      ]
    },
    {
      id: 5,
      title: 'Project Manager',
      department: 'management',
      type: 'Full-time',
      location: 'Dar es Salaam',
      experience: '4-7 years',
      description: 'Lead technology implementation projects from initiation to completion ensuring client satisfaction.',
      requirements: [
        'Bachelor\'s degree in Engineering, IT, or Business',
        'PMP or similar project management certification',
        '4+ years experience in project management',
        'Experience with technology implementations',
        'Strong leadership and communication skills'
      ],
      responsibilities: [
        'Plan and execute technology projects',
        'Manage project teams and resources',
        'Client relationship management',
        'Risk management and quality assurance',
        'Budget management and reporting'
      ],
      benefits: [
        'Leadership development programs',
        'International certification support',
        'Performance-based bonuses',
        'Executive health package',
        'Flexible working arrangements'
      ]
    }
  ]

  const companyBenefits = [
    {
      icon: FaHeart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, wellness programs, and mental health support'
    },
    {
      icon: FaGraduationCap,
      title: 'Learning & Development',
      description: 'Continuous learning opportunities, certifications, and skill development programs'
    },
    {
      icon: FaRocket,
      title: 'Career Growth',
      description: 'Clear career progression paths and opportunities to take on leadership roles'
    },
    {
      icon: FaShieldAlt,
      title: 'Job Security',
      description: 'Stable employment with a growing company in the expanding tech sector'
    },
    {
      icon: FaUsers,
      title: 'Great Team',
      description: 'Work with passionate, talented individuals in a collaborative environment'
    },
    {
      icon: FaGlobe,
      title: 'Impact',
      description: 'Make a real difference by helping businesses across Tanzania adopt technology'
    }
  ]

  const filteredPositions = selectedDepartment === 'all' 
    ? openPositions 
    : openPositions.filter(position => position.department === selectedDepartment)

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Application submitted:', applicationForm)
    alert('Thank you for your application! We will review it and get back to you within 5 business days.')
    setApplicationForm({
      position: '',
      name: '',
      email: '',
      phone: '',
      experience: '',
      coverLetter: ''
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our Innovation Team
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-4xl mx-auto mb-8">
              Build your career with Tanzania's leading technology solutions company. 
              Help businesses transform and grow through innovative technology.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                { label: 'Team Members', value: '50+' },
                { label: 'Open Positions', value: '12' },
                { label: 'Avg Experience', value: '5+ Years' },
                { label: 'Employee Satisfaction', value: '94%' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-indigo-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose NeuralTale as Your Career Destination?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer more than just a job - we provide a platform for growth, innovation, 
              and making a real impact in Tanzania's technology landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Open Positions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore opportunities to join our growing team and help shape the future of 
              technology in Tanzania.
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`px-6 py-3 rounded-lg border-2 transition-all duration-300 ${
                  selectedDepartment === dept.id
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-indigo-300 hover:text-indigo-600'
                }`}
              >
                <span className="font-medium">{dept.name}</span>
                <span className="ml-2 text-sm">({dept.count})</span>
              </button>
            ))}
          </div>

          {/* Positions List */}
          <div className="space-y-6">
            {filteredPositions.map((position) => (
              <div key={position.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <FaClock className="w-4 h-4 mr-1" />
                        {position.type}
                      </div>
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="w-4 h-4 mr-1" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <FaGraduationCap className="w-4 h-4 mr-1" />
                        {position.experience}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setApplicationForm({...applicationForm, position: position.title})}
                    className="mt-4 lg:mt-0 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span>Apply Now</span>
                    <FaArrowRight className="w-4 h-4" />
                  </button>
                </div>
                
                <p className="text-gray-600 mb-4">{position.description}</p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {position.requirements.slice(0, 3).map((req, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-indigo-600 mr-2">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Responsibilities</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {position.responsibilities.slice(0, 3).map((resp, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {position.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-purple-600 mr-2">•</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Apply for a Position
            </h2>
            <p className="text-lg text-gray-600">
              Ready to join our team? Fill out the application form below and we'll get back to you.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleApplicationSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Position Applied For
                  </label>
                  <select
                    value={applicationForm.position}
                    onChange={(e) => setApplicationForm({...applicationForm, position: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select a position</option>
                    {openPositions.map((position) => (
                      <option key={position.id} value={position.title}>
                        {position.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={applicationForm.name}
                    onChange={(e) => setApplicationForm({...applicationForm, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={applicationForm.email}
                    onChange={(e) => setApplicationForm({...applicationForm, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={applicationForm.phone}
                    onChange={(e) => setApplicationForm({...applicationForm, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Experience
                </label>
                <select
                  value={applicationForm.experience}
                  onChange={(e) => setApplicationForm({...applicationForm, experience: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                >
                  <option value="">Select experience level</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Letter / Why do you want to join NeuralTale?
                </label>
                <textarea
                  value={applicationForm.coverLetter}
                  onChange={(e) => setApplicationForm({...applicationForm, coverLetter: e.target.value})}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Tell us about yourself, your experience, and why you're interested in joining our team..."
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center space-x-2 mx-auto"
                >
                  <span>Submit Application</span>
                  <FaArrowRight className="w-4 h-4" />
                </button>
                <p className="text-sm text-gray-500 mt-3">
                  We'll review your application and get back to you within 5 business days.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact HR */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Have Questions About Careers?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our HR team is here to help answer any questions about career opportunities, 
            company culture, or the application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="flex items-center justify-center space-x-3 bg-gray-50 px-6 py-4 rounded-lg">
              <FaEnvelope className="w-5 h-5 text-indigo-600" />
              <div>
                <div className="font-semibold text-gray-900">Email HR</div>
                <div className="text-sm text-gray-600">juliusntale@neuraltale.com</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-gray-50 px-6 py-4 rounded-lg">
              <FaPhone className="w-5 h-5 text-indigo-600" />
              <div>
                <div className="font-semibold text-gray-900">Call HR</div>
                <div className="text-sm text-gray-600">+25565320829</div>
              </div>
            </div>
            <Link
              href="/contact"
              className="flex items-center justify-center space-x-3 bg-indigo-600 text-white px-6 py-4 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <FaCalendarAlt className="w-5 h-5" />
              <span>Schedule a Call</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CareersPage

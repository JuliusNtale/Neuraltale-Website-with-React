'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { X, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useEmailForm, validateQuoteForm } from '@/hooks/useEmailForm'
import type { QuoteFormData } from '@/lib/emailjs'

interface ServiceQuoteFormProps {
  isOpen: boolean
  onClose: () => void
  selectedService?: string
}

export default function ServiceQuoteForm({ isOpen, onClose, selectedService = '' }: ServiceQuoteFormProps) {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: selectedService,
    budget: '',
    timeline: '',
    requirements: '',
    location: '',
    employees: undefined
  })

  const { isSubmitting, isSuccess, error, submitForm } = useEmailForm()
  const [validationErrors, setValidationErrors] = useState<string[]>([])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ 
      ...prev, 
      [name]: name === 'employees' ? (value ? parseInt(value) : undefined) : value 
    }))
    
    // Clear validation errors when user starts typing
    if (validationErrors.length > 0) {
      setValidationErrors([])
    }
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    const errors = validateQuoteForm(formData)
    if (errors.length > 0) {
      setValidationErrors(errors)
      return
    }
    
    // Clear any previous errors
    setValidationErrors([])
    
    // Submit via EmailJS
    await submitForm(formData, 'quote')
    
    // Reset form and close modal if successful
    if (isSuccess) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        timeline: '',
        requirements: '',
        location: '',
        employees: undefined
      })
      
      // Close modal after 2 seconds
      setTimeout(() => {
        onClose()
      }, 2000)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Request a Service Quote</h2>
            <p className="text-gray-600 mt-1">Tell us about your project and we'll provide a detailed quote</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        <div className="p-6">
          {/* Success Message */}
          {isSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center space-x-3"
            >
              <CheckCircle className="w-6 h-6 text-green-500" />
              <div>
                <p className="text-green-700 font-semibold">Quote request sent successfully!</p>
                <p className="text-green-600 text-sm">We'll prepare your quote and get back to you within 24-48 hours.</p>
              </div>
            </motion.div>
          )}

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center space-x-3"
            >
              <AlertCircle className="w-6 h-6 text-red-500" />
              <div>
                <p className="text-red-700 font-semibold">Failed to send quote request</p>
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            </motion.div>
          )}

          {/* Validation Errors */}
          {validationErrors.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30"
            >
              <div className="flex items-center space-x-3 mb-2">
                <AlertCircle className="w-5 h-5 text-yellow-600" />
                <p className="text-yellow-700 font-semibold">Please fix the following errors:</p>
              </div>
              <ul className="text-yellow-600 text-sm space-y-1 ml-8">
                {validationErrors.map((error, index) => (
                  <li key={index}>• {error}</li>
                ))}
              </ul>
            </motion.div>
          )}

          <form onSubmit={onSubmit} className="space-y-6">
            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-900 font-medium mb-2">
                  Full Name *
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-gray-900 font-medium mb-2">
                  Email Address *
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-900 font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  placeholder="+255 XXX XXX XXX"
                />
              </div>
              
              <div>
                <label className="block text-gray-900 font-medium mb-2">
                  Company Name *
                </label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  placeholder="Your company name"
                />
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-gray-900 font-medium mb-2">
                Service Needed *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
              >
                <option value="">Select a service</option>
                <option value="Networking Solutions">Networking Solutions</option>
                <option value="Cloud Migration">Cloud Migration</option>
                <option value="Cybersecurity">Cybersecurity</option>
                <option value="AI/ML Implementation">AI/ML Implementation</option>
                <option value="Digital Transformation">Digital Transformation</option>
                <option value="IT Consulting">IT Consulting</option>
                <option value="Software Development">Software Development</option>
                <option value="Data Analytics">Data Analytics</option>
                <option value="Other">Other (please specify in requirements)</option>
              </select>
            </div>

            {/* Project Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-900 font-medium mb-2">
                  Budget Range *
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                >
                  <option value="">Select budget range</option>
                  <option value="Under $5,000">Under $5,000</option>
                  <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                  <option value="$15,000 - $50,000">$15,000 - $50,000</option>
                  <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                  <option value="Over $100,000">Over $100,000</option>
                  <option value="To be discussed">To be discussed</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-900 font-medium mb-2">
                  Timeline *
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                >
                  <option value="">Select timeline</option>
                  <option value="ASAP (Within 2 weeks)">ASAP (Within 2 weeks)</option>
                  <option value="1 month">1 month</option>
                  <option value="2-3 months">2-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6+ months">6+ months</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-900 font-medium mb-2">
                  Location
                </label>
                <input
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  placeholder="City, Country"
                />
              </div>
              
              <div>
                <label className="block text-gray-900 font-medium mb-2">
                  Number of Employees
                </label>
                <select
                  name="employees"
                  value={formData.employees || ''}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                >
                  <option value="">Select company size</option>
                  <option value="1">1 (Solo)</option>
                  <option value="5">2-5</option>
                  <option value="15">6-15</option>
                  <option value="50">16-50</option>
                  <option value="100">51-100</option>
                  <option value="500">101-500</option>
                  <option value="1000">500+</option>
                </select>
              </div>
            </div>

            {/* Requirements */}
            <div>
              <label className="block text-gray-900 font-medium mb-2">
                Project Requirements *
              </label>
              <textarea
                name="requirements"
                value={formData.requirements}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                placeholder="Please describe your project requirements, current challenges, goals, and any specific needs..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg rounded-lg shadow-lg relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>Sending Quote Request...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Request Quote</span>
                  </>
                )}
              </span>
            </motion.button>

            <p className="text-gray-500 text-sm text-center">
              We'll review your requirements and send a detailed quote within 24-48 hours.
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

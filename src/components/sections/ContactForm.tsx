'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { Send, CheckCircle, AlertCircle, Mail, Phone, MapPin, MessageSquare, User, Building, Globe, Sparkles, ArrowRight } from 'lucide-react'
import { useEmailForm, validateContactForm } from '@/hooks/useEmailForm'
import type { ContactFormData } from '@/lib/emailjs'

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  })
  
  const { isSubmitting, isSuccess, error, submitForm } = useEmailForm()
  const [validationErrors, setValidationErrors] = useState<string[]>([])
  const [focusedField, setFocusedField] = useState<string | null>(null)
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (validationErrors.length > 0) {
      setValidationErrors([])
    }
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const errors = validateContactForm(formData)
    if (errors.length > 0) {
      setValidationErrors(errors)
      return
    }
    
    setValidationErrors([])
    await submitForm(formData, 'contact')
    
    if (isSuccess) {
      setFormData({ 
        name: '', 
        email: '', 
        company: '', 
        subject: '', 
        message: '' 
      })
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'helpdesk@neuraltale.com',
      description: 'We respond within 2 hours',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      link: 'mailto:helpdesk@neuraltale.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+255 653 520 829',
      description: 'Mon-Fri, 9AM-6PM EAT',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20',
      link: 'tel:+255653520829'
    },
    {
      icon: MapPin,
      title: 'Visit Our Office',
      content: 'Dar es Salaam, Tanzania',
      description: 'East Africa - Schedule a meeting',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      link: '/location'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-pink-400/10 rounded-full blur-3xl"
        />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full text-blue-700 font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>Let's Build Something Amazing Together</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to transform your business with cutting-edge technology? 
            Our experts are here to turn your vision into reality.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Enhanced Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Whether you're looking to implement AI solutions, migrate to the cloud, 
                or enhance your cybersecurity, our team of experts is here to help you 
                navigate the future of technology.
              </p>
            </motion.div>

            {/* Enhanced Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                const CardContent = (
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 8 }}
                    className={`${info.bgColor} ${info.borderColor} rounded-2xl p-6 border backdrop-blur-sm hover:shadow-xl transition-all duration-500 group cursor-pointer`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${info.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">
                          {info.title}
                        </h4>
                        <p className="text-blue-600 font-semibold mb-1">
                          {info.content}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {info.description}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </motion.div>
                )

                return info.link?.startsWith('/') ? (
                  <Link key={index} href={info.link}>
                    {CardContent}
                  </Link>
                ) : (
                  <a key={index} href={info.link} target={info.link?.startsWith('mailto:') || info.link?.startsWith('tel:') ? '_self' : '_blank'} rel="noopener noreferrer">
                    {CardContent}
                  </a>
                )
              })}
            </div>

            {/* Enhanced Social Links */}
            <motion.div variants={itemVariants} className="pt-8">
              <h4 className="text-lg font-bold text-gray-900 mb-6">Connect With Us</h4>
              <div className="flex space-x-4">
                {[
                  { name: 'LinkedIn', color: 'from-blue-600 to-blue-700', icon: '💼' },
                  { name: 'Twitter', color: 'from-sky-400 to-sky-600', icon: '🐦' },
                  { name: 'GitHub', color: 'from-gray-700 to-gray-900', icon: '⚡' },
                  { name: 'Instagram', color: 'from-pink-500 to-purple-600', icon: '📷' }
                ].map((social, index) => (
                  <motion.button
                    key={social.name}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${social.color} flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden">
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-3xl " />
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-full text-blue-700 font-medium mb-4">
                    <MessageSquare className="w-4 h-4" />
                    <span>Send us a message</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">How can we help?</h3>
                </div>

                {/* Status Messages */}
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 flex items-center space-x-3"
                  >
                    <div className="p-2 bg-green-100 rounded-full">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-green-800 font-semibold">Message sent successfully! 🎉</p>
                      <p className="text-green-600 text-sm">We'll get back to you within 24 hours.</p>
                    </div>
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-center space-x-3"
                  >
                    <div className="p-2 bg-red-100 rounded-full">
                      <AlertCircle className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="text-red-800 font-semibold">Oops! Something went wrong</p>
                      <p className="text-red-600 text-sm">{error}</p>
                    </div>
                  </motion.div>
                )}

                {validationErrors.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="mb-6 p-4 rounded-xl bg-yellow-50 border border-yellow-200"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 bg-yellow-100 rounded-full">
                        <AlertCircle className="w-5 h-5 text-yellow-600" />
                      </div>
                      <p className="text-yellow-800 font-semibold">Please fix these errors:</p>
                    </div>
                    <ul className="text-yellow-700 text-sm space-y-1 ml-12">
                      {validationErrors.map((error, index) => (
                        <li key={index}>• {error}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                <form onSubmit={onSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="relative">
                    <label className="flex items-center space-x-2 text-gray-700 font-semibold mb-2">
                      <User className="w-4 h-4" />
                      <span>Full Name *</span>
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-gray-50/50 focus:bg-white text-gray-900 placeholder-gray-500 ${
                        focusedField === 'name' 
                          ? 'border-blue-400 ring-4 ring-blue-100 shadow-lg' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email and Company Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="flex items-center space-x-2 text-gray-700 font-semibold mb-2">
                        <Mail className="w-4 h-4" />
                        <span>Email *</span>
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-gray-50/50 focus:bg-white text-gray-900 placeholder-gray-500 ${
                          focusedField === 'email' 
                            ? 'border-blue-400 ring-4 ring-blue-100 shadow-lg' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div className="relative">
                      <label className="flex items-center space-x-2 text-gray-700 font-semibold mb-2">
                        <Building className="w-4 h-4" />
                        <span>Company</span>
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-gray-50/50 focus:bg-white text-gray-900 placeholder-gray-500 ${
                          focusedField === 'company' 
                            ? 'border-blue-400 ring-4 ring-blue-100 shadow-lg' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder="Your company (optional)"
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="relative">
                    <label className="flex items-center space-x-2 text-gray-700 font-semibold mb-2">
                      <Globe className="w-4 h-4" />
                      <span>Subject *</span>
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-gray-50/50 focus:bg-white text-gray-900 placeholder-gray-500 ${
                        focusedField === 'subject' 
                          ? 'border-blue-400 ring-4 ring-blue-100 shadow-lg' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="What can we help you with?"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <label className="flex items-center space-x-2 text-gray-700 font-semibold mb-2">
                      <MessageSquare className="w-4 h-4" />
                      <span>Message *</span>
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.02 }}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-gray-50/50 focus:bg-white text-gray-900 placeholder-gray-500 resize-none ${
                        focusedField === 'message' 
                          ? 'border-blue-400 ring-4 ring-blue-100 shadow-lg' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="Tell us about your project, challenges, or questions..."
                    />
                  </div>

                  {/* Enhanced Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white font-bold text-lg rounded-xl shadow-2xl relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600"
                      initial={{ x: '100%' }}
                      whileHover={{ x: '0%' }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                    
                    <span className="relative z-10 flex items-center justify-center space-x-3">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                          />
                          <span>Sending your message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-6 h-6" />
                          <span>Send Message</span>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </motion.button>

                  <p className="text-center text-gray-500 text-sm">
                    We'll get back to you within <span className="font-semibold text-blue-600">24 hours</span> ⚡
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

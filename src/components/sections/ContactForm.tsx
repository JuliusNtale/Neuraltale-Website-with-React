'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Send, CheckCircle, AlertCircle, Mail, Phone, MapPin } from 'lucide-react'

interface ContactFormData {
  name: string
  email: string
  company?: string
  subject: string
  message: string
}

const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {}
    
    if (!formData.name || formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }
    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.subject || formData.subject.length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters'
    }
    if (!formData.message || formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form data:', formData)
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', company: '', subject: '', message: '' })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'helpdesk@neuraltale.com',
      description: 'Send us an email anytime!'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+255 653 520 829 (Tigo/Yas) | +255 746 520 819 (Vodacom)',
      description: 'Business hours support'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Dar es Salaam, Tanzania',
      description: 'Schedule a meeting'
    }
  ]

  return (
    <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl" />
        
        {/* Hexagon Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-hex-pattern" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to solve your technology challenges? Let's discuss how NEURALTALE can deliver the right solutions for your business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Whether you're looking to implement AI solutions, migrate to the cloud, 
                or enhance your cybersecurity, our team of experts is here to help you 
                navigate the future of technology.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="glass rounded-xl p-6 border border-gray-700 hover:border-neon-blue/50 transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple neon-blue group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">
                          {info.title}
                        </h4>
                        <p className="text-neon-blue font-semibold mb-1">
                          {info.content}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="pt-8"
            >
              <h4 className="text-lg font-bold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {['LinkedIn', 'Twitter', 'GitHub', 'Instagram'].map((social, index) => (
                  <motion.button
                    key={social}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-lg glass border border-gray-700 hover:border-neon-blue/50 flex items-center justify-center text-gray-400 hover:text-neon-blue transition-all duration-300"
                  >
                    <span className="text-sm font-bold">{social[0]}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-8 border border-gray-700 relative overflow-hidden">
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-[1px] rounded-2xl bg-white shadow-lg" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink animate-gradient-shift" />
              </div>

              <div className="relative z-10">
                {/* Success Message */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <div>
                      <p className="text-green-400 font-semibold">Message sent successfully!</p>
                      <p className="text-green-400/80 text-sm">We'll get back to you within 24 hours.</p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={onSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block text-gray-900 font-medium mb-2">
                      Name *
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-red-400 text-sm flex items-center space-x-1"
                      >
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.name}</span>
                      </motion.p>
                    )}
                  </div>

                  {/* Email and Company Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Email *
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 text-red-400 text-sm flex items-center space-x-1"
                        >
                          <AlertCircle className="w-4 h-4" />
                          <span>{errors.email}</span>
                        </motion.p>
                      )}
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">
                        Company
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Subject *
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300"
                      placeholder="What can we help you with?"
                    />
                    {errors.subject && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-red-400 text-sm flex items-center space-x-1"
                      >
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.subject}</span>
                      </motion.p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Message *
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.02 }}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/20 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project or requirements..."
                    />
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-red-400 text-sm flex items-center space-x-1"
                      >
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.message}</span>
                      </motion.p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold text-lg rounded-lg shadow-2xl relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-pink"
                      initial={{ x: '100%' }}
                      whileHover={{ x: '0%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

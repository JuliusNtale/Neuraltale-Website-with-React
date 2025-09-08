import emailjs from '@emailjs/browser'

// EmailJS configuration - Using environment variables for security
export const EMAILJS_CONFIG = {
  serviceId: 'service_wtujr1c',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '', // Will be loaded from .env.local
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '', // Will be loaded from .env.local
}

// Initialize EmailJS
export const initEmailJS = () => {
  const publicKey = EMAILJS_CONFIG.publicKey
  
  if (!publicKey) {
    console.error('EmailJS Public Key not found. Please check your .env.local file.')
    throw new Error('EmailJS configuration missing. Please add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY to .env.local')
  }
  
  emailjs.init(publicKey)
}

// Contact form email template
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  subject: string
  message: string
  service?: string
  budget?: string
  timeline?: string
}

// Service quote form data
export interface QuoteFormData {
  name: string
  email: string
  phone: string
  company: string
  service: string
  budget: string
  timeline: string
  requirements: string
  location?: string
  employees?: number
}

// Career application data
export interface CareerFormData {
  name: string
  email: string
  phone: string
  position: string
  experience: string
  education: string
  skills: string
  portfolio?: string
  coverLetter: string
}

// Support request data
export interface SupportFormData {
  name: string
  email: string
  phone?: string
  company?: string
  priority: 'Low' | 'Medium' | 'High' | 'Critical'
  category: string
  subject: string
  description: string
  systemInfo?: string
}

// Send contact form email
export const sendContactEmail = async (data: ContactFormData): Promise<boolean> => {
  try {
    const templateParams = {
      form_type: 'Contact Form',
      from_name: data.name,
      from_email: data.email,
      from_phone: data.phone || 'Not provided',
      from_company: data.company || 'Not provided',
      subject: data.subject,
      message: data.message,
      service_type: data.service || 'General Inquiry',
      budget_range: data.budget || 'Not specified',
      timeline: data.timeline || 'Not specified',
      to_email: 'juliusntale30@gmail.com',
      reply_to: data.email,
    }

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    )

    return response.status === 200
  } catch (error) {
    console.error('Error sending contact email:', error)
    return false
  }
}

// Send service quote request email
export const sendQuoteEmail = async (data: QuoteFormData): Promise<boolean> => {
  try {
    const templateParams = {
      form_type: 'Quote Request',
      from_name: data.name,
      from_email: data.email,
      from_phone: data.phone,
      from_company: data.company,
      service_requested: data.service,
      budget_range: data.budget,
      timeline: data.timeline,
      requirements: data.requirements,
      location: data.location || 'Not specified',
      employee_count: data.employees || 'Not specified',
      to_email: 'juliusntale30@gmail.com',
      reply_to: data.email,
    }

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    )

    return response.status === 200
  } catch (error) {
    console.error('Error sending quote email:', error)
    return false
  }
}

// Send career application email
export const sendCareerEmail = async (data: CareerFormData): Promise<boolean> => {
  try {
    const templateParams = {
      form_type: 'Career Application',
      applicant_name: data.name,
      applicant_email: data.email,
      applicant_phone: data.phone,
      position_applied: data.position,
      experience_years: data.experience,
      education: data.education,
      key_skills: data.skills,
      portfolio_link: data.portfolio || 'Not provided',
      cover_letter: data.coverLetter,
      to_email: 'juliusntale30@gmail.com',
      reply_to: data.email,
    }

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    )

    return response.status === 200
  } catch (error) {
    console.error('Error sending career email:', error)
    return false
  }
}

// Send support request email
export const sendSupportEmail = async (data: SupportFormData): Promise<boolean> => {
  try {
    const templateParams = {
      form_type: 'Support Request',
      client_name: data.name,
      client_email: data.email,
      client_phone: data.phone || 'Not provided',
      client_company: data.company || 'Not provided',
      priority_level: data.priority,
      support_category: data.category,
      issue_subject: data.subject,
      issue_description: data.description,
      system_info: data.systemInfo || 'Not provided',
      to_email: 'juliusntale30@gmail.com',
      reply_to: data.email,
    }

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    )

    return response.status === 200
  } catch (error) {
    console.error('Error sending support email:', error)
    return false
  }
}

// Generic email sender for custom forms
export const sendCustomEmail = async (
  templateId: string,
  templateParams: Record<string, any>
): Promise<boolean> => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      templateId,
      {
        ...templateParams,
        to_email: 'juliusntale30@gmail.com',
      }
    )

    return response.status === 200
  } catch (error) {
    console.error('Error sending custom email:', error)
    return false
  }
}

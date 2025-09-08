import { useState } from 'react'
import { initEmailJS, sendContactEmail, sendQuoteEmail, sendCareerEmail, sendSupportEmail } from '@/lib/emailjs'
import type { ContactFormData, QuoteFormData, CareerFormData, SupportFormData } from '@/lib/emailjs'

export type FormType = 'contact' | 'quote' | 'career' | 'support'

interface UseEmailFormReturn {
  isSubmitting: boolean
  isSuccess: boolean
  error: string | null
  submitForm: (data: any, formType: FormType) => Promise<void>
  resetForm: () => void
}

export const useEmailForm = (): UseEmailFormReturn => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Initialize EmailJS when hook is first used
  useState(() => {
    initEmailJS()
  })

  const submitForm = async (data: any, formType: FormType): Promise<void> => {
    setIsSubmitting(true)
    setError(null)
    setIsSuccess(false)

    try {
      let success = false

      switch (formType) {
        case 'contact':
          success = await sendContactEmail(data as ContactFormData)
          break
        case 'quote':
          success = await sendQuoteEmail(data as QuoteFormData)
          break
        case 'career':
          success = await sendCareerEmail(data as CareerFormData)
          break
        case 'support':
          success = await sendSupportEmail(data as SupportFormData)
          break
        default:
          throw new Error('Invalid form type')
      }

      if (success) {
        setIsSuccess(true)
      } else {
        throw new Error('Failed to send email')
      }
    } catch (err) {
      console.error('Email submission error:', err)
      setError(
        err instanceof Error 
          ? err.message 
          : 'Failed to send message. Please try again or contact us directly.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setIsSuccess(false)
    setError(null)
    setIsSubmitting(false)
  }

  return {
    isSubmitting,
    isSuccess,
    error,
    submitForm,
    resetForm
  }
}

// Form validation helpers
export const validateContactForm = (data: ContactFormData): string[] => {
  const errors: string[] = []

  if (!data.name?.trim()) errors.push('Name is required')
  if (!data.email?.trim()) errors.push('Email is required')
  if (!data.subject?.trim()) errors.push('Subject is required')
  if (!data.message?.trim()) errors.push('Message is required')

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (data.email && !emailRegex.test(data.email)) {
    errors.push('Please enter a valid email address')
  }

  // Phone validation (optional but if provided, should be valid)
  if (data.phone && data.phone.trim()) {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/
    if (!phoneRegex.test(data.phone.replace(/\s+/g, ''))) {
      errors.push('Please enter a valid phone number')
    }
  }

  return errors
}

export const validateQuoteForm = (data: QuoteFormData): string[] => {
  const errors: string[] = []

  if (!data.name?.trim()) errors.push('Name is required')
  if (!data.email?.trim()) errors.push('Email is required')
  if (!data.phone?.trim()) errors.push('Phone is required')
  if (!data.company?.trim()) errors.push('Company is required')
  if (!data.service?.trim()) errors.push('Service selection is required')
  if (!data.budget?.trim()) errors.push('Budget range is required')
  if (!data.timeline?.trim()) errors.push('Timeline is required')
  if (!data.requirements?.trim()) errors.push('Requirements description is required')

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (data.email && !emailRegex.test(data.email)) {
    errors.push('Please enter a valid email address')
  }

  // Phone validation
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/
  if (data.phone && !phoneRegex.test(data.phone.replace(/\s+/g, ''))) {
    errors.push('Please enter a valid phone number')
  }

  return errors
}

export const validateCareerForm = (data: CareerFormData): string[] => {
  const errors: string[] = []

  if (!data.name?.trim()) errors.push('Name is required')
  if (!data.email?.trim()) errors.push('Email is required')
  if (!data.phone?.trim()) errors.push('Phone is required')
  if (!data.position?.trim()) errors.push('Position is required')
  if (!data.experience?.trim()) errors.push('Experience is required')
  if (!data.education?.trim()) errors.push('Education is required')
  if (!data.skills?.trim()) errors.push('Skills are required')
  if (!data.coverLetter?.trim()) errors.push('Cover letter is required')

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (data.email && !emailRegex.test(data.email)) {
    errors.push('Please enter a valid email address')
  }

  // Phone validation
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/
  if (data.phone && !phoneRegex.test(data.phone.replace(/\s+/g, ''))) {
    errors.push('Please enter a valid phone number')
  }

  return errors
}

export const validateSupportForm = (data: SupportFormData): string[] => {
  const errors: string[] = []

  if (!data.name?.trim()) errors.push('Name is required')
  if (!data.email?.trim()) errors.push('Email is required')
  if (!data.priority) errors.push('Priority level is required')
  if (!data.category?.trim()) errors.push('Category is required')
  if (!data.subject?.trim()) errors.push('Subject is required')
  if (!data.description?.trim()) errors.push('Description is required')

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (data.email && !emailRegex.test(data.email)) {
    errors.push('Please enter a valid email address')
  }

  // Phone validation (optional)
  if (data.phone && data.phone.trim()) {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/
    if (!phoneRegex.test(data.phone.replace(/\s+/g, ''))) {
      errors.push('Please enter a valid phone number')
    }
  }

  return errors
}

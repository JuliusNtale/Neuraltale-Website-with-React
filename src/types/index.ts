export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  color: 'blue' | 'purple' | 'pink' | 'green'
}

export interface Testimonial {
  id: string
  name: string
  position: string
  company: string
  content: string
  avatar: string
  rating: number
}

export interface Stat {
  id: string
  value: number
  label: string
  suffix?: string
  prefix?: string
}

export interface ContactFormData {
  name: string
  email: string
  company?: string
  subject: string
  message: string
}

export interface NavItem {
  title: string
  href: string
  description?: string
}

export interface SocialLink {
  name: string
  href: string
  icon: string
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

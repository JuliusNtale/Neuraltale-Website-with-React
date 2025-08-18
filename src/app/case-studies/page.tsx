import type { Metadata } from 'next'
import CaseStudies from '@/components/sections/CaseStudies'

export const metadata: Metadata = {
  title: 'Case Studies | Neuraltale Technologies',
  description: 'Explore real success stories from our clients across SMEs, Hospitality, Education, and Retail sectors in Tanzania.',
  keywords: 'case studies, success stories, client testimonials, Tanzania technology projects, business transformation',
}

export default function CaseStudiesPage() {
  return <CaseStudies />
}

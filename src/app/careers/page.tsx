import type { Metadata } from 'next'
import Careers from '@/components/sections/Careers'

export const metadata: Metadata = {
  title: 'Careers | NeuralTale Technologies',
  description: 'Join our team of technology professionals and help businesses across Tanzania transform through innovative solutions.',
  keywords: 'careers, jobs, technology jobs Tanzania, software developer, network engineer, IT support',
}

export default function CareersPage() {
  return <Careers />
}

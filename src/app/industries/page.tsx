import type { Metadata } from 'next'
import Industries from '@/components/sections/Industries'

export const metadata: Metadata = {
  title: 'Industries We Serve | Neuraltale Technologies',
  description: 'Discover how Neuraltale Technologies serves SMEs, Hospitality, Education, and Retail industries with tailored technology solutions in Tanzania.',
  keywords: 'industries, SME technology, hospitality tech, education technology, retail solutions, Tanzania business technology',
}

export default function IndustriesPage() {
  return <Industries />
}

import { Metadata } from 'next'
import Solutions from '@/components/sections/Solutions'

export const metadata: Metadata = {
  title: 'Technology Solutions - NEURALTALE',
  description: 'Comprehensive technology solutions for SMEs, Hospitality, Education, and Retail sectors. Wi-Fi infrastructure, payment integration, and business automation.',
  keywords: ['technology solutions', 'wifi infrastructure', 'payment integration', 'business automation', 'SME solutions', 'hospitality tech', 'education technology'],
}

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Solutions />
    </main>
  )
}

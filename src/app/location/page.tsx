import type { Metadata } from 'next'
import LocationMap from '@/components/sections/LocationMap'

export const metadata: Metadata = {
  title: 'Office Location & Directions - NEURALTALE',
  description: 'Visit NEURALTALE Technologies office in Dar es Salaam, Tanzania. Get directions, contact information, and business hours for our East Africa headquarters.',
  keywords: ['office location', 'Dar es Salaam office', 'NEURALTALE address', 'Tanzania tech company', 'contact location'],
  openGraph: {
    title: 'Office Location & Directions - NEURALTALE',
    description: 'Find our office in Dar es Salaam, Tanzania. Easy access, convenient location in East Africa.',
    images: ['/og-image.png'],
  },
}

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-white">
      <LocationMap />
    </main>
  )
}
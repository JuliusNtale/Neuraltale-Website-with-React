import type { Metadata } from 'next'
import BlogList from '@/components/sections/BlogList'

export const metadata: Metadata = {
  title: 'Technology Blog | Network Setup Guides & M-Pesa Integration Tips | Neuraltale',
  description: 'Expert guides on TP-Link Omada vs UniFi for hotels, M-Pesa captive portal setup, domain types for Tanzanian businesses, and networking tips for SMEs in Tanzania.',
  keywords: [
    'TP-Link Omada vs UniFi hotels Tanzania',
    'M-Pesa captive portal setup guide',
    'domain types guide Tanzania',
    '.co.tz vs .com domain Tanzania',
    'SME networking equipment guide',
    'Wi-Fi hotspot M-Pesa vouchers tutorial',
    'network setup guides Tanzania',
    'IT blog Tanzania',
    'business technology guides'
  ]
}

export default function BlogPage() {
  return <BlogList />
}

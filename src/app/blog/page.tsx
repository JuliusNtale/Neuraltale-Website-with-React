import type { Metadata } from 'next'
import BlogList from '@/components/sections/BlogList'

export const metadata: Metadata = {
  title: 'Technology Blog | Network Setup Guides & M-Pesa Integration Tips | Neuraltale',
  description: 'Expert guides on TP-Link Omada vs UniFi for hotels, M-Pesa captive portal setup, and networking tips for SMEs in Tanzania. Technical insights from IT professionals.',
  keywords: [
    'TP-Link Omada vs UniFi hotels Tanzania',
    'M-Pesa captive portal setup guide',
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

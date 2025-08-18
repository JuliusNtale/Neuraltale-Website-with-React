import type { Metadata } from 'next'
import Support from '@/components/sections/Support'

export const metadata: Metadata = {
  title: 'Support | Neuraltale Technologies',
  description: 'Get technical support for your technology solutions. 24/7 support, knowledge base, and expert assistance.',
  keywords: 'technical support, customer support, help desk, IT support Tanzania, troubleshooting',
}

export default function SupportPage() {
  return <Support />
}

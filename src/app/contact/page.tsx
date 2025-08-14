import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Contact Us - NEURALTALE',
  description: 'Get in touch with NEURALTALE Technologies. Contact us for professional IT solutions, software development, and technology consulting services.',
  keywords: ['contact neuraltale', 'technology support', 'software development inquiry', 'IT consulting'],
}

export default function Contact() {
  // Redirect to home page with contact section
  redirect('/#contact')
}

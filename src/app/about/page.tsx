import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'About Us - NEURALTALE',
  description: 'Learn about NEURALTALE Technologies - pioneering the future of technology with innovative solutions in AI, cloud computing, and software development.',
  keywords: ['about neuraltale', 'technology company', 'software development', 'Tanzania tech', 'IT solutions'],
}

export default function About() {
  // Redirect to home page with about section
  redirect('/#about')
}

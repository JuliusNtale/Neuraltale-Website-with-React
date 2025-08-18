import type { Metadata } from 'next'
import Sitemap from '@/components/sections/Sitemap'

export const metadata: Metadata = {
  title: 'Site Map | NEURALTALE - Navigation Guide',
  description: 'Complete site map of NEURALTALE website. Find all our pages including services, solutions, blog posts, and contact information.',
  keywords: [
    'NEURALTALE sitemap',
    'website navigation',
    'site map',
    'page directory',
    'IT services navigation',
    'website structure'
  ],
  openGraph: {
    title: 'Site Map | NEURALTALE',
    description: 'Navigate through all pages and sections of the NEURALTALE website.',
    type: 'website',
  },
}

export default function SitemapPage() {
  return (
    <main className="min-h-screen">
      <Sitemap />
    </main>
  )
}

import type { Metadata } from 'next'
import Press from '@/components/sections/Press'
import StructuredData from '@/components/SEO/StructuredData'
import { organizationSchema, localBusinessSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Press & Media Kit | Neuraltale Technologies - Brand Resources & Media Information',
  description: 'Download high-quality media resources, brand assets, press releases, and company information for Neuraltale Technologies. Complete media kit for journalists and partners covering Tanzania IT industry.',
  keywords: [
    'Neuraltale press kit',
    'media resources Tanzania',
    'brand guidelines',
    'company logos',
    'press releases IT Tanzania',
    'media contact Neuraltale',
    'founder photos Julius Ntale',
    'brand colors Neuraltale',
    'company information Tanzania IT',
    'media kit download',
    'Tanzania technology press',
    'IT company media resources'
  ],
  authors: [{ name: 'Neuraltale Technologies' }],
  openGraph: {
    title: 'Press & Media Kit | Neuraltale Technologies',
    description: 'Download high-quality media resources, brand assets, and press information for Neuraltale Technologies.',
    url: 'https://Neuraltale.co.tz/press',
    siteName: 'Neuraltale Technologies',
    images: [
      {
        url: '/media/Neuraltale-press-kit-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Neuraltale Technologies Press & Media Kit',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Press & Media Kit | Neuraltale Technologies',
    description: 'Download high-quality media resources, brand assets, and press information for Neuraltale Technologies.',
    images: ['/media/Neuraltale-press-kit-og.jpg'],
    creator: '@Neuraltaletz',
  },
  alternates: {
    canonical: 'https://Neuraltale.co.tz/press',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const pressSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Press & Media Kit",
  "description": "Media resources, brand assets, and press information for Neuraltale Technologies.",
  "url": "https://Neuraltale.co.tz/press",
  "inLanguage": "en-US",
  "isPartOf": {
    "@type": "WebSite",
    "name": "Neuraltale Technologies",
    "url": "https://Neuraltale.co.tz"
  },
  "about": {
    "@type": "Organization",
    "name": "Neuraltale Technologies",
    "url": "https://Neuraltale.co.tz",
    "logo": "https://Neuraltale.co.tz/media/logo-primary.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+255-123-456-789",
      "contactType": "Media Relations",
      "email": "press@Neuraltale.co.tz"
    }
  }
}

export default function PressPage() {
  return (
    <>
      <StructuredData data={[organizationSchema, localBusinessSchema, pressSchema]} />
      <Press />
    </>
  )
}

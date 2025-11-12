import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import StructuredData from '@/components/SEO/StructuredData'
import ResourceHints from '@/components/utils/ResourceHints'
import { organizationSchema, localBusinessSchema, serviceSchemas, logoSchema, websiteSchema } from '@/lib/seo'

// Critical above-the-fold component - load immediately with high priority
// Hero is static content, no need for client-side JS initially
const Hero = dynamic(() => import('@/components/sections/Hero'), {
  ssr: true,
  loading: () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          IT Equipment Supplier Tanzania
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          TP-Link Omada • UniFi Networks • M-Pesa Integration
        </p>
      </div>
    </section>
  ),
})

// Below-the-fold components - lazy load for better performance
const About = dynamic(() => import('@/components/sections/About'), {
  loading: () => <div className="min-h-[400px] bg-gray-50 flex items-center justify-center">
    <div className="text-gray-400">Loading...</div>
  </div>,
  ssr: true,
})

const ServicesGrid = dynamic(() => import('@/components/sections/ServicesGrid'), {
  loading: () => <div className="min-h-[600px] bg-white flex items-center justify-center">
    <div className="text-gray-400">Loading...</div>
  </div>,
  ssr: true,
})

const StatsCounter = dynamic(() => import('@/components/sections/StatsCounter'), {
  loading: () => <div className="min-h-[300px] bg-gray-50" />,
})

const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), {
  loading: () => <div className="min-h-[500px] bg-white" />,
  ssr: true,
})

const ContactForm = dynamic(() => import('@/components/sections/ContactForm'), {
  loading: () => <div className="min-h-[600px] bg-gray-50" />,
})

const LocationMap = dynamic(() => import('@/components/sections/LocationMap'), {
  loading: () => <div className="min-h-[500px] bg-gray-50" />,
})

export const metadata: Metadata = {
  title: 'IT Equipment Supplier Dar es Salaam | TP-Link Omada Setup Tanzania | Neuraltale',
  description: 'Leading IT equipment supplier in Dar es Salaam specializing in TP-Link Omada setup, UniFi networks, Wi-Fi hotspot with M-Pesa vouchers, and M-Pesa integration developers. Professional network infrastructure for SMEs, hotels, schools, and retail businesses across Tanzania.',
  keywords: [
    'IT equipment supplier Dar es Salaam',
    'TP-Link Omada setup Tanzania', 
    'Wi-Fi hotspot with M-Pesa vouchers',
    'M-Pesa integration developers',
    'UniFi installation Tanzania',
    'network infrastructure Dar es Salaam',
    'business WiFi solutions Tanzania',
    'enterprise networking equipment',
    'captive portal M-Pesa vouchers',
    'hospitality WiFi Tanzania'
  ],
  openGraph: {
    title: 'IT Equipment Supplier Dar es Salaam | TP-Link Omada Setup Tanzania',
    description: 'Professional TP-Link Omada setup, UniFi networks, Wi-Fi hotspot with M-Pesa vouchers. Leading IT equipment supplier serving SMEs, hotels, schools across Tanzania.',
    url: 'https://neuraltale.com',
    type: 'website',
    images: [
      {
        url: 'https://neuraltale.com/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Neuraltale - IT Equipment Supplier Tanzania'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Equipment Supplier Dar es Salaam | TP-Link Omada Setup Tanzania',
    description: 'Professional TP-Link Omada setup, UniFi networks, Wi-Fi hotspot with M-Pesa vouchers in Tanzania.'
  }
}

const homePageSchema = [
  organizationSchema,
  localBusinessSchema,
  serviceSchemas.networkInstallation,
  serviceSchemas.mpesaIntegration,
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://neuraltale.com/#webpage",
    "url": "https://neuraltale.com",
    "name": "IT Equipment Supplier Dar es Salaam | TP-Link Omada Setup Tanzania",
    "description": "Leading IT equipment supplier in Dar es Salaam specializing in TP-Link Omada setup, UniFi networks, Wi-Fi hotspot with M-Pesa vouchers, and M-Pesa integration developers.",
    "breadcrumb": {
      "@type": "BreadcrumbList", 
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://neuraltale.com"
        }
      ]
    },
    "mainEntity": {
      "@type": "Organization",
      "@id": "https://neuraltale.com/#organization"
    }
  }
]

export default function Home() {
  return (
    <>
      <ResourceHints />
      <StructuredData data={homePageSchema} />
      <StructuredData data={logoSchema} />
      <StructuredData data={websiteSchema} />
      <main className="min-h-screen bg-white overflow-hidden">
        <Hero />
        <About />
        <ServicesGrid />
        <StatsCounter />
        <Testimonials />
        <LocationMap />
        <ContactForm />
        
      </main>
    </>
  )
}

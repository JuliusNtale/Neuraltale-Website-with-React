import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import StructuredData from '@/components/SEO/StructuredData'
import ResourceHints from '@/components/utils/ResourceHints'
import { organizationSchema, localBusinessSchema, serviceSchemas, logoSchema, websiteSchema, productCatalogSchema, storeSchema } from '@/lib/seo'

// Critical above-the-fold component - load immediately with high priority
// Hero is static content, no need for client-side JS initially
const Hero = dynamic(() => import('@/components/sections/Hero'), {
  ssr: true,
  loading: () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Technology Solutions Provider Tanzania
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Custom Software • AI Integration • M-Pesa Systems • Enterprise IT
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
  title: 'Technology Solutions & Enterprise IT Provider Tanzania | Neuraltale',
  description: 'Leading technology solutions provider in Tanzania. Custom software development, AI integration, M-Pesa payment systems, IoT solutions, cloud infrastructure, and digital transformation services. Enterprise IT infrastructure with Dell, HP, Lenovo equipment. TP-Link Omada & UniFi network solutions for hotels and businesses in Dar es Salaam.',
  keywords: [
    // Technology Solutions (Primary)
    'technology solutions Tanzania',
    'software development Dar es Salaam',
    'custom software Tanzania',
    'AI integration Dar es Salaam',
    'M-Pesa integration Tanzania',
    'IoT solutions Dar es Salaam',
    'cloud solutions Tanzania',
    'digital transformation Dar es Salaam',
    'enterprise IT Tanzania',
    'business automation Tanzania',
    'tech consulting Dar es Salaam',
    // Network Solutions
    'network infrastructure Tanzania',
    'TP-Link Omada Tanzania',
    'UniFi network Dar es Salaam',
    'hotel WiFi solutions Tanzania',
    'enterprise networking Dar es Salaam',
    'network security Tanzania',
    'WiFi installation Dar es Salaam',
    // Enterprise Equipment (Supporting)
    'enterprise laptops Tanzania',
    'business computers Dar es Salaam',
    'workstation computers Tanzania',
    'Dell enterprise solutions Tanzania',
    'HP business laptops Dar es Salaam',
    'Lenovo ThinkPad Tanzania',
    'Lenovo ThinkPad Tanzania',
    'Apple MacBook Pro Tanzania',
    'IT equipment supplier Dar es Salaam',
    // Additional Equipment Keywords (SEO Support)
    'desktop computers Tanzania',
    'business laptops Tanzania',
    'laptop supplier Dar es Salaam',
    'SSD Tanzania',
    'computer accessories Dar es Salaam',
    'smartphones Tanzania',
    'computer mouse Tanzania',
    'monitors Dar es Salaam',
    'printers Tanzania',
    'RAM memory Tanzania',
    // Services
    'IT equipment supplier Tanzania',
    'computer supplier Dar es Salaam',
    'laptop repair Tanzania',
    'computer repair Dar es Salaam',
    'IT support Tanzania',
    'network installation Dar es Salaam'
  ],
  openGraph: {
    title: 'Buy Laptops, Computers, Smartphones Tanzania | Best Computer Shop Dar es Salaam',
    description: 'Shop Dell, HP, Lenovo, Apple MacBook laptops, desktop computers, gaming PCs, smartphones, SSDs, computer mouse, keyboards, monitors, printers in Tanzania. Best IT equipment supplier Dar es Salaam with competitive prices and fast delivery. Computer accessories, peripherals, networking equipment.',
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
    title: 'Buy Laptops, Computers, Smartphones Tanzania | Computer Shop Dar es Salaam',
    description: 'Shop Dell, HP, Lenovo, Apple MacBook laptops, desktop computers, gaming PCs, smartphones, SSDs, computer accessories in Tanzania. Best prices Dar es Salaam.'
  }
}

const homePageSchema = [
  organizationSchema,
  localBusinessSchema,
  productCatalogSchema,
  storeSchema,
  serviceSchemas.networkInstallation,
  serviceSchemas.mpesaIntegration,
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://neuraltale.com/#webpage",
    "url": "https://neuraltale.com",
    "name": "Technology Solutions & Enterprise IT Provider Tanzania | Neuraltale",
    "description": "Leading technology solutions provider in Tanzania. Custom software development, AI integration, M-Pesa payment systems, IoT solutions, cloud infrastructure, and enterprise IT equipment for businesses in Dar es Salaam.",
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

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
  title: 'Buy Laptops, Computers & Smartphones Tanzania | Computer Shop Dar es Salaam | Neuraltale',
  description: 'Best computer and laptop shop in Dar es Salaam Tanzania. Buy Dell, HP, Lenovo, Apple MacBook laptops, desktop computers, gaming PCs, smartphones, SSDs, computer mouse, keyboards, monitors, printers. IT equipment supplier with best prices. Free delivery Dar es Salaam. TP-Link routers, UniFi networks, network switches, computer accessories, peripherals.',
  keywords: [
    // Primary Computer Keywords
    'buy laptops Tanzania',
    'laptop shop Dar es Salaam',
    'computer store Tanzania',
    'computer shop Dar es Salaam',
    'buy computers Tanzania',
    'laptop supplier Dar es Salaam',
    'desktop computers Tanzania',
    'gaming laptops Dar es Salaam',
    'business laptops Tanzania',
    // Laptop Brands
    'Dell laptops Tanzania',
    'HP laptops Dar es Salaam',
    'Lenovo laptops Tanzania',
    'Apple MacBook Tanzania',
    'Asus laptops Dar es Salaam',
    'Acer laptops Tanzania',
    'gaming laptop Tanzania',
    'MacBook Pro Tanzania',
    'MacBook Air Dar es Salaam',
    // Computers & Desktop
    'desktop computer Tanzania',
    'gaming PC Dar es Salaam',
    'all-in-one computer Tanzania',
    'workstation computer Dar es Salaam',
    'Dell desktop Tanzania',
    'HP desktop Dar es Salaam',
    // Smartphones
    'buy smartphones Tanzania',
    'mobile phones Dar es Salaam',
    'iPhone Tanzania',
    'Samsung phones Dar es Salaam',
    'Android phones Tanzania',
    'smartphone store Dar es Salaam',
    // Storage & Memory
    'SSD Tanzania',
    'buy SSD Dar es Salaam',
    'solid state drive Tanzania',
    'hard drive Dar es Salaam',
    'external hard drive Tanzania',
    'RAM memory Dar es Salaam',
    '1TB SSD Tanzania',
    '2TB hard drive Dar es Salaam',
    // Peripherals
    'computer mouse Tanzania',
    'keyboard Dar es Salaam',
    'wireless mouse Tanzania',
    'gaming mouse Dar es Salaam',
    'mechanical keyboard Tanzania',
    'USB mouse Dar es Salaam',
    // Monitors & Displays
    'computer monitor Tanzania',
    'LED monitor Dar es Salaam',
    'gaming monitor Tanzania',
    '24 inch monitor Dar es Salaam',
    'curved monitor Tanzania',
    // Printers & Scanners
    'printer Tanzania',
    'HP printer Dar es Salaam',
    'Canon printer Tanzania',
    'Epson printer Dar es Salaam',
    'laser printer Tanzania',
    'inkjet printer Dar es Salaam',
    'scanner Tanzania',
    // Accessories
    'computer accessories Tanzania',
    'laptop accessories Dar es Salaam',
    'USB drive Tanzania',
    'flash drive Dar es Salaam',
    'webcam Tanzania',
    'headset Dar es Salaam',
    'laptop bag Tanzania',
    'laptop charger Dar es Salaam',
    'laptop stand Tanzania',
    'cooling pad Dar es Salaam',
    'HDMI cable Tanzania',
    'USB cable Dar es Salaam',
    // Networking
    'TP-Link router Tanzania',
    'WiFi router Dar es Salaam',
    'network switch Tanzania',
    'UniFi equipment Dar es Salaam',
    'ethernet cable Tanzania',
    'network cable Dar es Salaam',
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
    "name": "Buy Laptops, Computers & Smartphones Tanzania | Computer Shop Dar es Salaam",
    "description": "Best computer and laptop shop in Dar es Salaam Tanzania. Buy Dell, HP, Lenovo, Apple MacBook laptops, desktop computers, gaming PCs, smartphones, SSDs, computer mouse, keyboards, monitors, printers. IT equipment supplier with best prices.",
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

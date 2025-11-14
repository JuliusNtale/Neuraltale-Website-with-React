import { Inter, JetBrains_Mono } from 'next/font/google'
import '../styles/globals.css'
import { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import StructuredData from '@/components/SEO/StructuredData'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CookieConsent from '@/components/ui/CookieConsent'
import Script from 'next/script'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
  fallback: ['system-ui', 'arial'],
})
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'], 
  variable: '--font-jetbrains',
  weight: ['400', '500'],
  display: 'swap',
  preload: false,
  adjustFontFallback: true,
  fallback: ['monospace'],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://neuraltale.com'),
  title: {
    default: 'Neuraltale - Technology Solutions & Enterprise IT Infrastructure Provider Tanzania',
    template: '%s | Neuraltale'
  },
  description: 'Leading technology solutions provider in Tanzania. Custom software development, AI integration, enterprise IT infrastructure, network solutions. Supply premium Dell, HP, Lenovo, Apple equipment. TP-Link Omada, UniFi networks, M-Pesa payment integration, IoT solutions, cloud services. Enterprise-grade technology for businesses in Dar es Salaam.',
  keywords: [
    // Primary Tech Solutions
    'technology solutions Tanzania',
    'software development Tanzania',
    'custom software Dar es Salaam',
    'AI integration Tanzania',
    'M-Pesa integration developers',
    'enterprise software Tanzania',
    'IoT solutions Dar es Salaam',
    'cloud solutions Tanzania',
    'digital transformation Dar es Salaam',
    'IT consulting Tanzania',
    'tech company Dar es Salaam',
    // Network & Infrastructure
    'enterprise IT infrastructure Tanzania',
    'network solutions Dar es Salaam',
    'TP-Link Omada setup Tanzania',
    'UniFi installation Dar es Salaam',
    'network infrastructure Tanzania',
    'WiFi solutions businesses Tanzania',
    'enterprise networking Dar es Salaam',
    // Computer Equipment (Secondary)
    'enterprise laptops Tanzania',
    'business computers Dar es Salaam',
    'workstation computers Tanzania',
    'Dell enterprise solutions Tanzania',
    'HP business laptops Dar es Salaam',
    'Lenovo ThinkPad Tanzania',
    'Apple MacBook Pro Tanzania',
    'IT equipment supplier Dar es Salaam',
    // Components & Peripherals (SEO)
    'laptop supplier Tanzania',
    'desktop computers Dar es Salaam',
    'SSD Tanzania',
    'computer accessories Dar es Salaam',
    'smartphones Tanzania',
    'computer mouse Tanzania',
    'monitors Dar es Salaam',
    'printers Tanzania',
    'networking equipment Dar es Salaam',
    'RAM memory Tanzania',
    'computer components Dar es Salaam',
    'laptop upgrades Tanzania',
    // Peripherals & Accessories
    'computer mouse Tanzania',
    'keyboard Dar es Salaam',
    'monitors Tanzania',
    'printers Dar es Salaam',
    'webcam Tanzania',
    'headsets Dar es Salaam',
    'USB drives Tanzania',
    'external hard drive Dar es Salaam',
    'laptop bags Tanzania',
    'computer accessories Dar es Salaam',
    'mouse and keyboard Tanzania',
    'wireless mouse Dar es Salaam',
    'gaming mouse Tanzania',
    // Networking Equipment
    'TP-Link routers Tanzania',
    'network switches Dar es Salaam',
    'WiFi routers Tanzania',
    'UniFi equipment Dar es Salaam',
    'network cables Tanzania',
    // IT Services
    'IT equipment supplier Tanzania',
    'computer repair Dar es Salaam',
    'laptop repair Tanzania',
    'IT support Dar es Salaam',
    'network installation Tanzania',
    'M-Pesa integration Tanzania',
    'custom software development Dar es Salaam'
  ],
  authors: [{ name: 'Neuraltale', url: 'https://neuraltale.com' }],
  creator: 'Neuraltale',
  publisher: 'Neuraltale',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.png', type: 'image/png', sizes: '32x32' },
      { url: '/logo.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/logo.png',
        color: '#1e40af',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Neuraltale - Computer, Laptop & Smartphone Supplier Tanzania | IT Equipment Store Dar es Salaam',
    description: 'Buy laptops, desktop computers, smartphones, SSDs, and computer accessories in Tanzania. Leading IT equipment supplier in Dar es Salaam. Dell, HP, Lenovo, Apple MacBook. Best prices on gaming laptops, business computers, peripherals. TP-Link, UniFi networks, M-Pesa integration.',
    siteName: 'Neuraltale',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Neuraltale - IT Equipment Supplier Tanzania',
        type: 'image/jpeg',
      },
      {
        url: '/logo.png',
        width: 600,
        height: 60,
        alt: 'Neuraltale Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neuraltale - Buy Laptops, Computers, Smartphones Tanzania | IT Equipment Dar es Salaam',
    description: 'Computer & laptop supplier Tanzania. Buy Dell, HP, Lenovo laptops, desktop computers, smartphones, SSDs, computer accessories. TP-Link, UniFi networks, M-Pesa integration. Best IT equipment prices Dar es Salaam.',
    creator: '@neuraltale',
    images: ['/twitter-image.jpg'],
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
    yahoo: process.env.YAHOO_VERIFICATION,
  },
  robots: 'index, follow',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="canonical" href="https://neuraltale.com" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="mask-icon" href="/logo.png" color="#1e40af" />
        
        {/* Organization Logo for Google Search */}
        <meta property="og:logo" content="https://neuraltale.com/logo.png" />
        <meta name="logo" content="https://neuraltale.com/logo.png" />
        
        {/* Performance hints */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        
        {/* Google Tag Manager - Deferred loading */}
        {process.env.NODE_ENV === 'production' && (
          <Script
            id="gtm-script"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5S5TH6VB');
              `,
            }}
          />
        )}
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-inter bg-white text-gray-900 antialiased`}>
        {/* Google Tag Manager (noscript) - Only in production */}
        {process.env.NODE_ENV === 'production' && (
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-5S5TH6VB"
              height="0"
              width="0"
              className="hidden"
            />
          </noscript>
        )}
        
        <StructuredData />
        <Navbar />
        <div id="root">
          {children}
        </div>
        <Footer />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}

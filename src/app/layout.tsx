import { Inter, JetBrains_Mono } from 'next/font/google'
import '../styles/globals.css'
import { Metadata } from 'next'
// import { Analytics } from '@vercel/analytics/react'
import StructuredData from '@/components/SEO/StructuredData'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'], 
  variable: '--font-jetbrains',
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://neuraltale.com'),
  title: {
    default: 'Neuraltale - Where Technology Solves',
    template: '%s | Neuraltale'
  },
  description: 'Professional equipment supply, custom software development, and IT solutions. Delivering intelligent technology that solves problems, empowers people, and accelerates progress.',
  keywords: ['equipment supply', 'software development', 'IT solutions', 'technology', 'Tanzania', 'neuraltale', 'AI', 'cloud computing', 'cybersecurity'],
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
        color: '#2563eb',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Neuraltale - Where Technology Solves',
    description: 'Professional equipment supply, custom software development, and IT solutions from Tanzania. Delivering intelligent technology that solves problems, empowers people, and accelerates progress.',
    siteName: 'Neuraltale',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Neuraltale - Where Technology Solves',
        type: 'image/png',
      },
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'Neuraltale Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neuraltale - Where Technology Solves',
    description: 'Professional equipment supply, custom software development, and IT solutions from Tanzania.',
    creator: '@neuraltale',
    images: ['/twitter-image.png'],
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
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="canonical" href="https://neuraltale.com" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/logo.png" color="#2563eb" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-inter bg-white text-gray-900 antialiased`}>
        <StructuredData />
        <Navbar />
        <div id="root">
          {children}
        </div>
        <Footer />
        {/* <Analytics /> */}
      </body>
    </html>
  )
}

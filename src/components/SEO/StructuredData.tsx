'use client'

import { useEffect } from 'react'

interface StructuredDataProps {
  data?: object | object[]
}

export function StructuredData({ data }: StructuredDataProps) {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://neuraltale.com/#organization",
        "name": "NeuralTale Technologies",
        "alternateName": "NeuralTale",
        "url": "https://neuraltale.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://neuraltale.com/logo.png",
          "width": 300,
          "height": 100,
          "caption": "NeuralTale Technologies Logo"
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://neuraltale.com/og-image.jpg",
          "width": 1200,
          "height": 630
        },
        "description": "Leading IT equipment supplier and technology solutions provider in Tanzania. Specializing in TP-Link Omada, UniFi networks, M-Pesa integration, and custom software development.",
        "foundingDate": "2020",
        "founder": {
          "@type": "Person",
          "name": "Julius Peter Ntale"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Msimbazi Street",
          "addressLocality": "Dar es Salaam",
          "addressRegion": "Dar es Salaam Region",
          "postalCode": "11101",
          "addressCountry": "TZ"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "-6.7924",
          "longitude": "39.2083"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "telephone": "+255 653 520 829",
            "email": "helpdesk@neuraltale.com",
            "availableLanguage": ["English", "Swahili"]
          },
          {
            "@type": "ContactPoint", 
            "contactType": "technical support",
            "telephone": "+255 746 520 819",
            "email": "juliusntale@neuraltale.com",
            "availableLanguage": ["English", "Swahili"]
          }
        ],
        "areaServed": {
          "@type": "Country",
          "name": "Tanzania"
        },
        "numberOfEmployees": {
          "@type": "QuantitativeValue",
          "value": "50"
        },
        "slogan": "Transforming Business Through Technology",
        "sameAs": [
          "https://linkedin.com/company/neuraltale-technologies",
          "https://twitter.com/neuraltale",
          "https://facebook.com/neuraltale",
          "https://instagram.com/neuraltale"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://neuraltale.com/#localbusiness",
        "name": "NeuralTale Technologies",
        "image": "https://neuraltale.com/office-photo.jpg",
        "telephone": "+255 653 520 829",
        "email": "helpdesk@neuraltale.com",
        "url": "https://neuraltale.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Msimbazi Street",
          "addressLocality": "Dar es Salaam",
          "addressRegion": "Dar es Salaam Region",
          "postalCode": "11101", 
          "addressCountry": "TZ"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "-6.7924",
          "longitude": "39.2083"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "17:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday", 
            "opens": "09:00",
            "closes": "13:00"
          }
        ],
        "priceRange": "$$",
        "currenciesAccepted": "TZS, USD",
        "paymentAccepted": "Cash, Bank Transfer, M-Pesa, Airtel Money"
      },
      {
        "@type": "WebSite",
        "@id": "https://neuraltale.com/#website",
        "url": "https://neuraltale.com",
        "name": "NeuralTale Technologies",
        "description": "IT Equipment Supplier & Technology Solutions Provider in Tanzania",
        "publisher": {
          "@id": "https://neuraltale.com/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://neuraltale.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      }
    ]
  }

  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(data || defaultStructuredData)
    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [data])

  return null
}

export default StructuredData

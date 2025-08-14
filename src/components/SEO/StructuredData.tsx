'use client'

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://neuraltale.com/#organization",
        "name": "Neuraltale",
        "alternateName": "Neuraltale Technologies",
        "url": "https://neuraltale.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://neuraltale.com/logo.png",
          "width": 512,
          "height": 512,
          "caption": "Neuraltale Logo"
        },
        "image": {
          "@type": "ImageObject",
          "url": "https://neuraltale.com/og-image.png",
          "width": 1200,
          "height": 630
        },
        "description": "Professional equipment supply, custom software development, and IT solutions. Delivering intelligent technology that solves problems, empowers people, and accelerates progress.",
        "foundingDate": "2025",
        "founder": {
          "@type": "Person",
          "name": "Julius Peter Ntale"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dar es Salaam",
          "addressCountry": "Tanzania"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "email": "info@neuraltale.com"
        },
        "sameAs": [
          "https://linkedin.com/company/neuraltale",
          "https://twitter.com/neuraltale",
          "https://github.com/neuraltale"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://neuraltale.com/#website",
        "url": "https://neuraltale.com",
        "name": "Neuraltale",
        "description": "Where Technology Solves",
        "publisher": {
          "@id": "https://neuraltale.com/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://neuraltale.com/?s={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Equipment Supply",
        "provider": {
          "@id": "https://neuraltale.com/#organization"
        },
        "description": "Networking devices, IoT technology, computers, and accessories from trusted global partners."
      },
      {
        "@type": "Service",
        "name": "Custom Software Development",
        "provider": {
          "@id": "https://neuraltale.com/#organization"
        },
        "description": "Enterprise solutions, mobile apps, automation tools, and AI-powered systems tailored to your needs."
      },
      {
        "@type": "Service",
        "name": "IT Solutions",
        "provider": {
          "@id": "https://neuraltale.com/#organization"
        },
        "description": "Comprehensive IT consulting, system integration, and technical support services."
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

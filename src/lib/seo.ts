export const siteConfig = {
  name: "Neuraltale",
  description: "Leading computer and laptop supplier in Tanzania. Buy laptops, desktop computers, smartphones, SSDs, computer peripherals, and IT equipment in Dar es Salaam. Dell, HP, Lenovo, Apple MacBook. Best prices on gaming laptops, business computers, computer mouse, keyboards, monitors, printers. TP-Link routers, UniFi networks, network accessories.",
  url: "https://neuraltale.com",
  ogImage: "https://neuraltale.com/og-image.jpg",
  links: {
    twitter: "https://twitter.com/neuraltale",
    facebook: "https://facebook.com/neuraltale",
    linkedin: "https://linkedin.com/company/neuraltale",
    instagram: "https://instagram.com/neuraltale"
  },
  contact: {
    phone: "+255 653 520 829",
    phoneVodacom: "+255 746 520 819",
    email: "helpdesk@neuraltale.com",
    ownerEmail: "juliusntale@neuraltale.com",
    address: "Msimbazi Street, Dar es Salaam, Tanzania",
    tin: "140506265"
  },
  banking: {
    akiba: {
      bank: "Akiba Commercial Bank",
      accountHolder: "JULIUS PETER NTALE",
      accountNumber: "11600161425"
    },
    crdb: {
      bank: "CRDB Bank",
      accountHolder: "Julius Peter Ntale", 
      accountNumber: "0152698065500"
    }
  },
  keywords: [
    // Computer & Laptop Keywords
    "buy laptops Tanzania",
    "laptop shop Dar es Salaam",
    "computer store Tanzania",
    "desktop computers Dar es Salaam",
    "gaming laptops Tanzania",
    "business laptops Dar es Salaam",
    "Dell laptops Tanzania",
    "HP laptops Dar es Salaam",
    "Lenovo computers Tanzania",
    "Apple MacBook Tanzania",
    "laptop supplier Tanzania",
    "computer supplier Dar es Salaam",
    // Smartphones
    "smartphones Tanzania",
    "mobile phones Dar es Salaam",
    "iPhone Tanzania",
    "Samsung phones Dar es Salaam",
    // Storage & Components
    "SSD Tanzania",
    "solid state drive Dar es Salaam",
    "hard drives Tanzania",
    "RAM memory Tanzania",
    "computer components Dar es Salaam",
    // Peripherals
    "computer mouse Tanzania",
    "keyboard Dar es Salaam",
    "monitors Tanzania",
    "printers Dar es Salaam",
    "webcam Tanzania",
    "computer accessories Dar es Salaam",
    "wireless mouse Tanzania",
    "gaming mouse Dar es Salaam",
    // Networking
    "TP-Link router Tanzania",
    "WiFi router Dar es Salaam",
    "network switch Tanzania",
    "UniFi equipment Dar es Salaam",
    // Services
    "IT equipment supplier Tanzania",
    "computer repair Dar es Salaam",
    "IT support Tanzania",
    "network installation Dar es Salaam",
    "M-Pesa integration Tanzania"
  ]
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://neuraltale.com/#organization",
  name: "Neuraltale",
  alternateName: "Neuraltale Technologies",
  url: "https://neuraltale.com",
  logo: {
    "@type": "ImageObject",
    url: "https://neuraltale.com/logo.png",
    width: 600,
    height: 60,
    contentUrl: "https://neuraltale.com/logo.png"
  },
  image: [
    {
      "@type": "ImageObject",
      url: "https://neuraltale.com/logo.png",
      width: 600,
      height: 60
    },
    {
      "@type": "ImageObject", 
      url: "https://neuraltale.com/og-image.jpg",
      width: 1200,
      height: 630
    }
  ],
  description: "Leading computer and laptop supplier in Tanzania. Buy laptops, desktop computers, smartphones, SSDs, computer peripherals, and IT equipment in Dar es Salaam. Authorized dealer for Dell, HP, Lenovo, Apple MacBook. Gaming laptops, business computers, computer accessories, networking equipment.",
  telephone: "+255653520829",
  email: "helpdesk@neuraltale.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Msimbazi Street",
    addressLocality: "Dar es Salaam", 
    addressCountry: "Tanzania",
    postalCode: "11101"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-6.7924",
    longitude: "39.2083"
  },
  areaServed: {
    "@type": "Country",
    name: "Tanzania"
  },
  foundingDate: "2025",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: "50"
  },
  slogan: "Transforming Business Through Technology",
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates", 
      latitude: "-6.7924",
      longitude: "39.2083"
    },
    geoRadius: "1000000"
  },
  sameAs: [
    "https://twitter.com/neuraltale",
    "https://facebook.com/neuraltale", 
    "https://linkedin.com/company/neuraltale",
    "https://instagram.com/neuraltale"
  ]
}

// Google Logo Schema - Specific for search results logo
export const logoSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  url: "https://neuraltale.com",
  logo: "https://neuraltale.com/logo.png"
}

// Website Schema with logo
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://neuraltale.com/#website",
  url: "https://neuraltale.com",
  name: "Neuraltale",
  description: "Leading IT equipment supplier and technology solutions provider in Tanzania",
  publisher: {
    "@id": "https://neuraltale.com/#organization"
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://neuraltale.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness", 
  "@id": "https://neuraltale.com/#localbusiness",
  name: "Neuraltale",
  image: "https://neuraltale.com/office-photo.jpg",
  telephone: "+255653520829",
  email: "helpdesk@neuraltale.com",
  url: "https://neuraltale.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Msimbazi Street",
    addressLocality: "Dar es Salaam",
    addressRegion: "Dar es Salaam Region", 
    postalCode: "11101",
    addressCountry: "TZ"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-6.7924",
    longitude: "39.2083"
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00"
    },
    {
      "@type": "OpeningHoursSpecification", 
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00"
    }
  ],
  priceRange: "$$",
  currenciesAccepted: "TZS, USD",
  paymentAccepted: "Cash, Bank Transfer, M-Pesa, Airtel Money",
  hasMap: "https://maps.google.com/?q=NeuralTale+Technologies+Dar+es+Salaam"
}

export const serviceSchemas = {
  networkInstallation: {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://neuraltale.com/services#network-installation",
    name: "Enterprise Network Installation",
    description: "Professional installation and configuration of TP-Link Omada and Ubiquiti UniFi network equipment for businesses across Tanzania.",
    provider: {
      "@id": "https://neuraltale.com/#organization"
    },
    areaServed: {
      "@type": "Country",
      name: "Tanzania"
    },
    offers: {
      "@type": "Offer",
      price: "500000",
      priceCurrency: "TZS",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "500000",
        priceCurrency: "TZS",
        valueAddedTaxIncluded: true
      }
    },
    category: "Network Infrastructure",
    serviceType: "Installation"
  },
  mpesaIntegration: {
    "@context": "https://schema.org", 
    "@type": "Service",
    "@id": "https://neuraltale.com/services#mpesa-integration",
    name: "M-Pesa Integration Development",
    description: "Custom M-Pesa payment integration for businesses, POS systems, and Wi-Fi hotspot voucher systems in Tanzania.",
    provider: {
      "@id": "https://neuraltale.com/#organization"
    },
    areaServed: {
      "@type": "Country", 
      name: "Tanzania"
    },
    offers: {
      "@type": "Offer",
      price: "1500000",
      priceCurrency: "TZS"
    },
    category: "Software Development",
    serviceType: "Integration"
  }
}

export const productSchemas = {
  omadaController: {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://neuraltale.com/products#omada-controller",
    name: "TP-Link Omada SDN Controller", 
    description: "Centralized management solution for TP-Link Omada access points, switches, and gateways. Perfect for enterprise deployments.",
    brand: {
      "@type": "Brand",
      name: "TP-Link"
    },
    category: "Network Management",
    offers: {
      "@type": "Offer",
      price: "150000",
      priceCurrency: "TZS",
      availability: "https://schema.org/InStock",
      seller: {
        "@id": "https://neuraltale.com/#organization"
      }
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5"
      },
      author: {
        "@type": "Person",
        name: "James Mwalimu"
      }
    }
  }
}

// FAQ Schema for common questions
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What IT equipment brands do you supply in Tanzania?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We supply leading brands including TP-Link, Ubiquiti UniFi, Cisco, D-Link, and other enterprise-grade networking equipment. We specialize in TP-Link Omada solutions and UniFi deployments for businesses across Tanzania."
      }
    },
    {
      "@type": "Question", 
      "name": "Do you provide M-Pesa integration services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we are specialized M-Pesa integration developers offering complete payment solutions including Wi-Fi hotspot voucher systems, e-commerce integration, and custom payment applications for businesses in Tanzania."
      }
    },
    {
      "@type": "Question",
      "name": "What areas in Tanzania do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide services across Tanzania with offices in Dar es Salaam, and we serve clients in Zanzibar, Arusha, Mwanza, Dodoma, and other major cities. We offer both on-site and remote support services."
      }
    },
    {
      "@type": "Question",
      "name": "How long does TP-Link Omada setup take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TP-Link Omada setup typically takes 1-3 days depending on the size of your facility. This includes site survey, equipment installation, configuration, testing, and staff training. We ensure minimal disruption to your business operations."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer support and maintenance services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide comprehensive support including 24/7 monitoring, regular maintenance, firmware updates, and technical support in both English and Swahili. We guarantee response times and offer various support packages."
      }
    },
    {
      "@type": "Question",
      "name": "What is the cost of a Wi-Fi hotspot with M-Pesa vouchers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wi-Fi hotspot with M-Pesa voucher systems start from $1,500 for basic setups. Pricing depends on coverage area, number of concurrent users, and features required. We offer free consultations to provide accurate quotes."
      }
    }
  ]
}

// Review Schema for testimonials
export const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://neuraltale.com/#organization",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "47",
    "bestRating": "5",
    "worstRating": "4"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person", 
        "name": "Sarah Mwangi"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "NeuralTale transformed our guest Wi-Fi experience completely. The TP-Link Omada system they installed has been rock solid for 18 months with 99.5% uptime.",
      "datePublished": "2024-06-15"
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "James Mollel"
      },
      "reviewRating": {
        "@type": "Rating", 
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Our warehouse operations depend on real-time inventory tracking. NeuralTale designed a network that handles 200+ scanners without any slowdowns.",
      "datePublished": "2024-08-22"
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Dr. Amina Hassan"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5", 
        "bestRating": "5"
      },
      "reviewBody": "Patient data security was our biggest concern. NeuralTale implemented a HIPAA-compliant network with excellent M-Pesa integration.",
      "datePublished": "2024-09-10"
    }
  ]
}

// Product Catalog Schema for Computer Equipment
export const productCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Computer Equipment and IT Products",
  "description": "Laptops, desktop computers, smartphones, SSDs, computer peripherals and IT equipment available in Tanzania",
  "numberOfItems": 8,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Product",
        "name": "Laptops - Dell, HP, Lenovo, Apple MacBook",
        "description": "Business laptops, gaming laptops, student laptops. Dell Latitude, HP EliteBook, Lenovo ThinkPad, MacBook Pro, MacBook Air available in Tanzania",
        "category": "Computers/Laptops",
        "brand": ["Dell", "HP", "Lenovo", "Apple", "Asus", "Acer"],
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "TZS",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "Neuraltale"
          }
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Product",
        "name": "Desktop Computers & Gaming PCs",
        "description": "Desktop computers, all-in-one PCs, gaming computers, workstations. Dell Optiplex, HP ProDesk, custom gaming builds",
        "category": "Computers/Desktop",
        "brand": ["Dell", "HP", "Lenovo", "Custom Built"],
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "TZS",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "Neuraltale"
          }
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Product",
        "name": "Smartphones - iPhone, Samsung, Android",
        "description": "Latest smartphones, mobile phones. Apple iPhone, Samsung Galaxy, Android phones available in Dar es Salaam",
        "category": "Electronics/Smartphones",
        "brand": ["Apple", "Samsung", "Huawei", "Xiaomi", "Oppo"],
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "TZS",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "Neuraltale"
          }
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Product",
        "name": "SSD & Hard Drives - Storage Solutions",
        "description": "Solid state drives (SSD), hard disk drives (HDD), external storage. 256GB, 512GB, 1TB, 2TB options. Samsung, Kingston, WD, Seagate",
        "category": "Computer Components/Storage",
        "brand": ["Samsung", "Kingston", "Western Digital", "Seagate", "Crucial"],
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "TZS",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "Neuraltale"
          }
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Product",
        "name": "Computer Mouse & Keyboards",
        "description": "Wireless mouse, gaming mouse, mechanical keyboards, USB keyboards. Logitech, Razer, Corsair, HP, Dell peripherals",
        "category": "Computer Accessories/Input Devices",
        "brand": ["Logitech", "Razer", "Corsair", "HP", "Dell"],
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "TZS",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "Neuraltale"
          }
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "Product",
        "name": "Computer Monitors & Displays",
        "description": "LED monitors, gaming monitors, curved monitors. 21.5\", 24\", 27\", 32\" screens. Dell, HP, LG, Samsung, Asus monitors",
        "category": "Computer Accessories/Displays",
        "brand": ["Dell", "HP", "LG", "Samsung", "Asus"],
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "TZS",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "Neuraltale"
          }
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 7,
      "item": {
        "@type": "Product",
        "name": "Printers & Scanners",
        "description": "Laser printers, inkjet printers, multifunction printers, scanners. HP, Canon, Epson, Brother printing solutions",
        "category": "Office Equipment/Printers",
        "brand": ["HP", "Canon", "Epson", "Brother"],
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "TZS",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "Neuraltale"
          }
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 8,
      "item": {
        "@type": "Product",
        "name": "Networking Equipment - Routers, Switches",
        "description": "TP-Link routers, UniFi access points, network switches, ethernet cables, WiFi equipment. Enterprise and home networking solutions",
        "category": "Networking Equipment",
        "brand": ["TP-Link", "Ubiquiti", "Cisco", "D-Link", "Netgear"],
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "TZS",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "Neuraltale"
          }
        }
      }
    }
  ]
}

// Store Schema for Local Business SEO
export const storeSchema = {
  "@context": "https://schema.org",
  "@type": "Store",
  "name": "Neuraltale Computer & IT Equipment Store",
  "description": "Computer and laptop store in Dar es Salaam Tanzania. Buy laptops, desktop computers, smartphones, SSDs, computer accessories, peripherals, networking equipment",
  "image": "https://neuraltale.com/og-image.jpg",
  "url": "https://neuraltale.com",
  "telephone": "+255653520829",
  "priceRange": "TZS",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Msimbazi Street",
    "addressLocality": "Dar es Salaam",
    "addressCountry": "TZ",
    "postalCode": "11101"
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
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "paymentAccepted": "Cash, M-Pesa, Bank Transfer, Credit Card",
  "currenciesAccepted": "TZS, USD",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Computer Equipment & IT Products",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Laptops & Computers",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Dell Laptops",
              "category": "Laptops"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "HP Laptops",
              "category": "Laptops"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Lenovo Laptops",
              "category": "Laptops"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Apple MacBook",
              "category": "Laptops"
            }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Computer Accessories",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Computer Mouse",
              "category": "Peripherals"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Keyboards",
              "category": "Peripherals"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Monitors",
              "category": "Displays"
            }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Storage Solutions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "SSD Drives",
              "category": "Storage"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Hard Drives",
              "category": "Storage"
            }
          }
        ]
      }
    ]
  },
  "areaServed": {
    "@type": "City",
    "name": "Dar es Salaam"
  }
}

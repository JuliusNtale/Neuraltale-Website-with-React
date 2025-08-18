'use client'
import { useEffect } from 'react'

// Resource hints for critical resources
export const ResourceHints = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Preload critical CSS
    const criticalCSS = document.createElement('link')
    criticalCSS.rel = 'preload'
    criticalCSS.as = 'style'
    criticalCSS.href = '/_next/static/css/app/layout.css'
    document.head.appendChild(criticalCSS)

    // Prefetch likely next pages
    const prefetchPages = [
      '/services',
      '/about',
      '/contact',
      '/blog'
    ]

    prefetchPages.forEach(page => {
      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.href = page
      document.head.appendChild(link)
    })

    // Preconnect to external domains
    const externalDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ]

    externalDomains.forEach(domain => {
      const link = document.createElement('link')
      link.rel = 'preconnect'
      link.href = domain
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    })

    return () => {
      // Cleanup on unmount
      document.querySelectorAll('link[rel="prefetch"]').forEach(link => {
        if (prefetchPages.some(page => link.getAttribute('href')?.includes(page))) {
          link.remove()
        }
      })
    }
  }, [])

  return null
}

export default ResourceHints

'use client'

// Extend Window interface for GTM and gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    dataLayer?: any[]
  }
}

// Cookie utility functions with proper security flags
export class SecureCookieManager {
  
  // Set secure cookies with proper flags
  static setCookie(
    name: string, 
    value: string, 
    options: {
      maxAge?: number // in seconds
      httpOnly?: boolean
      secure?: boolean
      sameSite?: 'strict' | 'lax' | 'none'
      domain?: string
      path?: string
    } = {}
  ): void {
    if (typeof document === 'undefined') return // Server-side safety
    
    const {
      maxAge = 365 * 24 * 60 * 60, // 1 year default
      httpOnly = false, // Can't set HttpOnly via JS (server-side only)
      secure = window.location.protocol === 'https:',
      sameSite = 'lax',
      domain,
      path = '/'
    } = options
    
    let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`
    cookieString += `; Max-Age=${maxAge}`
    cookieString += `; Path=${path}`
    cookieString += `; SameSite=${sameSite}`
    
    if (secure) {
      cookieString += '; Secure'
    }
    
    if (domain) {
      cookieString += `; Domain=${domain}`
    }
    
    // Note: HttpOnly can only be set server-side for security
    // Client-side cookies are inherently accessible via JS
    
    document.cookie = cookieString
  }
  
  // Get cookie value
  static getCookie(name: string): string | null {
    if (typeof document === 'undefined') return null
    
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${encodeURIComponent(name)}=`)
    if (parts.length === 2) {
      const cookieValue = parts.pop()?.split(';').shift()
      return cookieValue ? decodeURIComponent(cookieValue) : null
    }
    return null
  }
  
  // Delete cookie securely
  static deleteCookie(name: string, domain?: string, path: string = '/'): void {
    if (typeof document === 'undefined') return
    
    let cookieString = `${encodeURIComponent(name)}=; Max-Age=-99999999; Path=${path}`
    
    if (domain) {
      cookieString += `; Domain=${domain}`
    }
    
    // Also delete for current domain
    document.cookie = cookieString
    
    // Try to delete for parent domain as well
    const hostname = window.location.hostname
    const parts = hostname.split('.')
    if (parts.length > 1) {
      const parentDomain = '.' + parts.slice(-2).join('.')
      document.cookie = `${encodeURIComponent(name)}=; Max-Age=-99999999; Path=${path}; Domain=${parentDomain}`
    }
  }
  
  // Check if cookies are enabled
  static areCookiesEnabled(): boolean {
    if (typeof document === 'undefined') return false
    
    try {
      document.cookie = 'cookietest=1; SameSite=Lax'
      const enabled = document.cookie.indexOf('cookietest=') !== -1
      // Clean up test cookie
      document.cookie = 'cookietest=; Max-Age=-99999999'
      return enabled
    } catch {
      return false
    }
  }
  
  // Get all cookies (for debugging/admin purposes)
  static getAllCookies(): Record<string, string> {
    if (typeof document === 'undefined') return {}
    
    const cookies: Record<string, string> = {}
    document.cookie.split(';').forEach(cookie => {
      const [name, value] = cookie.trim().split('=')
      if (name && value) {
        cookies[decodeURIComponent(name)] = decodeURIComponent(value)
      }
    })
    return cookies
  }
}

// Google Tag Manager configuration with security
export class SecureAnalytics {
  static initGoogleTagManager(consentGranted: boolean = false): void {
    if (typeof window === 'undefined') return
    
    // Initialize dataLayer if not exists
    window.dataLayer = window.dataLayer || []
    
    // Push consent configuration to GTM
    window.dataLayer.push({
      'event': 'consent_update',
      'analytics_consent': consentGranted ? 'granted' : 'denied',
      'ad_consent': 'denied', // NEURALTALE doesn't use ads
      'functionality_consent': 'granted', // Essential for website function
      'personalization_consent': consentGranted ? 'granted' : 'denied'
    })
    
    // Initialize Google Consent Mode via GTM
    if (window.gtag) {
      window.gtag('consent', 'default', {
        'ad_storage': 'denied',
        'analytics_storage': consentGranted ? 'granted' : 'denied',
        'functionality_storage': 'granted',
        'personalization_storage': consentGranted ? 'granted' : 'denied',
        'security_storage': 'granted'
      })
    }
  }
  
  static updateConsent(analyticsEnabled: boolean): void {
    if (typeof window === 'undefined') return
    
    // Update via dataLayer for GTM
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      'event': 'consent_update',
      'analytics_consent': analyticsEnabled ? 'granted' : 'denied',
      'personalization_consent': analyticsEnabled ? 'granted' : 'denied'
    })
    
    // Also update via gtag if available
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': analyticsEnabled ? 'granted' : 'denied',
        'personalization_storage': analyticsEnabled ? 'granted' : 'denied'
      })
    }
  }
  
  // Track business-relevant events via GTM
  static trackServiceInterest(service: string): void {
    if (typeof window === 'undefined') return
    
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      'event': 'service_interest',
      'service_name': service,
      'event_category': 'Services',
      'event_label': service,
      'business_type': 'IT Equipment',
      'customer_intent': 'high'
    })
  }
  
  static trackContactAttempt(method: 'form' | 'phone' | 'email' | 'whatsapp'): void {
    if (typeof window === 'undefined') return
    
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      'event': 'contact_attempt',
      'contact_method': method,
      'event_category': 'Lead Generation',
      'event_label': method,
      'lead_quality': 'high',
      'business_intent': 'purchase'
    })
  }
  
  // Track specific NEURALTALE business events
  static trackQuoteRequest(serviceType: string, estimatedValue?: number): void {
    if (typeof window === 'undefined') return
    
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      'event': 'quote_request',
      'service_type': serviceType,
      'estimated_value': estimatedValue,
      'event_category': 'Sales',
      'event_label': serviceType,
      'conversion_stage': 'interest'
    })
  }
  
  static trackDownload(resourceType: string, resourceName: string): void {
    if (typeof window === 'undefined') return
    
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      'event': 'download',
      'resource_type': resourceType,
      'resource_name': resourceName,
      'event_category': 'Engagement',
      'event_label': resourceName,
      'content_type': resourceType
    })
  }
  
  static trackPageView(pageName: string, category?: string): void {
    if (typeof window === 'undefined') return
    
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      'event': 'page_view',
      'page_title': document.title,
      'page_location': window.location.href,
      'page_name': pageName,
      'page_category': category || 'general',
      'business_type': 'IT Services'
    })
  }
}

export default SecureCookieManager

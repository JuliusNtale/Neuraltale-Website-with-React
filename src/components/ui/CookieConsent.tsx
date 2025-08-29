'use client'
import { useState, useEffect } from 'react'
import { X, Cookie, Shield, BarChart3, Target, AlertTriangle } from 'lucide-react'
import { SecureCookieManager, SecureAnalytics } from '@/lib/secure-cookies'

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

interface CookieConsent {
  essential: boolean
  analytics: boolean
  marketing: boolean
  functional: boolean
  timestamp: number
  version: string
}

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [cookiesEnabled, setCookiesEnabled] = useState(true)
  const [consent, setConsent] = useState<CookieConsent>({
    essential: true, // Always required
    analytics: false,
    marketing: false,
    functional: false,
    timestamp: Date.now(),
    version: '1.0'
  })

  useEffect(() => {
    // Check if cookies are enabled
    setCookiesEnabled(SecureCookieManager.areCookiesEnabled())
    
    // Check if user has already made a choice
    const existingConsent = SecureCookieManager.getCookie('neuraltale-cookie-consent')
    if (!existingConsent) {
      setShowBanner(true)
    } else {
      try {
        const parsed = JSON.parse(existingConsent)
        // Check if consent is recent (less than 1 year old)
        const isRecent = Date.now() - parsed.timestamp < 365 * 24 * 60 * 60 * 1000
        if (isRecent && parsed.version === '1.0') {
          setConsent(parsed)
          // Initialize analytics if consented
          if (parsed.analytics) {
            SecureAnalytics.initGoogleTagManager(true)
          }
        } else {
          // Consent expired or version changed, show banner again
          setShowBanner(true)
        }
      } catch {
        // Invalid consent data, show banner
        setShowBanner(true)
      }
    }
  }, [])

  const saveConsent = (newConsent: Omit<CookieConsent, 'timestamp' | 'version'>) => {
    const consentWithMeta: CookieConsent = {
      ...newConsent,
      timestamp: Date.now(),
      version: '1.0'
    }
    
    // Save with secure cookie settings
    SecureCookieManager.setCookie('neuraltale-cookie-consent', JSON.stringify(consentWithMeta), {
      maxAge: 365 * 24 * 60 * 60, // 1 year
      secure: true, // HTTPS only in production
      sameSite: 'lax', // Good balance of security and functionality
      path: '/'
    })
    
    setConsent(consentWithMeta)
    setShowBanner(false)
    setShowDetails(false)
    
    // Update analytics consent
    SecureAnalytics.updateConsent(newConsent.analytics)
    if (newConsent.analytics) {
      SecureAnalytics.initGoogleTagManager(true)
    }
  }

  const acceptAll = () => {
    const allConsent = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true
    }
    saveConsent(allConsent)
  }

  const acceptEssential = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false
    }
    saveConsent(essentialOnly)
  }

  const handleCustomConsent = () => {
    saveConsent(consent)
  }

  if (!showBanner) return null

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-blue-600 shadow-2xl z-50 p-4 md:p-6">
        <div className="container mx-auto max-w-6xl">
          {/* Warning for disabled cookies */}
          {!cookiesEnabled && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
              <AlertTriangle className="text-red-600 flex-shrink-0" size={20} />
              <p className="text-red-700 text-sm">
                <strong>Cookies Disabled:</strong> Your browser has cookies disabled. 
                Some features may not work properly. Please enable cookies for the best experience.
              </p>
            </div>
          )}
          
          <div className="flex items-start gap-4">
            <Cookie className="text-blue-600 mt-1 flex-shrink-0" size={24} />
            
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">
                🍪 We use cookies to improve your experience
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                We use cookies to analyze website traffic and optimize your experience. 
                By accepting our use of cookies, your data will be aggregated with all other user data.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={acceptAll}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Accept All
                </button>
                <button
                  onClick={acceptEssential}
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Essential Only
                </button>
                <button
                  onClick={() => setShowDetails(true)}
                  className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Customize
                </button>
              </div>
            </div>
            
            <button
              onClick={acceptEssential}
              className="text-gray-400 hover:text-gray-600 flex-shrink-0"
              aria-label="Close cookie banner and accept essential cookies only"
              title="Close cookie banner"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Detailed Settings Modal */}
      {showDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Cookie Preferences</h2>
                <button
                  onClick={() => setShowDetails(false)}
                  className="text-gray-400 hover:text-gray-600"
                  aria-label="Close cookie preferences modal"
                  title="Close"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-6">
                {/* Essential Cookies */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Shield className="text-green-600" size={20} />
                      <h3 className="font-semibold">Essential Cookies</h3>
                    </div>
                    <span className="text-sm text-green-600 font-medium">Always Active</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    These cookies are necessary for the website to function and cannot be disabled. 
                    They enable core functionality like page navigation and security features.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="text-blue-600" size={20} />
                      <h3 className="font-semibold">Analytics Cookies</h3>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={consent.analytics}
                        onChange={(e) => setConsent({...consent, analytics: e.target.checked})}
                        className="sr-only peer"
                        aria-label="Enable analytics cookies"
                        title="Toggle analytics cookies"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600">
                    Help us understand how visitors interact with our website by collecting anonymous information. 
                    Uses Google Analytics to improve our services.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Target className="text-purple-600" size={20} />
                      <h3 className="font-semibold">Marketing Cookies</h3>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={consent.marketing}
                        onChange={(e) => setConsent({...consent, marketing: e.target.checked})}
                        className="sr-only peer"
                        aria-label="Enable marketing cookies"
                        title="Toggle marketing cookies"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600">
                    Allow us to show you relevant ads and measure advertising effectiveness. 
                    Currently not used on this website.
                  </p>
                </div>

                {/* Functional Cookies */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Cookie className="text-orange-600" size={20} />
                      <h3 className="font-semibold">Functional Cookies</h3>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={consent.functional}
                        onChange={(e) => setConsent({...consent, functional: e.target.checked})}
                        className="sr-only peer"
                        aria-label="Enable functional cookies"
                        title="Toggle functional cookies"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600">
                    Remember your preferences and settings to provide a more personalized experience. 
                    Includes theme preferences and language settings.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <button
                  onClick={handleCustomConsent}
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Save Preferences
                </button>
                <button
                  onClick={acceptAll}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CookieConsent

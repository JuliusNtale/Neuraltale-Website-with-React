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
      {/* Cookie Banner - Compact & Friendly */}
      <div className="fixed bottom-4 right-4 max-w-sm bg-white rounded-xl shadow-lg border border-gray-200 p-4 z-50 animate-in slide-in-from-bottom-2 duration-300">
        {/* Warning for disabled cookies - Compact */}
        {!cookiesEnabled && (
          <div className="mb-3 p-2 bg-orange-50 border border-orange-200 rounded-lg">
            <p className="text-orange-700 text-xs flex items-center gap-1">
              <AlertTriangle size={14} />
              Cookies disabled in browser
            </p>
          </div>
        )}
        
        <div className="space-y-3">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Cookie className="text-blue-600" size={16} />
              </div>
              <h3 className="font-medium text-gray-900 text-sm">
                Cookie Settings
              </h3>
            </div>
            <button
              onClick={acceptEssential}
              className="text-gray-400 hover:text-gray-600 p-1"
              aria-label="Close cookie notice"
              title="Close (Essential only)"
            >
              <X size={16} />
            </button>
          </div>
          
          {/* Friendly Message */}
          <p className="text-gray-600 text-xs leading-relaxed">
            We use cookies to make your experience better. Essential cookies keep the site working, 
            while analytics help us improve our services for you! 😊
          </p>
          
          {/* Action Buttons */}
          <div className="space-y-2">
            <button
              onClick={acceptAll}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-[1.02]"
            >
              ✨ Accept All
            </button>
            
            <div className="flex gap-2">
              <button
                onClick={acceptEssential}
                className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-xs hover:bg-gray-200 transition-colors"
              >
                Essential Only
              </button>
              <button
                onClick={() => setShowDetails(true)}
                className="flex-1 border border-gray-300 text-gray-700 py-2 px-3 rounded-lg text-xs hover:bg-gray-50 transition-colors"
              >
                Customize
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Settings Modal - More Friendly */}
      {showDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[85vh] overflow-y-auto shadow-2xl">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Cookie className="text-blue-600" size={20} />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">Cookie Preferences</h2>
                </div>
                <button
                  onClick={() => setShowDetails(false)}
                  className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
                  aria-label="Close cookie preferences"
                >
                  <X size={20} />
                </button>
              </div>

              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Choose which cookies you're comfortable with. You can change these settings anytime! 🎯
              </p>

              <div className="space-y-4">
                {/* Essential Cookies - More Friendly */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Shield className="text-green-600" size={18} />
                      <h3 className="font-medium text-green-800">Essential Cookies</h3>
                    </div>
                    <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                      Required
                    </div>
                  </div>
                  <p className="text-sm text-green-700">
                    Keep the website working smoothly - like remembering your preferences and keeping things secure! ✨
                  </p>
                </div>

                {/* Analytics Cookies - More Friendly */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="text-blue-600" size={18} />
                      <h3 className="font-medium text-blue-800">Analytics Cookies</h3>
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
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:shadow-sm after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500"></div>
                    </label>
                  </div>
                  <p className="text-sm text-blue-700">
                    Help us understand what you like so we can make the website better for everyone! 📊
                  </p>
                </div>

                {/* Marketing Cookies - More Friendly */}
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Target className="text-purple-600" size={18} />
                      <h3 className="font-medium text-purple-800">Marketing Cookies</h3>
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
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:shadow-sm after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-500"></div>
                    </label>
                  </div>
                  <p className="text-sm text-purple-700">
                    Show you relevant content and services that might interest you! 🎯
                  </p>
                </div>

                {/* Functional Cookies - More Friendly */}
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Cookie className="text-orange-600" size={18} />
                      <h3 className="font-medium text-orange-800">Functional Cookies</h3>
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
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:shadow-sm after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-orange-500"></div>
                    </label>
                  </div>
                  <p className="text-sm text-orange-700">
                    Remember your choices and make features work better for you! ⚙️
                  </p>
                </div>
              </div>

              {/* Action Buttons - More Friendly */}
              <div className="flex gap-3 mt-6">
                <button
                  onClick={handleCustomConsent}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
                >
                  Save My Choices ✨
                </button>
                <button
                  onClick={acceptAll}
                  className="px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
                >
                  Accept All
                </button>
              </div>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                You can change these settings anytime in your browser! 🔄
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CookieConsent

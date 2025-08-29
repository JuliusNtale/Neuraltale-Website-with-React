import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | NEURALTALE',
  description: 'Privacy policy and cookie information for NEURALTALE website. Learn how we collect, use, and protect your personal information.',
  robots: 'index, follow'
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">🍪 Cookies</h3>
                <p className="text-gray-600">
                  We use cookies to improve your browsing experience. You can control which cookies to accept through our cookie banner.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">📊 Analytics</h3>
                <p className="text-gray-600">
                  We use Google Analytics to understand how visitors interact with our website. This helps us improve our services.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">📧 Contact Information</h3>
                <p className="text-gray-600">
                  When you contact us through forms or email, we collect information you provide such as name, email, and message content.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Types of Cookies We Use</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-green-600 mb-2">🔧 Essential Cookies</h3>
                <p className="text-sm text-gray-600">
                  Required for the website to function properly. These cannot be disabled.
                </p>
                <ul className="text-sm text-gray-500 mt-2 list-disc list-inside">
                  <li>Session management</li>
                  <li>Security features</li>
                  <li>Form submissions</li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-blue-600 mb-2">📈 Analytics Cookies</h3>
                <p className="text-sm text-gray-600">
                  Help us understand website usage and improve our services.
                </p>
                <ul className="text-sm text-gray-500 mt-2 list-disc list-inside">
                  <li>Google Analytics</li>
                  <li>Page view tracking</li>
                  <li>User behavior analysis</li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-purple-600 mb-2">🎯 Marketing Cookies</h3>
                <p className="text-sm text-gray-600">
                  Currently not used on our website.
                </p>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-orange-600 mb-2">⚙️ Functional Cookies</h3>
                <p className="text-sm text-gray-600">
                  Remember your preferences for a better experience.
                </p>
                <ul className="text-sm text-gray-500 mt-2 list-disc list-inside">
                  <li>Theme preferences</li>
                  <li>Language settings</li>
                  <li>Cookie consent choices</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• To provide and maintain our services</li>
              <li>• To respond to your inquiries and requests</li>
              <li>• To analyze website usage and improve user experience</li>
              <li>• To comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Your Rights</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-gray-700 mb-3">
                <strong>You have the right to:</strong>
              </p>
              <ul className="space-y-1 text-gray-600">
                <li>• Access your personal data</li>
                <li>• Correct inaccurate data</li>
                <li>• Request deletion of your data</li>
                <li>• Object to data processing</li>
                <li>• Withdraw consent at any time</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookie Management</h2>
            <p className="text-gray-600 mb-4">
              You can manage your cookie preferences at any time:
            </p>
            <div className="bg-gray-50 border rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-2">
                <strong>Browser Settings:</strong> Most browsers allow you to control cookies through settings.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Our Cookie Banner:</strong> Use our cookie consent banner to control which cookies we use.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Security</h2>
            <p className="text-gray-600">
              We implement appropriate security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Us</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-gray-700 mb-2">
                If you have questions about this Privacy Policy or our data practices:
              </p>
              <div className="text-gray-600">
                <p><strong>Email:</strong> helpdesk@neuraltale.com</p>
                <p><strong>Phone:</strong> +255 653 520 829</p>
                <p><strong>Address:</strong> Msimbazi Street, Dar es Salaam, Tanzania</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

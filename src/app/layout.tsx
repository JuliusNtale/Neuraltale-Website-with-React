import '../styles/globals.css'
import { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: 'NeuralTale Technologies - Innovating the Future',
  description: 'Cutting-edge technology solutions for AI, Cloud Computing, Cybersecurity, and more. Experience the future with NeuralTale Technologies.',
  keywords: ['technology', 'AI', 'cloud computing', 'cybersecurity', 'innovation', 'neuraltale'],
  authors: [{ name: 'NeuralTale Technologies' }],
  openGraph: {
    title: 'NeuralTale Technologies - Innovating the Future',
    description: 'Cutting-edge technology solutions for the modern world',
    type: 'website',
    siteName: 'NeuralTale Technologies',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeuralTale Technologies',
    description: 'Innovating the Future with Advanced Technology',
  },
  robots: 'index, follow',
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-inter bg-dark-bg text-white antialiased">
        <div id="root">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}

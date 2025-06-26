import { Inter, JetBrains_Mono } from 'next/font/google'
import '../styles/globals.css'
import { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' })

export const metadata: Metadata = {
  title: 'HexTech Technologies - Innovating the Future',
  description: 'Cutting-edge technology solutions for AI, Cloud Computing, Cybersecurity, and more. Experience the future with HexTech Technologies.',
  keywords: ['technology', 'AI', 'cloud computing', 'cybersecurity', 'innovation', 'hextech'],
  authors: [{ name: 'HexTech Technologies' }],
  openGraph: {
    title: 'HexTech Technologies - Innovating the Future',
    description: 'Cutting-edge technology solutions for the modern world',
    type: 'website',
    siteName: 'HexTech Technologies',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HexTech Technologies',
    description: 'Innovating the Future with Advanced Technology',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-inter bg-dark-bg text-white antialiased`}>
        <div id="root">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}

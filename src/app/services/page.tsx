import CorporateServicesPage from '@/components/sections/CorporateServices'

export default function Services() {
  return (
    <main className="min-h-screen bg-white">
      <CorporateServicesPage />
    </main>
  )
}

export const metadata = {
  title: 'Professional Technology Services - NEURALTALE',
  description: 'Enterprise-grade technology solutions including custom software development, IT infrastructure, cloud services, and strategic consulting for businesses.',
  keywords: ['enterprise software', 'IT consulting', 'cloud services', 'custom development', 'technology solutions', 'business automation', 'neuraltale'],
  openGraph: {
    title: 'Professional Technology Services - NEURALTALE',
    description: 'Enterprise-grade technology solutions designed for businesses seeking professional digital transformation.',
    images: ['/og-image.png'],
  },
}

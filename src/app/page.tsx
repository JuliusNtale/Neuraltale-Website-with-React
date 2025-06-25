import Hero from '@/components/sections/Hero'
import ServicesGrid from '@/components/sections/ServicesGrid'
import TechDemo from '@/components/sections/TechDemo'
import Testimonials from '@/components/sections/Testimonials'
import StatsCounter from '@/components/sections/StatsCounter'
import ContactForm from '@/components/sections/ContactForm'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg overflow-hidden">
      <Navbar />
      <Hero />
      <ServicesGrid />
      <TechDemo />
      <Testimonials />
      <StatsCounter />
      <ContactForm />
      <Footer />
    </main>
  )
}

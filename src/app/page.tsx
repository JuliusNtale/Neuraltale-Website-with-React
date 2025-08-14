import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import ServicesGrid from '@/components/sections/ServicesGrid'
import StatsCounter from '@/components/sections/StatsCounter'
import ContactForm from '@/components/sections/ContactForm'

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Hero />
      <About />
      <ServicesGrid />
      <StatsCounter />
      <ContactForm />
    </main>
  )
}

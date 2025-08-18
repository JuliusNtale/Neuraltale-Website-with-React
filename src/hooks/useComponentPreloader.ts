'use client'
import { useEffect, useState } from 'react'

interface PreloadConfig {
  components: string[]
  priority: 'high' | 'low' | 'idle'
  delay?: number
}

// Component preloader hook
export const useComponentPreloader = ({ components, priority = 'idle', delay = 2000 }: PreloadConfig) => {
  const [loaded, setLoaded] = useState<string[]>([])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const preloadComponents = async () => {
      const loadPromises = components.map(async (componentPath) => {
        try {
          // Preload the component module
          await import(componentPath)
          setLoaded(prev => [...prev, componentPath])
        } catch (error) {
          console.warn(`Failed to preload component: ${componentPath}`, error)
        }
      })

      await Promise.allSettled(loadPromises)
    }

    if (priority === 'high') {
      preloadComponents()
    } else if (priority === 'low') {
      setTimeout(preloadComponents, delay)
    } else {
      // Use requestIdleCallback for idle priority
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(() => {
          setTimeout(preloadComponents, delay)
        })
      } else {
        setTimeout(preloadComponents, delay * 2)
      }
    }
  }, [components, priority, delay])

  return { loaded, isLoaded: (component: string) => loaded.includes(component) }
}

// Critical components preloader
export const useCriticalPreloader = () => {
  return useComponentPreloader({
    components: [
      '@/components/sections/Hero',
      '@/components/sections/ServicesGrid',
      '@/components/layout/Navbar',
      '@/components/layout/Footer'
    ],
    priority: 'high'
  })
}

// Non-critical components preloader
export const useNonCriticalPreloader = () => {
  return useComponentPreloader({
    components: [
      '@/components/effects/ParticleBackground',
      '@/components/effects/ThreeDFloatingElements',
      '@/components/effects/ThreeDCarousel',
      '@/components/sections/Testimonials',
      '@/components/sections/BlogList'
    ],
    priority: 'idle',
    delay: 3000
  })
}

export default useComponentPreloader

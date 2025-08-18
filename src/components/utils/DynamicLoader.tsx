'use client'
import { lazy, Suspense, ComponentType } from 'react'

interface DynamicLoaderProps {
  fallback?: React.ReactNode
  className?: string
}

// Loading skeleton component
const LoadingSkeleton = ({ className }: { className?: string }) => (
  <div className={`animate-pulse bg-gray-200 rounded-lg ${className || 'h-64 w-full'}`}>
    <div className="flex items-center justify-center h-full">
      <div className="text-gray-400">Loading...</div>
    </div>
  </div>
)

// Dynamic loader for Three.js components
export const DynamicThreeJSLoader = ({ 
  fallback = <LoadingSkeleton className="h-96" />,
  ...props 
}: DynamicLoaderProps & { component: () => Promise<{ default: ComponentType<any> }> }) => {
  const Component = lazy(props.component)
  
  return (
    <Suspense fallback={fallback}>
      <Component />
    </Suspense>
  )
}

// Dynamic loader for particle effects
export const DynamicParticleLoader = ({ 
  fallback = <LoadingSkeleton className="h-screen" />,
  ...props 
}: DynamicLoaderProps & { component: () => Promise<{ default: ComponentType<any> }> }) => {
  const Component = lazy(props.component)
  
  return (
    <Suspense fallback={fallback}>
      <Component />
    </Suspense>
  )
}

// Dynamic loader for motion components
export const DynamicMotionLoader = ({ 
  fallback = <LoadingSkeleton />,
  ...props 
}: DynamicLoaderProps & { component: () => Promise<{ default: ComponentType<any> }> }) => {
  const Component = lazy(props.component)
  
  return (
    <Suspense fallback={fallback}>
      <Component />
    </Suspense>
  )
}

// Generic dynamic loader
export const DynamicComponentLoader = ({
  component,
  fallback = <LoadingSkeleton />,
  componentProps,
  ...props
}: DynamicLoaderProps & { 
  component: () => Promise<{ default: ComponentType<any> }>,
  componentProps?: Record<string, any>
}) => {
  const Component = lazy(component)
  
  return (
    <Suspense fallback={fallback}>
      <Component {...(componentProps || {})} />
    </Suspense>
  )
}

export default DynamicComponentLoader

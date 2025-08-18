'use client'
import { lazy, Suspense } from 'react'
import type { LucideIcon } from 'lucide-react'

// Commonly used icons - loaded immediately
export { 
  Menu, 
  X, 
  ChevronRight, 
  ChevronDown,
  Home,
  Mail,
  Phone
} from 'lucide-react'

// Lazy load less critical icons
export const Server = lazy(() => import('lucide-react').then(mod => ({ default: mod.Server })))
export const Shield = lazy(() => import('lucide-react').then(mod => ({ default: mod.Shield })))
export const Wifi = lazy(() => import('lucide-react').then(mod => ({ default: mod.Wifi })))
export const Users = lazy(() => import('lucide-react').then(mod => ({ default: mod.Users })))
export const Settings = lazy(() => import('lucide-react').then(mod => ({ default: mod.Settings })))
export const Globe = lazy(() => import('lucide-react').then(mod => ({ default: mod.Globe })))
export const Code = lazy(() => import('lucide-react').then(mod => ({ default: mod.Code })))
export const Database = lazy(() => import('lucide-react').then(mod => ({ default: mod.Database })))
export const Cloud = lazy(() => import('lucide-react').then(mod => ({ default: mod.Cloud })))
export const Lock = lazy(() => import('lucide-react').then(mod => ({ default: mod.Lock })))
export const Zap = lazy(() => import('lucide-react').then(mod => ({ default: mod.Zap })))
export const Target = lazy(() => import('lucide-react').then(mod => ({ default: mod.Target })))
export const CheckCircle = lazy(() => import('lucide-react').then(mod => ({ default: mod.CheckCircle })))
export const ArrowRight = lazy(() => import('lucide-react').then(mod => ({ default: mod.ArrowRight })))
export const ExternalLink = lazy(() => import('lucide-react').then(mod => ({ default: mod.ExternalLink })))
export const MapPin = lazy(() => import('lucide-react').then(mod => ({ default: mod.MapPin })))
export const Clock = lazy(() => import('lucide-react').then(mod => ({ default: mod.Clock })))
export const Calendar = lazy(() => import('lucide-react').then(mod => ({ default: mod.Calendar })))
export const FileText = lazy(() => import('lucide-react').then(mod => ({ default: mod.FileText })))
export const Briefcase = lazy(() => import('lucide-react').then(mod => ({ default: mod.Briefcase })))
export const Award = lazy(() => import('lucide-react').then(mod => ({ default: mod.Award })))
export const TrendingUp = lazy(() => import('lucide-react').then(mod => ({ default: mod.TrendingUp })))

// Icon wrapper with fallback
interface DynamicIconProps {
  icon: React.LazyExoticComponent<LucideIcon>
  className?: string
  size?: number
  fallback?: React.ReactNode
}

const IconFallback = ({ className, size = 24 }: { className?: string, size?: number }) => (
  <div 
    className={`inline-block bg-gray-200 rounded ${className}`}
    data-size={size}
  />
)

export const DynamicIcon = ({ 
  icon: Icon, 
  className, 
  size = 24, 
  fallback 
}: DynamicIconProps) => {
  return (
    <Suspense fallback={fallback || <IconFallback className={className} size={size} />}>
      <Icon className={className} size={size} />
    </Suspense>
  )
}

export default DynamicIcon

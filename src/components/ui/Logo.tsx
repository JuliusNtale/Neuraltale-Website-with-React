'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
  className?: string
  layout?: 'horizontal' | 'vertical'
}

const sizeClasses = {
  sm: { width: 24, height: 24 },
  md: { width: 32, height: 32 },
  lg: { width: 48, height: 48 },
  xl: { width: 64, height: 64 }
}

const textSizeClasses = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl',
  xl: 'text-3xl'
}

export default function Logo({ size = 'md', showText = true, className = '', layout = 'horizontal' }: LogoProps) {
  const logoSize = sizeClasses[size]
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`flex ${layout === 'vertical' ? 'flex-col items-center space-y-2' : 'items-center space-x-2'} ${className}`}
    >
      {/* Logo Image */}
      <div className="relative">
        <Image
          src="/logo.png"
          alt="Neuraltale Logo"
          width={logoSize.width}
          height={logoSize.height}
          className="object-contain"
          priority={true}
        />
      </div>
      
      {/* Company name */}
      {showText && (
        <span className={`${textSizeClasses[size]} font-bold gradient-text`}>
          NEURALTALE
        </span>
      )}
    </motion.div>
  )
}

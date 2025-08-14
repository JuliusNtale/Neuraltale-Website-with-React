'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
  className?: string
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

export default function Logo({ size = 'md', showText = true, className = '' }: LogoProps) {
  const logoSize = sizeClasses[size]
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`flex items-center space-x-2 ${className}`}
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
        
        {/* Glow effect */}
        <div 
          className="absolute inset-0 bg-blue-500/20 rounded-full blur-md"
          style={{ width: logoSize.width, height: logoSize.height }}
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

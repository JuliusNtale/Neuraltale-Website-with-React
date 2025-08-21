import React from 'react'

interface GoogleLogoProps {
  className?: string
  priority?: boolean
}

// Component specifically for Google Search Logo requirements
const GoogleLogo: React.FC<GoogleLogoProps> = ({ className, priority = false }) => {
  return (
    <div className={`google-logo-container ${className || ''}`}>
      <img
        src="https://neuraltale.com/logo.png"
        alt="Neuraltale Logo"
        width={600}
        height={60}
        itemProp="logo"
        loading={priority ? "eager" : "lazy"}
        className="max-w-full h-auto object-contain"
      />
    </div>
  )
}

export default GoogleLogo

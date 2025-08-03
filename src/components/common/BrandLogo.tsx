// import React from 'react' // Not needed with new JSX transform

interface BrandLogoProps {
  size?: 'small' | 'medium' | 'large'
  variant?: 'light' | 'dark' | 'color'
  showText?: boolean
  className?: string
}

const BrandLogo = ({ 
  size = 'medium', 
  variant = 'color', 
  showText = true,
  className = ''
}: BrandLogoProps) => {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-8 h-8', 
    large: 'w-12 h-12'
  }

  const textSizeClasses = {
    small: 'text-lg',
    medium: 'text-xl',
    large: 'text-2xl'
  }

  const getColors = () => {
    switch (variant) {
      case 'light':
        return {
          bg: 'bg-white',
          text: 'text-white',
          wave: 'stroke-white'
        }
      case 'dark':
        return {
          bg: 'bg-gray-900',
          text: 'text-gray-900',
          wave: 'stroke-gray-900'
        }
      case 'color':
      default:
        return {
          bg: 'bg-ocean-500',
          text: 'text-ocean-600',
          wave: 'stroke-white'
        }
    }
  }

  const colors = getColors()

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} ${colors.bg} rounded-lg flex items-center justify-center shadow-lg relative overflow-hidden`}>
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent opacity-20 animate-pulse"></div>
        
        {/* Wave pattern */}
        <svg 
          viewBox="0 0 32 32" 
          className={`${sizeClasses[size]} relative z-10`}
          fill="none"
        >
          {/* Main wave */}
          <path 
            d="M4 20C4 20 6 16 8 16C10 16 12 20 12 20C12 20 14 16 16 16C18 16 20 20 20 20C20 20 22 16 24 16C26 16 28 20 28 20" 
            className={colors.wave}
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          {/* Secondary wave */}
          <path 
            d="M2 24C2 24 4 20 6 20C8 20 10 24 10 24C10 24 12 20 14 20C16 20 18 24 18 24C18 24 20 20 22 20C24 20 26 24 26 24C26 24 28 20 30 20" 
            className={colors.wave}
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            opacity="0.7"
          />
          {/* Alert symbol */}
          <circle cx="16" cy="8" r="2" className="fill-current text-white" />
          <path d="M14 10L18 10" className={colors.wave} strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Brand Text */}
      {showText && (
        <div>
          <div className={`${textSizeClasses[size]} font-bold ${colors.text} tracking-tight`}>
            Tsunami2025
          </div>
          {size !== 'small' && (
            <div className="text-xs text-gray-500 font-medium tracking-wide">
              SAFETY PLATFORM
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default BrandLogo
// import React from 'react' // Not needed with new JSX transform
import { ShieldCheckIcon, StarIcon } from '@heroicons/react/24/outline'

interface ProductRecommendationProps {
  title: string
  description: string
  price: string
  reason: string
  buttonText?: string
  affiliateUrl?: string
  className?: string
}

const SimpleProductRecommendation = ({
  title,
  description,
  price,
  reason,
  buttonText = "View Details",
  affiliateUrl = "#",
  className = ""
}: ProductRecommendationProps) => {
  return (
    <div className={`bg-gradient-to-r from-blue-50 to-safe-50 rounded-xl p-6 border-2 border-blue-200 ${className}`}>
      {/* Header */}
      <div className="text-center mb-4">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <StarIcon className="w-5 h-5 text-yellow-500 fill-current" />
          <span className="text-sm font-semibold text-gray-700">Expert Recommendation</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900">
          💡 {title}
        </h3>
      </div>

      {/* Product Card */}
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <div className="flex items-center space-x-4">
          {/* Product Icon/Image Placeholder */}
          <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <ShieldCheckIcon className="w-8 h-8 text-blue-600" />
          </div>
          
          {/* Product Info */}
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-gray-900 truncate">
              {title}
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              {description}
            </p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-lg font-bold text-blue-600">
                {price}
              </span>
              <a
                href={affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {buttonText}
              </a>
            </div>
          </div>
        </div>
        
        {/* Reason */}
        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Why we recommend this:</strong> {reason}
          </p>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="mt-4 text-center">
        <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
          <span className="flex items-center space-x-1">
            <ShieldCheckIcon className="w-3 h-3" />
            <span>Tested by experts</span>
          </span>
          <span>•</span>
          <span>Free shipping available</span>
          <span>•</span>
          <span>30-day return policy</span>
        </div>
      </div>
    </div>
  )
}

export default SimpleProductRecommendation
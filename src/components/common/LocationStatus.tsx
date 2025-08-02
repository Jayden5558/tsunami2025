import React, { useState, useEffect } from 'react'
import { MapPinIcon, ShieldCheckIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'

interface LocationData {
  city: string
  country: string
  riskLevel: 'safe' | 'low' | 'medium' | 'high'
  lastUpdate: Date
}

const LocationStatus: React.FC = () => {
  const [location, setLocation] = useState<LocationData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate location detection and risk assessment
    const detectLocation = async () => {
      setIsLoading(true)
      
      // In a real app, this would use:
      // 1. Geolocation API
      // 2. IP-based location service
      // 3. Real tsunami risk database
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock location data focused on English-speaking markets
      const mockLocations: LocationData[] = [
        { city: 'Los Angeles', country: 'USA', riskLevel: 'medium', lastUpdate: new Date() },
        { city: 'San Francisco', country: 'USA', riskLevel: 'medium', lastUpdate: new Date() },
        { city: 'Seattle', country: 'USA', riskLevel: 'medium', lastUpdate: new Date() },
        { city: 'Honolulu', country: 'USA', riskLevel: 'high', lastUpdate: new Date() },
        { city: 'Vancouver', country: 'Canada', riskLevel: 'medium', lastUpdate: new Date() },
        { city: 'Sydney', country: 'Australia', riskLevel: 'low', lastUpdate: new Date() },
        { city: 'Auckland', country: 'New Zealand', riskLevel: 'medium', lastUpdate: new Date() },
        { city: 'Mumbai', country: 'India', riskLevel: 'high', lastUpdate: new Date() },
        { city: 'Chennai', country: 'India', riskLevel: 'high', lastUpdate: new Date() },
        { city: 'London', country: 'UK', riskLevel: 'low', lastUpdate: new Date() }
      ]
      
      const randomLocation = mockLocations[Math.floor(Math.random() * mockLocations.length)]
      setLocation(randomLocation)
      setIsLoading(false)
    }

    detectLocation()
  }, [])

  const getRiskConfig = (riskLevel: string) => {
    switch (riskLevel) {
      case 'safe':
        return {
          color: 'text-safe-600',
          bgColor: 'bg-safe-100',
          dotColor: 'bg-safe-500',
          text: 'Safe Zone',
          icon: ShieldCheckIcon,
          message: 'You are in a very low tsunami risk area'
        }
      case 'low':
        return {
          color: 'text-blue-600',
          bgColor: 'bg-blue-100',
          dotColor: 'bg-blue-500',
          text: 'Low Risk',
          icon: ShieldCheckIcon,
          message: 'Low tsunami risk, but good to be prepared'
        }
      case 'medium':
        return {
          color: 'text-yellow-600',
          bgColor: 'bg-yellow-100',
          dotColor: 'bg-yellow-500',
          text: 'Medium Risk',
          icon: ExclamationTriangleIcon,
          message: 'Moderate tsunami risk, preparation recommended'
        }
      case 'high':
        return {
          color: 'text-emergency-600',
          bgColor: 'bg-emergency-100',
          dotColor: 'bg-emergency-500',
          text: 'High Risk',
          icon: ExclamationTriangleIcon,
          message: 'High tsunami risk area, preparation essential'
        }
      default:
        return {
          color: 'text-gray-600',
          bgColor: 'bg-gray-100',
          dotColor: 'bg-gray-500',
          text: 'Unknown',
          icon: MapPinIcon,
          message: 'Unable to determine risk level'
        }
    }
  }

  if (isLoading) {
    return (
      <div className="bg-gradient-to-r from-ocean-500 to-ocean-600 text-white shadow-lg">
        <div className="container-main">
          <div className="py-4 px-4">
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-3 lg:space-y-0 lg:space-x-8">
              
              {/* Loading Animation */}
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-6 h-6 rounded-full bg-white bg-opacity-30 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
                  </div>
                  <div className="absolute inset-0 w-6 h-6 rounded-full bg-white opacity-20 animate-ping"></div>
                </div>
                
                <div>
                  <div className="text-lg lg:text-xl font-bold tracking-wide animate-pulse">
                    🔍 DETECTING YOUR LOCATION...
                  </div>
                  <div className="text-sm opacity-90 font-medium">
                    Analyzing tsunami risk for your area
                  </div>
                </div>
              </div>

              {/* Loading Badges */}
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2 backdrop-blur-sm animate-pulse">
                <div className="w-5 h-5 bg-white bg-opacity-50 rounded"></div>
                <div className="w-24 h-4 bg-white bg-opacity-50 rounded"></div>
              </div>

            </div>

            <div className="mt-3 text-center">
              <div className="text-sm opacity-90 font-medium animate-pulse">
                Getting real-time safety information for you...
              </div>
            </div>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
      </div>
    )
  }

  if (!location) {
    return (
      <div className="bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-lg">
        <div className="container-main">
          <div className="py-4 px-4">
            <div className="flex items-center justify-center space-x-3">
              <div className="relative">
                <div className="w-6 h-6 rounded-full bg-white bg-opacity-30 flex items-center justify-center">
                  <MapPinIcon className="w-4 h-4" />
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-lg font-bold tracking-wide">
                  📍 LOCATION DETECTION UNAVAILABLE
                </div>
                <div className="text-sm opacity-90 font-medium">
                  Using general safety guidelines • Still protected
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
      </div>
    )
  }

  const riskConfig = getRiskConfig(location.riskLevel)
  const IconComponent = riskConfig.icon

  return (
    <div className={`relative overflow-hidden ${
      location.riskLevel === 'safe' || location.riskLevel === 'low' 
        ? 'bg-gradient-to-r from-safe-500 to-safe-600 status-bar-safe' 
        : location.riskLevel === 'medium'
        ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
        : 'bg-gradient-to-r from-emergency-500 to-emergency-600'
    } text-white shadow-xl`}>
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20 status-bar-shimmer"></div>
      
      <div className="container-main relative z-10">
        <div className="py-4 px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-3 lg:space-y-0 lg:space-x-8">
            
            {/* Main Status - Most Prominent */}
            <div className="flex items-center space-x-3 text-center lg:text-left">
              <div className="relative">
                <div className={`w-8 h-8 rounded-full bg-white bg-opacity-30 flex items-center justify-center backdrop-blur-sm`}>
                  <div className={`w-4 h-4 rounded-full bg-white animate-pulse`}></div>
                </div>
                {/* Multiple ripple effects */}
                <div className="absolute inset-0 w-8 h-8 rounded-full bg-white opacity-20 animate-ping"></div>
                <div className="absolute inset-0 w-8 h-8 rounded-full bg-white opacity-10 animate-ripple"></div>
              </div>
              
              <div>
                <div className="text-lg lg:text-xl font-bold tracking-wide">
                  {location.riskLevel === 'safe' || location.riskLevel === 'low' 
                    ? '✓ YOU ARE CURRENTLY SAFE' 
                    : location.riskLevel === 'medium'
                    ? '⚠ STAY ALERT & PREPARED'
                    : '🚨 HIGH RISK - BE PREPARED'
                  }
                </div>
                <div className="text-sm opacity-90 font-medium">
                  Tsunami Safety Status • Live Update
                </div>
              </div>
            </div>

            {/* Location Badge */}
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2 backdrop-blur-sm">
              <MapPinIcon className="w-5 h-5" />
              <span className="font-semibold text-lg">
                {location.city}, {location.country}
              </span>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>

            {/* Risk Level Badge */}
            <div className="flex items-center space-x-2">
              <IconComponent className="w-5 h-5" />
              <div className="bg-white bg-opacity-25 rounded-lg px-3 py-2 backdrop-blur-sm">
                <div className="text-sm font-bold tracking-wider">
                  {riskConfig.text.toUpperCase()} ZONE
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Message */}
          <div className="mt-3 text-center">
            <div className="text-sm opacity-90 font-medium">
              {riskConfig.message} • 
              <span className="ml-1 font-bold">
                {location.riskLevel === 'safe' || location.riskLevel === 'low' 
                  ? 'Relax, but stay informed' 
                  : 'Knowledge saves lives'
                }
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
    </div>
  )
}

export default LocationStatus
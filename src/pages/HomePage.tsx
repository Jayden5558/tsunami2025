import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ExclamationTriangleIcon,
  HeartIcon,
  MapPinIcon,
  HomeIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'
import { useEmergencyMode } from '../context/AppContext'
import LocationStatus from '../components/common/LocationStatus'
import SocialProof from '../components/common/SocialProof'

const HomePage = () => {
  const { enableEmergencyMode } = useEmergencyMode()

  const quickActions = [
    {
      id: 'escape',
      title: 'Learn Escape',
      subtitle: '3-minute guide',
      icon: ExclamationTriangleIcon,
      path: '/emergency-guide',
      color: 'bg-emergency-500 hover:bg-emergency-600',
      textColor: 'text-white'
    },
    {
      id: 'family',
      title: 'Protect Family',
      subtitle: 'Make a plan',
      icon: HomeIcon,
      path: '/emergency-preparation',
      color: 'bg-safe-500 hover:bg-safe-600',
      textColor: 'text-white'
    },
    {
      id: 'risk',
      title: 'Check Risk',
      subtitle: 'Know your area',
      icon: MapPinIcon,
      path: '/risk-query',
      color: 'bg-ocean-500 hover:bg-ocean-600',
      textColor: 'text-white'
    }
  ]

  const handleEmergencyClick = () => {
    enableEmergencyMode()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-ocean-50">
      {/* Status Bar */}
      <LocationStatus />

      {/* Main Hero Section */}
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center">
            {/* Core Question */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              If a tsunami happens now,
              <br />
              <span className="text-emergency-600">what should I do?</span>
            </h1>

            {/* Main CTA Button */}
            <div className="mb-12">
              <Link
                to="/emergency-guide"
                onClick={handleEmergencyClick}
                className="inline-flex items-center space-x-4 bg-emergency-500 hover:bg-emergency-600 text-white font-bold text-2xl md:text-3xl px-12 py-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-200 animate-pulse-emergency"
              >
                <ExclamationTriangleIcon className="w-10 h-10" />
                <span>Get 3-Minute Life-Saving Guide</span>
              </Link>
            </div>

            {/* Simple Trust Indicator */}
            <div className="flex items-center justify-center space-x-2 mb-16">
              <HeartIcon className="w-6 h-6 text-pink-500" />
              <span className="text-lg text-gray-700">
                Trusted by millions worldwide
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Or choose what you want to do:
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {quickActions.map((action) => {
                const IconComponent = action.icon
                return (
                  <Link
                    key={action.id}
                    to={action.path}
                    className={`${action.color} ${action.textColor} rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl`}
                  >
                    <IconComponent className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">{action.title}</h3>
                    <p className="text-sm opacity-90">{action.subtitle}</p>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                🔥 Featured: Complete USA Risk Analysis
              </h2>
              <p className="text-gray-600">
                Our most comprehensive guide covering all 50 states and territories
              </p>
            </div>
            
            <Link to="/usa-tsunami-risk" className="card-navigation block">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-emergency-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">🇺🇸</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    USA Tsunami Risk: Complete State-by-State Guide
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Detailed analysis of tsunami threats across America, from Alaska's extreme risk to California's coastal challenges. 
                    Includes state-specific preparation tips and emergency resources.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>📊 87M Americans at risk</span>
                    <span>🏛️ NOAA certified information</span>
                    <span>⏱️ 8 min read</span>
                  </div>
                </div>
                <div className="text-ocean-600 font-semibold">
                  Read Guide →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <SocialProof />

      {/* Trust Indicators */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-600">
              <div className="flex items-center justify-center space-x-2">
                <ShieldCheckIcon className="w-5 h-5 text-safe-500" />
                <span>UNESCO-IOC Certified Content</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">50+</span>
                <span>Countries' Emergency Departments Recommend</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <HeartIcon className="w-5 h-5 text-pink-500" />
                <span>Trusted by Emergency Services Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-main text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Remember: Your Safety Comes First
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              This platform provides educational information to help you prepare for tsunami threats. 
              In an actual emergency, always follow official evacuation orders and contact emergency services immediately.
            </p>
            <div className="bg-emergency-900 rounded-lg p-4">
              <p className="font-semibold text-emergency-200">
                Emergency Contacts: 911 (US) | 112 (EU) | 119 (Japan) | Your Local Emergency Services
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
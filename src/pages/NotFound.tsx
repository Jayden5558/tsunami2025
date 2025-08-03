// import React from 'react' // Not needed with new JSX transform
import { Link } from 'react-router-dom'
import { 
  ExclamationTriangleIcon, 
  HomeIcon, 
  MagnifyingGlassIcon,
  MapIcon
} from '@heroicons/react/24/outline'

const NotFound = () => {
  const quickLinks = [
    {
      title: 'Emergency Escape Guide',
      description: '3-minute life-saving instructions',
      icon: ExclamationTriangleIcon,
      path: '/emergency-guide',
      priority: true
    },
    {
      title: 'Warning System',
      description: 'Recognize tsunami warning signs',
      icon: MagnifyingGlassIcon,
      path: '/warning-system',
      priority: false
    },
    {
      title: 'Emergency Preparation',
      description: 'Build your emergency kit',
      icon: MapIcon,
      path: '/emergency-preparation',
      priority: false
    },
    {
      title: 'Risk Assessment',
      description: 'Check your area\'s tsunami risk',
      icon: MapIcon,
      path: '/risk-query',
      priority: false
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Error Message */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl font-bold text-gray-400">404</span>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          
          <p className="text-gray-600 mb-6">
            The page you're looking for doesn't exist or may have been moved. 
            Don't worry - we'll help you find the safety information you need.
          </p>
        </div>

        {/* Emergency Notice */}
        <div className="bg-emergency-50 border border-emergency-200 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <ExclamationTriangleIcon className="w-6 h-6 text-emergency-600" />
            <h2 className="text-lg font-semibold text-emergency-800">
              In Case of Emergency
            </h2>
          </div>
          <p className="text-emergency-700 mb-4">
            If you need immediate tsunami safety information, use the emergency guide below or call emergency services.
          </p>
          <Link
            to="/emergency-guide"
            className="btn-emergency inline-flex items-center space-x-2"
          >
            <ExclamationTriangleIcon className="w-5 h-5" />
            <span>EMERGENCY ESCAPE GUIDE</span>
          </Link>
        </div>

        {/* Quick Navigation */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Find What You're Looking For
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickLinks.map((link) => {
              const IconComponent = link.icon
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`card-navigation text-left ${
                    link.priority ? 'border-emergency-200 bg-emergency-50' : ''
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-2 rounded-lg ${
                      link.priority 
                        ? 'bg-emergency-100 text-emergency-600' 
                        : 'bg-ocean-100 text-ocean-600'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className={`font-semibold mb-1 ${
                        link.priority ? 'text-emergency-800' : 'text-gray-900'
                      }`}>
                        {link.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {link.description}
                      </p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Additional Actions */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <HomeIcon className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            
            <Link
              to="/search"
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <MagnifyingGlassIcon className="w-5 h-5" />
              <span>Search Information</span>
            </Link>
          </div>
          
          <div className="text-sm text-gray-500">
            <p>
              Need help? All our safety information is designed to be accessible within 3 clicks from the homepage.
            </p>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="mt-12 p-4 bg-gray-900 text-white rounded-lg">
          <h3 className="font-semibold mb-2">Emergency Contacts</h3>
          <p className="text-sm text-gray-300">
            USA: 911 | Europe: 112 | Japan: 119 | Your Local Emergency Services
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotFound
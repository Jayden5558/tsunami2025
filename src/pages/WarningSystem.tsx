import React from 'react'
import { Link } from 'react-router-dom'
import { 
  MegaphoneIcon,
  EyeIcon,
  SpeakerWaveIcon,
  DevicePhoneMobileIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

const WarningSystem: React.FC = () => {
  const naturalSigns = [
    {
      sign: "Strong Earthquake",
      description: "Ground shaking lasting more than 20 seconds near the coast",
      urgency: "immediate",
      action: "Evacuate immediately to higher ground"
    },
    {
      sign: "Ocean Recession",
      description: "Sea water suddenly recedes, exposing sea floor",
      urgency: "immediate", 
      action: "Run to higher ground - tsunami may arrive in minutes"
    },
    {
      sign: "Unusual Ocean Sounds",
      description: "Loud roaring sound from the ocean, like a freight train",
      urgency: "immediate",
      action: "Move inland and uphill immediately"
    },
    {
      sign: "Animal Behavior",
      description: "Dogs barking excessively, birds fleeing, animals acting restless",
      urgency: "high",
      action: "Stay alert and be ready to evacuate"
    }
  ]

  const officialWarnings = [
    {
      level: "Tsunami Warning",
      color: "emergency",
      description: "Tsunami waves are imminent or occurring",
      action: "Evacuate immediately to higher ground"
    },
    {
      level: "Tsunami Advisory", 
      color: "orange",
      description: "Tsunami waves are possible",
      action: "Stay away from beaches and harbors"
    },
    {
      level: "Tsunami Watch",
      color: "yellow", 
      description: "Tsunami is possible based on earthquake data",
      action: "Stay informed and be ready to act"
    }
  ]

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'immediate': return 'border-emergency-500 bg-emergency-50'
      case 'high': return 'border-orange-500 bg-orange-50'
      case 'medium': return 'border-yellow-500 bg-yellow-50'
      default: return 'border-gray-300 bg-gray-50'
    }
  }

  const getLevelColor = (color: string) => {
    switch (color) {
      case 'emergency': return 'bg-emergency-500 text-white'
      case 'orange': return 'bg-orange-500 text-white'
      case 'yellow': return 'bg-yellow-500 text-white'
      default: return 'bg-gray-500 text-white'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="section-padding bg-white">
        <div className="container-main text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Tsunami Warning System
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn to recognize natural warning signs and understand official tsunami alerts
          </p>
        </div>
      </section>

      {/* Natural Warning Signs */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <EyeIcon className="w-12 h-12 text-ocean-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Natural Warning Signs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nature often provides the first and fastest warning. These signs require immediate action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {naturalSigns.map((item, index) => (
              <div key={index} className={`card border-2 ${getUrgencyColor(item.urgency)}`}>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.sign}
                  </h3>
                  {item.urgency === 'immediate' && (
                    <ExclamationTriangleIcon className="w-6 h-6 text-emergency-500 flex-shrink-0" />
                  )}
                </div>
                <p className="text-gray-700 mb-4">
                  {item.description}
                </p>
                <div className="bg-white rounded-lg p-3 border">
                  <p className="font-semibold text-gray-900 text-sm">
                    Immediate Action:
                  </p>
                  <p className="text-gray-700 text-sm">
                    {item.action}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Warning Levels */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <SpeakerWaveIcon className="w-12 h-12 text-ocean-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Official Warning Levels
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Government agencies issue these alerts through emergency broadcast systems
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {officialWarnings.map((warning, index) => (
              <div key={index} className="card">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`px-4 py-2 rounded-lg font-bold ${getLevelColor(warning.color)}`}>
                    {warning.level}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700">
                      {warning.description}
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">
                    Required Action:
                  </p>
                  <p className="text-gray-700">
                    {warning.action}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Sources */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <DevicePhoneMobileIcon className="w-12 h-12 text-ocean-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How to Receive Warnings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="card text-center">
              <MegaphoneIcon className="w-8 h-8 text-ocean-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Emergency Alerts
              </h3>
              <p className="text-gray-600 mb-4">
                Wireless Emergency Alerts (WEA) sent directly to your phone
              </p>
              <div className="text-sm text-gray-500">
                <p>• No app required</p>
                <p>• Works on all modern phones</p>
                <p>• Cannot be blocked</p>
              </div>
            </div>

            <div className="card text-center">
              <SpeakerWaveIcon className="w-8 h-8 text-ocean-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Emergency Radio
              </h3>
              <p className="text-gray-600 mb-4">
                NOAA Weather Radio and local emergency broadcasts
              </p>
              <div className="text-sm text-gray-500">
                <p>• Works during power outages</p>
                <p>• 24/7 monitoring</p>
                <p>• Battery or hand-crank powered</p>
              </div>
            </div>

            <div className="card text-center">
              <DevicePhoneMobileIcon className="w-8 h-8 text-ocean-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Warning Apps
              </h3>
              <p className="text-gray-600 mb-4">
                Official emergency management apps for your area
              </p>
              <div className="text-sm text-gray-500">
                <p>• Real-time updates</p>
                <p>• Location-specific alerts</p>
                <p>• Offline emergency info</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-main text-center">
          <h2 className="text-2xl font-bold mb-6">
            Next Steps in Your Preparation
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/emergency-guide" className="btn-emergency">
              Emergency Escape Guide
            </Link>
            <Link to="/emergency-preparation" className="btn-primary">
              Build Emergency Kit
            </Link>
            <Link to="/" className="btn-secondary bg-white text-gray-900 hover:bg-gray-100">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WarningSystem
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  ClockIcon, 
  MapIcon, 
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  HomeIcon
} from '@heroicons/react/24/outline'
import { useEmergencyMode } from '../context/AppContext'

const EmergencyGuide = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [timeRemaining, setTimeRemaining] = useState(180) // 3 minutes in seconds
  const { isEmergencyMode, enableEmergencyMode } = useEmergencyMode()

  useEffect(() => {
    if (isEmergencyMode && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => prev - 1)
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [isEmergencyMode, timeRemaining])

  const quickEscapeSteps = [
    {
      stepNumber: 1,
      title: "DROP Everything",
      description: "Immediately drop what you're doing. Do not waste time gathering belongings.",
      timeEstimate: 5,
      warning: "Every second counts - material possessions can be replaced, your life cannot.",
      tips: ["Leave bags, phones, and valuables behind", "Help others around you if safe to do so"]
    },
    {
      stepNumber: 2,
      title: "MOVE to Higher Ground",
      description: "Head to the highest ground possible, at least 100 feet above sea level or 2 miles inland.",
      timeEstimate: 120,
      warning: "Do not stop until you reach safe elevation - tsunamis can travel far inland.",
      tips: ["Use stairs, not elevators", "Follow evacuation route signs", "Stay away from rivers and streams"]
    },
    {
      stepNumber: 3,
      title: "STAY There",
      description: "Remain at high ground until official all-clear is given. Tsunamis come in multiple waves.",
      timeEstimate: 55,
      warning: "The first wave is often not the largest - subsequent waves can be more dangerous.",
      tips: ["Listen to emergency radio", "Help others who arrive", "Do not return to low areas"]
    }
  ]

  const detailedScenarios = [
    {
      title: "If You're at the Beach",
      steps: [
        "Feel earthquake or see ocean receding? Run immediately to higher ground",
        "Do not wait for official warnings",
        "Head directly inland and uphill",
        "Warn others as you evacuate"
      ]
    },
    {
      title: "If You're in a Building",
      steps: [
        "Use stairs, never elevators",
        "Exit the building immediately",
        "Head to designated evacuation areas",
        "Follow building evacuation procedures"
      ]
    },
    {
      title: "If You're in a Vehicle",
      steps: [
        "Drive to higher ground if possible",
        "Abandon vehicle if traffic is stopped",
        "Continue on foot to safety",
        "Do not drive through flooded areas"
      ]
    },
    {
      title: "If You're Trapped",
      steps: [
        "Get to the highest floor possible",
        "Signal for help (whistle, bright clothing)",
        "Stay calm and conserve energy",
        "Wait for rescue - do not enter flood water"
      ]
    }
  ]

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className={`min-h-screen ${isEmergencyMode ? 'bg-emergency-50' : 'bg-gray-50'}`}>
      {/* Emergency Timer */}
      {isEmergencyMode && (
        <div className="bg-emergency-600 text-white py-4 sticky top-16 z-30">
          <div className="container-main">
            <div className="flex items-center justify-center space-x-4">
              <ClockIcon className="w-6 h-6" />
              <span className="text-xl font-bold">
                Emergency Mode: {formatTime(timeRemaining)}
              </span>
              {timeRemaining <= 0 && (
                <span className="text-emergency-200">(Continue to safety)</span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Emergency Escape Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these life-saving steps immediately when a tsunami threat is detected
            </p>
            
            {!isEmergencyMode && (
              <button
                onClick={enableEmergencyMode}
                className="mt-6 btn-emergency"
              >
                <ExclamationTriangleIcon className="w-6 h-6" />
                <span>ACTIVATE EMERGENCY MODE</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 3-Minute Quick Guide */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            3-Minute Escape Protocol
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {quickEscapeSteps.map((step, index) => (
                <div
                  key={step.stepNumber}
                  className={`card ${
                    isEmergencyMode && currentStep === index
                      ? 'border-emergency-500 bg-emergency-50'
                      : ''
                  }`}
                >
                  <div className="text-center mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${
                      isEmergencyMode && currentStep >= index
                        ? 'bg-emergency-500 text-white'
                        : 'bg-ocean-100 text-ocean-600'
                    }`}>
                      {isEmergencyMode && currentStep > index ? (
                        <CheckCircleIcon className="w-6 h-6" />
                      ) : (
                        <span className="font-bold">{step.stepNumber}</span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <div className="text-sm text-gray-500 mb-3">
                      ~{step.timeEstimate} seconds
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">
                    {step.description}
                  </p>
                  
                  {step.warning && (
                    <div className="bg-emergency-50 border border-emergency-200 rounded-lg p-3 mb-4">
                      <p className="text-emergency-700 text-sm font-medium">
                        ⚠️ {step.warning}
                      </p>
                    </div>
                  )}
                  
                  <ul className="text-sm text-gray-600 space-y-1">
                    {step.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start space-x-2">
                        <span className="text-ocean-500 mt-1">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {isEmergencyMode && currentStep === index && (
                    <button
                      onClick={() => setCurrentStep(prev => Math.min(prev + 1, quickEscapeSteps.length - 1))}
                      className="mt-4 w-full btn-primary flex items-center justify-center space-x-2"
                    >
                      <span>Step Complete</span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Scenarios */}
      <section className="section-padding">
        <div className="container-main">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Situation-Specific Instructions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {detailedScenarios.map((scenario, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {scenario.title}
                </h3>
                <ol className="space-y-3">
                  {scenario.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-ocean-100 text-ocean-600 rounded-full flex items-center justify-center text-sm font-medium">
                        {stepIndex + 1}
                      </span>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Route Planning */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Plan Your Escape Route
            </h2>
            <p className="text-gray-600 mb-8">
              Knowing your evacuation routes in advance can save precious time during an emergency
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card text-left">
                <MapIcon className="w-8 h-8 text-ocean-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Identify High Ground
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Find areas 100+ feet above sea level</li>
                  <li>• Locate sturdy buildings with multiple floors</li>
                  <li>• Know multiple routes to safety</li>
                  <li>• Practice the route with your family</li>
                </ul>
              </div>
              
              <div className="card text-left">
                <HomeIcon className="w-8 h-8 text-safe-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Prepare Meeting Points
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Choose a family meeting location</li>
                  <li>• Have backup meeting points</li>
                  <li>• Share plans with neighbors</li>
                  <li>• Keep emergency contact list</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-main text-center">
          <h2 className="text-2xl font-bold mb-6">
            Continue Your Emergency Preparation
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/warning-system" className="btn-primary">
              Learn Warning Signs
            </Link>
            <Link to="/emergency-preparation" className="btn-secondary bg-white text-gray-900 hover:bg-gray-100">
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

export default EmergencyGuide
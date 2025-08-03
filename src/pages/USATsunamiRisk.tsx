// import React from 'react' // Not needed with new JSX transform
import { Link } from 'react-router-dom'
import { 
  ExclamationTriangleIcon,
  MapPinIcon,
  ShieldCheckIcon,
  ClockIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'
import SimpleProductRecommendation from '../components/common/SimpleProductRecommendation'

const USATsunamiRisk = () => {
  const stateRisks = [
    {
      state: "Alaska",
      riskLevel: 5,
      population: "300K coastal residents",
      keyThreat: "Ring of Fire seismic activity",
      lastEvent: "1964 Great Alaska Earthquake",
      preparationTips: ["Extreme cold weather gear", "Long-term isolation supplies", "Satellite communication"]
    },
    {
      state: "California", 
      riskLevel: 4,
      population: "27M coastal residents",
      keyThreat: "San Andreas Fault & distant Pacific sources",
      lastEvent: "2011 Japan Tsunami impact",
      preparationTips: ["Evacuation zone awareness", "72-hour emergency kit", "Official warning apps"]
    },
    {
      state: "Hawaii",
      riskLevel: 4,
      population: "1.4M residents + millions of tourists",
      keyThreat: "Pacific-wide tsunami reception",
      lastEvent: "1946 & 1960 Pacific tsunamis",
      preparationTips: ["Hotel evacuation procedures", "Beach warning recognition", "Tourist emergency contacts"]
    },
    {
      state: "Oregon",
      riskLevel: 4,
      population: "800K coastal residents", 
      keyThreat: "Cascadia Subduction Zone",
      lastEvent: "1700 Cascadia Earthquake",
      preparationTips: ["Community networks", "Long-term survival prep", "Neighborhood emergency plans"]
    },
    {
      state: "Washington",
      riskLevel: 4,
      population: "700K coastal residents",
      keyThreat: "Cascadia Subduction Zone",
      lastEvent: "1700 Cascadia Earthquake", 
      preparationTips: ["Urban evacuation routes", "High-rise building safety", "Regional coordination"]
    }
  ]

  const getRiskColor = (level: number) => {
    switch (level) {
      case 5: return 'bg-emergency-500 text-white'
      case 4: return 'bg-orange-500 text-white'
      case 3: return 'bg-yellow-500 text-white'
      case 2: return 'bg-blue-500 text-white'
      default: return 'bg-gray-500 text-white'
    }
  }

  const getRiskText = (level: number) => {
    switch (level) {
      case 5: return 'Extreme Risk'
      case 4: return 'High Risk'
      case 3: return 'Moderate Risk'
      case 2: return 'Low Risk'
      default: return 'Minimal Risk'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-4xl">🇺🇸</span>
              <ExclamationTriangleIcon className="w-8 h-8 text-emergency-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              USA Tsunami Risk: Complete State-by-State Guide
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              75% of America's tsunami threats come from the Pacific Ocean, affecting over 87 million coastal residents. 
              Understanding your state's specific risk level could save your family's life.
            </p>
            <div className="bg-emergency-50 border border-emergency-200 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <ClockIcon className="w-6 h-6 text-emergency-600" />
                <span className="font-bold text-emergency-800">Critical Information</span>
              </div>
              <p className="text-emergency-700">
                <strong>150+ coastal communities</strong> across America face tsunami risk. 
                NOAA monitors global tsunami activity 24/7, issuing an average of 2-3 warnings annually.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding America's Tsunami Threat */}
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Understanding America's Tsunami Threat
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="card text-center">
                <div className="w-16 h-16 bg-emergency-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌊</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Pacific Ocean Threats</h3>
                <p className="text-gray-600 text-sm">
                  Alaska, California, Oregon, Washington, and Hawaii face the highest risk from Pacific Ring of Fire activity.
                </p>
              </div>
              
              <div className="card text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌊</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Atlantic Ocean Risk</h3>
                <p className="text-gray-600 text-sm">
                  East Coast faces lower but significant risk from underwater landslides and distant sources.
                </p>
              </div>
              
              <div className="card text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Warning Systems</h3>
                <p className="text-gray-600 text-sm">
                  NOAA's Pacific Tsunami Warning Center provides 24/7 monitoring and rapid alert systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Risk States Analysis */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              High-Risk States: Detailed Analysis
            </h2>
            
            <div className="space-y-8">
              {stateRisks.map((state, index) => (
                <div key={index} className="card">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <MapPinIcon className="w-8 h-8 text-ocean-500" />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{state.state}</h3>
                        <p className="text-gray-600">{state.population}</p>
                      </div>
                    </div>
                    <div className={`px-4 py-2 rounded-full text-sm font-bold ${getRiskColor(state.riskLevel)}`}>
                      {getRiskText(state.riskLevel)}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Primary Threat</h4>
                      <p className="text-gray-700 mb-4">{state.keyThreat}</p>
                      <p className="text-sm text-gray-600">
                        <strong>Last Major Event:</strong> {state.lastEvent}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Preparation Steps</h4>
                      <ul className="space-y-2">
                        {state.preparationTips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start space-x-2">
                            <ShieldCheckIcon className="w-4 h-4 text-safe-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Recommendation */}
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <SimpleProductRecommendation
              title="Ready America 72-Hour Family Emergency Kit"
              description="NOAA-certified emergency kit designed specifically for American families. Includes water, food, first aid, flashlight, radio, and essential supplies for 4 people."
              price="$89.99"
              reason="This kit meets all federal emergency preparedness standards and is specifically designed for American households. It includes NOAA Weather Radio compatibility and supplies that work in all US climate zones."
              buttonText="View on Amazon"
              affiliateUrl="#"
            />
          </div>
        </div>
      </section>

      {/* How America's Warning System Works */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              How America's Tsunami Warning System Works
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">NOAA Pacific Tsunami Warning Center</h3>
                <ul className="text-sm text-gray-600 space-y-1 text-left">
                  <li>• 24/7 global seismic monitoring</li>
                  <li>• Earthquake to warning: 5-15 minutes</li>
                  <li>• Covers entire Pacific Basin</li>
                  <li>• Coordinates with international centers</li>
                </ul>
              </div>
              
              <div className="card text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PhoneIcon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">State & Local Systems</h3>
                <ul className="text-sm text-gray-600 space-y-1 text-left">
                  <li>• Wireless Emergency Alerts (WEA)</li>
                  <li>• Coastal siren systems</li>
                  <li>• Emergency broadcast systems</li>
                  <li>• Social media notifications</li>
                </ul>
              </div>
              
              <div className="card text-center">
                <div className="w-16 h-16 bg-safe-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Alert Tools</h3>
                <ul className="text-sm text-gray-600 space-y-1 text-left">
                  <li>• FEMA mobile app</li>
                  <li>• NOAA Weather Radio</li>
                  <li>• State emergency apps</li>
                  <li>• Community alert systems</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Understanding Warning Levels</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-2">WATCH</div>
                  <p className="text-xs text-blue-800">Tsunami possible based on earthquake data</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-2">ADVISORY</div>
                  <p className="text-xs text-blue-800">Tsunami waves expected, stay away from water</p>
                </div>
                <div className="text-center">
                  <div className="bg-emergency-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-2">WARNING</div>
                  <p className="text-xs text-blue-800">Dangerous tsunami waves imminent, evacuate now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Emergency Preparedness */}
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Family Emergency Preparedness for Americans
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Essential Emergency Kit Items</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emergency-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900">Water:</strong>
                      <span className="text-gray-600"> 1 gallon per person per day, minimum 3 days</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emergency-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900">Food:</strong>
                      <span className="text-gray-600"> 3-day supply of non-perishable food</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emergency-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900">First Aid Kit:</strong>
                      <span className="text-gray-600"> American Red Cross certified</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emergency-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900">NOAA Weather Radio:</strong>
                      <span className="text-gray-600"> Battery or hand-crank powered</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emergency-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900">Important Documents:</strong>
                      <span className="text-gray-600"> Waterproof copies of ID, insurance, bank info</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emergency-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-gray-900">Cash:</strong>
                      <span className="text-gray-600"> Small bills, ATMs may not work</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Family Communication Plan</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Out-of-State Contact</h4>
                    <p className="text-gray-600 text-sm">
                      Choose someone outside your state as a central contact point. 
                      Long-distance calls often work when local calls don't.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Meeting Places</h4>
                    <p className="text-gray-600 text-sm">
                      Identify two meeting places: one near your home and one outside your neighborhood.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Important Phone Numbers</h4>
                    <p className="text-gray-600 text-sm">
                      Keep a written list of emergency contacts. Don't rely only on your phone's memory.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Social Media Plan</h4>
                    <p className="text-gray-600 text-sm">
                      Agree on how to use Facebook, Twitter, or other platforms to communicate during emergencies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* State Resources */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              State-Specific Resources and Emergency Contacts
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🌴 California</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Cal OES (California Office of Emergency Services)</li>
                  <li>• MyShake Earthquake Early Warning App</li>
                  <li>• Tsunami evacuation maps available online</li>
                  <li>• Local emergency management contacts</li>
                </ul>
              </div>
              
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🏔️ Alaska</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Alaska Division of Homeland Security</li>
                  <li>• Extreme weather survival resources</li>
                  <li>• Remote area communication plans</li>
                  <li>• Community emergency response teams</li>
                </ul>
              </div>
              
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🌺 Hawaii</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Hawaii Emergency Management Agency</li>
                  <li>• Tourist emergency assistance programs</li>
                  <li>• Inter-island evacuation procedures</li>
                  <li>• Hotel and resort safety protocols</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-emergency-900 text-white">
        <div className="container-main text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Take Action Today - Your Family's Safety Depends on It
            </h2>
            <p className="text-xl text-emergency-200 mb-8">
              You now know more about tsunami risks than 99% of Americans. 
              Don't let this knowledge go to waste - take these immediate steps to protect your family.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-emergency-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Immediate Actions (Today)</h3>
                <ul className="text-left text-emergency-200 space-y-2 text-sm">
                  <li>✓ Determine your home's tsunami risk level</li>
                  <li>✓ Download official warning apps</li>
                  <li>✓ Locate nearest high ground or evacuation route</li>
                  <li>✓ Discuss this information with your family</li>
                </ul>
              </div>
              
              <div className="bg-emergency-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">This Week</h3>
                <ul className="text-left text-emergency-200 space-y-2 text-sm">
                  <li>✓ Assemble your 72-hour emergency kit</li>
                  <li>✓ Create your family communication plan</li>
                  <li>✓ Practice your evacuation route</li>
                  <li>✓ Share this guide with neighbors</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/emergency-preparation" className="btn-primary bg-white text-emergency-900 hover:bg-gray-100">
                Build Your Emergency Kit
              </Link>
              <Link to="/emergency-guide" className="btn-secondary border-white text-white hover:bg-white hover:text-emergency-900">
                Learn 3-Minute Escape Plan
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default USATsunamiRisk
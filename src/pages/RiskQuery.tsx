import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapIcon, GlobeAltIcon, BuildingOfficeIcon, HomeIcon } from '@heroicons/react/24/outline'

const RiskQuery: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('global')

  const globalRiskAreas = [
    {
      name: "Pacific Ring of Fire",
      countries: ["Japan", "Indonesia", "Philippines", "Chile", "Alaska", "Mexico (West Coast)"],
      riskLevel: 5,
      description: "Highest tsunami risk due to frequent seismic activity and tectonic plate boundaries",
      lastMajorEvent: "2011 Tōhoku, Japan",
      searchVolume: "High in Indonesia, Mexico, USA"
    },
    {
      name: "Indian Ocean Basin",
      countries: ["India", "Indonesia", "Sri Lanka", "Thailand", "Maldives", "Australia"],
      riskLevel: 4,
      description: "High risk demonstrated by 2004 Indian Ocean tsunami, affecting millions",
      lastMajorEvent: "2004 Indian Ocean Tsunami",
      searchVolume: "Very High in India, Indonesia"
    },
    {
      name: "Mediterranean Sea",
      countries: ["Greece", "Turkey", "Italy", "Spain", "France", "Algeria"],
      riskLevel: 3,
      description: "Moderate risk from seismic activity, underwater landslides, and volcanic activity",
      lastMajorEvent: "1956 Amorgos, Greece",
      searchVolume: "High in France, Italy"
    },
    {
      name: "Atlantic Ocean",
      countries: ["Portugal", "Morocco", "Brazil", "Caribbean Islands", "USA East Coast"],
      riskLevel: 2,
      description: "Lower but significant risk, especially from distant sources and underwater landslides",
      lastMajorEvent: "1755 Lisbon, Portugal",
      searchVolume: "High in Brazil, Mexico"
    },
    {
      name: "Caribbean Sea",
      countries: ["Puerto Rico", "Dominican Republic", "Jamaica", "Haiti", "Cuba"],
      riskLevel: 3,
      description: "Moderate risk from local seismic activity and underwater landslides",
      lastMajorEvent: "1946 Dominican Republic",
      searchVolume: "Growing awareness"
    }
  ]

  const chinaCoastalRisks = [
    {
      city: "Qingdao",
      province: "Shandong",
      riskLevel: 2,
      population: "10.1M",
      description: "Moderate risk from distant Pacific sources"
    },
    {
      city: "Shanghai",
      province: "Shanghai",
      riskLevel: 2,
      population: "24.9M", 
      description: "Low to moderate risk, well-developed warning systems"
    },
    {
      city: "Xiamen",
      province: "Fujian",
      riskLevel: 3,
      population: "5.2M",
      description: "Higher risk due to proximity to Taiwan Strait seismic zone"
    },
    {
      city: "Shenzhen",
      province: "Guangdong", 
      riskLevel: 2,
      population: "17.6M",
      description: "Moderate risk from South China Sea sources"
    },
    {
      city: "Haikou",
      province: "Hainan",
      riskLevel: 3,
      population: "2.9M",
      description: "Island location increases vulnerability"
    }
  ]

  const countryRiskProfiles = [
    {
      country: "United States",
      flag: "🇺🇸",
      riskLevel: 4,
      population: "333M",
      coastalPop: "87M",
      searchVolume: "Very High",
      keyAreas: ["California", "Oregon", "Washington", "Alaska", "Hawaii"],
      lastEvent: "1964 Alaska Tsunami",
      tips: ["NOAA warning system", "Evacuation zone maps", "Emergency kits recommended"]
    },
    {
      country: "Indonesia",
      flag: "🇮🇩",
      riskLevel: 5,
      population: "275M",
      coastalPop: "150M",
      searchVolume: "Very High",
      keyAreas: ["Sumatra", "Java", "Sulawesi", "Bali"],
      lastEvent: "2018 Sulawesi Tsunami",
      tips: ["Local warning sirens", "High ground identification", "Community evacuation plans"]
    },
    {
      country: "India",
      flag: "🇮🇳",
      riskLevel: 4,
      population: "1.4B",
      coastalPop: "200M",
      searchVolume: "Very High",
      keyAreas: ["Tamil Nadu", "Andhra Pradesh", "Kerala", "West Bengal"],
      lastEvent: "2004 Indian Ocean Tsunami",
      tips: ["INCOIS warning system", "Coastal shelter identification", "Family communication plans"]
    },
    {
      country: "Mexico",
      flag: "🇲🇽",
      riskLevel: 4,
      population: "130M",
      coastalPop: "25M",
      searchVolume: "High",
      keyAreas: ["Pacific Coast", "Acapulco", "Puerto Vallarta", "Baja California"],
      lastEvent: "1995 Colima Tsunami",
      tips: ["SASMEX warning system", "Hotel evacuation procedures", "Tourist safety protocols"]
    },
    {
      country: "Brazil",
      flag: "🇧🇷",
      riskLevel: 2,
      population: "215M",
      coastalPop: "50M",
      searchVolume: "High",
      keyAreas: ["Rio de Janeiro", "São Paulo Coast", "Salvador", "Recife"],
      lastEvent: "1755 Lisbon Tsunami (distant)",
      tips: ["Atlantic tsunami awareness", "Coastal monitoring", "Emergency preparedness"]
    },
    {
      country: "France",
      flag: "🇫🇷",
      riskLevel: 3,
      population: "68M",
      coastalPop: "15M",
      searchVolume: "High",
      keyAreas: ["French Riviera", "Corsica", "Atlantic Coast"],
      lastEvent: "1979 Nice Airport Landslide Tsunami",
      tips: ["Mediterranean monitoring", "Coastal evacuation routes", "Tourist awareness"]
    }
  ]

  const getRiskColor = (level: number) => {
    switch (level) {
      case 5: return 'bg-emergency-500 text-white'
      case 4: return 'bg-orange-500 text-white'
      case 3: return 'bg-yellow-500 text-white'
      case 2: return 'bg-blue-500 text-white'
      case 1: return 'bg-safe-500 text-white'
      default: return 'bg-gray-500 text-white'
    }
  }

  const getRiskText = (level: number) => {
    switch (level) {
      case 5: return 'Very High'
      case 4: return 'High'
      case 3: return 'Moderate'
      case 2: return 'Low'
      case 1: return 'Very Low'
      default: return 'Unknown'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="section-padding bg-white">
        <div className="container-main text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Tsunami Risk Assessment
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understand tsunami risk levels for different regions and make informed decisions about travel and residence
          </p>
        </div>
      </section>

      {/* Region Selector */}
      <section className="section-padding">
        <div className="container-main">
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-sm border">
              <button
                onClick={() => setSelectedRegion('global')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  selectedRegion === 'global'
                    ? 'bg-ocean-500 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Global Overview
              </button>
              <button
                onClick={() => setSelectedRegion('china')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  selectedRegion === 'china'
                    ? 'bg-ocean-500 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                China Coastal Cities
              </button>
              <button
                onClick={() => setSelectedRegion('travel')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  selectedRegion === 'travel'
                    ? 'bg-ocean-500 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Country Profiles
              </button>
            </div>
          </div>

          {/* Global Risk Areas */}
          {selectedRegion === 'global' && (
            <div>
              <div className="text-center mb-8">
                <GlobeAltIcon className="w-12 h-12 text-ocean-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Global Tsunami Risk Zones
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {globalRiskAreas.map((area, index) => (
                  <div key={index} className="card">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {area.name}
                      </h3>
                      <div className={`px-3 py-1 rounded-full text-sm font-bold ${getRiskColor(area.riskLevel)}`}>
                        {getRiskText(area.riskLevel)}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {area.description}
                    </p>
                    <div className="space-y-2">
                      <div>
                        <span className="font-medium text-gray-900">Countries: </span>
                        <span className="text-gray-600">{area.countries.join(', ')}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">Last Major Event: </span>
                        <span className="text-gray-600">{area.lastMajorEvent}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* China Coastal Cities */}
          {selectedRegion === 'china' && (
            <div>
              <div className="text-center mb-8">
                <MapIcon className="w-12 h-12 text-ocean-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900">
                  China Coastal Cities Risk Assessment
                </h2>
              </div>
              <div className="max-w-6xl mx-auto space-y-4">
                {chinaCoastalRisks.map((city, index) => (
                  <div key={index} className="card">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {city.city}
                          </h3>
                          <span className="text-gray-500">
                            {city.province}
                          </span>
                          <div className={`px-3 py-1 rounded-full text-sm font-bold ${getRiskColor(city.riskLevel)}`}>
                            {getRiskText(city.riskLevel)}
                          </div>
                        </div>
                        <p className="text-gray-600 mb-2">
                          {city.description}
                        </p>
                        <div className="text-sm text-gray-500">
                          Population: {city.population}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Country Risk Profiles */}
          {selectedRegion === 'travel' && (
            <div>
              <div className="text-center mb-8">
                <GlobeAltIcon className="w-12 h-12 text-ocean-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Country Risk Profiles
                </h2>
                <p className="text-gray-600 mt-2">
                  Detailed tsunami risk assessment for countries with highest search interest
                </p>
              </div>
              <div className="space-y-6 max-w-6xl mx-auto">
                {countryRiskProfiles.map((country, index) => (
                  <div key={index} className="card">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl">{country.flag}</span>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            {country.country}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                            <span>Population: {country.population}</span>
                            <span>Coastal: {country.coastalPop}</span>
                            <span className="text-blue-600 font-medium">Search Volume: {country.searchVolume}</span>
                          </div>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-bold ${getRiskColor(country.riskLevel)}`}>
                        {getRiskText(country.riskLevel)}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">High-Risk Areas:</h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {country.keyAreas.map((area, areaIndex) => (
                            <span key={areaIndex} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                              {area}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm text-gray-600">
                          <strong>Last Major Event:</strong> {country.lastEvent}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Safety Recommendations:</h4>
                        <ul className="space-y-1">
                          {country.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="flex items-start space-x-2">
                              <span className="text-ocean-500 mt-1">•</span>
                              <span className="text-gray-600 text-sm">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Risk Level Legend */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Risk Level Guide
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[5, 4, 3, 2, 1].map((level) => (
                <div key={level} className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 ${getRiskColor(level)}`}>
                    <span className="text-xl font-bold">{level}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {getRiskText(level)}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {level === 5 && "Frequent tsunami activity, immediate evacuation plans essential"}
                    {level === 4 && "Regular tsunami threats, comprehensive preparation needed"}
                    {level === 3 && "Occasional tsunami risk, basic preparation recommended"}
                    {level === 2 && "Low tsunami probability, awareness and basic planning advised"}
                    {level === 1 && "Very rare tsunami events, minimal preparation needed"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Building Safety */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Building Tsunami Resistance
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Understanding how different structures perform during tsunamis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="card text-center">
              <div className="w-12 h-12 bg-safe-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BuildingOfficeIcon className="w-8 h-8 text-safe-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                High-Rise Buildings
              </h3>
              <p className="text-gray-600 text-sm">
                Buildings over 3 stories with reinforced concrete construction offer good protection above the 3rd floor.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <HomeIcon className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Single-Story Buildings
              </h3>
              <p className="text-gray-600 text-sm">
                Most vulnerable to tsunami damage. Evacuation to higher ground is essential.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="w-12 h-12 bg-ocean-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapIcon className="w-8 h-8 text-ocean-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Elevated Structures
              </h3>
              <p className="text-gray-600 text-sm">
                Buildings on stilts or elevated foundations may allow water to flow underneath, reducing damage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-main text-center">
          <h2 className="text-2xl font-bold mb-6">
            Learn More About Tsunami Safety
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/emergency-guide" className="btn-emergency">
              Emergency Escape Guide
            </Link>
            <Link to="/historical-cases" className="btn-primary">
              Historical Cases
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

export default RiskQuery
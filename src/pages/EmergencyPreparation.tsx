import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  ShieldCheckIcon,
  CheckCircleIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  HeartIcon,
  HomeIcon,
  BoltIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline'
import SimpleProductRecommendation from '../components/common/SimpleProductRecommendation'

const EmergencyPreparation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'now' | 'today' | 'week'>('now')
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set())

  const toggleItem = (itemId: string) => {
    const newChecked = new Set(checkedItems)
    if (newChecked.has(itemId)) {
      newChecked.delete(itemId)
    } else {
      newChecked.add(itemId)
    }
    setCheckedItems(newChecked)
  }

  // 重新设计：按紧急程度和时间分类
  const preparationLevels = {
    now: {
      title: "Right Now (5 minutes)",
      subtitle: "Grab these if you need to leave immediately",
      color: "emergency",
      items: [
        { id: "phone", name: "Phone + charger", reason: "Call for help & get alerts", cost: "Free" },
        { id: "water-bottle", name: "Water bottle (any you have)", reason: "Dehydration kills faster than hunger", cost: "Free" },
        { id: "flashlight-phone", name: "Phone flashlight or any flashlight", reason: "See in the dark", cost: "Free" },
        { id: "keys-wallet", name: "Keys + wallet/ID", reason: "Get back home & prove identity", cost: "Free" },
        { id: "medications", name: "Daily medications", reason: "Life-threatening without them", cost: "Free" }
      ]
    },
    today: {
      title: "Today (1 hour)",
      subtitle: "Buy these essentials from any store",
      color: "orange",
      items: [
        { id: "water-gallon", name: "1 gallon water per person", reason: "3-day minimum survival", cost: "$3" },
        { id: "canned-food", name: "Canned food (no cooking needed)", reason: "Energy to survive", cost: "$10" },
        { id: "battery-radio", name: "Battery radio", reason: "Get emergency updates", cost: "$15" },
        { id: "first-aid", name: "Basic first aid kit", reason: "Treat injuries", cost: "$20" },
        { id: "cash", name: "$100 cash in small bills", reason: "ATMs may not work", cost: "$100" }
      ]
    },
    week: {
      title: "This Week (when you have time)",
      subtitle: "Complete your family's safety plan",
      color: "blue",
      items: [
        { id: "family-plan", name: "Family meeting point plan", reason: "Find each other after disaster", cost: "Free" },
        { id: "document-copies", name: "Copy important documents", reason: "Prove identity & insurance", cost: "$5" },
        { id: "emergency-contacts", name: "Emergency contact list", reason: "Get help from family/friends", cost: "Free" },
        { id: "escape-routes", name: "Practice escape routes", reason: "Muscle memory saves time", cost: "Free" },
        { id: "neighbor-plan", name: "Talk to neighbors", reason: "Community support", cost: "Free" }
      ]
    }
  }

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'emergency':
        return {
          bg: 'bg-emergency-500',
          text: 'text-emergency-600',
          border: 'border-emergency-200',
          bgLight: 'bg-emergency-50'
        }
      case 'orange':
        return {
          bg: 'bg-orange-500',
          text: 'text-orange-600', 
          border: 'border-orange-200',
          bgLight: 'bg-orange-50'
        }
      case 'blue':
        return {
          bg: 'bg-blue-500',
          text: 'text-blue-600',
          border: 'border-blue-200', 
          bgLight: 'bg-blue-50'
        }
      default:
        return {
          bg: 'bg-gray-500',
          text: 'text-gray-600',
          border: 'border-gray-200',
          bgLight: 'bg-gray-50'
        }
    }
  }

  const currentLevel = preparationLevels[activeTab]
  const colors = getColorClasses(currentLevel.color)

  const getTotalCost = () => {
    const level = preparationLevels[activeTab]
    const costs = level.items.map(item => {
      const cost = item.cost.replace('$', '').replace('Free', '0')
      return parseInt(cost) || 0
    })
    return costs.reduce((sum, cost) => sum + cost, 0)
  }

  const getCompletionRate = () => {
    const level = preparationLevels[activeTab]
    const completed = level.items.filter(item => checkedItems.has(item.id)).length
    return Math.round((completed / level.items.length) * 100)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="section-padding bg-white">
        <div className="container-main text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Emergency Preparation Made Simple
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't overwhelm yourself. Start with what you can do right now, then build up over time.
          </p>
        </div>
      </section>

      {/* Time-Based Tabs */}
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex flex-col sm:flex-row bg-white rounded-2xl p-2 shadow-sm border mb-8">
              {Object.entries(preparationLevels).map(([key, level]) => {
                const tabColors = getColorClasses(level.color)
                const isActive = activeTab === key
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key as 'now' | 'today' | 'week')}
                    className={`flex-1 p-4 rounded-xl font-semibold transition-all duration-200 ${
                      isActive 
                        ? `${tabColors.bg} text-white shadow-lg transform scale-105` 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <div className="text-lg">{level.title}</div>
                    <div className={`text-sm ${isActive ? 'text-white opacity-90' : 'text-gray-500'}`}>
                      {level.subtitle}
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Progress & Cost Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-safe-600 mb-2">
                  {getCompletionRate()}%
                </div>
                <div className="text-gray-600">Completed</div>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {currentLevel.items.length}
                </div>
                <div className="text-gray-600">Items Total</div>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  ${getTotalCost()}
                </div>
                <div className="text-gray-600">Estimated Cost</div>
              </div>
            </div>

            {/* Current Level Items */}
            <div className={`${colors.bgLight} rounded-2xl p-6 border-2 ${colors.border}`}>
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center text-white`}>
                  {activeTab === 'now' && <BoltIcon className="w-6 h-6" />}
                  {activeTab === 'today' && <ClockIcon className="w-6 h-6" />}
                  {activeTab === 'week' && <ShieldCheckIcon className="w-6 h-6" />}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{currentLevel.title}</h2>
                  <p className="text-gray-600">{currentLevel.subtitle}</p>
                </div>
              </div>

              <div className="space-y-4">
                {currentLevel.items.map((item) => (
                  <div key={`${activeTab}-${item.id}`} className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-start space-x-4">
                      <button
                        onClick={() => toggleItem(item.id)}
                        className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                          checkedItems.has(item.id)
                            ? `${colors.bg} border-transparent text-white transform scale-110`
                            : `border-gray-300 hover:${colors.border} hover:scale-105`
                        }`}
                      >
                        {checkedItems.has(item.id) && (
                          <CheckCircleIcon className="w-5 h-5" />
                        )}
                      </button>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className={`text-lg font-semibold ${
                            checkedItems.has(item.id) ? 'line-through text-gray-500' : 'text-gray-900'
                          }`}>
                            {item.name}
                          </h3>
                          <div className="flex items-center space-x-2">
                            <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                              item.cost === 'Free' 
                                ? 'bg-safe-100 text-safe-700' 
                                : 'bg-blue-100 text-blue-700'
                            }`}>
                              {item.cost}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm">
                          <strong>Why:</strong> {item.reason}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="mt-8 text-center">
                {activeTab === 'now' && (
                  <div className="bg-emergency-100 border border-emergency-200 rounded-xl p-4 mb-4">
                    <ExclamationTriangleIcon className="w-6 h-6 text-emergency-600 mx-auto mb-2" />
                    <p className="text-emergency-800 font-semibold">
                      These items should always be ready to grab in 5 minutes
                    </p>
                  </div>
                )}
                
                <button className={`${colors.bg} text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:opacity-90 transition-opacity`}>
                  {activeTab === 'now' && 'Prepare Emergency Grab Bag'}
                  {activeTab === 'today' && 'Go Shopping for Essentials'}
                  {activeTab === 'week' && 'Complete Family Safety Plan'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Recommendation */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <SimpleProductRecommendation
              title="Complete Family Emergency Kit"
              description="72-hour survival kit for 4 people - includes water, food, first aid, flashlight, radio, and more"
              price="$89.99"
              reason="Instead of buying items separately, this professionally assembled kit ensures proper ratios and compatibility. Saves time and money while guaranteeing you have everything needed."
              buttonText="View Complete Kit"
              affiliateUrl="#"
              className="mb-8"
            />
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Remember: Something is Better Than Nothing
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-safe-50 rounded-xl">
                <BoltIcon className="w-8 h-8 text-safe-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Start Small</h3>
                <p className="text-sm text-gray-600">
                  Even having just water and a flashlight puts you ahead of 80% of people
                </p>
              </div>
              
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <CurrencyDollarIcon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Budget Friendly</h3>
                <p className="text-sm text-gray-600">
                  You can start with just $20 and build up over time
                </p>
              </div>
              
              <div className="text-center p-6 bg-orange-50 rounded-xl">
                <HomeIcon className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Family First</h3>
                <p className="text-sm text-gray-600">
                  Focus on your family's specific needs, not generic lists
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-main text-center">
          <h2 className="text-2xl font-bold mb-4">
            You're Taking Action - That's What Matters
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Every item you prepare, every plan you make, every conversation you have with your family 
            makes you safer. You're already doing better than most people.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/emergency-guide" className="btn-emergency">
              Learn 3-Minute Escape Plan
            </Link>
            <Link to="/warning-system" className="btn-primary">
              Recognize Warning Signs
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

export default EmergencyPreparation
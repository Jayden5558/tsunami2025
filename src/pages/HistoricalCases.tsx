import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  BookOpenIcon, 
  CheckCircleIcon, 
  ExclamationTriangleIcon,
  AcademicCapIcon,
  CalendarIcon
} from '@heroicons/react/24/outline'

const HistoricalCases = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('major')

  const majorEvents = [
    {
      name: "2004 Indian Ocean Tsunami",
      year: 2004,
      location: "Indian Ocean",
      magnitude: 9.1,
      casualties: 230000,
      description: "The deadliest tsunami in recorded history, affecting 14 countries across the Indian Ocean.",
      lessonsLearned: [
        "Need for comprehensive early warning systems",
        "Importance of public education about natural warning signs",
        "Critical role of international cooperation in disaster response",
        "Value of traditional knowledge in coastal communities"
      ],
      keyFacts: [
        "Waves reached heights of up to 30 meters",
        "Traveled at speeds of 500-800 km/h in deep ocean",
        "Affected coastlines up to 2 km inland",
        "Led to establishment of Indian Ocean Tsunami Warning System"
      ]
    },
    {
      name: "2011 Tōhoku Tsunami",
      year: 2011,
      location: "Japan",
      magnitude: 9.1,
      casualties: 15899,
      description: "Triggered by the Great East Japan Earthquake, causing the Fukushima nuclear disaster.",
      lessonsLearned: [
        "Even advanced warning systems have limitations",
        "Importance of building codes and tsunami barriers",
        "Need for nuclear facility safety protocols",
        "Value of regular evacuation drills"
      ],
      keyFacts: [
        "Waves reached up to 40 meters in height",
        "Traveled up to 10 km inland",
        "Despite advanced warning systems, many areas were overwhelmed",
        "Led to global review of nuclear safety protocols"
      ]
    },
    {
      name: "1755 Lisbon Tsunami",
      year: 1755,
      location: "Portugal, Morocco, Spain",
      magnitude: 8.5,
      casualties: 60000,
      description: "One of the most destructive tsunamis in European history, reshaping understanding of natural disasters.",
      lessonsLearned: [
        "Tsunamis can affect Atlantic coastlines",
        "Importance of not returning to coast after earthquake",
        "Need for building regulations in coastal areas",
        "Value of scientific study of natural disasters"
      ],
      keyFacts: [
        "Waves reached 15 meters in height",
        "Affected coastlines from Portugal to North Africa",
        "Led to birth of modern seismology",
        "Influenced Enlightenment thinking about natural disasters"
      ]
    }
  ]

  const successStories = [
    {
      title: "Tilly Smith - The 10-Year-Old Hero",
      location: "Phuket, Thailand (2004)",
      description: "A British schoolgirl recognized the warning signs of the receding ocean and saved hundreds of lives on Maikhao Beach.",
      impact: "Her geography lesson knowledge helped evacuate the entire beach before the tsunami arrived.",
      lesson: "Education and awareness can turn anyone into a lifesaver."
    },
    {
      title: "Minami-Sanriku's Miracle",
      location: "Japan (2011)", 
      description: "Despite being directly hit by the tsunami, the town's early warning system and evacuation procedures saved thousands.",
      impact: "Quick thinking by emergency officials and well-practiced evacuation routes minimized casualties.",
      lesson: "Regular drills and clear evacuation procedures save lives."
    },
    {
      title: "Hilo's Learning Experience",
      location: "Hawaii, USA",
      description: "After devastating tsunamis in 1946 and 1960, Hilo developed comprehensive warning systems and evacuation procedures.",
      impact: "The city became a model for tsunami preparedness worldwide.",
      lesson: "Learning from past disasters creates resilient communities."
    }
  ]

  const scientificInsights = [
    {
      title: "Tsunami Wave Characteristics",
      insights: [
        "Tsunamis are not single waves but series of waves called a 'wave train'",
        "The first wave is often not the largest or most destructive",
        "Wave periods can be 10-60 minutes apart",
        "Waves can continue for hours after the first arrival"
      ]
    },
    {
      title: "Warning Sign Patterns",
      insights: [
        "Ground shaking lasting more than 20 seconds near coast indicates potential tsunami",
        "Ocean recession (drawback) is a reliable natural warning sign",
        "Unusual ocean sounds (roaring, hissing) often precede tsunami arrival",
        "Animals often exhibit unusual behavior before tsunamis"
      ]
    },
    {
      title: "Survival Factors",
      insights: [
        "Higher ground is always safer - even small elevation helps",
        "Sturdy buildings above 3rd floor can provide refuge",
        "Swimming or floating in tsunami water is extremely dangerous",
        "Debris in tsunami water causes most injuries and deaths"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="section-padding bg-white">
        <div className="container-main text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Historical Cases & Lessons
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from past tsunami events to better understand risks and improve preparedness
          </p>
        </div>
      </section>

      {/* Category Selector */}
      <section className="section-padding">
        <div className="container-main">
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-sm border">
              <button
                onClick={() => setSelectedCategory('major')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  selectedCategory === 'major'
                    ? 'bg-ocean-500 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Major Events
              </button>
              <button
                onClick={() => setSelectedCategory('success')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  selectedCategory === 'success'
                    ? 'bg-ocean-500 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Success Stories
              </button>
              <button
                onClick={() => setSelectedCategory('science')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  selectedCategory === 'science'
                    ? 'bg-ocean-500 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Scientific Insights
              </button>
            </div>
          </div>

          {/* Major Events */}
          {selectedCategory === 'major' && (
            <div>
              <div className="text-center mb-8">
                <ExclamationTriangleIcon className="w-12 h-12 text-emergency-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Major Tsunami Events
                </h2>
              </div>
              <div className="space-y-8 max-w-6xl mx-auto">
                {majorEvents.map((event, index) => (
                  <div key={index} className="card">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Event Overview */}
                      <div className="lg:col-span-2">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {event.name}
                            </h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <span className="flex items-center space-x-1">
                                <CalendarIcon className="w-4 h-4" />
                                <span>{event.year}</span>
                              </span>
                              <span>Magnitude: {event.magnitude}</span>
                              <span>Casualties: {event.casualties.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-6">
                          {event.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Key Facts</h4>
                            <ul className="space-y-2">
                              {event.keyFacts.map((fact, factIndex) => (
                                <li key={factIndex} className="flex items-start space-x-2">
                                  <span className="text-ocean-500 mt-1">•</span>
                                  <span className="text-gray-600 text-sm">{fact}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Lessons Learned</h4>
                            <ul className="space-y-2">
                              {event.lessonsLearned.map((lesson, lessonIndex) => (
                                <li key={lessonIndex} className="flex items-start space-x-2">
                                  <CheckCircleIcon className="w-4 h-4 text-safe-500 mt-1 flex-shrink-0" />
                                  <span className="text-gray-600 text-sm">{lesson}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      {/* Event Stats */}
                      <div className="bg-gray-50 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-4">Event Statistics</h4>
                        <div className="space-y-4">
                          <div>
                            <div className="text-sm text-gray-600">Location</div>
                            <div className="font-medium text-gray-900">{event.location}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Earthquake Magnitude</div>
                            <div className="font-medium text-gray-900">{event.magnitude}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Total Casualties</div>
                            <div className="font-medium text-emergency-600">{event.casualties.toLocaleString()}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Year</div>
                            <div className="font-medium text-gray-900">{event.year}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Success Stories */}
          {selectedCategory === 'success' && (
            <div>
              <div className="text-center mb-8">
                <CheckCircleIcon className="w-12 h-12 text-safe-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Success Stories & Heroes
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {successStories.map((story, index) => (
                  <div key={index} className="card">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {story.title}
                    </h3>
                    <div className="text-sm text-gray-600 mb-4">
                      {story.location}
                    </div>
                    <p className="text-gray-700 mb-4">
                      {story.description}
                    </p>
                    <div className="bg-safe-50 rounded-lg p-4 mb-4">
                      <h4 className="font-medium text-safe-800 mb-2">Impact</h4>
                      <p className="text-safe-700 text-sm">
                        {story.impact}
                      </p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-medium text-blue-800 mb-2">Key Lesson</h4>
                      <p className="text-blue-700 text-sm">
                        {story.lesson}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Scientific Insights */}
          {selectedCategory === 'science' && (
            <div>
              <div className="text-center mb-8">
                <AcademicCapIcon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Scientific Insights & Patterns
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {scientificInsights.map((category, index) => (
                  <div key={index} className="card">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {category.title}
                    </h3>
                    <ul className="space-y-3">
                      {category.insights.map((insight, insightIndex) => (
                        <li key={insightIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm leading-relaxed">
                            {insight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Universal Lessons from History
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles apply regardless of location or circumstances
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-emergency-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExclamationTriangleIcon className="w-8 h-8 text-emergency-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Act Immediately</h3>
              <p className="text-sm text-gray-600">
                When natural warning signs appear, don't wait for official confirmation
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AcademicCapIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Education Saves Lives</h3>
              <p className="text-sm text-gray-600">
                Knowledge of warning signs and proper response can save hundreds of lives
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-safe-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="w-8 h-8 text-safe-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Preparation Works</h3>
              <p className="text-sm text-gray-600">
                Communities with evacuation plans and regular drills have lower casualties
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpenIcon className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Learn from History</h3>
              <p className="text-sm text-gray-600">
                Past events provide valuable insights for future preparedness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-main text-center">
          <h2 className="text-2xl font-bold mb-6">
            Apply These Lessons to Your Safety
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

export default HistoricalCases
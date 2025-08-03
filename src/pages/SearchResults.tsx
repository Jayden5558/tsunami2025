import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { MagnifyingGlassIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const SearchResults = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const [results, setResults] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Mock search data - in a real app, this would come from a search service
  const searchableContent = [
    {
      id: 'emergency-escape',
      title: 'Emergency Escape Guide',
      content: '3-minute quick escape instructions and detailed survival steps',
      category: 'emergency',
      path: '/emergency-guide',
      priority: 'high'
    },
    {
      id: 'warning-signs',
      title: 'Natural Warning Signs',
      content: 'Recognize earthquake, ocean recession, and animal behavior warnings',
      category: 'warning',
      path: '/warning-system',
      priority: 'high'
    },
    {
      id: 'emergency-kit',
      title: 'Emergency Kit Checklist',
      content: 'Water, food, first aid, flashlight, radio, and essential supplies',
      category: 'preparation',
      path: '/emergency-preparation',
      priority: 'medium'
    },
    {
      id: 'evacuation-routes',
      title: 'Evacuation Route Planning',
      content: 'Find high ground, plan multiple routes, practice with family',
      category: 'preparation',
      path: '/emergency-preparation',
      priority: 'high'
    },
    {
      id: 'tsunami-waves',
      title: 'Understanding Tsunami Waves',
      content: 'Wave characteristics, multiple waves, timing, and behavior patterns',
      category: 'education',
      path: '/historical-cases',
      priority: 'medium'
    },
    {
      id: 'risk-levels',
      title: 'Global Risk Assessment',
      content: 'Pacific Ring of Fire, Mediterranean, Atlantic, and Indian Ocean risks',
      category: 'risk',
      path: '/risk-query',
      priority: 'medium'
    },
    {
      id: '2004-tsunami',
      title: '2004 Indian Ocean Tsunami',
      content: 'Deadliest tsunami in history, 230,000 casualties, lessons learned',
      category: 'history',
      path: '/historical-cases',
      priority: 'low'
    },
    {
      id: '2011-japan',
      title: '2011 Japan Tsunami',
      content: 'Tōhoku earthquake and tsunami, Fukushima disaster, building codes',
      category: 'history',
      path: '/historical-cases',
      priority: 'low'
    }
  ]

  useEffect(() => {
    const performSearch = () => {
      setIsLoading(true)
      
      if (!query.trim()) {
        setResults([])
        setIsLoading(false)
        return
      }

      // Simple search algorithm - in production, use proper search service
      const searchTerms = query.toLowerCase().split(' ')
      const searchResults = searchableContent
        .map(item => {
          let score = 0
          // const searchableText = `${item.title} ${item.content}`.toLowerCase()
          
          searchTerms.forEach(term => {
            if (item.title.toLowerCase().includes(term)) score += 3
            if (item.content.toLowerCase().includes(term)) score += 1
            if (item.category.toLowerCase().includes(term)) score += 2
          })
          
          return { ...item, score }
        })
        .filter(item => item.score > 0)
        .sort((a, b) => {
          // Sort by priority first, then by score
          const priorityOrder = { high: 3, medium: 2, low: 1 }
          const priorityDiff = priorityOrder[b.priority as keyof typeof priorityOrder] - priorityOrder[a.priority as keyof typeof priorityOrder]
          if (priorityDiff !== 0) return priorityDiff
          return b.score - a.score
        })

      setTimeout(() => {
        setResults(searchResults)
        setIsLoading(false)
      }, 300) // Simulate search delay
    }

    performSearch()
  }, [query])

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'emergency': return 'bg-emergency-100 text-emergency-700'
      case 'warning': return 'bg-orange-100 text-orange-700'
      case 'preparation': return 'bg-safe-100 text-safe-700'
      case 'risk': return 'bg-blue-100 text-blue-700'
      case 'history': return 'bg-purple-100 text-purple-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getPriorityIcon = (priority: string) => {
    if (priority === 'high') {
      return <ExclamationTriangleIcon className="w-4 h-4 text-emergency-500" />
    }
    return null
  }

  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text
    
    const searchTerms = query.toLowerCase().split(' ')
    let highlightedText = text
    
    searchTerms.forEach(term => {
      const regex = new RegExp(`(${term})`, 'gi')
      highlightedText = highlightedText.replace(regex, '<mark class="bg-yellow-200 px-1 rounded">$1</mark>')
    })
    
    return highlightedText
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="section-padding bg-white border-b">
        <div className="container-main">
          <div className="flex items-center space-x-4 mb-6">
            <MagnifyingGlassIcon className="w-8 h-8 text-ocean-500" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Search Results
              </h1>
              {query && (
                <p className="text-gray-600 mt-1">
                  Searching for: <span className="font-medium">"{query}"</span>
                </p>
              )}
            </div>
          </div>

          {/* Search Stats */}
          {!isLoading && (
            <div className="text-sm text-gray-600">
              {results.length > 0 
                ? `Found ${results.length} result${results.length !== 1 ? 's' : ''}`
                : query ? 'No results found' : 'Enter a search term to get started'
              }
            </div>
          )}
        </div>
      </section>

      {/* Search Results */}
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            {isLoading ? (
              // Loading State
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="card">
                    <div className="animate-pulse">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
                      <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : results.length > 0 ? (
              // Results
              <div className="space-y-4">
                {results.map((result) => (
                  <Link
                    key={result.id}
                    to={result.path}
                    className="card hover:border-ocean-300 block group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <h3 
                          className="text-xl font-semibold text-gray-900 group-hover:text-ocean-600"
                          dangerouslySetInnerHTML={{ __html: highlightText(result.title, query) }}
                        />
                        {getPriorityIcon(result.priority)}
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(result.category)}`}>
                        {result.category}
                      </span>
                    </div>
                    <p 
                      className="text-gray-600 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: highlightText(result.content, query) }}
                    />
                    <div className="mt-3 text-sm text-ocean-600 group-hover:text-ocean-700">
                      View details →
                    </div>
                  </Link>
                ))}
              </div>
            ) : query ? (
              // No Results
              <div className="text-center py-12">
                <MagnifyingGlassIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No results found
                </h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any content matching "{query}". Try different keywords or browse our main sections.
                </p>
                
                {/* Suggested Searches */}
                <div className="max-w-md mx-auto">
                  <h4 className="font-medium text-gray-900 mb-3">Try searching for:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['emergency escape', 'warning signs', 'evacuation', 'tsunami waves', 'emergency kit'].map((suggestion) => (
                      <Link
                        key={suggestion}
                        to={`/search?q=${encodeURIComponent(suggestion)}`}
                        className="px-3 py-1 bg-ocean-100 text-ocean-700 rounded-full text-sm hover:bg-ocean-200 transition-colors"
                      >
                        {suggestion}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              // Empty State
              <div className="text-center py-12">
                <MagnifyingGlassIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Search Tsunami Safety Information
                </h3>
                <p className="text-gray-600 mb-6">
                  Find emergency guides, warning signs, preparation tips, and more.
                </p>
                
                {/* Popular Searches */}
                <div className="max-w-md mx-auto">
                  <h4 className="font-medium text-gray-900 mb-3">Popular searches:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['emergency escape', 'warning signs', 'evacuation routes', 'emergency kit', 'tsunami waves'].map((popular) => (
                      <Link
                        key={popular}
                        to={`/search?q=${encodeURIComponent(popular)}`}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                      >
                        {popular}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Access */}
      {!isLoading && (
        <section className="section-padding bg-white">
          <div className="container-main">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Quick Access to Safety Information
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              <Link to="/emergency-guide" className="card-navigation text-center">
                <ExclamationTriangleIcon className="w-8 h-8 text-emergency-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Emergency Guide</h3>
                <p className="text-sm text-gray-600">3-minute escape protocol</p>
              </Link>
              
              <Link to="/warning-system" className="card-navigation text-center">
                <MagnifyingGlassIcon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Warning Signs</h3>
                <p className="text-sm text-gray-600">Recognize natural alerts</p>
              </Link>
              
              <Link to="/emergency-preparation" className="card-navigation text-center">
                <div className="w-8 h-8 bg-safe-500 rounded mx-auto mb-3"></div>
                <h3 className="font-semibold text-gray-900 mb-2">Preparation</h3>
                <p className="text-sm text-gray-600">Build emergency kit</p>
              </Link>
              
              <Link to="/risk-query" className="card-navigation text-center">
                <div className="w-8 h-8 bg-blue-500 rounded mx-auto mb-3"></div>
                <h3 className="font-semibold text-gray-900 mb-2">Risk Assessment</h3>
                <p className="text-sm text-gray-600">Check your area's risk</p>
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default SearchResults
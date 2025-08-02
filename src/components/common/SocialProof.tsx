import React, { useState, useEffect } from 'react'
import { HeartIcon, UserGroupIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

interface RecentActivity {
  id: string
  location: string
  action: string
  timeAgo: string
}

const SocialProof: React.FC = () => {
  const [helpedCount, setHelpedCount] = useState(2847392)
  const [todayCount, setTodayCount] = useState(1247)
  const [recentActivities, setRecentActivities] = useState<RecentActivity[]>([])

  // Mock recent activities
  const mockActivities: RecentActivity[] = [
    { id: '1', location: 'Tokyo', action: 'completed emergency kit preparation', timeAgo: '2 minutes ago' },
    { id: '2', location: 'Los Angeles', action: 'learned 3-minute escape guide', timeAgo: '5 minutes ago' },
    { id: '3', location: 'Jakarta', action: 'created family evacuation plan', timeAgo: '8 minutes ago' },
    { id: '4', location: 'Vancouver', action: 'checked local tsunami risk', timeAgo: '12 minutes ago' },
    { id: '5', location: 'Lisbon', action: 'completed safety course', timeAgo: '15 minutes ago' },
    { id: '6', location: 'Sydney', action: 'shared safety guide with family', timeAgo: '18 minutes ago' }
  ]

  useEffect(() => {
    // Initialize with some activities
    setRecentActivities(mockActivities.slice(0, 3))

    // Simulate real-time updates
    const interval = setInterval(() => {
      // Update helped count
      setHelpedCount(prev => prev + Math.floor(Math.random() * 3) + 1)
      setTodayCount(prev => prev + Math.floor(Math.random() * 2) + 1)

      // Rotate recent activities
      setRecentActivities(prev => {
        const availableActivities = mockActivities.filter(
          activity => !prev.some(p => p.id === activity.id)
        )
        
        if (availableActivities.length > 0) {
          const newActivity = availableActivities[Math.floor(Math.random() * availableActivities.length)]
          return [newActivity, ...prev.slice(0, 2)]
        }
        
        return prev
      })
    }, 15000) // Update every 15 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gradient-to-r from-ocean-50 to-blue-50 py-8">
      <div className="container-main">
        <div className="max-w-4xl mx-auto">
          {/* Main Stats */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <HeartIcon className="w-8 h-8 text-pink-500" />
              <span className="text-3xl font-bold text-gray-900">
                {helpedCount.toLocaleString()}
              </span>
            </div>
            <p className="text-lg text-gray-700 mb-2">
              people have learned to protect themselves and their families
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <UserGroupIcon className="w-4 h-4" />
                <span>{todayCount} families safer today</span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center space-x-1">
                <CheckCircleIcon className="w-4 h-4 text-safe-500" />
                <span>Real-time updates</span>
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
              People around the world are getting safer right now:
            </h3>
            <div className="space-y-3">
              {recentActivities.map((activity, index) => (
                <div 
                  key={activity.id}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-500 ${
                    index === 0 ? 'bg-safe-50 border border-safe-200' : 'bg-gray-50'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${
                    index === 0 ? 'bg-safe-500 animate-pulse' : 'bg-gray-400'
                  }`}></div>
                  <div className="flex-1">
                    <span className="text-sm text-gray-700">
                      Someone from <span className="font-medium text-ocean-600">{activity.location}</span> just {activity.action}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">{activity.timeAgo}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Join thousands of people who are taking action to protect their families
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialProof
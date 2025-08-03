import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useAppContext } from '../../context/AppContext'
import BrandLogo from '../common/BrandLogo'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()
  const { appState } = useAppContext()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery('')
    }
  }

  const navigationItems = [
    { name: 'Emergency Guide', path: '/emergency-guide', emergency: true },
    { name: 'Warning System', path: '/warning-system' },
    { name: 'Preparation', path: '/emergency-preparation' },
    { name: 'Risk Query', path: '/risk-query' },
    { name: 'Historical Cases', path: '/historical-cases' }
  ]

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="container-main">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <BrandLogo size="medium" variant="color" showText={true} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  item.emergency
                    ? 'text-emergency-600 hover:text-emergency-700'
                    : 'text-gray-700 hover:text-ocean-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search emergency guides..."
                className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-ocean-500 focus:border-ocean-500"
              />
              <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </form>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="px-2">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search emergency guides..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-ocean-500 focus:border-ocean-500"
                  />
                  <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </form>

              {/* Mobile Navigation Links */}
              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-2 py-2 text-base font-medium rounded-lg transition-colors duration-200 ${
                      item.emergency
                        ? 'text-emergency-600 hover:bg-emergency-50'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* Offline Indicator */}
        {appState.isOffline && (
          <div className="bg-yellow-100 border-t border-yellow-200 px-4 py-2">
            <p className="text-sm text-yellow-800 text-center">
              You're currently offline. Some features may be limited.
            </p>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
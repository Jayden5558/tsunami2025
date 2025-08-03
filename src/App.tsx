import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AppState } from './types'
import { AppProvider } from './context/AppContext'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import EmergencyGuide from './pages/EmergencyGuide'
import WarningSystem from './pages/WarningSystem'
import EmergencyPreparation from './pages/EmergencyPreparation'
import RiskQuery from './pages/RiskQuery'
import HistoricalCases from './pages/HistoricalCases'
import SearchResults from './pages/SearchResults'
import About from './pages/About'
import PrivacyPolicy from './pages/PrivacyPolicy'
import USATsunamiRisk from './pages/USATsunamiRisk'
import NotFound from './pages/NotFound'
import OfflineIndicator from './components/common/OfflineIndicator'
import ErrorBoundary from './components/common/ErrorBoundary'

function App() {
  const [appState, setAppState] = useState<AppState>({
    isOffline: !navigator.onLine,
    userPreferences: {
      language: 'en',
      highContrast: false,
      fontSize: 'medium'
    },
    emergencyMode: false
  })

  useEffect(() => {
    const handleOnline = () => setAppState(prev => ({ ...prev, isOffline: false }))
    const handleOffline = () => setAppState(prev => ({ ...prev, isOffline: true }))

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return (
    <ErrorBoundary>
      <AppProvider value={{ appState, setAppState }}>
        <div className={`min-h-screen flex flex-col ${appState.emergencyMode ? 'emergency-mode' : ''}`}>
          {appState.isOffline && <OfflineIndicator />}
          
          <Header />
          
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/emergency-guide" element={<EmergencyGuide />} />
              <Route path="/warning-system" element={<WarningSystem />} />
              <Route path="/emergency-preparation" element={<EmergencyPreparation />} />
              <Route path="/risk-query" element={<RiskQuery />} />
              <Route path="/historical-cases" element={<HistoricalCases />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/usa-tsunami-risk" element={<USATsunamiRisk />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </AppProvider>
    </ErrorBoundary>
  )
}

export default App
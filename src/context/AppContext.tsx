import React, { createContext, useContext, ReactNode } from 'react'
import { AppState } from '../types'

interface AppContextType {
  appState: AppState
  setAppState: React.Dispatch<React.SetStateAction<AppState>>
}

const AppContext = createContext<AppContextType | undefined>(undefined)

interface AppProviderProps {
  children: ReactNode
  value: AppContextType
}

export const AppProvider: React.FC<AppProviderProps> = ({ children, value }) => {
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}

// Emergency mode utilities
export const useEmergencyMode = () => {
  const { appState, setAppState } = useAppContext()
  
  const enableEmergencyMode = () => {
    setAppState(prev => ({ ...prev, emergencyMode: true }))
  }
  
  const disableEmergencyMode = () => {
    setAppState(prev => ({ ...prev, emergencyMode: false }))
  }
  
  return {
    isEmergencyMode: appState.emergencyMode,
    enableEmergencyMode,
    disableEmergencyMode
  }
}
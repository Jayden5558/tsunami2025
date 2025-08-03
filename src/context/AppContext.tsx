import { createContext, useContext, ReactNode, Dispatch, SetStateAction } from 'react'
import { AppState } from '../types'

interface AppContextType {
  appState: AppState
  setAppState: Dispatch<SetStateAction<AppState>>
}

const AppContext = createContext<AppContextType | undefined>(undefined)

interface AppProviderProps {
  children: ReactNode
  value: AppContextType
}

export const AppProvider = ({ children, value }: AppProviderProps) => {
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
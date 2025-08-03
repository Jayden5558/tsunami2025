import { Component, ErrorInfo, ReactNode } from 'react'
import { ExclamationTriangleIcon, ArrowPathIcon } from '@heroicons/react/24/outline'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  errorType: 'network' | 'data' | 'unknown'
  errorMessage: string
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
      errorType: 'unknown',
      errorMessage: ''
    }
  }

  static getDerivedStateFromError(error: Error): State {
    // Determine error type based on error message
    let errorType: 'network' | 'data' | 'unknown' = 'unknown'
    
    if (error.message.includes('fetch') || error.message.includes('network')) {
      errorType = 'network'
    } else if (error.message.includes('JSON') || error.message.includes('parse')) {
      errorType = 'data'
    }

    return {
      hasError: true,
      errorType,
      errorMessage: error.message
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Emergency platform error:', error, errorInfo)
    
    // In a real app, you would send this to an error reporting service
    // For emergency applications, logging is crucial for reliability
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      errorType: 'unknown',
      errorMessage: ''
    })
    
    // Reload the page to reset the application state
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-emergency-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ExclamationTriangleIcon className="w-8 h-8 text-emergency-500" />
            </div>
            
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Something went wrong
            </h1>
            
            <p className="text-gray-600 mb-6">
              {this.state.errorType === 'network' && (
                "We're having trouble connecting to our servers. Please check your internet connection and try again."
              )}
              {this.state.errorType === 'data' && (
                "There was an issue loading the emergency information. We're working to fix this."
              )}
              {this.state.errorType === 'unknown' && (
                "An unexpected error occurred. Don't worry, we're here to help you stay safe."
              )}
            </p>
            
            <div className="space-y-4">
              <button
                onClick={this.handleRetry}
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <ArrowPathIcon className="w-5 h-5" />
                <span>Try Again</span>
              </button>
              
              <div className="text-sm text-gray-500">
                <p className="mb-2">In case of immediate emergency:</p>
                <div className="bg-emergency-50 border border-emergency-200 rounded-lg p-3">
                  <p className="font-semibold text-emergency-700">
                    Call Emergency Services: 911 (US) | 112 (EU) | 119 (Japan)
                  </p>
                </div>
              </div>
            </div>
            
            {import.meta.env.DEV && (
              <details className="mt-6 text-left">
                <summary className="text-sm text-gray-500 cursor-pointer">
                  Technical Details (Development)
                </summary>
                <pre className="mt-2 text-xs text-gray-400 bg-gray-100 p-2 rounded overflow-auto">
                  {this.state.errorMessage}
                </pre>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
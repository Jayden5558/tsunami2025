import { WifiIcon } from '@heroicons/react/24/outline'

const OfflineIndicator = () => {
  return (
    <div className="offline-indicator">
      <div className="container-main">
        <div className="flex items-center justify-center space-x-2">
          <WifiIcon className="w-4 h-4" />
          <span>You're offline - Emergency guides are still available</span>
        </div>
      </div>
    </div>
  )
}

export default OfflineIndicator
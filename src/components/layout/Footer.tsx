import React from 'react'
import { Link } from 'react-router-dom'
import BrandLogo from '../common/BrandLogo'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'Emergency Resources': [
      { name: 'Quick Escape Guide', path: '/emergency-guide' },
      { name: 'Warning Signs', path: '/warning-system' },
      { name: 'Emergency Kit', path: '/emergency-preparation' }
    ],
    'Information': [
      { name: 'Risk Assessment', path: '/risk-query' },
      { name: 'Historical Cases', path: '/historical-cases' },
      { name: 'Safety Tips', path: '/emergency-preparation' }
    ],
    'Support': [
      { name: 'About Us', path: '/about' },
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Contact Us', path: '/about#contact' }
    ]
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-main">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <div className="mb-4">
                <BrandLogo size="medium" variant="light" showText={true} />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Essential tsunami protection knowledge and emergency escape guides for coastal residents and travelers worldwide.
              </p>
              <div className="mt-4">
                <p className="text-xs text-gray-500">
                  In case of emergency, call your local emergency services immediately.
                </p>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Tsunami2025 Platform. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Emergency Hotline: 911 (US) | 112 (EU) | 119 (Japan)</span>
            </div>
          </div>
          
          <div className="mt-4 text-xs text-gray-500 text-center">
            <p>
              This platform provides educational information only. Always follow official emergency services guidance during actual emergencies.
              Information sources include NOAA, UNESCO-IOC, and national tsunami warning centers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
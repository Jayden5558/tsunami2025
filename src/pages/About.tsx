import React from 'react'
import { ShieldCheckIcon, HeartIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import BrandLogo from '../components/common/BrandLogo'

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="container-main text-center">
          <BrandLogo size="large" variant="color" showText={true} className="justify-center mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Tsunami2025
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to saving lives through accessible tsunami safety education and emergency preparedness guidance.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-emergency-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="w-8 h-8 text-emergency-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Life-Saving Education</h3>
                <p className="text-gray-600">
                  Providing clear, actionable tsunami safety information that can be understood and applied by anyone.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-safe-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeartIcon className="w-8 h-8 text-safe-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Focus</h3>
                <p className="text-gray-600">
                  Building resilient coastal communities through shared knowledge and practical preparedness strategies.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GlobeAltIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Impact</h3>
                <p className="text-gray-600">
                  Serving coastal residents and travelers worldwide with location-specific safety guidance and resources.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 mb-4">
                  Tsunami2025 was created with a simple but critical mission: to make tsunami safety knowledge 
                  accessible to everyone who needs it. In an era where natural disasters are becoming more frequent 
                  and coastal populations continue to grow, having reliable, easy-to-understand safety information 
                  is literally a matter of life and death.
                </p>
                
                <p className="text-gray-700 mb-4">
                  Our platform combines the latest scientific research with practical, real-world applications. 
                  We work closely with emergency management professionals, tsunami researchers, and coastal communities 
                  to ensure our content is both accurate and actionable.
                </p>
                
                <p className="text-gray-700 mb-6">
                  What sets us apart is our commitment to simplicity without sacrificing accuracy. We believe that 
                  in an emergency, complex information can be dangerous. That's why we focus on clear, step-by-step 
                  guidance that can be understood and remembered under stress.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Approach</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li><strong>Evidence-Based:</strong> All our recommendations are based on scientific research and real-world case studies</li>
                  <li><strong>Practical:</strong> We focus on actionable advice that can be implemented by individuals and families</li>
                  <li><strong>Accessible:</strong> Complex scientific concepts are translated into clear, understandable language</li>
                  <li><strong>Updated:</strong> Our content is regularly reviewed and updated to reflect the latest knowledge and best practices</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Content Standards</h3>
                <p className="text-gray-700 mb-4">
                  Every piece of content on Tsunami2025 is carefully researched and fact-checked. We source our 
                  information from reputable organizations including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-6">
                  <li>UNESCO Intergovernmental Oceanographic Commission (IOC)</li>
                  <li>National Oceanic and Atmospheric Administration (NOAA)</li>
                  <li>Pacific Tsunami Warning Center</li>
                  <li>International Association of Emergency Managers</li>
                  <li>Local emergency management agencies</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Transparency & Trust</h3>
                <p className="text-gray-700 mb-4">
                  We believe in complete transparency about our operations and funding. Tsunami2025 is supported 
                  through affiliate partnerships with emergency preparedness product manufacturers. When you purchase 
                  products through our recommendations, we may earn a small commission at no additional cost to you.
                </p>
                
                <p className="text-gray-700">
                  This funding model allows us to provide our educational content free of charge while maintaining 
                  our independence and commitment to recommending only products that meet our strict safety and 
                  quality standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-6">
              Have questions about tsunami safety? Want to suggest content improvements? 
              We'd love to hear from you.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                <strong>General Inquiries:</strong> info@tsunami2025.com<br />
                <strong>Content Questions:</strong> content@tsunami2025.com<br />
                <strong>Partnership Opportunities:</strong> partnerships@tsunami2025.com
              </p>
              
              <div className="mt-6 p-4 bg-emergency-50 border border-emergency-200 rounded-lg">
                <p className="text-emergency-800 font-semibold">
                  ⚠️ Emergency Disclaimer
                </p>
                <p className="text-emergency-700 text-sm mt-2">
                  This website provides educational information only. In case of an actual tsunami warning or emergency, 
                  always follow official evacuation orders and contact your local emergency services immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { PhoneIcon, ShieldCheckIcon, ClockIcon, StarIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import CallButton from './CallButton'

interface CallPopupProps {
  phoneNumber: string
}

export default function CallPopup({ phoneNumber }: CallPopupProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show immediately on component mount
    setIsVisible(true)
  }, [])

  // Trust signals and benefits
  const trustSignals = [
    { icon: ShieldCheckIcon, text: "Licensed & Insured Technicians", color: "green" },
    { icon: ClockIcon, text: "Available 24/7 for Emergency Service", color: "blue" },
    { icon: CheckCircleIcon, text: "Free Phone Consultation", color: "purple" },
    { icon: CheckCircleIcon, text: "No-Obligation Quotes", color: "indigo" }
  ]

  // Pest types we handle
  const pestTypes = [
    "Rodents", "Cockroaches", "Ants", "Termites", 
    "Bed Bugs", "Spiders", "Wasps", "Mosquitoes"
  ]

  // Google review stats
  const reviewStats = {
    rating: 4.9,
    totalReviews: 12480,
    recentReviews: 328
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-gradient-to-b from-gray-50 to-gray-100 overflow-y-auto"
    >
      <div className="min-h-screen flex flex-col">
        {/* Header with logo */}
        <header className="bg-white shadow-sm py-4 px-6">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-red-600 p-2 rounded-lg mr-3">
                <ShieldCheckIcon className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-800">BigShield Pest Control</h1>
            </div>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
              <span className="ml-1 text-sm font-medium text-gray-700">{reviewStats.rating}</span>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-grow flex flex-col items-center justify-center p-6">
          <div className="max-w-4xl w-full mx-auto">
            {/* Hero section */}
            <div className="text-center mb-10">
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              >
                Professional Pest Control Services
              </motion.h2>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              >
                Trusted by thousands of homeowners. Our licensed experts are available 24/7 to solve your pest problems quickly and effectively.
              </motion.p>
            </div>

            {/* Trust signals */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"
            >
              {trustSignals.map((signal, index) => {
                const Icon = signal.icon
                return (
                  <div key={index} className={`bg-white rounded-xl p-4 shadow-sm flex items-center`}>
                    <div className={`bg-${signal.color}-100 p-2 rounded-lg mr-3`}>
                      <Icon className={`h-5 w-5 text-${signal.color}-600`} />
                    </div>
                    <span className="text-gray-700 font-medium">{signal.text}</span>
                  </div>
                )
              })}
            </motion.div>

            {/* Google reviews section */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-sm mb-10"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img 
                    src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" 
                    alt="Google" 
                    className="h-6 mr-3"
                  />
                  <div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-1 text-lg font-semibold text-gray-900">{reviewStats.rating}</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {reviewStats.totalReviews.toLocaleString()} reviews • {reviewStats.recentReviews} new this week
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { name: "Sarah M.", text: "Incredible service! They came within an hour of my call and solved my ant problem completely.", date: "2 days ago" },
                  { name: "Michael T.", text: "Professional, thorough, and effective. The technician was knowledgeable and friendly.", date: "1 week ago" },
                  { name: "Jennifer L.", text: "Best pest control service I've ever used. They're now my go-to for all pest issues.", date: "2 weeks ago" }
                ].map((review, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-700 mb-2">"{review.text}"</p>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{review.name}</span>
                      <span className="text-xs text-gray-500">{review.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Pest types we handle */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-10"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">We Handle All Types of Pests</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {pestTypes.map((pest, index) => (
                  <span 
                    key={index} 
                    className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm"
                  >
                    {pest}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Call to action */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-4">Get Immediate Assistance</h3>
                <p className="text-red-100 mb-6">Our pest control experts are standing by to help you right now</p>
                <CallButton 
                  phoneNumber={phoneNumber}
                  variant="primary" 
                  className="!bg-white hover:!bg-gray-100 !text-red-600 !py-5 !px-8 !rounded-xl !shadow-lg font-bold text-xl w-full md:w-auto flex justify-center items-center gap-3"
                >
                  <PhoneIcon className="w-7 h-7 animate-pulse" />
                  <span>CALL NOW FOR FREE CONSULTATION</span>
                </CallButton>
                <p className="text-red-100 text-sm mt-4">Available 24/7 • No Obligation</p>
              </div>
            </motion.div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white py-6 px-6 border-t border-gray-200">
          <div className="max-w-4xl mx-auto text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} BigShield Pest Control. All rights reserved.</p>
            <p className="mt-1">Licensed, Bonded, and Insured • Serving All Areas</p>
          </div>
        </footer>
      </div>
    </motion.div>
  )
} 
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PhoneIcon, XMarkIcon, ShieldCheckIcon, ClockIcon } from '@heroicons/react/24/outline'
import CallButton from './CallButton'

interface CallPopupProps {
  phoneNumber: string
}

export default function CallPopup({ phoneNumber }: CallPopupProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasBeenShown, setHasBeenShown] = useState(false)

  useEffect(() => {
    // Show popup after a short delay (1.5 seconds)
    const timer = setTimeout(() => {
      if (!hasBeenShown) {
        setIsVisible(true)
        setHasBeenShown(true)
      }
    }, 1500)

    return () => clearTimeout(timer)
  }, [hasBeenShown])

  const closePopup = () => {
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
        >
          <motion.div 
            className="bg-white rounded-2xl shadow-xl max-w-md w-full overflow-hidden relative"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {/* Close button */}
            <button 
              onClick={closePopup}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 z-10"
              aria-label="Close popup"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            {/* Popup content */}
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <PhoneIcon className="h-8 w-8 text-red-600" />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
                Don't Wait! Get Help Now
              </h2>
              
              <p className="text-center text-gray-600 mb-4">
                Our pest experts are standing by to provide immediate assistance. 
                <span className="font-semibold text-red-600"> Call now for a free consultation!</span>
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center bg-green-50 p-3 rounded-lg">
                  <ShieldCheckIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                  <span className="text-sm text-green-800">Licensed technicians available now</span>
                </div>
                
                <div className="flex items-center bg-blue-50 p-3 rounded-lg">
                  <ClockIcon className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                  <span className="text-sm text-blue-800">Same-day service often available</span>
                </div>
              </div>

              <CallButton 
                phoneNumber={phoneNumber}
                variant="primary" 
                className="!bg-red-600 hover:!bg-red-700 !text-white !py-4 !rounded-xl !shadow-lg font-bold text-lg w-full flex justify-center items-center gap-2"
              >
                <PhoneIcon className="w-6 h-6 animate-pulse" />
                <span>CALL NOW FOR FREE QUOTE</span>
              </CallButton>
              
              <p className="text-center text-xs text-gray-500 mt-4">
                Limited time offer - 15% off first service
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 
'use client'

import { useState, useEffect } from 'react'
import { MapPinIcon } from '@heroicons/react/24/solid'

export default function DynamicLocation() {
  const [location, setLocation] = useState('Your Area')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch the location based on IP address
    async function fetchLocation() {
      try {
        setLoading(true)
        // Using a free IP geolocation API
        const response = await fetch('https://ipapi.co/json/')
        const data = await response.json()
        
        // If we successfully got the city, use it
        if (data && data.city) {
          setLocation(data.city)
        } else if (data && data.region) {
          // Fallback to region/state if city isn't available
          setLocation(data.region)
        }
      } catch (error) {
        console.error('Error fetching location:', error)
        // Keep the default "Your Area" on error
      } finally {
        setLoading(false)
      }
    }

    fetchLocation()
  }, [])

  if (loading) {
    return (
      <span className="inline-flex items-center text-inherit">
        <span className="w-2 h-2 bg-blue-500 rounded-full mr-1 animate-pulse"></span>
        Locating...
      </span>
    )
  }

  return (
    <span className="inline-flex items-center text-inherit">
      <MapPinIcon className="w-3 h-3 mr-1 text-red-500" />
      {location}
    </span>
  )
} 
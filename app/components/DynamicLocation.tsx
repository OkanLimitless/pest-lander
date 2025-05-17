'use client'

import { useState, useEffect } from 'react'

export default function DynamicLocation() {
  const [location, setLocation] = useState('Your Area')

  useEffect(() => {
    // Fetch the location based on IP address
    async function fetchLocation() {
      try {
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
      }
    }

    fetchLocation()
  }, [])

  return <span className="text-inherit">{location}</span>
} 
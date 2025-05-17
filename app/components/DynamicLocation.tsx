'use client'

import { useState, useEffect } from 'react'

export default function DynamicLocation() {
  const [location, setLocation] = useState('Your Area')

  useEffect(() => {
    // In a real implementation, this would use geolocation API or IP lookup
    // For demonstration, we'll simulate a location detection with popular cities
    const cities = [
      'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
      'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'Austin'
    ]
    
    // Get a "random" city based on the current hour to simulate geolocation
    // In production, replace this with actual geolocation service
    const hour = new Date().getHours()
    const cityIndex = hour % cities.length
    
    // Simulate a delay in "detecting" location
    const timer = setTimeout(() => {
      setLocation(cities[cityIndex])
    }, 500)
    
    return () => clearTimeout(timer)
  }, [])

  return <span className="text-inherit">{location}</span>
} 
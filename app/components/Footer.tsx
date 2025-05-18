'use client'

import React from 'react'
import { PhoneIcon } from '@heroicons/react/24/solid'

const PHONE_NUMBER = '+1 (866) 227-3302'

export default function Footer() {
  return (
    <footer className="bg-white px-4 py-5 mt-10 shadow-inner text-center text-sm text-gray-600">
      <p className="mb-2">© {new Date().getFullYear()} BigShield. All rights reserved.</p>
      <div className="flex justify-center items-center gap-3 mb-1">
        <a href="#privacy" className="text-xs hover:underline">Privacy Policy</a>
        <span>•</span>
        <a href="#terms" className="text-xs hover:underline">Terms of Service</a>
        <span>•</span>
        <a href="#contact" className="text-xs hover:underline">Contact</a>
      </div>
      <p className="text-xs">
        This is a marketing lead generation website. All calls are routed to licensed pest control providers.
      </p>
    </footer>
  )
} 
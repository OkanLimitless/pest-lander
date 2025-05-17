'use client'

import Image from 'next/image'
import CallButton from './CallButton'

const PHONE_NUMBER = '+1 (866) 227-3302'

const navigation = [
  { name: 'Services', href: '#services' },
  { name: 'Why Choose Us', href: '#features' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

export default function StickyTopBar() {
  return (
    <div className="w-full bg-gray-900 text-white text-sm py-2 px-4 flex items-center justify-between fixed top-0 left-0 z-[100] shadow-md">
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <span className="font-semibold mr-2">Need Help?</span>
        </div>
        <div className="hidden md:flex items-center gap-6 ml-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden sm:block h-8 w-32 relative">
          <Image 
            src="/images/bigshield-logo.png" 
            alt="BigShield.pro Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <CallButton phoneNumber={PHONE_NUMBER} variant="primary" className="!bg-red-600 hover:!bg-red-700 !text-white !px-4 !py-2 !rounded-full !shadow-lg font-bold text-base" />
      </div>
    </div>
  )
} 
'use client'

import CallButton from './CallButton'

const PHONE_NUMBER = '+1 (866) 227-3302'

export default function StickyTopBar() {
  return (
    <div className="w-full bg-gray-900 text-white text-sm py-2 px-4 flex items-center justify-between fixed top-0 left-0 z-[100] shadow-md">
      <div className="flex items-center gap-2">
        <span className="font-semibold">Need Help?</span>
      </div>
      <div className="flex items-center gap-2">
        <CallButton phoneNumber={PHONE_NUMBER} variant="primary" className="!bg-red-600 hover:!bg-red-700 !text-white !px-4 !py-2 !rounded-full !shadow-lg font-bold text-base" />
      </div>
    </div>
  )
} 
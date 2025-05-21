import React from 'react'
import CallPopup from './components/CallPopup'

const PHONE_NUMBER = '+1 (866) 227-3302'

export default function Home() {
  return (
    <main className="min-h-screen">
      <CallPopup phoneNumber={PHONE_NUMBER} />
    </main>
  )
} 
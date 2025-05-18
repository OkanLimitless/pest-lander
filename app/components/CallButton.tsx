'use client'

import { PhoneIcon } from '@heroicons/react/24/outline'
import React from 'react'

interface CallButtonProps {
  phoneNumber: string
  className?: string
  variant?: 'primary' | 'secondary'
  children?: React.ReactNode
}

const formatPhoneNumber = (phoneNumber: string) => {
  // Remove any non-digit characters
  const cleaned = phoneNumber.replace(/\D/g, '')
  // Format as (XXX) XXX-XXXX
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }
  return phoneNumber
}

export default function CallButton({
  phoneNumber,
  className = '',
  variant = 'primary',
  children
}: CallButtonProps) {
  const baseClasses = 'inline-flex items-center gap-2 text-lg'
  const variantClasses = variant === 'primary' 
    ? 'btn-primary' 
    : 'btn-secondary'

  return (
    <a
      href={`tel:${phoneNumber}`}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children || (
        <>
          <PhoneIcon className="w-6 h-6" />
          Call Now: {formatPhoneNumber(phoneNumber)}
        </>
      )}
    </a>
  )
} 
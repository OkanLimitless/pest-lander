'use client'

import { PhoneIcon } from '@heroicons/react/24/outline'

interface CallButtonProps {
  phoneNumber: string
  className?: string
  variant?: 'primary' | 'secondary'
}

export default function CallButton({
  phoneNumber,
  className = '',
  variant = 'primary'
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
      <PhoneIcon className="w-6 h-6" />
      Call Now: {phoneNumber}
    </a>
  )
} 
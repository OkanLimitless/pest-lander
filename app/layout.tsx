import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Professional Pest Control Services | Expert Pest Management',
  description: 'Get professional pest control services for your home or business. Expert technicians, guaranteed results, and 24/7 emergency service. Call now for a free consultation!',
  keywords: 'pest control, pest management, exterminator, pest removal, professional pest control, pest control services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 
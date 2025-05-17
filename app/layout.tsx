import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StickyTopBar from './components/StickyTopBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BigShield.pro - Fast Pest Control by Local Exterminators',
  description: 'Professional pest control services by local exterminators. Fast, safe, and effective - Call now for a free quote!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StickyTopBar />
        <div className="pt-12">{children}</div>
      </body>
    </html>
  )
} 
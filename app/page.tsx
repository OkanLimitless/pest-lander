import React from 'react'
import Image from 'next/image'
import { PhoneIcon } from '@heroicons/react/24/solid'
import { ShieldCheckIcon, ClockIcon, CheckCircleIcon, BugAntIcon } from '@heroicons/react/24/outline'
import CallButton from './components/CallButton'
import DynamicLocation from './components/DynamicLocation'
import StepForm from './components/StepForm'
import Footer from './components/Footer'
import AnimatedSection from './components/AnimatedSection'

const PHONE_NUMBER = '+1 (866) 227-3302'

const pests = [
  'Rodents',
  'Cockroaches',
  'Ants',
  'Termites',
  'Bed Bugs',
  'Spiders',
  'Wasps',
  'Mosquitoes',
]

const testimonials = [
  {
    name: 'Margaret L.',
    text: "I called with a bed bug emergency and someone came within 2 hours! One quick call and my problem was solved.",
    stars: 5
  },
  {
    name: 'Jessica R.',
    text: "I was terrified when I saw mice in my kitchen. One call and they came the same day!",
    stars: 5
  },
  {
    name: 'David T.',
    text: "When I discovered termites, I panicked. Called their number, and they had a technician at my door that afternoon.",
    stars: 5
  }
]

const whyCallNow = [
  'Licensed technicians ready to dispatch now',
  'Free phone consultation with pest experts',
  'No obligation quotes over the phone',
  'TOLL-FREE call - won\'t cost you a penny',
  'Same-day appointments often available'
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 pb-24">
      {/* Fixed App-Like Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-40 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <BugAntIcon className="h-6 w-6 text-red-600 mr-2" />
          <h1 className="text-lg font-bold">BigShield</h1>
        </div>
        <CallButton 
          phoneNumber={PHONE_NUMBER}
          variant="primary" 
          className="!bg-red-600 hover:!bg-red-700 !text-white !px-4 !py-2 !rounded-full !text-sm !font-bold flex items-center gap-1"
        >
          <PhoneIcon className="w-4 h-4" />
          <span>Call Now</span>
        </CallButton>
      </header>

      {/* App Body Content */}
      <div className="pt-16 px-4 max-w-md mx-auto">
        {/* Welcome Card */}
        <AnimatedSection className="mb-4">
          <div className="bg-white rounded-xl shadow-md p-4 mt-3">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Pest Problems in <DynamicLocation />?</h2>
            <p className="text-gray-600 mb-3">Complete the quick questionnaire below to get a free quote and special offer!</p>
            <div className="bg-green-100 p-3 rounded-lg mb-3 flex items-start">
              <div className="bg-green-500 rounded-full p-1 mt-0.5 mr-2">
                <CheckCircleIcon className="h-4 w-4 text-white" />
              </div>
              <p className="text-sm text-green-800">Operators standing by - get help in minutes!</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Multi-Step Form Component */}
        <AnimatedSection 
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <StepForm phoneNumber={PHONE_NUMBER} />
        </AnimatedSection>
        
        {/* Why Call Now Card */}
        <AnimatedSection 
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6"
        >
          <div className="bg-white rounded-xl shadow-md p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
              <PhoneIcon className="h-5 w-5 text-red-600 mr-2" />
              Why Call Now
            </h3>
            <ul className="space-y-2">
              {whyCallNow.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-red-100 rounded-full p-1 mt-0.5 mr-2">
                    <CheckCircleIcon className="h-3 w-3 text-red-600" />
                  </div>
                  <span className="text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        {/* Testimonials Carousel Card */}
        <AnimatedSection 
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4"
        >
          <div className="bg-white rounded-xl shadow-md p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-3">What Our Customers Say</h3>
            <div className="overflow-x-auto pb-2">
              <div className="flex gap-3 w-max">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3 min-w-[260px] max-w-[260px]">
                    <div className="flex mb-1">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-700 mb-2 italic">"{testimonial.text}"</p>
                    <p className="text-xs font-semibold text-gray-900">{testimonial.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Limited Time Offer */}
        <AnimatedSection 
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4"
        >
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-md p-4 text-white">
            <h3 className="text-lg font-bold mb-2">🔥 LIMITED TIME OFFER</h3>
            <p className="font-bold text-2xl mb-1">15% OFF First Service</p>
            <p className="text-sm mb-3">Call now to claim this special discount before it expires!</p>
            <CallButton 
              phoneNumber={PHONE_NUMBER}
              variant="primary" 
              className="!bg-white hover:!bg-gray-100 !text-red-600 !px-6 !py-3 !rounded-full !shadow-lg font-bold text-lg w-full flex justify-center items-center gap-2"
            >
              <PhoneIcon className="w-5 h-5 animate-pulse" />
              <span>CALL NOW TO CLAIM</span>
            </CallButton>
          </div>
        </AnimatedSection>

        {/* Footer */}
        <AnimatedSection 
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Footer />
        </AnimatedSection>
      </div>

      {/* Sticky Footer Call Button */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-white shadow-lg p-3 border-t border-gray-200">
        <CallButton 
          phoneNumber={PHONE_NUMBER} 
          variant="primary" 
          className="!bg-red-600 hover:!bg-red-700 !text-white !py-3 !rounded-full !shadow-md font-bold text-lg w-full flex justify-center items-center gap-2"
        >
          <PhoneIcon className="w-5 h-5 animate-pulse" />
          <span>GET FREE QUOTE NOW</span>
        </CallButton>
      </div>
    </main>
  )
} 
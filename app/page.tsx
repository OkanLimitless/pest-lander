import React from 'react'
import Image from 'next/image'
import { ShieldCheckIcon, ClockIcon, CheckCircleIcon, PhoneIcon, ExclamationTriangleIcon, UserIcon, ArrowRightIcon, TagIcon, BugAntIcon, FireIcon, HeartIcon } from '@heroicons/react/24/outline'
import { StarIcon, PhoneIcon as PhoneSolid } from '@heroicons/react/24/solid'
import AnimatedSection from './components/AnimatedSection'
import CallButton from './components/CallButton'
import Footer from './components/Footer'
import DynamicLocation from './components/DynamicLocation'

const PHONE_NUMBER = '+1 (866) 227-3302'

const trustIcons = [
  { icon: ShieldCheckIcon, label: 'Licensed Pros' },
  { icon: CheckCircleIcon, label: '100% Guaranteed' },
  { icon: ClockIcon, label: 'Same Day Service' },
  { icon: PhoneIcon, label: '24/7 Support' },
]

const features = [
  {
    title: 'Expert Technicians',
    description: 'Our certified professionals have years of experience in pest control and management.',
    icon: ShieldCheckIcon,
  },
  {
    title: '24/7 Emergency Service',
    description: 'Available around the clock for urgent pest control needs.',
    icon: ClockIcon,
  },
  {
    title: 'Guaranteed Results',
    description: 'We stand behind our work with a satisfaction guarantee.',
    icon: CheckCircleIcon,
  },
]

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

const pestList = [
  'Ant Control', 'Bed Bug Control', 'Bee Control', 'Beetle Control', 'Centipede Control', 'Cockroach Control',
  'Cricket Control', 'Critter Control', 'Earwig Control', 'Flea Control', 'Fly Control', 'Gnat Control',
  'Hornet Control', 'Ladybug Control', 'Mice Control', 'Millipede Control', 'Mite Control', 'Mosquito Control',
  'Moth Control', 'Rat Control', 'Rodent Control', 'Scorpion Control', 'Silverfish Control', 'Spider Control',
  'Stink Bug Control', 'Termite Control', 'Tick Control'
]

const emergencyPests = [
  { name: 'Bed Bugs', description: 'Causing sleepless nights and spreading quickly' },
  { name: 'Wasps & Hornets', description: 'Dangerous to children & pets, risk of allergic reactions' },
  { name: 'Rodents', description: 'Chewing wires can cause fires, spreading diseases' },
  { name: 'Cockroaches', description: 'Triggering asthma & allergies, contaminating food' },
]

const trustBullets = [
  '24/7 emergency response - we answer every call',
  '100% satisfaction guarantee on all treatments',
  'Same-day service available - even weekends',
  'Licensed, uniformed professionals with ID badges',
  'Transparent fixed pricing — no upselling, no surprises',
  'Up to 6-month guarantee on all treatments',
]

const testimonials = [
  {
    name: 'Margaret L.',
    text: "I called with a bed bug emergency and someone came within 2 hours! One quick call and my problem was solved. They were professional, fast, and now my family can sleep peacefully again.",
    stars: 5
  },
  {
    name: 'Jessica R.',
    text: "I was terrified when I saw mice in my kitchen. One call and they came the same day! The operator was so helpful and calming. Best decision I made was calling their toll-free number!",
    stars: 5
  },
  {
    name: 'David T.',
    text: "When I discovered termites, I panicked. I called their number, and they had a technician at my door that afternoon. Just one call saved my home from thousands in damage.",
    stars: 5
  }
]

const stepIcons = [
  PhoneIcon,
  ClockIcon,
  CheckCircleIcon,
]
const stepTitles = [
  'Call Our Toll-Free Number',
  'Get Same-Day Service',
  'Problem Solved, Guaranteed',
]
const stepDescriptions = [
  'Make a zero-obligation TOLL-FREE call to +1 (866) 227-3302 and get connected with a local pest control pro right away.',
  "We'll send a technician the SAME DAY to quickly take care of your pest issue — even on weekends and holidays.",
  'A licensed technician will arrive, inspect, and treat your home for pests. Enjoy peace of mind with our 100% satisfaction guarantee!',
]

const whyCallNow = [
  'Licensed technicians ready to dispatch now',
  'Free phone consultation with pest experts',
  'No obligation quotes over the phone',
  'TOLL-FREE call - won\'t cost you a penny',
  'Operators available 24/7 to help immediately',
  'Same-day appointments often available'
]

export default function Home() {
  return (
    <>
      <main className="min-h-screen relative">
        {/* STICKY CALL BUTTON FOR MOBILE */}
        <div className="fixed bottom-0 left-0 w-full z-50 bg-gradient-to-t from-black/90 to-black/70 p-3 shadow-lg md:hidden">
          <CallButton 
            phoneNumber={PHONE_NUMBER} 
            variant="primary" 
            className="!bg-red-600 hover:!bg-red-700 !text-white !py-4 !rounded-full !shadow-xl font-bold text-xl w-full flex justify-center items-center gap-2"
          >
            <PhoneSolid className="w-6 h-6 animate-pulse" />
            <span>CALL TOLL-FREE NOW</span>
          </CallButton>
          <p className="text-white text-center text-xs mt-2">15% OFF for New Customers - Limited Time!</p>
        </div>

        {/* HERO SECTION */}
        <section className="relative min-h-[600px] flex items-center justify-center bg-black/80">
          <Image
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3"
            alt="Pest control background"
            fill
            className="object-cover object-center opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center px-4 py-16 md:py-20">
            <div className="flex items-center gap-2 mb-2">
              <UserIcon className="w-5 h-5 text-red-400" />
              <span className="uppercase text-xs tracking-wider font-bold text-white/80"><DynamicLocation /></span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3 drop-shadow-lg">
              Pest Emergency? Call Now!
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
              Fast Pest Control in <DynamicLocation /> - Same Day Service
            </h2>
            
            {/* EMERGENCY BAR */}
            <div className="bg-red-600 py-2 px-4 rounded-md mb-4 w-full max-w-lg flex items-center justify-center">
              <ExclamationTriangleIcon className="w-5 h-5 text-white mr-2" />
              <p className="text-white font-bold text-sm">EMERGENCY RESPONSE ACTIVE IN YOUR AREA</p>
            </div>

            {/* NEW CUSTOMER DISCOUNT BANNER */}
            <div className="bg-gradient-to-r from-yellow-500 to-amber-600 py-3 px-6 rounded-lg mb-4 shadow-lg transform -rotate-1 w-full max-w-lg">
              <div className="flex items-center justify-center gap-2">
                <TagIcon className="h-5 w-5 text-white" />
                <p className="font-bold text-white text-lg">15% OFF FIRST SERVICE - TODAY ONLY!</p>
              </div>
              <p className="text-white text-sm mt-1">Call our TOLL-FREE number now: No cost to call!</p>
            </div>

            <div className="mb-4 w-full max-w-lg">
              <CallButton 
                phoneNumber={PHONE_NUMBER} 
                variant="primary" 
                className="!bg-red-600 hover:!bg-red-700 !text-white !px-8 !py-5 !rounded-full !shadow-xl font-bold text-xl w-full flex justify-center items-center gap-2"
              >
                <PhoneSolid className="w-6 h-6 animate-pulse" />
                <span>CALL TOLL-FREE NOW</span>
              </CallButton>
            </div>
            <div className="flex flex-col items-center gap-1 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <span className="text-white font-semibold text-sm">4.9/5 from 3,200+ Customer Calls</span>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full max-w-2xl mb-4">
              {trustIcons.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center">
                  <Icon className="w-5 h-5 text-white mr-2" />
                  <span className="text-xs text-white font-semibold">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EMERGENCY PEST PROBLEMS */}
        <section className="container-custom py-8 md:py-12 -mt-4 relative z-20">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">Common Pest Emergencies We Solve Today:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {emergencyPests.map((pest) => (
              <div key={pest.name} className="bg-white shadow-md rounded-lg p-4 flex border-l-4 border-red-500">
                <BugAntIcon className="w-10 h-10 text-red-500 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">{pest.name}</h3>
                  <p className="text-gray-600 text-sm">{pest.description}</p>
                  <div className="mt-2">
                    <CallButton 
                      phoneNumber={PHONE_NUMBER} 
                      variant="primary" 
                      className="!bg-amber-500 hover:!bg-amber-600 !text-white !px-4 !py-1 !rounded-full !text-sm !font-bold"
                    >
                      Call For Help Now
                    </CallButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* CURRENT AVAILABILITY */}
        <section className="bg-green-700 py-4 px-4 text-center">
          <div className="flex flex-col items-center">
            <span className="inline-flex items-center bg-white px-3 py-1 rounded-full text-green-700 font-bold text-sm mb-2">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              AVAILABLE NOW
            </span>
            <h3 className="text-white font-bold text-xl mb-2">Pest Control Experts Available in <DynamicLocation /></h3>
            <p className="text-white/90 text-sm mb-3">We're currently dispatching technicians in your area</p>
            <CallButton 
              phoneNumber={PHONE_NUMBER} 
              variant="primary" 
              className="!bg-white hover:!bg-gray-100 !text-green-700 !px-6 !py-3 !rounded-full !shadow-lg font-bold text-base"
            >
              Call For Same-Day Service
            </CallButton>
          </div>
        </section>

        {/* INFO CARD: We're Available Now */}
        <section className="container-custom -mt-6 z-20 relative">
          <div className="flex flex-col items-center bg-white rounded-xl shadow-xl overflow-hidden p-6">
            <div className="w-full h-48 relative mb-4">
              <Image
                src="/images/pest-control-technician.webp"
                alt="Pest control technician"
                fill
                className="object-cover object-center rounded-lg"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg">
                <div className="bg-white/90 px-4 py-2 rounded-md text-center">
                  <p className="font-bold text-green-700">Technicians Ready in <DynamicLocation /></p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <span className="text-xs font-bold text-green-700 uppercase mb-1 flex items-center justify-center gap-1">
                <CheckCircleIcon className="w-4 h-4 text-green-500" /> Operators Standing By 24/7
              </span>
              <h3 className="text-xl md:text-2xl font-bold mb-2">One Call Solves Your Pest Problem Today</h3>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-3">Call our TOLL-FREE number for immediate help!</p>
              <CallButton 
                phoneNumber={PHONE_NUMBER} 
                variant="primary" 
                className="!bg-red-600 hover:!bg-red-700 !text-white !px-6 !py-4 !rounded-full !shadow-lg font-bold text-base w-full md:w-fit"
              >
                Get 15% OFF - Call Now
              </CallButton>
              <span className="text-xs text-gray-500 block mt-2">Your Local BigShield.pro Expert</span>
            </div>
          </div>
        </section>

        {/* WHY CALL NOW SECTION */}
        <section className="container-custom py-8">
          <div className="bg-gray-50 rounded-xl px-5 py-6">
            <h3 className="text-xl font-bold text-center mb-4">Why Call Our Toll-Free Number Now:</h3>
            <ul className="space-y-3">
              {whyCallNow.map((reason, i) => (
                <li key={i} className="flex items-start gap-2">
                  <PhoneIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{reason}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex justify-center">
              <CallButton 
                phoneNumber={PHONE_NUMBER} 
                variant="primary" 
                className="!bg-amber-500 hover:!bg-amber-600 !text-white !px-6 !py-3 !rounded-full !shadow-lg font-bold text-base"
              >
                Call For Free Quote
              </CallButton>
            </div>
          </div>
        </section>

        {/* PAIN/URGENCY SECTION */}
        <section className="container-custom py-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-2">
              <FireIcon className="w-6 h-6 text-red-500" />
              <span className="font-bold text-lg text-gray-900">Pests Multiply Every Day You Wait</span>
            </div>
            <p className="text-gray-700 mb-3">
              It only takes 24-48 hours for pest problems to get much worse. Bed bugs multiply rapidly. Rodents can chew through wires tonight. Wasps build larger nests by the day. Early intervention saves you money and stress.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-md mb-4">
              <p className="text-red-700 font-semibold">
                The longer you wait, the worse it gets. Our toll-free line is open now:
              </p>
              <div className="mt-3">
                <CallButton 
                  phoneNumber={PHONE_NUMBER} 
                  variant="primary" 
                  className="!bg-red-600 hover:!bg-red-700 !text-white !px-6 !py-3 !rounded-full !shadow-lg font-bold text-base"
                >
                  Call For Emergency Service
                </CallButton>
              </div>
            </div>
            
            {/* DISCOUNT REMINDER */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-md">
              <div className="flex items-center">
                <TagIcon className="h-5 w-5 text-amber-500 mr-2" />
                <p className="font-bold text-gray-800">New customers: 15% OFF when you call now!</p>
              </div>
              <p className="text-gray-600 text-sm mt-1">Limited slots available today. Call our toll-free number to secure your discount.</p>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="container-custom py-8 bg-gray-50 -mx-4 px-4">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">People Who Called Our Number:</h2>
          <div className="grid gap-4">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-xl shadow p-5 flex flex-col gap-2">
                <div className="flex items-center gap-2 mb-1">
                  {[...Array(t.stars)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-800 italic text-sm">"{t.text}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">{t.name}</span>
                  <span className="text-xs text-gray-500">Called from <DynamicLocation /></span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-700 mb-3 text-sm">Join thousands of satisfied customers who solved their pest problems with just one call</p>
            <CallButton 
              phoneNumber={PHONE_NUMBER} 
              variant="primary" 
              className="!bg-green-600 hover:!bg-green-700 !text-white !px-6 !py-3 !rounded-full !shadow-lg font-bold text-base"
            >
              Call Our Toll-Free Number
            </CallButton>
          </div>
        </section>

        {/* TRUST BULLETS */}
        <section className="container-custom py-8">
          <h2 className="text-xl font-bold mb-4 text-gray-900 text-center">Why 4,786+ Homeowners Called Us</h2>
          <ul className="space-y-3 text-gray-800 mb-6">
            {trustBullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <p className="text-gray-700 mb-3">
              Get a FREE phone consultation now! Call at:
            </p>
            <div className="text-2xl font-bold text-gray-900 mb-1">+1 (866) 227-3302</div>
            <p className="text-sm text-gray-600">TOLL-FREE call • Mention code <span className="font-bold text-amber-600">NEW15</span> for your 15% discount!</p>
          </div>
        </section>

        {/* 3 SIMPLE STEPS */}
        <section className="container-custom py-8">
          <h2 className="text-xl font-bold mb-6 text-gray-900 text-center">3 Simple Steps to Pest Freedom</h2>
          <div className="grid gap-4">
            {stepTitles.map((title, i) => {
              const Icon = stepIcons[i]
              return (
                <div key={title} className="flex items-center bg-white rounded-xl shadow p-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="text-gray-700 text-sm">{stepDescriptions[i]}</p>
                  </div>
                </div>
              )
            })}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-700 mb-3 font-medium">Take your first step now - Call our toll-free number:</p>
            <CallButton 
              phoneNumber={PHONE_NUMBER} 
              variant="primary" 
              className="!bg-red-600 hover:!bg-red-700 !text-white !px-6 !py-4 !rounded-full !shadow-lg font-bold text-lg"
            >
              Get Pest-Free Today - Call Now
            </CallButton>
            <p className="text-xs text-gray-500 mt-2">*15% discount valid for new customers only. Limited time offer.</p>
          </div>
        </section>
        
        {/* FINAL CTA SECTION */}
        <section className="bg-primary/10 py-8 -mx-4 px-4">
          <div className="container-custom">
            <div className="text-center">
              <HeartIcon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h2 className="text-xl md:text-2xl font-bold mb-2">We're Here to Help You</h2>
              <p className="text-gray-700 mb-4 max-w-md mx-auto">
                Our friendly operators are standing by 24/7 to take your call and connect you with the pest solution you need.
              </p>
              <div className="bg-white p-5 rounded-xl shadow-lg max-w-md mx-auto">
                <p className="text-lg font-bold text-gray-900 mb-2">Call our TOLL-FREE number now:</p>
                <CallButton 
                  phoneNumber={PHONE_NUMBER} 
                  variant="primary" 
                  className="!bg-red-600 hover:!bg-red-700 !text-white !px-8 !py-4 !rounded-full !shadow-xl font-bold text-xl w-full flex justify-center items-center gap-2 mb-2"
                >
                  <PhoneSolid className="w-6 h-6" />
                  <span>+1 (866) 227-3302</span>
                </CallButton>
                <p className="text-sm text-gray-500">No charge to call • Available 24/7 • Fast response</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 
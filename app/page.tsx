import React from 'react'
import Image from 'next/image'
import { ShieldCheckIcon, ClockIcon, CheckCircleIcon, PhoneIcon, ExclamationTriangleIcon, UserIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'
import AnimatedSection from './components/AnimatedSection'
import CallButton from './components/CallButton'
import Header from './components/Header'
import Footer from './components/Footer'

const PHONE_NUMBER = '+18662273302'

const trustIcons = [
  { icon: ShieldCheckIcon, label: 'Local Quality Pros' },
  { icon: CheckCircleIcon, label: 'No-Obligation Estimate' },
  { icon: ClockIcon, label: 'Same Day Service' },
  { icon: PhoneIcon, label: '24-Hour Support' },
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

const trustBullets = [
  '24/7 availability',
  '100% protection from all pests',
  'Same-day service is available',
  'Licensed, uniformed professionals with ID badges',
  'Transparent fixed pricing — no upselling, no surprises',
  'Up to 6-month guarantee on all treatment',
]

const testimonials = [
  {
    name: 'Margaret L.',
    text: "As a mom with two little kids, I was panicked when we found bed bugs. I called and someone was at our house in under 2 hours. They were professional, fast, and safe with everything they used. So grateful!",
    stars: 5
  },
  {
    name: 'Jessica R.',
    text: "I'm a senior living alone and was terrified when I saw mice in my kitchen. I called and they came the same day! The technician was kind, respectful, and explained everything. I finally feel safe in my home again.",
    stars: 5
  }
]

const stepIcons = [
  PhoneIcon,
  ClockIcon,
  CheckCircleIcon,
]
const stepTitles = [
  'Call Us',
  'Schedule Service',
  'Get Pest Control',
]
const stepDescriptions = [
  'Make a zero-obligation phone call to (866) 227-3302 and get connected with a local pest control pro right away.',
  "We'll help you set up a convenient appointment to quickly take care of your pest issue — even same-day pest control when available.",
  'A licensed technician will arrive, inspect, and treat your home for pests. Enjoy peace of mind with our guarantee!',
]

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
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
          <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center px-4 py-20">
            <div className="flex items-center gap-2 mb-4">
              <UserIcon className="w-5 h-5 text-red-400" />
              <span className="uppercase text-xs tracking-wider font-bold text-white/80">USA</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
              Fast Pest Control by Local Exterminators
            </h1>
            <h2 className="text-lg md:text-2xl font-semibold text-white mb-4">
              Fast, Safe, Same-Day Pest Control Service
            </h2>
            <p className="text-base md:text-lg text-white mb-6 font-medium">
              Get Rid of Pesky Pests Today — Call Now!
            </p>
            <div className="mb-4">
              <CallButton phoneNumber={PHONE_NUMBER} variant="primary" className="!bg-red-600 hover:!bg-red-700 !text-white !px-8 !py-4 !rounded-full !shadow-xl font-bold text-xl" />
            </div>
            <div className="flex flex-col items-center gap-1 mb-6">
                              <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                   <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
              <span className="text-white font-semibold text-sm">Get a FREE Up-Front Quote</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl mt-6">
              {trustIcons.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center">
                  <Icon className="w-8 h-8 text-white mb-1" />
                  <span className="text-xs text-white font-semibold uppercase text-center leading-tight drop-shadow">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INFO CARD: We're Available Now */}
        <section className="container-custom -mt-16 z-20 relative">
          <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-xl overflow-hidden p-6 md:p-0">
            <div className="w-full md:w-1/3 h-40 md:h-48 relative flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=400&q=80"
                alt="Pest control technician"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="flex-1 p-4 md:p-8 flex flex-col gap-2">
              <span className="text-xs font-bold text-green-700 uppercase mb-1 flex items-center gap-1">
                <CheckCircleIcon className="w-4 h-4 text-green-500" /> We're Available Now
              </span>
              <h3 className="text-lg md:text-2xl font-bold mb-2">Fully Trained Pest Experts Standing By</h3>
              <p className="text-gray-700 mb-2">Call Now For Your FREE Quote!</p>
              <CallButton phoneNumber={PHONE_NUMBER} variant="primary" className="!bg-red-600 hover:!bg-red-700 !text-white !px-6 !py-3 !rounded-full !shadow-lg font-bold text-base w-fit" />
              <span className="text-xs text-gray-500 mt-2">Your City Pest Exterminator</span>
            </div>
          </div>
        </section>

        {/* PAIN/URGENCY SECTION */}
        <section className="container-custom py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-2">
              <ExclamationTriangleIcon className="w-6 h-6 text-red-500" />
              <span className="font-bold text-lg text-gray-900">Pests and Rodents Aren't Just Gross — They're a Danger to Your Family and Home</span>
            </div>
            <p className="text-gray-700 mb-2">
              Every day you wait, pests multiply. Bed bugs disrupt sleep and are hard to eliminate without help. Roaches spread bacteria. Mice chew through wires and can cause fires. Wasps and hornets are dangerous to kids and trigger allergic reactions.
            </p>
            <p className="text-red-700 font-semibold">
              The longer you delay, the worse it gets. Call us — we're ready to come today <span className="underline">(866) 227-3302</span>
            </p>
          </div>
        </section>

        {/* WHAT SETS US APART + PEST LIST */}
        <section className="container-custom py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">What Truly Sets Us Apart in Pest Control</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Not all pest control services are the same. Even with similar products, it's the technician's attention to detail that makes all the difference.</li>
                <li>No supervisor watching over each job — so we only work with trusted, thoroughly vetted exterminators who take their time, follow every step, and never cut corners.</li>
                <li>We stay until the pests are fully eliminated — no guesswork, no rushed treatments, just results you can count on.</li>
              </ul>
            </div>
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                {pestList.map((pest) => (
                  <span key={pest} className="bg-gray-100 rounded px-2 py-1 text-gray-800 font-medium text-center">{pest}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="container-custom py-8 md:py-12">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-xl shadow p-6 flex flex-col gap-2">
                                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(t.stars)].map((_, i) => (
                     <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                <p className="text-gray-800 italic">"{t.text}"</p>
                <span className="font-semibold text-gray-900 mt-2">{t.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* TRUST BULLETS */}
        <section className="container-custom py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Why Over 4,786 Homeowners Trust Us</h2>
          <ul className="space-y-2 text-gray-800">
            {trustBullets.map((b, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-green-500" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-gray-700">
            Get a FREE consultation & expert evaluation today! We provide emergency pest control without the stress! Call at <span className="underline">(866) 227-3302</span>
          </p>
        </section>

        {/* 3 SIMPLE STEPS */}
        <section className="container-custom py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Only 3 Simple Steps to a Pest-Free Home</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {stepTitles.map((title, i) => {
              const Icon = stepIcons[i]
              return (
                <div key={title} className="flex flex-col items-center bg-white rounded-xl shadow p-6">
                  <Icon className="w-10 h-10 text-primary mb-2" />
                  <h3 className="font-bold text-lg mb-2">{title}</h3>
                  <p className="text-gray-700 text-center text-sm">{stepDescriptions[i]}</p>
                </div>
              )
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 
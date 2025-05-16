import React from 'react'
import Image from 'next/image'
import { PhoneIcon, ShieldCheckIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import AnimatedSection from './components/AnimatedSection'
import CallButton from './components/CallButton'

const PHONE_NUMBER = '+18662273302'

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

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary to-primary/90 text-white">
        <div className="container-custom section-padding">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Pest Control Services You Can Trust
              </h1>
              <p className="text-xl mb-8">
                Get rid of pests quickly and effectively with our expert pest control services. 
                Free consultation and guaranteed results.
              </p>
              <CallButton phoneNumber={PHONE_NUMBER} variant="secondary" />
            </AnimatedSection>
            <AnimatedSection
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3"
                alt="Professional pest control technician"
                fill
                className="object-cover"
                priority
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Our Pest Control Services?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gray-50 shadow-lg hover:shadow-xl transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Rid of Pests?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Don't let pests take over your home or business. Call us now for a free consultation 
              and let our experts help you achieve a pest-free environment.
            </p>
            <CallButton 
              phoneNumber={PHONE_NUMBER} 
              variant="primary"
              className="bg-white text-secondary hover:bg-gray-100"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            We Handle All Types of Pests
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {pests.map((pest, index) => (
              <AnimatedSection
                key={pest}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white p-4 rounded-lg shadow text-center hover:shadow-md transition-shadow"
              >
                <p className="font-semibold text-gray-800">{pest}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Professional Pest Control Today
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our expert technicians are ready to help you eliminate pests and prevent future infestations. 
              Call now for immediate assistance!
            </p>
            <CallButton phoneNumber={PHONE_NUMBER} variant="secondary" />
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
} 
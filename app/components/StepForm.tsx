'use client'

import React, { useState, useEffect } from 'react'
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { PhoneIcon } from '@heroicons/react/24/solid'
import CallButton from './CallButton'

interface StepFormProps {
  phoneNumber: string
}

const pestTypes = [
  { id: 'ants', label: 'Ants' },
  { id: 'roaches', label: 'Cockroaches' },
  { id: 'rodents', label: 'Rodents/Mice' },
  { id: 'termites', label: 'Termites' },
  { id: 'bedbugs', label: 'Bed Bugs' },
  { id: 'wasps', label: 'Wasps/Hornets' },
  { id: 'spiders', label: 'Spiders' },
  { id: 'other', label: 'Other' },
]

const urgencyLevels = [
  { id: 'emergency', label: 'Emergency (Need help today)', highlight: true },
  { id: 'urgent', label: 'Urgent (Within 24-48 hours)' },
  { id: 'soon', label: 'Soon (This week)' },
  { id: 'planning', label: 'Just planning ahead' },
]

const propertyTypes = [
  { id: 'house', label: 'House' },
  { id: 'apartment', label: 'Apartment/Condo' },
  { id: 'business', label: 'Business' },
  { id: 'other', label: 'Other' },
]

export default function StepForm({ phoneNumber }: StepFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [progressBar, setProgressBar] = useState(0)
  const [searchMessages, setSearchMessages] = useState<string[]>([])
  const [formData, setFormData] = useState({
    pestType: '',
    urgency: '',
    propertyType: '',
    infestation: '',
    completed: false
  })

  // Messages to show during the search process
  const searchSteps = [
    "Analyzing pest problem details...",
    "Finding available BigShield technicians in your area...",
    "Checking for special offers...",
    "Matching you with BigShield pest control experts..."
  ]

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isSearching) {
      // Start progress bar animation
      let progress = 0;
      timer = setInterval(() => {
        progress += 1;
        setProgressBar(prev => Math.min(prev + 1, 100));
        
        // Add search messages at specific progress points
        if (progress === 10) setSearchMessages(prev => [...prev, searchSteps[0]]);
        if (progress === 30) setSearchMessages(prev => [...prev, searchSteps[1]]);
        if (progress === 60) setSearchMessages(prev => [...prev, searchSteps[2]]);
        if (progress === 85) setSearchMessages(prev => [...prev, searchSteps[3]]);
        
        // Complete search
        if (progress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsSearching(false);
            setFormData(prev => ({ ...prev, completed: true }));
          }, 500);
        }
      }, 30);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isSearching]);

  const handleSelectOption = (field: string, value: string) => {
    // First update the form data
    setFormData({
      ...formData,
      [field]: value
    });
    
    // Show loading state
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      
      // If this is the last step, start searching
      if (currentStep === 4) {
        setIsSearching(true);
      } else {
        // Otherwise move to next step
        setCurrentStep(currentStep + 1);
      }
    }, 800); // Delay before showing next step
  }

  // Render loading overlay
  const renderLoadingOverlay = () => {
    if (!isLoading) return null;
    
    return (
      <div className="absolute inset-0 bg-white/80 flex flex-col items-center justify-center z-10 rounded-xl">
        <div className="w-8 h-8 border-4 border-gray-200 border-t-red-500 rounded-full animate-spin mb-2"></div>
        <p className="text-sm font-medium text-gray-700">Processing...</p>
      </div>
    );
  }

  // Render search screen
  const renderSearchingScreen = () => {
    return (
      <div className="bg-white rounded-xl shadow-md p-5 mb-4 overflow-hidden">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Finding the Best Solution</h3>
        
        {/* Progress bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full mb-6 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressBar}%` }}
          ></div>
        </div>
        
        {/* Animated icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-red-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="absolute top-0 left-0 w-full h-full border-4 border-red-200 rounded-full animate-ping opacity-20"></div>
          </div>
        </div>
        
        {/* Search messages */}
        <div className="space-y-2">
          {searchMessages.map((message, index) => (
            <div 
              key={index} 
              className="flex items-center text-sm text-gray-700 animate-fadeIn"
            >
              <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
              <p>{message}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <h3 className="text-base font-semibold text-gray-800 mb-3">Step 1: What pest problem do you have?</h3>
            <div className="grid grid-cols-2 gap-2">
              {pestTypes.map(pest => (
                <button
                  key={pest.id}
                  className={`flex flex-col items-center justify-center p-3 rounded-lg border ${
                    formData.pestType === pest.id
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                  onClick={() => handleSelectOption('pestType', pest.id)}
                  disabled={isLoading}
                >
                  <span className="text-sm font-medium">{pest.label}</span>
                </button>
              ))}
            </div>
          </>
        )
      
      case 2:
        return (
          <>
            <h3 className="text-base font-semibold text-gray-800 mb-3">Step 2: How urgent is your situation?</h3>
            <div className="space-y-2">
              {urgencyLevels.map(level => (
                <button
                  key={level.id}
                  className={`w-full text-left p-3 rounded-lg border ${
                    formData.urgency === level.id
                      ? 'border-red-500 bg-red-50'
                      : level.highlight 
                        ? 'border-orange-300 bg-orange-50' 
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                  onClick={() => handleSelectOption('urgency', level.id)}
                  disabled={isLoading}
                >
                  <span className={`text-sm font-medium ${level.highlight ? 'text-orange-700' : ''}`}>
                    {level.label}
                  </span>
                </button>
              ))}
            </div>
          </>
        )
        
      case 3:
        return (
          <>
            <h3 className="text-base font-semibold text-gray-800 mb-3">Step 3: What type of property?</h3>
            <div className="grid grid-cols-2 gap-2">
              {propertyTypes.map(type => (
                <button
                  key={type.id}
                  className={`flex flex-col items-center justify-center p-3 rounded-lg border ${
                    formData.propertyType === type.id
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                  onClick={() => handleSelectOption('propertyType', type.id)}
                  disabled={isLoading}
                >
                  <span className="text-sm font-medium">{type.label}</span>
                </button>
              ))}
            </div>
          </>
        )
        
      case 4:
        return (
          <>
            <h3 className="text-base font-semibold text-gray-800 mb-3">Step 4: Size of infestation?</h3>
            <div className="space-y-2">
              <button
                className={`w-full text-left p-3 rounded-lg border ${
                  formData.infestation === 'small'
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
                onClick={() => handleSelectOption('infestation', 'small')}
                disabled={isLoading}
              >
                <span className="text-sm font-medium">Small - Just spotted a few</span>
              </button>
              <button
                className={`w-full text-left p-3 rounded-lg border ${
                  formData.infestation === 'medium'
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
                onClick={() => handleSelectOption('infestation', 'medium')}
                disabled={isLoading}
              >
                <span className="text-sm font-medium">Medium - Seeing them regularly</span>
              </button>
              <button
                className={`w-full text-left p-3 rounded-lg border ${
                  formData.infestation === 'large'
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
                onClick={() => handleSelectOption('infestation', 'large')}
                disabled={isLoading}
              >
                <span className="text-sm font-medium">Large - Serious infestation</span>
              </button>
              <button
                className={`w-full text-left p-3 rounded-lg border ${
                  formData.infestation === 'unsure'
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
                onClick={() => handleSelectOption('infestation', 'unsure')}
                disabled={isLoading}
              >
                <span className="text-sm font-medium">Not sure - Need professional assessment</span>
              </button>
            </div>
          </>
        )
      
      default:
        return null
    }
  }

  // If currently searching, show the search screen
  if (isSearching) {
    return renderSearchingScreen();
  }

  // Results card displayed after completing the form
  if (formData.completed) {
    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-red-600 to-orange-500 p-4 text-white">
          <div className="flex items-center justify-center mb-2">
            <div className="bg-white rounded-full p-2">
              <CheckCircleIcon className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-lg font-bold text-center">Perfect Match Found!</h3>
          <p className="text-sm text-center opacity-90">BigShield experts available now</p>
        </div>
        <div className="p-4">
          <div className="mb-4 bg-green-50 rounded-lg p-3">
            <p className="text-green-800 font-medium text-sm">15% OFF first-time service available for your situation!</p>
          </div>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <p className="text-sm text-gray-700">Experts specialized in {pestTypes.find(p => p.id === formData.pestType)?.label || 'pest'} control</p>
            </div>
            <div className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <p className="text-sm text-gray-700">Same-day service available for your urgent need</p>
            </div>
            <div className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <p className="text-sm text-gray-700">Free phone consultation and quote</p>
            </div>
          </div>
          
          <p className="text-center font-medium text-gray-900 mb-3">Call now to get your special rate:</p>
          
          <CallButton 
            phoneNumber={phoneNumber}
            variant="primary"
            className="!bg-red-600 hover:!bg-red-700 !text-white !py-4 !rounded-full !shadow-xl font-bold text-lg w-full flex justify-center items-center gap-2"
          >
            <PhoneIcon className="w-5 h-5 animate-pulse" />
            <span>CALL FOR FREE QUOTE</span>
          </CallButton>
          
          <p className="text-xs text-gray-500 text-center mt-2">Limited slots available today</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-4 relative">
      {/* Loading overlay */}
      {renderLoadingOverlay()}
      
      {/* Progress steps */}
      <div className="flex mb-5">
        {[1, 2, 3, 4].map(step => (
          <div 
            key={step} 
            className={`flex-1 h-1 rounded-full mx-0.5 ${step <= currentStep ? 'bg-red-500' : 'bg-gray-200'}`}
          />
        ))}
      </div>
      
      {/* Current step content */}
      {renderStepContent()}
      
      {/* Back button (for steps after the first) */}
      {currentStep > 1 && !isLoading && (
        <button 
          className="text-sm text-gray-500 mt-3 hover:text-gray-700"
          onClick={() => setCurrentStep(currentStep - 1)}
          disabled={isLoading}
        >
          ← Back to previous step
        </button>
      )}
    </div>
  )
} 
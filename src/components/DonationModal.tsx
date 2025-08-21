"use client"

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useDonationModal } from '@/contexts/DonationModalContext'
// Stripe removed; using GiveLively iframe
import { useTheme } from '@/contexts/ThemeContext'
 

interface DonationForm {
  amount: number
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zipCode: string
  isAnonymous: boolean
  message: string
  paymentMethod: 'card' | 'paypal' | 'apple-pay'
  isMonthly: boolean
}

const presetAmounts = [25, 50, 100, 250, 500, 1000]

export default function DonationModal() {
  const { isOpen, closeModal, presetAmount, campaign } = useDonationModal()
  const { theme } = useTheme()
  
  const [formData, setFormData] = useState<DonationForm>({
    amount: presetAmount,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    isAnonymous: false,
    message: '',
    paymentMethod: 'card',
    isMonthly: false
  })

  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [step, setStep] = useState<'amount' | 'payment'>('amount')
  // Stripe state removed
  

  // Update form data when presetAmount changes
  useEffect(() => {
    setFormData(prev => ({ ...prev, amount: presetAmount }))
  }, [presetAmount])

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, closeModal])

  // No personal details step; only validate amount before proceeding

  // Removed address/success submit logic (using GiveLively iframe instead)

  const handleNext = () => {
    if (step === 'amount') {
      if (formData.amount >= 1) {
        setStep('payment')
      } else {
        setErrors({ amount: 'Please select an amount' })
      }
    }
  }

  const handleBack = () => {
    if (step === 'payment') {
      setStep('amount')
    }
  }

  // Stripe PaymentIntent logic removed

  if (!isOpen) return null

  // Stripe CardPaymentSection removed; using GiveLively iframe

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-x-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeModal}
      />
      
      {/* Modal */}
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex">
        {/* Campaign Card - Left Side */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#732154] to-fandango-600 text-white p-8 flex-col justify-between">
          <div>
            <div className="mb-6">
              <img 
                src={theme === 'dark' 
                  ? "https://thekccf.org/wp-content/uploads/2025/03/cropped-Koenig-Foundation-Logo-01.png"
                  : "/KCCF logo.png"
                }
                alt="Koenig Childhood Cancer Foundation Logo"
                className="h-12 w-auto mb-4"
                width={200}
                height={48}
              />
            </div>
            
            <div className="campaign-image-holder mb-6">
              <img 
                className="w-full h-64 object-cover rounded-xl shadow-lg"
                src="https://thekccf.org/wp-content/uploads/2025/04/MetaLeadershipMakingfitBags-scaled.jpg"
                alt="Crazy Socks Gift Bags Campaign"
                width="516"
                height="289"
              />
            </div>
            
            <div className="campaign-body">
              <h2 className="text-2xl font-bold mb-4">
                {campaign || "Help hospitalized children with cancer"}
              </h2>
              <p className="text-white/90 leading-relaxed">
                Your donation helps provide Crazy Socks Gift Bags to hospitalized children battling cancer. 
                These gift bags bring joy, comfort, and a sense of normalcy to children during their difficult 
                hospital stays. Every donation makes a real difference in a child's life.
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/20">
            <div className="flex items-center space-x-4 text-sm text-white/80">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Secure & Trusted</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Tax Deductible</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Donation Form - Right Side */}
        <div className="lg:w-1/2 w-full max-h-[90vh] flex flex-col overflow-hidden">
        {/* Sticky Header + Progress */}
        <div className="sticky top-0 z-10 bg-white dark:bg-gray-800">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Make a Donation
            </h2>
            {campaign && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Campaign: {campaign}
              </p>
            )}
          </div>
          <button
            onClick={closeModal}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors hover:cursor-pointer"
          >
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress Steps */}
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                step === 'amount' ? 'bg-[#732154] text-white' : 'bg-green-500 text-white'
              }`}>
                1
              </div>
              <div className={`w-12 h-1 mx-2 ${step === 'payment' ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-600'}`} />
                </div>
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                step === 'payment' ? 'bg-[#732154] text-white' : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400'
              }`}>
                2
              </div>
            </div>
          </div>
          </div>
        </div>

        {step === 'amount' && (
        <div className="p-6 flex-1 overflow-y-auto">
          {/* Step 1: Amount Selection */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Select Donation Amount
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Your donation helps provide Crazy Socks Gift Bags to hospitalized children battling cancer.
                </p>
              </div>

              {/* Preset Amounts */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {presetAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => setFormData({ ...formData, amount })}
                    className={`p-4 rounded-xl border-2 transition-all hover:cursor-pointer ${
                      formData.amount === amount
                        ? 'border-[#732154] bg-[#732154]/10 dark:bg-[#732154]/20'
                        : 'border-gray-200 dark:border-gray-600 hover:border-[#732154]/50'
                    }`}
                  >
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      ${amount}
                    </div>
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Or enter a custom amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    min="1"
                    step="0.01"
                    value={formData.amount === presetAmount ? '' : formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: parseFloat(e.target.value) || 0 })}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#732154] focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Enter amount"
                  />
                </div>
                {errors.amount && (
                  <p className="text-red-500 text-sm mt-1">{errors.amount}</p>
                )}
              </div>

              {/* Monthly vs One-time Donation */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Donation Frequency
                </label>
                <div className="space-y-2">
                  <label className="flex items-center p-3 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-600">
                    <input
                      type="radio"
                      name="donationType"
                      checked={!formData.isMonthly}
                      onChange={() => setFormData({ ...formData, isMonthly: false })}
                      className="w-4 h-4 text-[#732154] border-gray-300 focus:ring-[#732154]"
                    />
                    <div className="ml-3">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">One-time donation</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Make a single donation today</div>
                    </div>
                  </label>

                  <label className="flex items-center p-3 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-600">
                    <input
                      type="radio"
                      name="donationType"
                      checked={formData.isMonthly}
                      onChange={() => setFormData({ ...formData, isMonthly: true })}
                      className="w-4 h-4 text-[#732154] border-gray-300 focus:ring-[#732154]"
                    />
                    <div className="ml-3">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">Monthly donation</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Support us every month with automatic recurring donations</div>
                    </div>
                  </label>
                </div>
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="w-full bg-[#732154] hover:bg-[#732154]/90 text-white py-3 px-6 rounded-lg font-semibold transition-colors hover:cursor-pointer"
              >
                Continue
                </button>
              </div>
            </div>
          )}
          {/* Step 2: Payment (GiveLively iframe) */}
          {step === 'payment' && (
            <div className="flex-1 overflow-hidden flex flex-col">
              <div className="flex-1 overflow-y-auto overflow-x-hidden">
                <iframe
                  allow="payment"
                  className="gl-modal__iframe block w-full h-full min-h-[800px] max-w-full"
                  frameBorder={0}
                  id="gl-widget-modal-iframe"
                  scrolling="no"
                  src={`https://secure.givelively.org/donate/koenig-childhood-cancer-foundation?recurring=false&override_amount=${encodeURIComponent(String(formData.amount))}&dedication_name=&dedication_email=&dedication_type=&widget_type=simple_donation&widget_url=${encodeURIComponent('https://thekccf.org/donate/')}&referrer_url=${encodeURIComponent('https://thekccf.org/')}&isWixEmbedded=false`}
                  title="Donation form"
                />
              </div>
              <div className="sticky bottom-0 left-0 right-0 p-4 bg-white/90 dark:bg-gray-800/90 border-t border-gray-200 dark:border-gray-700 backdrop-blur">
                <button
                  type="button"
                  onClick={handleBack}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors hover:cursor-pointer"
                >
                  Back
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )

  // Use portal to render modal outside of normal DOM hierarchy
  return createPortal(modalContent, document.body)
}

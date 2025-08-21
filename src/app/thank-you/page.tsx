"use client"

import { useEffect, useMemo, useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { loadStripe } from '@stripe/stripe-js'

function ThankYouContent() {
  const searchParams = useSearchParams()
  const router = useRouter()

  // Values that may be provided via our own navigation (when address step completes or is skipped)
  const urlAmount = searchParams.get('amount') || ''
  const urlFirstName = searchParams.get('firstName') || ''
  const urlLastName = searchParams.get('lastName') || ''
  const urlEmail = searchParams.get('email') || ''
  const urlCampaign = searchParams.get('campaign') || ''
  const urlMonthly = searchParams.get('monthly') === 'true'

  // Values that may be provided by Stripe after a redirect (3DS, etc.)
  const piClientSecret = searchParams.get('payment_intent_client_secret')
  const piId = searchParams.get('payment_intent')
  const [piLoaded, setPiLoaded] = useState(false)
  const [piAmount, setPiAmount] = useState<number | null>(null)
  const [piStatus, setPiStatus] = useState<string>('')

  useEffect(() => {
    let isMounted = true
    async function fetchPaymentIntent() {
      try {
        // Prefer client_secret if present (lets us use stripe.js retrieval)
        if (!piClientSecret && !piId) {
          setPiLoaded(true)
          return
        }
        if (piClientSecret) {
          const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
          if (publishableKey) {
            const stripe = await loadStripe(publishableKey)
            if (stripe) {
              const result = await stripe.retrievePaymentIntent(piClientSecret)
              const paymentIntent = result.paymentIntent
              if (isMounted && paymentIntent) {
                setPiStatus(paymentIntent.status || '')
                setPiAmount(typeof paymentIntent.amount === 'number' ? paymentIntent.amount / 100 : null)
                return
              }
            }
          }
        }

        // Fallback: if only id provided (or client retrieval failed), query our server
        if (piId) {
          const res = await fetch(`/api/stripe/payment-intents/${piId}`, { cache: 'no-store' })
          if (res.ok) {
            const json = await res.json()
            if (isMounted && json) {
              setPiStatus(json.status || '')
              setPiAmount(typeof json.amount === 'number' ? json.amount / 100 : null)
            }
          }
        }
      } finally {
        if (isMounted) setPiLoaded(true)
      }
    }
    fetchPaymentIntent()
    return () => {
      isMounted = false
    }
  }, [piClientSecret, piId])

  // Choose the best available values: prefer URL params we set; fallback to Stripe PI data
  const amount = useMemo(() => {
    if (urlAmount) return urlAmount
    if (piAmount !== null) return piAmount.toFixed(2)
    return ''
  }, [urlAmount, piAmount])

  const firstName = urlFirstName
  const lastName = urlLastName
  const email = urlEmail
  const campaign = urlCampaign
  const monthly = urlMonthly

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow p-8">
        <div className="flex items-center mb-6">
          <div className="h-12 w-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center mr-4">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <path d="M22 4 12 14.01l-3-3" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Thank you!</h1>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We appreciate your generous {monthly ? 'monthly ' : ''}donation
          {amount ? ` of $${amount}` : ''}
          {campaign ? ` to ${campaign}` : ''}.
          {!urlAmount && (piClientSecret || piId) && !piLoaded && ' Finalizing your payment details...'}
          {!urlAmount && (piClientSecret || piId) && piLoaded && !amount && ' Payment details loaded.'}
        </p>

        {(firstName || lastName) && (
          <p className="text-gray-700 dark:text-gray-300 mb-2">Donor: <span className="font-medium">{`${firstName} ${lastName}`.trim()}</span></p>
        )}
        {email && (
          <p className="text-gray-700 dark:text-gray-300 mb-6">A receipt will be sent to <span className="font-medium">{email}</span>.</p>
        )}

        <div className="flex gap-3">
          <button
            onClick={() => router.push('/')}
            className="bg-[#732154] hover:bg-[#732154]/90 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
          >
            Back to Home
          </button>
          <button
            onClick={() => router.push('/donate')}
            className="border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            Make another donation
          </button>
        </div>
      </div>
    </div>
  )
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow p-8">
          <div className="animate-pulse">
            <div className="h-12 w-12 rounded-full bg-gray-200 mb-4"></div>
            <div className="h-8 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded mb-6"></div>
            <div className="flex gap-3">
              <div className="h-12 bg-gray-200 rounded w-32"></div>
              <div className="h-12 bg-gray-200 rounded w-40"></div>
            </div>
          </div>
        </div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  )
}



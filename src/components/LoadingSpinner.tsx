'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function LoadingSpinner() {
  const [isLoading, setIsLoading] = useState(false)
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    // Handle initial page load
    if (isInitialLoad) {
      setIsLoading(true)
      const timer = setTimeout(() => {
        setIsLoading(false)
        setIsInitialLoad(false)
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [isInitialLoad])

  useEffect(() => {
    // Handle route changes
    if (!isInitialLoad) {
      setIsLoading(true)
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [pathname, isInitialLoad])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out">
      <div className="text-center">
        {/* Simple spinner */}
        <div className="w-12 h-12 border-3 border-gray-200 dark:border-gray-700 border-t-[#732154] rounded-full animate-spin mx-auto mb-4"></div>
        
        {/* Loading text */}
        <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
          {isInitialLoad ? 'Loading...' : 'Loading...'}
        </p>
      </div>
    </div>
  )
}

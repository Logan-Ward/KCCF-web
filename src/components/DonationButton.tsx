"use client"

import { useDonationModal } from '@/contexts/DonationModalContext'

interface DonationButtonProps {
  amount?: number
  campaign?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children?: React.ReactNode
  icon?: React.ReactNode
}

export default function DonationButton({
  amount = 50,
  campaign = '',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  icon
}: DonationButtonProps) {
  const { openModal } = useDonationModal()

  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#732154] transform hover:scale-105 active:scale-95 cursor-pointer'

  const variantClasses = {
    primary: 'bg-[#732154] hover:bg-[#732154]/90 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-fandango-600 hover:bg-fandango-700 text-white shadow-lg hover:shadow-xl',
    outline: 'border-2 border-[#732154] text-[#732154] hover:bg-[#732154] hover:text-white',
    ghost: 'text-[#732154] hover:bg-[#732154]/10'
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const handleClick = () => {
    openModal(amount, campaign)
  }

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children || `Donate $${amount}`}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  )
}


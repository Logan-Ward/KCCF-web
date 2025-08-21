"use client"

import { createContext, useContext, useState, ReactNode } from 'react'

interface DonationModalContextType {
  isOpen: boolean
  openModal: (presetAmount?: number, campaign?: string) => void
  closeModal: () => void
  presetAmount: number
  campaign: string | undefined
}

const DonationModalContext = createContext<DonationModalContextType | undefined>(undefined)

export function DonationModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [presetAmount, setPresetAmount] = useState(50)
  const [campaign, setCampaign] = useState<string | undefined>('')

  const openModal = (amount: number = 50, campaignName: string = '') => {
    setPresetAmount(amount)
    setCampaign(campaignName || undefined)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <DonationModalContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
        presetAmount,
        campaign
      }}
    >
      {children}
    </DonationModalContext.Provider>
  )
}

export function useDonationModal() {
  const context = useContext(DonationModalContext)
  if (context === undefined) {
    throw new Error('useDonationModal must be used within a DonationModalProvider')
  }
  return context
}

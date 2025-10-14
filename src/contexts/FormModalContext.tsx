"use client"

import { createContext, useContext, useState, ReactNode } from 'react'

export type FormType = 
  | 'camp-camper'
  | 'camp-counselor' 
  | 'crazy-socks-sponsor'
  | 'newsletter-signup'
  | 'book-elana'
  | 'volunteer'
  | 'contact'
  | 'aid-application'

interface FormConfig {
  title: string
  subtitle?: string
  src: string
  height: string
}

export const FORM_CONFIGS: Record<FormType, FormConfig> = {
  'camp-camper': {
    title: 'Join as a Camper',
    subtitle: 'Register your child for our upcoming camp session. We\'ll contact you with more details and confirm your spot.',
    src: 'https://forms.monday.com/forms/embed/41086441b740b6e179cbde8b574bd794?r=use1',
    height: '1550px'
  },
  'camp-counselor': {
    title: 'Join as a Counselor',
    subtitle: 'Join our team of dedicated counselors and help create an amazing camp experience for children with cancer.',
    src: 'https://forms.monday.com/forms/embed/87920448930e50b7a0554e414662d32b?r=use1',
    height: '1900px'
  },
  'crazy-socks-sponsor': {
    title: 'Sponsor Gift Bag Event',
    subtitle: 'For hospitalized children battling cancer',
    src: 'https://forms.monday.com/forms/embed/78b71c024990383d274ad455e744923a?r=use1',
    height: '2000px'
  },
  'newsletter-signup': {
    title: 'Stay Connected',
    subtitle: 'Join our newsletter to receive updates about our programs, events, and the families we help.',
    src: 'https://thekccf.us17.list-manage.com/subscribe?u=041a777be61cc7e1bc20e3517&id=8696f27783',
    height: '650px'
  },
  'book-elana': {
    title: 'Book Elana Koenig',
    subtitle: 'Elana shares her inspiring story at schools, organizations, and events to raise awareness about childhood cancer.',
    src: 'https://forms.monday.com/forms/embed/0caf48b3cfeede4c889e59ac52ce5fb1?r=use1',
    height: '1900px'
  },
  'volunteer': {
    title: 'Become a Volunteer',
    subtitle: 'Ready to make a difference? Complete this form to start your volunteer journey with KCCF.',
    src: 'https://forms.monday.com/forms/embed/650d6c93433108a85097471c822b4cbf?r=use1',
    height: '3100px'
  },
  'contact': {
    title: 'Send Us a Message',
    subtitle: 'Get in touch with us. We\'re here to help and answer any questions you may have.',
    src: 'https://forms.monday.com/forms/embed/7d2a1baf81662443852a38886ac80dd4?r=use1',
    height: '1100px'
  },
  'aid-application': {
    title: 'Apply for Financial Assistance',
    subtitle: 'Complete this form to apply for financial assistance during your child\'s cancer treatment.',
    src: 'https://forms.monday.com/forms/embed/972de98e599d383218e348dd923eec38?r=use1',
    height: '2500px'
  }
}

interface FormModalContextType {
  isOpen: boolean
  formType: FormType | null
  openModal: (type: FormType) => void
  closeModal: () => void
}

const FormModalContext = createContext<FormModalContextType | undefined>(undefined)

export function FormModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [formType, setFormType] = useState<FormType | null>(null)

  const openModal = (type: FormType) => {
    setFormType(type)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setFormType(null)
  }

  return (
    <FormModalContext.Provider
      value={{
        isOpen,
        formType,
        openModal,
        closeModal
      }}
    >
      {children}
    </FormModalContext.Provider>
  )
}

export function useFormModal() {
  const context = useContext(FormModalContext)
  if (context === undefined) {
    throw new Error('useFormModal must be used within a FormModalProvider')
  }
  return context
}

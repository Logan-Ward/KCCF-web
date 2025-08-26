"use client"

import PageHeader from '@/components/PageHeader';
import { useState } from 'react';

export default function Camp() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeForm, setActiveForm] = useState<'camper' | 'counselor'>('camper');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Prevent multiple submissions
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    // Submit the form
    const formData = new FormData(e.currentTarget);
    
    fetch('/api/submit', {
      method: 'POST',
      body: formData
    }).then(response => {
      if (response.ok) {
        window.location.href = '/camp?submitted=1';
      } else {
        window.location.href = '/camp?submitted=0';
      }
    }).catch((error) => {
      console.error('Form submission error:', error);
      window.location.href = '/camp?submitted=0';
    }).finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <PageHeader 
        title="Camp"
        subtitle="Join us for an unforgettable camp experience designed for children with cancer and their families."
      />

      {/* About Camp Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-violet-700 dark:text-violet-400 mb-6">KCCF Camp Experience</h2>
            <p className="text-lg text-violet-600 dark:text-violet-300 max-w-3xl mx-auto">
              Our camp provides a safe, supportive environment where children with cancer can have fun, 
              make friends, and create lasting memories. Whether you're a camper or want to join as a counselor, 
              we welcome you to be part of this special experience.
            </p>
          </div>

          {/* Camp Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-saffron-100 dark:bg-saffron-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🏕️</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 dark:text-violet-400 mb-3">Safe Environment</h3>
              <p className="text-violet-600 dark:text-violet-300">
                Medical staff on-site, accessible facilities, and activities designed for all abilities.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-fandango-100 dark:bg-fandango-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 dark:text-violet-400 mb-3">Community Support</h3>
              <p className="text-violet-600 dark:text-violet-300">
                Connect with other families who understand the journey and build lasting friendships.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎉</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 dark:text-violet-400 mb-3">Fun Activities</h3>
              <p className="text-violet-600 dark:text-violet-300">
                Arts & crafts, outdoor adventures, games, and special events for all ages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Selection */}
      <section className="py-16 bg-platinum-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-violet-700 dark:text-violet-400 mb-12">Join Our Camp</h2>
          
          {/* Form Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-white dark:bg-gray-700 rounded-lg p-1 shadow-lg">
              <button
                onClick={() => setActiveForm('camper')}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                  activeForm === 'camper'
                    ? 'bg-violet-600 dark:bg-violet-500 text-white shadow-md'
                    : 'text-violet-600 dark:text-violet-300 hover:bg-violet-50 dark:hover:bg-gray-600'
                }`}
              >
                Join as a Camper
              </button>
              <button
                onClick={() => setActiveForm('counselor')}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                  activeForm === 'counselor'
                    ? 'bg-violet-600 dark:bg-violet-500 text-white shadow-md'
                    : 'text-violet-600 dark:text-violet-300 hover:bg-violet-50 dark:hover:bg-gray-600'
                }`}
              >
                Join as a Counselor
              </button>
            </div>
          </div>

          {/* Camper Form */}
          {activeForm === 'camper' && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-violet-700 dark:text-violet-400 mb-6 text-center">Camper Registration</h3>
              <p className="text-violet-600 dark:text-violet-300 mb-8 text-center">
                Register your child for our upcoming camp session. We'll contact you with more details and confirm your spot.
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <input type="hidden" name="formType" value="camp_camper" />
                <input type="hidden" name="pagePath" value="/camp" />

                {/* Parent/Guardian Information */}
                <div className="border-b border-violet-200 dark:border-violet-700 pb-6">
                  <h4 className="text-lg font-bold text-violet-700 dark:text-violet-400 mb-4">Parent/Guardian Information</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="parentFirstName" className="block text-sm font-medium text-violet-700 dark:text-violet-300 mb-2">
                        Parent First Name *
                      </label>
                      <input
                        type="text"
                        id="parentFirstName"
                        name="parentFirstName"
                        required
                        className="w-full px-4 py-3 border border-violet-300 dark:border-violet-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 dark:focus:ring-saffron-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="parentLastName" className="block text-sm font-medium text-violet-700 dark:text-violet-300 mb-2">
                        Parent Last Name *
                      </label>
                      <input
                        type="text"
                        id="parentLastName"
                        name="parentLastName"
                        required
                        className="w-full px-4 py-3 border border-violet-300 dark:border-violet-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 dark:focus:ring-saffron-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label htmlFor="parentEmail" className="block text-sm font-medium text-violet-700 dark:text-violet-300 mb-2">
                        Parent Email *
                      </label>
                      <input
                        type="email"
                        id="parentEmail"
                        name="parentEmail"
                        required
                        className="w-full px-4 py-3 border border-violet-300 dark:border-violet-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 dark:focus:ring-saffron-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="parentPhone" className="block text-sm font-medium text-violet-700 dark:text-violet-300 mb-2">
                        Parent Phone *
                      </label>
                      <input
                        type="tel"
                        id="parentPhone"
                        name="parentPhone"
                        required
                        className="w-full px-4 py-3 border border-violet-300 dark:border-violet-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 dark:focus:ring-saffron-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Camper Information */}
                <div className="border-b border-violet-200 dark:border-violet-700 pb-6">
                  <h4 className="text-lg font-bold text-violet-700 dark:text-violet-400 mb-4">Camper Information</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="camperFirstName" className="block text-sm font-medium text-violet-700 dark:text-violet-300 mb-2">
                        Camper First Name *
                      </label>
                      <input
                        type="text"
                        id="camperFirstName"
                        name="camperFirstName"
                        required
                        className="w-full px-4 py-3 border border-violet-300 dark:border-violet-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 dark:focus:ring-saffron-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="camperLastName" className="block text-sm font-medium text-violet-700 dark:text-violet-300 mb-2">
                        Camper Last Name *
                      </label>
                      <input
                        type="text"
                        id="camperLastName"
                        name="camperLastName"
                        required
                        className="w-full px-4 py-3 border border-violet-300 dark:border-violet-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 dark:focus:ring-saffron-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label htmlFor="camperAge" className="block text-sm font-medium text-violet-700 dark:text-violet-300 mb-2">
                        Camper Age *
                      </label>
                      <input
                        type="number"
                        id="camperAge"
                        name="camperAge"
                        min="0"
                        max="18"
                        required
                        className="w-full px-4 py-3 border border-violet-300 dark:border-violet-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 dark:focus:ring-saffron-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="diagnosis" className="block text-sm font-medium text-violet-700 dark:text-violet-300 mb-2">
                        Cancer Diagnosis
                      </label>
                      <input
                        type="text"
                        id="diagnosis"
                        name="diagnosis"
                        className="w-full px-4 py-3 border border-violet-300 dark:border-violet-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 dark:focus:ring-saffron-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="medicalNeeds" className="block text-sm font-medium text-violet-700 dark:text-violet-300 mb-2">
                      Medical Needs/Special Requirements
                    </label>
                    <textarea
                      id="medicalNeeds"
                      name="medicalNeeds"
                      rows={3}
                      placeholder="Please describe any medical needs, dietary restrictions, or special requirements..."
                      className="w-full px-4 py-3 border border-violet-300 dark:border-violet-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 dark:focus:ring-saffron-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    ></textarea>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label htmlFor="additionalInfo" className="block text-sm font-medium text-violet-700 dark:text-violet-300 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    rows={4}
                    placeholder="Any other information you'd like us to know..."
                    className="w-full px-4 py-3 border border-violet-300 dark:border-violet-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 dark:focus:ring-saffron-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors duration-200 cursor-pointer flex items-center justify-center ${
                    isSubmitting 
                      ? 'bg-gray-400 dark:bg-gray-600 text-gray-600 dark:text-gray-300 cursor-not-allowed' 
                      : 'bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Submit Camper Registration'
                  )}
                </button>
              </form>
            </div>
          )}

          {/* Counselor Form */}
          {activeForm === 'counselor' && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-violet-700 dark:text-violet-400 mb-6 text-center">Counselor Application</h3>
              <p className="text-violet-600 dark:text-violet-300 mb-8 text-center">
                Join our team of dedicated counselors and help create an amazing camp experience for children with cancer.
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <input type="hidden" name="formType" value="camp_counselor" />
                <input type="hidden" name="pagePath" value="/camp" />

                {/* Personal Information */}
                <div className="border-b border-violet-200 dark:border-violet-700 pb-6">
                  <h4 className="text-lg font-bold text-violet-700 dark:text-violet-400 mb-4">Personal Information</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="counselorFirstName" className="block text-sm font-medium text-violet-700 dark:text-violet-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="counselorFirstName"
                        name="counselorFirstName"
                        required
                        className="w-full px-4 py-3 border border-violet-300 dark:border-violet-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 dark:focus:ring-saffron-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="counselorLastName" className="block text-sm font-medium text-violet-700 dark:text-violet-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="counselorLastName"
                        name="counselorLastName"
                        required
                        className="w-full px-4 py-3 border border-violet-300 dark:border-violet-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 dark:focus:ring-saffron-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label htmlFor="counselorEmail" className="block text-sm font-medium text-violet-700 dark:text-violet-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="counselorEmail"
                        name="counselorEmail"
                        required
                        className="w-full px-4 py-3 border border-violet-300 dark:border-violet-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 dark:focus:ring-saffron-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="counselorPhone" className="block text-sm font-medium text-violet-700 dark:text-violet-300 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="counselorPhone"
                        name="counselorPhone"
                        required
                        className="w-full px-4 py-3 border border-violet-300 dark:border-violet-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 dark:focus:ring-saffron-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="counselorAddress" className="block text-sm font-medium text-violet-700 dark:text-violet-300 mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      id="counselorAddress"
                      name="counselorAddress"
                      className="w-full px-4 py-3 border border-violet-300 dark:border-violet-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 dark:focus:ring-saffron-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>

                {/* Experience & Qualifications */}
                <div className="border-b border-violet-200 dark:border-violet-700 pb-6">
                  <h4 className="text-lg font-bold text-violet-700 dark:text-violet-400 mb-4">Experience & Qualifications</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="age" className="block text-sm font-medium text-violet-700 dark:text-violet-300 mb-2">
                        Age *
                      </label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        min="18"
                        required
                        className="w-full px-4 py-3 border border-violet-300 dark:border-violet-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 dark:focus:ring-saffron-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="occupation" className="block text-sm font-medium text-violet-700 dark:text-violet-300 mb-2">
                        Occupation/Student Status
                      </label>
                      <input
                        type="text"
                        id="occupation"
                        name="occupation"
                        className="w-full px-4 py-3 border border-violet-300 dark:border-violet-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 dark:focus:ring-saffron-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="experience" className="block text-sm font-medium text-violet-700 dark:text-violet-300 mb-2">
                      Relevant Experience *
                    </label>
                    <textarea
                      id="experience"
                      name="experience"
                      rows={4}
                      placeholder="Describe your experience working with children, medical settings, or camp environments..."
                      required
                      className="w-full px-4 py-3 border border-violet-300 dark:border-violet-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 dark:focus:ring-saffron-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    ></textarea>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="certifications" className="block text-sm font-medium text-violet-700 dark:text-violet-300 mb-2">
                      Certifications & Training
                    </label>
                    <textarea
                      id="certifications"
                      name="certifications"
                      rows={3}
                      placeholder="First Aid, CPR, medical training, camp counseling certifications, etc."
                      className="w-full px-4 py-3 border border-violet-300 dark:border-violet-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 dark:focus:ring-saffron-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    ></textarea>
                  </div>
                </div>

                {/* Availability & Preferences */}
                <div>
                  <h4 className="text-lg font-bold text-violet-700 dark:text-violet-400 mb-4">Availability & Preferences</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="availability" className="block text-sm font-medium text-violet-700 dark:text-violet-300 mb-2">
                        Availability *
                      </label>
                      <select
                        id="availability"
                        name="availability"
                        required
                        className="w-full px-4 py-3 border border-violet-300 dark:border-violet-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 dark:focus:ring-saffron-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                      >
                        <option value="">Select availability</option>
                        <option value="fullTime">Full-time during camp session</option>
                        <option value="partTime">Part-time during camp session</option>
                        <option value="weekends">Weekends only</option>
                        <option value="flexible">Flexible schedule</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="preferredAge" className="block text-sm font-medium text-violet-700 dark:text-violet-300 mb-2">
                        Preferred Age Group
                      </label>
                      <select
                        id="preferredAge"
                        name="preferredAge"
                        className="w-full px-4 py-3 border border-violet-300 dark:border-violet-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 dark:focus:ring-saffron-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                      >
                        <option value="">No preference</option>
                        <option value="younger">Younger children (5-10)</option>
                        <option value="older">Older children (11-18)</option>
                        <option value="all">All ages</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="motivation" className="block text-sm font-medium text-violet-700 dark:text-violet-300 mb-2">
                      Why do you want to be a camp counselor? *
                    </label>
                    <textarea
                      id="motivation"
                      name="motivation"
                      rows={4}
                      placeholder="Tell us about your motivation and what you hope to contribute..."
                      required
                      className="w-full px-4 py-3 border border-violet-300 dark:border-violet-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 dark:focus:ring-saffron-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors duration-200 cursor-pointer flex items-center justify-center ${
                    isSubmitting 
                      ? 'bg-gray-400 dark:bg-gray-600 text-gray-600 dark:text-gray-300 cursor-not-allowed' 
                      : 'bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Submit Counselor Application'
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Camp Information */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-violet-700 dark:text-violet-400 mb-12">Camp Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-violet-700 dark:text-violet-400 mb-4">For Campers</h3>
              <ul className="space-y-3 text-violet-600 dark:text-violet-300">
                <li className="flex items-start">
                  <span className="text-orange-500 dark:text-orange-400 mr-2">•</span>
                  Medical staff available 24/7
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 dark:text-orange-400 mr-2">•</span>
                  All activities adapted for various abilities
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 dark:text-orange-400 mr-2">•</span>
                  Nutritious meals and snacks provided
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 dark:text-orange-400 mr-2">•</span>
                  Transportation available if needed
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 dark:text-orange-400 mr-2">•</span>
                  No cost to families
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-violet-700 dark:text-violet-400 mb-4">For Counselors</h3>
              <ul className="space-y-3 text-violet-600 dark:text-violet-300">
                <li className="flex items-start">
                  <span className="text-saffron-500 dark:text-saffron-400 mr-2">•</span>
                  Training and orientation provided
                </li>
                <li className="flex items-start">
                  <span className="text-saffron-500 dark:text-saffron-400 mr-2">•</span>
                  Room and board during camp
                </li>
                <li className="flex items-start">
                  <span className="text-saffron-500 dark:text-saffron-400 mr-2">•</span>
                  Valuable experience and references
                </li>
                <li className="flex items-start">
                  <span className="text-saffron-500 dark:text-saffron-400 mr-2">•</span>
                  Make a difference in children's lives
                </li>
                <li className="flex items-start">
                  <span className="text-saffron-500 dark:text-saffron-400 mr-2">•</span>
                  Join a supportive community
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

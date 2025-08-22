import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: "Apply for Aid - Koenig Childhood Cancer Foundation",
  description: "Apply for financial assistance to help with medical bills, transportation, lodging, and other expenses during your child's cancer treatment.",
  keywords: ["cancer aid", "financial assistance", "medical bills", "cancer treatment", "family support", "childhood cancer help"],
  openGraph: {
    title: "Apply for Aid - Koenig Childhood Cancer Foundation",
    description: "Apply for financial assistance to help with medical bills, transportation, lodging, and other expenses during your child's cancer treatment.",
    type: "website",
    url: process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/aid` : "https://thekccf.org/aid",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Aid() {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Apply For Aid"
        subtitle="We can help with emergency medical expenses during your child's cancer treatment, such as medical bills, transportation, lodging, food, and more."
      />

      {/* About Our Aid Program */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-violet-700 mb-8 text-center">Family Assistance Program</h2>
            
            <div className="prose prose-lg max-w-none text-violet-700">
              <p className="text-xl leading-relaxed mb-8">
                When a child is diagnosed with cancer, families face not only emotional challenges but also 
                significant financial burdens. Our Family Assistance Program is here to help.
              </p>

              <p className="mb-6">
                We understand that medical bills, transportation costs, lodging, and other expenses can 
                quickly become overwhelming. Our goal is to provide financial relief so families can focus 
                on what matters most - their child's recovery.
              </p>

              <div className="bg-orange-50 rounded-lg p-6 my-8">
                <h3 className="text-xl font-bold text-violet-700 mb-4">What We Cover</h3>
                <ul className="space-y-2 text-violet-600">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Medical bills and treatment costs
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Transportation to and from treatment
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Lodging near treatment centers
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Food and basic necessities
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Childcare for siblings
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Other essential expenses
                  </li>
                </ul>
              </div>

              <div className="bg-saffron-50 rounded-lg p-6 my-8">
                <h3 className="text-xl font-bold text-violet-700 mb-4">Eligibility</h3>
                <p className="text-violet-600 mb-4">
                  To be eligible for assistance, families must:
                </p>
                <ul className="space-y-2 text-violet-600">
                  <li className="flex items-start">
                    <span className="text-saffron-500 mr-2">•</span>
                    Have a child under 18 diagnosed with cancer
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-500 mr-2">•</span>
                    Demonstrate financial need
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-500 mr-2">•</span>
                    Be receiving treatment at an accredited medical facility
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-500 mr-2">•</span>
                    Complete the application process
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-platinum-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-violet-700 mb-12">Application Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-orange-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 mb-4">Apply</h3>
              <p className="text-violet-600">
                Complete the online application form with your family's information and needs.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-saffron-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 mb-4">Review</h3>
              <p className="text-violet-600">
                Our team reviews your application and may request additional documentation.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-fandango-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 mb-4">Approval</h3>
              <p className="text-violet-600">
                Once approved, we work with you to determine the best way to provide assistance.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-violet-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 mb-4">Support</h3>
              <p className="text-violet-600">
                We provide ongoing support and may offer additional assistance as needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-violet-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Apply for Financial Assistance</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 text-violet-900">
            <p className="text-lg text-violet-700 mb-8 text-center">
              Please complete this form to apply for financial assistance. All information will be kept confidential.
            </p>

            <form className="space-y-6">
              {/* Primary Contact Information */}
              <div className="border-b border-violet-200 pb-6">
                <h3 className="text-xl font-bold text-violet-700 mb-4">Primary Contact Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-violet-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-violet-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-violet-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-violet-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="address" className="block text-sm font-medium text-violet-700 mb-2">
                    Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Child Information */}
              <div className="border-b border-violet-200 pb-6">
                <h3 className="text-xl font-bold text-violet-700 mb-4">Child Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="childName" className="block text-sm font-medium text-violet-700 mb-2">
                      Child's Name *
                    </label>
                    <input
                      type="text"
                      id="childName"
                      name="childName"
                      required
                      className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="childAge" className="block text-sm font-medium text-violet-700 mb-2">
                      Child's Age *
                    </label>
                    <input
                      type="number"
                      id="childAge"
                      name="childAge"
                      min="0"
                      max="18"
                      required
                      className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label htmlFor="diagnosis" className="block text-sm font-medium text-violet-700 mb-2">
                      Cancer Diagnosis *
                    </label>
                    <input
                      type="text"
                      id="diagnosis"
                      name="diagnosis"
                      required
                      className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="diagnosisDate" className="block text-sm font-medium text-violet-700 mb-2">
                      Diagnosis Date *
                    </label>
                    <input
                      type="date"
                      id="diagnosisDate"
                      name="diagnosisDate"
                      required
                      className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="treatmentCenter" className="block text-sm font-medium text-violet-700 mb-2">
                    Treatment Center/Hospital *
                  </label>
                  <input
                    type="text"
                    id="treatmentCenter"
                    name="treatmentCenter"
                    required
                    className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Financial Need */}
              <div className="border-b border-violet-200 pb-6">
                <h3 className="text-xl font-bold text-violet-700 mb-4">Financial Need</h3>
                
                <div>
                  <label htmlFor="assistanceType" className="block text-sm font-medium text-violet-700 mb-2">
                    Type of Assistance Needed *
                  </label>
                  <select
                    id="assistanceType"
                    name="assistanceType"
                    required
                    className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                  >
                    <option value="">Select type of assistance</option>
                    <option value="medical">Medical Bills</option>
                    <option value="transportation">Transportation</option>
                    <option value="lodging">Lodging</option>
                    <option value="food">Food & Basic Necessities</option>
                    <option value="childcare">Childcare</option>
                    <option value="multiple">Multiple Needs</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mt-6">
                  <label htmlFor="amountNeeded" className="block text-sm font-medium text-violet-700 mb-2">
                    Estimated Amount Needed
                  </label>
                  <input
                    type="number"
                    id="amountNeeded"
                    name="amountNeeded"
                    placeholder="$"
                    className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                  />
                </div>

                <div className="mt-6">
                  <label htmlFor="financialSituation" className="block text-sm font-medium text-violet-700 mb-2">
                    Describe Your Financial Situation *
                  </label>
                  <textarea
                    id="financialSituation"
                    name="financialSituation"
                    rows={4}
                    required
                    placeholder="Please describe your current financial situation and why you need assistance..."
                    className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                  ></textarea>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-xl font-bold text-violet-700 mb-4">Additional Information</h3>
                
                <div>
                  <label htmlFor="additionalInfo" className="block text-sm font-medium text-violet-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    rows={4}
                    placeholder="Any additional information that might help us understand your situation..."
                    className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                  ></textarea>
                </div>

                <div className="flex items-start mt-6">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="mt-1 h-4 w-4 text-violet-600 focus:ring-saffron-400 border-violet-300 rounded"
                  />
                  <label htmlFor="consent" className="ml-2 block text-sm text-violet-600">
                    I consent to KCCF contacting me regarding this application and understand that all information provided will be kept confidential. *
                  </label>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-violet-700 mb-6">Need Immediate Help?</h2>
          <p className="text-lg text-violet-600 mb-8">
            If you need immediate assistance, please call us directly at 
            <span className="font-semibold text-orange-600"> +1 (917) 765-6272</span> or email us at 
            <span className="font-semibold text-orange-600"> join@thekccf.org</span> with "URGENT" in the subject line.
          </p>
          <p className="text-violet-600">
            We strive to respond to all urgent requests within 24 hours.
          </p>
        </div>
      </section>
    </div>
  )
}

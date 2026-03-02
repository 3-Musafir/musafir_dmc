'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { MessageCircle, Download } from 'lucide-react'
import { toast } from 'sonner'

interface FormsSectionProps {
  activeForm: 'partners' | 'inquiry' | null
  setActiveForm: (form: 'partners' | 'inquiry' | null) => void
}

export default function FormsSection({ activeForm, setActiveForm }: FormsSectionProps) {
  const [partnerForm, setPartnerForm] = useState({
    companyName: '',
    website: '',
    linkedin: '',
    country: '',
    services: '',
  })

  const [inquiryForm, setInquiryForm] = useState({
    companyName: '',
    link: '',
    country: '',
    groupSize: '',
    dates: '',
    program: '',
    budget: '',
    email: '',
  })

  const [partnerSubmitting, setPartnerSubmitting] = useState(false)
  const [inquirySubmitting, setInquirySubmitting] = useState(false)
  const [inquirySuccess, setInquirySuccess] = useState(false)

  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!partnerForm.companyName || !partnerForm.country) {
      toast.error('Please fill in all required fields')
      return
    }

    setPartnerSubmitting(true)
    try {
      // TODO: Send to API endpoint
      // const response = await fetch('/api/partnership-inquiry', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(partnerForm),
      // })

      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast.success('Partnership request sent! We respond within 24–48 hours.')
      setPartnerForm({ companyName: '', website: '', linkedin: '', country: '', services: '' })
      setActiveForm(null)
    } catch (error) {
      toast.error('Failed to send request. Please try again.')
    } finally {
      setPartnerSubmitting(false)
    }
  }

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!inquiryForm.companyName || !inquiryForm.email || !inquiryForm.groupSize) {
      toast.error('Please fill in all required fields')
      return
    }

    setInquirySubmitting(true)
    try {
      // TODO: Send to API endpoint
      // const response = await fetch('/api/urgent-inquiry', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     ...inquiryForm,
      //     recipientEmail: 'hello@3musafir.com'
      //   }),
      // })

      await new Promise((resolve) => setTimeout(resolve, 1000))

      setInquirySuccess(true)
      setInquiryForm({
        companyName: '',
        link: '',
        country: '',
        groupSize: '',
        dates: '',
        program: '',
        budget: '',
        email: '',
      })
    } catch (error) {
      toast.error('Failed to send inquiry. Please try again.')
    } finally {
      setInquirySubmitting(false)
    }
  }

  return (
    <section id="forms-section" className="py-16 md:py-24 px-4 md:px-6 bg-[#FFFBFA]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-[#2B2D42] mb-12 text-center">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Become Partners Form */}
          <div className="bg-white rounded-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-black text-[#2B2D42] mb-2">Become Partners</h3>
            <p className="text-sm text-[#2B2D42]/60 mb-6">
              We respond within 24–48 hours.
            </p>

            <form onSubmit={handlePartnerSubmit} className="space-y-4">
              <div>
                <Label htmlFor="partner-company" className="text-sm font-semibold text-[#2B2D42]">
                  Company Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="partner-company"
                  type="text"
                  placeholder="Your company name"
                  value={partnerForm.companyName}
                  onChange={(e) => setPartnerForm({ ...partnerForm, companyName: e.target.value })}
                  className="mt-1 border-gray-300 focus:border-[#FA3E01]"
                  required
                />
              </div>

              <div>
                <Label htmlFor="partner-website" className="text-sm font-semibold text-[#2B2D42]">
                  Website / Link
                </Label>
                <Input
                  id="partner-website"
                  type="url"
                  placeholder="https://yourcompany.com"
                  value={partnerForm.website}
                  onChange={(e) => setPartnerForm({ ...partnerForm, website: e.target.value })}
                  className="mt-1 border-gray-300 focus:border-[#FA3E01]"
                />
              </div>

              <div>
                <Label htmlFor="partner-linkedin" className="text-sm font-semibold text-[#2B2D42]">
                  LinkedIn / Link
                </Label>
                <Input
                  id="partner-linkedin"
                  type="url"
                  placeholder="https://linkedin.com/company/..."
                  value={partnerForm.linkedin}
                  onChange={(e) => setPartnerForm({ ...partnerForm, linkedin: e.target.value })}
                  className="mt-1 border-gray-300 focus:border-[#FA3E01]"
                />
              </div>

              <div>
                <Label htmlFor="partner-country" className="text-sm font-semibold text-[#2B2D42]">
                  Country <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="partner-country"
                  type="text"
                  placeholder="e.g., United States"
                  value={partnerForm.country}
                  onChange={(e) => setPartnerForm({ ...partnerForm, country: e.target.value })}
                  className="mt-1 border-gray-300 focus:border-[#FA3E01]"
                  required
                />
              </div>

              <div>
                <Label htmlFor="partner-services" className="text-sm font-semibold text-[#2B2D42]">
                  Services Needed
                </Label>
                <Textarea
                  id="partner-services"
                  placeholder="e.g., Corporate retreats, MICE, group tours"
                  value={partnerForm.services}
                  onChange={(e) => setPartnerForm({ ...partnerForm, services: e.target.value })}
                  className="mt-1 border-gray-300 focus:border-[#FA3E01] resize-none"
                  rows={3}
                />
              </div>

              <Button
                type="submit"
                disabled={partnerSubmitting}
                className="w-full bg-[#FA3E01] hover:bg-[#E63A00] text-white font-semibold"
              >
                {partnerSubmitting ? 'Sending...' : 'Submit Partnership Request'}
              </Button>
            </form>
          </div>

          {/* Urgent Inquiry Form / Success State */}
          <div className="bg-white rounded-xl p-8 border border-gray-200">
            {!inquirySuccess ? (
              <>
                <h3 className="text-2xl font-black text-[#2B2D42] mb-2">Urgent Inquiry</h3>
                <p className="text-sm text-[#2B2D42]/60 mb-6">
                  Send to hello@3musafir.com
                </p>

                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="inquiry-company" className="text-sm font-semibold text-[#2B2D42]">
                      Company Name + Link <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="inquiry-company"
                      type="text"
                      placeholder="Your company"
                      value={inquiryForm.companyName}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, companyName: e.target.value })}
                      className="mt-1 border-gray-300 focus:border-[#FA3E01]"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="inquiry-link" className="text-sm font-semibold text-[#2B2D42]">
                      Website Link
                    </Label>
                    <Input
                      id="inquiry-link"
                      type="url"
                      placeholder="https://..."
                      value={inquiryForm.link}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, link: e.target.value })}
                      className="mt-1 border-gray-300 focus:border-[#FA3E01]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="inquiry-country" className="text-sm font-semibold text-[#2B2D42]">
                        Country <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="inquiry-country"
                        type="text"
                        placeholder="Country"
                        value={inquiryForm.country}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, country: e.target.value })}
                        className="mt-1 border-gray-300 focus:border-[#FA3E01]"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="inquiry-size" className="text-sm font-semibold text-[#2B2D42]">
                        Group Size <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="inquiry-size"
                        type="text"
                        placeholder="e.g., 30-50"
                        value={inquiryForm.groupSize}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, groupSize: e.target.value })}
                        className="mt-1 border-gray-300 focus:border-[#FA3E01]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="inquiry-dates" className="text-sm font-semibold text-[#2B2D42]">
                      Tentative Dates
                    </Label>
                    <Input
                      id="inquiry-dates"
                      type="text"
                      placeholder="e.g., March 2026"
                      value={inquiryForm.dates}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, dates: e.target.value })}
                      className="mt-1 border-gray-300 focus:border-[#FA3E01]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="inquiry-program" className="text-sm font-semibold text-[#2B2D42]">
                      Type of Program
                    </Label>
                    <Input
                      id="inquiry-program"
                      type="text"
                      placeholder="e.g., Corporate retreat, cultural tour"
                      value={inquiryForm.program}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, program: e.target.value })}
                      className="mt-1 border-gray-300 focus:border-[#FA3E01]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="inquiry-budget" className="text-sm font-semibold text-[#2B2D42]">
                      Budget Range
                    </Label>
                    <Input
                      id="inquiry-budget"
                      type="text"
                      placeholder="USD or PKR"
                      value={inquiryForm.budget}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, budget: e.target.value })}
                      className="mt-1 border-gray-300 focus:border-[#FA3E01]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="inquiry-email" className="text-sm font-semibold text-[#2B2D42]">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="inquiry-email"
                      type="email"
                      placeholder="your@email.com"
                      value={inquiryForm.email}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                      className="mt-1 border-gray-300 focus:border-[#FA3E01]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={inquirySubmitting}
                    className="w-full bg-[#FA3E01] hover:bg-[#E63A00] text-white font-semibold"
                  >
                    {inquirySubmitting ? 'Sending...' : 'Send Urgent Inquiry'}
                  </Button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-[#FA3E01]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-[#FA3E01]" />
                </div>
                <h3 className="text-2xl font-black text-[#2B2D42] mb-2">Inquiry Received</h3>
                <p className="text-[#2B2D42]/70 mb-6">
                  Your inquiry has been sent to <span className="font-bold">hello@3musafir.com</span>
                </p>
                <p className="text-sm text-[#2B2D42]/60 mb-8">
                  Our team typically responds within 2–4 hours. You can also reach us directly on WhatsApp for urgent matters.
                </p>

                <div className="space-y-3">
                  <Button
                    className="w-full bg-[#25D366] hover:bg-[#1FA854] text-white font-semibold flex items-center justify-center gap-2"
                    onClick={() => window.open('https://wa.me/92XXXXXXXXX?text=Hi%203Musafir%20Travels', '_blank')}
                  >
                    <MessageCircle size={18} />
                    Chat on WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-[#2B2D42] text-[#2B2D42] hover:bg-[#2B2D42] hover:text-white flex items-center justify-center gap-2"
                    onClick={() => {
                      const link = document.createElement('a')
                      link.href = '#'
                      link.download = '3Musafir-DMC-Brochure.pdf'
                      link.click()
                    }}
                  >
                    <Download size={18} />
                    Download Brochure
                  </Button>
                </div>

                <Button
                  variant="ghost"
                  className="w-full mt-3 text-[#2B2D42]"
                  onClick={() => {
                    setInquirySuccess(false)
                    setActiveForm(null)
                  }}
                >
                  Submit Another Inquiry
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

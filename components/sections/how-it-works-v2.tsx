'use client'

import { ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'Share your travel dates, group size, and preferences. We provide a detailed proposal and costing.',
  },
  {
    number: '02',
    title: 'Custom Itinerary',
    description: 'Our team designs a personalized itinerary matching your objectives and budget.',
  },
  {
    number: '03',
    title: 'Confirmation & Booking',
    description: 'Finalize details, sign agreements, and complete payments. We handle all confirmations.',
  },
  {
    number: '04',
    title: 'Pre-Trip Support',
    description: 'Receive detailed briefing documents, visa assistance, and final confirmations.',
  },
  {
    number: '05',
    title: 'On-Ground Operations',
    description: 'Our dedicated team manages all logistics, coordination, and support during the trip.',
  },
  {
    number: '06',
    title: 'Post-Trip Follow-up',
    description: 'Feedback collection and billing reconciliation. We maintain relationships for future trips.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">Our Process</p>
          <h2 className="text-4xl md:text-5xl font-black text-balance">
            How We Work With You
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Step Card */}
              <div className="group">
                <div className="mb-4 flex items-end gap-3">
                  <div className="text-5xl md:text-6xl font-black text-accent/20 leading-none">
                    {step.number}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-0 -right-4 text-accent/30">
                      <ArrowRight size={20} className="rotate-0" />
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{step.description}</p>
              </div>

              {/* Vertical connector for mobile */}
              {i < steps.length - 1 && (
                <div className="lg:hidden absolute -bottom-8 left-0 right-0 flex justify-center">
                  <div className="w-px h-8 bg-gradient-to-b from-accent/30 to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

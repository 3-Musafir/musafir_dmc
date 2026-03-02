'use client'

import { Check } from 'lucide-react'

const usps = [
  {
    title: 'Embedded Local Network',
    description: 'Direct relationships with 130+ verified vendors, hotels, and service providers across Pakistan.',
  },
  {
    title: 'Institutional Credibility',
    description: 'Registered Private Limited company with formal contracts, SLAs, and government liaisons.',
  },
  {
    title: '24/7 On-Ground Support',
    description: 'Dedicated Pakistani team available round-the-clock during all operations.',
  },
  {
    title: 'Cost-Efficient Operations',
    description: 'Leverage local expertise to deliver premium experiences at competitive pricing.',
  },
  {
    title: 'Transparent Pricing',
    description: 'Clear billing in both PKR and USD with detailed itinerary costing breakdowns.',
  },
  {
    title: 'Proven Track Record',
    description: '3,500+ successfully executed travelers with zero major incident history.',
  },
]

export default function USPs() {
  return (
    <section id="usps" className="py-16 md:py-24 px-4 md:px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-black text-balance max-w-3xl">
            Why We're Different From Other DMCs
          </h2>
        </div>

        {/* USPs Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {usps.map((usp, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                  <Check size={16} className="text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{usp.title}</h3>
                <p className="text-foreground/70">{usp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

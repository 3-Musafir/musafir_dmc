'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

interface PricingProps {
  onCTAClick: (form: 'inquiry') => void
}

export default function Pricing({ onCTAClick }: PricingProps) {
  const pricingOptions = [
    {
      title: 'Corporate Retreat (3N/4D)',
      pkr: 'PKR 65,000–120,000',
      usd: 'USD 230–420',
      unit: 'per person',
    },
    {
      title: 'Cultural Expedition (5N/6D)',
      pkr: 'PKR 95,000–180,000',
      usd: 'USD 340–640',
      unit: 'per person',
    },
  ]

  const breakdowns = [
    { title: 'Accommodation', content: 'Premium 3–5 star hotels, homestays, or boutique properties based on preference.' },
    { title: 'Transport', content: 'Vehicle hire, internal flights, train bookings, and airport transfers.' },
    { title: 'Experiences', content: 'Curated activities, permits, and guided tours.' },
    { title: 'Meals', content: 'Breakfast included; lunch/dinner at partner restaurants.' },
    { title: 'Operations & Coordination', content: 'Dedicated account manager, 24/7 support, and contingency planning.' },
  ]

  return (
    <section id="pricing" className="py-16 md:py-24 px-4 md:px-6 bg-[#FFFBFA]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-[#2B2D42] mb-4">
          Clear, Structured Pricing
        </h2>
        <p className="text-lg text-[#2B2D42]/70 mb-12 max-w-2xl">
          Transparent billing in PKR or USD with no hidden costs.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {pricingOptions.map((option, i) => (
            <Card key={i} className="bg-white border border-gray-200 p-8">
              <h3 className="font-black text-[#2B2D42] text-xl mb-6">{option.title}</h3>
              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-1">Pakistani Rupees</p>
                  <p className="text-2xl font-black text-[#FA3E01]">{option.pkr}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide mb-1">US Dollars</p>
                  <p className="text-2xl font-black text-[#FA3E01]">{option.usd}</p>
                </div>
                <p className="text-xs text-gray-600 font-medium">{option.unit}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-8 mb-12">
          <h3 className="font-black text-[#2B2D42] text-lg mb-6">Pricing Breakdown</h3>
          <Accordion type="single" collapsible className="w-full">
            {breakdowns.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-gray-200">
                <AccordionTrigger className="font-semibold text-[#2B2D42] hover:text-[#FA3E01]">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-[#2B2D42]/70">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <Button
          size="lg"
          className="bg-[#FA3E01] hover:bg-[#E63A00] text-white font-semibold"
          onClick={() => onCTAClick('inquiry')}
        >
          Get Custom Quote in 24 Hours
        </Button>
      </div>
    </section>
  )
}

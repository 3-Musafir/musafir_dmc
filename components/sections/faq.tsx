'use client'

import { useEffect } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function FAQ() {
  const faqs = [
    {
      q: 'What does a DMC in Pakistan handle?',
      a: 'We manage all ground operations including accommodation, transport, activities, permits, vendor coordination, and 24/7 on-ground support. We act as your on-ground operational hub.',
    },
    {
      q: 'Can you manage corporate retreats and MICE programs?',
      a: 'Yes. We specialize in corporate offsites, conferences, incentive travel, and group programs ranging from 15 to 500+ participants across all regions of Pakistan.',
    },
    {
      q: 'Do you provide USD and PKR billing?',
      a: 'Yes. We offer transparent pricing in both US Dollars and Pakistani Rupees with no hidden costs. You choose your preferred currency.',
    },
    {
      q: 'How do permits and regional logistics work?',
      a: 'We handle all government permits, restricted area access, and bureaucratic coordination. Our network of relationships ensures faster approvals and seamless logistics across all regions.',
    },
    {
      q: 'What group sizes can you handle?',
      a: 'We manage groups from 15 to 500+ participants. For larger groups, we coordinate multiple sub-operators while maintaining quality and accountability.',
    },
    {
      q: 'How fast do you send proposals?',
      a: 'We typically deliver customized proposals within 24–48 hours of your initial inquiry. For urgent requests, we can turnaround proposals in under 12 hours.',
    },
  ]

  useEffect(() => {
    // Add FAQ Schema JSON-LD
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    })
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <section id="faq" className="py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-[#2B2D42] mb-12">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-b border-gray-200">
              <AccordionTrigger className="font-bold text-lg text-[#2B2D42] hover:text-[#FA3E01] py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-[#2B2D42]/80 leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

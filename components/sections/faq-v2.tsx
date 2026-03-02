'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What makes 3Musafir different from other DMCs?',
    answer: 'We are embedded within Pakistan\'s travel infrastructure with direct relationships with 130+ verified vendors. Our institutional credibility, 24/7 on-ground support, and proven track record of 3,500+ executed travelers set us apart.',
  },
  {
    question: 'How far in advance should we book?',
    answer: 'We recommend 4-6 weeks advance notice for optimal planning. However, we can accommodate rush bookings depending on group size and complexity. Contact us for specific timelines.',
  },
  {
    question: 'What payment options do you accept?',
    answer: 'We accept payments in both PKR and USD. Options include bank transfers, wire payments, and online payments. A 30% deposit secures your booking, with the balance due 14 days before travel.',
  },
  {
    question: 'Do you handle visas and documentation?',
    answer: 'Yes, we assist with visa guidance and coordinate with government liaisons. While we provide support, travelers are responsible for obtaining their own visas.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Cancellations made 30 days before travel receive a full refund minus processing fees. Cancellations within 30 days are non-refundable. Detailed terms are in our SLA.',
  },
  {
    question: 'Are you available for emergency requests?',
    answer: 'Absolutely. Our 24/7 support team handles all emergency requests including medical assistance, itinerary changes, and unforeseen circumstances.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">Questions?</p>
          <h2 className="text-4xl md:text-5xl font-black text-balance">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border rounded-lg px-6 data-[state=open]:border-accent/50 data-[state=open]:bg-secondary/30 transition-all"
            >
              <AccordionTrigger className="py-4 text-left font-bold hover:text-accent transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Additional Help */}
        <div className="mt-12 text-center p-6 bg-secondary/30 rounded-xl border border-border">
          <p className="text-foreground/70 mb-3">Didn't find your answer?</p>
          <p className="text-sm text-foreground/60">
            Get in touch with our team for personalized support and inquiries.
          </p>
        </div>
      </div>
    </section>
  )
}

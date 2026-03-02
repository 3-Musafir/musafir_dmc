import { Button } from '@/components/ui/button'

interface PartnershipWorkflowProps {
  onCTAClick: (form: 'partners') => void
}

export default function PartnershipWorkflow({ onCTAClick }: PartnershipWorkflowProps) {
  const steps = [
    { num: '1', title: 'Discovery Call', desc: 'Understand your needs and expectations' },
    { num: '2', title: 'Proposal (24–48 hours)', desc: 'Tailored itinerary and pricing' },
    { num: '3', title: 'Contract & Milestones', desc: 'SLA agreement with clear terms' },
    { num: '4', title: 'Pre-trip Planning', desc: 'Logistics, vendor coordination' },
    { num: '5', title: 'On-ground Execution', desc: '24/7 support and contingency response' },
    { num: '6', title: 'Post-trip Reporting', desc: 'Outcomes, feedback, and insights' },
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-[#FFFBFA]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-[#2B2D42] mb-4">
          Structured Partnership Model
        </h2>
        <p className="text-lg text-[#2B2D42]/70 mb-12 max-w-2xl">
          A proven workflow designed for predictable, professional outcomes.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, i) => (
            <div key={i} className="relative bg-white rounded-lg p-6 border border-gray-200">
              <div className="w-10 h-10 bg-[#FA3E01] rounded-full flex items-center justify-center text-white font-black text-lg mb-4">
                {step.num}
              </div>
              <h3 className="font-bold text-[#2B2D42] text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-[#2B2D42]/70">{step.desc}</p>
              
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 w-6 h-0.5 bg-gradient-to-r from-[#FA3E01] to-transparent" />
              )}
            </div>
          ))}
        </div>

        <Button
          size="lg"
          className="bg-[#FA3E01] hover:bg-[#E63A00] text-white font-semibold"
          onClick={() => onCTAClick('partners')}
        >
          Become Partners
        </Button>
      </div>
    </section>
  )
}

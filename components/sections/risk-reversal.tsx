import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'

interface RiskReversalProps {
  onCTAClick: (form: 'partners') => void
}

export default function RiskReversal({ onCTAClick }: RiskReversalProps) {
  const benefits = [
    'Written SLAs',
    'Dedicated account manager',
    'USD or PKR billing',
    'Vendor fallback matrix',
    'Clear contingency planning',
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-[#2B2D42] mb-4">
          Operational Certainty in a Complex Market
        </h2>
        <p className="text-lg text-[#2B2D42]/70 mb-12 max-w-2xl">
          Risk mitigation strategies that let you operate with confidence.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {benefits.map((benefit, i) => (
            <div key={i} className="bg-[#FFFBFA] rounded-lg p-6 border border-gray-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#FA3E01] flex-shrink-0 mt-0.5" />
              <span className="font-semibold text-[#2B2D42]">{benefit}</span>
            </div>
          ))}
        </div>

        <Button
          size="lg"
          variant="outline"
          className="border-[#2B2D42] text-[#2B2D42] hover:bg-[#2B2D42] hover:text-white font-semibold"
          onClick={() => onCTAClick('partners')}
        >
          Start With a Pilot Group
        </Button>
      </div>
    </section>
  )
}

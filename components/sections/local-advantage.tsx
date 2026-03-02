import { Button } from '@/components/ui/button'

export default function LocalAdvantage() {
  const authorityProofs = [
    '130+ verified vendors onboarded nationwide',
    '500+ curated home-based and regional experiences',
    'Direct coordination channels within government & tourism boards',
    'Strong bureaucratic and institutional relationships',
    'Member of major hotelier syndicate networks',
    'Deep hospitality & logistics leverage nationwide',
  ]

  const enablements = [
    'Faster approvals & permits',
    'Stronger rate negotiation',
    'Operational resilience',
    'Crisis responsiveness',
    'Access to complex regions',
    'Cultural depth beyond commercial tourism',
  ]

  return (
    <section id="local-advantage" className="py-16 md:py-24 px-4 md:px-6 bg-[#FFFBFA]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-[#2B2D42] mb-4">
            Embedded Inside Pakistan's Travel Infrastructure
          </h2>
          <p className="text-xl text-[#2B2D42]/70">
            Not a surface-level operator. A structurally integrated network.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Authority Proof */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-black text-[#2B2D42] mb-6">Authority Proof</h3>
            <ul className="space-y-4">
              {authorityProofs.map((proof, i) => (
                <li key={i} className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FA3E01]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#FA3E01]" />
                  </div>
                  <span className="font-medium text-[#2B2D42] leading-relaxed">{proof}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What This Enables */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-black text-[#2B2D42] mb-6">What This Enables</h3>
            <ul className="space-y-4">
              {enablements.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FA3E01]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#FA3E01]" />
                  </div>
                  <span className="font-medium text-[#2B2D42] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <Button
            variant="outline"
            className="border-[#2B2D42] text-[#2B2D42] hover:bg-[#2B2D42] hover:text-white"
          >
            Explore Our Network Model
          </Button>
        </div>
      </div>
    </section>
  )
}

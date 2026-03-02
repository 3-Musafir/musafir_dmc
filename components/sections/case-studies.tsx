import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Quote } from 'lucide-react'

export default function CaseStudies() {
  const cases = [
    {
      title: 'Corporate Offsite',
      desc: '42 pax — Hunza — 6 days',
      outcome: 'Seamless execution, 100% participant satisfaction',
      testimonial: '"Best-managed retreat we\'ve ever done. Highly professional team."',
    },
    {
      title: 'International Group',
      desc: 'Multi-city — 5–7 days',
      outcome: 'Coordinated 4 regions, flawless handoffs',
      testimonial: '"They handled complexity like it was routine. Impressive."',
    },
    {
      title: 'Delegation Support',
      desc: 'Permits + logistics coordination',
      outcome: 'All permits secured 10 days early',
      testimonial: '"Made the impossible happen. Perfect partners."',
    },
  ]

  return (
    <section id="case-studies" className="py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-[#2B2D42] mb-4">
          Executed at Scale. Trusted by Serious Clients.
        </h2>
        <p className="text-lg text-[#2B2D42]/70 mb-12 max-w-2xl">
          Real results from real partnerships.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {cases.map((caseStudy, i) => (
            <Card key={i} className="bg-[#FFFBFA] border border-gray-200 p-8 hover:shadow-sm transition-all">
              <h3 className="font-black text-[#2B2D42] text-lg mb-2">{caseStudy.title}</h3>
              <p className="text-sm text-[#2B2D42]/60 font-medium mb-4">{caseStudy.desc}</p>

              <div className="bg-white rounded-lg p-4 mb-4 border border-gray-100">
                <p className="text-sm font-semibold text-[#2B2D42]">{caseStudy.outcome}</p>
              </div>

              <div className="flex gap-2 mb-0">
                <Quote size={18} className="text-[#FA3E01] flex-shrink-0" />
                <p className="text-sm italic text-[#2B2D42]/70">{caseStudy.testimonial}</p>
              </div>
            </Card>
          ))}
        </div>

        <Button
          variant="outline"
          className="border-[#2B2D42] text-[#2B2D42] hover:bg-[#2B2D42] hover:text-white"
        >
          Review Case Studies
        </Button>
      </div>
    </section>
  )
}

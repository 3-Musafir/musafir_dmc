import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'

export default function OperationalFramework() {
  const frameworks = [
    'Vendor redundancy model',
    'Pre-negotiated hotel contracts',
    'On-ground operations managers',
    '24/7 response protocol',
    'Escalation structure',
    'Risk mitigation systems',
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-[#FFFBFA]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-[#2B2D42] mb-4">
          Execution Framework Built for International Standards
        </h2>
        <p className="text-lg text-[#2B2D42]/70 mb-12 max-w-2xl">
          Proven systems that ensure reliability and quality at scale.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {frameworks.map((framework, i) => (
            <div key={i} className="bg-white rounded-lg p-6 border border-gray-200 flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-[#FA3E01] flex-shrink-0 mt-0.5" />
              <span className="font-semibold text-[#2B2D42]">{framework}</span>
            </div>
          ))}
        </div>

        <Button
          variant="outline"
          className="border-[#2B2D42] text-[#2B2D42] hover:bg-[#2B2D42] hover:text-white"
        >
          See Operations Process
        </Button>
      </div>
    </section>
  )
}

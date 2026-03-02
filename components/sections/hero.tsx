import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface HeroProps {
  onCTAClick: (form: 'partners' | 'inquiry') => void
}

export default function Hero({ onCTAClick }: HeroProps) {
  const trustMetrics = [
    '3,500+ Travelers Executed',
    '130+ Verified Vendors',
    '500+ Local Experiences',
    'Govt & Bureaucratic Liaison Network',
    'Member — Major Hotelier Syndicate',
  ]

  return (
    <section className="pt-20 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Content */}
        <div>
          <h1 className="text-5xl md:text-6xl font-black leading-tight text-[#2B2D42] mb-6">
            Destination Management Company in Pakistan for International Partners
          </h1>

          <p className="text-lg leading-relaxed text-[#2B2D42]/80 mb-8">
            Structured, embedded, and operationally reliable DMC services for tour operators, corporate planners, and global travel agencies.
          </p>

          {/* Trust Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
            {trustMetrics.map((metric, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FA3E01]" />
                <span className="text-sm font-medium text-[#2B2D42]">{metric}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col md:flex-row gap-3">
            <Button
              size="lg"
              className="bg-[#FA3E01] hover:bg-[#E63A00] text-white font-semibold"
              onClick={() => {
                const link = document.createElement('a')
                link.href = '#'
                link.download = '3Musafir-DMC-Brochure.pdf'
                link.click()
              }}
            >
              Download DMC Brochure
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-[#2B2D42] border-[#2B2D42] hover:bg-[#2B2D42] hover:text-white font-semibold"
              onClick={() => onCTAClick('partners')}
            >
              Become Partners
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-[#2B2D42] hover:bg-[#FA3E01]/10 font-semibold"
              onClick={() => onCTAClick('inquiry')}
            >
              Urgent Inquiry
            </Button>
          </div>
        </div>

        {/* Right: Credibility Card (Desktop only) */}
        <div className="hidden md:block">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-sm font-black text-[#FA3E01] uppercase tracking-wide mb-6">
              Institutional Credibility
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Company Status</p>
                <p className="font-bold text-[#2B2D42]">Registered Pvt Ltd</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Agreements</p>
                <p className="font-bold text-[#2B2D42]">Formal Contracts & SLAs</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Billing</p>
                <p className="font-bold text-[#2B2D42]">PKR & USD Options</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Support</p>
                <p className="font-bold text-[#2B2D42]">24/7 On-Ground Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

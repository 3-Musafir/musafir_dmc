import { Button } from '@/components/ui/button'
import { Linkedin } from 'lucide-react'

export default function Legitimacy() {
  const credentials = [
    'Registered Private Limited Company',
    'Formal contracts & SLAs',
    'Transparent PKR & USD billing',
    'Dedicated account management',
    'Milestone-based payment model',
    'Compliance & documentation protocols',
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-[#2B2D42] mb-4">
          A Structured, Registered, Operationally Mature DMC
        </h2>
        <p className="text-lg text-[#2B2D42]/70 mb-12 max-w-2xl">
          Institutional credibility backed by formal agreements and transparent operations.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Credentials List */}
          <div>
            <ul className="space-y-4">
              {credentials.map((cred, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-[#FA3E01] flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="font-medium text-[#2B2D42]">{cred}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Credentials Panel */}
          <div className="space-y-4">
            <div className="bg-[#FFFBFA] rounded-lg p-6 border border-gray-200">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Office Address</p>
              <p className="font-bold text-[#2B2D42] text-lg">[Islamabad, Pakistan]</p>
              <p className="text-sm text-gray-600 mt-1">Ground Floor</p>
            </div>

            <div className="bg-[#FFFBFA] rounded-lg p-6 border border-gray-200">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Company Registration</p>
              <p className="font-bold text-[#2B2D42] text-lg">[PVT-XXXX-YYYY]</p>
              <p className="text-sm text-gray-600 mt-1">SECP Registered</p>
            </div>

            <Button
              variant="outline"
              className="w-full border-[#2B2D42] text-[#2B2D42] hover:bg-[#2B2D42] hover:text-white justify-center gap-2"
              onClick={() => window.open('#', '_blank')}
            >
              <Linkedin size={18} />
              View LinkedIn Profile
            </Button>
          </div>
        </div>

        <Button
          variant="outline"
          className="border-[#2B2D42] text-[#2B2D42] hover:bg-[#2B2D42] hover:text-white"
        >
          View Company Credentials
        </Button>
      </div>
    </section>
  )
}

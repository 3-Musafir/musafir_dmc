import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, Briefcase, Calendar, Users2, Crown, Zap } from 'lucide-react'

export default function Services() {
  const services = [
    {
      title: 'Corporate Retreats & Offsites',
      icon: Briefcase,
    },
    {
      title: 'Inbound Tour Operator Support',
      icon: Users,
    },
    {
      title: 'MICE & Conference Logistics',
      icon: Calendar,
    },
    {
      title: 'Group Travel Handling (15–500 pax)',
      icon: Users2,
    },
    {
      title: 'VIP & Executive Programs',
      icon: Crown,
    },
    {
      title: 'Permit & Compliance Coordination',
      icon: Zap,
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-[#2B2D42] mb-4">
          End-to-End Destination Management
        </h2>
        <p className="text-lg text-[#2B2D42]/70 mb-12 max-w-2xl">
          Comprehensive services tailored for international B2B partners.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <Card key={i} className="bg-[#FFFBFA] border border-gray-200 p-6 hover:shadow-sm transition-all">
                <div className="w-12 h-12 bg-[#FA3E01]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#FA3E01]" />
                </div>
                <h3 className="font-bold text-[#2B2D42] text-lg">{service.title}</h3>
              </Card>
            )
          })}
        </div>

        <Button
          variant="outline"
          className="border-[#2B2D42] text-[#2B2D42] hover:bg-[#2B2D42] hover:text-white"
        >
          Request Sample Itinerary
        </Button>
      </div>
    </section>
  )
}

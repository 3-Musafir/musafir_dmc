'use client'

import { Users, MapPin, ClipboardCheck, Zap, BarChart3, Trophy } from 'lucide-react'

const services = [
  {
    icon: MapPin,
    title: 'Ground Operations',
    description: 'Complete on-ground coordination including hotels, transportation, and local experiences across Pakistan.',
  },
  {
    icon: Users,
    title: 'Group Management',
    description: 'Expert handling of group tours from 10 to 500+ travelers with dedicated team support.',
  },
  {
    icon: ClipboardCheck,
    title: 'Itinerary Planning',
    description: 'Custom-designed itineraries tailored to your clientele and specific travel objectives.',
  },
  {
    icon: Zap,
    title: '24/7 Support',
    description: 'Round-the-clock assistance during operations ensuring smooth travel experiences.',
  },
  {
    icon: BarChart3,
    title: 'Business Travel',
    description: 'MICE solutions, corporate retreats, and incentive travel programs with complete logistics.',
  },
  {
    icon: Trophy,
    title: 'Premium Experiences',
    description: 'Exclusive access to luxury accommodations, adventure activities, and cultural immersion.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">Our Services</p>
          <h2 className="text-4xl md:text-5xl font-black text-balance mb-4">
            Comprehensive DMC Solutions
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            From ground operations to premium experiences, we handle every aspect of your Pakistan travel operations
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={i}
                className="group bg-card border border-border rounded-xl p-8 hover:border-accent/50 hover:bg-secondary/50 transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon size={24} className="text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-black mb-3">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

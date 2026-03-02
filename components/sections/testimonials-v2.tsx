'use client'

import { Star, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'Operations Manager, Global Tours',
    text: 'Working with 3Musafir has transformed our Pakistan operations. Their attention to detail and 24/7 support is unmatched.',
    rating: 5,
  },
  {
    name: 'Ahmed Hassan',
    title: 'Tour Director, Middle East Adventures',
    text: 'The embedded local network is incredible. No surprises, everything runs smoothly. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Emily Chen',
    title: 'Group Coordinator, Asia Explore',
    text: 'Professional, reliable, and genuinely caring about traveler satisfaction. Best DMC partner we have.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-black text-balance mb-4">
            What Our Partners Say
          </h2>
          <p className="text-foreground/60">Trusted by global travel operators and agencies</p>
        </div>

        {/* Two Column Layout: Testimonials + Video */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Testimonials */}
          <div className="space-y-6">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 hover:border-accent/30 transition-all">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-foreground/60">{testimonial.title}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Video Placeholder */}
          <div className="relative group">
            <div className="aspect-video bg-card border border-border rounded-xl overflow-hidden flex items-center justify-center">
              <img
                src="/images/testimonial-video-placeholder.jpg"
                alt="Customer testimonial video"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect fill='%231a1f2e' width='600' height='400'/%3E%3Ccircle cx='300' cy='200' r='60' fill='%23f59e0b' opacity='0.2'/%3E%3Cpolygon points='280,170 280,230 340,200' fill='%23f59e0b'/%3E%3Ctext x='50%25' y='280' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='16' fill='%23999'%3ECustomer Testimonial Video%3C/text%3E%3C/svg%3E`
                }}
              />

              {/* Play Button Overlay */}
              <Button
                size="lg"
                className="absolute bg-accent hover:bg-accent/90 text-accent-foreground rounded-full w-16 h-16 p-0 group-hover:scale-110 transition-transform"
                onClick={() => {
                  // TODO: Implement video modal or redirect to video
                  console.log('Play testimonial video')
                }}
              >
                <Play size={24} className="fill-accent-foreground" />
              </Button>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

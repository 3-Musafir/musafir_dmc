'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface HeroProps {
  onQuoteClick: () => void
  onBrochureClick: () => void
}

export default function Hero({ onQuoteClick, onBrochureClick }: HeroProps) {
  return (
    <section className="relative min-h-screen md:min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
                <span className="text-sm font-semibold text-accent">Destination Management Company</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black leading-tight text-balance">
                Premium DMC Services for International Partners
              </h1>
              
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-lg">
                We bring Pakistan's best travel experiences to the world. Trusted by global tour operators with 3,500+ executed travelers and 130+ verified partners.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold group"
                onClick={onQuoteClick}
              >
                Get Your Quote
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold"
                onClick={onBrochureClick}
              >
                Download Brochure
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4 text-sm">
              <div>
                <div className="font-black text-2xl text-accent">3,500+</div>
                <div className="text-foreground/60 text-xs">Travelers Served</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="font-black text-2xl text-accent">130+</div>
                <div className="text-foreground/60 text-xs">Verified Partners</div>
              </div>
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="relative hidden md:block">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-card to-card/50 border border-border">
              <img
                src="/images/hero-placeholder.jpg"
                alt="Pakistan landscape - mountains, valleys, and cultural heritage"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='500'%3E%3Crect fill='%231a1f2e' width='500' height='500'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='18' fill='%23f59e0b' font-weight='bold'%3EPakistan Landscape%3C/text%3E%3C/svg%3E`
                }}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-8 -left-8 bg-card border border-border rounded-xl p-6 shadow-2xl backdrop-blur">
              <div className="text-sm font-medium text-foreground/60 mb-2">Experience Since</div>
              <div className="text-3xl font-black text-accent">12+ Years</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

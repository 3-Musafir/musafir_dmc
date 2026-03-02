'use client'

import { useState } from 'react'

export default function ClientLogos() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

  const logos = Array.from({ length: 8 }, (_, i) => ({
    name: `Partner ${i + 1}`,
    id: i,
  }))

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }))
  }

  return (
    <section className="py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">Trusted By</p>
          <h2 className="text-3xl md:text-4xl font-black text-balance mb-2">
            Global Travel Companies & Operators
          </h2>
          <p className="text-foreground/60 max-w-lg mx-auto">
            We partner with leading international tour operators and travel agencies worldwide
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="aspect-video bg-card border border-border rounded-lg flex items-center justify-center hover:border-accent/50 hover:bg-secondary/50 transition-all group cursor-pointer"
            >
              {!imageErrors[logo.id] ? (
                <img
                  src={`/images/logo-${logo.id + 1}.png`}
                  alt={logo.name}
                  className="max-w-[80%] max-h-[60%] object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                  onError={() => handleImageError(logo.id)}
                />
              ) : (
                <div className="flex flex-col items-center gap-2">
                  <div className="text-3xl font-black text-foreground/30">Logo</div>
                  <div className="text-xs text-foreground/40">{logo.name}</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-foreground/50 mt-8">
          Join 130+ verified travel partners who trust us with their operations
        </p>
      </div>
    </section>
  )
}

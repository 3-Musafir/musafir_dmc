'use client'

import { useEffect, useRef, useState } from 'react'

interface Stat {
  value: number
  label: string
  suffix: string
}

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({ clients: 0, years: 0, projects: 0 })
  const sectionRef = useRef(null)

  const stats: Stat[] = [
    { value: 3500, label: 'Travelers Executed', suffix: '+' },
    { value: 12, label: 'Years in Business', suffix: '+' },
    { value: 500, label: 'Projects Completed', suffix: '+' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const startTime = Date.now()

    const animateCounters = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)
      const easedProgress = easeOut(progress)

      setCounts({
        clients: Math.floor(stats[0].value * easedProgress),
        years: Math.floor(stats[1].value * easedProgress),
        projects: Math.floor(stats[2].value * easedProgress),
      })

      if (progress < 1) {
        requestAnimationFrame(animateCounters)
      }
    }

    const frameId = requestAnimationFrame(animateCounters)
    return () => cancelAnimationFrame(frameId)
  }, [isVisible])

  return (
    <section ref={sectionRef} className="py-12 md:py-16 px-4 md:px-6 bg-secondary/50 border-y border-border">
      <div className="max-w-7xl mx-auto">
        {/* Grid layout for stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Stat 1 */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-baseline gap-1">
              <div className="text-4xl md:text-5xl font-black text-accent">
                {counts.clients.toLocaleString()}
              </div>
              <div className="text-2xl md:text-3xl font-black text-accent/70">+</div>
            </div>
            <div className="text-sm md:text-base font-medium text-foreground/70">Travelers Executed</div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-baseline gap-1">
              <div className="text-4xl md:text-5xl font-black text-accent">
                {counts.years.toLocaleString()}
              </div>
              <div className="text-2xl md:text-3xl font-black text-accent/70">+</div>
            </div>
            <div className="text-sm md:text-base font-medium text-foreground/70">Years in Business</div>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-baseline gap-1">
              <div className="text-4xl md:text-5xl font-black text-accent">
                {counts.projects.toLocaleString()}
              </div>
              <div className="text-2xl md:text-3xl font-black text-accent/70">+</div>
            </div>
            <div className="text-sm md:text-base font-medium text-foreground/70">Projects Completed</div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface HeaderProps {
  onQuoteClick: () => void
  onBrochureClick: () => void
}

export default function Header({ onQuoteClick, onBrochureClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Why Us', href: '#usps' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:block sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-black text-2xl text-accent">3Musafir</div>
          
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              onClick={onBrochureClick}
            >
              Brochure
            </Button>
            <Button
              size="sm"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={onQuoteClick}
            >
              Get Quote
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="px-4 h-16 flex items-center justify-between">
          <div className="font-black text-xl text-accent">3Musafir</div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="bg-secondary border-t border-border p-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left py-2 px-3 text-sm font-medium text-foreground/70 hover:text-accent hover:bg-secondary/50 rounded"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-border space-y-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                onClick={onBrochureClick}
              >
                Download Brochure
              </Button>
              <Button
                size="sm"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={onQuoteClick}
              >
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Bottom CTA Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-secondary border-t border-border p-3 space-y-2">
        <Button
          size="sm"
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
          onClick={onQuoteClick}
        >
          Get Quote Now
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="w-full border-accent text-accent hover:bg-accent/10"
          onClick={onBrochureClick}
        >
          Download Brochure
        </Button>
      </div>

      {/* Mobile Bottom Padding */}
      <div className="md:hidden h-32" />
    </>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface HeaderProps {
  onCTAClick: (form: 'partners' | 'inquiry') => void
}

export default function Header({ onCTAClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Local Advantage', href: '#local-advantage' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <>
      {/* Desktop Header */}
      <header className={`hidden md:block fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isSticky ? 'bg-white shadow-sm' : 'bg-[#FFFBFA]'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FA3E01] rounded-lg flex items-center justify-center text-white font-bold text-sm">
              3M
            </div>
            <span className="font-black text-lg text-[#2B2D42]">3Musafir Travels</span>
          </div>

          {/* Nav Links */}
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#2B2D42] hover:text-[#FA3E01] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="text-[#2B2D42] border-[#2B2D42] hover:bg-[#2B2D42] hover:text-white"
              onClick={() => {
                const link = document.createElement('a')
                link.href = '#'
                link.download = '3Musafir-DMC-Brochure.pdf'
                link.click()
              }}
            >
              Download Brochure
            </Button>
            <Button
              size="sm"
              className="bg-[#FA3E01] hover:bg-[#E63A00] text-white"
              onClick={() => onCTAClick('partners')}
            >
              Become Partners
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Header + Sticky Bottom Bar */}
      <div className="md:hidden">
        {/* Top Mobile Header */}
        <header className="fixed top-0 left-0 right-0 z-40 bg-white shadow-sm">
          <div className="px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-[#FA3E01] rounded-lg flex items-center justify-center text-white font-bold text-xs">
                3M
              </div>
              <span className="font-black text-sm text-[#2B2D42]">3Musafir</span>
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#2B2D42]">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="bg-white border-t border-gray-200 px-4 py-3 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-[#2B2D42] hover:text-[#FA3E01]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </header>

        {/* Sticky Bottom CTA Bar */}
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 px-3 py-2 flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 text-xs text-[#2B2D42] border-[#2B2D42]"
            onClick={() => {
              const link = document.createElement('a')
              link.href = '#'
              link.download = '3Musafir-DMC-Brochure.pdf'
              link.click()
            }}
          >
            Download
          </Button>
          <Button
            size="sm"
            className="flex-1 bg-[#FA3E01] hover:bg-[#E63A00] text-white text-xs"
            onClick={() => onCTAClick('inquiry')}
          >
            Inquiry
          </Button>
        </div>

        {/* Add padding to prevent content from being hidden */}
        <style>{`
          body {
            padding-bottom: 56px;
            padding-top: 56px;
          }
        `}</style>
      </div>

      {/* Desktop padding */}
      <div className="hidden md:block h-20" />
    </>
  )
}

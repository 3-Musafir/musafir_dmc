import { Button } from '@/components/ui/button'
import { Linkedin, Mail } from 'lucide-react'

interface FooterProps {
  onBrochureClick?: () => void
}

export default function Footer({ onBrochureClick }: FooterProps) {
  return (
    <footer className="bg-[#2B2D42] text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#FA3E01] rounded-lg flex items-center justify-center font-bold text-sm">
                3M
              </div>
              <span className="font-black text-lg">3Musafir Travels</span>
            </div>
            <p className="text-white/70 text-sm">
              Destination Management Company for International Partners.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wide mb-4 text-[#FA3E01]">Contact</h3>
            <div className="space-y-3 text-sm">
              <p className="text-white/80">
                <span className="block font-semibold mb-1">Office Address</span>
                Islamabad, Pakistan
              </p>
              <p className="text-white/80">
                <span className="block font-semibold mb-1">Email</span>
                hello@3musafir.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wide mb-4 text-[#FA3E01]">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#case-studies" className="text-white/70 hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-white/70 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/70 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wide mb-4 text-[#FA3E01]">Follow Us</h3>
            <div className="flex gap-3">
              <Button
                size="icon"
                variant="outline"
                className="bg-white/10 border-white/30 hover:bg-white/20 text-white"
                onClick={() => window.open('#', '_blank')}
              >
                <Linkedin size={18} />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="bg-white/10 border-white/30 hover:bg-white/20 text-white"
                onClick={() => window.open('mailto:hello@3musafir.com')}
              >
                <Mail size={18} />
              </Button>
            </div>
          </div>
        </div>

        {/* Download CTA */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-6 md:p-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="font-bold text-lg mb-1">Download Our DMC Brochure</h3>
              <p className="text-white/70 text-sm">
                Detailed overview of services, case studies, and partnership models.
              </p>
            </div>
            <Button
              className="bg-[#FA3E01] hover:bg-[#E63A00] text-white font-semibold whitespace-nowrap"
              onClick={onBrochureClick}
            >
              Download PDF
            </Button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-white/60">
          <p>© 2026 3Musafir Travels. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

'use client'

import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Footer() {
  const handleBrochureDownload = () => {
    const link = document.createElement('a')
    link.href = '#' // TODO: Add actual brochure URL
    link.download = '3Musafir-DMC-Brochure.pdf'
    link.click()
  }

  return (
    <footer className="bg-secondary/50 border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-black text-accent mb-4">3Musafir</div>
            <p className="text-foreground/60 text-sm mb-6">
              Premium DMC services for international travel operators exploring Pakistan.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              onClick={handleBrochureDownload}
            >
              Download Brochure
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#how-it-works" className="hover:text-accent transition-colors">How It Works</a></li>
              <li><a href="#usps" className="hover:text-accent transition-colors">Why Us</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li><a href="#services" className="hover:text-accent transition-colors">Ground Operations</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Group Management</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">MICE Solutions</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Premium Experiences</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-foreground/60">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <a href="mailto:hello@3musafir.com" className="hover:text-accent transition-colors">
                  hello@3musafir.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <a href="tel:+92000000000" className="hover:text-accent transition-colors">
                  +92 XXX XXX XXXX
                </a>
              </div>
              <div className="pt-2">
                <p className="text-xs text-foreground/50 mb-3">Follow us</p>
                <div className="flex gap-3">
                  <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
                    <Facebook size={16} />
                  </a>
                  <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
                    <Twitter size={16} />
                  </a>
                  <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
                    <Linkedin size={16} />
                  </a>
                  <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
                    <Instagram size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <div>&copy; {new Date().getFullYear()} 3Musafir Travels. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

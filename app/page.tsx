'use client'

import { useState } from 'react'
import Header from '@/components/sections/header-v2'
import Hero from '@/components/sections/hero-v2'
import Stats from '@/components/sections/stats-v2'
import ClientLogos from '@/components/sections/client-logos-v2'
import Services from '@/components/sections/services-v2'
import USPs from '@/components/sections/usps-v2'
import HowItWorks from '@/components/sections/how-it-works-v2'
import Testimonials from '@/components/sections/testimonials-v2'
import FAQ from '@/components/sections/faq-v2'
import Contact from '@/components/sections/contact-v2'
import Footer from '@/components/sections/footer-v2'
import { Toaster } from '@/components/ui/sonner'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'

export default function Home() {
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    email: '',
    phone: '',
    travelers: '',
    dates: '',
    message: '',
  })

  const handleQuoteChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setQuoteForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Quote request received! We\'ll contact you soon.')
    setQuoteForm({ name: '', email: '', phone: '', travelers: '', dates: '', message: '' })
    setShowQuoteModal(false)
  }

  const handleBrochureDownload = () => {
    const link = document.createElement('a')
    link.href = '#' // TODO: Add actual brochure URL
    link.download = '3Musafir-DMC-Brochure.pdf'
    link.click()
    toast.success('Brochure download started!')
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header onQuoteClick={() => setShowQuoteModal(true)} onBrochureClick={handleBrochureDownload} />
      <Hero onQuoteClick={() => setShowQuoteModal(true)} onBrochureClick={handleBrochureDownload} />
      <Stats />
      <ClientLogos />
      <Services />
      <USPs />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />

      {/* Quote Modal */}
      <Dialog open={showQuoteModal} onOpenChange={setShowQuoteModal}>
        <DialogContent className="max-w-2xl bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl">Get Your Custom Quote</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleQuoteSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name *</label>
                <Input
                  name="name"
                  value={quoteForm.name}
                  onChange={handleQuoteChange}
                  placeholder="Your name"
                  required
                  className="bg-secondary border-border"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email *</label>
                <Input
                  name="email"
                  type="email"
                  value={quoteForm.email}
                  onChange={handleQuoteChange}
                  placeholder="your@email.com"
                  required
                  className="bg-secondary border-border"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Phone *</label>
                <Input
                  name="phone"
                  type="tel"
                  value={quoteForm.phone}
                  onChange={handleQuoteChange}
                  placeholder="+92-XXX-XXXXXXX"
                  required
                  className="bg-secondary border-border"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Number of Travelers *</label>
                <Input
                  name="travelers"
                  type="number"
                  value={quoteForm.travelers}
                  onChange={handleQuoteChange}
                  placeholder="e.g., 50"
                  required
                  className="bg-secondary border-border"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Travel Dates *</label>
              <Input
                name="dates"
                type="text"
                value={quoteForm.dates}
                onChange={handleQuoteChange}
                placeholder="e.g., March 15-22, 2024"
                required
                className="bg-secondary border-border"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Your Requirements *</label>
              <Textarea
                name="message"
                value={quoteForm.message}
                onChange={handleQuoteChange}
                placeholder="Tell us about your travel plans, preferences, and any special requirements..."
                required
                rows={4}
                className="bg-secondary border-border resize-none"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="submit"
                className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                Request Quote
              </Button>
              <Button
                type="button"
                variant="outline"
                className="flex-1 border-border"
                onClick={() => setShowQuoteModal(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Toaster />
    </main>
  )
}

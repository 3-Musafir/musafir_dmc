'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      toast.success('Message sent! We\'ll get back to you shortly.')
      setFormData({ name: '', email: '', phone: '', company: '', message: '' })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-black text-balance mb-4">
            Let's Start Your Pakistan Journey
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Ready to explore Pakistan? Contact us for a personalized quote or to discuss your specific needs.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Phone size={20} className="text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <p className="text-foreground/70">+92 (0) 321 XXXXXXX</p>
                  <p className="text-sm text-foreground/50">Available 24/7</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Mail size={20} className="text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-foreground/70">hello@3musafir.com</p>
                  <p className="text-sm text-foreground/50">Response within 24 hours</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <MapPin size={20} className="text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Office</h3>
                  <p className="text-foreground/70">Islamabad, Pakistan</p>
                  <p className="text-sm text-foreground/50">Serving all of Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-8 space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-2">Full Name *</label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="bg-secondary border-border"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Email *</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="bg-secondary border-border"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Phone *</label>
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+92-XXX-XXXXXXX"
                  required
                  className="bg-secondary border-border"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Company</label>
              <Input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your travel company name"
                className="bg-secondary border-border"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Message *</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your travel needs..."
                required
                rows={4}
                className="bg-secondary border-border resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold group"
            >
              <Send size={16} className="mr-2" />
              {isSubmitting ? 'Sending...' : 'Send Inquiry'}
            </Button>

            <p className="text-xs text-foreground/50 text-center">
              We respect your privacy. Your information is secure.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

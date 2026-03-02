import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const outfit = Outfit({ subsets: ["latin"], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: '3Musafir Travels | Destination Management Company Pakistan',
  description: 'Structured DMC services for international tour operators, corporate planners, and travel agencies. Inbound travel operator with 3,500+ executed travelers and 130+ verified vendors.',
  generator: 'v0.app',
  keywords: 'DMC Pakistan, destination management, inbound tour operator, MICE, corporate retreats, travel management',
  openGraph: {
    title: '3Musafir Travels | Pakistan DMC',
    description: 'Premium destination management company for international partners.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="font-outfit antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

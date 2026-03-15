import type { Metadata, Viewport } from 'next'
import { Public_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const publicSans = Public_Sans({ 
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap"
});

export const metadata: Metadata = {
  title: 'Crystal Clear Pools | Premium Swimming Pool Construction, Renovation & Maintenance',
  description: 'Crystal Clear Pools offers luxury pool construction, renovation, and weekly maintenance services. Serving Los Angeles, Beverly Hills, Malibu & surrounding areas since 1998. Get your free consultation today!',
  keywords: ['swimming pool construction', 'pool renovation', 'pool maintenance', 'infinity pools', 'luxury pools', 'Los Angeles pool company', 'pool cleaning service', 'custom pool design'],
  authors: [{ name: 'Crystal Clear Pools' }],
  creator: 'Crystal Clear Pools',
  publisher: 'Crystal Clear Pools',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Crystal Clear Pools | Premium Swimming Pool Solutions',
    description: 'Transform your backyard with a luxury custom pool. Construction, renovation & maintenance services by Crystal Clear Pools.',
    url: 'https://crystalclearpools.com',
    siteName: 'Crystal Clear Pools',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crystal Clear Pools | Premium Swimming Pool Solutions',
    description: 'Transform your backyard with a luxury custom pool. Construction, renovation & maintenance services.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#ec5b13',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${publicSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

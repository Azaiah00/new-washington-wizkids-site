import type { Metadata } from 'next'
import { Anton, Inter } from 'next/font/google'
import './globals.css'

/**
 * Google Fonts Configuration
 * Anton: Used for all headings and impact text
 * Inter: Used for body text and UI elements
 */
const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

/**
 * SEO Metadata Configuration
 * Optimized for search engines and social media sharing
 */
export const metadata: Metadata = {
  title: 'Washington WizKids - The Ultimate Wizards Podcast',
  description: 'Hard-hitting analysis, unfiltered opinions, and die-hard fan perspective. Your new home for all things Wizards.',
  keywords: ['Washington Wizards', 'NBA podcast', 'basketball analysis', 'sports commentary', 'Wizards news'],
  authors: [{ name: 'Washington WizKids' }],
  creator: 'Washington WizKids',
  publisher: 'Washington WizKids',
  
  // Open Graph metadata for social media sharing
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://washingtonwizkids.com',
    title: 'Washington WizKids - The Ultimate Wizards Podcast',
    description: 'Hard-hitting analysis, unfiltered opinions, and die-hard fan perspective. Your new home for all things Wizards.',
    siteName: 'Washington WizKids',
    images: [
      {
        url: '/images/logos/logofred.png',
        width: 1200,
        height: 630,
        alt: 'Washington WizKids Logo',
      },
    ],
  },
  
  // Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Washington WizKids - The Ultimate Wizards Podcast',
    description: 'Hard-hitting analysis, unfiltered opinions, and die-hard fan perspective.',
    images: ['/images/logos/logofred.png'],
  },
  
  // Additional metadata
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
  
  // Viewport configuration for mobile
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

/**
 * Root Layout Component
 * Wraps all pages with consistent fonts, metadata, and structure
 * 
 * @param children - Child components to render within the layout
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable}`}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.youtube.com" />
      </head>
      <body className="antialiased">
        {/* Main application content */}
        {children}
      </body>
    </html>
  )
}


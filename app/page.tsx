/**
 * Homepage - Washington WizKids Podcast Hub
 * Main landing page assembling all public-facing components
 * 
 * This page is the complete public experience featuring:
 * - Hero section with video background
 * - Latest podcast segments
 * - Merch vault with countdown timer
 * - Interactive stats lab
 * - Insider signup section
 * - News/blog section
 * - Affiliate gear section
 * 
 * Future phases will add:
 * - Better-Auth authentication
 * - Premium dashboard routes
 * - Protected content
 */

import Header from './components/Header'
import Hero from './components/Hero'
import PodcastSection from './components/PodcastSection'
import MerchSection from './components/MerchSection'
import StatsLab from './components/StatsLab'
import InsiderSection from './components/InsiderSection'
import BlogSection from './components/BlogSection'
import GearSection from './components/GearSection'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <>
      {/* Header - Sticky navigation */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section - Full-screen with YouTube video background */}
        <Hero />

        {/* Latest Podcast Segments - 3-column grid */}
        <PodcastSection />

        {/* Merch Vault - Limited drops with countdown */}
        <MerchSection />

        {/* Stats Lab - Interactive Chart.js visualization */}
        <StatsLab />

        {/* Insider Signup - Lead generation */}
        <InsiderSection />

        {/* Blog/News - The WizKids Wire */}
        <BlogSection />

        {/* Affiliate Gear - Product showcase */}
        <GearSection />
      </main>

      {/* Footer - Social links and copyright */}
      <Footer />
    </>
  )
}


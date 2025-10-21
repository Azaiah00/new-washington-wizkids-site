'use client'

/**
 * Header Component
 * Sticky navigation header with mobile menu and shrink effect on scroll
 * 
 * Features:
 * - Responsive mobile hamburger menu
 * - Sticky positioning with smooth transitions
 * - Shrinks on scroll for better UX
 * - Accessible navigation with ARIA labels
 */

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NAV_LINKS } from '@/lib/constants'

export default function Header() {
  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  // State for header shrink effect
  const [isScrolled, setIsScrolled] = useState(false)

  /**
   * Effect: Handle scroll event for header shrink
   * Adds/removes padding when user scrolls past 50px
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)
    
    // Cleanup listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /**
   * Toggle mobile menu visibility
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  /**
   * Close mobile menu (used when clicking nav links)
   */
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  /**
   * Handle navigation link clicks
   * Smoothly scrolls to the target section
   */
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    closeMobileMenu()
    
    // Remove the # from href to get the section ID
    const sectionId = href.replace('#', '')
    const section = document.getElementById(sectionId)
    
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <header
      className={`bg-wizards-navy text-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-3'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center" aria-label="Washington WizKids Home">
          <Image
            src="/images/logos/logofred.png"
            alt="Washington WizKids Logo"
            width={80}
            height={80}
            className="h-20 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center space-x-6"
          role="navigation"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            link.isButton ? (
              // CTA Button Style
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="bg-wizards-red text-white px-4 py-2 rounded-full hover:bg-white hover:text-wizards-red transition duration-300 font-bold"
              >
                {link.label}
              </a>
            ) : (
              // Regular Link Style
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="nav-link"
              >
                {link.label}
              </a>
            )
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-button"
          className="md:hidden text-2xl focus-outline"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden bg-wizards-navy py-4"
          role="navigation"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`block text-center py-2 px-4 hover:bg-wizards-red transition-colors ${
                link.isButton ? 'bg-wizards-red mt-2 mx-4 rounded-full font-bold' : ''
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}


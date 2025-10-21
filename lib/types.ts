/**
 * TypeScript Type Definitions for Washington WizKids
 * Centralized type definitions for type safety across the application
 */

/**
 * Player Statistics Interface
 * Represents performance data for a single player
 */
export interface PlayerStats {
  points: number[]
  assists: number[]
  rebounds: number[]
}

/**
 * Player Data Interface
 * Complete player information including all stats
 */
export interface PlayerData {
  [key: string]: PlayerStats
}

/**
 * Chart Data Interface
 * Structure for Chart.js visualization data
 */
export interface ChartData {
  players: {
    [key: string]: string
  }
  games: string[]
  data: PlayerData
}

/**
 * Stat Type
 * Valid statistical categories for player performance
 */
export type StatType = 'points' | 'assists' | 'rebounds'

/**
 * Product Status
 * Represents the current availability status of merch items
 */
export type ProductStatus = 'sold-out' | 'current' | 'coming-soon'

/**
 * Product Interface
 * Represents a merchandise product in the vault
 */
export interface Product {
  id: string
  name: string
  price: number
  image: string
  status: ProductStatus
  featured?: boolean
}

/**
 * Podcast Episode/Segment Interface
 * Represents a single podcast segment or episode
 */
export interface PodcastSegment {
  id: string
  title: string
  description: string
  image: string
  link: string
  category?: string
}

/**
 * Blog Post Interface
 * Represents a blog article or news item
 */
export interface BlogPost {
  id: string
  title: string
  excerpt: string
  image: string
  category: 'NEWS' | 'ANALYSIS' | 'RUMOR MILL'
  link: string
}

/**
 * Affiliate Product Interface
 * Represents affiliate gear products
 */
export interface AffiliateProduct {
  id: string
  name: string
  image: string
  link: string
}

/**
 * Social Link Interface
 * Represents social media platform links
 */
export interface SocialLink {
  name: string
  url: string
  ariaLabel: string
  icon: React.ReactNode
}

/**
 * Countdown Timer State Interface
 * Represents the current state of the countdown timer
 */
export interface CountdownState {
  days: number
  hours: number
  minutes: number
  seconds: number
  isExpired: boolean
}

/**
 * Navigation Link Interface
 * Represents a navigation menu item
 */
export interface NavLink {
  label: string
  href: string
  isButton?: boolean
}


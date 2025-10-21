/**
 * Application Constants
 * Centralized configuration values and static data
 */

import type { NavLink } from './types'

/**
 * Brand Colors
 * Official Washington Wizards color palette
 */
export const COLORS = {
  navy: '#002B5C',
  red: '#E31837',
  gray: '#f4f4f5',
} as const

/**
 * Social Media Links
 * Official Washington WizKids social media profiles
 */
export const SOCIAL_LINKS = {
  youtube: 'https://www.youtube.com/@WashingtonWizKidsPodcast',
  instagram: 'https://www.instagram.com/washingtonwizkidspodcast',
  tiktok: 'https://www.tiktok.com/@washingtonwizkidspodcast',
} as const

/**
 * YouTube Video Configuration
 * Video ID for the hero background video
 */
export const YOUTUBE_VIDEO_ID = 'D4Qf03HsOoE'

/**
 * Navigation Links
 * Main navigation menu items
 */
export const NAV_LINKS: NavLink[] = [
  { label: 'The Pod', href: '#podcast' },
  { label: 'The Vault', href: '#merch' },
  { label: 'Stat Lab', href: '#stats' },
  { label: 'The Wire', href: '#blog' },
  { label: 'BECOME AN INSIDER', href: '#insider', isButton: true },
]

/**
 * Site Metadata
 * SEO and site configuration
 */
export const SITE_CONFIG = {
  name: 'Washington WizKids',
  tagline: 'The Ultimate Wizards Podcast',
  description: 'Hard-hitting analysis, unfiltered opinions, and die-hard fan perspective. Your new home for all things Wizards.',
  url: 'https://washingtonwizkids.com',
  copyright: '© 2024 Washington WizKids. All Rights Reserved. Not affiliated with the NBA or the Washington Wizards.',
} as const

/**
 * Merch Countdown Configuration
 * Default countdown duration for merch drops
 */
export const COUNTDOWN_DURATION = {
  days: 7,
  hours: 14,
  minutes: 32,
  seconds: 11,
} as const


/**
 * Sample Data for Washington WizKids
 * Static data for development and placeholder content
 */

import type { PodcastSegment, Product, BlogPost, AffiliateProduct, ChartData } from './types'

/**
 * Sample Podcast Segments
 * Example episodes and segments for the Latest Segments section
 */
export const PODCAST_SEGMENTS: PodcastSegment[] = [
  {
    id: '1',
    title: 'Post-Game Breakdown: Wizards vs. Celtics',
    description: 'Did the Wizards pull off the upset? We dissect every play, highlight the key performances, and analyze the final box score. Instant reactions here.',
    image: '/images/placeholders/post-game-breakdown.jpg',
    link: '#',
  },
  {
    id: '2',
    title: 'The Trade Machine: Who Says No?',
    description: 'We fired up the trade machine to cook up some wild scenarios. Could the Wizards land a superstar? We debate the assets and the likelihood.',
    image: '/images/placeholders/trade-machine.jpg',
    link: '#',
  },
  {
    id: '3',
    title: 'Player Spotlight: The Rise of the Rookie',
    description: 'Our rookie point guard is on a tear. We break down his film, look at his advanced stats, and project his ceiling for the rest of the season.',
    image: '/images/placeholders/player-spotlight.jpg',
    link: '#',
  },
]

/**
 * Sample Merch Products
 * Example products for The Vault section
 */
export const MERCH_PRODUCTS: Product[] = [
  {
    id: '1',
    name: '"The Classic" WizKids Hoodie',
    price: 65.00,
    image: '/images/merch/wizkids-hoodie.jpg',
    status: 'sold-out',
  },
  {
    id: '2',
    name: '"District of D.C." Tee',
    price: 30.00,
    image: '/images/merch/district-dc-tee.jpg',
    status: 'current',
    featured: true,
  },
  {
    id: '3',
    name: '"The Monument" Snapback',
    price: 28.00,
    image: '/images/merch/monument-snapback.jpg',
    status: 'coming-soon',
  },
]

/**
 * Sample Blog Posts
 * Example articles for The WizKids Wire section
 */
export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Key Player Sidelined for 2-4 Weeks',
    excerpt: 'A tough blow for the Wizards as their starting center goes down with an ankle sprain. What does this mean for the rotation?',
    image: '/images/placeholders/injury-report.jpg',
    category: 'NEWS',
    link: '#',
  },
  {
    id: '2',
    title: "Why the Wizards' Defense is Better Than You Think",
    excerpt: 'A deep dive into the defensive metrics reveals a surprising trend for this squad.',
    image: '/images/placeholders/analysis.jpg',
    category: 'ANALYSIS',
    link: '#',
  },
  {
    id: '3',
    title: 'Is a Mid-Season Trade on the Horizon?',
    excerpt: 'Sources around the league suggest the Wizards are actively looking to add another shooter before the deadline. Here are the potential targets.',
    image: '/images/placeholders/rumor-mill.jpg',
    category: 'RUMOR MILL',
    link: '#',
  },
]

/**
 * Sample Affiliate Products
 * Example gear for the Gear Up section
 */
export const AFFILIATE_PRODUCTS: AffiliateProduct[] = [
  {
    id: '1',
    name: 'Official Wizards Jersey',
    image: '/images/placeholders/wizards-jersey.jpg',
    link: '#',
  },
  {
    id: '2',
    name: 'NBA Official Game Ball',
    image: '/images/placeholders/basketball.jpg',
    link: '#',
  },
  {
    id: '3',
    name: 'Wizards History Book',
    image: '/images/placeholders/wizards-book.jpg',
    link: '#',
  },
  {
    id: '4',
    name: 'New Era Snapback',
    image: '/images/placeholders/wizards-hat.jpg',
    link: '#',
  },
]

/**
 * Player Statistics Data
 * Sample data for the interactive Chart.js Stat Lab
 * Shows performance over the last 5 games
 */
export const PLAYER_STATS_DATA: ChartData = {
  players: {
    player1: 'Jordan Poole',
    player2: 'Kyle Kuzma',
    player3: 'Deni Avdija',
  },
  games: ['vs BOS', 'vs NYK', 'vs PHI', 'vs BKN', 'vs TOR'],
  data: {
    player1: {
      points: [22, 18, 31, 25, 20],
      assists: [5, 7, 4, 8, 6],
      rebounds: [3, 4, 2, 5, 4],
    },
    player2: {
      points: [28, 25, 22, 30, 26],
      assists: [4, 3, 5, 4, 5],
      rebounds: [10, 8, 12, 9, 11],
    },
    player3: {
      points: [15, 18, 12, 20, 17],
      assists: [6, 5, 7, 8, 6],
      rebounds: [8, 9, 7, 10, 9],
    },
  },
}


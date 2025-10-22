/**
 * Sanity Client
 * This file creates the connection between your Next.js app and Sanity
 * 
 * What this does:
 * - Connects to your Sanity project in the cloud
 * - Provides functions to fetch data
 * - Handles API calls automatically
 */

import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Configuration object
export const client = createClient({
  // Your Sanity project ID (you'll add this to .env.local)
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  
  // Dataset name (usually 'production')
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  
  // API version (use current date)
  apiVersion: '2024-01-01',
  
  // Set to true to fetch fresh data on every request
  // Set to false for production to use cached data
  useCdn: process.env.NODE_ENV === 'production',
})

/**
 * Image URL Builder
 * This helps you get optimized image URLs from Sanity
 * 
 * Usage:
 * urlFor(imageSource).width(800).height(600).url()
 */
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}



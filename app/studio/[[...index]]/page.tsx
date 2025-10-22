/**
 * Sanity Studio Page
 * This creates your admin dashboard at /studio
 * 
 * What this does:
 * - Creates a route at http://localhost:3000/studio
 * - Loads the Sanity Studio interface
 * - This is where you'll add/edit/delete blog posts
 * 
 * After you add content here, it automatically syncs to Sanity's cloud
 * Then your website fetches it and displays it
 */

'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}



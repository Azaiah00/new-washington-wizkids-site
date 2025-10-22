/**
 * Sanity Studio Configuration
 * This is the main config file for your Sanity CMS
 * 
 * What this does:
 * - Defines your Sanity project connection
 * - Sets up the admin dashboard (Sanity Studio)
 * - Configures what types of content you can create (schemas)
 */

import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  // Your project name (will show in the dashboard)
  name: 'washington-wizkids',
  title: 'Washington WizKids CMS',

  // Project ID and dataset - YOU'LL ADD THESE AFTER CREATING SANITY PROJECT
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  // Base path for Sanity Studio (your admin dashboard)
  // Access it at: http://localhost:3000/studio
  basePath: '/studio',

  // Plugins
  plugins: [
    deskTool(), // The main content editing interface
    visionTool(), // Tool to test GROQ queries (Sanity's query language)
  ],

  // Schema types - this defines what content you can create
  schema: {
    types: schemaTypes,
  },
})



/**
 * Blog Post Schema
 * This defines what a blog post looks like in Sanity
 * 
 * When you create a blog post in Sanity Studio, you'll see these fields:
 * - Title (required)
 * - Slug (URL-friendly version of title)
 * - Excerpt (short description)
 * - Featured Image
 * - Category (NEWS, ANALYSIS, or RUMOR MILL)
 * - Content (rich text editor)
 * - Published date
 */

import { defineField, defineType } from 'sanity'

export default defineType({
  // Internal name for this content type
  name: 'blogPost',
  
  // Display name in Sanity Studio
  title: 'Blog Post',
  
  // Type of content (document = a standalone piece of content)
  type: 'document',
  
  // Icon in the dashboard (optional)
  icon: () => '📰',
  
  // All the fields for a blog post
  fields: [
    // TITLE FIELD
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The headline of your blog post',
      validation: (Rule) => Rule.required().max(100),
    }),
    
    // SLUG FIELD (URL-friendly version)
    // Example: "Wizards Trade News" becomes "wizards-trade-news"
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Click "Generate" to create from title. This will be the URL.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    
    // EXCERPT FIELD (short description)
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'Short description that appears on the blog cards (2-3 sentences)',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    
    // FEATURED IMAGE
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      description: 'Main image for the blog post (recommended: 1200x800px)',
      options: {
        hotspot: true, // Allows you to select the important part of the image
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    
    // CATEGORY FIELD (NEWS, ANALYSIS, RUMOR MILL)
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Choose the type of content',
      options: {
        list: [
          { title: 'News', value: 'NEWS' },
          { title: 'Analysis', value: 'ANALYSIS' },
          { title: 'Rumor Mill', value: 'RUMOR MILL' },
        ],
        layout: 'radio', // Shows as radio buttons instead of dropdown
      },
      validation: (Rule) => Rule.required(),
    }),
    
    // CONTENT FIELD (rich text editor)
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      description: 'The full blog post content',
      of: [
        {
          type: 'block',
          // Styles available in the editor
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          // Text formatting options
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
        // Allow images in the content
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),
    
    // PUBLISHED DATE
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      description: 'When this post was/will be published',
      initialValue: () => new Date().toISOString(),
    }),
    
    // AUTHOR (optional for future)
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      description: 'Who wrote this post',
      initialValue: 'Washington WizKids',
    }),
  ],
  
  // Preview configuration (how posts appear in the list)
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'featuredImage',
      date: 'publishedAt',
    },
    prepare(selection) {
      const { title, category, media, date } = selection
      return {
        title: title,
        subtitle: `${category} • ${new Date(date).toLocaleDateString()}`,
        media: media,
      }
    },
  },
})



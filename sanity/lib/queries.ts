/**
 * Sanity Queries
 * This file contains all the queries to fetch data from Sanity
 * 
 * GROQ (Graph-Relational Object Queries) is Sanity's query language
 * It's similar to GraphQL but simpler
 * 
 * Query structure:
 * *[type == "blogPost"] - Get all documents of type blogPost
 * {fields} - Select which fields to return
 * [0...3] - Limit to first 3 results
 * | order(publishedAt desc) - Sort by date, newest first
 */

import { client } from './client'

/**
 * Get all blog posts
 * Returns: Array of blog posts, newest first, limited to 3 for homepage
 */
export async function getAllBlogPosts() {
  const query = `
    *[_type == "blogPost"] | order(publishedAt desc) [0...3] {
      _id,
      title,
      slug,
      excerpt,
      "featuredImage": featuredImage.asset->url,
      "featuredImageAlt": featuredImage.alt,
      category,
      publishedAt,
      author
    }
  `
  
  try {
    const posts = await client.fetch(query)
    return posts
  } catch (error) {
    console.error('Error fetching blog posts from Sanity:', error)
    return []
  }
}

/**
 * Get a single blog post by slug
 * For when you create individual blog post pages
 */
export async function getBlogPostBySlug(slug: string) {
  const query = `
    *[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      "featuredImage": featuredImage.asset->url,
      "featuredImageAlt": featuredImage.alt,
      category,
      content,
      publishedAt,
      author
    }
  `
  
  try {
    const post = await client.fetch(query, { slug })
    return post
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

/**
 * Get blog posts by category
 * For filtering NEWS, ANALYSIS, or RUMOR MILL
 */
export async function getBlogPostsByCategory(category: string) {
  const query = `
    *[_type == "blogPost" && category == $category] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      "featuredImage": featuredImage.asset->url,
      "featuredImageAlt": featuredImage.alt,
      category,
      publishedAt,
      author
    }
  `
  
  try {
    const posts = await client.fetch(query, { category })
    return posts
  } catch (error) {
    console.error('Error fetching posts by category:', error)
    return []
  }
}



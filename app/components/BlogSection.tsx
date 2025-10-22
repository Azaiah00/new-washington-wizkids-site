/**
 * BlogSection Component
 * The WizKids Wire - Latest news and analysis
 * 
 * Features:
 * - 3-column responsive grid
 * - Category tags (NEWS, ANALYSIS, RUMOR MILL)
 * - Card hover effects
 * - Fetches live data from Sanity CMS
 * - Falls back to static data if Sanity not configured yet
 * 
 * HOW THIS WORKS:
 * 1. This is now an async component (can fetch data before rendering)
 * 2. Tries to get posts from Sanity
 * 3. If Sanity isn't set up yet, uses static sample data
 * 4. Displays posts in the same grid layout
 */

import Image from 'next/image'
import { BLOG_POSTS } from '@/lib/data'
import { getAllBlogPosts } from '@/sanity/lib/queries'

export default async function BlogSection() {
  // Fetch blog posts from Sanity (or use fallback)
  // This runs on the server before the page is sent to the browser
  let posts = await getAllBlogPosts()
  
  // Fallback to static data if Sanity returns empty
  // (happens before you set up Sanity or if there's an error)
  if (!posts || posts.length === 0) {
    posts = BLOG_POSTS.map(post => ({
      _id: post.id,
      title: post.title,
      excerpt: post.excerpt,
      featuredImage: post.image,
      featuredImageAlt: post.title,
      category: post.category,
      slug: { current: '#' },
      publishedAt: new Date().toISOString(),
      author: 'Washington WizKids'
    }))
  }
  /**
   * Returns color class based on blog category
   */
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'NEWS':
        return 'text-wizards-red'
      case 'ANALYSIS':
        return 'text-blue-600'
      case 'RUMOR MILL':
        return 'text-purple-600'
      default:
        return 'text-wizards-red'
    }
  }

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-anton uppercase text-wizards-navy">
            The WizKids Wire
          </h2>
          <p className="max-w-2xl mx-auto mt-2 text-gray-600">
            Your one-stop-shop for the latest Wizards news, blog posts, and quick-hitting thoughts 
            from the WizKids crew. All facts, no fluff.
          </p>
        </header>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post._id}
              className="card-hover-effect bg-gray-50 rounded-lg shadow-md overflow-hidden"
            >
              {/* Post Thumbnail */}
              <div className="relative w-full h-48">
                <Image
                  src={post.featuredImage}
                  alt={post.featuredImageAlt || post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Post Content */}
              <div className="p-6">
                {/* Category Tag */}
                <span
                  className={`text-sm font-bold uppercase ${getCategoryColor(post.category)}`}
                >
                  {post.category}
                </span>

                {/* Post Title */}
                <h3 className="text-xl font-bold text-wizards-navy mt-1">
                  {post.title}
                </h3>

                {/* Post Excerpt */}
                <p className="mt-2 text-gray-600 text-sm">
                  {post.excerpt}
                </p>

                {/* Read More Link - Will link to full post page in future */}
                <a
                  href={`#`}
                  className="inline-block mt-3 text-sm text-wizards-navy font-bold hover:underline focus-outline"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


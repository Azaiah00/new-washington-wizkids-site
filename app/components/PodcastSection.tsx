/**
 * PodcastSection Component
 * Displays latest podcast segments in a responsive grid
 * 
 * Features:
 * - 3-column responsive grid (1 col mobile, 2 col tablet, 3 col desktop)
 * - Card hover effects (translateY and shadow)
 * - Placeholder images with alt text for accessibility
 * - Links to individual segments
 */

import Image from 'next/image'
import { PODCAST_SEGMENTS } from '@/lib/data'

export default function PodcastSection() {
  return (
    <section id="podcast" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-anton uppercase text-wizards-navy">
            Latest Segments
          </h2>
          <p className="max-w-2xl mx-auto mt-2 text-gray-600">
            We break down the games, debate the hot topics, and dive deep into the stats. 
            Catch up on our latest episodes or jump into a specific segment that catches your eye.
          </p>
        </header>

        {/* Podcast Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PODCAST_SEGMENTS.map((segment) => (
            <article
              key={segment.id}
              className="card-hover-effect bg-gray-50 rounded-lg shadow-md overflow-hidden"
            >
              {/* Segment Thumbnail */}
              <div className="relative w-full h-48">
                <Image
                  src={segment.image}
                  alt={segment.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Segment Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-wizards-navy">
                  {segment.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {segment.description}
                </p>
                <a
                  href={segment.link}
                  className="inline-block mt-4 text-wizards-red font-bold hover:underline focus-outline"
                >
                  Watch Segment →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


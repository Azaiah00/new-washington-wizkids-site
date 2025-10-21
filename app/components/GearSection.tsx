/**
 * GearSection Component
 * Affiliate product showcase with AdSense placeholder
 * 
 * Features:
 * - 4-column responsive grid
 * - Card hover effects
 * - Affiliate product links
 * - Google AdSense banner placeholder
 */

import Image from 'next/image'
import { AFFILIATE_PRODUCTS } from '@/lib/data'

export default function GearSection() {
  return (
    <section id="gear" className="py-20 bg-gray-200">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <header className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-anton uppercase text-wizards-navy">
            Gear Up Like a Pro
          </h2>
          <p className="max-w-2xl mx-auto mt-2 text-gray-600">
            Hand-picked gear and essentials for the dedicated Wizards fan. 
            Using our affiliate links helps support the show at no extra cost to you!
          </p>
        </header>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {AFFILIATE_PRODUCTS.map((product) => (
            <article
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-md card-hover-effect"
            >
              {/* Product Image */}
              <div className="relative w-full aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain rounded-md"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>

              {/* Product Name */}
              <h3 className="font-bold mt-2">{product.name}</h3>

              {/* Shop Link */}
              <a
                href={product.link}
                className="text-sm text-wizards-red font-semibold hover:underline focus-outline"
              >
                Shop Now
              </a>
            </article>
          ))}
        </div>

        {/* PLACEHOLDER: Google AdSense Banner */}
        {/* Replace this div with your Google AdSense ad code */}
        <div
          className="mt-16 bg-gray-300 h-24 w-full max-w-4xl mx-auto rounded flex items-center justify-center text-gray-500"
          id="google-adsense-placeholder"
        >
          <div className="text-center">
            <p className="font-semibold">📢 Google AdSense Placement</p>
            <p className="text-sm">
              Replace this div with your Google AdSense ad code (e.g., 728x90 banner)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

